import React, { useState, useMemo } from 'react';
import { User, Question, QuizAttempt, Lesson } from '../types';
import { lessonService } from '../lessonService';
import { getOrCategorizeQuestion } from '../utils/courseCategorizer';
import { renderRichText } from '../utils/textRenderer';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { 
  X, 
  BarChart2, 
  Award, 
  BookOpen, 
  Download, 
  ChevronDown, 
  ChevronUp, 
  Brain,
  HelpCircle,
  FileSpreadsheet
} from 'lucide-react';

interface ExamTopicAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  examTitle: string;
  lessonId?: string;
  user?: User;
  attempt?: QuizAttempt;
  lessons?: Lesson[];
}

interface TopicGroup {
  topicName: string;
  questions: Question[];
  totalCount: number;
  correctCount: number;
  percentage: number;
  status: 'Mastered' | 'Proficient' | 'Needs Practice';
}

export const ExamTopicAnalysisModal: React.FC<ExamTopicAnalysisModalProps> = ({
  isOpen,
  onClose,
  examTitle,
  lessonId,
  user,
  attempt: initialAttempt
}) => {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  // Find relevant attempt from user history if not explicitly provided
  const attempt = useMemo(() => {
    if (initialAttempt) return initialAttempt;
    if (!user || !user.history) return undefined;
    // Find latest attempt for this lessonId or topicName
    return user.history.find(h => 
      (lessonId && h.lessonId === lessonId) || 
      (h.topicName && h.topicName.toLowerCase() === examTitle.toLowerCase())
    );
  }, [initialAttempt, user, lessonId, examTitle]);

// Load questions for the exam
  const lesson = useMemo(() => {
    if (lessonId) return lessonService.getLesson(lessonId);
    if (examTitle) {
      const allL = lessonService.getLoadedLessonsSync();
      return allL.find(l => l.title.toLowerCase() === examTitle.toLowerCase() || l.id === lessonId);
    }
    return undefined;
  }, [lessonId, examTitle]);

  const questions = useMemo(() => {
    let qs: Question[] = [];
    if (lesson) {
      qs = lessonService.getQuestions(lesson.id);
    }
    return qs || [];
  }, [lesson]);

  // Smart Topic Categorization
  const topicGroups = useMemo(() => {
    if (questions.length === 0) return [];

    const groupMap = new Map<string, Question[]>();
    const courseName = lesson?.course || 'EST1';

    questions.forEach((q, idx) => {
      const topic = getOrCategorizeQuestion(q, courseName, examTitle);

      if (!groupMap.has(topic)) {
        groupMap.set(topic, []);
      }
      groupMap.get(topic)!.push({ ...q, id: q.id || idx + 1 });
    });

    const groups: TopicGroup[] = [];
    const qAnswers = attempt?.questionAnswers || [];

    groupMap.forEach((qList, topicName) => {
      let correct = 0;
      
      if (qAnswers.length > 0) {
        qList.forEach(q => {
          const ansRecord = qAnswers.find((a: any) => String(a.questionId) === String(q.id));
          if (ansRecord && ansRecord.isCorrect) {
            correct++;
          }
        });
      } else if (attempt) {
        // Fallback proportional estimate if detailed per-question log isn't present
        const overallRatio = attempt.totalQuestions > 0 ? (attempt.correctCount / attempt.totalQuestions) : (attempt.score / 100);
        correct = Math.round(qList.length * overallRatio);
      }

      const pct = Math.round((correct / qList.length) * 100);
      let status: 'Mastered' | 'Proficient' | 'Needs Practice' = 'Needs Practice';
      if (pct >= 85) status = 'Mastered';
      else if (pct >= 70) status = 'Proficient';

      groups.push({
        topicName,
        questions: qList,
        totalCount: qList.length,
        correctCount: correct,
        percentage: pct,
        status
      });
    });

    // Sort by percentage ascending (weakest topics first)
    return groups.sort((a, b) => a.percentage - b.percentage);
  }, [questions, attempt, examTitle]);

  if (!isOpen) return null;

  const totalExamQuestions = questions.length;
  const overallScore = attempt ? attempt.score : null;
  const totalCorrect = attempt ? attempt.correctCount : null;

  const exportPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;

    // Header Banner
    doc.setFillColor(124, 58, 237); // Purple accent
    doc.rect(0, 0, pageWidth, 28, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    doc.text(`EXAM TOPIC ANALYSIS: ${examTitle.toUpperCase()}`, 14, 12);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const studentInfo = user ? `Student: ${user.name || user.username}` : 'Exam Analysis';
    doc.text(`${studentInfo} | Questions: ${totalExamQuestions} | Topics: ${topicGroups.length}`, 14, 20);

    // Summary Box
    doc.setDrawColor(220, 220, 220);
    doc.setFillColor(250, 250, 255);
    doc.roundedRect(14, 34, pageWidth - 28, 20, 3, 3, 'FD');

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(50, 50, 50);
    doc.text('Overall Performance Summary:', 18, 42);

    doc.setFont('helvetica', 'normal');
    const perfText = attempt 
      ? `Score: ${attempt.score}% (${attempt.correctCount}/${attempt.totalQuestions} Correct) | Mode: ${attempt.mode}`
      : `Total Questions: ${totalExamQuestions} across ${topicGroups.length} key math topics.`;
    doc.text(perfText, 18, 49);

    // Topic Analysis Table
    const tableData = topicGroups.map(g => [
      g.topicName,
      `${g.totalCount} Qs`,
      attempt ? `${g.correctCount} / ${g.totalCount}` : '-',
      attempt ? `${g.percentage}%` : '-',
      g.status
    ]);

    autoTable(doc, {
      startY: 60,
      head: [['Topic / Sub-category', 'Questions', 'Correct', 'Accuracy', 'Mastery Level']],
      body: tableData,
      theme: 'striped',
      headStyles: {
        fillColor: [124, 58, 237],
        textColor: [255, 255, 255],
        fontStyle: 'bold'
      },
      styles: {
        fontSize: 9.5,
        cellPadding: 4
      }
    });

    const filename = `${examTitle}_topic_analysis`.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    doc.save(`${filename}.pdf`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-gray-100">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 text-white flex justify-between items-center shadow-md">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20">
              <BarChart2 className="w-6 h-6 text-yellow-300" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="bg-yellow-400 text-purple-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-full tracking-wider">
                  Exam Topic Analysis
                </span>
                {user && (
                  <span className="text-xs text-purple-200">
                    Student: <strong className="text-white">{user.name || user.username}</strong>
                  </span>
                )}
              </div>
              <h2 className="text-2xl font-black mt-0.5">{examTitle}</h2>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={exportPDF}
              className="bg-white/15 hover:bg-white/25 text-white px-3 py-2 rounded-xl text-xs font-bold flex items-center transition-all border border-white/20"
              title="Download Topic Analysis PDF"
            >
              <Download className="w-4 h-4 mr-1.5" /> Export PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 bg-gray-50/50 flex-1">
          
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Questions</p>
                <p className="text-3xl font-black text-gray-900 mt-1">{totalExamQuestions}</p>
                <p className="text-xs text-gray-500 mt-0.5">Across {topicGroups.length} math topics</p>
              </div>
              <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                <BookOpen className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Exam Accuracy</p>
                <p className="text-3xl font-black text-gray-900 mt-1">
                  {overallScore !== null ? `${overallScore}%` : 'N/A'}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {totalCorrect !== null ? `${totalCorrect} / ${totalExamQuestions} Correct` : 'Not attempted yet'}
                </p>
              </div>
              <div className={`p-3 rounded-xl ${
                overallScore !== null && overallScore >= 70 ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
              }`}>
                <Award className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Weakest Topic</p>
                <p className="text-sm font-bold text-red-600 mt-1 line-clamp-1">
                  {topicGroups.length > 0 ? topicGroups[0].topicName : 'None'}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">Needs priority review</p>
              </div>
              <div className="p-3 bg-red-50 text-red-600 rounded-xl">
                <Brain className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Topic Breakdown List */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-100 bg-gray-50/80 flex justify-between items-center">
              <h3 className="font-bold text-gray-900 flex items-center">
                <FileSpreadsheet className="w-5 h-5 mr-2 text-purple-600" />
                Topic Performance Breakdown
              </h3>
              <span className="text-xs font-bold text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
                {topicGroups.length} Topics
              </span>
            </div>

            {topicGroups.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <HelpCircle className="w-10 h-10 mx-auto text-gray-300 mb-2" />
                <p className="font-bold text-gray-700">No questions loaded for this exam yet</p>
                <p className="text-xs mt-1">Questions will automatically populate as they are added to the exam.</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {topicGroups.map((group) => {
                  const isExpanded = expandedTopic === group.topicName;
                  return (
                    <div key={group.topicName} className="transition-colors">
                      <div 
                        onClick={() => setExpandedTopic(isExpanded ? null : group.topicName)}
                        className="p-5 hover:bg-purple-50/40 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-bold text-gray-900 text-base">{group.topicName}</h4>
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                              group.status === 'Mastered' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' :
                              group.status === 'Proficient' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                              'bg-amber-100 text-amber-700 border border-amber-200'
                            }`}>
                              {group.status}
                            </span>
                          </div>

                          {/* Progress bar */}
                          <div className="flex items-center space-x-3">
                            <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
                              <div 
                                className={`h-2.5 rounded-full transition-all duration-500 ${
                                  group.percentage >= 85 ? 'bg-emerald-500' :
                                  group.percentage >= 70 ? 'bg-blue-500' :
                                  'bg-amber-500'
                                }`}
                                style={{ width: `${group.percentage}%` }}
                              />
                            </div>
                            <span className="text-xs font-bold text-gray-600 min-w-[45px] text-right">
                              {attempt ? `${group.percentage}%` : `${group.totalCount} Qs`}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          {attempt && (
                            <div className="text-right">
                              <span className="text-sm font-bold text-gray-900">
                                {group.correctCount} / {group.totalCount}
                              </span>
                              <span className="text-xs text-gray-400 block">Correct</span>
                            </div>
                          )}
                          <div className="p-2 bg-gray-100 rounded-xl text-gray-500">
                            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </div>
                        </div>
                      </div>

                      {/* Expanded Question Details */}
                      {isExpanded && (
                        <div className="p-5 bg-purple-50/30 border-t border-purple-100/60 space-y-4">
                          <h5 className="text-xs font-bold uppercase tracking-wider text-purple-900">
                            Questions in {group.topicName} ({group.questions.length})
                          </h5>
                          <div className="space-y-3">
                            {group.questions.map((q, qIdx) => (
                              <div key={q.id || qIdx} className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm text-sm">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="font-bold text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-md text-xs">
                                    Question #{qIdx + 1}
                                  </span>
                                  {q.difficulty && (
                                    <span className="text-xs text-gray-400 capitalize font-medium">
                                      Difficulty: {q.difficulty}
                                    </span>
                                  )}
                                </div>
                                <div className="text-gray-800 font-medium leading-relaxed mb-3">
                                  {renderRichText(q.question)}
                                </div>
                                {q.explanation && (
                                  <div className="mt-2 p-3 bg-gray-50 rounded-xl text-xs text-gray-600 border border-gray-100">
                                    <strong className="text-purple-900 block mb-1">Explanation:</strong>
                                    {renderRichText(q.explanation)}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-gray-100 border-t border-gray-200 flex justify-between items-center">
          <p className="text-xs text-gray-500">
            Click on any topic row to expand and inspect specific exam questions.
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-gray-900 hover:bg-black text-white text-sm font-bold rounded-xl transition-colors"
          >
            Close Analysis
          </button>
        </div>

      </div>
    </div>
  );
};
