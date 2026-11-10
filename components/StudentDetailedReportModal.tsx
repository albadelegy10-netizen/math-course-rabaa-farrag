import React, { useState, useMemo } from 'react';
import { User, AttendanceRecord, QuizAttempt } from '../types';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { 
  X, 
  Calendar, 
  CheckCircle2, 
  DollarSign, 
  Download, 
  MessageCircle, 
  Filter, 
  CheckSquare, 
  Square,
  FileText,
  Phone,
  Award,
  BookOpen
} from 'lucide-react';

interface StudentDetailedReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: User;
  allStudents?: User[];
  onSelectStudent?: (student: User) => void;
}

type DatePreset = 'all' | '7days' | '30days' | 'thisMonth' | 'custom';

export const StudentDetailedReportModal: React.FC<StudentDetailedReportModalProps> = ({
  isOpen,
  onClose,
  student,
  allStudents = [],
  onSelectStudent
}) => {
  // Date Filter State
  const [preset, setPreset] = useState<DatePreset>('all');
  const [customStart, setCustomStart] = useState('');
  const [customEnd, setCustomEnd] = useState('');

  // Info Selection Toggles
  const [includeAttendance, setIncludeAttendance] = useState(true);
  const [includeScores, setIncludeScores] = useState(true);
  const [includeFinancials, setIncludeFinancials] = useState(true);

  // Phone Number for WhatsApp
  const [whatsappPhone, setWhatsappPhone] = useState(student?.parentPhone || student?.phone || '');

  // Keep phone number updated if student changes
  React.useEffect(() => {
    if (student) {
      setWhatsappPhone(student.parentPhone || student.phone || '');
    }
  }, [student]);

  if (!isOpen || !student) return null;

  // Filter Date Range Bounds
  const dateBounds = useMemo(() => {
    const now = new Date();
    const todayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999).getTime();

    if (preset === '7days') {
      const start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7).getTime();
      return { start, end: todayEnd };
    }
    if (preset === '30days') {
      const start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 30).getTime();
      return { start, end: todayEnd };
    }
    if (preset === 'thisMonth') {
      const start = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
      return { start, end: todayEnd };
    }
    if (preset === 'custom') {
      const start = customStart ? new Date(customStart).getTime() : 0;
      const end = customEnd ? new Date(customEnd).getTime() + (24 * 60 * 60 * 1000) : todayEnd;
      return { start, end };
    }
    return { start: 0, end: Infinity };
  }, [preset, customStart, customEnd]);

  // Filtered Attendance Records
  const filteredAttendance = useMemo(() => {
    const records = student.attendance || [];
    return records.filter(r => {
      const time = new Date(r.date).getTime();
      return time >= dateBounds.start && time <= dateBounds.end;
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [student, dateBounds]);

  // Filtered History (Lesson & Quiz Attempts)
  const filteredHistory = useMemo(() => {
    const attempts = student.history || [];
    return attempts.filter(h => {
      const time = h.timestamp;
      return time >= dateBounds.start && time <= dateBounds.end;
    }).sort((a, b) => b.timestamp - a.timestamp);
  }, [student, dateBounds]);

  // Filtered Payments
  const filteredPayments = useMemo(() => {
    const payments = student.payments || [];
    return payments.filter(p => {
      const time = p.timestamp || new Date(p.date).getTime();
      return time >= dateBounds.start && time <= dateBounds.end;
    }).sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
  }, [student, dateBounds]);

  // Combined Daily Log (Cross-referencing Attendance + Quiz Scores on same date)
  const dailyCombinedLog = useMemo(() => {
    const dateMap = new Map<string, {
      date: string;
      attendance?: AttendanceRecord;
      attempts: QuizAttempt[];
    }>();

    // Add Attendance Records
    filteredAttendance.forEach(att => {
      if (!dateMap.has(att.date)) {
        dateMap.set(att.date, { date: att.date, attendance: att, attempts: [] });
      } else {
        dateMap.get(att.date)!.attendance = att;
      }
    });

    // Add Quiz Attempts
    filteredHistory.forEach(att => {
      const attDateStr = new Date(att.timestamp).toISOString().split('T')[0];
      if (!dateMap.has(attDateStr)) {
        dateMap.set(attDateStr, { date: attDateStr, attempts: [att] });
      } else {
        dateMap.get(attDateStr)!.attempts.push(att);
      }
    });

    return Array.from(dateMap.values()).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [filteredAttendance, filteredHistory]);

  // Calculated Stats
  const presentCount = filteredAttendance.filter(a => a.status === 'present').length;
  const absentCount = filteredAttendance.filter(a => a.status === 'absent').length;
  const lateCount = filteredAttendance.filter(a => a.status === 'late').length;
  const totalAttendanceSessions = filteredAttendance.length;
  const attendancePercentage = totalAttendanceSessions > 0 ? Math.round((presentCount / totalAttendanceSessions) * 100) : 100;

  const totalQuizzes = filteredHistory.length;
  const avgScore = totalQuizzes > 0 ? Math.round(filteredHistory.reduce((acc, curr) => acc + curr.score, 0) / totalQuizzes) : 0;

  const totalPaidInPeriod = filteredPayments.reduce((acc, curr) => acc + curr.amount, 0);

  // --- WHATSAPP MESSAGE GENERATOR ---
  const generateWhatsAppMessage = () => {
    let msg = `📊 *Student Report: ${student.name || student.username}*\n`;
    msg += `🎓 *Course:* ${student.course || 'Math Course'}\n`;

    if (preset !== 'all') {
      if (preset === '7days') msg += `📅 *Period:* Last 7 Days\n`;
      else if (preset === '30days') msg += `📅 *Period:* Last 30 Days\n`;
      else if (preset === 'thisMonth') msg += `📅 *Period:* This Month\n`;
      else if (preset === 'custom' && customStart && customEnd) msg += `📅 *Period:* ${customStart} to ${customEnd}\n`;
    }

    msg += `-------------------------------\n`;

    // Attendance Section
    if (includeAttendance) {
      msg += `\n🗓️ *ATTENDANCE SUMMARY*\n`;
      msg += `• Present Days: ${presentCount}\n`;
      msg += `• Absent Days: ${absentCount}\n`;
      if (lateCount > 0) msg += `• Late Days: ${lateCount}\n`;
      msg += `• Attendance Rate: ${attendancePercentage}%\n`;

      if (filteredAttendance.length > 0) {
        msg += `\n*Recent Sessions:*\n`;
        filteredAttendance.slice(0, 5).forEach(att => {
          const statusIcon = att.status === 'present' ? '✅' : att.status === 'absent' ? '❌' : '⚠️';
          const formattedDate = new Date(att.date).toLocaleDateString();
          msg += `${statusIcon} ${formattedDate}: ${att.status.toUpperCase()} ${att.notes ? `(${att.notes})` : ''}\n`;
        });
      }
    }

    // Scores Section
    if (includeScores) {
      msg += `\n📚 *LESSON & QUIZ SCORES*\n`;
      msg += `• Quizzes Taken: ${totalQuizzes}\n`;
      msg += `• Average Score: ${avgScore}%\n`;

      if (filteredHistory.length > 0) {
        msg += `\n*Recent Scores:*\n`;
        filteredHistory.slice(0, 5).forEach(h => {
          const dateStr = new Date(h.timestamp).toLocaleDateString();
          const lessonName = h.topicName || h.lessonId;
          msg += `• ${dateStr}: ${lessonName} - *${h.score}%* (${h.correctCount}/${h.totalQuestions})\n`;
        });
      }
    }

    // Financial Section
    if (includeFinancials) {
      msg += `\n💳 *FINANCIAL & PAYMENTS*\n`;
      msg += `• Current Due Amount: $${student.dueAmount || 0}\n`;
      msg += `• Payments Received: $${totalPaidInPeriod}\n`;
      if (student.tier) msg += `• Account Tier: ${student.tier.toUpperCase()}\n`;
    }

    msg += `\nThank you! Please contact us for any questions.`;
    return msg;
  };

  const handleSendWhatsApp = () => {
    const text = generateWhatsAppMessage();
    let cleanPhone = whatsappPhone.replace(/[^0-9]/g, '');
    if (cleanPhone && !cleanPhone.startsWith('2') && cleanPhone.length === 11) {
      cleanPhone = '2' + cleanPhone; // Default Egypt country code if 11 digits starting with 01
    }

    const url = cleanPhone 
      ? `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(text)}`
      : `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;

    window.open(url, '_blank');
  };

  // --- PDF REPORT GENERATOR ---
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const studentName = student.name || student.username;

    // Title & Header
    doc.setFillColor(124, 58, 237); // Purple 600
    doc.rect(0, 0, 210, 28, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(255, 255, 255);
    doc.text('STUDENT PERFORMANCE & ATTENDANCE REPORT', 14, 18);

    // Student Info Metadata Box
    doc.setFontSize(10);
    doc.setTextColor(50, 50, 50);
    doc.text(`Student Name: ${studentName}`, 14, 38);
    doc.text(`Username: @${student.username}`, 14, 44);
    doc.text(`Course: ${student.course || 'Math Course'}`, 14, 50);

    const generatedDateStr = new Date().toLocaleDateString();
    doc.text(`Generated Date: ${generatedDateStr}`, 140, 38);
    doc.text(`Account Tier: ${(student.tier || 'Free').toUpperCase()}`, 140, 44);

    let currentY = 58;

    // 1. Attendance Table
    if (includeAttendance) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(124, 58, 237);
      doc.text('1. ATTENDANCE LOG & SUMMARY', 14, currentY);
      currentY += 4;

      const attData = filteredAttendance.map(att => [
        new Date(att.date).toLocaleDateString(),
        att.status.toUpperCase(),
        att.notes || 'Regular Session'
      ]);

      autoTable(doc, {
        startY: currentY,
        head: [['Date', 'Status', 'Session Notes']],
        body: attData.length > 0 ? attData : [['No records', '-', '-']],
        theme: 'striped',
        headStyles: { fillColor: [124, 58, 237] },
        styles: { fontSize: 9 }
      });

      currentY = (doc as any).lastAutoTable.finalY + 10;
    }

    // 2. Lesson Scores Table
    if (includeScores) {
      if (currentY > 230) { doc.addPage(); currentY = 20; }

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(124, 58, 237);
      doc.text('2. LESSON & QUIZ SCORES', 14, currentY);
      currentY += 4;

      const scoreData = filteredHistory.map(h => [
        new Date(h.timestamp).toLocaleDateString(),
        h.topicName || h.lessonId,
        `${h.score}%`,
        `${h.correctCount} / ${h.totalQuestions}`
      ]);

      autoTable(doc, {
        startY: currentY,
        head: [['Date', 'Lesson / Exam Name', 'Score (%)', 'Questions Correct']],
        body: scoreData.length > 0 ? scoreData : [['No quiz records', '-', '-', '-']],
        theme: 'striped',
        headStyles: { fillColor: [79, 70, 229] },
        styles: { fontSize: 9 }
      });

      currentY = (doc as any).lastAutoTable.finalY + 10;
    }

    // 3. Financial Table
    if (includeFinancials) {
      if (currentY > 230) { doc.addPage(); currentY = 20; }

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(124, 58, 237);
      doc.text('3. FINANCIAL & PAYMENT DETAILS', 14, currentY);
      currentY += 4;

      const finData = [
        ['Current Dues Amount', `$${student.dueAmount || 0}`],
        ['Payments Received in Period', `$${totalPaidInPeriod}`],
      ];

      filteredPayments.forEach(p => {
        finData.push([`Payment on ${new Date(p.date).toLocaleDateString()} (${p.notes || 'Paid'})`, `$${p.amount}`]);
      });

      autoTable(doc, {
        startY: currentY,
        head: [['Financial Item', 'Amount']],
        body: finData,
        theme: 'plain',
        headStyles: { fillColor: [16, 185, 129] },
        styles: { fontSize: 9 }
      });
    }

    doc.save(`${studentName.replace(/\s+/g, '_')}_Attendance_Report.pdf`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden my-auto border border-purple-100">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 text-white flex justify-between items-center relative">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-xl font-black">{student.name || student.username}</h2>
                <span className="text-xs bg-white/20 backdrop-blur-md text-white font-bold px-2.5 py-0.5 rounded-full uppercase">
                  {student.course || 'Student Report'}
                </span>
              </div>
              <p className="text-xs text-purple-100 mt-0.5">Customizable Attendance, Score & Financial Summary</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {allStudents.length > 1 && onSelectStudent && (
              <select
                value={student.username}
                onChange={(e) => {
                  const selected = allStudents.find(u => u.username === e.target.value);
                  if (selected) onSelectStudent(selected);
                }}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold py-1.5 px-3 rounded-xl cursor-pointer focus:outline-none"
              >
                {allStudents.map(s => (
                  <option key={s.username} value={s.username} className="text-gray-900 font-medium">
                    {s.name || s.username}
                  </option>
                ))}
              </select>
            )}

            <button 
              onClick={onClose}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">

          {/* 1. CONTROLS BAR: Date Filter & Custom Checkboxes */}
          <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-4">
              
              {/* Date Preset Selector */}
              <div>
                <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-2 flex items-center">
                  <Calendar className="w-3.5 h-3.5 mr-1 text-purple-600" /> Select Period
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'all', label: 'All Time' },
                    { id: '7days', label: 'Last 7 Days' },
                    { id: '30days', label: 'Last 30 Days' },
                    { id: 'thisMonth', label: 'This Month' },
                    { id: 'custom', label: 'Custom Range' }
                  ].map(p => (
                    <button
                      key={p.id}
                      onClick={() => setPreset(p.id as DatePreset)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        preset === p.id 
                          ? 'bg-purple-600 text-white shadow-sm' 
                          : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Date Range Inputs */}
              {preset === 'custom' && (
                <div className="flex items-center space-x-2 bg-white p-2 rounded-xl border border-gray-200">
                  <input 
                    type="date" 
                    value={customStart}
                    onChange={(e) => setCustomStart(e.target.value)}
                    className="text-xs font-bold text-gray-700 bg-transparent border-none outline-none"
                  />
                  <span className="text-gray-400 text-xs font-bold">to</span>
                  <input 
                    type="date" 
                    value={customEnd}
                    onChange={(e) => setCustomEnd(e.target.value)}
                    className="text-xs font-bold text-gray-700 bg-transparent border-none outline-none"
                  />
                </div>
              )}
            </div>

            {/* Information Section Toggles (User can choose what to include) */}
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-2 flex items-center">
                <Filter className="w-3.5 h-3.5 mr-1 text-purple-600" /> Select Information to Display & Export
              </label>
              <div className="grid sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setIncludeAttendance(!includeAttendance)}
                  className={`flex items-center p-3 rounded-xl border text-xs font-bold transition-all ${
                    includeAttendance ? 'bg-purple-50 border-purple-300 text-purple-900' : 'bg-white border-gray-200 text-gray-400'
                  }`}
                >
                  {includeAttendance ? <CheckSquare className="w-4 h-4 mr-2 text-purple-600" /> : <Square className="w-4 h-4 mr-2 text-gray-300" />}
                  Attendance Records
                </button>

                <button
                  type="button"
                  onClick={() => setIncludeScores(!includeScores)}
                  className={`flex items-center p-3 rounded-xl border text-xs font-bold transition-all ${
                    includeScores ? 'bg-indigo-50 border-indigo-300 text-indigo-900' : 'bg-white border-gray-200 text-gray-400'
                  }`}
                >
                  {includeScores ? <CheckSquare className="w-4 h-4 mr-2 text-indigo-600" /> : <Square className="w-4 h-4 mr-2 text-gray-300" />}
                  Lesson & Quiz Scores
                </button>

                <button
                  type="button"
                  onClick={() => setIncludeFinancials(!includeFinancials)}
                  className={`flex items-center p-3 rounded-xl border text-xs font-bold transition-all ${
                    includeFinancials ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-white border-gray-200 text-gray-400'
                  }`}
                >
                  {includeFinancials ? <CheckSquare className="w-4 h-4 mr-2 text-emerald-600" /> : <Square className="w-4 h-4 mr-2 text-gray-300" />}
                  Financial & Payment Info
                </button>
              </div>
            </div>
          </div>

          {/* 2. SUMMARY CARDS */}
          <div className="grid sm:grid-cols-3 gap-4">
            {includeAttendance && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl border border-green-200 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-green-700 uppercase tracking-wider">Attendance Rate</p>
                  <p className="text-2xl font-black text-green-900 mt-1">{attendancePercentage}%</p>
                  <p className="text-[11px] font-semibold text-green-600 mt-0.5">{presentCount} Present / {absentCount} Absent</p>
                </div>
                <div className="bg-green-500 text-white p-3 rounded-xl">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              </div>
            )}

            {includeScores && (
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-2xl border border-indigo-200 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-indigo-700 uppercase tracking-wider">Average Score</p>
                  <p className="text-2xl font-black text-indigo-900 mt-1">{avgScore}%</p>
                  <p className="text-[11px] font-semibold text-indigo-600 mt-0.5">{totalQuizzes} Lessons / Quizzes Taken</p>
                </div>
                <div className="bg-indigo-600 text-white p-3 rounded-xl">
                  <Award className="w-6 h-6" />
                </div>
              </div>
            )}

            {includeFinancials && (
              <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 p-4 rounded-2xl border border-purple-200 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-purple-700 uppercase tracking-wider">Current Dues</p>
                  <p className="text-2xl font-black text-purple-900 mt-1">${student.dueAmount || 0}</p>
                  <p className="text-[11px] font-semibold text-purple-600 mt-0.5">${totalPaidInPeriod} Paid in Period</p>
                </div>
                <div className="bg-purple-600 text-white p-3 rounded-xl">
                  <DollarSign className="w-6 h-6" />
                </div>
              </div>
            )}
          </div>

          {/* 3. DETAILED REPORT PREVIEW LIST */}
          <div className="space-y-6">

            {/* Attendance & Lesson Combined Log */}
            {includeAttendance && (
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
                <div className="p-4 bg-purple-50 border-b border-purple-100 flex items-center justify-between">
                  <h3 className="font-bold text-purple-900 text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-purple-600" />
                    Attendance & Lesson Attendance Log ({dailyCombinedLog.length})
                  </h3>
                </div>

                {dailyCombinedLog.length > 0 ? (
                  <div className="divide-y divide-gray-100">
                    {dailyCombinedLog.map(item => {
                      const att = item.attendance;
                      const attemptsOnDate = item.attempts;
                      const formattedDate = new Date(item.date).toLocaleDateString(undefined, {
                        weekday: 'short',
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      });

                      return (
                        <div key={item.date} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-gray-50 transition-colors gap-3">
                          <div className="flex items-start space-x-3">
                            <div className={`p-2.5 rounded-xl text-xs font-black uppercase tracking-wider ${
                              att?.status === 'present' ? 'bg-green-100 text-green-700' :
                              att?.status === 'absent' ? 'bg-red-100 text-red-700' :
                              'bg-amber-100 text-amber-700'
                            }`}>
                              {att ? att.status : 'Quiz Activity'}
                            </div>

                            <div>
                              <p className="font-bold text-gray-900 text-sm">{formattedDate}</p>
                              <p className="text-xs text-gray-500 mt-0.5">
                                {att?.notes ? `Note: ${att.notes}` : 'Regular Class Session'}
                              </p>
                            </div>
                          </div>

                          {/* Quiz Scores on this Date */}
                          {attemptsOnDate.length > 0 && (
                            <div className="flex flex-col sm:items-end">
                              {attemptsOnDate.map(attempt => (
                                <div key={attempt.id} className="flex items-center space-x-2 text-xs">
                                  <span className="font-semibold text-gray-700">{attempt.topicName || attempt.lessonId}:</span>
                                  <span className={`font-black px-2 py-0.5 rounded ${
                                    attempt.score >= 80 ? 'bg-green-100 text-green-800' :
                                    attempt.score >= 60 ? 'bg-amber-100 text-amber-800' :
                                    'bg-red-100 text-red-800'
                                  }`}>
                                    {attempt.score}% ({attempt.correctCount}/{attempt.totalQuestions})
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="p-8 text-center text-xs text-gray-400 font-medium">
                    No attendance records for this period.
                  </div>
                )}
              </div>
            )}

            {/* Quiz Performance Detailed Table */}
            {includeScores && !includeAttendance && (
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
                <div className="p-4 bg-indigo-50 border-b border-indigo-100 flex items-center justify-between">
                  <h3 className="font-bold text-indigo-900 text-sm flex items-center">
                    <BookOpen className="w-4 h-4 mr-2 text-indigo-600" />
                    Lesson & Quiz Scores ({filteredHistory.length})
                  </h3>
                </div>

                {filteredHistory.length > 0 ? (
                  <div className="divide-y divide-gray-100">
                    {filteredHistory.map(h => (
                      <div key={h.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                        <div>
                          <p className="font-bold text-gray-900 text-sm">{h.topicName || h.lessonId}</p>
                          <p className="text-xs text-gray-400">{new Date(h.timestamp).toLocaleDateString()}</p>
                        </div>
                        <div className="text-right">
                          <span className={`text-sm font-black px-3 py-1 rounded-xl ${
                            h.score >= 80 ? 'bg-green-100 text-green-800' :
                            h.score >= 60 ? 'bg-amber-100 text-amber-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {h.score}%
                          </span>
                          <p className="text-[11px] font-semibold text-gray-500 mt-1">
                            {h.correctCount} / {h.totalQuestions} Questions Correct
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-xs text-gray-400 font-medium">
                    No quiz scores for this period.
                  </div>
                )}
              </div>
            )}

            {/* Financial Details */}
            {includeFinancials && (
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
                <div className="p-4 bg-emerald-50 border-b border-emerald-100 flex items-center justify-between">
                  <h3 className="font-bold text-emerald-900 text-sm flex items-center">
                    <DollarSign className="w-4 h-4 mr-2 text-emerald-600" />
                    Financial & Payment Details
                  </h3>
                </div>

                <div className="p-4 space-y-3 text-xs">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                    <span className="font-bold text-gray-700">Total Dues Owed:</span>
                    <span className="font-black text-purple-700 text-sm">${student.dueAmount || 0}</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                    <span className="font-bold text-gray-700">Payments Received in Selected Period:</span>
                    <span className="font-black text-emerald-700 text-sm">${totalPaidInPeriod}</span>
                  </div>

                  {filteredPayments.length > 0 && (
                    <div className="mt-3">
                      <p className="font-bold text-gray-500 uppercase tracking-wider text-[10px] mb-2">Payment Transaction History:</p>
                      <div className="space-y-1.5">
                        {filteredPayments.map(p => (
                          <div key={p.id} className="flex justify-between items-center p-2.5 bg-emerald-50/50 rounded-lg border border-emerald-100">
                            <div>
                              <p className="font-bold text-gray-800">{new Date(p.date).toLocaleDateString()}</p>
                              <p className="text-[10px] text-gray-500">{p.notes || 'Payment Received'}</p>
                            </div>
                            <span className="font-black text-emerald-800">${p.amount}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>

          {/* 4. PHONE NUMBER & EXPORT ACTIONS */}
          <div className="p-5 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl border border-purple-200 space-y-4">
            <div>
              <label className="block text-xs font-bold text-purple-900 mb-1 flex items-center">
                <Phone className="w-3.5 h-3.5 mr-1 text-purple-600" /> Parent WhatsApp Phone Number
              </label>
              <input 
                type="text" 
                value={whatsappPhone}
                onChange={(e) => setWhatsappPhone(e.target.value)}
                placeholder="e.g. +201012345678"
                className="w-full p-2.5 bg-white border border-purple-200 rounded-xl text-xs font-bold text-gray-800 focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs shadow-lg shadow-emerald-100 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Report to Parent WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadPDF}
                className="flex-1 py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-xs shadow-lg shadow-purple-100 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Report as PDF</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default StudentDetailedReportModal;
