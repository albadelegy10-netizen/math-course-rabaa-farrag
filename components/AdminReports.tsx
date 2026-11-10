
import React, { useState, useMemo } from 'react';
import { User, StudentGroup, CourseType, Lesson } from '../types';
import { authService } from '../authService';
import Reports from './Reports';
import { generateRescuePlan } from '../geminiService';
import { 
  BarChart3, 
  Users, 
  BookOpen, 
  Search, 
  Filter, 
  TrendingUp, 
  Brain,
  Send,
  Loader2,
  Calendar,
  CheckCircle2,
  XCircle,
  Clock,
  MessageCircle,
  Share2,
  ChevronRight
} from 'lucide-react';

interface AdminReportsProps {
  lessons?: Lesson[];
}

const AdminReports: React.FC<AdminReportsProps> = ({ lessons = [] }) => {
  const [activeTab, setActiveTab] = useState<'student' | 'course' | 'group'>('student');
  const [users, setUsers] = useState<User[]>(authService.getAllUsers());
  const [groups] = useState<StudentGroup[]>(authService.getGroups());

  // --- Student View Filters ---
  const [studentFilterCourse, setStudentFilterCourse] = useState<CourseType | ''>('');
  const [studentFilterGroupId, setStudentFilterGroupId] = useState<string>('');
  const [selectedStudentUsername, setSelectedStudentUsername] = useState<string>('');

  // --- Course/Group View Filters ---
  const [overviewSelectedCourse, setOverviewSelectedCourse] = useState<CourseType>('DSAT');
  const [overviewSelectedGroupId, setOverviewSelectedGroupId] = useState<string>('');

  // --- Actions State ---
  const [loadingPlan, setLoadingPlan] = useState(false);
  const [rescuePlan, setRescuePlan] = useState<{ studentMessage: string, parentMessage: string } | null>(null);
  
  // --- Report Sending State ---
  const [reportType, setReportType] = useState<'general' | 'weekly' | 'monthly'>('general');

  const students = useMemo(() => users.filter(u => u.role === 'student'), [users]);

  const handleUpdateUser = async (updatedUser: User) => {
      await authService.updateUser(updatedUser);
      setUsers(prevUsers => prevUsers.map(u => u.username === updatedUser.username ? updatedUser : u));
  };

  // --- Student Tab Logic: Hierarchical Filtering ---
  
  // 1. Filter Groups based on selected Course
  const availableGroupsForFilter = useMemo(() => {
    if (!studentFilterCourse) return groups;
    return groups.filter(g => g.course === studentFilterCourse);
  }, [groups, studentFilterCourse]);

  // 2. Filter Students based on Course AND Group
  const availableStudentsForSelection = useMemo(() => {
    return students.filter(s => {
      // Filter by Course
      if (studentFilterCourse && s.course !== studentFilterCourse) return false;
      
      // Filter by Group
      if (studentFilterGroupId) {
        const group = groups.find(g => g.id === studentFilterGroupId);
        if (group && !group.studentUsernames.includes(s.username)) return false;
      }
      return true;
    });
  }, [students, studentFilterCourse, studentFilterGroupId, groups]);

  const selectedStudent = useMemo(() => 
    students.find(u => u.username === selectedStudentUsername), 
  [students, selectedStudentUsername]);


  // --- Overview Logic (Course/Group Tabs) ---
  const filteredStudentsOverview = useMemo(() => {
    if (activeTab === 'course') {
      return students.filter(s => {
          const sCourses = s.courses || [];
          const sCourse = s.course || '';
          return sCourses.includes(overviewSelectedCourse as any) || sCourse === overviewSelectedCourse;
      });
    }
    if (activeTab === 'group') {
      const group = groups.find(g => g.id === overviewSelectedGroupId);
      return group ? students.filter(s => group.studentUsernames.includes(s.username)) : [];
    }
    return [];
  }, [activeTab, overviewSelectedCourse, overviewSelectedGroupId, students, groups]);

  const aggregateStats = useMemo(() => {
    if (filteredStudentsOverview.length === 0) return null;

    let totalScore = 0;
    let totalAttempts = 0;
    let totalAttendance = 0;
    let totalSessions = 0;

    filteredStudentsOverview.forEach(s => {
      if (s.history) {
        s.history.forEach(h => {
          totalScore += h.score;
          totalAttempts++;
        });
      }
      if (s.attendance) {
        totalSessions += s.attendance.length;
        totalAttendance += s.attendance.filter(a => a.status === 'present').length;
      }
    });

    return {
      avgScore: totalAttempts > 0 ? Math.round(totalScore / totalAttempts) : 0,
      attendanceRate: totalSessions > 0 ? Math.round((totalAttendance / totalSessions) * 100) : 0,
      studentCount: filteredStudentsOverview.length
    };
  }, [filteredStudentsOverview]);

  // --- Rescue Plan Action ---

  const handleGenerateRescuePlan = async () => {
    if (!selectedStudent) return;
    setLoadingPlan(true);
    setRescuePlan(null);

    // Calculate Stats
    const totalSessions = selectedStudent.attendance?.length || 0;
    const presentCount = selectedStudent.attendance?.filter(a => a.status === 'present').length || 0;
    const attendanceRate = totalSessions > 0 ? Math.round((presentCount / totalSessions) * 100) : 0;

    const attempts = selectedStudent.history || [];
    const avgScore = attempts.length > 0 
        ? Math.round(attempts.reduce((acc, c) => acc + c.score, 0) / attempts.length) 
        : 0;

    // Identify Weak Lessons
    const scoresByLesson: Record<string, number[]> = {};
    attempts.forEach(a => {
        if (!scoresByLesson[a.topicName]) scoresByLesson[a.topicName] = [];
        scoresByLesson[a.topicName].push(a.score);
    });
    
    const weakLessons = Object.entries(scoresByLesson)
        .map(([name, scores]) => ({ 
            name, 
            avg: scores.reduce((a, b) => a + b, 0) / scores.length 
        }))
        .sort((a, b) => a.avg - b.avg)
        .slice(0, 3)
        .map(l => l.name);

    if (weakLessons.length === 0) weakLessons.push("General Practice");

    // Call AI
    const plan = await generateRescuePlan(
        selectedStudent.name || selectedStudent.username, 
        attendanceRate, 
        avgScore, 
        weakLessons
    );

    setRescuePlan(plan);
    setLoadingPlan(false);
  };

  const handleSendWhatsapp = (message: string, number?: string) => {
    if (!number) {
        alert("No WhatsApp number found for this user.");
        return;
    }
    const cleanNum = number.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${cleanNum}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // --- Report Generation Logic ---
  const handleSendReport = () => {
    if (!selectedStudent || !selectedStudent.parentWhatsapp) {
      alert("No parent WhatsApp number available for this student.");
      return;
    }

    const now = Date.now();
    let timeLimit = 0;
    let periodName = "All Time";

    if (reportType === 'weekly') {
      timeLimit = now - (7 * 24 * 60 * 60 * 1000);
      periodName = "Weekly Report (Last 7 Days)";
    } else if (reportType === 'monthly') {
      timeLimit = now - (30 * 24 * 60 * 60 * 1000);
      periodName = "Monthly Report (Last 30 Days)";
    }

    // Filter Data based on time
    const relevantAttempts = (selectedStudent.history || []).filter(h => h.timestamp >= timeLimit);
    const relevantAttendance = (selectedStudent.attendance || []).filter(a => a.timestamp >= timeLimit);

    // Calc Stats
    const totalTaken = relevantAttempts.length;
    const avgScore = totalTaken > 0 
      ? Math.round(relevantAttempts.reduce((acc, c) => acc + c.score, 0) / totalTaken)
      : 0;
    
    const present = relevantAttendance.filter(a => a.status === 'present').length;
    const absent = relevantAttendance.filter(a => a.status === 'absent').length;
    const late = relevantAttendance.filter(a => a.status === 'late').length;

    // Status Determination
    let status = "Steady Progress";
    if (avgScore >= 85) status = "Excellent ⭐";
    else if (avgScore >= 70) status = "Good ✅";
    else if (avgScore < 50 && totalTaken > 0) status = "Needs Attention ⚠️";

    // Construct Message
    const message = `📊 *Student Progress Report*\n` +
      `Student: ${selectedStudent.name || selectedStudent.username}\n` +
      `Course: ${selectedStudent.course || 'N/A'}\n` +
      `Period: ${periodName}\n\n` +
      `*Academic Performance:*\n` +
      `• Quizzes Taken: ${totalTaken}\n` +
      `• Average Score: ${avgScore}%\n` +
      `• Status: ${status}\n\n` +
      `*Attendance:*\n` +
      `• Present: ${present}\n` +
      `• Absent: ${absent}\n` +
      `• Late: ${late}\n\n` +
      `_Generated with Eng Rabaa Farrag Academy_`;

    handleSendWhatsapp(message, selectedStudent.parentWhatsapp);
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Admin Reports & Analytics</h2>
        <p className="text-gray-500">Monitor academy performance, analyze student progress, and generate AI rescue plans.</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-xl mb-8 w-full sm:w-fit overflow-x-auto">
        <button 
            onClick={() => setActiveTab('student')}
            className={`px-4 sm:px-6 py-2 rounded-lg text-sm font-bold whitespace-nowrap flex-shrink-0 transition-all flex items-center ${activeTab === 'student' ? 'bg-white text-purple-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
        >
            <Users className="w-4 h-4 mr-2" />
            Individual Student
        </button>
        <button 
            onClick={() => setActiveTab('course')}
            className={`px-4 sm:px-6 py-2 rounded-lg text-sm font-bold whitespace-nowrap flex-shrink-0 transition-all flex items-center ${activeTab === 'course' ? 'bg-white text-purple-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
        >
            <BookOpen className="w-4 h-4 mr-2" />
            Course Overview
        </button>
        <button 
            onClick={() => setActiveTab('group')}
            className={`px-4 sm:px-6 py-2 rounded-lg text-sm font-bold whitespace-nowrap flex-shrink-0 transition-all flex items-center ${activeTab === 'group' ? 'bg-white text-purple-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
        >
            <Filter className="w-4 h-4 mr-2" />
            Group Analytics
        </button>
      </div>

      {/* --- STUDENT VIEW --- */}
      {activeTab === 'student' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 [&>*]:min-w-0">
            <div className="lg:col-span-3 space-y-6">
                
                {/* 3-Step Filter Panel */}
                <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-4">
                    <h3 className="font-bold text-gray-900 flex items-center border-b border-gray-100 pb-2 mb-2">
                        <Filter className="w-4 h-4 mr-2 text-purple-600" />
                        Find Student
                    </h3>

                    {/* 1. Course Filter */}
                    <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Step 1: Course</label>
                        <select 
                            value={studentFilterCourse}
                            onChange={(e) => {
                                setStudentFilterCourse(e.target.value as CourseType);
                                setStudentFilterGroupId('');
                                setSelectedStudentUsername('');
                            }}
                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl p-2.5 text-sm font-bold focus:ring-2 focus:ring-purple-500 outline-none"
                        >
                            <option value="">All Courses</option>
                            <option value="DSAT">DSAT</option>
                            <option value="EST1">EST 1</option>
                            <option value="EST2">EST 2</option>
                            <option value="ACT1">ACT 1</option>
                            <option value="ACT2">ACT 2</option>
                            <option value="GEOMETRY">Geometry</option>
                        </select>
                    </div>

                    {/* 2. Group Filter */}
                    <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Step 2: Group (Optional)</label>
                        <select 
                            value={studentFilterGroupId}
                            onChange={(e) => {
                                setStudentFilterGroupId(e.target.value);
                                setSelectedStudentUsername('');
                            }}
                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl p-2.5 text-sm font-bold focus:ring-2 focus:ring-purple-500 outline-none"
                        >
                            <option value="">All Groups</option>
                            {availableGroupsForFilter.map(g => (
                                <option key={g.id} value={g.id}>{g.name}</option>
                            ))}
                        </select>
                    </div>

                    {/* 3. Student Selection */}
                    <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Step 3: Student</label>
                        <div className="relative">
                            <select
                                value={selectedStudentUsername}
                                onChange={(e) => {
                                    setSelectedStudentUsername(e.target.value);
                                    setRescuePlan(null);
                                }}
                                className="w-full appearance-none bg-purple-600 text-white border border-purple-700 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:ring-2 focus:ring-purple-400 font-bold shadow-md transition-all"
                            >
                                <option value="" className="bg-white text-gray-900">-- Select Student ({availableStudentsForSelection.length}) --</option>
                                {availableStudentsForSelection.map(u => (
                                    <option key={u.username} value={u.username} className="bg-white text-gray-900">
                                        {u.name || u.username}
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                                <Search className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>

                {selectedStudent && (
                    <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm animate-in slide-in-from-left-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                            <Clock className="w-5 h-5 mr-2 text-purple-600" />
                            Quick Attendance
                        </h3>
                        
                        <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-green-50 rounded-xl border border-green-100">
                                <span className="text-sm font-bold text-green-700 flex items-center"><CheckCircle2 className="w-4 h-4 mr-2" /> Present</span>
                                <span className="text-xl font-black text-green-700">
                                    {selectedStudent.attendance?.filter(a => a.status === 'present').length || 0}
                                </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-red-50 rounded-xl border border-red-100">
                                <span className="text-sm font-bold text-red-700 flex items-center"><XCircle className="w-4 h-4 mr-2" /> Absent</span>
                                <span className="text-xl font-black text-red-700">
                                    {selectedStudent.attendance?.filter(a => a.status === 'absent').length || 0}
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="lg:col-span-9">
                {selectedStudent ? (
                    <div className="space-y-8 animate-in slide-in-from-bottom-4">
                        
                        {/* Parent Communication Card */}
                        <div className="bg-white rounded-3xl border border-green-200 shadow-sm p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -mr-10 -mt-10 opacity-50"></div>
                            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 flex items-center">
                                        <MessageCircle className="w-6 h-6 mr-2 text-green-600" />
                                        Send Report to Parent
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Generates a formatted summary and opens WhatsApp.
                                        {selectedStudent.parentWhatsapp 
                                            ? <span className="text-green-600 font-bold ml-1">✓ Number Available</span> 
                                            : <span className="text-red-500 font-bold ml-1">⚠ No Parent Number</span>}
                                    </p>
                                </div>

                                <div className="flex items-center bg-gray-100 p-1.5 rounded-xl">
                                    <button 
                                        onClick={() => setReportType('general')}
                                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${reportType === 'general' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                                    >
                                        General
                                    </button>
                                    <button 
                                        onClick={() => setReportType('weekly')}
                                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${reportType === 'weekly' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                                    >
                                        Weekly
                                    </button>
                                    <button 
                                        onClick={() => setReportType('monthly')}
                                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${reportType === 'monthly' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                                    >
                                        Monthly
                                    </button>
                                </div>

                                <button 
                                    onClick={handleSendReport}
                                    disabled={!selectedStudent.parentWhatsapp}
                                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-green-100 flex items-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Share2 className="w-5 h-5 mr-2" />
                                    Send via WhatsApp
                                </button>
                            </div>
                        </div>

                        {/* Reports Component Reuse */}
                        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                            <div className="p-2">
                                <Reports 
                                    user={selectedStudent} 
                                    lessons={lessons} 
                                    isEditable={true}
                                    onUpdateUser={handleUpdateUser}
                                />
                            </div>
                        </div>

                        {/* Rescue Plan Generator */}
                        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-bold flex items-center">
                                        <Brain className="w-8 h-8 mr-3 text-yellow-400" />
                                        AI Intervention Center
                                    </h3>
                                    {!rescuePlan && (
                                        <button 
                                            onClick={handleGenerateRescuePlan}
                                            disabled={loadingPlan}
                                            className="bg-white text-indigo-900 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-lg flex items-center disabled:opacity-70"
                                        >
                                            {loadingPlan ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : <TrendingUp className="w-5 h-5 mr-2" />}
                                            {loadingPlan ? 'Generating...' : 'Generate Rescue Plan'}
                                        </button>
                                    )}
                                </div>

                                <p className="text-indigo-200 max-w-2xl mb-6">
                                    Generate a personalized action plan based on {selectedStudent.name}'s performance, attendance, and specific topic weaknesses.
                                </p>

                                {rescuePlan && (
                                    <div className="grid md:grid-cols-2 gap-6 animate-in slide-in-from-bottom-4">
                                        {/* Student Message */}
                                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                            <div className="flex justify-between items-center mb-4">
                                                <h4 className="font-bold text-lg text-yellow-300">Message to Student</h4>
                                                <button 
                                                    onClick={() => handleSendWhatsapp(rescuePlan.studentMessage, selectedStudent.whatsapp)}
                                                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center transition-colors"
                                                >
                                                    <Send className="w-3 h-3 mr-1" /> WhatsApp
                                                </button>
                                            </div>
                                            <textarea 
                                                value={rescuePlan.studentMessage}
                                                onChange={(e) => setRescuePlan({...rescuePlan, studentMessage: e.target.value})}
                                                className="w-full bg-black/20 rounded-xl p-4 text-sm text-indigo-50 min-h-[200px] border border-white/10 outline-none focus:border-white/30"
                                            />
                                        </div>

                                        {/* Parent Message */}
                                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                            <div className="flex justify-between items-center mb-4">
                                                <h4 className="font-bold text-lg text-green-300">Message to Parent</h4>
                                                <button 
                                                    onClick={() => handleSendWhatsapp(rescuePlan.parentMessage, selectedStudent.parentWhatsapp)}
                                                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center transition-colors"
                                                >
                                                    <Send className="w-3 h-3 mr-1" /> WhatsApp
                                                </button>
                                            </div>
                                            <textarea 
                                                value={rescuePlan.parentMessage}
                                                onChange={(e) => setRescuePlan({...rescuePlan, parentMessage: e.target.value})}
                                                className="w-full bg-black/20 rounded-xl p-4 text-sm text-indigo-50 min-h-[200px] border border-white/10 outline-none focus:border-white/30"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-[400px] bg-white rounded-3xl border border-gray-200 text-gray-400">
                        <Search className="w-16 h-16 mb-4 opacity-20" />
                        <p className="text-lg font-medium">Use the filters on the left to find a student.</p>
                    </div>
                )}
            </div>
        </div>
      )}

      {/* --- COURSE / GROUP OVERVIEW VIEW --- */}
      {(activeTab === 'course' || activeTab === 'group') && (
          <div className="space-y-8">
              <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm max-w-md">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                      Select {activeTab === 'course' ? 'Course' : 'Group'}
                  </label>
                  {activeTab === 'course' ? (
                      <select 
                        value={overviewSelectedCourse}
                        onChange={(e) => setOverviewSelectedCourse(e.target.value as CourseType)}
                        className="w-full p-3 border border-gray-200 rounded-xl font-bold text-gray-700"
                      >
                          <option value="DSAT">DSAT</option>
                          <option value="EST1">EST 1</option>
                          <option value="EST2">EST 2</option>
                          <option value="ACT1">ACT 1</option>
                          <option value="ACT2">ACT 2</option>
                          <option value="GEOMETRY">Geometry</option>
                      </select>
                  ) : (
                      <select 
                        value={overviewSelectedGroupId}
                        onChange={(e) => setOverviewSelectedGroupId(e.target.value)}
                        className="w-full p-3 border border-gray-200 rounded-xl font-bold text-gray-700"
                      >
                          <option value="">-- Select Group --</option>
                          {groups.map(g => (
                              <option key={g.id} value={g.id}>{g.name} ({g.course})</option>
                          ))}
                      </select>
                  )}
              </div>

              {aggregateStats ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm flex items-center space-x-4">
                            <div className="p-4 bg-purple-50 text-purple-600 rounded-2xl">
                                <Users className="w-8 h-8" />
                            </div>
                            <div>
                                <p className="text-gray-500 font-bold text-sm uppercase">Total Students</p>
                                <p className="text-4xl font-black text-gray-900">{aggregateStats.studentCount}</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm flex items-center space-x-4">
                            <div className={`p-4 rounded-2xl ${aggregateStats.avgScore >= 70 ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}`}>
                                <BarChart3 className="w-8 h-8" />
                            </div>
                            <div>
                                <p className="text-gray-500 font-bold text-sm uppercase">Avg Performance</p>
                                <p className="text-4xl font-black text-gray-900">{aggregateStats.avgScore}%</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm flex items-center space-x-4">
                            <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
                                <Calendar className="w-8 h-8" />
                            </div>
                            <div>
                                <p className="text-gray-500 font-bold text-sm uppercase">Attendance Rate</p>
                                <p className="text-4xl font-black text-gray-900">{aggregateStats.attendanceRate}%</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                            <h3 className="font-bold text-gray-900">Student Leaderboard</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-bold">
                                    <tr>
                                        <th className="px-6 py-4">Student</th>
                                        <th className="px-6 py-4 text-center">Avg Score</th>
                                        <th className="px-6 py-4 text-center">Attendance</th>
                                        <th className="px-6 py-4 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredStudentsOverview.map(student => {
                                        const score = student.history && student.history.length > 0 
                                            ? Math.round(student.history.reduce((a,b) => a + b.score, 0) / student.history.length)
                                            : 0;
                                        const att = student.attendance && student.attendance.length > 0
                                            ? Math.round((student.attendance.filter(a => a.status === 'present').length / student.attendance.length) * 100)
                                            : 0;
                                        
                                        return (
                                            <tr key={student.username} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4 flex items-center space-x-3">
                                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0 border border-gray-200">
                                                        {student.profilePicture ? (
                                                            <img src={student.profilePicture} alt={student.username} className="w-full h-full object-cover" />
                                                        ) : (
                                                            <span className="font-bold text-gray-500 text-sm">
                                                                {student.name ? student.name.charAt(0).toUpperCase() : student.username.charAt(0).toUpperCase()}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-gray-900">{student.name || student.username}</div>
                                                        <div className="text-xs text-gray-400">@{student.username}</div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <span className={`px-2 py-1 rounded text-xs font-bold ${score >= 70 ? 'bg-green-100 text-green-700' : score >= 50 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                                                        {score}%
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-center font-bold text-gray-600">
                                                    {att}%
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <button 
                                                        onClick={() => {
                                                            // Populate the student filters to match this student's context
                                                            setStudentFilterCourse(student.course || '');
                                                            // We don't necessarily know which group they are in just from user object here easily without lookup, 
                                                            // so we just reset group filter to ensure they show up.
                                                            setStudentFilterGroupId(''); 
                                                            setSelectedStudentUsername(student.username);
                                                            setActiveTab('student');
                                                        }}
                                                        className="text-xs font-bold text-purple-600 hover:underline flex items-center justify-end"
                                                    >
                                                        View Detail <ChevronRight className="w-3 h-3 ml-1" />
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                  </>
              ) : (
                  <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                      <Filter className="w-16 h-16 mb-4 opacity-20" />
                      <p>No data found for this selection.</p>
                  </div>
              )}
          </div>
      )}
    </div>
  );
};

export default AdminReports;
