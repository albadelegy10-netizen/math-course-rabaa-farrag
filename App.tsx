
import React, { useState, useEffect, useMemo, Suspense, lazy, ReactNode } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import { View, LessonId, User, Question, CourseCategory, Lesson } from './types';
import { PanelLeft, Menu, ChevronUp, ChevronDown, AlertTriangle, RefreshCcw } from 'lucide-react';
import { authService } from './authService';
import { lessonService } from './lessonService';
import WhatsAppButton from './components/WhatsAppButton';
import NotificationBell from './components/NotificationBell';
import { EST1_REPLACED_IDS } from './src/data/est1_official';



const ProtectedRoute = ({ children, currentUser }: { children: ReactNode, currentUser: User | null }) => {
  if (!currentUser) {
    return <Navigate to="/signin" replace />;
  }
  return <>{children}</>;
};

const lazyWithRetry = <T extends React.ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>
) =>
  lazy(async () => {
    const pageHasBeenRefreshed = sessionStorage.getItem('page_has_been_refreshed') === 'true';
    try {
      const component = await componentImport();
      sessionStorage.setItem('page_has_been_refreshed', 'false');
      return component;
    } catch (error) {
      console.warn('Failed to load dynamic module, retrying or refreshing...', error);
      if (!pageHasBeenRefreshed) {
        sessionStorage.setItem('page_has_been_refreshed', 'true');
        window.location.reload();
        return new Promise<{ default: T }>(() => {});
      }
      throw error;
    }
  });

const LessonContent = lazyWithRetry(() => import('./components/LessonContent'));
const QuizRunner = lazyWithRetry(() => import('./components/QuizRunner'));
const Bookmarks = lazyWithRetry(() => import('./components/Bookmarks'));
const ReviewPlan = lazyWithRetry(() => import('./components/ReviewPlan'));
const AdminReports = lazyWithRetry(() => import('./components/AdminReports')); 
const ParentDashboard = lazyWithRetry(() => import('./components/ParentDashboard'));
const UserManagement = lazyWithRetry(() => import('./components/UserManagement'));
const ExamEditor = lazyWithRetry(() => import('./components/ExamEditor'));
const CoursesHub = lazyWithRetry(() => import('./components/CoursesHub'));
const CourseDetail = lazyWithRetry(() => import('./components/CourseDetail'));
const Payment = lazyWithRetry(() => import('./components/Payment'));
const Attendance = lazyWithRetry(() => import('./components/Attendance'));
const StudentHomework = lazyWithRetry(() => import('./components/StudentHomework'));
const HomeworkManagement = lazyWithRetry(() => import('./components/HomeworkManagement'));
const SmartPractice = lazyWithRetry(() => import('./components/SmartPractice'));
const QuestionBank = lazyWithRetry(() => import('./components/QuestionBank'));
const Analysis = lazyWithRetry(() => import('./components/Analysis'));
const BookGenerator = lazyWithRetry(() => import('./components/BookGenerator'));
const AIGenerator = lazyWithRetry(() => import('./components/AIGenerator'));
const History = lazyWithRetry(() => import('./components/History'));
const Bin = lazyWithRetry(() => import('./components/Bin'));
const Groups = lazyWithRetry(() => import('./components/Groups'));
const Leaderboard = lazyWithRetry(() => import('./components/Leaderboard'));
const PdfExamsPage = lazyWithRetry(() => import('./components/PdfExamsPage'));

const LoadingSpinner = () => (
  <div className="flex h-full w-full items-center justify-center min-h-[60vh]">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-pink-600 border-t-transparent"></div>
  </div>
);

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(_error: any): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("ErrorBoundary caught an error:", error?.message || String(error), "\nStack:", errorInfo?.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-full min-h-[60vh] text-center p-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-500">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Something went wrong</h2>
          <p className="text-gray-500 mb-6 max-w-md">We couldn't load this section. This might be due to a network issue or a missing dependency.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="flex items-center space-x-2 px-6 py-2 bg-pink-600 text-white rounded-lg font-bold hover:bg-pink-700 transition-colors"
          >
            <RefreshCcw className="w-4 h-4" />
            <span>Refresh Page</span>
          </button>
        </div>
      );
    }

    return (this as any).props.children;
  }
}

const CourseDetailWrapper: React.FC<{
  activeCourse: CourseCategory | null;
  setActiveCourse: (c: CourseCategory) => void;
  currentUser: User;
  lessons: Lesson[];
  handleNavigate: (v: View, id?: string) => void;
  navigate: (path: string) => void;
  refreshLessons: () => void;
}> = ({
  activeCourse,
  setActiveCourse,
  currentUser,
  lessons,
  handleNavigate,
  navigate,
  refreshLessons,
}) => {
  const { courseId } = useParams<{ courseId: string }>();
  const validCourses: CourseCategory[] = ['DSAT', 'EST1', 'EST2', 'ACT1', 'ACT2', 'GEOMETRY'];
  const normalized = courseId ? (courseId.toUpperCase() as CourseCategory) : null;
  const currentCategory: CourseCategory = (
    normalized && validCourses.includes(normalized)
      ? normalized
      : (activeCourse || 'EST1')
  );

  useEffect(() => {
    if (currentCategory && currentCategory !== activeCourse) {
      setActiveCourse(currentCategory);
    }
  }, [currentCategory, activeCourse, setActiveCourse]);

  return (
    <CourseDetail 
      course={currentCategory} 
      onBack={() => navigate('/courses')}
      onNavigateLesson={(id) => handleNavigate('lesson', id)}
      currentUser={currentUser}
      onNavigateHome={() => navigate('/')}
      allLessons={lessons}
      onRefreshLessons={refreshLessons}
    />
  );
};

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentUser, setCurrentUser] = useState<User | null>(null);
  
  // Extract view and params from location
  const pathParts = location.pathname.split('/').filter(Boolean);
  const view = (pathParts[0] || 'home') as View;
  
  const [activeLessonId, setActiveLessonId] = useState<LessonId | null>(null);
  const [quizMode, setQuizMode] = useState<'practice' | 'exam' | null>(null);
  // Sidebar starts open on desktop and closed on phones/tablets so it never covers the page on load.
  const [isSidebarOpen, setIsSidebarOpen] = useState(() =>
    typeof window === 'undefined' ? true : window.innerWidth >= 1024
  );
  const [customQuizQuestions, setCustomQuizQuestions] = useState<Question[] | undefined>(undefined);
  const [activeCourse, setActiveCourse] = useState<CourseCategory | null>(null);
  const [isSynced, setIsSynced] = useState(false);
  const [dbStatus, setDbStatus] = useState<'connected' | 'disconnected' | 'checking'>('checking');
  
  // Dynamic Lessons State - loads previously fetched lessons instantly from local cache
  const [lessons, setLessons] = useState<Lesson[]>(() => lessonService.getLoadedLessonsSync());

  // Derive active lesson from the dynamic list
  const activeLesson = useMemo(() => {
    if (!activeLessonId) return lessons[0];
    return lessons.find(l => l.id === activeLessonId) || lessons[0];
  }, [activeLessonId, lessons]);

  // Dynamic SEO Title & Meta Description
  useEffect(() => {
    let title = "Math Course | Eng Rabaa Farrag";
    let description = "The best math prep for EST, SAT, and ACT exams. Personalized learning with Eng Rabaa Farrag.";

    if (view === 'home' || !view) {
      title = "Math Course | Eng Rabaa Farrag - EST 1, EST 2, SAT, DSAT Prep";
    } else if (view === 'courses') {
      title = `Explore Math Courses | ${activeCourse || ''} EST, SAT, ACT`;
    } else if (view === 'lesson' && activeLesson) {
      title = `${activeLesson.title} | Math Lesson | Eng Rabaa Farrag`;
      description = activeLesson.description || description;
    } else if (view === 'quiz' && activeLesson) {
      title = `Practice Quiz: ${activeLesson.title} | Math Exam`;
    } else if (view === 'reports') {
      title = "Performance Reports | Your Math Progress";
    }

    document.title = title;
    // Update meta description if it exists
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [view, activeLesson, activeCourse]);

  // Initial Sync
  useEffect(() => {
    const init = async () => {
        // 1. Load any local data and session into memory immediately
        let user = authService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
        }

        // Test connection in background without blocking local cache UI render
        (async () => {
            try {
                const { doc, getDocFromServer } = await import('firebase/firestore');
                const { db } = await import('./firebase');
                await getDocFromServer(doc(db, 'system', 'connection-test')).catch(() => {});
                setDbStatus('connected');
            } catch (e) {
                setDbStatus('disconnected');
            }
        })();

        // Check for Shared Link
        const params = new URLSearchParams(window.location.search);
        const sharedLessonId = params.get('lessonId');

        if (sharedLessonId) {
            // If no user logged in, create guest
            if (!user) {
                 const guestUser: User = {
                     username: `guest_${Date.now()}`,
                     password: '',
                     role: 'student',
                     progress: {},
                     bookmarks: [],
                     mistakes: [],
                     history: [],
                     name: 'Guest Student',
                     tier: 'free',
                     course: 'DSAT',
                     courses: ['DSAT', 'EST1', 'EST2', 'ACT1', 'ACT2', 'GEOMETRY'],
                     isActive: true,
                     pricePerSession: 0,
                     assignments: [],
                     payments: [],
                     attendance: []
                 };
                 setCurrentUser(guestUser);
                 user = guestUser; // Update local ref
            }
            setActiveLessonId(sharedLessonId);
            navigate(`/lesson/${sharedLessonId}`);
        }
        
        // 2. Define the remote sync operation
        const syncOperation = async () => {
            try {
                // Fetch lessons (merges static + remote)
                const fetchedLessons = await lessonService.getAllLessons();
                setLessons(fetchedLessons);
                
                // Subscribe to real-time changes for lessons
                lessonService.subscribe(async () => {
                   const updatedLessons = await lessonService.getAllLessons();
                   setLessons(updatedLessons);
                });

                // Subscribe to real-time changes for users, students, and groups
                authService.subscribe(() => {
                   const fresh = authService.getCurrentUser();
                   if (fresh && !fresh.username.startsWith('guest_')) {
                       setCurrentUser(fresh);
                   }
                });
                
                // Sync users/groups in real-time
                await authService.syncWithFirebase();
                
                // Refresh current user from updated cache
                if (user && !user.username.startsWith('guest_')) {
                    const freshUser = authService.getCurrentUser();
                    if (freshUser) setCurrentUser(freshUser);
                }
            } catch(e) {
               console.error("Sync error:", e);
            }
        };

        const timeout = new Promise(resolve => setTimeout(resolve, 1000));
        await Promise.race([syncOperation(), timeout]);
        setIsSynced(true);
    };
    init();
  }, []);

  const refreshLessons = async () => {
      const fetched = await lessonService.getAllLessons();
      setLessons(fetched);
  };

  // Sync state with URL manually for top-level access in App.tsx (if needed)
  useEffect(() => {
    const parts = location.pathname.split('/').filter(Boolean);
    // Old EST1 exam links (e.g. from homework) open the verified replacement
    if ((parts[0] === 'lesson' || parts[0] === 'quiz' || parts[0] === 'editor') && parts[1] && EST1_REPLACED_IDS[parts[1]]) {
      navigate(location.pathname.replace(parts[1], EST1_REPLACED_IDS[parts[1]]) + location.search, { replace: true });
      return;
    }
    if (parts[0] === 'lesson' && parts[1]) {
      setActiveLessonId(parts[1]);
    } else if (parts[0] === 'editor' && parts[1]) {
      setActiveLessonId(parts[1]);
    } else if (parts[0] === 'quiz' && parts[1]) {
      setActiveLessonId(parts[1]);
    } else if (parts[0] === 'courses' && parts[1]) {
      setActiveCourse(parts[1] as CourseCategory);
    }
  }, [location.pathname]);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    navigate('/');
  };

  const handleLogout = () => {
    authService.logout();
    setCurrentUser(null);
    navigate('/');
    setActiveLessonId(null);
    setQuizMode(null);
  };

  const handleNavigate = (newView: View, lessonId?: LessonId) => {
    if (currentUser?.role === 'parent' && newView === 'homework') {
        navigate('/homework');
        return;
    }
    
    if (lessonId) {
      setActiveLessonId(lessonId);
      if (newView === 'lesson') {
        navigate(`/lesson/${lessonId}`);
      } else if (newView === 'editor') {
        navigate(`/editor/${lessonId}`);
      } else if (newView === 'quiz') {
        setQuizMode('practice');
        navigate(`/quiz/${lessonId}/practice`);
      } else {
        navigate(`/${newView}`);
      }
    } else {
        navigate(`/${newView === 'home' ? '' : newView}`);
    }

    if (newView !== 'quiz') {
      setCustomQuizQuestions(undefined);
    }
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  const handleSelectCourse = (course: CourseCategory) => {
    setActiveCourse(course);
    if (!currentUser) {
      const guestUser: User = {
        username: `guest_${Date.now()}`,
        password: '',
        role: 'student',
        progress: {},
        bookmarks: [],
        mistakes: [],
        history: [],
        name: 'Guest Student',
        tier: 'free',
        course: course,
        courses: ['DSAT', 'EST1', 'EST2', 'ACT1', 'ACT2', 'GEOMETRY'],
        isActive: true,
        pricePerSession: 0,
        assignments: [],
        payments: [],
        attendance: []
      };
      setCurrentUser(guestUser);
    }
    navigate(`/courses/${course}`);
  };

  const handleStartQuiz = (lessonId: LessonId, mode: 'practice' | 'exam') => {
    setActiveLessonId(lessonId);
    setQuizMode(mode);
    setCustomQuizQuestions(undefined);
    navigate(`/quiz/${lessonId}/${mode}`);
  };

  const handleEditExam = (lessonId: LessonId) => {
    setActiveLessonId(lessonId);
    navigate(`/editor/${lessonId}`);
  };

  const handleStartCustomQuiz = (questions: Question[]) => {
    setCustomQuizQuestions(questions);
    setQuizMode('practice');
    setActiveLessonId(String(questions[0]?.id || 'custom'));
    navigate('/quiz/custom/practice');
  };

  const handleExitQuiz = () => {
    if (customQuizQuestions) {
      navigate('/review');
    } else {
      navigate(`/lesson/${activeLessonId}`);
    }
    setQuizMode(null);
    setCustomQuizQuestions(undefined);
  };

  const handleReviewMistakes = () => {
    navigate('/review');
    setQuizMode(null);
    setCustomQuizQuestions(undefined);
  };

  const handleQuizComplete = (_score: number) => {
    if (currentUser && activeLessonId && !customQuizQuestions) {
      const updatedUser = authService.getCurrentUser();
      if (updatedUser) setCurrentUser(updatedUser);
    }
  };

  const handleToggleBookmark = async (question: Question) => {
    if (currentUser) {
      const topicName = customQuizQuestions 
        ? 'Review' 
        : (activeLesson?.title.split('- ')[1] || 'General');
        
      const lid = activeLessonId || 'sat_ex2';
      const mode = quizMode || 'practice';

      const updatedUser = await authService.toggleBookmark(currentUser.username, lid, topicName, question, mode);
      if (updatedUser) setCurrentUser(updatedUser);
    }
  };

  const handleIncorrectAnswer = async (question: Question) => {
    if (currentUser) {
      const lid = activeLessonId || 'sat_ex2';
      const topicName = activeLesson?.title.split('- ')[1] || 'General';
      const updatedUser = await authService.recordMistake(currentUser.username, lid, topicName, question);
      if (updatedUser) setCurrentUser(updatedUser);
    }
  };

  const handleCorrectAnswer = async (question: Question) => {
    if (currentUser && customQuizQuestions) {
       const updatedUser = await authService.resolveMistake(currentUser.username, question.question);
       if (updatedUser) setCurrentUser(updatedUser);
    }
  };

  const handleUpdateUser = (updatedUser: User) => {
    setCurrentUser(updatedUser);
  };

  const getCourseFromId = (id: string): CourseCategory => {
    // If dynamic lesson has explicit course property, use it
    const l = lessons.find(lx => lx.id === id);
    if (l && l.course) return l.course as CourseCategory;

    if (id.startsWith('sat')) return 'DSAT';
    if (id.startsWith('act1')) return 'ACT1';
    if (id.startsWith('act2')) return 'ACT2';
    if (id.startsWith('est1')) return 'EST1';
    if (id.startsWith('est2')) return 'EST2';
    return 'DSAT';
  };

  // Close the off-canvas menu with Escape, and when the viewport shrinks below desktop width.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && window.innerWidth < 1024) setIsSidebarOpen(false);
    };
    let wasDesktop = window.innerWidth >= 1024;
    const onResize = () => {
      const isDesktop = window.innerWidth >= 1024;
      if (wasDesktop && !isDesktop) setIsSidebarOpen(false);
      wasDesktop = isDesktop;
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const showSidebar = view !== 'quiz' && view !== 'editor';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  if (!isSynced) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f9fafb]">
        <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-pink-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600 font-bold">Connecting to Eng Rabaa Farrag's Server...</p>
        </div>
      </div>
    );
  }



  return (
    <div className="min-h-screen bg-[#f9fafb] flex relative font-sans text-gray-900">
      <div 
        className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-out bg-white shadow-2xl lg:shadow-none ${
          (isSidebarOpen && showSidebar) ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-hidden={!(isSidebarOpen && showSidebar)}
      >
        <Sidebar 
          activeView={view} 
          activeLessonId={activeLessonId} 
          onNavigate={handleNavigate}
          onClose={() => setIsSidebarOpen(false)}
          currentUser={currentUser}
          onLogout={handleLogout}
        />
      </div>

      <main className={`flex-1 min-w-0 transition-[margin] duration-300 min-h-screen w-full ${(isSidebarOpen && showSidebar) ? 'lg:ml-64' : 'ml-0'}`}>
        {/* Mobile / tablet top bar */}
        {showSidebar && (
          <header className="lg:hidden sticky top-0 z-30 flex items-center justify-between gap-3 px-4 h-16 bg-white/95 border-b border-gray-200/70 shadow-sm shadow-gray-100">
            <div className="flex items-center gap-3 min-w-0">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 -ml-1 rounded-xl text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/60"
                aria-label="Open Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
              <button onClick={() => handleNavigate('home')} className="text-left min-w-0" aria-label="Go to Home">
                <span className="block text-lg font-black text-gray-900 leading-none tracking-tight">Achieve 700+</span>
                <span className="block text-[11px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-600 mt-0.5 truncate">with Eng Rabaa Farrag</span>
              </button>
            </div>
            <NotificationBell />
          </header>
        )}

        {/* Desktop: floating notification bell (in-flow header handles mobile) */}
        <div className={`fixed top-6 right-6 z-30 ${showSidebar ? 'hidden lg:block' : ''}`}>
          <NotificationBell />
        </div>
        {!isSidebarOpen && showSidebar && (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="hidden lg:flex fixed top-6 left-6 z-30 p-3 bg-white rounded-xl shadow-lg border border-pink-100 text-pink-600 hover:text-pink-700 hover:scale-105 transition-all"
            aria-label="Open Menu"
          >
            <PanelLeft className="w-6 h-6" />
          </button>
        )}

        <div className="px-0 py-2 sm:px-2 md:px-4 md:py-4 max-w-[1600px] mx-auto">
          {dbStatus === 'disconnected' && (
            <div className="mx-4 sm:mx-0 mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl flex items-center text-sm font-medium animate-pulse">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Working Offline: Changes might not be saved to the database. Please check your internet connection.
            </div>
          )}
          
          <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                    <Home onNavigate={handleNavigate} onSelectCourse={handleSelectCourse} currentUser={currentUser} lessons={lessons} />
                  </motion.div>
                } />

                <Route path="/leaderboard" element={
                  currentUser && (currentUser.role === 'admin' || currentUser.role === 'co-admin' || currentUser.tier === 'premium') ? (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                      <Leaderboard 
                        currentUser={currentUser} 
                        lessons={lessons} 
                        onNavigate={handleNavigate} 
                        isEmbedded={false} 
                      />
                    </motion.div>
                  ) : (
                    <Navigate to="/" replace />
                  )
                } />

                <Route path="/pdf-exams" element={
                  currentUser && (currentUser.role === 'admin' || currentUser.role === 'co-admin' || currentUser.tier === 'premium') ? (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                      <PdfExamsPage 
                        allLessons={lessons} 
                        onNavigate={handleNavigate} 
                      />
                    </motion.div>
                  ) : (
                    <Navigate to="/" replace />
                  )
                } />

                <Route path="/signin" element={
                  currentUser ? <Navigate to="/" replace /> : <SignIn onLogin={handleLogin} />
                } />
                
                <Route path="/courses" element={
                  <ProtectedRoute currentUser={currentUser}>
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                      <CoursesHub 
                        onSelectCourse={handleSelectCourse} 
                        currentUser={currentUser!}
                        onNavigate={handleNavigate} 
                      />
                    </motion.div>
                  </ProtectedRoute>
                } />

                <Route path="/courses/:courseId" element={
                  <ProtectedRoute currentUser={currentUser}>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                      <CourseDetailWrapper
                        activeCourse={activeCourse}
                        setActiveCourse={setActiveCourse}
                        currentUser={currentUser!}
                        lessons={lessons}
                        handleNavigate={handleNavigate}
                        navigate={navigate}
                        refreshLessons={refreshLessons}
                      />
                    </motion.div>
                  </ProtectedRoute>
                } />

                <Route path="/payment" element={
                  currentUser && (currentUser.role === 'admin' || currentUser.role === 'co-admin') ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Payment currentUser={currentUser!} />
                    </motion.div>
                  ) : (
                    <Navigate to="/" replace />
                  )
                } />
                
                <Route path="/homework" element={
                  <ProtectedRoute currentUser={currentUser}>
                    {currentUser && (currentUser.role === 'admin' || currentUser.role === 'co-admin' || currentUser.tier === 'premium') ? (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        {(currentUser.role === 'admin' || currentUser.role === 'co-admin') ? (
                          <HomeworkManagement lessons={lessons} />
                        ) : (
                          <StudentHomework 
                            currentUser={currentUser} 
                            onStartAssignment={(id) => handleNavigate('lesson', id)}
                            allLessons={lessons}
                          />
                        )}
                      </motion.div>
                    ) : (
                      <Navigate to="/" replace />
                    )}
                  </ProtectedRoute>
                } />
                
                <Route path="/attendance" element={
                  currentUser && (currentUser.role === 'admin' || currentUser.role === 'co-admin') ? (
                    <Attendance currentUser={currentUser!} />
                  ) : (
                    <Navigate to="/" replace />
                  )
                } />

                <Route path="/bookmarks" element={
                  <ProtectedRoute currentUser={currentUser}>
                    {currentUser && (currentUser.role === 'admin' || currentUser.role === 'co-admin' || currentUser.tier === 'premium') ? (
                      <Bookmarks currentUser={currentUser!} onUpdateUser={handleUpdateUser} onNavigate={handleNavigate} />
                    ) : (
                      <Navigate to="/" replace />
                    )}
                  </ProtectedRoute>
                } />

                <Route path="/history" element={
                  currentUser && (currentUser.role === 'admin' || currentUser.role === 'co-admin') ? (
                    <History user={currentUser!} lessons={lessons} />
                  ) : (
                    <Navigate to="/" replace />
                  )
                } />

                <Route path="/reports" element={
                  currentUser && (currentUser.role === 'admin' || currentUser.role === 'co-admin') ? (
                    <AdminReports lessons={lessons} />
                  ) : (
                    <Navigate to="/" replace />
                  )
                } />

                <Route path="/review" element={
                  <ProtectedRoute currentUser={currentUser}>
                    {currentUser && (currentUser.role === 'admin' || currentUser.role === 'co-admin' || currentUser.tier === 'premium') ? (
                      <ReviewPlan currentUser={currentUser!} onStartCorrectionQuiz={handleStartCustomQuiz} onNavigate={handleNavigate} />
                    ) : (
                      <Navigate to="/" replace />
                    )}
                  </ProtectedRoute>
                } />

                <Route path="/smart-practice" element={
                  <ProtectedRoute currentUser={currentUser}>
                    <SmartPractice onStartQuiz={handleStartCustomQuiz} onNavigate={handleNavigate} />
                  </ProtectedRoute>
                } />
                
                <Route path="/parent-dashboard" element={
                  <ProtectedRoute currentUser={currentUser}>
                    <ParentDashboard currentUser={currentUser!} />
                  </ProtectedRoute>
                } />

                <Route path="/users" element={
                  <ProtectedRoute currentUser={currentUser}>
                    <UserManagement />
                  </ProtectedRoute>
                } />
                <Route path="/groups" element={
                  <ProtectedRoute currentUser={currentUser}>
                    <Groups />
                  </ProtectedRoute>
                } />
                <Route path="/question-bank" element={
                  <ProtectedRoute currentUser={currentUser}>
                    <QuestionBank />
                  </ProtectedRoute>
                } />
                <Route path="/analysis" element={
                  <ProtectedRoute currentUser={currentUser}>
                    <Analysis />
                  </ProtectedRoute>
                } />
                <Route path="/book-generator" element={
                  <ProtectedRoute currentUser={currentUser}>
                    <BookGenerator />
                  </ProtectedRoute>
                } />
                <Route path="/ai-generator" element={
                  <ProtectedRoute currentUser={currentUser}>
                    {currentUser && (currentUser.role === 'admin' || currentUser.role === 'co-admin') ? (
                      <AIGenerator />
                    ) : (
                      <Navigate to="/" />
                    )}
                  </ProtectedRoute>
                } />
                <Route path="/bin" element={
                  <ProtectedRoute currentUser={currentUser}>
                    <Bin 
                      currentUser={currentUser!} 
                      onNavigateLesson={(id) => handleNavigate('lesson', id)}
                      onRefreshLessons={refreshLessons}
                      onNavigateEditor={(id) => handleNavigate('editor', id)}
                    />
                  </ProtectedRoute>
                } />

                <Route path="/lesson/:lessonId" element={
                  <ProtectedRoute currentUser={currentUser}>
                    {activeLessonId ? (
                      <LessonContent 
                        lesson={activeLesson} 
                        isSynced={isSynced}
                        onStartQuiz={handleStartQuiz} 
                        onEditExam={handleEditExam}
                        currentUser={currentUser!}
                        courseCategory={activeCourse || getCourseFromId(activeLessonId)}
                        onBackToCourse={() => {
                            const c = activeCourse || getCourseFromId(activeLessonId);
                            navigate(`/courses/${c}`);
                        }}
                        onNavigateHome={() => navigate('/')}
                        onDeleteLesson={async (id) => {
                            await lessonService.deleteLesson(id);
                            refreshLessons();
                            const c = activeCourse || getCourseFromId(id);
                            navigate(`/courses/${c}`);
                        }}
                      />
                    ) : <Navigate to="/" />}
                  </ProtectedRoute>
                } />

                <Route path="/editor/:lessonId" element={
                  <ProtectedRoute currentUser={currentUser}>
                    {activeLessonId && (currentUser?.role === 'admin' || currentUser?.role === 'co-admin') ? (
                      <ExamEditor 
                        lessonId={activeLessonId}
                        lessonTitle={activeLesson.title}
                        isSynced={isSynced}
                        onExit={async () => {
                            await refreshLessons();
                            handleNavigate('lesson', activeLessonId);
                        }}
                        courseCategory={activeCourse || getCourseFromId(activeLessonId)}
                        onNavigateHome={() => navigate('/')}
                        onNavigateToCourse={() => {
                            const c = activeCourse || getCourseFromId(activeLessonId);
                            navigate(`/courses/${c}`);
                        }}
                        onNavigateToLesson={() => handleNavigate('lesson', activeLessonId)}
                        onDeleteLesson={async () => {
                            if (activeLessonId) {
                                if (window.confirm("Are you sure you want to move this to the Bin?")) {
                                    await lessonService.deleteLesson(activeLessonId);
                                    await refreshLessons();
                                    const c = activeCourse || getCourseFromId(activeLessonId);
                                    navigate(`/courses/${c}`);
                                }
                            }
                        }}
                      />
                    ) : <Navigate to="/" />}
                  </ProtectedRoute>
                } />

                <Route path="/quiz/:lessonId/:mode" element={
                  <ProtectedRoute currentUser={currentUser}>
                    {activeLessonId && quizMode ? (
                      <QuizRunner 
                        lessonId={customQuizQuestions ? 'review' : activeLessonId}
                        topicName={customQuizQuestions ? 'Review Session' : activeLesson.title.split('- ')[1]}
                        mode={quizMode}
                        isSynced={isSynced}
                        onExit={handleExitQuiz}
                        onComplete={handleQuizComplete}
                        currentUser={currentUser!}
                        onToggleBookmark={handleToggleBookmark}
                        onIncorrectAnswer={handleIncorrectAnswer}
                        onCorrectAnswer={handleCorrectAnswer}
                        onReviewMistakes={handleReviewMistakes}
                        customQuestions={customQuizQuestions}
                        courseCategory={activeCourse || getCourseFromId(activeLessonId)}
                        lessons={lessons}
                        onNavigateHome={() => {
                            navigate('/');
                            setQuizMode(null);
                        }}
                        onNavigateToCourse={() => {
                            const c = activeCourse || getCourseFromId(activeLessonId);
                            navigate(`/courses/${c}`);
                            setQuizMode(null);
                        }}
                        onNavigateToLesson={() => {
                            if (activeLessonId) {
                                navigate(`/lesson/${activeLessonId}`);
                                setQuizMode(null);
                            }
                        }}
                      />
                    ) : (
                       // Fallback check: if params exist but state is null, we rely on useEffect sync or just state
                       <Navigate to="/" />
                    )}
                  </ProtectedRoute>
                } />
                
                {/* Support generic mode-less quiz path */}
                <Route path="/quiz/:lessonId" element={<Navigate to="/" replace />} />

                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </ErrorBoundary>
        </div>
        
        {/* WhatsApp Contact Button */}
        <WhatsAppButton />
      </main>
      
      {/* Scroll helpers sit above the WhatsApp button so they never overlap it */}
      <div className="hidden sm:flex fixed bottom-28 right-7 z-40 flex-col gap-2">
        <button 
          onClick={scrollToTop}
          className="p-2.5 bg-white/90 backdrop-blur-sm border border-pink-200 text-pink-600 rounded-full shadow-lg hover:bg-pink-600 hover:text-white transition-all duration-200 hover:scale-110"
          title="Scroll to Top"
          aria-label="Scroll to Top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
        <button 
          onClick={scrollToBottom}
          className="p-2.5 bg-white/90 backdrop-blur-sm border border-pink-200 text-pink-600 rounded-full shadow-lg hover:bg-pink-600 hover:text-white transition-all duration-200 hover:scale-110"
          title="Scroll to Bottom"
          aria-label="Scroll to Bottom"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {isSidebarOpen && showSidebar && (
        <div 
          className="lg:hidden fixed inset-0 bg-gray-900/30 z-40 backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
