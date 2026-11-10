
import React, { useState, useEffect } from 'react';
import { User } from '../types';
import { authService } from '../authService';
import { LESSONS } from '../constants';
import Reports from './Reports';
import { 
  User as UserIcon, 
  CreditCard, 
  Activity, 
  Calendar, 
  TrendingUp,
  DollarSign
} from 'lucide-react';

interface ParentDashboardProps {
  currentUser: User;
}

const ParentDashboard: React.FC<ParentDashboardProps> = ({ currentUser }) => {
  const [children, setChildren] = useState<User[]>([]);
  const [selectedChild, setSelectedChild] = useState<User | null>(null);

  useEffect(() => {
    if (currentUser.children && currentUser.children.length > 0) {
      const allUsers = authService.getAllUsers();
      const myChildren = allUsers.filter(u => currentUser.children?.includes(u.username));
      setChildren(myChildren);
      if (myChildren.length > 0 && !selectedChild) {
        setSelectedChild(myChildren[0]);
      }
    }
  }, [currentUser, selectedChild]);

  if (!children || children.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-6 text-center">
        <div className="w-24 h-24 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <UserIcon className="w-12 h-12" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Parent Portal</h2>
        <p className="text-gray-500 text-lg max-w-lg mx-auto leading-relaxed">
          No student accounts are currently linked to your profile. Please contact the administrator to link your children's accounts.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Parent Dashboard</h2>
        <p className="text-gray-500">Monitor your children's academic progress, attendance, and tuition status.</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Child Selector */}
        <div className="lg:col-span-1 space-y-4">
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2 px-1">My Children</h3>
          {children.map(child => (
            <button
              key={child.username}
              onClick={() => setSelectedChild(child)}
              className={`w-full flex items-center space-x-4 p-4 rounded-xl border transition-all text-left ${
                selectedChild?.username === child.username 
                  ? 'bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-200' 
                  : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg overflow-hidden ${selectedChild?.username === child.username ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-600'}`}>
                {child.profilePicture ? (
                    <img src={child.profilePicture} alt={child.username} className="w-full h-full object-cover" />
                ) : (
                    child.name ? child.name.charAt(0).toUpperCase() : child.username.charAt(0).toUpperCase()
                )}
              </div>
              <div className="min-w-0">
                <p className="font-bold truncate">{child.name || child.username}</p>
                <p className={`text-xs truncate ${selectedChild?.username === child.username ? 'text-purple-100' : 'text-gray-400'}`}>
                  {child.course || 'Student'}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Detailed View */}
        {selectedChild && (
          <div className="lg:col-span-3 space-y-8">
            
            {/* Quick Stats */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Activity className="w-5 h-5"/></div>
                  <h4 className="text-sm font-bold text-gray-500">Completion</h4>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  {Object.keys(selectedChild.progress).length} <span className="text-sm font-medium text-gray-400">/ {LESSONS.length} Lessons</span>
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-green-50 text-green-600 rounded-lg"><Calendar className="w-5 h-5"/></div>
                  <h4 className="text-sm font-bold text-gray-500">Attendance</h4>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  {selectedChild.history?.length || 0} <span className="text-sm font-medium text-gray-400">Sessions</span>
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-orange-50 text-orange-600 rounded-lg"><CreditCard className="w-5 h-5"/></div>
                  <h4 className="text-sm font-bold text-gray-500">Total Fees</h4>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  ${((selectedChild.history?.length || 0) * (selectedChild.pricePerSession || 0)).toFixed(2)}
                </p>
              </div>
            </div>

            {/* Financial Details */}
            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                 <h3 className="text-xl font-bold text-gray-900 flex items-center">
                   <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                   Payment & Tuition Info
                 </h3>
                 <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                   Active Student
                 </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                   <div className="flex justify-between items-center py-3 border-b border-gray-50">
                     <span className="text-gray-500 text-sm">Rate per Session</span>
                     <span className="font-bold text-gray-900">${selectedChild.pricePerSession || 0}</span>
                   </div>
                   <div className="flex justify-between items-center py-3 border-b border-gray-50">
                     <span className="text-gray-500 text-sm">Total Sessions Attended</span>
                     <span className="font-bold text-gray-900">{selectedChild.history?.length || 0}</span>
                   </div>
                   <div className="flex justify-between items-center py-3 border-b border-gray-50 bg-gray-50/50 px-2 rounded-lg">
                     <span className="text-gray-900 font-bold text-sm">Total Amount Due (Est.)</span>
                     <span className="font-bold text-green-600 text-lg">${((selectedChild.history?.length || 0) * (selectedChild.pricePerSession || 0)).toFixed(2)}</span>
                   </div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
                   <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Payment Status</p>
                   <p className="text-sm text-gray-600 mb-4">
                     Payments are calculated based on the number of exams/quizzes taken. Please coordinate with the admin for actual settlement.
                   </p>
                   <button className="text-purple-600 font-bold text-sm hover:underline">Contact Admin via WhatsApp</button>
                </div>
              </div>
            </div>

            {/* Progress & Reports */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                  Academic Reports & Logs
                </h3>
              </div>
              <div className="p-2">
                 <Reports user={selectedChild} />
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default ParentDashboard;
