
import React, { useState, useMemo } from 'react';
import { User, Lesson, Assignment } from '../types';
import { LESSONS } from '../constants';
import { ExamTopicAnalysisModal } from './ExamTopicAnalysisModal';
import { 
  BarChart3, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Filter, 
  TrendingUp,
  FileText,
  AlertTriangle,
  BookOpen,
  Edit2,
  Trash2,
  Save,
  X,
  PieChart
} from 'lucide-react';

interface ReportsProps {
  user: User;
  lessons?: Lesson[];
  isEditable?: boolean;
  onUpdateUser?: (updatedUser: User) => void;
}

type TimeRange = 'all' | 'today' | 'week' | 'month' | 'custom';

const Reports: React.FC<ReportsProps> = ({ user, lessons = [], isEditable = false, onUpdateUser }) => {
  const [range, setRange] = useState<TimeRange>('all');
  const [customStart, setCustomStart] = useState('');
  const [customEnd, setCustomEnd] = useState('');
  
  // Topic Analysis Modal State
  const [selectedExamAnalysis, setSelectedExamAnalysis] = useState<{ title: string; lessonId?: string } | null>(null);

  // Editing State
  const [editingAssignmentId, setEditingAssignmentId] = useState<string | null>(null);
  const [editDueDate, setEditDueDate] = useState('');

  const allLessons = lessons.length > 0 ? lessons : LESSONS;
  const attempts = user.history || [];

  const filteredAttempts = useMemo(() => {
    const now = new Date();
    // Reset time part for accurate daily comparison
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    
    return attempts.filter(attempt => {
      const attemptTime = attempt.timestamp;
      
      if (range === 'all') {
        return true;
      }
      if (range === 'today') {
        return attemptTime >= todayStart;
      }
      if (range === 'week') {
        const weekAgo = todayStart - (7 * 24 * 60 * 60 * 1000);
        return attemptTime >= weekAgo;
      }
      if (range === 'month') {
        const monthAgo = todayStart - (30 * 24 * 60 * 60 * 1000);
        return attemptTime >= monthAgo;
      }
      if (range === 'custom') {
        const start = customStart ? new Date(customStart).getTime() : 0;
        const end = customEnd ? new Date(customEnd).getTime() + (24 * 60 * 60 * 1000) : Infinity; // Add 1 day to include the end date
        return attemptTime >= start && attemptTime < end;
      }
      return true;
    });
  }, [attempts, range, customStart, customEnd]);

  // Calculate stats
  const totalAttempts = filteredAttempts.length;
  const avgScore = totalAttempts > 0 
    ? Math.round(filteredAttempts.reduce((acc, curr) => acc + curr.score, 0) / totalAttempts) 
    : 0;
  const totalQuestionsAnswered = filteredAttempts.reduce((acc, curr) => acc + curr.totalQuestions, 0);

  // Instructor Feedback Logic
  const getFeedback = () => {
    // 1. Calculate Assignment Completion Rate (Global)
    const assignments = user.assignments || [];
    let completedAssignments = 0;
    let overdueMissingAssignments = 0;
    const now = Date.now();

    assignments.forEach(a => {
        const done = user.history?.some(h => h.lessonId === a.lessonId);
        if (done) {
            completedAssignments++;
        } else {
            let dueDateMs = 0;
            if (a.dueDate) {
                const d = new Date(a.dueDate);
                if (!isNaN(d.getTime())) {
                    dueDateMs = d.getTime() + (24 * 60 * 60 * 1000);
                }
            }
            if (dueDateMs > 0 && now > dueDateMs) {
                overdueMissingAssignments++;
            }
        }
    });

    const allHistory = user.history || [];
    const overallAvgScore = allHistory.length > 0 
      ? Math.round(allHistory.reduce((acc, curr) => acc + curr.score, 0) / allHistory.length) 
      : null;

    const evalScore = range === 'all' || totalAttempts === 0 ? (overallAvgScore ?? avgScore) : avgScore;

    if (allHistory.length === 0 && assignments.length === 0) {
        return {
            status: 'New Student',
            color: 'bg-indigo-50 text-indigo-800 border-indigo-200',
            icon: BookOpen,
            message: `${user.name || user.username} has not taken any quizzes or assignments yet. Assign homework or encourage them to take practice quizzes.`
        };
    }

    if (evalScore !== null && evalScore >= 85 && overdueMissingAssignments === 0) {
        return {
            status: 'Excellent',
            color: 'bg-green-50 text-green-800 border-green-200',
            icon: CheckCircle2,
            message: `${user.name || user.username} is a hard worker! Their scores are excellent, and they are consistently completing assignments on time. Keep up the fantastic work.`
        };
    } else if (evalScore !== null && evalScore >= 70 && overdueMissingAssignments <= 1) {
        return {
            status: 'Good',
            color: 'bg-blue-50 text-blue-800 border-blue-200',
            icon: TrendingUp,
            message: `Solid performance. ${user.name || user.username} is doing well, but a little extra review on recent topics could help push scores to the top level.`
        };
    } else if ((evalScore !== null && evalScore < 50) || overdueMissingAssignments > 2) {
        return {
            status: 'Attention Needed',
            color: 'bg-red-50 text-red-800 border-red-200',
            icon: AlertTriangle,
            message: `${user.name || user.username} needs attention. Current scores are below target or there are missing assignments. It is crucial to solve homework on time and review lesson materials.`
        };
    } else {
         return {
            status: 'Steady',
            color: 'bg-yellow-50 text-yellow-800 border-yellow-200',
            icon: FileText,
            message: `Performance is steady. Consistent practice is key to improvement. Ensure all assignments are completed.`
        };
    }
  };

  const feedback = getFeedback();

  // Homework Logic
  const homeworkStats = useMemo(() => {
    if (!user.assignments || user.assignments.length === 0) return [];
    
    return user.assignments.map(assignment => {
        const lesson = allLessons.find(l => l.id === assignment.lessonId);
        const lessonTitle = lesson?.title || assignment.lessonId;
        
        // Find all attempts for this lesson
        const lessonAttempts = (user.history || [])
            .filter(h => h.lessonId === assignment.lessonId)
            .sort((a, b) => a.timestamp - b.timestamp); // Oldest first
            
        const isCompleted = lessonAttempts.length > 0;
        const firstAttempt = lessonAttempts[0];
        const bestAttempt = [...lessonAttempts].sort((a, b) => b.score - a.score)[0];
        
        // Status
        let status: 'Completed' | 'Late' | 'Missing' | 'Pending' = 'Pending';
        const now = Date.now();
        let dueDateMs = 0;
        if (assignment.dueDate) {
            const d = new Date(assignment.dueDate);
            if (!isNaN(d.getTime())) {
                dueDateMs = d.getTime() + (24 * 60 * 60 * 1000); // End of due date
            }
        }
        
        if (isCompleted) {
            if (dueDateMs === 0 || firstAttempt.timestamp <= dueDateMs) {
                status = 'Completed';
            } else {
                status = 'Late';
            }
        } else {
            if (dueDateMs > 0 && now > dueDateMs) {
                status = 'Missing';
            } else {
                status = 'Pending';
            }
        }
        
        return {
            ...assignment,
            title: lessonTitle,
            status,
            attempts: lessonAttempts.length,
            firstScore: firstAttempt?.score,
            bestScore: bestAttempt?.score,
            lastAttemptDate: lessonAttempts[lessonAttempts.length - 1]?.timestamp
        };
    }).sort((a, b) => new Date(b.dueDate || 0).getTime() - new Date(a.dueDate || 0).getTime());
  }, [user.assignments, user.history, allLessons]);

  const handleEditAssignment = (assignment: Assignment) => {
      setEditingAssignmentId(assignment.id);
      setEditDueDate(assignment.dueDate || '');
  };

  const handleSaveAssignment = (assignmentId: string) => {
      if (!onUpdateUser || !user.assignments) return;
      
      const updatedAssignments = user.assignments.map(a => {
          if (a.id === assignmentId) {
              return { ...a, dueDate: editDueDate };
          }
          return a;
      });
      
      onUpdateUser({ ...user, assignments: updatedAssignments });
      setEditingAssignmentId(null);
  };

  const handleDeleteAssignment = (assignmentId: string) => {
      if (!onUpdateUser || !user.assignments) return;
      if (!window.confirm('Are you sure you want to remove this assignment?')) return;

      const updatedAssignments = user.assignments.filter(a => a.id !== assignmentId);
      onUpdateUser({ ...user, assignments: updatedAssignments });
  };

  const scoresByLesson = useMemo(() => {
    if (!attempts || attempts.length === 0) return [];
    
    const grouped = new Map<string, {
      id: string;
      title: string;
      isExam: boolean;
      attempts: number;
      bestScore: number;
      bestDisplayScore: number;
      lastAttemptDate: number;
    }>();

    attempts.forEach(attempt => {
      const lesson = lessons.find(l => l.id === attempt.lessonId) || LESSONS.find(l => l.id === attempt.lessonId);
      const isExam = lesson?.type === 'exam';
      const displayScore = isExam 
        ? Math.round((attempt.correctCount / attempt.totalQuestions) * 800) 
        : attempt.score;

      if (!grouped.has(attempt.lessonId)) {
        grouped.set(attempt.lessonId, {
           id: attempt.lessonId,
           title: lesson?.title || attempt.topicName,
           isExam: !!isExam,
           attempts: 1,
           bestScore: attempt.score,
           bestDisplayScore: displayScore,
           lastAttemptDate: attempt.timestamp
        });
      } else {
        const current = grouped.get(attempt.lessonId)!;
        current.attempts += 1;
        if (displayScore > current.bestDisplayScore) {
            current.bestScore = attempt.score;
            current.bestDisplayScore = displayScore;
        }
        if (attempt.timestamp > current.lastAttemptDate) {
            current.lastAttemptDate = attempt.timestamp;
        }
      }
    });

    return Array.from(grouped.values()).sort((a, b) => b.lastAttemptDate - a.lastAttemptDate);
  }, [attempts, lessons]);

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <div className="mb-8 flex items-center space-x-3">
        <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
          <BarChart3 className="w-7 h-7" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Performance Reports</h2>
          <p className="text-gray-500 text-sm">{user.name || user.username}'s academic insights</p>
        </div>
      </div>

      {/* Instructor Feedback Card */}
      <div className={`mb-8 p-6 rounded-2xl border ${feedback.color} shadow-sm`}>
          <div className="flex items-start space-x-4">
              <div className="p-2 bg-white rounded-lg bg-opacity-50">
                  <feedback.icon className="w-8 h-8" />
              </div>
              <div>
                  <h3 className="text-lg font-bold mb-1">Instructor Feedback: {feedback.status}</h3>
                  <p className="text-sm font-medium leading-relaxed opacity-90">
                      {feedback.message}
                  </p>
                  {user.assignments && user.assignments.length > 0 && (
                      <div className="mt-4 flex gap-4 text-xs font-bold uppercase tracking-wide opacity-75">
                          <span>Total Assignments: {user.assignments.length}</span>
                          <span>Pending: {user.assignments.filter(a => !user.history?.some(h => h.lessonId === a.lessonId)).length}</span>
                      </div>
                  )}
              </div>
          </div>
      </div>

      {/* Homework & Assignments Section */}
      {homeworkStats.length > 0 && (
        <div className="mb-8 bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-purple-50/50 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-purple-600" />
                <h3 className="font-bold text-gray-900">Homework & Assignments</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-bold">
                        <tr>
                            <th className="px-6 py-4">Lesson / Assignment</th>
                            <th className="px-6 py-4 text-center">Status</th>
                            <th className="px-6 py-4 text-center">Attempts</th>
                            <th className="px-6 py-4 text-center">1st Score</th>
                            <th className="px-6 py-4 text-center">Best Score</th>
                            <th className="px-6 py-4 text-right">Due Date</th>
                            {isEditable && <th className="px-6 py-4 text-right">Actions</th>}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {homeworkStats.map((hw) => (
                            <tr key={hw.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="font-bold text-gray-900">{hw.title}</div>
                                    {hw.notes && <div className="text-xs text-gray-400 mt-1">{hw.notes}</div>}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                                        hw.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                        hw.status === 'Late' ? 'bg-yellow-100 text-yellow-700' :
                                        hw.status === 'Missing' ? 'bg-red-100 text-red-700' :
                                        'bg-gray-100 text-gray-600'
                                    }`}>
                                        {hw.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center font-medium text-gray-600">
                                    {hw.attempts} / {hw.maxAttempts}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    {hw.firstScore !== undefined && hw.firstScore > 0 ? (
                                        <span className={`font-bold ${
                                            hw.firstScore >= 70 ? 'text-green-600' : 
                                            hw.firstScore >= 50 ? 'text-yellow-600' : 'text-red-600'
                                        }`}>
                                            {hw.firstScore}%
                                        </span>
                                    ) : '-'}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    {hw.bestScore !== undefined && hw.bestScore > 0 ? (
                                        <span className={`font-bold ${
                                            hw.bestScore >= 70 ? 'text-green-600' : 
                                            hw.bestScore >= 50 ? 'text-yellow-600' : 'text-red-600'
                                        }`}>
                                            {hw.bestScore}%
                                        </span>
                                    ) : '-'}
                                </td>
                                <td className="px-6 py-4 text-right text-sm text-gray-500 font-medium">
                                    {editingAssignmentId === hw.id ? (
                                        <div className="flex items-center justify-end space-x-2">
                                            <input 
                                                type="date" 
                                                value={editDueDate}
                                                onChange={(e) => setEditDueDate(e.target.value)}
                                                className="p-1 border border-gray-300 rounded text-xs"
                                            />
                                        </div>
                                    ) : (
                                        hw.dueDate ? new Date(hw.dueDate).toLocaleDateString() : 'No date'
                                    )}
                                </td>
                                {isEditable && (
                                    <td className="px-6 py-4 text-right">
                                        {editingAssignmentId === hw.id ? (
                                            <div className="flex items-center justify-end space-x-2">
                                                <button 
                                                    onClick={() => handleSaveAssignment(hw.id)}
                                                    className="p-1 text-green-600 hover:bg-green-50 rounded"
                                                    title="Save"
                                                >
                                                    <Save className="w-4 h-4" />
                                                </button>
                                                <button 
                                                    onClick={() => setEditingAssignmentId(null)}
                                                    className="p-1 text-gray-500 hover:bg-gray-100 rounded"
                                                    title="Cancel"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-end space-x-2">
                                                <button 
                                                    onClick={() => handleEditAssignment(hw)}
                                                    className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                                                    title="Edit Due Date"
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button 
                                                    onClick={() => handleDeleteAssignment(hw.id)}
                                                    className="p-1 text-red-600 hover:bg-red-50 rounded"
                                                    title="Remove Assignment"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      )}

      {/* Scores by Lesson/Exam Section */}
      {scoresByLesson.length > 0 && (
        <div className="mb-8 bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-blue-50/50 flex items-center justify-between">
                <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-blue-600" />
                    <h3 className="font-bold text-gray-900">Scores by Lesson & Exam</h3>
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase bg-white px-3 py-1 rounded-full border border-gray-200">
                    {scoresByLesson.length} Topics
                </span>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-bold">
                        <tr>
                            <th className="px-6 py-4">Lesson / Exam</th>
                            <th className="px-6 py-4 text-center">Type</th>
                            <th className="px-6 py-4 text-center">Attempts</th>
                            <th className="px-6 py-4 text-center">Best Score</th>
                            <th className="px-6 py-4 text-right">Last Attempt</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {scoresByLesson.map((score) => (
                            <tr key={score.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    {score.isExam ? (
                                      <button
                                        onClick={() => setSelectedExamAnalysis({ title: score.title, lessonId: score.id })}
                                        className="text-left font-bold text-purple-700 hover:text-purple-900 hover:underline flex items-center group"
                                      >
                                        <span>{score.title}</span>
                                        <PieChart className="w-4 h-4 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-purple-600" />
                                      </button>
                                    ) : (
                                      <div className="font-bold text-gray-900">{score.title}</div>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                                        score.isExam ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                                    }`}>
                                        {score.isExam ? 'Exam' : 'Lesson'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center font-medium text-gray-600">
                                    {score.attempts}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className={`font-bold ${
                                        score.bestScore >= 70 ? 'text-green-600' : 
                                        score.bestScore >= 50 ? 'text-yellow-600' : 'text-red-600'
                                    }`}>
                                        {score.bestDisplayScore}{score.isExam ? '' : '%'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right text-sm text-gray-500 font-medium">
                                    {new Date(score.lastAttemptDate).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      )}

      {/* Controls */}
      <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex bg-gray-100 p-1 rounded-xl">
          {(['all', 'today', 'week', 'month', 'custom'] as TimeRange[]).map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-4 py-2 rounded-lg text-sm font-bold capitalize transition-all ${
                range === r ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {r === 'all' ? 'All Time' : r === 'custom' ? 'Custom Interval' : r === 'today' ? 'Today' : `Last ${r}`}
            </button>
          ))}
        </div>

        {range === 'custom' && (
          <div className="flex items-center space-x-2 animate-in fade-in slide-in-from-right-4">
            <input 
              type="date" 
              value={customStart}
              onChange={(e) => setCustomStart(e.target.value)}
              className="p-2 border border-gray-200 rounded-lg text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <span className="text-gray-400">-</span>
            <input 
              type="date" 
              value={customEnd}
              onChange={(e) => setCustomEnd(e.target.value)}
              className="p-2 border border-gray-200 rounded-lg text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
        )}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Average Score</h4>
            <div className={`p-2 rounded-lg ${avgScore >= 70 ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}`}>
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <p className="text-4xl font-black text-gray-900">{avgScore}%</p>
          <p className="text-xs text-gray-400 mt-2">Based on selected period</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Quizzes Taken</h4>
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
              <FileText className="w-5 h-5" />
            </div>
          </div>
          <p className="text-4xl font-black text-gray-900">{totalAttempts}</p>
          <p className="text-xs text-gray-400 mt-2">Completed sessions</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Questions</h4>
            <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
          <p className="text-4xl font-black text-gray-900">{totalQuestionsAnswered}</p>
          <p className="text-xs text-gray-400 mt-2">Total items practiced</p>
        </div>
      </div>

      {/* Detailed List */}
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
          <h3 className="font-bold text-gray-900">Detailed Activity Log</h3>
          <span className="text-xs font-bold text-gray-400 uppercase bg-white px-3 py-1 rounded-full border border-gray-200">
            {filteredAttempts.length} Records
          </span>
        </div>

        {filteredAttempts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
              <Filter className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">No reports found</h3>
            <p className="text-gray-500 text-sm">Try adjusting the date range or take a new quiz.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filteredAttempts.map((attempt) => {
              const lesson = LESSONS.find(l => l.id === attempt.lessonId);
              const isExam = lesson?.type === 'exam';
              const displayScore = isExam 
                ? Math.round((attempt.correctCount / attempt.totalQuestions) * 800) 
                : attempt.score;

              return (
                <div key={attempt.id} className="p-5 hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold shadow-sm ${
                      attempt.score >= 70 ? 'bg-green-100 text-green-700' : 
                      attempt.score >= 50 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {displayScore}{isExam ? '' : '%'}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-bold text-gray-900">{attempt.topicName}</h4>
                        {isExam && (
                          <button
                            onClick={() => setSelectedExamAnalysis({ title: attempt.topicName, lessonId: attempt.lessonId })}
                            className="bg-purple-100 hover:bg-purple-200 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center transition-colors"
                            title="View Topic Analysis for this exam"
                          >
                            <PieChart className="w-3 h-3 mr-1" /> Topic Analysis
                          </button>
                        )}
                      </div>
                      <div className="flex items-center space-x-3 text-xs text-gray-500 mt-1">
                        <span className="flex items-center bg-gray-100 px-2 py-0.5 rounded">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(attempt.timestamp).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {new Date(attempt.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                        <span className="capitalize font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                           {attempt.mode}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right hidden sm:block">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Result</p>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-gray-900">{attempt.correctCount}</span>
                      <span className="text-gray-400">/</span>
                      <span className="font-bold text-gray-900">{attempt.totalQuestions}</span>
                      <span className="text-xs text-gray-500 ml-1">Correct</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {selectedExamAnalysis && (
        <ExamTopicAnalysisModal
          isOpen={!!selectedExamAnalysis}
          onClose={() => setSelectedExamAnalysis(null)}
          examTitle={selectedExamAnalysis.title}
          lessonId={selectedExamAnalysis.lessonId}
          user={user}
          lessons={allLessons}
        />
      )}
    </div>
  );
};

export default Reports;
