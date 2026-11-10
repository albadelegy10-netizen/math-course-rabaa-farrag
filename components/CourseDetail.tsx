
import React, { useMemo, useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { CourseCategory, LessonId, User, Lesson } from '../types';
import { FileText, Home, ChevronRight, Plus, Trash2, X, BookOpen, Layers, Copy, GripVertical, Lock, Video, PieChart } from 'lucide-react';
import { authService } from '../authService';
import { lessonService } from '../lessonService';
import { ExamTopicAnalysisModal } from './ExamTopicAnalysisModal';

interface CourseDetailProps {
  course: CourseCategory;
  onBack: () => void;
  onNavigateLesson: (lessonId: LessonId) => void;
  currentUser: User;
  onNavigateHome?: () => void;
  allLessons: Lesson[];
  onRefreshLessons: () => void;
}

interface SortableLessonCardProps {
  lesson: Lesson;
  idx: number;
  activeTab: 'lessons' | 'exams';
  isAdmin: boolean;
  isLocked?: boolean;
  onNavigateLesson: (id: string, isLocked?: boolean) => void;
  openCopyModal: (lesson: Lesson, e: React.MouseEvent) => void;
  handleDeleteLesson: (id: string, e: React.MouseEvent) => void;
  onViewAnalysis?: (lesson: Lesson, e: React.MouseEvent) => void;
}

const SortableLessonCard: React.FC<SortableLessonCardProps> = ({
  lesson,
  idx,
  activeTab,
  isAdmin,
  isLocked,
  onNavigateLesson,
  openCopyModal,
  handleDeleteLesson,
  onViewAnalysis,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: lesson.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 1,
    opacity: isDragging ? 0.8 : 1,
    boxShadow: isDragging ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl hover:shadow-md hover:border-purple-300 transition-all group ${isDragging ? 'border-purple-500 ring-2 ring-purple-200' : ''}`}
    >
      <div 
          className="flex items-center space-x-4 flex-1 min-w-0 cursor-pointer"
          onClick={() => onNavigateLesson(lesson.id, isLocked)} 
      >
          <div className={`w-10 h-10 flex-shrink-0 ${isLocked ? 'bg-gray-50' : 'bg-gray-100'} rounded-full flex items-center justify-center font-bold ${isLocked ? 'text-gray-300' : 'text-gray-500 group-hover:bg-purple-100 group-hover:text-purple-600'} transition-colors`}>
          {isLocked ? <Lock className="w-4 h-4" /> : idx + 1}
          </div>
          <div className={`min-w-0 ${isLocked ? 'opacity-50' : ''}`}>
          <h3 className={`font-bold ${isLocked ? 'text-gray-500' : 'text-gray-800 group-hover:text-purple-700'} transition-colors break-words`}>
              {lesson.title}
          </h3>
          <p className="text-xs text-gray-400">{lesson.description || (activeTab === 'lessons' ? 'Practice Lesson' : 'Full Practice Exam')}</p>
          </div>
      </div>
      
      <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3 sm:flex-shrink-0">
          {(activeTab === 'exams' || lesson.type === 'exam') && onViewAnalysis && (
            <button
              onClick={(e) => onViewAnalysis(lesson, e)}
              className="px-3 py-1.5 bg-purple-100 hover:bg-purple-200 text-purple-700 text-xs font-bold rounded-full transition-colors flex items-center gap-1"
              title="View Topic Analysis for this exam"
            >
              <PieChart className="w-3.5 h-3.5" />
              <span>Topics Analysis</span>
            </button>
          )}
          {lesson.recordLink && (
            <a 
              href={lesson.recordLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 text-xs font-bold rounded-full transition-colors flex items-center gap-1.5 border border-red-200"
              title="Watch Recorded Session"
            >
              <Video className="w-3.5 h-3.5 text-red-600" />
              <span>Record</span>
            </a>
          )}
          <button 
              onClick={() => onNavigateLesson(lesson.id, isLocked)} 
              className={`px-4 py-2 ${isLocked ? 'bg-amber-50 text-amber-600 hover:bg-amber-100' : 'bg-gray-100 text-gray-600 hover:bg-purple-50 hover:text-purple-600'} text-xs font-bold rounded-full transition-colors`}
          >
              {isLocked ? 'Locked' : 'Open'}
          </button>
          {isAdmin && (
              <>
                  <button 
                      onClick={(e) => openCopyModal(lesson, e)}
                      className="p-2 text-gray-300 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                      title="Copy Content"
                  >
                      <Copy className="w-4 h-4" />
                  </button>
                  <button 
                      onClick={(e) => handleDeleteLesson(lesson.id, e)}
                      className="p-2 text-gray-300 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                      title="Delete Content"
                  >
                      <Trash2 className="w-4 h-4" />
                  </button>
                  <div 
                      {...attributes}
                      {...listeners}
                      className="p-2 text-gray-300 hover:text-gray-600 hover:bg-gray-100 rounded-full cursor-grab active:cursor-grabbing transition-colors touch-none"
                      title="Drag to reorder"
                  >
                      <GripVertical className="w-4 h-4" />
                  </div>
              </>
          )}
      </div>
    </div>
  );
};

const CourseDetail: React.FC<CourseDetailProps> = ({ 
  course, 
  onBack, 
  onNavigateLesson, 
  currentUser, 
  onNavigateHome, 
  allLessons,
  onRefreshLessons
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newType, setNewType] = useState<'lesson' | 'exam'>('exam');
  const getInitialTab = (): 'lessons' | 'exams' => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get('tab');
      if (tab === 'exams' || tab === 'lessons') return tab;
    }
    return 'lessons';
  };
  const [activeTab, setActiveTab] = useState<'lessons' | 'exams'>(getInitialTab);

  const handleTabChange = (tab: 'lessons' | 'exams') => {
    setActiveTab(tab);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('tab', tab);
      window.history.replaceState({}, '', url.toString());
    }
  };
  
  // Copy Modal State
  const [copyModalOpen, setCopyModalOpen] = useState(false);
  const [lessonToCopy, setLessonToCopy] = useState<Lesson | null>(null);
  const [targetCourse, setTargetCourse] = useState<CourseCategory>(course);
  const [copyTitle, setCopyTitle] = useState('');
  
  const [lockedModalOpen, setLockedModalOpen] = useState(false);
  const [selectedExamAnalysis, setSelectedExamAnalysis] = useState<{ title: string; lessonId?: string } | null>(null);

  const isAdmin = currentUser.role === 'admin' || currentUser.role === 'co-admin';

  // 1. Filter Lessons based on Course
  const courseLessons = useMemo(() => {
    // A lesson belongs to this course if:
    // a) It has explicit `course` property matching current course
    // b) Or it falls under legacy naming convention (e.g. sat_ex for DSAT)
    return allLessons.filter(l => {
        if (l.course) return l.course.toUpperCase() === course.toUpperCase();
        
        // Legacy fallback
        if (course === 'DSAT' && l.id.startsWith('sat_')) return true;
        if (course === 'EST1' && (l.id.startsWith('est1_') || l.id === 'est1_inequality')) return true;
        if (course === 'EST2' && l.id.startsWith('est2_')) return true;
        if (course === 'ACT1' && l.id.startsWith('act1_')) return true;
        if (course === 'ACT2' && l.id.startsWith('act2_')) return true;
        if (course === 'GEOMETRY' && (l.id.startsWith('geo_') || l.id.startsWith('geometry_'))) return true;
        return false;
    });
  }, [allLessons, course]);

  // 2. Compute Allowed Lesson IDs (based on assignments and free homework)
  const allowedLessonIds = useMemo(() => {
    let ids: string[] = [];

    if (currentUser.role === 'student') {
       const userIds = currentUser.assignments?.map(a => a.lessonId).filter((id): id is string => id !== undefined) || [];
       const freeIds = authService.getFreeHomework().map(a => a.lessonId).filter((id): id is string => id !== undefined) || [];
       ids = [...userIds, ...freeIds];
    } else if (currentUser.role === 'parent' && currentUser.children) {
       const allUsers = authService.getAllUsers();
       const myChildren = allUsers.filter(u => currentUser.children?.includes(u.username));
       const allChildAssignments = myChildren.flatMap(c => {
           const childIds = c.assignments?.map(a => a.lessonId).filter((id): id is string => id !== undefined) || [];
           const freeIds = authService.getFreeHomework().map(a => a.lessonId).filter((id): id is string => id !== undefined) || [];
           return [...childIds, ...freeIds];
       });
       ids = [...new Set(allChildAssignments)];
    }

    return ids;
  }, [currentUser]);

  // 3. For students/parents, visible lessons is simply courseLessons 
  const visibleLessons = courseLessons;

  const handleNavigateLesson = (id: string, isLocked?: boolean) => {
      if (isLocked) {
          setLockedModalOpen(true);
      } else {
          onNavigateLesson(id);
      }
  };

  // 3. Filter by Tab (Lessons vs Exams)
  const { displayedContent, counts } = useMemo(() => {
      // Deduplicate by id so SortableContext and child items never have duplicate keys
      const seenIds = new Set<string>();
      const uniqueVisible = visibleLessons.filter(l => {
          if (!l || !l.id || seenIds.has(l.id)) return false;
          seenIds.add(l.id);
          return true;
      });

      const lessons = uniqueVisible.filter(l => {
          if (l.type) return l.type === 'lesson';
          const isExam = (l.title || '').toLowerCase().includes('exam') || l.id.includes('ex');
          return !isExam;
      }).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

      const exams = uniqueVisible.filter(l => {
          if (l.type) return l.type === 'exam';
          const isExam = (l.title || '').toLowerCase().includes('exam') || l.id.includes('ex');
          return isExam;
      }).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

      return {
          displayedContent: activeTab === 'lessons' ? lessons : exams,
          counts: { lessons: lessons.length, exams: exams.length }
      };
  }, [visibleLessons, activeTab]);

  const [localContent, setLocalContent] = useState<Lesson[]>([]);

  React.useEffect(() => {
    setLocalContent(displayedContent);
  }, [displayedContent]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = localContent.findIndex((l) => l.id === active.id);
      const newIndex = localContent.findIndex((l) => l.id === over.id);
      
      const newOrder = arrayMove(localContent, oldIndex, newIndex);
      setLocalContent(newOrder); // Optimistic update
      
      // Update order property for all affected items
      const savePromises = [];
      for (let i = 0; i < newOrder.length; i++) {
        const lesson = newOrder[i];
        if (lesson.order !== i) {
          lesson.order = i;
          savePromises.push(lessonService.saveLesson(lesson));
        }
      }
      
      await Promise.all(savePromises);
      onRefreshLessons();
    }
  };

  const openCopyModal = (lesson: Lesson, e: React.MouseEvent) => {
      e.stopPropagation();
      setLessonToCopy(lesson);
      setTargetCourse(lesson.course as CourseCategory || course);
      setCopyTitle(`${lesson.title} (Copy)`);
      setCopyModalOpen(true);
  };

  const performCopy = async () => {
      if (!lessonToCopy || !copyTitle) return;
      
      const newId = `${targetCourse.toLowerCase()}_custom_${Date.now()}`;
      
      // Fetch source questions
      const sourceQuestions = await lessonService.getQuestions(lessonToCopy.id);
      
      const newLesson: Lesson = {
          ...lessonToCopy,
          id: newId,
          title: copyTitle,
          course: targetCourse,
          // Ensure we don't carry over ID-specific things if any
      };

      // Create lesson metadata
      await lessonService.createLesson(newLesson);
      
      // Copy questions
      if (sourceQuestions && sourceQuestions.length > 0) {
          await lessonService.saveQuestions(newId, sourceQuestions);
      }
      
      onRefreshLessons();
      setCopyModalOpen(false);
      setLessonToCopy(null);
  };

  const handleCreateLesson = async () => {
      if (!newTitle) return;
      const cleanTitle = newTitle.replace(/[^a-zA-Z0-9 ]/g, '');
      const id = `${course.toLowerCase()}_custom_${Date.now()}`;
      
      const newLesson: Lesson = {
          id,
          title: `(${allLessons.length + 1}-${cleanTitle})`,
          description: newType === 'exam' ? 'Custom Exam' : 'Custom Lesson',
          icon: 'FileText',
          studyNotes: `**${cleanTitle}**\n\nContent pending...`,
          course: course,
          type: newType,
          order: newType === 'lesson' ? counts.lessons : counts.exams
      };

      await lessonService.createLesson(newLesson);
      onRefreshLessons();
      handleTabChange(newType === 'lesson' ? 'lessons' : 'exams');
      setIsAdding(false);
      setNewTitle('');
  };

  const handleDeleteLesson = async (id: string, event: React.MouseEvent) => {
      event.stopPropagation(); // Prevent opening lesson when clicking delete
      if (window.confirm("Are you sure you want to move this content to the Bin? You can restore it later from the Bin section.")) {
          await lessonService.deleteLesson(id);
          onRefreshLessons();
      }
  };

  const getColor = () => {
    switch(course) {
      case 'DSAT': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'EST1': return 'text-purple-600 bg-purple-50 border-purple-200';
      case 'EST2': return 'text-indigo-600 bg-indigo-50 border-indigo-200';
      case 'ACT1': return 'text-emerald-600 bg-emerald-50 border-emerald-200';
      case 'ACT2': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'GEOMETRY': return 'text-pink-600 bg-pink-50 border-pink-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const themeClass = getColor();

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center text-sm font-medium text-gray-500 mb-8 overflow-x-auto whitespace-nowrap pb-2 no-scrollbar">
         <button 
           onClick={onNavigateHome} 
           className="hover:text-purple-600 transition-colors flex items-center p-1 rounded-md hover:bg-purple-50"
           title="Go Home"
         >
           <Home className="w-4 h-4" />
         </button>
         
         <ChevronRight className="w-4 h-4 mx-2 text-gray-300 flex-shrink-0" />
         <button 
           onClick={onBack} 
           className="hover:text-purple-600 transition-colors hover:underline decoration-2 underline-offset-4"
         >
           Courses
         </button>

         <ChevronRight className="w-4 h-4 mx-2 text-gray-300 flex-shrink-0" />
         <span className="font-bold text-purple-900 bg-purple-50 px-3 py-1 rounded-full border border-purple-100 flex items-center">
            {course} Content
         </span>
      </nav>

      <div className={`rounded-3xl p-6 sm:p-10 border mb-8 flex flex-col sm:flex-row gap-5 justify-between sm:items-center ${themeClass}`}>
        <div>
            <h1 className="text-3xl sm:text-4xl font-black mb-2">{course} COURSE</h1>
            <p className="opacity-80 font-medium text-base sm:text-lg">Comprehensive curriculum including lessons and full-length exams.</p>
        </div>
        {isAdmin && (
            <button 
                onClick={() => { setIsAdding(true); setNewType(activeTab === 'lessons' ? 'lesson' : 'exam'); }}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-current border border-current px-5 py-3 rounded-xl font-bold flex items-center justify-center whitespace-nowrap flex-shrink-0 self-start sm:self-auto transition-all"
            >
                <Plus className="w-5 h-5 mr-2" />
                Add New
            </button>
        )}
      </div>

      {isAdding && (
          <div className="mb-8 bg-white p-6 rounded-2xl border border-gray-200 shadow-lg animate-in slide-in-from-top-4">
              <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-900">Create New Content</h3>
                  <button onClick={() => setIsAdding(false)}><X className="w-5 h-5 text-gray-400" /></button>
              </div>
              <div className="flex gap-4">
                  <input 
                    type="text" 
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Enter Title (e.g. Algebra Review)"
                    className="flex-1 p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <select 
                    value={newType} 
                    onChange={(e) => setNewType(e.target.value as any)}
                    className="p-3 border border-gray-200 rounded-xl bg-white outline-none"
                  >
                      <option value="lesson">Lesson</option>
                      <option value="exam">Exam</option>
                  </select>
                  <button 
                    onClick={handleCreateLesson}
                    disabled={!newTitle}
                    className="bg-purple-600 text-white px-6 rounded-xl font-bold hover:bg-purple-700 disabled:opacity-50"
                  >
                      Create
                  </button>
              </div>
          </div>
      )}

      {/* Tabs */}
      <div className="flex space-x-4 mb-8 border-b border-gray-200">
          <button 
            onClick={() => handleTabChange('lessons')}
            className={`pb-4 px-2 text-sm font-bold flex items-center transition-all relative ${
                activeTab === 'lessons' 
                ? 'text-purple-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Course Lessons ({counts.lessons})
            {activeTab === 'lessons' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 rounded-t-full"></div>}
          </button>
          <button 
            onClick={() => handleTabChange('exams')}
            className={`pb-4 px-2 text-sm font-bold flex items-center transition-all relative ${
                activeTab === 'exams' 
                ? 'text-purple-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Layers className="w-4 h-4 mr-2" />
            Full Exams ({counts.exams})
            {activeTab === 'exams' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 rounded-t-full"></div>}
          </button>
      </div>

      <div className="flex flex-col gap-4">
        {localContent.length > 0 ? (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={localContent.map(l => l.id)}
              strategy={verticalListSortingStrategy}
            >
              {localContent.map((lesson, idx) => {
                const isInactive = currentUser.isActive === false;
                const isLocked = !isAdmin && ((isInactive || currentUser.tier !== 'premium') && !allowedLessonIds.includes(lesson.id));
                return (
                  <SortableLessonCard
                    key={lesson.id}
                    lesson={lesson}
                    idx={idx}
                    activeTab={activeTab}
                    isAdmin={isAdmin}
                    isLocked={isLocked}
                    onNavigateLesson={handleNavigateLesson}
                    openCopyModal={openCopyModal}
                    handleDeleteLesson={handleDeleteLesson}
                    onViewAnalysis={(l, e) => {
                      e.stopPropagation();
                      setSelectedExamAnalysis({ title: l.title, lessonId: l.id });
                    }}
                  />
                );
              })}
            </SortableContext>
          </DndContext>
        ) : (
            <div className="text-center p-12 bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl">
                <FileText className="w-12 h-12 mx-auto text-gray-300 mb-3" />
                <p className="text-gray-400 font-bold">No {activeTab === 'lessons' ? 'lessons' : 'exams'} available yet.</p>
                {isAdmin && <p className="text-xs text-gray-400 mt-1">Click "Add New" to get started.</p>}
                {!isAdmin && <p className="text-xs text-gray-400 mt-1">Assignments will appear here when assigned.</p>}
            </div>
        )}
      </div>

      {/* Copy Modal */}
      {copyModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                    <h3 className="font-bold text-lg text-gray-900">Copy Content</h3>
                    <button onClick={() => setCopyModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                        <X className="w-5 h-5" />
                    </button>
                </div>
                
                <div className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">New Title</label>
                        <input 
                            type="text" 
                            value={copyTitle}
                            onChange={(e) => setCopyTitle(e.target.value)}
                            className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Target Course</label>
                        <select 
                            value={targetCourse}
                            onChange={(e) => setTargetCourse(e.target.value as CourseCategory)}
                            className="w-full p-3 border border-gray-200 rounded-xl bg-white outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="DSAT">DSAT</option>
                            <option value="EST1">EST1</option>
                            <option value="EST2">EST2</option>
                            <option value="ACT1">ACT1</option>
                            <option value="ACT2">ACT2</option>
                            <option value="GEOMETRY">GEOMETRY</option>
                        </select>
                    </div>

                    <div className="bg-blue-50 text-blue-800 p-3 rounded-lg text-sm flex items-start">
                        <Copy className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                        <p>This will create a duplicate of <strong>{lessonToCopy?.title}</strong> including all its questions.</p>
                    </div>
                </div>

                <div className="p-6 bg-gray-50 flex justify-end space-x-3">
                    <button 
                        onClick={() => setCopyModalOpen(false)}
                        className="px-4 py-2 text-gray-600 font-medium hover:bg-gray-200 rounded-lg transition-colors"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={performCopy}
                        disabled={!copyTitle}
                        className="px-6 py-2 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 shadow-lg shadow-purple-200"
                    >
                        Copy Content
                    </button>
                </div>
            </div>
        </div>
      )}

      {/* Locked Content Modal */}
      {lockedModalOpen && (
          <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200 border border-gray-100">
                <div className="p-8 pb-6 text-center relative">
                    <button 
                        onClick={() => setLockedModalOpen(false)} 
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-200 transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                    
                    <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
                        <Lock className="w-10 h-10 text-amber-500 flex-shrink-0" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">Content Locked</h3>
                    <p className="text-gray-500 mb-6 text-sm px-4">
                        This lesson or exam is restricted to premium accounts. Join the full course today to unlock all materials, interactive lessons, and practice exams!
                    </p>
                    
                    <button
                        onClick={() => window.open('https://wa.me/201120486569', '_blank')}
                        className="w-full py-4 bg-[#25D366] text-white font-bold rounded-2xl hover:bg-[#20ba59] transition-all duration-300 transform active:scale-95 shadow-lg shadow-green-200 text-lg flex justify-center items-center"
                    >
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412 0 12.049c0 2.123.541 4.197 1.57 6.079L0 24l6.15-1.612a11.832 11.832 0 005.9 1.573h.004c6.638 0 12.05-5.414 12.053-12.05a11.825 11.825 0 00-3.414-8.522z"/>
                        </svg>
                        Upgrade via WhatsApp
                    </button>
                </div>
                <div className="bg-gray-50 border-t border-gray-100 p-4 text-center">
                    <button 
                        onClick={() => setLockedModalOpen(false)}
                        className="text-gray-500 font-medium hover:text-gray-800 text-sm"
                    >
                        Maybe later
                    </button>
                </div>
            </div>
          </div>
      )}

      {selectedExamAnalysis && (
        <ExamTopicAnalysisModal
          isOpen={!!selectedExamAnalysis}
          onClose={() => setSelectedExamAnalysis(null)}
          examTitle={selectedExamAnalysis.title}
          lessonId={selectedExamAnalysis.lessonId}
          user={currentUser}
          lessons={allLessons}
        />
      )}
    </div>
  );
};

export default CourseDetail;
