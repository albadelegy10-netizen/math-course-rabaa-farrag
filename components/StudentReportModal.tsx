import React, { useState } from 'react';
import { User } from '../types';
import { X, Send, CheckCircle, Clock, Trash2, Unlock } from 'lucide-react';
import { LESSONS } from '../constants';
import { authService } from '../authService';

interface StudentReportModalProps {
  user: User;
  onClose: () => void;
}

const StudentReportModal: React.FC<StudentReportModalProps> = ({ user: initialUser, onClose }) => {
  const [user, setUser] = useState<User>(initialUser);
  const [sending, setSending] = useState(false);
  const [sentMessage, setSentMessage] = useState('');
  const [scheduleWeekly, setScheduleWeekly] = useState(false);

  const getStatus = (assignment: any) => {
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

  const isLocked = (assignment: any) => {
    const prog = getStatus(assignment);
    const hasSolved = prog.status === 'Solved';
    return assignment.dueDate ? (new Date(assignment.dueDate + 'T23:59:59') < new Date() && !hasSolved) : false;
  };

  const handleRemoveAssignment = async (assignmentId: string) => {
    if (confirm("Are you sure you want to remove this assignment?")) {
      const updatedUser = { ...user };
      if (updatedUser.assignments) {
        updatedUser.assignments = updatedUser.assignments.filter(a => a.id !== assignmentId);
        await authService.updateUser(updatedUser);
        setUser(updatedUser);
      }
    }
  };

  const handleUnlockAssignment = async (assignmentId: string) => {
    const updatedUser = { ...user };
    if (updatedUser.assignments) {
      const idx = updatedUser.assignments.findIndex(a => a.id === assignmentId);
      if (idx !== -1) {
        // Unlock by removing due date
        updatedUser.assignments[idx].dueDate = undefined;
        await authService.updateUser(updatedUser);
        setUser(updatedUser);
        setSentMessage('Assignment unlocked successfully!');
        setTimeout(() => setSentMessage(''), 3000);
      }
    }
  };

  const handleSendReport = () => {
    setSending(true);
    
    // Format report for WhatsApp
    let reportText = `*Performance Report: ${user.name || user.username}*\n`;
    reportText += `Date: ${new Date().toLocaleDateString()}\n\n`;
    reportText += `*Recent Assignments:*\n`;
    
    user.assignments?.slice(0, 10).forEach(a => {
      const prog = getStatus(a);
      const title = a.title || (a.lessonId ? LESSONS.find(l => l.id === a.lessonId)?.title : 'Unknown');
      reportText += `- ${title}: ${prog.status} ${typeof prog.score === 'number' && prog.score > 0 ? `(Score: ${prog.score}%)` : ''}\n`;
    });

    if (scheduleWeekly) {
      reportText += `\n_(This report is scheduled to be sent weekly)_`;
    }

    console.log(`[MOCK WhatsApp to Parent ${user.parentWhatsapp || 'Unknown'}]:\n${reportText}`);

    // Optionally open real WhatsApp Web
    if (user.parentWhatsapp) {
        const phone = user.parentWhatsapp.replace(/\D/g,'');
        const encoded = encodeURIComponent(reportText);
        window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
    }

    setTimeout(() => {
      setSending(false);
      setSentMessage('Report sent successfully!');
      setTimeout(() => setSentMessage(''), 3000);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
          <div>
            <h2 className="text-2xl font-black text-gray-900">{user.name || user.username}'s Report</h2>
            <p className="text-gray-500 font-medium text-sm mt-1">Detailed assignment and performance history</p>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50/30">
          
          {sentMessage && (
            <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl font-medium border border-green-200 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" /> {sentMessage}
            </div>
          )}

          <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl">
            <div>
              <h3 className="font-bold text-indigo-900">Parent Contact</h3>
              <p className="text-indigo-700 text-sm">WhatsApp: {user.parentWhatsapp || 'Not provided'}</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <label className="flex items-center space-x-2 text-sm text-indigo-800 font-medium cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={scheduleWeekly} 
                  onChange={(e) => setScheduleWeekly(e.target.checked)}
                  className="rounded border-indigo-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span>Auto-send weekly</span>
              </label>
              <button
                onClick={handleSendReport}
                disabled={sending}
                className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors shadow-sm disabled:opacity-50"
              >
                <Send className="w-4 h-4 mr-2" />
                {sending ? 'Sending...' : 'Send Report via WhatsApp'}
              </button>
            </div>
          </div>

          <h3 className="font-bold text-gray-900 mb-4 text-lg">All Assigned Content</h3>
          
          {!user.assignments || user.assignments.length === 0 ? (
            <div className="text-center p-8 bg-white rounded-xl border border-dashed border-gray-200">
              <p className="text-gray-500 font-medium">No assignments found for this student.</p>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-500 border-b border-gray-100 uppercase tracking-wider text-xs">
                    <th className="px-4 py-3 font-bold">Assignment</th>
                    <th className="px-4 py-3 font-bold">Type</th>
                    <th className="px-4 py-3 font-bold">Assigned On</th>
                    <th className="px-4 py-3 font-bold">Status</th>
                    <th className="px-4 py-3 font-bold">Score</th>
                    <th className="px-4 py-3 font-bold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {user.assignments.map(a => {
                    const prog = getStatus(a);
                    const title = a.title || (a.lessonId ? LESSONS.find(l => l.id === a.lessonId)?.title : 'Unknown');
                    const locked = isLocked(a);
                    
                    return (
                      <tr key={a.id} className="hover:bg-gray-50/50">
                        <td className="px-4 py-3 font-bold text-gray-900">
                          {title}
                          {locked && (
                            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-rose-100 text-rose-700 border border-rose-200">
                              Locked
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3">
                            <span className={`inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                              a.type === 'record' ? 'bg-red-100 text-red-700' :
                              a.type === 'pdf' ? 'bg-orange-100 text-orange-700' : 'bg-indigo-100 text-indigo-700'
                            }`}>
                              {a.type}
                            </span>
                        </td>
                        <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                          {a.availableDate || new Date(a.assignedDate).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-3">
                          {prog.status === 'Solved' ? (
                            <span className="inline-flex items-center text-green-600 font-bold">
                              <CheckCircle className="w-4 h-4 mr-1" /> Solved
                            </span>
                          ) : prog.status === 'Pending' ? (
                            <span className="inline-flex items-center text-orange-600 font-bold">
                              <Clock className="w-4 h-4 mr-1" /> Pending
                            </span>
                          ) : (
                            <span className="inline-flex items-center text-blue-600 font-bold">
                              Sent
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 font-bold text-gray-700">
                          {prog.score !== '-' ? `${prog.score}%` : '-'}
                          {typeof prog.attempts === 'number' && prog.attempts > 0 && (
                            <span className="text-xs text-gray-400 font-normal block">{prog.attempts} trials</span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-right whitespace-nowrap">
                          <div className="flex justify-end space-x-2">
                            {locked && (
                              <button 
                                onClick={() => handleUnlockAssignment(a.id)}
                                title="Reopen / Unlock Assignment"
                                className="p-1.5 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                              >
                                <Unlock className="w-4 h-4" />
                              </button>
                            )}
                            <button 
                              onClick={() => handleRemoveAssignment(a.id)}
                              title="Remove Assignment"
                              className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default StudentReportModal;
