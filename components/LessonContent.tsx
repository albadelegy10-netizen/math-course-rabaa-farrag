
import React, { useState, useEffect } from 'react';
import { Lesson, LessonId, User, Question } from '../types';
import { Edit, Sparkles, Brain, Download, FileText, Eye, EyeOff, Check, List, ChevronRight, Home, Trash2, Share2, Lock, Video, PlayCircle } from 'lucide-react';
import { questionService } from '../questionService';
import { lessonService } from '../lessonService';
import { renderRichText } from '../utils/textRenderer';
import { generatePDF, generateWord } from '../utils/documentGenerator';
import { authService } from '../authService';
import { useNavigate } from 'react-router-dom';
import { quizDraftService } from '../utils/quizDraftService';

interface LessonContentProps {
  lesson: Lesson;
  onStartQuiz: (lessonId: LessonId, mode: 'practice' | 'exam') => void;
  onEditExam?: (lessonId: LessonId) => void;
  currentUser?: User | null;
  courseCategory?: string;
  onBackToCourse?: () => void;
  onNavigateHome?: () => void;
  onDeleteLesson?: (lessonId: LessonId) => void;
  isSynced?: boolean;
}

const LessonContent: React.FC<LessonContentProps> = ({ 
  lesson, 
  onStartQuiz, 
  onEditExam, 
  currentUser,
  courseCategory,
  onBackToCourse,
  onNavigateHome,
  onDeleteLesson
}) => {
  const isEditable = currentUser?.role === 'admin' || currentUser?.role === 'co-admin';
  const [showPreview, setShowPreview] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLocked, setIsLocked] = useState(false);
  const [lockReason, setLockReason] = useState<'premium' | 'overdue_homework'>('premium');
  const navigate = useNavigate();

  useEffect(() => {
    // Check lock status
    if (currentUser && currentUser.role !== 'admin' && currentUser.role !== 'co-admin') {
       // 1. Check if user is student with overdue unsolved homework for this lesson
       if (currentUser.role === 'student') {
          const userAssignment = currentUser.assignments?.find(a => a.lessonId === lesson.id);
          const hasSolved = (currentUser.history?.filter(h => h.lessonId === lesson.id) || []).length > 0 || userAssignment?.manualScore !== undefined;
          const isOverdue = userAssignment?.dueDate ? (new Date(userAssignment.dueDate + 'T23:59:59') < new Date() && !hasSolved) : false;
          
          if (userAssignment && isOverdue) {
             setIsLocked(true);
             setLockReason('overdue_homework');
             setIsLoading(false);
             return;
          }
       }

       // 2. Check tier or account status restriction
       const isInactive = currentUser.isActive === false;
       if (currentUser.tier !== 'premium' || isInactive) {
           let allowedIds: string[] = [];
           if (currentUser.role === 'student') {
               const userIds = currentUser.assignments?.map(a => a.lessonId).filter((id): id is string => id !== undefined) || [];
               const freeIds = authService.getFreeHomework().map(a => a.lessonId).filter((id): id is string => id !== undefined) || [];
               allowedIds = [...userIds, ...freeIds];
           } else if (currentUser.role === 'parent' && currentUser.children) {
               const allUsers = authService.getAllUsers();
               const myChildren = allUsers.filter(u => currentUser.children?.includes(u.username));
               const allChildAssignments = myChildren.flatMap(c => {
                   const childIds = c.assignments?.map(a => a.lessonId).filter((id): id is string => id !== undefined) || [];
                   const freeIds = authService.getFreeHomework().map(a => a.lessonId).filter((id): id is string => id !== undefined) || [];
                   return [...childIds, ...freeIds];
               });
               allowedIds = [...new Set(allChildAssignments)];
           }

           if (!allowedIds.includes(lesson.id)) {
               setIsLocked(true);
               setLockReason('premium');
           }
       }
    }

    const initQuestions = async () => {
      setIsLoading(true);
      try {
          const timeout = new Promise(resolve => setTimeout(resolve, 1500));
          await Promise.race([lessonService.getAllLessons(), timeout]);
      } catch (e) {
          console.warn("Lesson list sync timeout or error", e instanceof Error ? e.message : String(e));
      }
      setQuestions(questionService.getQuestions(lesson.id));
      setIsLoading(false);
      
      lessonService.getAllLessons().then(() => {
          setQuestions(questionService.getQuestions(lesson.id));
      }).catch((e: any) => console.error(e instanceof Error ? e.message : String(e)));
    };
    initQuestions();
  }, [lesson.id, currentUser]);

  if (isLocked) {
      const isOverdueHw = lockReason === 'overdue_homework';
      const studentName = currentUser?.name || currentUser?.username || 'Student';
      const whatsappMsg = isOverdueHw 
        ? `Hello Eng. Rabaa, my homework "${lesson.title}" is locked because the due date has passed. Could you please reopen it for me? (Student: ${studentName})`
        : `Hello Eng. Rabaa, I would like to upgrade my account to premium to unlock course materials.`;
      
      const whatsappUrl = `https://wa.me/201120486569?text=${encodeURIComponent(whatsappMsg)}`;

      return (
        <div className="max-w-4xl mx-auto py-12 px-6">
            <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg mx-auto overflow-hidden animate-in zoom-in-95 duration-200 border border-gray-100">
                <div className="p-10 text-center">
                    <div className={`w-24 h-24 ${isOverdueHw ? 'bg-rose-50' : 'bg-amber-50'} rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner`}>
                        <Lock className={`w-12 h-12 ${isOverdueHw ? 'text-rose-500' : 'text-amber-500'} flex-shrink-0`} />
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 mb-3 tracking-tight">
                      {isOverdueHw ? 'Homework Locked' : 'Content Locked'}
                    </h3>
                    <p className="text-gray-500 mb-8 text-base px-2">
                      {isOverdueHw 
                        ? 'This homework is locked because the due date has passed and it was not submitted. Please send Eng. Rabaa a message on WhatsApp to reopen the homework for you.' 
                        : 'This lesson or exam is restricted to premium accounts. Join the full course today to unlock all materials, interactive lessons, and practice exams!'}
                    </p>
                    
                    <button
                        onClick={() => window.open(whatsappUrl, '_blank')}
                        className="w-full py-4 bg-[#25D366] text-white font-bold rounded-2xl hover:bg-[#20ba59] transition-all duration-300 transform active:scale-95 shadow-lg shadow-green-200 text-lg flex justify-center items-center mb-4"
                    >
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412 0 12.049c0 2.123.541 4.197 1.57 6.079L0 24l6.15-1.612a11.832 11.832 0 005.9 1.573h.004c6.638 0 12.05-5.414 12.053-12.05a11.825 11.825 0 00-3.414-8.522z"/>
                        </svg>
                        {isOverdueHw ? 'Message Eng Rabaa to Reopen' : 'Upgrade via WhatsApp'}
                    </button>
                    
                    <button 
                        onClick={onBackToCourse}
                        className="text-gray-500 font-medium hover:text-gray-800 text-sm"
                    >
                        Go back to course
                    </button>
                </div>
            </div>
        </div>
      );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        <p className="text-gray-500 font-medium">Syncing lesson content...</p>
      </div>
    );
  }

  const handleShare = () => {
    const url = `${window.location.origin}/lesson/${lesson.id}`;
    navigator.clipboard.writeText(url).then(() => {
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 3000);
    });
  };

  const handleDownload = async (mode: 'notes_only' | 'student_exam' | 'teacher_key') => {
    try {
      const questionsToUse = mode === 'notes_only' ? [] : questions;
      const generatorMode = mode === 'teacher_key' ? 'teacher_key' : 'student_exam';

      if (currentUser?.role === 'admin' || currentUser?.role === 'co-admin') {
        await generateWord(lesson, questionsToUse, generatorMode);
      } else {
        await generatePDF(lesson, questionsToUse, generatorMode);
      }
    } catch (e: any) {
      console.error("Download generation error:", e.message);
    }
  };

  const renderStudyNotes = (notes: string) => {
    return notes.split('\n').map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={idx} className="h-4" />;
      
      // Check for Media Tags (img, a href for PDF/Video) or SVG
      if (trimmed.startsWith('<svg') || trimmed.startsWith('<img') || trimmed.startsWith('<a ')) {
          return (
              <div key={idx} className="my-6 w-full" dangerouslySetInnerHTML={{ __html: trimmed }} />
          );
      }

      // H1 Title
      if (trimmed.startsWith('# ')) {
          const content = trimmed.replace(/^#\s+/, '');
          return (
              <h2 key={idx} className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-8 mt-8 flex items-center border-b border-purple-100 pb-4">
                  <Sparkles className="w-7 h-7 text-pink-500 mr-2 flex-shrink-0" />
                  {renderRichText(content)}
              </h2>
          );
      }
      
      // H2 Title
      if (trimmed.startsWith('## ')) {
          const content = trimmed.replace(/^##\s+/, '');
          return (
              <h3 key={idx} className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 mt-8 flex items-center border-b border-blue-100 pb-3">
                  <Sparkles className="w-6 h-6 text-indigo-500 mr-2 flex-shrink-0" />
                  {renderRichText(content)}
              </h3>
          );
      }
      
      // H3 Subtitle
      if (trimmed.startsWith('### ')) {
          const content = trimmed.replace(/^###\s+/, '');
          return (
              <h4 key={idx} className="text-xl font-bold text-teal-700 mb-4 mt-8 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-3 inline-block"></span>
                  {renderRichText(content)}
              </h4>
          );
      }

      // Main Exam Title (Legacy support for bold only)
      if (trimmed.startsWith('**') && trimmed.endsWith('**') && !trimmed.match(/^\d/) && !trimmed.includes("Example") && !trimmed.includes("Solution") && !trimmed.includes("Rule")) {
          return (
              <h3 key={idx} className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-8 mt-8 flex items-center border-b border-purple-100 pb-4">
                  <Sparkles className="w-6 h-6 text-pink-500 mr-2 inline-block" />
                  {trimmed.replace(/\*\*/g, '').replace(/\$/g, '')}
              </h3>
          );
      }
      
      // Solved Examples
      if (trimmed.startsWith('**Example:**') || trimmed.startsWith('**Example**:')) {
         const content = trimmed.replace(/\*\*Example:?\*\*\s*/, '');
         return (
             <div key={idx} className="ml-4 mt-6 mb-4 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl shadow-sm">
                 <div className="flex items-start">
                     <Brain className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                     <div>
                         <span className="font-bold text-blue-800 block text-xs uppercase tracking-widest mb-2">Solved Example</span>
                         <div className="text-blue-900 font-medium text-lg leading-relaxed">{renderRichText(content)}</div>
                     </div>
                 </div>
             </div>
         );
      }

      // Regular text fallback
      return (
          <div key={idx} className="text-gray-600 mb-3 leading-relaxed text-lg pl-1">
              {renderRichText(trimmed)}
          </div>
      );
    });
  };

  const isGuest = currentUser?.username.startsWith('guest_');
  const isExam = lesson.type === 'exam' || (lesson.title || '').toLowerCase().includes('exam') || lesson.id.includes('ex');
  const typeLabel = isExam ? 'Full Exams' : 'Course Lessons';

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      {/* Breadcrumb Navigation */}
      {!isGuest && (
        <nav className="flex items-center text-sm font-medium text-gray-500 mb-8 overflow-x-auto whitespace-nowrap pb-2 no-scrollbar">
           <button 
             onClick={onNavigateHome} 
             className="hover:text-purple-600 transition-colors flex items-center p-1 rounded-md hover:bg-purple-50"
             title="Go Home"
           >
             <Home className="w-4 h-4" />
           </button>
           
           {courseCategory && (
             <>
               <ChevronRight className="w-4 h-4 mx-2 text-gray-300 flex-shrink-0" />
               <button 
                 onClick={() => navigate(`/courses/${courseCategory}`)}
                 className="hover:text-purple-600 transition-colors hover:underline decoration-2 underline-offset-4"
               >
                 {courseCategory} Course
               </button>
             </>
           )}
  
           <ChevronRight className="w-4 h-4 mx-2 text-gray-300 flex-shrink-0" />
           <button 
               className="hover:text-purple-600 transition-colors hover:underline decoration-2 underline-offset-4"
               onClick={() => {
                   if (courseCategory) {
                       navigate(`/courses/${courseCategory}?tab=${isExam ? 'exams' : 'lessons'}`);
                   } else if (onBackToCourse) {
                       onBackToCourse();
                   }
               }}
           >
               {typeLabel}
           </button>
  
           <ChevronRight className="w-4 h-4 mx-2 text-gray-300 flex-shrink-0" />
           <span className="font-bold text-purple-900 bg-purple-50 px-3 py-1 rounded-full border border-purple-100 flex items-center">
              <FileText className="w-3 h-3 mr-2 text-purple-500" />
              {lesson.title}
           </span>
        </nav>
      )}

      <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col md:flex-row md:items-center justify-between mb-8 shadow-sm gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{lesson.title}</h2>
          <p className="text-gray-500">{lesson.description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {lesson.recordLink && (
            <a 
              href={lesson.recordLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-700 hover:bg-red-100 rounded-lg text-sm font-bold transition-all border border-red-200 shadow-sm"
              title="Watch Lesson Recording"
            >
              <Video className="w-4 h-4 text-red-600" />
              <span>Watch Record</span>
            </a>
          )}
          <button 
            onClick={handleShare}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg text-sm font-bold transition-all border border-blue-200"
          >
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
          
          {isEditable && (
            <button 
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center space-x-2 px-4 py-2 bg-purple-50 text-purple-700 hover:bg-purple-100 rounded-lg text-sm font-bold transition-all border border-purple-200"
            >
              {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{showPreview ? 'Hide Questions' : 'Preview Questions'}</span>
            </button>
          )}
          
          {isEditable && onEditExam && (
            <div className="flex gap-2">
              <button 
                onClick={() => onEditExam(lesson.id)}
                className="flex items-center space-x-2 px-4 py-2 bg-orange-100 text-orange-700 hover:bg-orange-200 rounded-lg text-sm font-bold transition-all border border-orange-200"
              >
                <Edit className="w-4 h-4" />
                <span>Edit Lesson</span>
              </button>
              {onDeleteLesson && (
                <button 
                  onClick={() => setShowDeleteModal(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-sm font-bold transition-all border border-red-100"
                  title="Delete Entire Lesson"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-lg text-sm font-medium border border-gray-200 transition-all">
            <span>⛶</span>
            <span>Full Screen</span>
          </button>
        </div>
      </div>

      {isEditable && showPreview && (
        <div className="bg-white rounded-3xl border border-gray-200 p-8 mb-8 shadow-xl animate-in slide-in-from-top-4">
            <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                    <List className="w-6 h-6 mr-2 text-purple-600" />
                    Question Bank Preview ({questions.length})
                </h3>
                {questions.length === 0 && (
                    <span className="text-sm text-red-500 font-medium bg-red-50 px-3 py-1 rounded-full">No questions added yet</span>
                )}
            </div>
            <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2">
                {questions.map((q, idx) => (
                    <div key={q.id} className="p-4 rounded-xl border border-gray-100 bg-gray-50 hover:border-purple-200 transition-all">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs font-black text-gray-400 uppercase tracking-wide">Question {idx + 1}</span>
                            {q.category && <span className="text-[10px] font-bold bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-500">{q.category}</span>}
                        </div>
                        <div className="font-medium text-gray-800 mb-4 text-lg leading-relaxed">{renderRichText(q.question)}</div>
                        <div className="space-y-2">
                            {q.options.length > 0 ? (
                                q.options.map((opt: string, i: number) => {
                                    let isCorrect = i === q.correctAnswer;
                                    if (!isCorrect && typeof q.correctAnswer === 'string') {
                                        const match = q.correctAnswer.trim().match(/^([A-Ea-e])/);
                                        if (match) isCorrect = i === (match[1].toUpperCase().charCodeAt(0) - 65);
                                        else isCorrect = i === Number(q.correctAnswer);
                                    }
                                    return (
                                        <div key={i} className={`text-base p-3 rounded-lg flex items-center ${isCorrect ? 'bg-green-50 text-green-900 font-bold border border-green-200' : 'bg-white border border-gray-200 text-gray-600'}`}>
                                            <span className={`w-6 h-6 rounded-full flex items-center justify-center border border-current mr-3 text-xs ${isCorrect ? 'bg-green-200 text-green-800 font-bold' : 'opacity-60'}`}>{String.fromCharCode(65+i)}</span>
                                            {renderRichText(opt)}
                                            {isCorrect && <Check className="w-5 h-5 ml-auto text-green-600" />}
                                        </div>
                                    );
                                })
                            ) : (
                                <div className="text-base p-3 rounded-lg flex items-center bg-green-50 text-green-900 font-bold border border-green-200">
                                    <span className="mr-2">Answer:</span>
                                    {q.answerText || 'N/A'}
                                    <Check className="w-5 h-5 ml-auto" />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      )}

      {/* Practice Quiz Section - Moved to Top */}
      {(() => {
        const activeDraft = currentUser?.username ? quizDraftService.getDraft(currentUser.username, lesson.id) : null;
        const hasProgress = activeDraft && (activeDraft.currentIndex > 0 || activeDraft.answers.some(a => a !== null));
        const resumedQuestionNum = activeDraft ? activeDraft.currentIndex + 1 : 1;

        return (
          <div className="bg-purple-50 rounded-3xl p-10 text-center border border-purple-100 mb-12 shadow-sm relative overflow-hidden">
            {hasProgress && (
              <div className="mb-4 inline-flex items-center px-4 py-1.5 bg-purple-600 text-white rounded-full text-xs font-bold shadow-sm">
                <PlayCircle className="w-4 h-4 mr-1.5 animate-pulse" />
                <span>Unfinished Progress Saved — Resumes at Question #{resumedQuestionNum}</span>
              </div>
            )}

            <h4 className="text-3xl font-bold text-purple-900 mb-3">Start {lesson.title}</h4>
            <p className="text-purple-600 text-lg mb-8">
              {hasProgress 
                ? `You have an unfinished attempt saved. Continue directly from Question #${resumedQuestionNum}!` 
                : 'Test your knowledge and practice time management.'}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-3xl mx-auto">
              <button 
                onClick={() => onStartQuiz(lesson.id, 'practice')}
                className={`flex-1 py-5 text-white rounded-2xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 ${
                  hasProgress 
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-emerald-200' 
                    : 'bg-purple-600 hover:bg-purple-700 shadow-purple-200'
                }`}
              >
                <span className="text-xl block mb-1">
                  {hasProgress ? `▶ Resume Practice (Q#${resumedQuestionNum})` : 'Practice Mode'}
                </span>
                <span className="text-sm font-medium opacity-90">
                  {hasProgress ? `Continue from Question #${resumedQuestionNum}` : '(No Timer)'}
                </span>
              </button>
              
              <button 
                onClick={() => onStartQuiz(lesson.id, 'exam')}
                className="flex-1 py-5 bg-[#3b0764] hover:bg-[#2e0650] text-white rounded-2xl font-bold transition-all shadow-lg shadow-purple-900/20 hover:shadow-xl hover:-translate-y-1"
              >
                <span className="text-xl block mb-1">
                  {hasProgress && activeDraft?.mode === 'exam' ? `▶ Resume Exam (Q#${resumedQuestionNum})` : 'Exam Mode'}
                </span>
                <span className="text-sm font-medium opacity-80">({lesson.examMinutes ?? 75} Min)</span>
              </button>
            </div>
          </div>
        );
      })()}

      {/* Printable PDF (questions + answer key) — available to students and admins */}
      {lesson.pdfUrl && (
        <div className="mb-8 bg-white rounded-2xl border border-pink-100 shadow-sm p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-100 to-indigo-100 text-pink-600 flex items-center justify-center flex-shrink-0">
            <FileText className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-gray-900">Printable Exam PDF</h3>
            <p className="text-sm text-gray-500">All 50 questions with a name/score sheet, the answer key, and step-by-step solutions.</p>
          </div>
          <a
            href={lesson.pdfUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-indigo-600 text-white font-bold shadow-lg shadow-pink-200 hover:shadow-xl hover:-translate-y-0.5 transition-all whitespace-nowrap"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </a>
        </div>
      )}

      <div className={`grid grid-cols-1 ${isEditable ? 'lg:grid-cols-3' : ''} gap-6 lg:gap-8 [&>*]:min-w-0`}>
        <div className={`${isEditable ? 'lg:col-span-2' : 'col-span-1'} space-y-8`}>
          <div className="bg-white rounded-3xl border border-purple-100 shadow-xl shadow-purple-50/50 p-5 sm:p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-100 to-pink-50 rounded-full -mr-16 -mt-16 opacity-50 blur-2xl pointer-events-none"></div>
            
            <div className="relative z-10">
              {renderStudyNotes(lesson.studyNotes)}
            </div>
          </div>
        </div>

        {/* Downloads Section - Admin Only */}
        {isEditable && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-blue-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Download className="w-5 h-5 mr-2 text-blue-600" />
                Download Resources
              </h3>
              <div className="space-y-3">
                {/* Option 1: Study Notes Only */}
                <button 
                  onClick={() => handleDownload('notes_only')}
                  className="w-full flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 text-gray-700 hover:text-blue-700 transition-all group"
                >
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-3 text-gray-400 group-hover:text-blue-500" />
                    <span className="text-sm font-bold">Study Notes Only</span>
                  </div>
                  <Download className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                </button>
                
                {/* Option 2: Study Notes + Exam (Student - No Answers) */}
                <button 
                  onClick={() => handleDownload('student_exam')}
                  className="w-full flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-gray-50 hover:bg-purple-50 hover:border-purple-200 text-gray-700 hover:text-purple-700 transition-all group"
                >
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-3 text-gray-400 group-hover:text-purple-500" />
                    <span className="text-sm font-bold">Notes + Exam (Student)</span>
                  </div>
                  <Download className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-purple-500" />
                </button>

                {/* Option 3: Study Notes + Exam + Answers (Teacher) */}
                <button 
                  onClick={() => handleDownload('teacher_key')}
                  className="w-full flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-gray-50 hover:bg-green-50 hover:border-green-200 text-gray-700 hover:text-green-700 transition-all group"
                >
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-3 text-gray-400 group-hover:text-green-500" />
                    <span className="text-sm font-bold">Notes + Exam + Key</span>
                  </div>
                  <Download className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-green-500" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Share Toast */}
      {showShareToast && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center space-x-2 z-50 animate-in fade-in slide-in-from-bottom-4">
          <Check className="w-5 h-5 text-green-400" />
          <span className="font-medium">Link copied to clipboard!</span>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Move to Bin?</h3>
                <p className="text-gray-500 mb-6 font-medium">Are you sure you want to move <span className="text-red-600 font-bold">"{lesson.title}"</span> to the bin? You can restore it later.</p>
                <div className="flex space-x-3">
                    <button onClick={() => setShowDeleteModal(false)} className="flex-1 py-2 bg-gray-100 text-gray-700 font-bold rounded-lg">Cancel</button>
                    <button 
                        onClick={() => {
                            setShowDeleteModal(false);
                            if (onDeleteLesson) onDeleteLesson(lesson.id);
                        }} 
                        className="flex-1 py-2 bg-red-600 text-white font-bold rounded-lg shadow-lg shadow-red-200"
                    >
                        Move to Bin
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default LessonContent;
