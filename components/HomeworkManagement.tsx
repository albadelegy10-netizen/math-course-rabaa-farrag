
import React, { useState, useEffect } from 'react';
import { User, StudentGroup, Lesson, CourseType } from '../types';
import { authService } from '../authService';
import { 
  FileText, 
  Users, 
  Save, 
  CheckCircle2, 
  CheckSquare, 
  Square,
  AlertCircle,
  Search,
  Loader2,
  UserCheck,
  UserX,
  Sparkles
} from 'lucide-react';

interface HomeworkManagementProps {
  lessons: Lesson[];
}

const HomeworkManagement: React.FC<HomeworkManagementProps> = ({ lessons }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [groups, setGroups] = useState<StudentGroup[]>([]);
  
  // Filter State
  const [course, setCourse] = useState<CourseType | 'ALL'>('ALL');
  const [selectedLessonIds, setSelectedLessonIds] = useState<string[]>([]);
  
  // Assignment Form State
  const [dueDate, setDueDate] = useState('');
  const [availableDate, setAvailableDate] = useState(new Date().toISOString().split('T')[0]);
  const [maxAttempts, setMaxAttempts] = useState(3);
  const [notes, setNotes] = useState('');
  const [selectedStudentUsernames, setSelectedStudentUsernames] = useState<string[]>([]);
  const [selectedGroupIds, setSelectedGroupIds] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [assignToFreeAccounts, setAssignToFreeAccounts] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // UI
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  useEffect(() => {
    loadData();
    const unsubscribe = authService.subscribe(loadData);
    return () => unsubscribe();
  }, []);

  const loadData = () => {
    setUsers([...authService.getAllUsers().filter(u => u.role === 'student')]);
    setGroups([...authService.getGroups()]);
  };

  const [studentTab, setStudentTab] = useState<'active' | 'inactive' | 'free'>('active');

  const activeStudentsCount = users.filter(u => u.isActive !== false && u.tier === 'premium').length;
  const inactiveStudentsCount = users.filter(u => u.isActive === false).length;
  const freeStudentsCount = users.filter(u => (u.tier === 'free' || !u.tier) && u.isActive !== false).length;

  // Modify filter: If course is ALL or GEOMETRY, show ALL students. Otherwise, filter by specific course.
  const filteredStudents = (course === 'ALL' || course === 'GEOMETRY' 
    ? users 
    : users.filter(u => {
        const uCourses = u.courses || [];
        const uCourse = u.course || '';
        return uCourses.includes(course as CourseType) || uCourse === (course as string);
    }))
    .filter(u => {
        if (studentTab === 'active') return u.isActive !== false && u.tier === 'premium';
        if (studentTab === 'inactive') return u.isActive === false;
        if (studentTab === 'free') return (u.tier === 'free' || !u.tier) && u.isActive !== false;
        return true;
    })
    .filter(u => {
        if (!searchTerm) return true;
        const term = searchTerm.toLowerCase();
        return (u.name?.toLowerCase().includes(term) || u.username.toLowerCase().includes(term));
    });

  const filteredGroups = course === 'ALL' ? groups : groups.filter(g => g.course === course);
  
  // Filter lessons for the dropdown
  const filteredLessons = lessons.filter(l => {
      if (course === 'ALL') return true;
      if (l.course) return l.course === course;
      // Fallback logic for legacy IDs if needed
      if (course === 'DSAT' && l.id.startsWith('sat_')) return true;
      if (course === 'EST1' && l.id.startsWith('est1_')) return true;
      if (course === 'EST2' && l.id.startsWith('est2_')) return true;
      if (course === 'ACT1' && l.id.startsWith('act1_')) return true;
      if (course === 'ACT2' && l.id.startsWith('act2_')) return true;
      if (course === 'GEOMETRY' && l.id.startsWith('geo_')) return true;
      return false;
  });

  const toggleStudentSelection = (username: string) => {
    if (selectedStudentUsernames.includes(username)) {
      setSelectedStudentUsernames(selectedStudentUsernames.filter(u => u !== username));
    } else {
      setSelectedStudentUsernames([...selectedStudentUsernames, username]);
    }
  };

  const selectGroup = (groupId: string) => {
      const group = groups.find(g => g.id === groupId);
      if (group) {
          // Add all students from group that are not already selected
          const newSelection = [...selectedStudentUsernames];
          group.studentUsernames.forEach(u => {
              if (!newSelection.includes(u)) newSelection.push(u);
          });
          setSelectedStudentUsernames(newSelection);
          if (!selectedGroupIds.includes(groupId)) {
              setSelectedGroupIds([...selectedGroupIds, groupId]);
          }
      }
  };

  const selectAll = () => {
      if (selectedStudentUsernames.length === filteredStudents.length) {
          setSelectedStudentUsernames([]);
      } else {
          setSelectedStudentUsernames(filteredStudents.map(u => u.username));
      }
  };

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (selectedLessonIds.length === 0) {
          setMessage({ type: 'error', text: 'Please select at least one material.' });
          return;
      }
      
      setIsSubmitting(true);
      setMessage(null);

      try {
        if (assignToFreeAccounts) {
            if (course === 'ALL') {
                setMessage({ type: 'error', text: 'Please select a specific course to assign global free homework.' });
                return;
            }
            const success = await authService.assignFreeHomework(
                course as CourseType,
                selectedLessonIds,
                availableDate
            );
            if (success) {
                setMessage({ type: 'success', text: `Global Homework assigned to all free accounts.` });
                setSelectedLessonIds([]);
                setAssignToFreeAccounts(false);
            } else {
                setMessage({ type: 'error', text: 'Failed to assign global free homework.' });
            }
            return;
        }
        
        if (selectedStudentUsernames.length === 0) {
            setMessage({ type: 'error', text: 'Please select at least one student.' });
            return;
        }
        if (!dueDate) {
            setMessage({ type: 'error', text: 'Please set a due date.' });
            return;
        }

        let remainingUsernames = [...selectedStudentUsernames];
        
        for (const groupId of selectedGroupIds) {
            const group = groups.find(g => g.id === groupId);
            if (group) {
                const targetUsernames = group.studentUsernames.filter(u => remainingUsernames.includes(u));
                if (targetUsernames.length > 0) {
                    for (const lessonId of selectedLessonIds) {
                        const lesson = lessons.find(l => l.id === lessonId);
                        const type = lesson?.type === 'exam' ? 'exam' : 'lesson';
                        
                        await authService.assignToGroup(groupId, {
                            type,
                            title: lesson?.title || lessonId,
                            lessonId,
                            dueDate,
                            notes,
                            availableDate,
                            maxAttempts,
                            targetStudentUsernames: targetUsernames
                        });
                    }
                    
                    // Remove these users from remaining list so they don't get double assigned
                    remainingUsernames = remainingUsernames.filter(u => !targetUsernames.includes(u));
                }
            }
        }

        if (remainingUsernames.length > 0) {
            const lessonDetails = selectedLessonIds.map(lid => {
              const l = lessons.find(less => less.id === lid);
              return {
                id: lid,
                course: (l?.course as CourseType) || (course === 'ALL' ? undefined : (course as CourseType)),
                title: l?.title,
                type: l?.type
              };
            });

            await authService.batchAssignHomework(
                remainingUsernames, 
                (course === 'ALL' ? 'DSAT' : course) as CourseType,
                selectedLessonIds,
                dueDate,
                maxAttempts,
                notes,
                availableDate,
                lessonDetails
            );
        }

        setMessage({ type: 'success', text: `Homework assigned successfully to selected students.` });
        setSelectedStudentUsernames([]);
        setSelectedGroupIds([]);
        setSelectedLessonIds([]);
        setNotes('');
        setUsers([...authService.getAllUsers().filter(u => u.role === 'student')]);
      } catch (err: any) {
        console.error("Assign homework error:", err);
        setMessage({ type: 'error', text: 'Failed to assign homework. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Homework Management</h2>
        <p className="text-gray-500">Assign lessons or exams to students and set deadlines.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 [&>*]:min-w-0">
        {/* Left: Configuration Form */}
        <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-purple-600" /> Assignment Details
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Course Selector */}
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Target Course</label>
                        <select 
                            value={course}
                            onChange={(e) => {
                                setCourse(e.target.value as CourseType | 'ALL');
                                setSelectedStudentUsernames([]);
                                setSelectedLessonIds([]);
                            }}
                            className="w-full p-2.5 border border-gray-200 rounded-xl font-bold text-gray-700 bg-gray-50 focus:ring-2 focus:ring-purple-500 outline-none"
                        >
                            <option value="ALL">All Courses</option>
                            <option value="DSAT">DSAT</option>
                            <option value="EST1">EST 1</option>
                            <option value="EST2">EST 2</option>
                            <option value="ACT1">ACT 1</option>
                            <option value="ACT2">ACT 2</option>
                            <option value="GEOMETRY">Geometry</option>
                        </select>
                    </div>

                    {/* Lesson Selector */}
                    <div>
                        <div className="flex justify-between items-end mb-1">
                            <label className="block text-xs font-bold text-gray-500 uppercase">Select Material(s)</label>
                            <button 
                                type="button"
                                onClick={() => {
                                    if (selectedLessonIds.length === filteredLessons.length) {
                                        setSelectedLessonIds([]);
                                    } else {
                                        setSelectedLessonIds(filteredLessons.map(l => l.id));
                                    }
                                }}
                                className="text-[10px] font-bold text-purple-600 hover:text-purple-800"
                            >
                                {selectedLessonIds.length === filteredLessons.length ? 'Deselect All' : 'Select All'}
                            </button>
                        </div>
                        <div className="w-full border border-gray-200 rounded-xl bg-gray-50 overflow-y-auto p-2" style={{ maxHeight: '200px' }}>
                            {filteredLessons.map(l => (
                                <div 
                                    key={l.id} 
                                    className="flex items-center space-x-2 p-1.5 hover:bg-gray-100 rounded cursor-pointer transition-colors"
                                    onClick={() => {
                                        if (selectedLessonIds.includes(l.id)) {
                                            setSelectedLessonIds(prev => prev.filter(id => id !== l.id));
                                        } else {
                                            setSelectedLessonIds(prev => [...prev, l.id]);
                                        }
                                    }}
                                >
                                    <div className={`text-purple-600 ${selectedLessonIds.includes(l.id) ? 'opacity-100' : 'opacity-30'}`}>
                                        {selectedLessonIds.includes(l.id) ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4" />}
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">{l.title}</span>
                                </div>
                            ))}
                            {filteredLessons.length === 0 && (
                                <div className="text-xs text-gray-400 p-2 text-center">No materials found for this course.</div>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center space-x-2 py-2">
                        <input
                            type="checkbox"
                            checked={assignToFreeAccounts}
                            onChange={(e) => setAssignToFreeAccounts(e.target.checked)}
                            id="free-hw-checkbox"
                            className="w-4 h-4 text-purple-600 rounded"
                        />
                        <label htmlFor="free-hw-checkbox" className="text-sm font-bold text-gray-700 select-none cursor-pointer">
                            Assign to all Free Accounts <span className="text-xs text-gray-400 font-normal">(No Due Date)</span>
                        </label>
                    </div>

                    {/* Dates */}
                    <div className={`grid grid-cols-2 gap-3 transition-opacity ${assignToFreeAccounts ? 'opacity-50 pointer-events-none' : ''}`}>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Available From</label>
                            <input 
                                type="date"
                                value={availableDate}
                                onChange={(e) => setAvailableDate(e.target.value)}
                                className="w-full p-2 border border-gray-200 rounded-lg text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Due Date</label>
                            <input 
                                type="date"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                                className="w-full p-2 border border-gray-200 rounded-lg text-sm"
                            />
                        </div>
                    </div>

                    {/* Settings */}
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Max Attempts</label>
                        <input 
                            type="number"
                            min="1"
                            max="10"
                            value={maxAttempts}
                            onChange={(e) => setMaxAttempts(parseInt(e.target.value))}
                            className="w-full p-2 border border-gray-200 rounded-lg text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Instructions (Optional)</label>
                        <textarea 
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            className="w-full p-2 border border-gray-200 rounded-lg text-sm"
                            rows={3}
                            placeholder="e.g. Focus on questions 1-10..."
                        />
                    </div>

                    {message && (
                        <div className={`p-3 rounded-xl text-sm font-bold flex items-start ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                            {message.type === 'success' ? <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5" /> : <AlertCircle className="w-4 h-4 mr-2 mt-0.5" />}
                            {message.text}
                        </div>
                    )}

                    <button 
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 text-white rounded-xl font-bold shadow-lg transition-all flex items-center justify-center ${
                          isSubmitting ? 'bg-purple-400 cursor-not-allowed opacity-80' : 'bg-purple-600 hover:bg-purple-700'
                        }`}
                    >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Assigning Homework...
                          </>
                        ) : (
                          <>
                            <Save className="w-4 h-4 mr-2" /> Assign Homework
                          </>
                        )}
                    </button>
                </form>
            </div>

            {/* Free Homework Summary */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm mt-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-900 flex items-center">
                        <Users className="w-5 h-5 mr-2 text-blue-600" /> Active Free Homework
                    </h3>
                    <button
                        type="button"
                        onClick={async () => {
                            if (confirm('Are you sure you want to clear all global free homework?')) {
                                await authService.clearFreeHomework();
                                setMessage({ type: 'success', text: 'Free homework cleared.' });
                            }
                        }}
                        className="text-xs text-red-600 font-bold hover:underline"
                    >
                        Clear All
                    </button>
                </div>
                <div className="text-sm text-gray-600 space-y-2">
                    {authService.getFreeHomework().length > 0 ? (
                        authService.getFreeHomework().map(hw => {
                            const lesson = lessons.find(l => l.id === hw.lessonId);
                            return (
                                <div key={hw.id} className="p-2 bg-gray-50 rounded-lg flex items-center justify-between border border-gray-100">
                                    <span className="font-medium text-gray-800">{lesson?.title || hw.lessonId}</span>
                                    <span className="text-xs text-gray-400 bg-white px-2 py-1 rounded border border-gray-100">{hw.course}</span>
                                </div>
                            );
                        })
                    ) : (
                        <div className="text-gray-400 italic p-2 text-center">No free homework currently assigned.</div>
                    )}
                </div>
            </div>
        </div>

        {/* Right: Student Selection */}
        <div className={`lg:col-span-8 space-y-6 transition-opacity ${assignToFreeAccounts ? 'opacity-50 pointer-events-none' : ''}`}>
            {/* Quick Groups */}
            {filteredGroups.length > 0 && (
                <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest">
                            Quick Select Active Groups
                        </label>
                        <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                            {filteredGroups.filter(g => (g.status || 'active') === 'active').length} Active
                        </span>
                    </div>

                    {/* Active Groups */}
                    <div className="flex flex-wrap gap-2">
                        {filteredGroups.filter(g => (g.status || 'active') === 'active').map(g => {
                            const isSelected = selectedGroupIds.includes(g.id);
                            return (
                                <button
                                    key={g.id}
                                    type="button"
                                    onClick={() => selectGroup(g.id)}
                                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center space-x-1.5 shadow-sm ${
                                        isSelected 
                                            ? 'bg-emerald-600 text-white border-emerald-600 ring-2 ring-emerald-200' 
                                            : 'bg-emerald-50/80 text-emerald-800 hover:bg-emerald-100 border-emerald-200'
                                    }`}
                                >
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span>{g.name}</span>
                                    <span className="opacity-75 font-normal text-[11px]">({g.studentUsernames.length} students)</span>
                                </button>
                            );
                        })}

                        {filteredGroups.filter(g => (g.status || 'active') === 'active').length === 0 && (
                            <span className="text-xs text-gray-400 italic">No active groups found for this course.</span>
                        )}
                    </div>

                    {/* Inactive Groups (if any exist) */}
                    {filteredGroups.filter(g => g.status === 'inactive').length > 0 && (
                        <div className="pt-2 border-t border-gray-100">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Inactive Groups (Course Finished)</span>
                            <div className="flex flex-wrap gap-2">
                                {filteredGroups.filter(g => g.status === 'inactive').map(g => {
                                    const isSelected = selectedGroupIds.includes(g.id);
                                    return (
                                        <button
                                            key={g.id}
                                            type="button"
                                            onClick={() => selectGroup(g.id)}
                                            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors border ${
                                                isSelected 
                                                    ? 'bg-amber-600 text-white border-amber-600' 
                                                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border-gray-200'
                                            }`}
                                        >
                                            <span>{g.name}</span>
                                            <span className="text-[10px] opacity-75 ml-1">({g.studentUsernames.length})</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            )}

            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-[600px]">
                <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex flex-col space-y-4">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-gray-900 flex items-center">
                            <Users className="w-5 h-5 mr-2 text-gray-500" />
                            Select Students ({selectedStudentUsernames.length} / {filteredStudents.length})
                        </h3>
                        <button 
                            onClick={selectAll}
                            className="text-xs font-bold text-purple-600 hover:bg-purple-50 px-3 py-1.5 rounded-lg transition-colors"
                        >
                            {selectedStudentUsernames.length === filteredStudents.length ? 'Deselect All' : 'Select All'}
                        </button>
                    </div>

                    {/* 3 Student Status Tabs */}
                    <div className="grid grid-cols-3 gap-2 bg-gray-100/80 p-1 rounded-2xl border border-gray-200">
                        <button
                            type="button"
                            onClick={() => setStudentTab('active')}
                            className={`flex items-center justify-center space-x-1 py-2 px-2 rounded-xl text-xs font-bold transition-all ${
                                studentTab === 'active'
                                    ? 'bg-emerald-600 text-white shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                            }`}
                        >
                            <UserCheck className="w-3.5 h-3.5" />
                            <span className="truncate">Active</span>
                            <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-black ${studentTab === 'active' ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800'}`}>
                                {activeStudentsCount}
                            </span>
                        </button>

                        <button
                            type="button"
                            onClick={() => setStudentTab('inactive')}
                            className={`flex items-center justify-center space-x-1 py-2 px-2 rounded-xl text-xs font-bold transition-all ${
                                studentTab === 'inactive'
                                    ? 'bg-amber-600 text-white shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                            }`}
                        >
                            <UserX className="w-3.5 h-3.5" />
                            <span className="truncate">Inactive</span>
                            <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-black ${studentTab === 'inactive' ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800'}`}>
                                {inactiveStudentsCount}
                            </span>
                        </button>

                        <button
                            type="button"
                            onClick={() => setStudentTab('free')}
                            className={`flex items-center justify-center space-x-1 py-2 px-2 rounded-xl text-xs font-bold transition-all ${
                                studentTab === 'free'
                                    ? 'bg-indigo-600 text-white shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                            }`}
                        >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span className="truncate">Free</span>
                            <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-black ${studentTab === 'free' ? 'bg-white/20 text-white' : 'bg-indigo-100 text-indigo-800'}`}>
                                {freeStudentsCount}
                            </span>
                        </button>
                    </div>

                    <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input 
                            type="text"
                            placeholder="Search students by name or username..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                    </div>

                    {selectedStudentUsernames.some(username => {
                        const student = users.find(u => u.username === username);
                        return student?.assignments?.some(a => a.lessonId && selectedLessonIds.includes(a.lessonId));
                    }) && (
                        <div className="text-xs font-bold text-purple-700 bg-purple-50 p-2.5 rounded-lg border border-purple-200 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0 text-purple-600" />
                            <span>Note: Some selected students already have these assignments. Assigning will update & extend their Due Date to unlock the lesson for them.</span>
                        </div>
                    )}
                </div>
                
                <div className="flex-1 overflow-y-auto p-2">
                    {filteredStudents.length > 0 ? (
                        <div className="space-y-2">
                            {filteredStudents.map(student => (
                                <div 
                                    key={student.username} 
                                    onClick={() => toggleStudentSelection(student.username)}
                                    className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer ${
                                        selectedStudentUsernames.includes(student.username) 
                                        ? 'bg-purple-50 border-purple-200' 
                                        : 'bg-white border-gray-100 hover:bg-gray-50'
                                    }`}
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className={`text-purple-600 ${selectedStudentUsernames.includes(student.username) ? 'opacity-100' : 'opacity-30'}`}>
                                            {selectedStudentUsernames.includes(student.username) ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5" />}
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-800 text-sm">{student.name || student.username}</p>
                                            <p className="text-xs text-gray-400">@{student.username}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        {student.assignments?.some(a => a.lessonId && selectedLessonIds.includes(a.lessonId)) && (
                                            <span className="text-[10px] font-bold text-purple-700 bg-purple-100 px-2 py-1 rounded-full border border-purple-200 flex items-center" title="Re-assigning will update due date & unlock lesson">
                                                <AlertCircle className="w-3 h-3 mr-1" /> Assigned (Will Extend Due Date)
                                            </span>
                                        )}
                                        {selectedStudentUsernames.includes(student.username) && (
                                            <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded">Selected</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-gray-400">
                            <Users className="w-12 h-12 mb-2 opacity-20" />
                            <p className="text-sm">No students found in this course.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeworkManagement;
