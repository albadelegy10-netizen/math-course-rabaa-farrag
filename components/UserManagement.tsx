
import React, { useState, useEffect, useRef } from 'react';
import { User, UserRole, CourseType, StudentGroup } from '../types';
import { authService, safeStringify } from '../authService';
import { UserPlus, Shield, GraduationCap, Users, Phone, DollarSign, Baby, CheckCircle2, BarChart3, X, Download, Save, Edit2, Trash2, Undo, Crown, ArrowUpCircle, ArrowDownCircle, CheckSquare, ChevronLeft, ChevronRight, Search, UserCheck, UserX, Sparkles, FileText } from 'lucide-react';
import Reports from './Reports';
import { StudentDetailedReportModal } from './StudentDetailedReportModal';

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [groups, setGroups] = useState<StudentGroup[]>([]);
  const [message, setMessage] = useState('');
  const [selectedUserForReports, setSelectedUserForReports] = useState<User | null>(null);
  const [detailedReportStudent, setDetailedReportStudent] = useState<User | null>(null);

  // 3 Student Tabs State: active | inactive | free
  const [studentTab, setStudentTab] = useState<'active' | 'inactive' | 'free'>('active');

  // Edit State
  const [isEditing, setIsEditing] = useState(false);

  // Form State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('student');
  const [tier, setTier] = useState<'free' | 'premium'>('free');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [parentWhatsapp, setParentWhatsapp] = useState('');
  const [joinDate, setJoinDate] = useState(new Date().toISOString().split('T')[0]);
  const [paymentPlan, setPaymentPlan] = useState<'monthly' | 'weekly' | 'per_session'>('per_session');
  const [planPrice, setPlanPrice] = useState('');
  const [price, setPrice] = useState('');
  
  // Course State (Multi-select)
  const [selectedCourses, setSelectedCourses] = useState<CourseType[]>(['DSAT']);
  
  const [isActive, setIsActive] = useState(true);
  
  // Group selection state
  const [selectedGroupId, setSelectedGroupId] = useState('');
  const [isCreatingNewGroup, setIsCreatingNewGroup] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  
  // Parent specific state
  const [selectedChildren, setSelectedChildren] = useState<string[]>([]);
  
  // Profile Picture State
  const [profilePicture, setProfilePicture] = useState('');

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  // Search State
  const [searchTerm, setSearchTerm] = useState('');

  // Refs for scrolling
  const listEndRef = useRef<HTMLDivElement>(null);
  const listTopRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadUsers();
    loadGroups();
    const unsubscribe = authService.subscribe(() => {
        loadUsers();
        loadGroups();
    });
    return () => unsubscribe();
  }, []);

  const loadUsers = () => {
    setUsers([...authService.getAllUsers()].reverse());
  };

  const loadGroups = () => {
    setGroups(authService.getGroups());
  };

  const students = users.filter(u => u.role === 'student');
  // Groups can belong to any course, filter if needed based on first selected course or just all
  const filteredGroups = groups; 

  // Tab counts
  const activeStudentsCount = users.filter(u => u.role === 'student' && u.isActive !== false && u.tier === 'premium').length;
  const inactiveStudentsCount = users.filter(u => u.role === 'student' && u.isActive === false).length;
  const freeStudentsCount = users.filter(u => u.role === 'student' && (u.tier === 'free' || !u.tier) && u.isActive !== false).length;

  // Filtered users based on search term and studentTab
  const filteredUsers = users.filter((u) => {
    // 1. Search filter
    const term = searchTerm.toLowerCase().trim();
    if (term) {
      const matchesSearch = (
        (u.name || '').toLowerCase().includes(term) ||
        u.username.toLowerCase().includes(term) ||
        (u.whatsapp || '').toLowerCase().includes(term) ||
        (u.parentWhatsapp || '').toLowerCase().includes(term) ||
        (u.role || '').toLowerCase().includes(term) ||
        (u.courses && u.courses.join(', ').toLowerCase().includes(term)) ||
        (u.course && u.course.toLowerCase().includes(term))
      );
      if (!matchesSearch) return false;
    }

    // 2. Tab filter for students
    if (u.role === 'student') {
      if (studentTab === 'active') {
        return u.isActive !== false && u.tier === 'premium';
      } else if (studentTab === 'inactive') {
        return u.isActive === false;
      } else if (studentTab === 'free') {
        return (u.tier === 'free' || !u.tier) && u.isActive !== false;
      }
    } else {
      // Non-students (admins, parents) appear in Active tab
      return studentTab === 'active';
    }

    return true;
  });

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleChildSelection = (studentUsername: string) => {
    if (selectedChildren.includes(studentUsername)) {
      setSelectedChildren(selectedChildren.filter(id => id !== studentUsername));
    } else {
      setSelectedChildren([...selectedChildren, studentUsername]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 500000) { // 500KB limit
          setMessage('Error: Image size too large (max 500KB)');
          setTimeout(() => setMessage(''), 3000);
          return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCourseToggle = (c: CourseType) => {
    if (selectedCourses.includes(c)) {
      setSelectedCourses(selectedCourses.filter(sc => sc !== c));
    } else {
      setSelectedCourses([...selectedCourses, c]);
    }
  };

  const resetForm = () => {
    setUsername('');
    setPassword('');
    setName('');
    setEmail('');
    setWhatsapp('');
    setParentWhatsapp('');
    setPrice('');
    setSelectedChildren([]);
    setIsActive(true);
    setTier('free');
    setSelectedGroupId('');
    setIsCreatingNewGroup(false);
    setNewGroupName('');
    setIsEditing(false);
    setRole('student');
    setSelectedCourses(['DSAT']);
    setProfilePicture('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleEditClick = (user: User) => {
    setIsEditing(true);
    setUsername(user.username);
    setPassword(user.password);
    setName(user.name || '');
    setEmail(user.email || '');
    setRole(user.role);
    setTier(user.tier || 'free');
    setWhatsapp(user.whatsapp || '');
    setParentWhatsapp(user.parentWhatsapp || '');
    setJoinDate(user.joinDate || new Date().toISOString().split('T')[0]);
    setPaymentPlan(user.paymentPlan || 'per_session');
    setPlanPrice(user.planPrice ? user.planPrice.toString() : '');
    setPrice(user.pricePerSession ? user.pricePerSession.toString() : '');
    setProfilePicture(user.profilePicture || '');
    
    // Handle course migration
    if (user.courses && user.courses.length > 0) {
        setSelectedCourses(user.courses);
    } else if (user.course) {
        setSelectedCourses([user.course]);
    } else {
        setSelectedCourses(['DSAT']);
    }

    setIsActive(user.isActive !== false);
    setSelectedChildren(user.children || []);
    
    // Scroll to form
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
    setMessage('Editing user. Username cannot be changed.');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleToggleTier = async (user: User) => {
      const newTier: 'free' | 'premium' = user.tier === 'premium' ? 'free' : 'premium';
      const action = newTier === 'premium' ? 'Upgraded' : 'Downgraded';
      
      const updatedUser = { ...user, tier: newTier };
      await authService.updateUser(updatedUser);
      loadUsers();
      setMessage(`${user.name || user.username} ${action} to ${newTier} account.`);
      setTimeout(() => setMessage(''), 3000);
  };

  const handleDeleteClick = async (user: User) => {
    if (window.confirm(`Are you sure you want to delete ${user.name || user.username}? This action cannot be undone.`)) {
        const success = await authService.deleteUser(user.username);
        if (success) {
            setMessage('User deleted successfully.');
            loadUsers();
            if (isEditing && username === user.username) {
                resetForm();
            }
        } else {
            setMessage('Failed to delete user.');
        }
        setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password || !name) {
      setMessage('Error: Missing required fields');
      return;
    }

    if (role === 'student' && selectedCourses.length === 0) {
        setMessage('Error: Please select at least one course.');
        return;
    }

    // Find existing user to preserve deep data structures (history, payments, etc.)
    const existingUser = isEditing ? users.find(u => u.username === username) : undefined;

    const userData: User = {
      username,
      password,
      role,
      tier,
      name,
      email,
      whatsapp,
      parentWhatsapp,
      joinDate: role === 'student' ? joinDate : undefined,
      paymentPlan: role === 'student' ? paymentPlan : undefined,
      planPrice: role === 'student' && planPrice ? parseFloat(planPrice) : undefined,
      pricePerSession: price ? parseFloat(price) : 0,
      course: role === 'student' ? selectedCourses[0] : undefined, // Legacy support
      courses: role === 'student' ? selectedCourses : undefined, // New multi-course support
      isActive,
      children: role === 'parent' ? selectedChildren : undefined,
      profilePicture: profilePicture || undefined,
      
      // Preserve existing data or initialize for new user
      progress: existingUser?.progress || {},
      bookmarks: existingUser?.bookmarks || [],
      mistakes: existingUser?.mistakes || [],
      history: existingUser?.history || [],
      payments: existingUser?.payments || [],
      attendance: existingUser?.attendance || [],
      assignments: existingUser?.assignments || []
    };

    if (isEditing) {
        // Update Existing
        await authService.updateUser(userData);
        setMessage('User updated successfully!');
    } else {
        // Create New
        const success = await authService.createUser(userData);
        if (!success) {
            setMessage('Error: Username already exists.');
            return;
        }
        
        // Handle Group Assignment for New Students
        if (role === 'student') {
            if (isCreatingNewGroup && newGroupName) {
                // Group is associated with the first course for simplicity in creation, or logic needs adjustment
                await authService.createGroup(newGroupName, selectedCourses[0], [userData.username]);
            } else if (selectedGroupId) {
                await authService.addStudentToGroup(selectedGroupId, userData.username);
            }
        }
        setMessage('User created successfully!');
    }

    resetForm();
    loadUsers();
    loadGroups();
    
    if (!isEditing) {
        setCurrentPage(1);
        setTimeout(() => {
            listTopRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }

    setTimeout(() => setMessage(''), 3000);
  };

  const handleExportData = () => {
    const data = safeStringify(users);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `math_course_users_backup_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const getRoleIcon = (role: UserRole) => {
    switch (role) {
      case 'student': return <GraduationCap className="w-5 h-5" />;
      case 'parent': return <Baby className="w-5 h-5" />;
      default: return <Shield className="w-5 h-5" />;
    }
  };

  const getRoleColor = (role: UserRole) => {
    switch (role) {
      case 'student': return 'bg-blue-100 text-blue-600';
      case 'parent': return 'bg-orange-100 text-orange-600';
      default: return 'bg-purple-100 text-purple-600';
    }
  };

  const availableCourses: CourseType[] = ['DSAT', 'EST1', 'EST2', 'ACT1', 'ACT2', 'GEOMETRY'];

  return (
    <div className="max-w-7xl mx-auto py-10 px-6 relative">
      <div className="mb-8">
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 w-full">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">User Management</h2>
              <p className="text-gray-500">Create, edit, and view profiles for students, parents, and staff.</p>
            </div>
            <button 
                onClick={handleExportData}
                className="flex-shrink-0 flex items-center px-4 py-2.5 bg-green-600 shadow-sm shadow-green-200 hover:bg-green-700 text-white font-bold rounded-lg transition-colors"
            >
                <Download className="w-4 h-4 mr-2" />
                Export Scores
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 [&>*]:min-w-0">
        {/* Create/Edit User Form */}
        <div ref={formRef} className="lg:col-span-5 bg-white rounded-3xl border border-gray-200 p-5 sm:p-8 shadow-sm h-fit">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isEditing ? 'bg-orange-50 text-orange-600' : 'bg-purple-50 text-purple-600'}`}>
                {isEditing ? <Edit2 className="w-6 h-6" /> : <UserPlus className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{isEditing ? 'Edit User' : 'Add New User'}</h3>
            </div>
            {isEditing && (
                <button 
                    onClick={resetForm} 
                    className="flex items-center space-x-1 text-xs font-bold text-gray-500 hover:text-gray-700 bg-gray-100 px-3 py-1.5 rounded-lg"
                >
                    <Undo className="w-3 h-3" />
                    <span>Cancel</span>
                </button>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Profile Picture Upload */}
            <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="relative group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center overflow-hidden border-2 ${profilePicture ? 'border-purple-500' : 'border-gray-200 bg-white'}`}>
                        {profilePicture ? (
                            <img src={profilePicture} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                            <UserPlus className="w-8 h-8 text-gray-300" />
                        )}
                    </div>
                    <div className="absolute inset-0 bg-black/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Edit2 className="w-4 h-4 text-white" />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1">Profile Photo</label>
                    <input 
                        type="file" 
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        className="hidden"
                    />
                    <button 
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="text-xs font-bold text-purple-600 hover:text-purple-700 bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-lg transition-colors"
                    >
                        Upload Photo
                    </button>
                    <p className="text-[10px] text-gray-400 mt-1">Max size 500KB. Formats: JPG, PNG</p>
                </div>
                {profilePicture && (
                    <button 
                        type="button"
                        onClick={() => { setProfilePicture(''); if (fileInputRef.current) fileInputRef.current.value = ''; }}
                        className="ml-auto text-xs font-bold text-red-500 hover:text-red-600 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors"
                    >
                        Remove
                    </button>
                )}
            </div>

            {/* Login Info */}
            <div className="space-y-4">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">Login Credentials</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1">Username *</label>
                  <input
                    type="text"
                    required
                    disabled={isEditing}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={`w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-purple-500 outline-none text-sm ${isEditing ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : ''}`}
                    placeholder="jdoe123"
                  />
                  {isEditing && <p className="text-[10px] text-gray-400 mt-1">Cannot be changed</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1">Password *</label>
                  <input
                    type="text"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-purple-500 outline-none text-sm"
                    placeholder="Pass123!"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1">Role</label>
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value as UserRole)}
                        disabled={isEditing}
                        className={`w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-purple-500 outline-none text-sm bg-white ${isEditing ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <option value="student">Student</option>
                        <option value="parent">Parent</option>
                        <option value="co-admin">Co-Admin</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                {/* Tier Selection */}
                <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1">Account Tier</label>
                    <select
                        value={tier}
                        onChange={(e) => setTier(e.target.value as 'free' | 'premium')}
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-purple-500 outline-none text-sm bg-white"
                    >
                        <option value="free">Free</option>
                        <option value="premium">Premium</option>
                    </select>
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <div className="space-y-4">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">Profile Details</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-purple-500 outline-none text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-purple-500 outline-none text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1 flex items-center"><Phone className="w-3 h-3 mr-1"/> WhatsApp</label>
                  <input
                    type="text"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-purple-500 outline-none text-sm"
                    placeholder="+20 1..."
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1 flex items-center"><Phone className="w-3 h-3 mr-1"/> Parent WhatsApp</label>
                  <input
                    type="text"
                    value={parentWhatsapp}
                    onChange={(e) => setParentWhatsapp(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-purple-500 outline-none text-sm"
                    placeholder="+20 1..."
                  />
                </div>
              </div>
            </div>

            {/* Student Specific Fields */}
            {role === 'student' && (
              <div className="space-y-4">
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">Academic Info</h4>
                
                {/* Course Selection - Multi Select */}
                <div>
                    <label className="block text-xs font-bold text-gray-500 mb-2">Enrolled Courses</label>
                    <div className="grid grid-cols-2 gap-2 bg-gray-50 p-3 rounded-xl border border-gray-200">
                        {availableCourses.map((c) => (
                            <label key={c} className="flex items-center space-x-2 cursor-pointer select-none">
                                <div 
                                    onClick={() => handleCourseToggle(c)}
                                    className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${selectedCourses.includes(c) ? 'bg-purple-600 text-white' : 'bg-white border border-gray-300 text-transparent'}`}
                                >
                                    <CheckSquare className="w-3.5 h-3.5" />
                                </div>
                                <span className={`text-sm font-bold ${selectedCourses.includes(c) ? 'text-purple-700' : 'text-gray-600'}`}>{c}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 flex items-center">Join Date</label>
                    <input
                      type="date"
                      value={joinDate}
                      onChange={(e) => setJoinDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-purple-500 outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 flex items-center">Payment Plan</label>
                    <select
                      value={paymentPlan}
                      onChange={(e) => {
                          const plan = e.target.value as 'monthly' | 'weekly' | 'per_session';
                          setPaymentPlan(plan);
                          if (plan === 'monthly') {
                              setPlanPrice('2000');
                              setPrice('166.67');
                          } else if (plan === 'weekly') {
                              setPlanPrice('600');
                              setPrice('200');
                          } else {
                              setPlanPrice('');
                              setPrice('200');
                          }
                      }}
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-purple-500 outline-none text-sm"
                    >
                      <option value="per_session">Per Session</option>
                      <option value="weekly">Weekly (3 sessions)</option>
                      <option value="monthly">Monthly (12 sessions)</option>
                    </select>
                  </div>
                  
                  {paymentPlan !== 'per_session' && (
                    <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1 flex items-center"><DollarSign className="w-3 h-3 mr-1"/> Plan Total Price</label>
                      <input
                        type="number"
                        value={planPrice}
                        onChange={(e) => setPlanPrice(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-purple-500 outline-none text-sm"
                        placeholder="0.00"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 flex items-center"><DollarSign className="w-3 h-3 mr-1"/> Price / Session</label>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-purple-500 outline-none text-sm"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                {/* Group Assignment - Only show when creating new user to simplify logic */}
                {!isEditing && (
                    <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1">Assign to Group (Optional)</label>
                    {!isCreatingNewGroup ? (
                        <div className="flex gap-2">
                            <select 
                                value={selectedGroupId}
                                onChange={(e) => setSelectedGroupId(e.target.value)}
                                className="flex-1 px-3 py-2 rounded-lg border border-gray-200 focus:border-purple-500 outline-none text-sm bg-white"
                            >
                                <option value="">-- No Group --</option>
                                {filteredGroups.map(g => (
                                    <option key={g.id} value={g.id}>{g.name} ({g.course})</option>
                                ))}
                            </select>
                            <button 
                                type="button" 
                                onClick={() => setIsCreatingNewGroup(true)}
                                className="px-3 py-2 bg-green-50 text-green-700 text-xs font-bold rounded-lg hover:bg-green-100 border border-green-200"
                            >
                                Create New
                            </button>
                        </div>
                    ) : (
                        <div className="flex gap-2 animate-in slide-in-from-left-2">
                            <input 
                                type="text" 
                                value={newGroupName}
                                onChange={(e) => setNewGroupName(e.target.value)}
                                placeholder="New Group Name"
                                className="flex-1 px-3 py-2 rounded-lg border border-green-300 focus:border-green-500 outline-none text-sm"
                            />
                            <button 
                                type="button" 
                                onClick={() => { setIsCreatingNewGroup(false); setNewGroupName(''); }}
                                className="px-3 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                    <p className="text-[10px] text-gray-400 mt-1">
                        Note: Adding a student to a group will only assign them <strong>future</strong> homework created for that group.
                    </p>
                    </div>
                )}
              </div>
            )}

            {/* Parent Specific Fields */}
            {role === 'parent' && (
              <div className="space-y-4">
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">Link Children</h4>
                <div className="bg-gray-50 rounded-lg p-3 max-h-40 overflow-y-auto border border-gray-200">
                  {students.length > 0 ? students.map(student => (
                    <label key={student.username} className="flex items-center space-x-3 p-2 hover:bg-white rounded-md cursor-pointer transition-colors">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center ${selectedChildren.includes(student.username) ? 'bg-purple-600 border-purple-600' : 'border-gray-300 bg-white'}`}>
                        {selectedChildren.includes(student.username) && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                      </div>
                      <input 
                        type="checkbox" 
                        className="hidden"
                        checked={selectedChildren.includes(student.username)}
                        onChange={() => handleChildSelection(student.username)}
                      />
                      <div>
                         <p className="text-sm font-bold text-gray-800 leading-none">{student.name || student.username}</p>
                         <p className="text-xs text-gray-500">@{student.username} • {student.course}</p>
                      </div>
                    </label>
                  )) : (
                    <p className="text-xs text-gray-400 text-center py-2">No student accounts found.</p>
                  )}
                </div>
                <p className="text-[10px] text-gray-400">Select the student accounts this parent should manage.</p>
              </div>
            )}

            {/* Active Status */}
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
              <span className="text-sm font-bold text-gray-700">Account Status</span>
              <button
                type="button"
                onClick={() => setIsActive(!isActive)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${isActive ? 'bg-purple-600' : 'bg-gray-200'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isActive ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            {message && (
              <div className={`p-3 text-sm rounded-lg text-center font-bold animate-in fade-in slide-in-from-top-2 ${message.includes('Error') ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                {message}
              </div>
            )}

            <button
              type="submit"
              className={`w-full text-white py-3 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center space-x-2 ${isEditing ? 'bg-orange-500 hover:bg-orange-600 shadow-orange-200' : 'bg-purple-600 hover:bg-purple-700 shadow-purple-100'}`}
            >
              <Save className="w-5 h-5" />
              <span>{isEditing ? 'Update User' : 'Save New User'}</span>
            </button>
          </form>
        </div>

        {/* User List */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-200 p-5 sm:p-8 shadow-sm flex flex-col h-[800px]">
           <div className="flex items-center justify-between mb-4">
             <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-50 text-gray-600 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Registered Users {searchTerm ? `(${filteredUsers.length}/${users.length})` : `(${users.length})`}
              </h3>
             </div>
             <button 
                onClick={handleExportData}
                className="flex items-center space-x-2 text-sm text-gray-500 hover:text-purple-600 bg-gray-50 hover:bg-purple-50 px-3 py-2 rounded-lg transition-colors border border-gray-200"
                title="Download Database Backup"
             >
                <Download className="w-4 h-4" />
                <span className="font-bold">Backup DB</span>
             </button>
          </div>

          {/* 3 Student Status Tabs */}
          <div className="grid grid-cols-3 gap-2 mb-4 bg-gray-100/80 p-1.5 rounded-2xl border border-gray-200">
            <button
              onClick={() => { setStudentTab('active'); setCurrentPage(1); }}
              className={`flex items-center justify-center space-x-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition-all ${
                studentTab === 'active'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200 scale-[1.02]'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span className="truncate">Active Students</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${studentTab === 'active' ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800'}`}>
                {activeStudentsCount}
              </span>
            </button>

            <button
              onClick={() => { setStudentTab('inactive'); setCurrentPage(1); }}
              className={`flex items-center justify-center space-x-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition-all ${
                studentTab === 'inactive'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-200 scale-[1.02]'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
              }`}
            >
              <UserX className="w-4 h-4" />
              <span className="truncate">Inactive / Finished</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${studentTab === 'inactive' ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800'}`}>
                {inactiveStudentsCount}
              </span>
            </button>

            <button
              onClick={() => { setStudentTab('free'); setCurrentPage(1); }}
              className={`flex items-center justify-center space-x-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition-all ${
                studentTab === 'free'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 scale-[1.02]'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span className="truncate">Free Students</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${studentTab === 'free' ? 'bg-white/20 text-white' : 'bg-indigo-100 text-indigo-800'}`}>
                {freeStudentsCount}
              </span>
            </button>
          </div>

          {/* Search bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search by name, username, course, WhatsApp..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-200 focus:border-purple-500 outline-none text-sm bg-gray-50/50 hover:bg-white focus:bg-white transition-all shadow-inner"
            />
            {searchTerm && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setCurrentPage(1);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex-1 overflow-y-auto pr-2 space-y-3">
            <div ref={listTopRef} />
            {currentUsers.map((u, idx) => (
              <div key={idx} className={`flex flex-col p-4 rounded-xl border transition-all ${u.isActive !== false ? 'bg-white border-gray-200 hover:border-purple-200' : 'bg-gray-50 border-gray-100 opacity-75'}`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold overflow-hidden ${u.profilePicture ? 'bg-transparent' : getRoleColor(u.role)}`}>
                      {u.profilePicture ? (
                          <img src={u.profilePicture} alt={u.username} className="w-full h-full object-cover" />
                      ) : (
                          getRoleIcon(u.role)
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 flex items-center">
                          {u.name || u.username}
                          {u.tier === 'premium' && <Crown className="w-4 h-4 ml-2 text-yellow-500 fill-yellow-500" />}
                      </h4>
                      <p className="text-xs text-gray-500">@{u.username} • {u.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-wider ${u.tier === 'premium' ? 'bg-yellow-50 text-yellow-700' : 'bg-gray-100 text-gray-500'}`}>
                        {u.tier || 'free'}
                    </div>
                    <div className={`px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-wider ${u.isActive !== false ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                        {u.isActive !== false ? 'Active' : 'Inactive'}
                    </div>
                    
                    {/* Tier Toggle Quick Button */}
                    <button 
                        onClick={() => handleToggleTier(u)}
                        className={`p-1.5 rounded-lg transition-colors ${u.tier === 'premium' ? 'text-gray-400 bg-gray-50 hover:bg-gray-200' : 'text-yellow-600 bg-yellow-50 hover:bg-yellow-100'}`}
                        title={u.tier === 'premium' ? "Downgrade to Free" : "Upgrade to Premium"}
                    >
                        {u.tier === 'premium' ? <ArrowDownCircle className="w-4 h-4" /> : <ArrowUpCircle className="w-4 h-4" />}
                    </button>

                    {/* Action Buttons */}
                    {u.role === 'student' && (
                        <button 
                            onClick={() => setDetailedReportStudent(u)}
                            className="p-1.5 text-purple-700 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors flex items-center space-x-1"
                            title="Detailed Attendance & Score Report (PDF / WhatsApp)"
                        >
                            <FileText className="w-4 h-4" />
                        </button>
                    )}
                    <button 
                        onClick={() => handleEditClick(u)}
                        className="p-1.5 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                        title="Edit User"
                    >
                        <Edit2 className="w-4 h-4" />
                    </button>
                    <button 
                        onClick={() => handleDeleteClick(u)}
                        className="p-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                        title="Delete User"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2 pt-2 border-t border-gray-50 mb-3">
                   {u.role === 'student' && (
                     <>
                       <div className="text-xs">
                         <span className="text-gray-400 block mb-0.5">Courses</span>
                         <span className="font-medium text-gray-700">
                            {u.courses && u.courses.length > 0 ? u.courses.join(', ') : u.course || '-'}
                         </span>
                       </div>
                       <div className="text-xs">
                         <span className="text-gray-400 block mb-0.5">Plan Details</span>
                         <span className="font-medium text-gray-700">
                            {u.paymentPlan === 'monthly' ? `Monthly ($${u.planPrice})` : 
                             u.paymentPlan === 'weekly' ? `Weekly ($${u.planPrice})` : 
                             `Per Session ($${u.pricePerSession})`}
                         </span>
                       </div>
                       <div className="text-xs">
                         <span className="text-gray-400 block mb-0.5">Join Date</span>
                         <span className="font-medium text-gray-700">{u.joinDate || '-'}</span>
                       </div>
                     </>
                   )}
                   {u.role === 'parent' && (
                     <div className="text-xs col-span-2">
                       <span className="text-gray-400 block mb-0.5">Children</span>
                       <span className="font-medium text-gray-700">
                         {u.children && u.children.length > 0 ? u.children.join(', ') : 'None'}
                       </span>
                     </div>
                   )}
                   <div className="text-xs">
                     <span className="text-gray-400 block mb-0.5">WhatsApp</span>
                     <span className="font-medium text-gray-700">{u.whatsapp || '-'}</span>
                   </div>
                   <div className="text-xs">
                     <span className="text-gray-400 block mb-0.5">Parent #</span>
                     <span className="font-medium text-gray-700">{u.parentWhatsapp || '-'}</span>
                   </div>
                </div>

                <button 
                  onClick={() => setSelectedUserForReports(u)}
                  className="w-full flex items-center justify-center space-x-2 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-lg text-xs font-bold transition-colors"
                >
                  <BarChart3 className="w-4 h-4" />
                  <span>View Reports & Progress</span>
                </button>
              </div>
            ))}
            <div ref={listEndRef} />
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500">
                Showing <span className="font-bold">{indexOfFirstUser + 1}</span> to <span className="font-bold">{Math.min(indexOfLastUser, filteredUsers.length)}</span> of <span className="font-bold">{filteredUsers.length}</span>
              </p>
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                <div className="flex items-center space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => {
                    if (
                      number === 1 ||
                      number === totalPages ||
                      (number >= currentPage - 1 && number <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={number}
                          onClick={() => paginate(number)}
                          className={`w-7 h-7 rounded-lg text-xs font-bold transition-colors ${
                            currentPage === number
                              ? 'bg-purple-600 text-white'
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          {number}
                        </button>
                      );
                    } else if (
                      number === currentPage - 2 ||
                      number === currentPage + 2
                    ) {
                      return <span key={number} className="text-gray-400 text-xs">...</span>;
                    }
                    return null;
                  })}
                </div>

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Reports Modal */}
      {selectedUserForReports && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50">
               <div>
                  <h3 className="text-xl font-bold text-gray-900">{selectedUserForReports.name || selectedUserForReports.username}'s Reports</h3>
                  <p className="text-sm text-gray-500">@{selectedUserForReports.username}</p>
               </div>
               <button 
                onClick={() => setSelectedUserForReports(null)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
               >
                 <X className="w-6 h-6 text-gray-500" />
               </button>
            </div>
            <div className="flex-1 overflow-y-auto bg-[#f9fafb]">
               <Reports 
                  user={selectedUserForReports} 
                  isEditable={true}
                  onUpdateUser={async (updatedUser) => {
                      await authService.updateUser(updatedUser);
                      setSelectedUserForReports(updatedUser);
                      loadUsers();
                  }}
               />
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
          allStudents={users.filter(u => u.role === 'student')}
          onSelectStudent={(s) => setDetailedReportStudent(s)}
        />
      )}
    </div>
  );
};

export default UserManagement;
