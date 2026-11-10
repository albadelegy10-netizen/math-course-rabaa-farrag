
import React, { useState, useEffect } from 'react';
import { User, LessonId, Lesson } from '../types';
import { authService } from '../authService';
import { FileText, Calendar, ChevronRight, CheckCircle2, User as UserIcon, Clock, Lock, MessageCircle, AlertTriangle } from 'lucide-react';
import Reports from './Reports';

interface StudentHomeworkProps {
  currentUser: User;
  onStartAssignment: (lessonId: LessonId) => void;
  allLessons: Lesson[];
}

const StudentHomework: React.FC<StudentHomeworkProps> = ({ currentUser, onStartAssignment, allLessons }) => {
  const [targetUser, setTargetUser] = useState<User>(currentUser);
  
  useEffect(() => {
    // If parent, default to first child
    if (currentUser.role === 'parent' && currentUser.children && currentUser.children.length > 0) {
        const allUsers = authService.getAllUsers();
        const firstChild = allUsers.find(u => u.username === currentUser.children![0]);
        if (firstChild) setTargetUser(firstChild);
    } else {
        // If student, refresh from storage to ensure we have latest assignments
        const freshUser = authService.getAllUsers().find(u => u.username === currentUser.username);
        if (freshUser) setTargetUser(freshUser);
    }
  }, [currentUser]);

  const getLessonDetails = (id: string) => allLessons.find(l => l.id === id);

  const baseAssignments = targetUser.assignments || [];
  const freeAssignments = (targetUser.tier === 'free' || !targetUser.tier) ? authService.getFreeHomework() : [];
  
  // Combine them, ensuring we don't duplicate if for some reason an ID overlaps
  const allAssignments = [...baseAssignments, ...freeAssignments].filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i);

  // Today string YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0];

  const [homeworkFilter, setHomeworkFilter] = useState<'all' | 'pending' | 'due_soon' | 'overdue' | 'completed'>('all');

  // Sort assignments: Pending first, then by due date
  const sortedAssignments = [...allAssignments].sort((a, b) => {
    // 1. Sort by Due Date (undefined due dates go last)
    const dateA = a.dueDate ? new Date(a.dueDate).getTime() : Infinity;
    const dateB = b.dueDate ? new Date(b.dueDate).getTime() : Infinity;
    
    if (dateA !== dateB) return dateA - dateB;

    // 2. Sort by Lesson Title
    const lessonA = a.lessonId ? getLessonDetails(a.lessonId) : null;
    const lessonB = b.lessonId ? getLessonDetails(b.lessonId) : null;
    return (a.title || lessonA?.title || '').localeCompare(b.title || lessonB?.title || '', undefined, { numeric: true });
  });

  const getStatus = (assignment: import('../types').Assignment) => {
    const attempts = targetUser.history?.filter(h => h.lessonId === assignment.lessonId) || [];
    if (assignment.manualScore !== undefined) {
      return { completed: true, score: assignment.manualScore, attempts, manual: true };
    }
    if (attempts.length > 0) {
      const bestScore = Math.max(...attempts.map(a => a.score));
      return { completed: true, score: bestScore, attempts, manual: false };
    }
    return { completed: false, score: 0, attempts: [], manual: false };
  };

  const dueSoonCount = sortedAssignments.filter(a => {
    const { completed } = getStatus(a);
    if (completed || !a.dueDate) return false;
    const dueTime = new Date(a.dueDate + 'T23:59:59').getTime();
    const now = Date.now();
    const diffDays = Math.ceil((dueTime - now) / (1000 * 60 * 60 * 24));
    return diffDays >= 0 && diffDays <= 2;
  }).length;

  const overdueCount = sortedAssignments.filter(a => {
    const { completed } = getStatus(a);
    if (completed || !a.dueDate) return false;
    return new Date(a.dueDate + 'T23:59:59').getTime() < Date.now();
  }).length;

  const filteredAssignments = sortedAssignments.filter(a => {
    const { completed } = getStatus(a);
    if (homeworkFilter === 'pending') return !completed;
    if (homeworkFilter === 'completed') return completed;
    if (homeworkFilter === 'overdue') {
      if (completed || !a.dueDate) return false;
      return new Date(a.dueDate + 'T23:59:59').getTime() < Date.now();
    }
    if (homeworkFilter === 'due_soon') {
      if (completed || !a.dueDate) return false;
      const dueTime = new Date(a.dueDate + 'T23:59:59').getTime();
      const diffDays = Math.ceil((dueTime - Date.now()) / (1000 * 60 * 60 * 24));
      return diffDays >= 0 && diffDays <= 3;
    }
    return true;
  });

  const openWhatsAppToEngRabaa = (assignmentTitle: string) => {
    const studentName = targetUser.name || targetUser.username;
    const text = `Hello Eng. Rabaa, my homework "${assignmentTitle}" is locked because the due date has passed. Could you please reopen it for me? (Student: ${studentName})`;
    window.open(`https://wa.me/201120486569?text=${encodeURIComponent(text)}`, '_blank');
  };

  const switchChild = (username: string) => {
     const allUsers = authService.getAllUsers();
     const child = allUsers.find(u => u.username === username);
     if (child) setTargetUser(child);
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {currentUser.role === 'parent' ? "Children's Homework" : "My Homework"}
        </h2>
        <p className="text-gray-500">
            {currentUser.role === 'parent' ? "View assigned tasks for your children." : "Complete your assigned tasks before the due date."}
        </p>
      </div>

      {currentUser.role === 'parent' && (
         <div className="mb-8 flex space-x-2 overflow-x-auto pb-2">
             {currentUser.children?.map(childUsername => {
                 const allUsers = authService.getAllUsers();
                 const child = allUsers.find(u => u.username === childUsername);
                 const isActive = targetUser.username === childUsername;
                 return (
                     <button
                        key={childUsername}
                        onClick={() => switchChild(childUsername)}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all whitespace-nowrap ${
                            isActive 
                            ? 'bg-purple-600 border-purple-600 text-white shadow-md' 
                            : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                     >
                        <UserIcon className="w-4 h-4" />
                        <span className="font-bold text-sm">{child?.name || childUsername}</span>
                     </button>
                 );
             })}
         </div>
      )}

      {/* Due Date Alert Banner */}
      {dueSoonCount > 0 && (
        <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-between gap-4 text-amber-900 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-100 rounded-xl text-amber-700">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm">
                ⏰ You have {dueSoonCount} homework assignment{dueSoonCount > 1 ? 's' : ''} due soon!
              </p>
              <p className="text-xs text-amber-700">
                Check your deadlines and submit your answers before midnight.
              </p>
            </div>
          </div>
          <button
            onClick={() => setHomeworkFilter('due_soon')}
            className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl transition-colors whitespace-nowrap shadow-xs"
          >
            View Due Soon
          </button>
        </div>
      )}

      {/* Filter Tabs */}
      {allAssignments.length > 0 && (
        <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setHomeworkFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              homeworkFilter === 'all'
                ? 'bg-gray-900 text-white shadow-sm'
                : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            All Tasks ({allAssignments.length})
          </button>
          <button
            onClick={() => setHomeworkFilter('pending')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              homeworkFilter === 'pending'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            Pending ({allAssignments.filter(a => !getStatus(a).completed).length})
          </button>
          <button
            onClick={() => setHomeworkFilter('due_soon')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              homeworkFilter === 'due_soon'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            Due Soon ({dueSoonCount})
          </button>
          {overdueCount > 0 && (
            <button
              onClick={() => setHomeworkFilter('overdue')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                homeworkFilter === 'overdue'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              Overdue ({overdueCount})
            </button>
          )}
          <button
            onClick={() => setHomeworkFilter('completed')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              homeworkFilter === 'completed'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            Completed ({allAssignments.filter(a => getStatus(a).completed).length})
          </button>
        </div>
      )}

      {filteredAssignments.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[360px] bg-white rounded-3xl border border-gray-200 p-8 text-center">
          <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {homeworkFilter === 'due_soon' ? 'No Urgent Deadlines!' : 'All Caught Up!'}
          </h3>
          <p className="text-gray-500">
             {homeworkFilter === 'due_soon'
                ? 'Great job! You have no assignments due in the immediate next few days.'
                : currentUser.role === 'parent' 
                  ? `${targetUser.name || targetUser.username} has no pending homework assignments.` 
                  : "You have no pending homework assignments in this view."}
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredAssignments.map((assignment) => {
            const lesson = assignment.lessonId ? getLessonDetails(assignment.lessonId) : null;
            const title = assignment.title || lesson?.title || 'Unknown Assignment';
            const { completed, attempts } = getStatus(assignment);
            
            // Check if due date has passed and student did not solve homework
            const isOverdueAndUnsolved = assignment.dueDate ? (new Date(assignment.dueDate + 'T23:59:59') < new Date() && !completed) : false;
            
            // Check if scheduled in future
            const isScheduledFuture = assignment.availableDate ? assignment.availableDate > today : false;

            return (
              <div 
                key={assignment.id} 
                className={`bg-white p-6 rounded-2xl border transition-all hover:shadow-md flex flex-col justify-between gap-4 ${
                  completed 
                    ? 'border-green-200 bg-green-50/30' 
                    : isOverdueAndUnsolved 
                      ? 'border-rose-300 bg-rose-50/20 ring-1 ring-rose-200' 
                      : isScheduledFuture
                        ? 'border-purple-200 bg-purple-50/20'
                        : 'border-gray-200'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      completed 
                        ? 'bg-green-100 text-green-600' 
                        : isOverdueAndUnsolved 
                          ? 'bg-rose-100 text-rose-600' 
                          : isScheduledFuture
                            ? 'bg-purple-100 text-purple-600'
                            : 'bg-blue-50 text-blue-600'
                    }`}>
                      {isOverdueAndUnsolved ? <Lock className="w-6 h-6" /> : isScheduledFuture ? <Clock className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
                        {isOverdueAndUnsolved && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-black bg-rose-100 text-rose-700 border border-rose-200">
                            <Lock className="w-3 h-3 mr-1" /> LOCKED - DUE DATE PASSED
                          </span>
                        )}
                        {isScheduledFuture && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-100 text-purple-700 border border-purple-200">
                            <Clock className="w-3 h-3 mr-1" /> Scheduled (Releases {assignment.availableDate})
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-3 mt-1.5 text-sm text-gray-500">
                        {assignment.dueDate ? (
                          <span className={`flex items-center ${isOverdueAndUnsolved ? 'text-rose-600 font-bold' : ''}`}>
                            <Calendar className="w-4 h-4 mr-1" />
                            Due: {new Date(assignment.dueDate + 'T00:00:00').toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                        ) : (
                          <span className="flex items-center text-blue-600 font-bold">
                            <Calendar className="w-4 h-4 mr-1" />
                            No due date
                          </span>
                        )}
                        {assignment.availableDate && (
                            <span className="flex items-center text-gray-400">
                                <Clock className="w-3 h-3 mr-1" />
                                {isScheduledFuture ? `Unlocks: ${assignment.availableDate}` : `Posted: ${assignment.availableDate}`}
                            </span>
                        )}
                        {assignment.notes && (
                          <span className="bg-gray-100 px-2 py-0.5 rounded text-xs text-gray-600">
                            Note: {assignment.notes}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end space-x-4 flex-wrap gap-2">
                    {completed ? (
                      <div className="text-right flex flex-col items-end">
                        <span className="flex items-center text-xs font-bold text-green-600 uppercase tracking-wider mb-2 bg-green-50 px-2.5 py-1 rounded-md">
                            <CheckCircle2 className="w-4 h-4 mr-1" />
                            Done
                        </span>
                        <div className="flex flex-col gap-1 items-end">
                            {attempts && attempts.map((attempt, idx) => {
                               const isExam = lesson?.type === 'exam';
                               const displayScore = isExam 
                                   ? Math.round((attempt.correctCount / attempt.totalQuestions) * 800) 
                                   : attempt.score;
                               return (
                                   <div key={idx} className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-md border border-gray-100 flex items-center justify-between min-w-[140px]">
                                       <span className="font-medium text-gray-500">Attempt {idx + 1}:</span>
                                       <span className="font-bold text-gray-900 ml-2">
                                           {displayScore}{isExam ? '' : '%'} <span className="text-gray-400 font-normal">({attempt.correctCount}/{attempt.totalQuestions})</span>
                                       </span>
                                   </div>
                               );
                            })}
                        </div>
                      </div>
                    ) : (
                      <div className="text-right mr-2">
                         <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Status</span>
                         <span className={`text-sm font-bold ${isOverdueAndUnsolved ? 'text-rose-600' : isScheduledFuture ? 'text-purple-600' : 'text-blue-600'}`}>
                           {isOverdueAndUnsolved ? 'Locked (Overdue)' : isScheduledFuture ? 'Scheduled' : 'Pending'}
                         </span>
                      </div>
                    )}
                    
                    {currentUser.role === 'student' && (
                      isOverdueAndUnsolved ? (
                        <button
                          onClick={() => openWhatsAppToEngRabaa(title)}
                          className="flex items-center space-x-2 px-5 py-3 rounded-xl font-bold transition-all bg-[#25D366] text-white hover:bg-[#20ba59] shadow-lg shadow-green-100 transform active:scale-95"
                          title="Contact Eng Rabaa to reopen homework"
                        >
                          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412 0 12.049c0 2.123.541 4.197 1.57 6.079L0 24l6.15-1.612a11.832 11.832 0 005.9 1.573h.004c6.638 0 12.05-5.414 12.053-12.05a11.825 11.825 0 00-3.414-8.522z"/>
                          </svg>
                          <span>Send Msg to Eng Rabaa</span>
                        </button>
                      ) : isScheduledFuture ? (
                        <div className="px-5 py-3 rounded-xl font-bold bg-gray-100 text-gray-400 cursor-not-allowed flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>Opens {assignment.availableDate}</span>
                        </div>
                      ) : ['record', 'pdf'].includes(assignment.type || '') ? (
                        <a
                          href={assignment.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-6 py-3 rounded-xl font-bold transition-all bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100"
                        >
                          <span>Open {assignment.type === 'pdf' ? 'PDF' : 'Record'}</span>
                          <ChevronRight className="w-4 h-4" />
                        </a>
                      ) : (
                        <button
                          onClick={() => onStartAssignment(assignment.lessonId as LessonId)}
                          className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-bold transition-all ${
                          completed 
                              ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' 
                              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-100'
                          }`}
                        >
                          <span>{completed ? 'Retake' : 'Start'}</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Overdue alert notice banner */}
                {isOverdueAndUnsolved && (
                  <div className="mt-2 p-3 bg-rose-50 border border-rose-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-rose-800">
                    <div className="flex items-center font-bold">
                      <AlertTriangle className="w-4 h-4 text-rose-600 mr-2 flex-shrink-0" />
                      <span>The deadline for this homework has passed and it was not submitted. It is now locked.</span>
                    </div>
                    <button
                      onClick={() => openWhatsAppToEngRabaa(title)}
                      className="self-start sm:self-auto font-black text-[#128C7E] hover:underline flex items-center bg-white px-3 py-1.5 rounded-lg border border-rose-200 shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5 mr-1" />
                      Send Eng Rabaa message to reopen homework
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Reports Section */}
      <div className="mt-16 pt-12 border-t border-gray-200">
        <Reports user={targetUser} lessons={allLessons} />
      </div>
    </div>
  );
};

export default StudentHomework;
