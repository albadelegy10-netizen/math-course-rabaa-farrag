import React, { useState, useEffect } from 'react';
import { User, CourseType, StudentGroup } from '../types';
import { authService } from '../authService';
import { Users, Edit2, Trash2, Plus, UserPlus, Save, Calendar, X, CheckSquare, Square, Search, CheckCircle2, Clock } from 'lucide-react';
import GroupDetails from './GroupDetails';

const formatCreatedDate = (group: StudentGroup) => {
  if (group.createdDay) return group.createdDay;
  let timestamp = group.createdAt;
  if (!timestamp && !isNaN(Number(group.id)) && Number(group.id) > 1500000000000) {
    timestamp = Number(group.id);
  }
  if (!timestamp) return 'Recently';
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(timestamp));
};

const Groups: React.FC = () => {
  const [groups, setGroups] = useState<StudentGroup[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [message, setMessage] = useState('');
  
  // Selected Group State for Details View
  const [selectedGroup, setSelectedGroup] = useState<StudentGroup | null>(null);

  // Filter Tabs for Existing Groups List: 'active' (default) | 'inactive' | 'all'
  const [groupFilterTab, setGroupFilterTab] = useState<'active' | 'inactive' | 'all'>('active');

  // Form Visibility & State
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentGroupId, setCurrentGroupId] = useState('');
  const [name, setName] = useState('');
  const [course, setCourse] = useState<CourseType>('DSAT');
  const [groupStatus, setGroupStatus] = useState<'active' | 'inactive'>('active');
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [studentSearch, setStudentSearch] = useState('');

  useEffect(() => {
    loadData();
    const unsubscribe = authService.subscribe(loadData);
    return () => unsubscribe();
  }, []);

  const loadData = () => {
    setGroups(authService.getGroups());
    setUsers(authService.getAllUsers());
  };

  const students = users.filter(u => u.role === 'student');
  const filteredStudents = students.filter(s => 
    (s.name || '').toLowerCase().includes(studentSearch.toLowerCase()) ||
    (s.username || '').toLowerCase().includes(studentSearch.toLowerCase())
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      setMessage('Group name is required.');
      return;
    }

    if (isEditing) {
      await authService.updateGroup(currentGroupId, name, course, selectedStudents, groupStatus);
      setMessage('Group updated successfully!');
    } else {
      await authService.createGroup(name, course, selectedStudents, groupStatus);
      setMessage('Group created successfully!');
    }
    
    resetForm();
    loadData();
    setTimeout(() => setMessage(''), 3000);
  };

  const resetForm = () => {
    setShowForm(false);
    setIsEditing(false);
    setCurrentGroupId('');
    setName('');
    setCourse('DSAT');
    setGroupStatus('active');
    setSelectedStudents([]);
    setStudentSearch('');
  };

  const openCreateForm = () => {
    resetForm();
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEdit = (group: StudentGroup) => {
    setIsEditing(true);
    setShowForm(true);
    setCurrentGroupId(group.id);
    setName(group.name);
    setCourse(group.course);
    setGroupStatus(group.status || 'active');
    setSelectedStudents(group.studentUsernames || []);
    setStudentSearch('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleStatus = async (id: string) => {
    await authService.toggleGroupStatus(id);
    loadData();
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this group?')) {
      await authService.deleteGroup(id);
      loadData();
      setMessage('Group deleted successfully!');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const toggleStudent = (username: string) => {
    if (selectedStudents.includes(username)) {
      setSelectedStudents(selectedStudents.filter(u => u !== username));
    } else {
      setSelectedStudents([...selectedStudents, username]);
    }
  };

  const selectAllStudents = () => {
    setSelectedStudents(students.map(s => s.username));
  };

  const deselectAllStudents = () => {
    setSelectedStudents([]);
  };

  if (selectedGroup) {
    return (
      <div className="max-w-6xl mx-auto p-4 md:p-6">
        <GroupDetails 
          group={selectedGroup} 
          users={users} 
          onBack={() => {
            setSelectedGroup(null);
            loadData(); // refresh groups in case assignments were added
          }} 
          onUpdate={loadData}
        />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl">
            <Users className="w-8 h-8 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Groups Management</h2>
            <p className="text-gray-500 font-medium">Create and manage student groups</p>
          </div>
        </div>

        {!showForm && (
          <button
            onClick={openCreateForm}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold flex items-center shadow-lg shadow-indigo-100 transition-all self-start sm:self-auto"
          >
            <Plus className="w-5 h-5 mr-2" /> Create New Group
          </button>
        )}
      </div>

      {message && (
        <div className={`p-4 rounded-xl font-medium border ${message.includes('required') ? 'bg-rose-50 text-rose-700 border-rose-200' : 'bg-green-50 text-green-700 border-green-200'}`}>
          {message}
        </div>
      )}

      {/* Create / Edit Group Form Section (Shown when Create New Group or Edit is pressed) */}
      {showForm && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-6 animate-in slide-in-from-top-2 duration-300">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              {isEditing ? <Edit2 className="w-5 h-5 mr-2 text-indigo-600" /> : <Plus className="w-5 h-5 mr-2 text-indigo-600" />}
              {isEditing ? 'Edit Group' : 'Create New Group'}
            </h3>
            <button
              type="button"
              onClick={resetForm}
              className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Group Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="e.g., DSAT Morning Batch"
                  autoFocus
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Course</label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value as CourseType)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                >
                  <option value="DSAT">DSAT</option>
                  <option value="EST1">EST 1</option>
                  <option value="EST2">EST 2</option>
                  <option value="ACT1">ACT 1</option>
                  <option value="ACT2">ACT 2</option>
                  <option value="GEOMETRY">Geometry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Group Status</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setGroupStatus('active')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
                      groupStatus === 'active' 
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm' 
                        : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Active</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setGroupStatus('inactive')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
                      groupStatus === 'inactive' 
                        ? 'bg-amber-600 text-white border-amber-600 shadow-sm' 
                        : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5 opacity-70" />
                    <span>Inactive</span>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <label className="text-sm font-bold text-gray-700 flex items-center">
                  <UserPlus className="w-4 h-4 mr-2 text-indigo-600" /> Select Students
                </label>
                <div className="flex items-center space-x-2 text-xs">
                  <button
                    type="button"
                    onClick={selectAllStudents}
                    className="px-2.5 py-1 bg-white border border-gray-200 hover:border-indigo-400 hover:text-indigo-600 rounded-lg font-semibold transition-colors flex items-center space-x-1"
                  >
                    <CheckSquare className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Select All ({students.length})</span>
                  </button>
                  <button
                    type="button"
                    onClick={deselectAllStudents}
                    className="px-2.5 py-1 bg-white border border-gray-200 hover:border-gray-400 text-gray-600 rounded-lg font-semibold transition-colors flex items-center space-x-1"
                  >
                    <Square className="w-3.5 h-3.5 text-gray-400" />
                    <span>Deselect All</span>
                  </button>
                </div>
              </div>

              {/* Search Bar for Students */}
              <div className="relative mb-3">
                <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search students by name or username..."
                  value={studentSearch}
                  onChange={(e) => setStudentSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="max-h-64 overflow-y-auto border border-gray-200 rounded-xl p-4 bg-gray-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredStudents.map((student) => {
                  const isSelected = selectedStudents.includes(student.username);
                  return (
                    <div 
                      key={student.username}
                      onClick={() => toggleStudent(student.username)}
                      className={`flex items-center p-3 rounded-xl border cursor-pointer transition-all ${
                        isSelected 
                          ? 'bg-indigo-50 border-indigo-200 shadow-sm' 
                          : 'bg-white border-gray-200 hover:border-indigo-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => {}}
                        className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 mr-3 flex-shrink-0 pointer-events-none"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-gray-900 text-sm break-words leading-tight">{student.name || student.username}</p>
                        {student.name && student.name !== student.username && (
                          <p className="text-[11px] text-gray-400 break-all">@{student.username}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
                {filteredStudents.length === 0 && (
                  <p className="text-gray-500 text-sm italic col-span-full py-2">
                    {studentSearch ? 'No matching students found.' : 'No students registered.'}
                  </p>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-2 font-medium">Selected: <strong className="text-indigo-600">{selectedStudents.length}</strong> / {students.length} students</p>
            </div>

            <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
              <button
                type="submit"
                className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors flex items-center shadow-md shadow-indigo-100"
              >
                <Save className="w-4 h-4 mr-2" />
                {isEditing ? 'Update Group' : 'Create Group'}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-50/50">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Existing Groups</h3>
            <p className="text-xs text-gray-500 mt-0.5">Click any group name to view assignments, reports, and attendance.</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Group Status Tabs */}
            <div className="flex bg-gray-200/80 p-1 rounded-xl text-xs font-bold space-x-1">
              <button
                type="button"
                onClick={() => setGroupFilterTab('active')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1.5 ${
                  groupFilterTab === 'active'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Active ({groups.filter(g => (g.status || 'active') === 'active').length})</span>
              </button>
              <button
                type="button"
                onClick={() => setGroupFilterTab('inactive')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1.5 ${
                  groupFilterTab === 'inactive'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Inactive ({groups.filter(g => g.status === 'inactive').length})</span>
              </button>
              <button
                type="button"
                onClick={() => setGroupFilterTab('all')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  groupFilterTab === 'all'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                }`}
              >
                <span>All ({groups.length})</span>
              </button>
            </div>

            {!showForm && (
              <button
                onClick={openCreateForm}
                className="hidden sm:flex items-center px-3.5 py-1.5 text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 rounded-xl transition-colors shadow-sm"
              >
                <Plus className="w-3.5 h-3.5 mr-1" /> New Group
              </button>
            )}
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-bold border-b border-gray-100">Group Name</th>
                <th className="p-4 font-bold border-b border-gray-100">Course</th>
                <th className="p-4 font-bold border-b border-gray-100">Status</th>
                <th className="p-4 font-bold border-b border-gray-100">Created Day</th>
                <th className="p-4 font-bold border-b border-gray-100">Students</th>
                <th className="p-4 font-bold border-b border-gray-100 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {groups
                .filter(g => {
                  const isAct = (g.status || 'active') === 'active';
                  if (groupFilterTab === 'active') return isAct;
                  if (groupFilterTab === 'inactive') return !isAct;
                  return true;
                })
                .map((group) => {
                  const isActive = (group.status || 'active') === 'active';
                  return (
                    <tr key={group.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4">
                        <p 
                          className="font-bold text-indigo-600 cursor-pointer hover:underline flex items-center"
                          onClick={() => setSelectedGroup(group)}
                        >
                          {group.name}
                        </p>
                      </td>
                      <td className="p-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                          {group.course}
                        </span>
                      </td>
                      <td className="p-4">
                        <button
                          type="button"
                          onClick={() => handleToggleStatus(group.id)}
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold transition-all border shadow-sm ${
                            isActive
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                              : 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100'
                          }`}
                          title={`Click to set group as ${isActive ? 'Inactive' : 'Active'}`}
                        >
                          {isActive ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                              <span>Active</span>
                            </>
                          ) : (
                            <>
                              <Clock className="w-3.5 h-3.5 mr-1 text-amber-600" />
                              <span>Inactive</span>
                            </>
                          )}
                        </button>
                      </td>
                      <td className="p-4">
                        <span className="inline-flex items-center text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-lg">
                          <Calendar className="w-3.5 h-3.5 mr-1 text-gray-500" />
                          {formatCreatedDate(group)}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex -space-x-2 overflow-hidden">
                          {group.studentUsernames && group.studentUsernames.slice(0, 5).map((username, i) => {
                            const s = students.find(u => u.username === username);
                            return (
                              <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold" title={s?.name || username}>
                                {(s?.name || username).substring(0, 2).toUpperCase()}
                              </div>
                            )
                          })}
                          {group.studentUsernames && group.studentUsernames.length > 5 && (
                            <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gray-100 text-gray-600 flex items-center justify-center text-xs font-bold">
                              +{group.studentUsernames.length - 5}
                            </div>
                          )}
                          {(!group.studentUsernames || group.studentUsernames.length === 0) && (
                            <span className="text-gray-400 text-sm italic">No students</span>
                          )}
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            onClick={() => handleToggleStatus(group.id)}
                            className="p-1.5 text-xs font-bold text-gray-500 hover:text-indigo-600 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors"
                            title={isActive ? 'Mark as Inactive (Finished Course)' : 'Mark as Active'}
                          >
                            {isActive ? 'Set Inactive' : 'Set Active'}
                          </button>
                          <button
                            onClick={() => handleEdit(group)}
                            className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(group.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              {groups.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-500 italic">
                    No groups have been created yet. Click "Create New Group" to get started.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Groups;

