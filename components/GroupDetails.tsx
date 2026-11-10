import React, { useState, useEffect, useMemo } from 'react';
import { User, StudentGroup, GroupAssignment, Lesson } from '../types';
import { authService } from '../authService';
import { lessonService } from '../lessonService';
import { 
  ArrowLeft, 
  Plus, 
  FileText, 
  Video, 
  BookOpen, 
  Calendar, 
  Clock, 
  CheckCircle, 
  Users, 
  Edit3, 
  CheckSquare, 
  Square, 
  UserCheck, 
  UserX,
  Bell,
  Send,
  Sparkles,
  Search
} from 'lucide-react';
import StudentReportModal from './StudentReportModal';
import EditGroupAssignmentModal from './EditGroupAssignmentModal';

const formatCreatedDate = (group: StudentGroup) => {
  if (group.createdDay) return group.createdDay;
  let timestamp = group.createdAt;
  if (!timestamp && !isNaN(Number(group.id)) && Number(group.id) > 1500000000000) {
    timestamp = Number(group.id);
  }
  if (!timestamp) return 'Recently';
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(new Date(timestamp));
};

interface GroupDetailsProps {
  group: StudentGroup;
  users: User[];
  onBack: () => void;
  onUpdate: () => void;
}

const GroupDetails: React.FC<GroupDetailsProps> = ({ group, users, onBack, onUpdate }) => {
  const [activeTab, setActiveTab] = useState<'assignments' | 'new'>('assignments');
  const [message, setMessage] = useState('');
  
  // Assign Form
  const [includeInteractive, setIncludeInteractive] = useState(false);
  const [interactiveType, setInteractiveType] = useState<'lesson' | 'exam' | 'homework'>('homework');
  const [selectedLessonId, setSelectedLessonId] = useState('');

  const [includeRecord, setIncludeRecord] = useState(false);
  const [recordTitle, setRecordTitle] = useState('');
  const [recordLink, setRecordLink] = useState('');

  const [includePdf, setIncludePdf] = useState(false);
  const [pdfTitle, setPdfTitle] = useState('');
  const [pdfLink, setPdfLink] = useState('');

  const [availableDate, setAvailableDate] = useState(new Date().toISOString().split('T')[0]);
  const [dueDate, setDueDate] = useState('');
  const [notes, setNotes] = useState('');

  // Student Selection & Attendance States
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [attendanceMap, setAttendanceMap] = useState<Record<string, 'present' | 'absent'>>({});
  const [logAttendance, setLogAttendance] = useState(true);

  const [expandedAssignment, setExpandedAssignment] = useState<string | null>(null);
  const [selectedReportUser, setSelectedReportUser] = useState<User | null>(null);
  const [editingAssignment, setEditingAssignment] = useState<any | null>(null);
  const [reminderSentMessage, setReminderSentMessage] = useState<string | null>(null);

  // Dynamic Lessons & Course Filter
  const [allLessons, setAllLessons] = useState<Lesson[]>(() => lessonService.getLoadedLessonsSync());
  const [contentSearchTerm, setContentSearchTerm] = useState('');

  useEffect(() => {
    let isMounted = true;
    lessonService.getAllLessons().then(lessons => {
      if (isMounted) setAllLessons(lessons);
    });
    const unsubscribe = lessonService.subscribe(() => {
      if (isMounted) setAllLessons(lessonService.getLoadedLessonsSync());
    });
    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  const courseLessons = useMemo(() => {
    const groupCourse = (group.course || 'EST1').trim().toUpperCase();

    return allLessons.filter(l => {
      if (l.deleted) return false;

      if (l.course) {
        const lCourse = l.course.trim().toUpperCase();
        if (lCourse === groupCourse) return true;
        if (groupCourse === 'DSAT' && lCourse === 'SAT') return true;
        if (groupCourse === 'SAT' && lCourse === 'DSAT') return true;
        return false;
      }

      // Legacy ID based fallback
      const idLower = l.id.toLowerCase();
      if (groupCourse === 'DSAT' || groupCourse === 'SAT') return idLower.startsWith('sat_') || idLower.startsWith('dsat_');
      if (groupCourse === 'EST1') return idLower.startsWith('est1_') || idLower === 'est1_inequality';
      if (groupCourse === 'EST2') return idLower.startsWith('est2_');
      if (groupCourse === 'ACT1') return idLower.startsWith('act1_');
      if (groupCourse === 'ACT2') return idLower.startsWith('act2_');
      if (groupCourse === 'GEOMETRY') return idLower.startsWith('geo_') || idLower.startsWith('geometry_');

      const titleUpper = (l.title || '').toUpperCase();
      if (titleUpper.startsWith(groupCourse)) return true;

      return false;
    });
  }, [allLessons, group.course]);

  const filteredLessons = useMemo(() => {
    if (!contentSearchTerm.trim()) return courseLessons;
    const term = contentSearchTerm.toLowerCase();
    return courseLessons.filter(l => 
      l.title.toLowerCase().includes(term) || 
      (l.description && l.description.toLowerCase().includes(term))
    );
  }, [courseLessons, contentSearchTerm]);

  // Initialize selected students and attendance map whenever group changes
  useEffect(() => {
    if (group && group.studentUsernames) {
      setSelectedStudents(group.studentUsernames);
      const defaultAttendance: Record<string, 'present' | 'absent'> = {};
      group.studentUsernames.forEach(u => {
        defaultAttendance[u] = 'present';
      });
      setAttendanceMap(defaultAttendance);
    }
  }, [group.id, group.studentUsernames]);

  const toggleSelectStudent = (username: string) => {
    setSelectedStudents(prev => 
      prev.includes(username) ? prev.filter(u => u !== username) : [...prev, username]
    );
  };

  const selectAllStudents = () => {
    setSelectedStudents(group.studentUsernames || []);
  };

  const deselectAllStudents = () => {
    setSelectedStudents([]);
  };

  const setStudentAttendance = (username: string, status: 'present' | 'absent') => {
    setAttendanceMap(prev => ({
      ...prev,
      [username]: status
    }));
  };

  const markAllAttendance = (status: 'present' | 'absent') => {
    const updated: Record<string, 'present' | 'absent'> = {};
    (group.studentUsernames || []).forEach(u => {
      updated[u] = status;
    });
    setAttendanceMap(updated);
  };

  const handleAssign = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!includeInteractive && !includeRecord && !includePdf && !logAttendance) {
      setMessage('Please select at least one type of assignment or enable attendance logging.');
      return;
    }

    if (includeInteractive && !selectedLessonId) {
      setMessage('Please select a lesson/exam for the interactive content.');
      return;
    }
    if (includeRecord && (!recordTitle || !recordLink)) {
      setMessage('Title and Link are required for the Session Record.');
      return;
    }
    if (includePdf && (!pdfTitle || !pdfLink)) {
      setMessage('Title and Link are required for the PDF Link.');
      return;
    }

    if (selectedStudents.length === 0) {
      setMessage('Please select at least one student to receive the assignment.');
      return;
    }

    const attendanceRecords = logAttendance
      ? (group.studentUsernames || []).map(username => ({
          username,
          status: attendanceMap[username] || 'present',
          date: availableDate,
          notes: notes ? `Session: ${notes}` : undefined
        }))
      : undefined;

    let successCount = 0;
    
    if (includeInteractive) {
      const success = await authService.assignToGroup(group.id, {
        type: interactiveType,
        title: allLessons.find(l => l.id === selectedLessonId)?.title,
        lessonId: selectedLessonId,
        availableDate,
        dueDate,
        notes,
        targetStudentUsernames: selectedStudents,
        attendanceRecords
      });
      if (success) successCount++;
    }

    if (includeRecord) {
      const success = await authService.assignToGroup(group.id, {
        type: 'record',
        title: recordTitle,
        link: recordLink,
        availableDate,
        dueDate,
        notes,
        targetStudentUsernames: selectedStudents,
        attendanceRecords: includeInteractive ? undefined : attendanceRecords
      });
      if (success) successCount++;
    }

    if (includePdf) {
      const success = await authService.assignToGroup(group.id, {
        type: 'pdf',
        title: pdfTitle,
        link: pdfLink,
        availableDate,
        dueDate,
        notes,
        targetStudentUsernames: selectedStudents,
        attendanceRecords: (includeInteractive || includeRecord) ? undefined : attendanceRecords
      });
      if (success) successCount++;
    }

    let isOnlyAttendance = false;
    if (!includeInteractive && !includeRecord && !includePdf && logAttendance && attendanceRecords) {
      const presentUsernames = attendanceRecords.filter(r => r.status === 'present').map(r => r.username);
      const absentUsernames = attendanceRecords.filter(r => r.status === 'absent').map(r => r.username);
      
      const notesMsg = notes ? `Session: ${notes}` : `Session Attendance (${group.name})`;

      if (presentUsernames.length > 0) await authService.batchRecordAttendance(presentUsernames, availableDate, notesMsg, 'present');
      if (absentUsernames.length > 0) await authService.batchRecordAttendance(absentUsernames, availableDate, notesMsg, 'absent');
      
      successCount = 1;
      isOnlyAttendance = true;
    }

    if (successCount > 0) {
      const attMsg = logAttendance ? `Recorded attendance (${Object.values(attendanceMap).filter(s => s === 'present').length} Present, ${Object.values(attendanceMap).filter(s => s === 'absent').length} Absent).` : '';
      const assignMsg = isOnlyAttendance ? attMsg : `Successfully assigned ${successCount} item(s) to ${selectedStudents.length} student(s) and ${attMsg.toLowerCase()}`;
      
      setMessage(assignMsg || 'Successfully assigned content.');
      // Reset form
      setIncludeInteractive(false);
      setIncludeRecord(false);
      setIncludePdf(false);
      setRecordTitle('');
      setRecordLink('');
      setPdfTitle('');
      setPdfLink('');
      setSelectedLessonId('');
      
      onUpdate();
      setTimeout(() => {
        setMessage('');
        setActiveTab('assignments');
      }, 2000);
    } else {
      setMessage('Failed to assign content.');
    }
  };

  const handleUpdateAssignment = async (updates: Partial<Omit<GroupAssignment, 'id' | 'groupId' | 'assignedDate'>>) => {
    if (editingAssignment) {
      await authService.updateGroupAssignment(group.id, editingAssignment.id, updates);
      onUpdate();
    }
  };

  const handleDeleteAssignment = async () => {
    if (editingAssignment) {
      await authService.deleteGroupAssignment(group.id, editingAssignment.id);
      onUpdate();
    }
  };

  const getStudentProgress = (username: string, assignment: GroupAssignment) => {
    // Check if assignment was restricted to specific students and this student was excluded
    if (assignment.targetStudentUsernames && assignment.targetStudentUsernames.length > 0 && !assignment.targetStudentUsernames.includes(username)) {
      return { status: 'Not Assigned', score: '-', attempts: '-' };
    }

    const user = users.find(u => u.username === username);
    if (!user) return { status: 'Unknown', score: 0, attempts: 0 };

    if (['record', 'pdf'].includes(assignment.type)) {
      return { status: 'Sent', score: '-', attempts: '-' };
    }

    const attempts = user.history?.filter(h => h.lessonId === assignment.lessonId) || [];
    if (attempts.length > 0) {
      const bestScore = Math.max(...attempts.map(a => a.score));
      return { status: 'Solved', score: bestScore, attempts: attempts.length };
    }
    
    return { status: 'Pending', score: 0, attempts: 0 };
  };

  const handleSendAssignmentReminder = async (assignment: GroupAssignment, e: React.MouseEvent) => {
    e.stopPropagation();
    const targetUsernames = assignment.targetStudentUsernames && assignment.targetStudentUsernames.length > 0
      ? assignment.targetStudentUsernames
      : group.studentUsernames;

    let count = 0;
    for (const username of targetUsernames) {
      const prog = getStudentProgress(username, assignment);
      if (prog.status === 'Pending' || prog.status === 'Sent') {
        const title = `⏰ Due Date Reminder: ${assignment.title || 'Homework'}`;
        const message = `Reminder from teacher: Please complete your homework "${assignment.title}". ${assignment.dueDate ? `Due date is ${assignment.dueDate}.` : 'Please complete and submit it soon.'}`;
        await authService.notifyUser(username, title, message, 'reminder', {
          link: '/homework',
          lessonId: assignment.lessonId,
          dueDate: assignment.dueDate,
          assignmentId: assignment.id
        });
        count++;
      }
    }

    setReminderSentMessage(`✅ Sent due date reminder to ${count} pending student(s) for "${assignment.title}"!`);
    setTimeout(() => setReminderSentMessage(null), 4000);
  };

  const handleSendSingleStudentReminder = async (username: string, assignment: GroupAssignment) => {
    const studentUser = users.find(u => u.username === username);
    const studentName = studentUser?.name || username;
    const title = `⏰ Due Date Reminder: ${assignment.title || 'Homework'}`;
    const message = `Hi ${studentName}! Friendly reminder to finish your homework "${assignment.title}". ${assignment.dueDate ? `Due date: ${assignment.dueDate}.` : 'Please submit soon.'}`;
    await authService.notifyUser(username, title, message, 'reminder', {
      link: '/homework',
      lessonId: assignment.lessonId,
      dueDate: assignment.dueDate,
      assignmentId: assignment.id
    });

    setReminderSentMessage(`✅ Reminder sent to ${studentName}!`);
    setTimeout(() => setReminderSentMessage(null), 4000);
  };

  const presentCount = (group.studentUsernames || []).filter(u => (attendanceMap[u] || 'present') === 'present').length;
  const absentCount = (group.studentUsernames || []).length - presentCount;

  return (
    <div className="space-y-6 animate-in fade-in">
      <button onClick={onBack} className="flex items-center text-gray-500 hover:text-indigo-600 transition-colors font-bold">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Groups
      </button>

      {reminderSentMessage && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-2xl flex items-center justify-between text-sm font-semibold shadow-sm animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>{reminderSentMessage}</span>
          </div>
          <button 
            onClick={() => setReminderSentMessage(null)}
            className="text-emerald-500 hover:text-emerald-700 text-xs font-bold"
          >
            ✕
          </button>
        </div>
      )}

      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">{group.name}</h2>
          <div className="flex items-center flex-wrap gap-2 text-sm text-gray-500 font-medium mt-1">
            <span className="font-bold text-gray-700">{group.course}</span>
            <span>•</span>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${
              (group.status || 'active') === 'active' 
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                : 'bg-amber-50 text-amber-700 border-amber-200'
            }`}>
              {(group.status || 'active') === 'active' ? 'Active Group' : 'Inactive (Finished)'}
            </span>
            <span>•</span>
            <span>{group.studentUsernames.length} Students</span>
            <span>•</span>
            <span className="inline-flex items-center text-gray-600 bg-gray-100 px-2.5 py-0.5 rounded-lg text-xs font-semibold">
              <Calendar className="w-3.5 h-3.5 mr-1 text-indigo-500" />
              Created: {formatCreatedDate(group)}
            </span>
          </div>
        </div>
      </div>

      {message && (
        <div className={`p-4 rounded-xl font-medium border ${message.includes('Failed') || message.includes('Please') ? 'bg-rose-50 text-rose-700 border-rose-200' : 'bg-green-50 text-green-700 border-green-200'}`}>
          {message}
        </div>
      )}

      <div className="flex border-b border-gray-200 space-x-6">
        <button
          onClick={() => setActiveTab('assignments')}
          className={`pb-4 text-sm font-bold transition-colors border-b-2 ${activeTab === 'assignments' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
        >
          Group Assignments
        </button>
        <button
          onClick={() => setActiveTab('new')}
          className={`pb-4 text-sm font-bold transition-colors border-b-2 ${activeTab === 'new' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
        >
          Assign New
        </button>
      </div>

      {activeTab === 'new' && (
        <form onSubmit={handleAssign} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2 space-y-4">
              <label className="block text-sm font-bold text-gray-700 mb-2">Assignment Contents</label>
              
              {/* Interactive Content */}
              <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeInteractive}
                    onChange={(e) => setIncludeInteractive(e.target.checked)}
                    className="w-5 h-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                  />
                  <span className="font-bold text-gray-900">Interactive Content (Lesson/Exam/Homework)</span>
                </label>
                {includeInteractive && (
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 ml-8">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Type</label>
                      <select
                        value={interactiveType}
                        onChange={(e) => setInteractiveType(e.target.value as any)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-white"
                      >
                        <option value="homework">Homework</option>
                        <option value="exam">Exam</option>
                        <option value="lesson">Lesson</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1 flex items-center justify-between">
                        <span>Select Content ({group.course} Course)</span>
                        <span className="text-[11px] text-indigo-600 font-semibold">{filteredLessons.length} available</span>
                      </label>
                      
                      {/* Search box for filtering lessons/exams */}
                      <div className="relative mb-2">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={contentSearchTerm}
                          onChange={(e) => setContentSearchTerm(e.target.value)}
                          placeholder={`Search ${group.course} lessons or exams...`}
                          className="w-full pl-9 pr-8 py-2 border border-gray-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-indigo-500 bg-white"
                        />
                        {contentSearchTerm && (
                          <button
                            type="button"
                            onClick={() => setContentSearchTerm('')}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold p-1"
                          >
                            ✕
                          </button>
                        )}
                      </div>

                      <select
                        value={selectedLessonId}
                        onChange={(e) => setSelectedLessonId(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-white text-xs font-semibold text-gray-800"
                      >
                        <option value="">-- Choose {group.course} Content --</option>
                        {filteredLessons.length === 0 ? (
                          <option value="" disabled>No matching {group.course} items</option>
                        ) : (
                          filteredLessons.map(l => (
                            <option key={l.id} value={l.id}>
                              {l.type === 'exam' ? '📝 [Exam]' : '📚 [Lesson]'} {l.title}
                            </option>
                          ))
                        )}
                      </select>

                      {selectedLessonId && (
                        <div className="mt-1.5 p-2 bg-indigo-50/70 border border-indigo-100 rounded-lg text-xs flex items-center justify-between">
                          <span className="font-bold text-indigo-900 truncate">
                            Selected: {allLessons.find(l => l.id === selectedLessonId)?.title || selectedLessonId}
                          </span>
                          <button
                            type="button"
                            onClick={() => setSelectedLessonId('')}
                            className="text-xs text-indigo-600 hover:text-indigo-800 font-bold ml-2 shrink-0"
                          >
                            Clear
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Session Record */}
              <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeRecord}
                    onChange={(e) => setIncludeRecord(e.target.checked)}
                    className="w-5 h-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                  />
                  <span className="font-bold text-gray-900">Session Record (URL)</span>
                </label>
                {includeRecord && (
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 ml-8">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Title</label>
                      <input
                        type="text"
                        value={recordTitle}
                        onChange={(e) => setRecordTitle(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-white"
                        placeholder="e.g., Lecture 4 Recording"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Link (URL)</label>
                      <input
                        type="url"
                        value={recordLink}
                        onChange={(e) => setRecordLink(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-white"
                        placeholder="https://..."
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* PDF Link */}
              <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includePdf}
                    onChange={(e) => setIncludePdf(e.target.checked)}
                    className="w-5 h-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                  />
                  <span className="font-bold text-gray-900">PDF Link (URL)</span>
                </label>
                {includePdf && (
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 ml-8">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Title</label>
                      <input
                        type="text"
                        value={pdfTitle}
                        onChange={(e) => setPdfTitle(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-white"
                        placeholder="e.g., Assignment 3 PDF"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Link (URL)</label>
                      <input
                        type="url"
                        value={pdfLink}
                        onChange={(e) => setPdfLink(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-white"
                        placeholder="https://..."
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Dates & Notes */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Schedule / Start Date (Release & Attendance Date)</label>
              <input
                type="date"
                value={availableDate}
                onChange={(e) => setAvailableDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500"
              />
              <p className="text-[11px] text-gray-500 mt-1">Set a future date to schedule release in advance.</p>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Due Date (Deadline)</label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500"
              />
              <p className="text-[11px] text-gray-500 mt-1">Assignments lock automatically if overdue and unsolved.</p>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-1">Additional Notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500"
                placeholder="Optional instructions for the students..."
              />
            </div>

            {/* Group Students Selection & Attendance Section */}
            <div className="md:col-span-2 border border-gray-200 rounded-2xl p-5 bg-gradient-to-b from-gray-50 to-white space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-200">
                <div>
                  <h3 className="text-base font-bold text-gray-900 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-indigo-600" />
                    Group Students & Attendance
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Choose which students receive the assignment, and mark their session attendance (default is Present).
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200">
                    {selectedStudents.length} / {(group.studentUsernames || []).length} Assigned
                  </span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {presentCount} Present
                  </span>
                  {absentCount > 0 && (
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 border border-rose-200">
                      {absentCount} Absent
                    </span>
                  )}
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-gray-600">Assign To:</span>
                  <button
                    type="button"
                    onClick={selectAllStudents}
                    className="px-2.5 py-1 bg-white border border-gray-300 hover:border-indigo-400 hover:text-indigo-600 rounded-lg font-semibold transition-colors flex items-center space-x-1"
                  >
                    <CheckSquare className="w-3.5 h-3.5 text-indigo-600" />
                    <span>All Students</span>
                  </button>
                  <button
                    type="button"
                    onClick={deselectAllStudents}
                    className="px-2.5 py-1 bg-white border border-gray-300 hover:border-gray-400 text-gray-600 rounded-lg font-semibold transition-colors flex items-center space-x-1"
                  >
                    <Square className="w-3.5 h-3.5 text-gray-400" />
                    <span>Deselect All</span>
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="font-bold text-gray-600">Attendance:</span>
                  <button
                    type="button"
                    onClick={() => markAllAttendance('present')}
                    className="px-2.5 py-1 bg-emerald-50 border border-emerald-300 text-emerald-700 hover:bg-emerald-100 rounded-lg font-bold transition-colors flex items-center space-x-1"
                  >
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Mark All Present</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => markAllAttendance('absent')}
                    className="px-2.5 py-1 bg-rose-50 border border-rose-300 text-rose-700 hover:bg-rose-100 rounded-lg font-bold transition-colors flex items-center space-x-1"
                  >
                    <UserX className="w-3.5 h-3.5" />
                    <span>Mark All Absent</span>
                  </button>
                </div>
              </div>

              {/* Attendance Recording Toggle */}
              <div className="flex items-center space-x-2 pt-1 pb-1">
                <label className="flex items-center space-x-2 cursor-pointer text-xs font-semibold text-gray-700">
                  <input
                    type="checkbox"
                    checked={logAttendance}
                    onChange={(e) => setLogAttendance(e.target.checked)}
                    className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                  />
                  <span>Save session attendance logs on {availableDate} for this group</span>
                </label>
              </div>

              {/* Students Grid */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-1">
                {(group.studentUsernames || []).map(username => {
                  const studentObj = users.find(u => u.username === username);
                  const isAssigned = selectedStudents.includes(username);
                  const currentAttendance = attendanceMap[username] || 'present';

                  return (
                    <div
                      key={username}
                      className={`p-3.5 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        isAssigned
                          ? 'bg-white border-indigo-200 shadow-sm'
                          : 'bg-gray-50/70 border-gray-200 opacity-80'
                      }`}
                    >
                      {/* Left: Checkbox & Full Name */}
                      <div
                        onClick={() => toggleSelectStudent(username)}
                        className="flex items-center space-x-3 cursor-pointer select-none flex-1 min-w-0 pr-1"
                      >
                        <input
                          type="checkbox"
                          checked={isAssigned}
                          onChange={() => {}}
                          className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 pointer-events-none flex-shrink-0"
                        />
                        <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs flex-shrink-0">
                          {((studentObj?.name || username).substring(0, 2)).toUpperCase()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-bold break-words leading-snug ${isAssigned ? 'text-gray-900' : 'text-gray-500'}`}>
                            {studentObj?.name || username}
                          </p>
                          {studentObj?.name && studentObj.name !== username && (
                            <p className="text-[11px] text-gray-400 font-medium break-all">@{username}</p>
                          )}
                        </div>
                      </div>

                      {/* Right: Attendance Toggle (Present / Absent) */}
                      <div className="flex items-center space-x-1 flex-shrink-0 bg-gray-100 p-0.5 rounded-lg border border-gray-200 self-end sm:self-center">
                        <button
                          type="button"
                          onClick={() => setStudentAttendance(username, 'present')}
                          className={`px-2.5 py-1.5 rounded-md text-xs font-bold transition-all flex items-center space-x-1 ${
                            currentAttendance === 'present'
                              ? 'bg-emerald-600 text-white shadow-sm'
                              : 'text-gray-500 hover:text-gray-800'
                          }`}
                          title="Mark Present"
                        >
                          <UserCheck className="w-3.5 h-3.5" />
                          <span>Present</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setStudentAttendance(username, 'absent')}
                          className={`px-2.5 py-1.5 rounded-md text-xs font-bold transition-all flex items-center space-x-1 ${
                            currentAttendance === 'absent'
                              ? 'bg-rose-600 text-white shadow-sm'
                              : 'text-gray-500 hover:text-gray-800'
                          }`}
                          title="Mark Absent"
                        >
                          <UserX className="w-3.5 h-3.5" />
                          <span>Absent</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="text-xs text-gray-500 font-medium">
              Will assign to <strong className="text-indigo-600">{selectedStudents.length}</strong> selected student(s).
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors flex items-center shadow-md shadow-indigo-100"
            >
              <Plus className="w-4 h-4 mr-2" /> {(!includeInteractive && !includeRecord && !includePdf && logAttendance) ? "Save Attendance" : "Assign to Group"}
            </button>
          </div>
        </form>
      )}

      {activeTab === 'assignments' && (
        <div className="space-y-4">
          {!group.assignments || group.assignments.length === 0 ? (
            <div className="text-center p-8 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
              <p className="text-gray-500 font-medium">No assignments found for this group.</p>
            </div>
          ) : (
            group.assignments.map(a => (
              <div key={a.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div 
                  className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedAssignment(expandedAssignment === a.id ? null : a.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${
                      a.type === 'record' ? 'bg-red-100 text-red-600' :
                      a.type === 'pdf' ? 'bg-orange-100 text-orange-600' : 'bg-indigo-100 text-indigo-600'
                    }`}>
                      {a.type === 'record' ? <Video className="w-5 h-5" /> :
                       a.type === 'pdf' ? <FileText className="w-5 h-5" /> :
                       <BookOpen className="w-5 h-5" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-bold text-gray-900">{a.title}</h4>
                        {(() => {
                          const today = new Date().toISOString().split('T')[0];
                          if (a.availableDate && a.availableDate > today) {
                            return (
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-purple-100 text-purple-700 border border-purple-200">
                                <Clock className="w-3 h-3 mr-1" /> Scheduled ({a.availableDate})
                              </span>
                            );
                          }
                          if (a.dueDate && a.dueDate < today) {
                            return (
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-rose-100 text-rose-700 border border-rose-200">
                                Due Date Passed
                              </span>
                            );
                          }
                          return (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-700 border border-emerald-200">
                              Active
                            </span>
                          );
                        })()}
                        {a.targetStudentUsernames && a.targetStudentUsernames.length < (group.studentUsernames || []).length && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-gray-100 text-gray-600 border border-gray-200">
                            {a.targetStudentUsernames.length} of {(group.studentUsernames || []).length} Students
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-3 text-xs text-gray-500 mt-1">
                        <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> Start: {a.availableDate || 'Immediate'}</span>
                        {a.dueDate && <span className="flex items-center text-red-500"><Clock className="w-3 h-3 mr-1" /> Due: {a.dueDate}</span>}
                        <span className="uppercase font-bold tracking-wider">{a.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={(e) => handleSendAssignmentReminder(a, e)}
                      className="px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs hover:shadow-sm"
                      title="Send due date notification to pending students"
                    >
                      <Bell className="w-3.5 h-3.5 text-amber-600" />
                      <span>Remind Due Date</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditingAssignment(a);
                      }}
                      className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors focus:outline-none"
                    >
                      <Edit3 className="w-5 h-5" />
                    </button>
                    {expandedAssignment === a.id ? <ArrowLeft className="w-5 h-5 text-gray-400 rotate-90" /> : <ArrowLeft className="w-5 h-5 text-gray-400 -rotate-90" />}
                  </div>
                </div>

                {expandedAssignment === a.id && (
                  <div className="border-t border-gray-100 p-4 bg-gray-50/50">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="text-sm font-bold text-gray-700 flex items-center"><Users className="w-4 h-4 mr-2" /> Student Progress & Attendance</h5>
                      <button
                        onClick={(e) => handleSendAssignmentReminder(a, e)}
                        className="text-xs font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1 bg-amber-100/60 hover:bg-amber-100 px-2.5 py-1 rounded-lg transition-colors"
                      >
                        <Send className="w-3 h-3" />
                        <span>Send Due Date Reminder to Pending</span>
                      </button>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm border-collapse bg-white rounded-xl shadow-sm">
                        <thead>
                          <tr className="bg-gray-50 text-gray-500 border-b border-gray-100">
                            <th className="px-4 py-3 font-bold">Student</th>
                            <th className="px-4 py-3 font-bold">Assignment Status</th>
                            <th className="px-4 py-3 font-bold">Score</th>
                            <th className="px-4 py-3 font-bold">Trials</th>
                            <th className="px-4 py-3 font-bold">Attendance</th>
                            <th className="px-4 py-3 font-bold text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {group.studentUsernames.map(username => {
                            const prog = getStudentProgress(username, a);
                            const userObj = users.find(u => u.username === username);
                            const attRec = a.attendanceRecords?.find(r => r.username === username);
                            
                            return (
                              <tr key={username}>
                                <td className="px-4 py-3 font-medium text-gray-900">
                                  <button
                                    onClick={() => userObj && setSelectedReportUser(userObj)}
                                    className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors focus:outline-none text-left font-bold"
                                  >
                                    {userObj?.name || username}
                                  </button>
                                </td>
                                <td className="px-4 py-3">
                                  {prog.status === 'Solved' ? (
                                    <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-700 rounded-md text-xs font-bold">
                                      <CheckCircle className="w-3 h-3 mr-1" /> Solved
                                    </span>
                                  ) : prog.status === 'Pending' ? (
                                    <span className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-700 rounded-md text-xs font-bold">
                                      <Clock className="w-3 h-3 mr-1" /> Pending
                                    </span>
                                  ) : prog.status === 'Not Assigned' ? (
                                    <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-500 rounded-md text-xs font-semibold">
                                      Not Assigned
                                    </span>
                                  ) : (
                                    <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-bold">Sent</span>
                                  )}
                                </td>
                                <td className="px-4 py-3 font-bold text-gray-700">{prog.score !== '-' ? `${prog.score}%` : '-'}</td>
                                <td className="px-4 py-3 text-gray-500 font-medium">{prog.attempts}</td>
                                <td className="px-4 py-3">
                                  {attRec ? (
                                    attRec.status === 'present' ? (
                                      <span className="inline-flex items-center px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-md text-xs font-bold">
                                        <UserCheck className="w-3 h-3 mr-1" /> Present
                                      </span>
                                    ) : (
                                      <span className="inline-flex items-center px-2 py-0.5 bg-rose-100 text-rose-700 rounded-md text-xs font-bold">
                                        <UserX className="w-3 h-3 mr-1" /> Absent
                                      </span>
                                    )
                                  ) : (
                                    <span className="text-gray-400 text-xs">-</span>
                                  )}
                                </td>
                                <td className="px-4 py-3 text-right">
                                  {prog.status === 'Pending' ? (
                                    <button
                                      onClick={() => handleSendSingleStudentReminder(username, a)}
                                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 rounded-lg text-xs font-bold transition-colors"
                                      title="Send direct notification reminder to this student"
                                    >
                                      <Bell className="w-3 h-3 text-amber-600" />
                                      <span>Remind</span>
                                    </button>
                                  ) : (
                                    <span className="text-gray-300 text-xs font-medium">-</span>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}
      {selectedReportUser && (
        <StudentReportModal
          user={selectedReportUser}
          onClose={() => setSelectedReportUser(null)}
        />
      )}
      {editingAssignment && (
        <EditGroupAssignmentModal
          assignment={editingAssignment}
          onSave={handleUpdateAssignment}
          onDelete={handleDeleteAssignment}
          onClose={() => setEditingAssignment(null)}
        />
      )}
    </div>
  );
};

export default GroupDetails;
