
import React, { useState, useEffect } from 'react';
import { User, CourseType } from '../types';
import { authService } from '../authService';
import { 
  Calendar, 
  CheckCircle2, 
  Users, 
  CheckSquare, 
  Square, 
  Save, 
  Clock, 
  AlertTriangle,
  Filter,
  Trash2,
  X,
  History,
  UserCheck,
  UserX,
  Sparkles,
  FileText
} from 'lucide-react';
import { StudentDetailedReportModal } from './StudentDetailedReportModal';

interface AttendanceProps {
  currentUser?: User;
}

const Attendance: React.FC<AttendanceProps> = ({ currentUser }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  // Admin State
  const [selectedCourse, setSelectedCourse] = useState<CourseType>('DSAT');
  const [attendanceDate, setAttendanceDate] = useState(new Date().toISOString().split('T')[0]);
  const [attendanceNotes, setAttendanceNotes] = useState('');
  const [selectedStudentUsernames, setSelectedStudentUsernames] = useState<string[]>([]);
  const [viewHistoryFor, setViewHistoryFor] = useState<User | null>(null);

  // Detailed Report State
  const [detailedReportStudent, setDetailedReportStudent] = useState<User | null>(null);

  // Parent State
  const [selectedChildForView, setSelectedChildForView] = useState<User | null>(null);

  useEffect(() => {
    const load = () => {
        if (currentUser?.role === 'admin' || currentUser?.role === 'co-admin') {
           loadUsers();
        } else if (currentUser?.role === 'parent' && currentUser.children) {
           const allUsers = authService.getAllUsers();
           const myChildren = allUsers.filter(u => currentUser.children?.includes(u.username));
           if (myChildren.length > 0 && !selectedChildForView) setSelectedChildForView(myChildren[0]);
        }
    };
    load();
    const unsubscribe = authService.subscribe(load);
    return () => unsubscribe();
  }, [currentUser, selectedChildForView]);

  const loadUsers = () => {
    setUsers(authService.getAllUsers().filter(u => u.role === 'student'));
  };

  const [studentTab, setStudentTab] = useState<'active' | 'inactive' | 'free'>('active');

  const activeStudentsCount = users.filter(u => u.isActive !== false && u.tier === 'premium').length;
  const inactiveStudentsCount = users.filter(u => u.isActive === false).length;
  const freeStudentsCount = users.filter(u => (u.tier === 'free' || !u.tier) && u.isActive !== false).length;

  const filteredStudents = users.filter(u => {
      const uCourses = u.courses || [];
      const uCourse = u.course || '';
      const matchesCourse = uCourses.includes(selectedCourse) || uCourse === selectedCourse;
      if (!matchesCourse) return false;

      if (studentTab === 'active') return u.isActive !== false && u.tier === 'premium';
      if (studentTab === 'inactive') return u.isActive === false;
      if (studentTab === 'free') return (u.tier === 'free' || !u.tier) && u.isActive !== false;
      return true;
  });

  const toggleStudentSelection = (username: string) => {
    if (selectedStudentUsernames.includes(username)) {
      setSelectedStudentUsernames(selectedStudentUsernames.filter(u => u !== username));
    } else {
      setSelectedStudentUsernames([...selectedStudentUsernames, username]);
    }
  };

  const selectAll = () => {
    if (selectedStudentUsernames.length === filteredStudents.length) {
      setSelectedStudentUsernames([]);
    } else {
      setSelectedStudentUsernames(filteredStudents.map(u => u.username));
    }
  };

  const handleSubmitAttendance = async () => {
    if (selectedStudentUsernames.length === 0) {
      setMessage({ type: 'error', text: 'Please select at least one student.' });
      return;
    }

    const success = await authService.batchRecordAttendance(selectedStudentUsernames, attendanceDate, attendanceNotes, 'present');
    if (success) {
      setMessage({ type: 'success', text: `Attendance recorded for ${selectedStudentUsernames.length} students. Financial dues updated.` });
      setSelectedStudentUsernames([]);
      setAttendanceNotes('');
      loadUsers();
    }
  };

  const handleDeleteAttendance = async (username: string, recordId: string) => {
    if (window.confirm("Warning: Deleting this attendance record will decrease the student's due amount. Continue?")) {
        await authService.deleteAttendance(username, recordId);
        loadUsers();
        if (viewHistoryFor) {
            const updatedUser = authService.getAllUsers().find(u => u.username === viewHistoryFor.username);
            setViewHistoryFor(updatedUser || null);
        }
    }
  };

  // --- RENDER VIEW FOR STUDENT/PARENT ---
  if (currentUser?.role === 'student' || currentUser?.role === 'parent') {
     const targetUser = currentUser.role === 'student' ? currentUser : selectedChildForView;
     
     // Update target user data freshly from local storage to get latest attendance
     const freshTargetUser = targetUser ? authService.getAllUsers().find(u => u.username === targetUser.username) : null;
     const attendanceRecords = freshTargetUser?.attendance || [];

     // Sort by date desc
     const sortedRecords = [...attendanceRecords].sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());

     return (
        <div className="max-w-4xl mx-auto py-10 px-6">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">My Attendance History</h2>
                <p className="text-gray-500">View logged session attendance.</p>
            </div>

            {currentUser.role === 'parent' && (
                <div className="mb-8 bg-white p-4 rounded-xl border border-purple-100 shadow-sm flex items-center space-x-4">
                    <span className="text-sm font-bold text-gray-500 uppercase">Select Child:</span>
                    <div className="flex space-x-2">
                        {authService.getAllUsers().filter(u => currentUser.children?.includes(u.username)).map(child => (
                            <button
                                key={child.username}
                                onClick={() => setSelectedChildForView(child)}
                                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                                    selectedChildForView?.username === child.username
                                    ? 'bg-purple-600 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                {child.name || child.username}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {freshTargetUser ? (
                 <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
                         <h3 className="font-bold text-gray-900 flex items-center">
                             <History className="w-5 h-5 mr-2 text-purple-600" />
                             Session Log: {freshTargetUser.name || freshTargetUser.username}
                         </h3>
                         <span className="text-xs font-bold bg-white border border-gray-200 px-3 py-1 rounded-full text-gray-500">
                             {sortedRecords.length} Sessions
                         </span>
                    </div>
                    
                    {sortedRecords.length > 0 ? (
                        <div className="divide-y divide-gray-100">
                            {sortedRecords.map(record => (
                                <div key={record.id} className="p-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-green-100 text-green-600 p-3 rounded-xl">
                                            <Calendar className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 text-lg">{new Date(record.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                            <p className="text-sm text-gray-500">{record.notes || 'Regular Session'}</p>
                                        </div>
                                    </div>
                                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider">
                                        {record.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                             <Calendar className="w-16 h-16 mb-4 opacity-20" />
                             <p>No attendance records found.</p>
                        </div>
                    )}
                 </div>
            ) : (
                <div className="text-center py-10">Select a student to view records.</div>
            )}
        </div>
     );
  }

  // --- RENDER VIEW FOR ADMIN ---
  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Class Attendance (Admin)</h2>
        <p className="text-gray-500">Track student attendance for billing and participation records.</p>
      </div>

      {message && (
        <div className={`mb-6 p-4 rounded-xl flex items-center ${message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
          {message.type === 'success' ? <CheckCircle2 className="w-5 h-5 mr-2" /> : <AlertTriangle className="w-5 h-5 mr-2" />}
          <span className="font-bold text-sm">{message.text}</span>
          <button onClick={() => setMessage(null)} className="ml-auto hover:bg-white/20 p-1 rounded"><X className="w-4 h-4" /></button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 [&>*]:min-w-0">
        <div className="lg:col-span-4 space-y-6">
          {/* Filter */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Select Course</label>
              <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-xl border border-gray-200">
                  <Filter className="w-5 h-5 text-gray-400 ml-2" />
                  <select 
                      value={selectedCourse} 
                      onChange={(e) => {
                          setSelectedCourse(e.target.value as CourseType);
                          setSelectedStudentUsernames([]);
                      }}
                      className="w-full bg-transparent border-none text-sm font-bold text-gray-900 focus:ring-0 cursor-pointer"
                  >
                      <option value="DSAT">DSAT</option>
                      <option value="EST1">EST 1</option>
                      <option value="EST2">EST 2</option>
                      <option value="ACT1">ACT 1</option>
                      <option value="ACT2">ACT 2</option>
                      <option value="GEOMETRY">Geometry</option>
                  </select>
              </div>
          </div>

          {/* Attendance Form */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-purple-600" /> Session Details
              </h3>
              <div className="space-y-4">
                  <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1">Date</label>
                      <input 
                          type="date" 
                          value={attendanceDate}
                          onChange={(e) => setAttendanceDate(e.target.value)}
                          className="w-full p-2 border border-gray-200 rounded-lg text-sm font-medium"
                      />
                  </div>
                  <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1">Notes (Optional)</label>
                      <textarea 
                          value={attendanceNotes}
                          onChange={(e) => setAttendanceNotes(e.target.value)}
                          className="w-full p-2 border border-gray-200 rounded-lg text-sm"
                          placeholder="e.g. Chapter 5 Review..."
                          rows={3}
                      />
                  </div>
                  <button 
                      onClick={handleSubmitAttendance}
                      className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold shadow-lg shadow-purple-100 transition-all flex items-center justify-center"
                  >
                      <Save className="w-4 h-4 mr-2" /> Save
                  </button>
              </div>
          </div>
        </div>

        <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-[600px]">
              <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex flex-col space-y-3">
                  <div className="flex justify-between items-center">
                      <h3 className="font-bold text-gray-900 flex items-center">
                          <Users className="w-5 h-5 mr-2 text-gray-500" />
                          Students in {selectedCourse} ({filteredStudents.length})
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
              </div>
              
              <div className="flex-1 overflow-y-auto p-2">
                  {filteredStudents.length > 0 ? (
                      <div className="space-y-2">
                          {filteredStudents.map(student => (
                              <div key={student.username} className={`flex items-center justify-between p-3 rounded-xl border transition-all ${selectedStudentUsernames.includes(student.username) ? 'bg-purple-50 border-purple-200' : 'bg-white border-gray-100 hover:bg-gray-50'}`}>
                                  <div 
                                      className="flex items-center space-x-3 cursor-pointer flex-1"
                                      onClick={() => toggleStudentSelection(student.username)}
                                  >
                                      <div className={`text-purple-600 ${selectedStudentUsernames.includes(student.username) ? 'opacity-100' : 'opacity-30'}`}>
                                          {selectedStudentUsernames.includes(student.username) ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5" />}
                                      </div>
                                      <div>
                                          <p className="font-bold text-gray-800 text-sm">{student.name || student.username}</p>
                                          <p className="text-xs text-gray-400">@{student.username}</p>
                                      </div>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                      <button 
                                          onClick={() => setDetailedReportStudent(student)}
                                          className="text-xs font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1 shadow-sm"
                                          title="View & Download Detailed Student Report or Send to WhatsApp"
                                      >
                                          <FileText className="w-3.5 h-3.5" />
                                          <span>Report</span>
                                      </button>
                                      <button 
                                          onClick={() => setViewHistoryFor(student)}
                                          className="text-xs font-bold text-gray-500 hover:text-purple-600 bg-gray-50 hover:bg-white px-3 py-1.5 rounded-lg border border-gray-200 transition-all"
                                      >
                                          History
                                      </button>
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

      {/* View History Modal */}
      {viewHistoryFor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[80vh] flex flex-col overflow-hidden">
                <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                    <h3 className="font-bold text-gray-900">Attendance Log: {viewHistoryFor.name || viewHistoryFor.username}</h3>
                    <button onClick={() => setViewHistoryFor(null)} className="p-1 hover:bg-gray-200 rounded"><X className="w-5 h-5" /></button>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {viewHistoryFor.attendance && viewHistoryFor.attendance.length > 0 ? (
                        viewHistoryFor.attendance.map(record => (
                            <div key={record.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-xl hover:bg-gray-50">
                                <div>
                                    <p className="font-bold text-gray-800 text-sm">{new Date(record.date).toLocaleDateString()}</p>
                                    <p className="text-xs text-gray-500">{record.notes || 'No notes'}</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded uppercase">{record.status}</span>
                                    <button 
                                        onClick={() => handleDeleteAttendance(viewHistoryFor!.username, record.id)}
                                        className="text-gray-400 hover:text-red-600 p-1 transition-colors"
                                        title="Delete Record"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-400 py-8 text-sm">No attendance records found.</p>
                    )}
                </div>
            </div>
        </div>
      )}
      {/* Student Detailed Report Modal */}
      {detailedReportStudent && (
        <StudentDetailedReportModal 
          isOpen={!!detailedReportStudent}
          onClose={() => setDetailedReportStudent(null)}
          student={detailedReportStudent}
          allStudents={users}
          onSelectStudent={(s) => setDetailedReportStudent(s)}
        />
      )}
    </div>
  );
};

export default Attendance;
