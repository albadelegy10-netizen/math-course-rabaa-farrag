
import React, { useState, useEffect, useRef } from 'react';
import { Question, LessonId, QuizState, User, QuizAttempt, Lesson } from '../types';
import { generateQuizQuestions, generateSimilarQuestions } from '../geminiService';
import { authService } from '../authService';
import { LESSONS } from '../constants';
import { renderRichText, renderSvgOrImage } from '../utils/textRenderer';
import YouTube from 'react-youtube';
import Reports from './Reports';
import { quizDraftService } from '../utils/quizDraftService';

// Exam Mode time limit: the lesson's examMinutes if set, otherwise 1.5 minutes per question.
const getExamSeconds = (lessonId: string, questionCount: number) => {
  const minutes = LESSONS.find(l => l.id === lessonId)?.examMinutes;
  return minutes ? minutes * 60 : questionCount * 1.5 * 60;
};

function extractYouTubeId(url: string) {
    if (!url) return null;
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : null;
}
import { 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  ChevronUp,
  RotateCcw, 
  LayoutGrid, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Heart,
  Quote,
  Bookmark as BookmarkIcon,
  XCircle,
  Check,
  X,
  Youtube,
  Home,
  Lock
} from 'lucide-react';

interface QuizRunnerProps {
  lessonId: LessonId | 'review';
  topicName: string;
  mode: 'practice' | 'exam';
  onExit: () => void;
  onComplete: (score: number) => void;
  currentUser: User;
  onToggleBookmark: (question: Question) => void;
  onIncorrectAnswer: (question: Question) => void;
  onCorrectAnswer?: (question: Question) => void;
  onReviewMistakes?: () => void;
  customQuestions?: Question[]; // Optional prop for passing specific questions (Review Mode)
  courseCategory?: string;
  onNavigateHome?: () => void;
  onNavigateToCourse?: () => void;
  onNavigateToLesson?: () => void;
  isSynced?: boolean;
  lessons?: Lesson[];
}

import { useNavigate } from 'react-router-dom';

const QuizRunner: React.FC<QuizRunnerProps> = ({ 
  lessonId, 
  topicName, 
  mode, 
  onExit, 
  onComplete, 
  currentUser, 
  onToggleBookmark,
  onIncorrectAnswer,
  onCorrectAnswer,
  // onReviewMistakes, // Removed unused destructuring
  customQuestions,
  courseCategory,
  onNavigateHome,
  isSynced,
  lessons = []
}) => {
  const [loading, setLoading] = useState(true);
  const [quiz, setQuiz] = useState<QuizState | null>(null);
  const [isLockedHomework, setIsLockedHomework] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [isProgressExpanded, setIsProgressExpanded] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);
  const [submittedQuestions, setSubmittedQuestions] = useState<Set<number>>(new Set());
  const [reportedCompletion, setReportedCompletion] = useState(false);
  const [localEmotions, setLocalEmotions] = useState<Record<string, string>>(currentUser?.questionEmotions || {});
  const advanceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [resumedFromDraftInfo, setResumedFromDraftInfo] = useState<{ questionNumber: number; totalQuestions: number; answeredCount: number } | null>(null);

  useEffect(() => {
    initNewQuiz();
  }, [lessonId, topicName, mode, customQuestions, isSynced]);

  const navigate = useNavigate();

  // Effect to report score when quiz completes
  const allUsers = authService.getAllUsers();
  const currentQId = quiz?.questions?.[quiz?.currentIndex]?.id;

  const emotionCounts = React.useMemo(() => {
    if (!currentQId) return {};
    const counts: Record<string, number> = {};
    allUsers.forEach(u => {
        const e = u.questionEmotions?.[currentQId];
        if (e && u.username !== currentUser.username) {
            counts[e] = (counts[e] || 0) + 1;
        }
    });
    if (localEmotions[currentQId]) {
        counts[localEmotions[currentQId]] = (counts[localEmotions[currentQId]] || 0) + 1;
    }
    return counts;
  }, [currentQId, allUsers, localEmotions, currentUser.username]);

  useEffect(() => {
    if (quiz?.isComplete && !reportedCompletion) {
      // Clear saved draft on quiz completion
      quizDraftService.clearDraft(currentUser.username, lessonId);

      const correctCount = quiz.answers.filter((ans, idx) => {
        const q = quiz.questions[idx];
        if (!q) return false;
        if (q.options.length > 0) return ans === q.correctAnswer;
        return String(ans || '').trim().toLowerCase() === String(q.answerText || '').trim().toLowerCase();
      }).length;
      
      const percentage = Math.round((correctCount / quiz.questions.length) * 100);
      
      // Update progress for regular lessons (not review mode)
      if (lessonId !== 'review') {
        authService.updateProgress(currentUser.username, lessonId, percentage);
      }

      // Record Attempt History
      const attempt: QuizAttempt = {
        id: `${Date.now()}`,
        lessonId: lessonId,
        topicName: topicName,
        score: percentage,
        totalQuestions: quiz.questions.length,
        correctCount: correctCount,
        timestamp: Date.now(),
        mode: mode
      };
      authService.recordAttempt(currentUser.username, attempt);

      onComplete(percentage);
      setReportedCompletion(true);

      // In Exam mode, report mistakes at the end
      if (mode === 'exam') {
        quiz.questions.forEach((q, idx) => {
          if (!q) return;
          const ans = quiz.answers[idx];
          let isCorrect = false;
          if (q.options.length > 0) isCorrect = ans === q.correctAnswer;
          else isCorrect = String(ans || '').trim().toLowerCase() === String(q.answerText || '').trim().toLowerCase();

          if (!isCorrect) {
             onIncorrectAnswer(q);
          } else if (onCorrectAnswer) {
             onCorrectAnswer(q);
          }
        });
      }
    }
  }, [quiz?.isComplete, reportedCompletion, onComplete, quiz?.answers, quiz?.questions, mode, onIncorrectAnswer, onCorrectAnswer, lessonId, currentUser.username, topicName]);

  const initNewQuiz = async () => {
    setLoading(true);
    setHasChecked(false);
    setSubmittedQuestions(new Set());
    setReportedCompletion(false);
    
    // Check if student has an overdue unsolved homework for this lesson
    if (currentUser.role === 'student' && lessonId !== 'review') {
      const userAssignment = currentUser.assignments?.find(a => a.lessonId === lessonId);
      const hasSolved = (currentUser.history?.filter(h => h.lessonId === lessonId) || []).length > 0 || userAssignment?.manualScore !== undefined;
      const isOverdue = userAssignment?.dueDate ? (new Date(userAssignment.dueDate + 'T23:59:59') < new Date() && !hasSolved) : false;
      if (userAssignment && isOverdue) {
        setIsLockedHomework(true);
        setLoading(false);
        return;
      }
    }
    
    let questions: Question[];
    if (customQuestions && customQuestions.length > 0) {
      questions = customQuestions;
    } else {
      questions = await generateQuizQuestions(lessonId as LessonId, topicName);
    }

    // Check for existing saved draft progress for this student and lesson
    const savedDraft = quizDraftService.getDraft(currentUser.username, lessonId);
    let initialIndex = 0;
    let initialAnswers = new Array(questions.length).fill(null);
    let initialSubmitted = new Set<number>();

    if (
      savedDraft &&
      savedDraft.answers &&
      savedDraft.answers.length === questions.length
    ) {
      initialAnswers = savedDraft.answers;
      initialSubmitted = new Set(savedDraft.submittedQuestions || []);
      if (
        typeof savedDraft.currentIndex === 'number' &&
        savedDraft.currentIndex >= 0 &&
        savedDraft.currentIndex < questions.length
      ) {
        initialIndex = savedDraft.currentIndex;
      }
      const answeredCount = initialAnswers.filter(a => a !== null).length;
      if (answeredCount > 0 || initialIndex > 0) {
        setResumedFromDraftInfo({
          questionNumber: initialIndex + 1,
          totalQuestions: questions.length,
          answeredCount,
        });
      } else {
        setResumedFromDraftInfo(null);
      }
    } else {
      setResumedFromDraftInfo(null);
    }

    setSubmittedQuestions(initialSubmitted);
    setQuiz({
      lessonId: lessonId as LessonId,
      mode,
      questions,
      currentIndex: initialIndex,
      answers: initialAnswers,
      isComplete: false,
      timeLeft: mode === 'exam' ? getExamSeconds(String(lessonId), questions.length) : null
    });
    setHasChecked(initialSubmitted.has(initialIndex));
    setLoading(false);
  };

  // Auto-save draft progress as user answers or navigates
  useEffect(() => {
    if (!quiz || quiz.isComplete || loading || lessonId === 'review' || !currentUser?.username) return;

    quizDraftService.saveDraft(currentUser.username, lessonId, {
      mode,
      topicName,
      currentIndex: quiz.currentIndex,
      answers: quiz.answers,
      submittedQuestions: Array.from(submittedQuestions),
      totalQuestions: quiz.questions.length,
    });
  }, [quiz?.currentIndex, quiz?.answers, submittedQuestions, quiz?.isComplete, loading, lessonId, mode, topicName, currentUser?.username]);

  const handleStartFresh = () => {
    if (window.confirm("Are you sure you want to start fresh? This will reset your saved answers for this lesson and restart from Question #1.")) {
      quizDraftService.clearDraft(currentUser.username, lessonId);
      setResumedFromDraftInfo(null);
      setHasChecked(false);
      setSubmittedQuestions(new Set());
      if (quiz) {
        setQuiz({
          ...quiz,
          currentIndex: 0,
          answers: new Array(quiz.questions.length).fill(null),
          isComplete: false,
        });
      }
    }
  };

  useEffect(() => {
    if (quiz?.timeLeft !== null && !quiz?.isComplete && !loading) {
      const timer = setInterval(() => {
        setQuiz(prev => {
          if (!prev || prev.timeLeft === null || prev.timeLeft <= 0) {
            if (prev) clearInterval(timer);
            return prev ? { ...prev, isComplete: true } : null;
          }
          return { ...prev, timeLeft: prev.timeLeft - 1 };
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [quiz?.timeLeft, quiz?.isComplete, loading]);

  const handleOptionSelect = (idx: number) => {
    if (!quiz || quiz.isComplete || hasChecked) return;

    const newAnswers = [...quiz.answers];
    newAnswers[quiz.currentIndex] = idx;
    
    // Instead of depending on state closure, use functional update + setTimeout
    setQuiz(prev => {
        if (!prev) return prev;
        return { ...prev, answers: newAnswers };
    });
  };

  const handleAnswer = (answer: number | string) => {
    if (!quiz || quiz.isComplete || hasChecked) return;
    const newAnswers = [...quiz.answers];
    newAnswers[quiz.currentIndex] = answer;
    setQuiz({ ...quiz, answers: newAnswers });
  };

  const jumpTo = (idx: number) => {
    if (!quiz) return;
    if (advanceTimeoutRef.current) clearTimeout(advanceTimeoutRef.current);
    setQuiz({ ...quiz, currentIndex: idx });
    setShowMap(false);
    setHasChecked(submittedQuestions.has(idx));
  };

  const handleNext = () => {
    if (!quiz) return;
    if (advanceTimeoutRef.current) clearTimeout(advanceTimeoutRef.current);
    if (quiz.currentIndex < quiz.questions.length - 1) {
      const nextIdx = quiz.currentIndex + 1;
      setQuiz({ ...quiz, currentIndex: nextIdx });
      setHasChecked(submittedQuestions.has(nextIdx));
    } else {
      setQuiz({ ...quiz, isComplete: true });
    }
  };

  const handlePrev = () => {
    if (!quiz) return;
    if (advanceTimeoutRef.current) clearTimeout(advanceTimeoutRef.current);
    if (quiz.currentIndex > 0) {
      const prevIdx = quiz.currentIndex - 1;
      setQuiz({ ...quiz, currentIndex: prevIdx });
      setHasChecked(submittedQuestions.has(prevIdx));
    }
  };

  const checkAnswer = () => {
    if (!quiz) return;
    setHasChecked(true);
    setSubmittedQuestions(prev => new Set(prev).add(quiz.currentIndex));
    const currentQ = quiz.questions[quiz.currentIndex];
    const userAns = quiz.answers[quiz.currentIndex];
    
    let isCorrect = false;
    if (currentQ.options.length > 0) {
        if (typeof currentQ.correctAnswer === 'number' && !isNaN(currentQ.correctAnswer)) {
            isCorrect = userAns === currentQ.correctAnswer;
        } else if (typeof currentQ.correctAnswer === 'string') {
            const match = currentQ.correctAnswer.trim().match(/^([A-Ea-e])/);
            if (match) {
                isCorrect = userAns === (match[1].toUpperCase().charCodeAt(0) - 65);
            } else {
                isCorrect = userAns === Number(currentQ.correctAnswer);
            }
        }
    } else {
        const userStr = String(userAns || '').trim().toLowerCase();
        const correctStr = String(currentQ.answerText || currentQ.correctAnswer || '').trim().toLowerCase();
        isCorrect = userStr === correctStr;
    }

    if (!isCorrect) {
      onIncorrectAnswer(currentQ);
    } else if (onCorrectAnswer) {
      onCorrectAnswer(currentQ);
    }
  };

  const retakeWrong = () => {
    if (!quiz) return;
    const wrongQuestions = quiz.questions.filter((q, idx) => {
        const ans = quiz.answers[idx];
        if (q.options.length > 0) {
            let correctIdx: number = typeof q.correctAnswer === 'number' ? q.correctAnswer : -1;
            if (typeof q.correctAnswer === 'string') {
                const match = q.correctAnswer.trim().match(/^([A-Ea-e])/);
                if (match) correctIdx = match[1].toUpperCase().charCodeAt(0) - 65;
                else correctIdx = Number(q.correctAnswer);
            }
            return ans !== correctIdx;
        }
        return String(ans || '').trim().toLowerCase() !== String(q.answerText || q.correctAnswer || '').trim().toLowerCase();
    });
    if (wrongQuestions.length === 0) return alert("Great job! No wrong questions to retake.");
    
    setHasChecked(false);
    setSubmittedQuestions(new Set());
    setReportedCompletion(false); 
    setQuiz({
      ...quiz,
      questions: wrongQuestions,
      answers: new Array(wrongQuestions.length).fill(null),
      currentIndex: 0,
      isComplete: false,
      isRetakeMode: true,
      timeLeft: quiz.mode === 'exam' ? (wrongQuestions.length * 1.5 * 60) : null
    });
  };

  const generateSimilar = async () => {
    if (!quiz) return;
    const wrongOnes = quiz.questions.filter((q, idx) => {
        const ans = quiz.answers[idx];
        if (q.options.length > 0) return ans !== q.correctAnswer;
        return String(ans || '').trim().toLowerCase() !== String(q.answerText || '').trim().toLowerCase();
    });
    setLoading(true);
    const newQuestions = await generateSimilarQuestions(wrongOnes);
    setQuiz({
      ...quiz,
      questions: newQuestions,
      answers: new Array(newQuestions.length).fill(null),
      currentIndex: 0,
      isComplete: false,
      timeLeft: 30 * 60,
      isRetakeMode: false
    });
    setHasChecked(false);
    setSubmittedQuestions(new Set());
    setReportedCompletion(false);
    setLoading(false);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const getAffirmation = () => {
    const phrases = ["Excellent work!", "That's correct!", "Spot on!", "You nailed it!", "Perfect!", "Great reasoning!"];
    return phrases[Math.floor(Math.random() * phrases.length)];
  };

  const fullLesson = LESSONS.find(l => l.id === lessonId);
  const displayTitle = fullLesson ? fullLesson.title : topicName;

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-6 py-20">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900">Processing Questions...</h3>
          <p className="text-gray-500 mt-2">Personalizing your session</p>
        </div>
      </div>
    );
  }

  if (isLockedHomework) {
    const studentName = currentUser?.name || currentUser?.username || 'Student';
    const whatsappMsg = `Hello Eng. Rabaa, my homework "${displayTitle}" is locked because the due date has passed. Could you please reopen it for me? (Student: ${studentName})`;
    const whatsappUrl = `https://wa.me/201120486569?text=${encodeURIComponent(whatsappMsg)}`;

    return (
      <div className="max-w-2xl mx-auto py-16 px-6 text-center">
        <div className="bg-white p-10 rounded-3xl border border-rose-200 shadow-xl">
          <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10 text-rose-500" />
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-3">Homework Locked</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto text-base">
            This homework is locked because the deadline has passed and it was not submitted. Please send a message to Eng. Rabaa Farrag on WhatsApp to reopen the homework for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] text-white font-bold rounded-2xl hover:bg-[#20ba59] transition-all flex items-center justify-center shadow-lg shadow-green-100"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current mr-2" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412 0 12.049c0 2.123.541 4.197 1.57 6.079L0 24l6.15-1.612a11.832 11.832 0 005.9 1.573h.004c6.638 0 12.05-5.414 12.053-12.05a11.825 11.825 0 00-3.414-8.522z"/>
              </svg>
              Message Eng Rabaa to Reopen
            </button>
            <button
              onClick={onExit}
              className="w-full sm:w-auto px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-2xl transition-all"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!quiz) return null;

  // FIX: Handle empty questions array to prevent crash
  if (!quiz.questions || quiz.questions.length === 0) {
    return (
        <div className="flex flex-col items-center justify-center h-full space-y-6 py-20 px-6 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                <AlertCircle className="w-8 h-8" />
            </div>
            <div>
                <h3 className="text-xl font-bold text-gray-900">No Questions Available</h3>
                <p className="text-gray-500 mt-2 max-w-md mx-auto">
                    This lesson or exam does not have any questions yet. Please check back later or contact your administrator.
                </p>
            </div>
            <button 
                onClick={onExit}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition-all shadow-lg"
            >
                Return to Course
            </button>
        </div>
    );
  }

  const isGuest = currentUser?.username.startsWith('guest_');

  // Breadcrumb Navigation Component
  const Breadcrumbs = () => {
    if (isGuest) return null;
    
    // Attempt to guess type based on title or id for generic cases
    const isExam = (displayTitle || '').toLowerCase().includes('exam') || lessonId.includes('ex') || (displayTitle || '').toLowerCase().includes('form');
    const typeLabel = isExam ? 'Full Exams' : 'Course Lessons';

    return (
    <nav className="flex items-center text-sm font-medium text-gray-500 mb-6 overflow-x-auto whitespace-nowrap pb-2 no-scrollbar px-6 pt-6">
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
           <ChevronRight className="w-4 h-4 mx-2 text-gray-300 flex-shrink-0" />
           <button 
             onClick={() => navigate(`/courses/${courseCategory}?tab=${isExam ? 'exams' : 'lessons'}`)} 
             className="hover:text-purple-600 transition-colors hover:underline decoration-2 underline-offset-4"
           >
             {typeLabel}
           </button>
         </>
       )}

       {!courseCategory && (
         <>
           <ChevronRight className="w-4 h-4 mx-2 text-gray-300 flex-shrink-0" />
           <span className="text-gray-400 cursor-default">{typeLabel}</span>
         </>
       )}

       <ChevronRight className="w-4 h-4 mx-2 text-gray-300 flex-shrink-0" />
       <button 
          onClick={onExit} // onExit already navigates to the lesson details correctly
          className="hover:text-purple-600 transition-colors hover:underline decoration-2 underline-offset-4"
       >
          {displayTitle}
       </button>

       <ChevronRight className="w-4 h-4 mx-2 text-gray-300 flex-shrink-0" />
       <span className="font-bold text-purple-900 bg-purple-50 px-3 py-1 rounded-full border border-purple-100 flex items-center capitalize cursor-default">
          {mode}
       </span>
    </nav>
  )};

  const renderExportContainer = () => (
    <div className="absolute top-0 left-0 w-0 h-0 overflow-hidden pointer-events-none opacity-0" id="pdf-export-container">
      {quiz.questions.map((q, idx) => (
        <div key={`export-${idx}`} id={`export-q-${idx}`} className="w-[800px] bg-white p-8">
          <div className="font-bold text-xl mb-4 text-purple-900 border-b border-purple-100 pb-2">
             Question {idx + 1}
          </div>
          <div className="text-xl font-medium text-gray-900 mb-6 leading-normal break-words">
            {renderRichText(q.question)}
          </div>
          {(q.imageUrl || q.image) && (
            <div className="mb-6 flex justify-center bg-gray-50 p-4 rounded-xl">
               <img src={q.imageUrl || q.image} alt="Diagram" className="max-w-[500px] h-auto rounded-lg mx-auto shadow-sm border border-gray-100" crossOrigin="anonymous" />
            </div>
          )}
          {q.svg && (
            <div className="mb-6 flex justify-center bg-gray-50 p-4 rounded-xl">
               {renderSvgOrImage(q.svg)}
            </div>
          )}
          <div className="space-y-4">
            {q.options.length > 0 ? (
              q.options.map((opt, oIdx) => (
                <div key={oIdx} className="flex text-lg items-start">
                   <span className="font-bold text-gray-700 mr-4 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center shrink-0">
                     {String.fromCharCode(65 + oIdx)}
                   </span>
                   <div className="pt-1">{renderRichText(opt)}</div>
                </div>
              ))
            ) : (
              <div className="mt-4 p-4 border-2 border-dashed border-gray-300 rounded-xl min-h-[100px] flex items-center justify-center text-gray-400">
                 [ Student Answer Area ]
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  if (quiz.isComplete) {
    const correctCount = quiz.answers.filter((ans, idx) => {
        const q = quiz.questions[idx];
        if (!q) return false;
        if (q.options.length > 0) return ans === q.correctAnswer;
        return String(ans || '').trim().toLowerCase() === String(q.answerText || '').trim().toLowerCase();
    }).length;
    
    const percentage = Math.round((correctCount / quiz.questions.length) * 100);
    const isExam = quiz.mode === 'exam';
    const scaledScore = isExam ? Math.round((correctCount / quiz.questions.length) * 800) : null;

    const missedQuestions = quiz.questions.filter((q, idx) => {
        const ans = quiz.answers[idx];
        if (q.options.length > 0) return ans !== q.correctAnswer;
        return String(ans || '').trim().toLowerCase() !== String(q.answerText || '').trim().toLowerCase();
    });
    const totalTimeSeconds = getExamSeconds(String(quiz.lessonId), quiz.questions.length); // Calculate expected total time for dynamic accurate calculation

    // Generate Topic Stats for all modes
    const topicStats: Record<string, { correct: number; total: number }> = {};
    quiz.questions.forEach((q, idx) => {
      const ans = quiz.answers[idx];
      let isCorrect = false;
      if (q.options.length > 0) isCorrect = ans === q.correctAnswer;
      else isCorrect = String(ans || '').trim().toLowerCase() === String(q.answerText || '').trim().toLowerCase();

      const topics = q.topics && q.topics.length > 0 ? q.topics : (q.category ? [q.category] : ['General']);
      topics.forEach(t => {
        if (!topicStats[t]) topicStats[t] = { correct: 0, total: 0 };
        topicStats[t].total++;
        if (isCorrect) topicStats[t].correct++;
      });
    });

    const getEncouragement = () => {
      if (percentage >= 90) return "You are truly exceptional! Your mathematical precision is outstanding.";
      if (percentage >= 70) return "Wonderful performance! You have a solid grasp of these complex concepts.";
      if (percentage >= 50) return "Good effort! You're making great progress. Keep practicing and you'll master this in no time.";
      return "Every master was once a beginner. Don't let these tough questions discourage you—learn from each mistake!";
    };

    return (
      <div className="max-w-5xl mx-auto pb-12">
        <Breadcrumbs />
        <div className="px-6">
          <div className="bg-white rounded-3xl border border-gray-200 p-10 text-center shadow-lg mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -mr-16 -mt-16 opacity-40"></div>
            
            <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 relative z-10 ${percentage >= 70 ? 'bg-purple-100 text-purple-600' : 'bg-orange-100 text-orange-600'}`}>
              {percentage >= 70 ? <CheckCircle2 className="w-12 h-12" /> : <AlertCircle className="w-12 h-12" />}
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Quiz Results</h2>
            <p className="text-gray-500 mb-8">{topicName} - {quiz.isRetakeMode ? 'Correction Session' : (isExam ? 'Full Exam' : 'Practice Session')}</p>
            
            <div className="max-w-3xl mx-auto bg-purple-50/50 border border-purple-100 rounded-3xl p-8 mb-10 text-left relative">
              <Quote className="absolute top-4 left-4 w-10 h-10 text-purple-100 -scale-x-100" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-purple-800 mb-3 flex items-center">
                  <Heart className="w-5 h-5 mr-2 fill-purple-600 text-purple-600" />
                  A Personal Message for You
                </h3>
                <p className="text-purple-900 font-medium italic mb-4 text-lg leading-relaxed">
                  "{getEncouragement()} Please know that **I am very proud of you** for the dedication you are showing to your studies."
                </p>
                <div className="flex items-center space-x-3 pt-2">
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xs">RF</div>
                  <div>
                    <p className="text-sm font-bold text-purple-900">Eng: Rabaa Farrag</p>
                    <p className="text-xs text-purple-700">Your Math Instructor</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Correct Answers</p>
                <p className="text-3xl font-bold text-gray-900">{correctCount} / {quiz.questions.length}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{isExam ? 'Scaled Score' : 'Accuracy'}</p>
                <p className="text-3xl font-bold text-gray-900">{isExam ? `${scaledScore} / 800` : `${percentage}%`}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Time Used</p>
                <p className="text-3xl font-bold text-gray-900">{quiz.timeLeft !== null && quiz.timeLeft >= 0 ? formatTime(totalTimeSeconds - quiz.timeLeft) : 'N/A'}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Status</p>
                <p className={`text-2xl font-bold ${percentage >= 50 ? 'text-purple-600' : 'text-red-600'}`}>
                  {percentage >= 50 ? 'PASS' : 'RETAKE'}
                </p>
              </div>
            </div>

            {/* Topic Breakdown */}
            {Object.keys(topicStats).length > 0 && (
              <div className="mb-10">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-left flex items-center">
                  <LayoutGrid className="w-5 h-5 mr-2 text-purple-600" />
                  Topic Analysis
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(topicStats).map(([topic, stats]) => {
                    const topicPercentage = Math.round((stats.correct / stats.total) * 100);
                    const isStrong = topicPercentage >= 70;
                    return (
                      <div key={topic} className={`p-4 rounded-xl border ${isStrong ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'} text-left`}>
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-gray-800 text-sm line-clamp-2 h-10 flex items-center">{topic}</h4>
                          <span className={`text-xs font-bold px-2 py-1 rounded-full ${isStrong ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                            {topicPercentage}%
                          </span>
                        </div>
                        <div className="flex items-end justify-between">
                          <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Performance</span>
                          <span className="text-xl font-bold text-gray-900">{stats.correct}/{stats.total}</span>
                        </div>
                        <div className="w-full bg-white/50 rounded-full h-1.5 mt-3 overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${isStrong ? 'bg-green-500' : 'bg-red-500'}`} 
                            style={{ width: `${topicPercentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <button onClick={() => initNewQuiz()} className="flex items-center justify-center space-x-2 p-4 bg-gray-100 hover:bg-gray-200 rounded-xl font-bold transition-all">
                <RotateCcw className="w-5 h-5" /> <span>Retake Whole Quiz</span>
              </button>
              <button 
                disabled={missedQuestions.length === 0} 
                onClick={retakeWrong} 
                className="flex items-center justify-center space-x-2 p-4 bg-orange-50 text-orange-700 hover:bg-orange-100 border border-orange-200 rounded-xl font-bold transition-all disabled:opacity-50"
              >
                <AlertCircle className="w-5 h-5" /> <span>Retake Wrong Only ({missedQuestions.length})</span>
              </button>
              <button onClick={generateSimilar} className="flex items-center justify-center space-x-2 p-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-purple-100">
                <Sparkles className="w-5 h-5" /> <span>Practice Similar Problems</span>
              </button>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
             <button onClick={onExit} className="text-gray-400 font-bold hover:text-gray-600">Back to Lessons</button>
             <button 
                onClick={() => {
                   if (onExit) onExit(); 
                   // Wait slightly for any unmounting or state updates from onExit, then navigate
                   setTimeout(() => navigate('/analysis'), 0);
                }} 
                className="text-purple-600 font-bold hover:text-purple-800"
             >
                View Detailed Analysis
             </button>
          </div>

          {/* Student Reports Section */}
          <div className="mt-16 pt-12 border-t border-gray-200">
             <Reports 
                user={authService.getAllUsers().find(u => u.username === currentUser.username) || currentUser} 
                lessons={lessons} 
             />
          </div>
        </div>
        {renderExportContainer()}
      </div>
    );
  }

  // Active Quiz View
  const currentQ = quiz.questions[quiz.currentIndex];
  const isLast = quiz.currentIndex === quiz.questions.length - 1;
  const selectedOption = quiz.answers[quiz.currentIndex];
  const isReviewing = hasChecked;
  const isCorrect = isReviewing && (
    currentQ.options.length > 0 
      ? selectedOption === currentQ.correctAnswer 
      : String(selectedOption || '').trim().toLowerCase() === String(currentQ.answerText || '').trim().toLowerCase()
  );

  // Determine if bookmarked for visual state
  const isBookmarked = currentUser.bookmarks?.some(
    b => b.question.question === currentQ.question && (b.lessonId === lessonId || b.lessonId === 'review')
  );

  return (
    <div className="max-w-5xl mx-auto pb-12 flex flex-col min-h-[90vh]">
      <Breadcrumbs />
      
      {/* Header Bar */}
      <div className="bg-white sticky top-0 z-30 px-6 py-4 border-b border-gray-200 shadow-sm flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-gray-900 line-clamp-1">{displayTitle}</h2>
          <p className="text-xs text-gray-500 font-medium">Question {quiz.currentIndex + 1} of {quiz.questions.length}</p>
        </div>
        <div className="flex items-center space-x-4">
          {quiz.timeLeft !== null && (
            <div className={`flex items-center px-4 py-2 rounded-lg font-mono font-bold text-lg ${quiz.timeLeft < 300 ? 'bg-red-50 text-red-600 animate-pulse' : 'bg-gray-100 text-gray-700'}`}>
              <Clock className="w-5 h-5 mr-2" />
              {formatTime(quiz.timeLeft)}
            </div>
          )}
          <button 
            onClick={onExit}
            className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-red-500 transition-colors"
            title="Exit Quiz"
          >
            <XCircle className="w-6 h-6" />
          </button>
        </div>
      </div>

      {resumedFromDraftInfo && (
        <div className="mx-6 mb-6 p-4 bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 border border-purple-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm animate-in fade-in">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black text-sm shadow-md shrink-0">
              Q{resumedFromDraftInfo.questionNumber}
            </div>
            <div>
              <p className="font-bold text-purple-950 text-sm">
                Resumed from last solved question (Question #{resumedFromDraftInfo.questionNumber} of {resumedFromDraftInfo.totalQuestions})
              </p>
              <p className="text-xs text-purple-700 font-medium mt-0.5">
                {resumedFromDraftInfo.answeredCount} question{resumedFromDraftInfo.answeredCount === 1 ? '' : 's'} answered in your previous session.
              </p>
            </div>
          </div>
          <button
            onClick={handleStartFresh}
            className="px-4 py-2 bg-white hover:bg-purple-100 text-purple-700 border border-purple-300 rounded-xl text-xs font-bold transition-all shadow-xs hover:shadow-sm shrink-0 self-start sm:self-auto"
          >
            Start Fresh / Reset
          </button>
        </div>
      )}

      <div className="flex-1 px-6 flex flex-col md:flex-row gap-8">
        {/* Main Question Area */}
        <div className="flex-1">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm min-h-[400px] flex flex-col relative overflow-hidden">
             
             {/* Bookmark Button */}
             <button 
               onClick={() => onToggleBookmark(currentQ)}
               className={`absolute top-6 right-6 transition-colors ${isBookmarked ? 'text-yellow-500' : 'text-gray-300 hover:text-yellow-500'}`}
               title={isBookmarked ? "Remove Bookmark" : "Bookmark for review"}
             >
               <BookmarkIcon className={`w-6 h-6 ${isBookmarked ? 'fill-yellow-500' : ''}`} />
             </button>

             <div className="flex-1">
               {/* Question Text */}
               <div className="text-xl font-medium text-gray-900 mb-8 leading-relaxed">
                 {renderRichText(currentQ.question)}
               </div>

               {/* Image/SVG Container */}
               {(currentQ.imageUrl || currentQ.image) && (
                 <div className="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100 flex justify-center">
                    <img src={currentQ.imageUrl || currentQ.image} alt="Question Diagram" className="max-w-full h-auto rounded-lg" />
                 </div>
               )}
               {currentQ.svg && (
                 <div className="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100 flex justify-center">
                    {renderSvgOrImage(currentQ.svg)}
                 </div>
               )}

               {/* Options or Input */}
               <div className="space-y-3">
                 {currentQ.options.length > 0 ? (
                   currentQ.options.map((opt, idx) => {
                     const isSelected = selectedOption === idx;
                     let stateClass = 'border-gray-200 hover:border-purple-300 hover:bg-purple-50';
                     
                     if (isSelected) {
                       stateClass = 'border-purple-600 bg-purple-50 text-purple-900 ring-1 ring-purple-600';
                     }
                     
                     // Practice Mode Feedback
                     let isCorrectOpt = idx === currentQ.correctAnswer;
                     if (!isCorrectOpt && typeof currentQ.correctAnswer === 'string') {
                       const match = currentQ.correctAnswer.trim().match(/^([A-Ea-e])/);
                       if (match) isCorrectOpt = idx === (match[1].toUpperCase().charCodeAt(0) - 65);
                       else isCorrectOpt = idx === Number(currentQ.correctAnswer);
                     }

                     if (isReviewing) {
                       if (isCorrectOpt) stateClass = 'border-green-500 bg-green-50 text-green-900 ring-1 ring-green-500';
                       else if (isSelected && !isCorrectOpt) stateClass = 'border-red-300 bg-red-50 text-red-900 opacity-60';
                       else stateClass = 'border-gray-100 opacity-50';
                     }

                     return (
                       <button
                         key={idx}
                         onClick={() => handleOptionSelect(idx)}
                         disabled={isReviewing}
                         className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center group ${stateClass}`}
                       >
                         <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 text-sm transition-colors ${
                           isSelected || (isReviewing && isCorrectOpt) ? 'bg-white shadow-sm' : 'bg-gray-100 text-gray-500 group-hover:bg-white'
                         }`}>
                           {String.fromCharCode(65 + idx)}
                         </div>
                         <div className="font-medium text-lg">{renderRichText(opt)}</div>
                         
                         {isReviewing && idx === currentQ.correctAnswer && <CheckCircle2 className="ml-auto w-6 h-6 text-green-600" />}
                         {isReviewing && isSelected && idx !== currentQ.correctAnswer && <XCircle className="ml-auto w-6 h-6 text-red-500" />}
                       </button>
                     );
                   })
                 ) : (
                   <div className="space-y-4">
                     <label className="block text-sm font-medium text-gray-700">Your Answer:</label>
                     <input
                       type="text"
                       value={selectedOption ? String(selectedOption) : ''}
                       onChange={(e) => handleAnswer(e.target.value)}
                       disabled={isReviewing}
                       placeholder="Type your answer here..."
                       className={`w-full p-4 rounded-xl border-2 text-lg outline-none transition-all ${
                         isReviewing
                           ? String(selectedOption || '').trim().toLowerCase() === String(currentQ.answerText || '').trim().toLowerCase()
                             ? 'border-green-500 bg-green-50 text-green-900'
                             : 'border-red-300 bg-red-50 text-red-900'
                           : 'border-gray-300 focus:border-purple-600 focus:ring-4 focus:ring-purple-100'
                       }`}
                     />
                     {isReviewing && String(selectedOption || '').trim().toLowerCase() !== String(currentQ.answerText || '').trim().toLowerCase() && (
                       <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 font-medium flex items-center">
                         <CheckCircle2 className="w-5 h-5 mr-2" />
                         Correct Answer: {currentQ.answerText}
                       </div>
                     )}
                   </div>
                 )}
               </div>
             </div>

             {/* Feedback Section (Practice Mode Only) */}
             {isReviewing && (
               <div className={`mt-8 p-6 rounded-2xl border animate-in slide-in-from-bottom-4 ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200'}`}>
                 <div className="flex items-center mb-3">
                   {isCorrect ? (
                     <>
                       <div className="bg-green-100 p-2 rounded-lg mr-3"><Check className="w-5 h-5 text-green-700" /></div>
                       <span className="font-bold text-green-800">{getAffirmation()}</span>
                     </>
                   ) : (
                     <>
                       <div className="bg-blue-100 p-2 rounded-lg mr-3"><ShieldCheck className="w-5 h-5 text-blue-700" /></div>
                       <span className="font-bold text-blue-800">Review & Learn</span>
                     </>
                   )}
                 </div>
                 <div className="text-gray-700 leading-relaxed text-sm ml-12">
                   <div className="font-bold mb-1 opacity-70 uppercase text-xs tracking-wider">Explanation</div>
                   {renderRichText(currentQ.explanation)}
                   {currentQ.explanationSvg && (
                      <div className="mt-4 p-2 bg-white rounded border border-gray-200">
                          {renderSvgOrImage(currentQ.explanationSvg)}
                      </div>
                   )}
                   {currentQ.youtubeLink && (() => {
                      const ytId = extractYouTubeId(currentQ.youtubeLink);
                      return ytId ? (
                        <div className="mt-4 w-full rounded-xl overflow-hidden border border-gray-200">
                          <YouTube 
                            videoId={ytId} 
                            opts={{
                              width: '100%',
                              height: '360',
                              playerVars: {
                                rel: 0,
                                modestbranding: 1
                              }
                            }}
                            onEnd={(e: any) => {
                                e.target.seekTo(0);
                                e.target.stopVideo();
                            }}
                          />
                        </div>
                      ) : (
                        <a href={currentQ.youtubeLink} target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-center p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 hover:bg-red-100 transition-colors font-bold w-full md:w-auto">
                            <Youtube className="w-5 h-5 mr-2" /> Watch Video Explanation
                        </a>
                      );
                   })()}
                 </div>
               </div>
             )}
          </div>

          {/* Feedback & Actions Bar */}
          <div className="mt-8 border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Emotions */}
              <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-gray-400 uppercase mr-2 tracking-wider">How do you feel?</span>
                  {[
                      { id: 'love', emoji: '😍', label: 'Love' },
                      { id: 'like', emoji: '👍', label: 'Like' },
                      { id: 'sad', emoji: '😢', label: 'Sad' },
                      { id: 'hard', emoji: '🤯', label: 'Hard' },
                      { id: 'angry', emoji: '😡', label: 'Angry' },
                  ].map(emotion => {
                      const activeEmotion = localEmotions[currentQ.id];
                      const isActive = activeEmotion === emotion.id;
                      const count = emotionCounts[emotion.id] || 0;
                      return (
                          <div key={emotion.id} className="flex flex-col items-center">
                              <button
                                  onClick={async () => {
                                      const newEmotions = { ...localEmotions, [currentQ.id]: emotion.id };
                                      setLocalEmotions(newEmotions); // instant update
                                      const dbEmotions = { ...(currentUser.questionEmotions || {}), [currentQ.id]: emotion.id };
                                      await authService.updateUser({ ...currentUser, questionEmotions: dbEmotions });
                                  }}
                                  className={`p-2 rounded-xl text-lg transition-all ${isActive ? 'bg-purple-50 ring-2 ring-purple-200 scale-110 grayscale-0 opacity-100' : 'opacity-60 grayscale hover:grayscale-0 hover:bg-gray-100'}`}
                                  title={emotion.label}
                              >
                                  {emotion.emoji}
                              </button>
                              {count > 0 && (
                                  <span className="text-[10px] font-bold text-gray-400 mt-1">{count}</span>
                              )}
                          </div>
                      );
                  })}
              </div>

              {/* Ask Admin */}
              <button
                  onClick={() => {
                      const cleanLatex = (text: string) => {
                          return text
                             .replace(/\\frac{([^}]+)}{([^}]+)}/g, '$1/$2')
                             .replace(/\\sqrt{([^}]+)}/g, '√($1)')
                             .replace(/\\times/g, 'x')
                             .replace(/\\div/g, '/')
                             .replace(/\$/g, '')
                             .replace(/(<([^>]+)>)/ig, '')
                             .replace(/&nbsp;/g, ' ')
                             .trim();
                      };
                      const qText = cleanLatex(currentQ.question).substring(0, 150);
                      const waNum = '201120486569';
                      const activeE = localEmotions[currentQ.id] || 'Need Help';
                      const link = encodeURIComponent(window.location.href);
                      const text = `Hello Sir, I have a question regarding Lesson: *${displayTitle}* (Question ID: ${currentQ.id}).%0A%0A*My Emotion:* ${activeE}%0A*Question Snapshot:* "${qText}..."%0A*Lesson Link:* ${link}%0A%0AMy Message: `;
                      window.open(`https://wa.me/${waNum}?text=${text}`, '_blank');
                  }}
                  className="flex items-center text-sm font-bold text-gray-500 hover:text-[#25D366] bg-gray-50 hover:bg-[#25D366]/10 px-4 py-2 rounded-xl transition-colors"
                  title="Send message to Admin via WhatsApp about this question"
              >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current mr-2" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412 0 12.049c0 2.123.541 4.197 1.57 6.079L0 24l6.15-1.612a11.832 11.832 0 005.9 1.573h.004c6.638 0 12.05-5.414 12.053-12.05a11.825 11.825 0 00-3.414-8.522z"/>
                  </svg>
                  Ask Admin
              </button>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            <button 
              onClick={handlePrev}
              disabled={quiz.currentIndex === 0}
              className="flex items-center px-6 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
            >
              <ChevronLeft className="w-5 h-5 mr-2" /> Previous
            </button>

            {!hasChecked && selectedOption !== null && (
               <button 
                 onClick={checkAnswer}
                 className="flex items-center px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold shadow-lg shadow-purple-200 transition-all transform hover:-translate-y-1"
               >
                 Submit Answer
               </button>
            )}

            {(hasChecked || selectedOption === null) && (
               <button 
                 onClick={handleNext}
                 className="flex items-center px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-bold shadow-lg transition-all transform hover:-translate-y-1"
               >
                 <span>{isLast ? 'Finish Exam' : 'Next Question'}</span>
                 <ArrowRight className="w-5 h-5 ml-2" />
               </button>
            )}
          </div>
        </div>

        {/* Sidebar / Question Map */}
        <div className={`fixed md:static inset-0 z-40 bg-white md:bg-transparent p-6 md:p-0 flex flex-col transition-transform transform md:transform-none ${showMap ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
           <div className="flex items-center justify-between mb-4 md:hidden">
             <h3 className="font-bold text-lg">Question Map</h3>
             <button onClick={() => setShowMap(false)}><X className="w-6 h-6" /></button>
           </div>

           <div className="w-full md:w-64 bg-white rounded-2xl border border-gray-200 shadow-sm h-fit overflow-hidden transition-all">
              <button 
                onClick={() => setIsProgressExpanded(!isProgressExpanded)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
              >
                  <h3 className="font-bold text-gray-400 text-xs uppercase tracking-widest">Progress</h3>
                  {isProgressExpanded ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
              </button>

              {isProgressExpanded && (
                  <div className="px-6 pb-6 animate-in slide-in-from-top-2">
                      <div className="grid grid-cols-5 gap-2">
                        {quiz.questions.map((_, idx) => {
                          const isAnswered = quiz.answers[idx] !== null;
                          const isCurrent = quiz.currentIndex === idx;
                          const isSubmitted = submittedQuestions.has(idx);
                          let bgClass = 'bg-gray-50 text-gray-400 hover:bg-gray-100';
                          
                          // Leave current question purple while answering
                          if (isCurrent) {
                            bgClass = 'bg-purple-600 text-white ring-2 ring-purple-200';
                          } else if (isAnswered) {
                            bgClass = 'bg-blue-100 text-blue-600 font-bold';
                          }

                          // Change the color to green or red ONLY AFTER the student submits the answer
                          if (mode === 'practice' && isSubmitted) {
                            const q = quiz.questions[idx];
                            const ans = quiz.answers[idx];
                            let isRight = false;
                            if (q.options.length > 0) isRight = ans === q.correctAnswer;
                            else isRight = String(ans || '').trim().toLowerCase() === String(q.answerText || '').trim().toLowerCase();
                            
                            if (isCurrent) {
                              bgClass = isRight 
                                ? 'bg-green-600 text-white ring-2 ring-green-200' 
                                : 'bg-red-500 text-white ring-2 ring-red-200';
                            } else {
                              bgClass = isRight 
                                ? 'bg-green-100 text-green-700 font-bold' 
                                : 'bg-red-100 text-red-700 font-bold';
                            }
                          }

                          return (
                            <button
                              key={idx}
                              onClick={() => jumpTo(idx)}
                              className={`h-10 rounded-lg text-sm font-medium transition-all ${bgClass}`}
                            >
                              {idx + 1}
                            </button>
                          );
                        })}
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="flex justify-between text-xs text-gray-500 mb-2">
                            <span>Answered</span>
                            <span className="font-bold">{quiz.answers.filter(a => a !== null).length} / {quiz.questions.length}</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                            <div 
                              className="bg-purple-600 h-full transition-all duration-500" 
                              style={{ width: `${(quiz.answers.filter(a => a !== null).length / quiz.questions.length) * 100}%` }}
                            ></div>
                        </div>
                      </div>
                  </div>
              )}
           </div>
        </div>
      </div>

      {/* Mobile Map Toggle */}
      <button 
        onClick={() => setShowMap(true)}
        className="md:hidden fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-xl z-50"
      >
        <LayoutGrid className="w-6 h-6" />
      </button>
      {renderExportContainer()}
    </div>
  );
};

export default QuizRunner;
