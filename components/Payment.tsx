
import React, { useState, useEffect, useMemo } from 'react';
import { User, PaymentRecord, StudentGroup, CourseType } from '../types';
import { authService } from '../authService';
import { CreditCard, DollarSign, Plus, Trash2, Edit2, Search, Filter, Users, AlertTriangle, CheckCircle2, Download, Calendar, BookOpen, UserCheck, UserX, Sparkles, FileText } from 'lucide-react';
import { generateInvoicePDF, generateStatementPDF } from '../utils/invoiceGenerator';
import { StudentDetailedReportModal } from './StudentDetailedReportModal';

interface PaymentProps {
  currentUser: User;
}

interface ConfirmationState {
  isOpen: boolean;
  title: string;
  message: string;
  confirmLabel: string;
  cancelLabel: string;
  onConfirm: () => void;
  isDestructive?: boolean;
}

const Payment: React.FC<PaymentProps> = ({ currentUser }) => {
  // Data State
  const [allStudents, setAllStudents] = useState<User[]>([]);
  const [groups, setGroups] = useState<StudentGroup[]>([]);
  const [detailedReportStudent, setDetailedReportStudent] = useState<User | null>(null);
  
  // Filter State
  const [filterCourse, setFilterCourse] = useState<CourseType | ''>('');
  const [filterGroupId, setFilterGroupId] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [studentTab, setStudentTab] = useState<'active' | 'inactive' | 'free'>('active');
  
  // Selection & Form State
  const [selectedStudentUsername, setSelectedStudentUsername] = useState<string>('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [notes, setNotes] = useState('');
  const [editId, setEditId] = useState<string | null>(null);
  
  // UI State
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [confirmation, setConfirmation] = useState<ConfirmationState>({
    isOpen: false, title: '', message: '', confirmLabel: '', cancelLabel: '', onConfirm: () => {}
  });

  const isAdmin = currentUser.role === 'admin' || currentUser.role === 'co-admin';
  const isStudent = currentUser.role === 'student';
  const isParent = currentUser.role === 'parent';

  useEffect(() => {
    loadData();
    const unsubscribe = authService.subscribe(loadData);
    return () => unsubscribe();
  }, [currentUser]);

  const loadData = () => {
    const loadedUsers = authService.getAllUsers();
    setGroups(authService.getGroups());

    if (isStudent) {
        setAllStudents([currentUser]);
        setSelectedStudentUsername(currentUser.username);
    } else if (isParent) {
        const myChildren = loadedUsers.filter(u => currentUser.children?.includes(u.username));
        setAllStudents(myChildren);
        if (myChildren.length > 0 && !selectedStudentUsername) {
            setSelectedStudentUsername(myChildren[0].username);
        }
    } else {
        setAllStudents(loadedUsers.filter(u => u.role === 'student'));
    }
  };

  // Counts for tabs
  const activeStudentsCount = useMemo(() => allStudents.filter(s => s.isActive !== false && s.tier === 'premium').length, [allStudents]);
  const inactiveStudentsCount = useMemo(() => allStudents.filter(s => s.isActive === false).length, [allStudents]);
  const freeStudentsCount = useMemo(() => allStudents.filter(s => (s.tier === 'free' || !s.tier) && s.isActive !== false).length, [allStudents]);

  // Filter Logic
  const filteredStudents = useMemo(() => {
    if (!isAdmin) return allStudents;

    return allStudents.filter(student => {
      // 0. Filter by Student Tab Status
      if (studentTab === 'active' && !(student.isActive !== false && student.tier === 'premium')) return false;
      if (studentTab === 'inactive' && !(student.isActive === false)) return false;
      if (studentTab === 'free' && !((student.tier === 'free' || !student.tier) && student.isActive !== false)) return false;

      // 1. Filter by Course
      if (filterCourse && student.course !== filterCourse) return false;
      
      // 2. Filter by Group
      if (filterGroupId) {
        const group = groups.find(g => g.id === filterGroupId);
        if (group && !group.studentUsernames.includes(student.username)) return false;
      }
      
      // 3. Filter by Search Query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const nameMatch = student.name?.toLowerCase().includes(query);
        const usernameMatch = student.username.toLowerCase().includes(query);
        if (!nameMatch && !usernameMatch) return false;
      }
      
      return true;
    });
  }, [allStudents, filterCourse, filterGroupId, searchQuery, studentTab, groups, isAdmin]);

  // Derived Selected Student
  // We use allStudents here to ensure we can still view a student even if filters change temporarily, 
  // but for selection dropdown we use filteredStudents
  const selectedStudent = allStudents.find(u => u.username === selectedStudentUsername);

  // Financial Calculations
  const attendanceCount = selectedStudent?.attendance?.filter(a => a.status === 'present').length || 0;
  const totalSessions = attendanceCount; 
  
  let pricePerSession = selectedStudent?.pricePerSession;
  if (!pricePerSession) {
    if (selectedStudent?.paymentPlan === 'monthly') {
      pricePerSession = (selectedStudent?.planPrice || 2000) / 12;
    } else if (selectedStudent?.paymentPlan === 'weekly') {
      pricePerSession = (selectedStudent?.planPrice || 600) / 3;
    } else {
      pricePerSession = 200; // Default fallback for per_session
    }
  }

  const totalAmountDue = totalSessions * pricePerSession;
  const totalPaid = selectedStudent?.payments?.reduce((sum, p) => sum + p.amount, 0) || 0;
  const balance = totalAmountDue - totalPaid;

  const closeConfirmation = () => {
    setConfirmation(prev => ({ ...prev, isOpen: false }));
  };

  const handlePreSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAdmin) return;

    if (!selectedStudentUsername) {
      setMessage({ type: 'error', text: 'Please select a student first.' });
      return;
    }
    if (!amount || parseFloat(amount) <= 0) {
      setMessage({ type: 'error', text: 'Please enter a valid amount.' });
      return;
    }

    const studentName = selectedStudent?.name || selectedStudentUsername;
    const actionText = editId ? 'Edit Payment' : 'Add Payment';
    const messageText = editId 
      ? `Update payment to $${amount} for ${studentName}?`
      : `Add a new payment of $${amount} for ${studentName}?`;

    setConfirmation({
      isOpen: true,
      title: actionText,
      message: messageText,
      confirmLabel: 'OK',
      cancelLabel: 'Cancel',
      isDestructive: false,
      onConfirm: () => performSubmit()
    });
  };

  const performSubmit = async () => {
    if (editId) {
      const updatedPayment: PaymentRecord = {
        id: editId,
        amount: parseFloat(amount),
        date,
        notes,
        timestamp: Date.now() 
      };
      const success = await authService.updatePayment(selectedStudentUsername, updatedPayment);
      if (success) {
        setMessage({ type: 'success', text: 'Payment updated successfully.' });
        resetForm();
        loadData(); // Reload to refresh balance
      }
    } else {
      const newPayment: PaymentRecord = {
        id: Date.now().toString(),
        amount: parseFloat(amount),
        date,
        notes,
        timestamp: Date.now()
      };
      const success = await authService.addPayment(selectedStudentUsername, newPayment);
      if (success) {
        setMessage({ type: 'success', text: `Payment of $${amount} added for ${selectedStudent?.name}.` });
        
        if (selectedStudent) {
            generateInvoicePDF(selectedStudent, newPayment);
        }

        resetForm();
        loadData();
      }
    }
    closeConfirmation();
    setTimeout(() => setMessage(null), 3000);
  };

  const handlePreDelete = (paymentId: string, amount: number) => {
    setConfirmation({
      isOpen: true,
      title: 'Delete Payment',
      message: `Are you sure you want to delete this payment of $${amount.toFixed(2)}? This action cannot be undone.`,
      confirmLabel: 'Yes, Delete',
      cancelLabel: 'Cancel',
      isDestructive: true,
      onConfirm: () => performDelete(paymentId)
    });
  };

  const performDelete = async (paymentId: string) => {
    const success = await authService.deletePayment(selectedStudentUsername, paymentId);
    if (success) {
       setMessage({ type: 'success', text: 'Payment deleted.' });
       loadData();
       if (editId === paymentId) resetForm();
    }
    closeConfirmation();
    setTimeout(() => setMessage(null), 3000);
  };

  const resetForm = () => {
    setAmount('');
    setDate(new Date().toISOString().split('T')[0]);
    setNotes('');
    setEditId(null);
  };

  const handleEdit = (payment: PaymentRecord) => {
    setAmount(payment.amount.toString());
    setDate(payment.date);
    setNotes(payment.notes);
    setEditId(payment.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter helpers
  // Filter groups based on selected course if any
  const filteredGroups = filterCourse 
    ? groups.filter(g => g.course === filterCourse)
    : groups;

  return (
    <div className="max-w-7xl mx-auto py-10 px-6 relative">
      {/* Confirmation Modal */}
      {confirmation.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transform scale-100 transition-all">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`p-3 rounded-full ${confirmation.isDestructive ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                {confirmation.isDestructive ? <AlertTriangle className="w-6 h-6" /> : <CheckCircle2 className="w-6 h-6" />}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{confirmation.title}</h3>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {confirmation.message}
            </p>
            <div className="flex space-x-3">
              <button 
                onClick={closeConfirmation}
                className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors"
              >
                {confirmation.cancelLabel}
              </button>
              <button 
                onClick={confirmation.onConfirm}
                className={`flex-1 px-4 py-3 text-white font-bold rounded-xl shadow-lg transition-all ${
                  confirmation.isDestructive 
                    ? 'bg-red-600 hover:bg-red-700 shadow-red-200' 
                    : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200'
                }`}
              >
                {confirmation.confirmLabel}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Financial Management</h2>
        <p className="text-gray-500">
          {isAdmin 
            ? "Track student tuition, record payments, and monitor outstanding balances."
            : "View tuition history and outstanding balance."}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 [&>*]:min-w-0">
        
        {/* LEFT COLUMN: Controls & Form (Admin/Parent) */}
        {!isStudent && (
          <div className="lg:col-span-4 space-y-6">
            
            {/* 1. Filtering & Selection (Admin Only) */}
            {isAdmin && (
              <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm space-y-5">
                 {/* 3 Student Status Tabs */}
                 <div className="grid grid-cols-3 gap-1.5 bg-gray-100/80 p-1 rounded-2xl border border-gray-200 mb-2">
                    <button
                        type="button"
                        onClick={() => { setStudentTab('active'); setSelectedStudentUsername(''); }}
                        className={`flex items-center justify-center space-x-1 py-2 px-1 rounded-xl text-[11px] font-bold transition-all ${
                            studentTab === 'active'
                                ? 'bg-emerald-600 text-white shadow-sm'
                                : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                        }`}
                    >
                        <UserCheck className="w-3 h-3" />
                        <span className="truncate">Active</span>
                        <span className={`px-1 rounded-full text-[9px] font-black ${studentTab === 'active' ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800'}`}>
                            {activeStudentsCount}
                        </span>
                    </button>

                    <button
                        type="button"
                        onClick={() => { setStudentTab('inactive'); setSelectedStudentUsername(''); }}
                        className={`flex items-center justify-center space-x-1 py-2 px-1 rounded-xl text-[11px] font-bold transition-all ${
                            studentTab === 'inactive'
                                ? 'bg-amber-600 text-white shadow-sm'
                                : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                        }`}
                    >
                        <UserX className="w-3 h-3" />
                        <span className="truncate">Inactive</span>
                        <span className={`px-1 rounded-full text-[9px] font-black ${studentTab === 'inactive' ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800'}`}>
                            {inactiveStudentsCount}
                        </span>
                    </button>

                    <button
                        type="button"
                        onClick={() => { setStudentTab('free'); setSelectedStudentUsername(''); }}
                        className={`flex items-center justify-center space-x-1 py-2 px-1 rounded-xl text-[11px] font-bold transition-all ${
                            studentTab === 'free'
                                ? 'bg-indigo-600 text-white shadow-sm'
                                : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                        }`}
                    >
                        <Sparkles className="w-3 h-3" />
                        <span className="truncate">Free</span>
                        <span className={`px-1 rounded-full text-[9px] font-black ${studentTab === 'free' ? 'bg-white/20 text-white' : 'bg-indigo-100 text-indigo-800'}`}>
                            {freeStudentsCount}
                        </span>
                    </button>
                 </div>

                 <div className="flex items-center space-x-2 text-gray-400 mb-2">
                    <Filter className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">Filters</span>
                 </div>
                 
                 {/* Course & Group Filters */}
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Course</label>
                        <select 
                            value={filterCourse}
                            onChange={(e) => {
                                setFilterCourse(e.target.value as CourseType);
                                setFilterGroupId('');
                                setSelectedStudentUsername('');
                            }}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-200"
                        >
                            <option value="">All Courses</option>
                            <option value="DSAT">DSAT</option>
                            <option value="EST1">EST 1</option>
                            <option value="EST2">EST 2</option>
                            <option value="ACT1">ACT 1</option>
                            <option value="ACT2">ACT 2</option>
                        </select>
                    </div>
                    {/* Group Filter */}
                    <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Group</label>
                        <select 
                            value={filterGroupId}
                            onChange={(e) => {
                                setFilterGroupId(e.target.value);
                                setSelectedStudentUsername('');
                            }}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-200"
                        >
                            <option value="">All Groups</option>
                            {filteredGroups.map(g => (
                                <option key={g.id} value={g.id}>{g.name}</option>
                            ))}
                        </select>
                    </div>
                 </div>

                 {/* Search Filter */}
                 <div>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by student name..."
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setSelectedStudentUsername('');
                            }}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pl-9 pr-3 text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-200"
                        />
                    </div>
                 </div>

                 {/* Student Selection */}
                 <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Select Student</label>
                    <div className="relative">
                        <select
                            value={selectedStudentUsername}
                            onChange={(e) => {
                                setSelectedStudentUsername(e.target.value);
                                resetForm();
                            }}
                            className="w-full appearance-none bg-purple-50 border border-purple-100 text-purple-900 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-bold shadow-sm transition-all"
                        >
                            <option value="">-- View All in Filter ({filteredStudents.length}) --</option>
                            {filteredStudents.map(u => (
                                <option key={u.username} value={u.username}>
                                    {u.name || u.username} ({u.course || 'N/A'})
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-purple-500">
                            <Search className="w-4 h-4" />
                        </div>
                    </div>
                 </div>
              </div>
            )}

            {/* Parent Selection (Simpler) */}
            {isParent && (
               <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Select Child</label>
                  <select
                        value={selectedStudentUsername}
                        onChange={(e) => setSelectedStudentUsername(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-200"
                    >
                        {allStudents.map(u => (
                            <option key={u.username} value={u.username}>{u.name || u.username}</option>
                        ))}
                    </select>
               </div>
            )}

            {/* 2. Payment Form (ADMIN ONLY - Only visible when student selected) */}
            {isAdmin && selectedStudentUsername && (
              <div className={`bg-white rounded-3xl border border-gray-200 p-8 shadow-sm transition-all duration-300 animate-in slide-in-from-left-4`}>
                <div className="flex items-center space-x-3 mb-6">
                   <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center">
                     <DollarSign className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold text-gray-900">{editId ? 'Edit Payment' : 'Record New Payment'}</h3>
                </div>

                <form onSubmit={handlePreSubmit} className="space-y-4">
                   <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1">Amount ($)</label>
                      <input 
                        type="number" 
                        step="0.01"
                        required
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-purple-500 outline-none font-bold text-lg"
                        placeholder="0.00"
                      />
                   </div>

                   <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1">Date</label>
                      <input 
                        type="date" 
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-purple-500 outline-none text-sm font-medium"
                      />
                   </div>

                   <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1">Notes (Optional)</label>
                      <textarea 
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-purple-500 outline-none text-sm"
                        rows={3}
                        placeholder="e.g. Cash, Bank Transfer..."
                      />
                   </div>

                   {message && (
                     <div className={`p-3 rounded-xl text-sm font-bold text-center ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                       {message.text}
                     </div>
                   )}

                   <div className="flex space-x-3 pt-2">
                     {editId && (
                       <button type="button" onClick={resetForm} className="px-4 py-3 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200 transition-colors">
                         Cancel
                       </button>
                     )}
                     <button 
                      type="submit" 
                      className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl font-bold text-white transition-all shadow-lg ${editId ? 'bg-orange-500 hover:bg-orange-600 shadow-orange-200' : 'bg-green-600 hover:bg-green-700 shadow-green-200'}`}
                     >
                       {editId ? <Edit2 className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                       <span>{editId ? 'Update' : 'Add Payment'}</span>
                     </button>
                   </div>
                </form>
              </div>
            )}
          </div>
        )}

        {/* RIGHT COLUMN: SUMMARY & HISTORY */}
        <div className={isStudent ? "lg:col-span-12 space-y-6" : "lg:col-span-8 space-y-6"}>
           {selectedStudent ? (
             <>
               {/* Financial Summary Card */}
               <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{selectedStudent.name || selectedStudent.username}</h3>
                      <p className="text-sm text-gray-500">@{selectedStudent.username} • {selectedStudent.paymentPlan === 'monthly' ? `Monthly ($${selectedStudent.planPrice})` : selectedStudent.paymentPlan === 'weekly' ? `Weekly ($${selectedStudent.planPrice})` : 'Per Session'} • Rate: ${Number.isInteger(pricePerSession) ? pricePerSession : pricePerSession.toFixed(2)}/session</p>
                    </div>
                    <div className="flex items-center space-x-3 text-right">
                       <button
                         onClick={() => setDetailedReportStudent(selectedStudent)}
                         className="flex items-center space-x-1.5 px-3 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 rounded-xl text-xs font-bold transition-all shadow-sm"
                         title="Full Detailed Performance, Attendance, and Financial Report (PDF / WhatsApp)"
                       >
                         <FileText className="w-4 h-4" />
                         <span>Report</span>
                       </button>
                       <div>
                          <p className="text-xs font-bold text-gray-400 uppercase">Billable Sessions</p>
                          <p className="text-2xl font-bold text-gray-900">{totalSessions}</p>
                       </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                     <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                        <p className="text-xs font-bold text-gray-500 uppercase mb-1">Total Due</p>
                        <p className="text-2xl font-black text-gray-900">${totalAmountDue.toFixed(2)}</p>
                     </div>
                     <div className="bg-green-50 p-4 rounded-2xl border border-green-100">
                        <p className="text-xs font-bold text-green-600 uppercase mb-1">Total Paid</p>
                        <p className="text-2xl font-black text-green-700">${totalPaid.toFixed(2)}</p>
                     </div>
                     <div className={`p-4 rounded-2xl border ${balance > 0 ? 'bg-red-50 border-red-100 text-red-700' : 'bg-emerald-50 border-emerald-100 text-emerald-700'}`}>
                        <p className="text-xs font-bold uppercase mb-1">Wallet Balance</p>
                        <p className="text-2xl font-black">
                          {balance > 0 ? `-$${balance.toFixed(2)}` : `+$${Math.abs(balance).toFixed(2)}`}
                        </p>
                        <p className="text-[10px] font-bold opacity-75">{balance > 0 ? 'Outstanding (Owes Money)' : 'In Credit'}</p>
                     </div>
                  </div>
               </div>

               {/* Payment History Table */}
               <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden min-h-[400px]">
                  <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
                     <h3 className="text-lg font-bold text-gray-900 flex items-center">
                        <CreditCard className="w-5 h-5 mr-2 text-gray-500" />
                        Transaction History
                     </h3>
                     <div className="flex items-center gap-3">
                       <button
                         onClick={() => generateStatementPDF(selectedStudent)}
                         className="flex items-center text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors"
                         title="Download Full Statement"
                       >
                         <Download className="w-4 h-4 mr-1.5" />
                         Statement
                       </button>
                       <span className="bg-white px-3 py-1 rounded-full text-xs font-bold border border-gray-200 text-gray-500">
                         {selectedStudent.payments?.length || 0} Records
                       </span>
                     </div>
                  </div>
                  
                  {selectedStudent.payments && selectedStudent.payments.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="bg-gray-50 border-b border-gray-100">
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Amount</th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Notes</th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {selectedStudent.payments.map((payment) => (
                            <tr key={payment.id} className="hover:bg-gray-50/80 transition-colors">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-700">
                                {new Date(payment.date).toLocaleDateString()}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">
                                +${payment.amount.toFixed(2)}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                                {payment.notes || '-'}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button 
                                  onClick={() => generateInvoicePDF(selectedStudent, payment)}
                                  className={`text-indigo-600 hover:text-indigo-900 bg-indigo-50 p-2 rounded-lg hover:bg-indigo-100 transition-colors ${isAdmin ? 'mr-4' : ''}`}
                                  title="Download Receipt"
                                >
                                  <Download className="w-4 h-4" />
                                </button>
                                {isAdmin && (
                                  <>
                                    <button 
                                      onClick={() => handleEdit(payment)}
                                      className="text-blue-600 hover:text-blue-900 mr-4 bg-blue-50 p-2 rounded-lg hover:bg-blue-100 transition-colors"
                                      title="Edit"
                                    >
                                      <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button 
                                      onClick={() => handlePreDelete(payment.id, payment.amount)}
                                      className="text-red-600 hover:text-red-900 bg-red-50 p-2 rounded-lg hover:bg-red-100 transition-colors"
                                      title="Delete"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  </>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                       <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                         <CreditCard className="w-8 h-8 text-gray-400" />
                       </div>
                       <p className="text-gray-500 font-medium">No payment records found.</p>
                       {isAdmin && <p className="text-gray-400 text-sm mt-1">Add a payment using the form.</p>}
                    </div>
                  )}
               </div>

               {/* Attendance History Table */}
               <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden min-h-[400px]">
                  <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
                     <h3 className="text-lg font-bold text-gray-900 flex items-center">
                        <Calendar className="w-5 h-5 mr-2 text-gray-500" />
                        Attendance & Sessions History
                     </h3>
                     <span className="bg-white px-3 py-1 rounded-full text-xs font-bold border border-gray-200 text-gray-500">
                       {selectedStudent.attendance?.filter(a => a.status === 'present').length || 0} Sessions Attended
                     </span>
                  </div>
                  
                  {selectedStudent.attendance && selectedStudent.attendance.filter(a => a.status === 'present').length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="bg-gray-50 border-b border-gray-100">
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Session Details / Lesson</th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {selectedStudent.attendance.filter(a => a.status === 'present').sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((record) => (
                            <tr key={record.id} className="hover:bg-gray-50/80 transition-colors">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-700">
                                {new Date(record.date).toLocaleDateString()}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-600 font-medium max-w-sm">
                                <div className="flex items-center">
                                  <BookOpen className="w-4 h-4 mr-2 text-indigo-400 flex-shrink-0" />
                                  <span className="truncate">{record.notes?.replace('Session: ', '') || 'General Session'}</span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-bold text-green-600">
                                Attended
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                       <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                         <Calendar className="w-8 h-8 text-gray-400" />
                       </div>
                       <p className="text-gray-500 font-medium">No attended sessions found.</p>
                    </div>
                  )}
               </div>
             </>
           ) : (
             // No Student Selected - Show Overall Table
             <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden min-h-[600px]">
                <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900 flex items-center">
                        <Users className="w-5 h-5 mr-2 text-gray-500" />
                        Financial Overview {filterCourse && `(${filterCourse})`}
                    </h3>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{filteredStudents.length} Students Found</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Student</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Plan</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Total Due</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Paid</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Balance</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredStudents.map(student => {
                                const sAttendance = student.attendance?.filter(a => a.status === 'present').length || 0;
                                const sDue = sAttendance * (student.pricePerSession || 0);
                                const sPaid = student.payments?.reduce((acc, p) => acc + p.amount, 0) || 0;
                                const sWallet = sPaid - sDue;
                                
                                return (
                                    <tr key={student.username} className={`hover:bg-gray-50/80 transition-colors cursor-pointer ${sWallet < 0 ? 'bg-red-50/30' : ''}`} onClick={() => setSelectedStudentUsername(student.username)}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="font-bold text-gray-800">{student.name || student.username}</div>
                                            <div className="text-xs text-gray-400">@{student.username}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <div className="font-medium text-gray-700 capitalize">{student.paymentPlan ? student.paymentPlan.replace('_', ' ') : 'Per session'}</div>
                                            <div className="text-xs text-gray-400">{student.course}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">
                                            ${sDue.toFixed(2)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600 text-right">
                                            ${sPaid.toFixed(2)}
                                        </td>
                                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-black text-right ${sWallet < 0 ? 'text-red-600' : 'text-emerald-600'}`}>
                                            ${sWallet.toFixed(2)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            {sWallet < 0 ? (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-800">
                                                    Outstanding
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                                                    In Credit
                                                </span>
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
      </div>

      {/* Student Detailed Report Modal */}
      {detailedReportStudent && (
        <StudentDetailedReportModal 
          isOpen={!!detailedReportStudent}
          onClose={() => setDetailedReportStudent(null)}
          student={detailedReportStudent}
          allStudents={allStudents}
          onSelectStudent={(s) => setDetailedReportStudent(s)}
        />
      )}
    </div>
  );
};

export default Payment;
