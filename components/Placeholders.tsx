
import React from 'react';
import { CreditCard, FileText, Calendar, Construction } from 'lucide-react';

export const Payment: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
    <div className="w-20 h-20 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">
      <CreditCard className="w-10 h-10" />
    </div>
    <h2 className="text-3xl font-bold text-gray-900 mb-2">Payment Portal</h2>
    <p className="text-gray-500 max-w-md">Manage your tuition fees, view transaction history, and download invoices here.</p>
    <div className="mt-8 p-4 bg-yellow-50 text-yellow-800 rounded-lg text-sm font-medium flex items-center">
       <Construction className="w-4 h-4 mr-2" />
       Payment integration is currently under maintenance.
    </div>
  </div>
);

export const Homework: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
    <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
      <FileText className="w-10 h-10" />
    </div>
    <h2 className="text-3xl font-bold text-gray-900 mb-2">My Homework</h2>
    <p className="text-gray-500 max-w-md">View assigned tasks, submit your work, and check grades from your instructor.</p>
     <div className="mt-8 w-full max-w-md bg-white border border-gray-200 rounded-xl p-6">
        <p className="text-gray-400 italic">No pending assignments.</p>
     </div>
  </div>
);

export const Attendance: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
    <div className="w-20 h-20 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
      <Calendar className="w-10 h-10" />
    </div>
    <h2 className="text-3xl font-bold text-gray-900 mb-2">Attendance Record</h2>
    <p className="text-gray-500 max-w-md">Track your class attendance and punctuality.</p>
    <div className="mt-8 grid grid-cols-3 gap-4 w-full max-w-lg">
       <div className="bg-white p-4 rounded-xl border border-gray-200">
          <p className="text-2xl font-bold text-gray-900">0</p>
          <p className="text-xs text-gray-400 uppercase font-bold">Present</p>
       </div>
       <div className="bg-white p-4 rounded-xl border border-gray-200">
          <p className="text-2xl font-bold text-gray-900">0</p>
          <p className="text-xs text-gray-400 uppercase font-bold">Absent</p>
       </div>
       <div className="bg-white p-4 rounded-xl border border-gray-200">
          <p className="text-2xl font-bold text-gray-900">100%</p>
          <p className="text-xs text-gray-400 uppercase font-bold">Rate</p>
       </div>
    </div>
  </div>
);
