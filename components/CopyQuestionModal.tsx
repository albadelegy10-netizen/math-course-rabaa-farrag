import React, { useState, useEffect } from 'react';
import { Question, Lesson, CourseCategory } from '../types';
import { lessonService } from '../lessonService';
import { questionService } from '../questionService';
import { Copy, X, Search, CheckCircle2, AlertCircle, Loader2, BookOpen, Layers } from 'lucide-react';

interface CopyQuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  questionsToCopy: Question[];
  sourceLessonTitle?: string;
  onSuccess?: (targetLessonTitle: string, insertedCount: number, duplicateCount: number) => void;
}

export const CopyQuestionModal: React.FC<CopyQuestionModalProps> = ({
  isOpen,
  onClose,
  questionsToCopy,
  sourceLessonTitle,
  onSuccess
}) => {
  const [allLessons, setAllLessons] = useState<Lesson[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<CourseCategory | 'ALL'>('ALL');
  const [typeFilter, setTypeFilter] = useState<'ALL' | 'lesson' | 'exam'>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTargetLessonId, setSelectedTargetLessonId] = useState<string>('');
  const [isCopying, setIsCopying] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);

  useEffect(() => {
    if (isOpen) {
      loadLessons();
      setSelectedTargetLessonId('');
      setFeedback(null);
      setSearchTerm('');
      setTypeFilter('ALL');
    }
  }, [isOpen]);

  const loadLessons = async () => {
    try {
      const lessons = await lessonService.getAllLessons();
      setAllLessons(lessons.filter(l => !l.deleted));
    } catch (e) {
      console.error("Failed to load lessons for copy modal:", e);
    }
  };

  if (!isOpen) return null;

  const courses: (CourseCategory | 'ALL')[] = ['ALL', 'DSAT', 'EST1', 'EST2', 'ACT1', 'ACT2', 'GEOMETRY'];

  const filteredLessons = allLessons.filter(lesson => {
    if (!lesson) return false;
    const matchesCourse = selectedCourse === 'ALL' || lesson.course === selectedCourse;
    const matchesType = typeFilter === 'ALL' || (typeFilter === 'exam' ? lesson.type === 'exam' : lesson.type !== 'exam');
    
    const term = (searchTerm || '').trim().toLowerCase();
    if (!term) return matchesCourse && matchesType;

    const title = (lesson.title || '').toLowerCase();
    const description = (lesson.description || '').toLowerCase();
    const id = (lesson.id || '').toLowerCase();

    const matchesSearch = title.includes(term) || description.includes(term) || id.includes(term);
    return matchesCourse && matchesType && matchesSearch;
  });

  // Duplicate Prevention Check
  const isQuestionDuplicate = (candidate: Question, existingQuestions: Question[]): boolean => {
    return existingQuestions.some(existing => {
      // 1. ID or Original ID match
      if (candidate.id && (String(existing.id) === String(candidate.id) || String(existing.originalQuestionId) === String(candidate.id))) {
        return true;
      }
      if (existing.id && candidate.originalQuestionId && String(existing.id) === String(candidate.originalQuestionId)) {
        return true;
      }

      // 2. Question Text Match (trimmed)
      const candText = (candidate.question || '').trim();
      const existText = (existing.question || '').trim();
      if (candText && existText && candText === existText) {
        return true;
      }

      // 3. HTML Content Match
      const candHtml = (candidate.html || '').trim();
      const existHtml = (existing.html || '').trim();
      if (candHtml && existHtml && candHtml === existHtml) {
        return true;
      }

      // 4. Image URL Match (if no text)
      if (!candText && !candHtml && candidate.imageUrl && existing.imageUrl && candidate.imageUrl === existing.imageUrl) {
        return true;
      }

      // 5. SVG Match (if no text)
      if (!candText && !candHtml && candidate.svg && existing.svg && candidate.svg === existing.svg) {
        return true;
      }

      return false;
    });
  };

  const handleCopy = async () => {
    if (!selectedTargetLessonId || questionsToCopy.length === 0) return;

    const targetLesson = allLessons.find(l => l.id === selectedTargetLessonId);
    if (!targetLesson) return;

    setIsCopying(true);
    setFeedback(null);

    try {
      // Fetch current questions of target lesson/exam
      const existingQuestions = await lessonService.getQuestions(selectedTargetLessonId);

      const newQuestionsToAdd: Question[] = [];
      let duplicateCount = 0;

      questionsToCopy.forEach(q => {
        if (isQuestionDuplicate(q, existingQuestions)) {
          duplicateCount++;
        } else {
          // Destructure to detach UI/source metadata
          const { id, originalQuestionId, sourceLessonId, sourceLessonTitle, course, ...restProps } = q as any;

          const questionCopy: Question = {
            ...restProps,
            question: restProps.question || '',
            type: restProps.type,
            options: Array.isArray(restProps.options) ? [...restProps.options] : [],
            correctAnswer: restProps.correctAnswer,
            answerText: restProps.answerText,
            explanation: restProps.explanation || '',
            html: restProps.html,
            svg: restProps.svg,
            imageUrl: restProps.imageUrl,
            image: restProps.image,
            explanationSvg: restProps.explanationSvg,
            youtubeLink: restProps.youtubeLink,
            category: targetLesson.type !== 'exam' 
              ? (restProps.category || targetLesson.title.replace(/^\(\d+-/, "").replace(/\)$/, "").trim()) 
              : (restProps.category || ""),
            topic: restProps.topic,
            topics: Array.isArray(restProps.topics) ? [...restProps.topics] : restProps.topics,
            difficulty: restProps.difficulty,
            isGridIn: restProps.isGridIn,
            section: restProps.section,
            text: restProps.text,
            originalQuestionId: id || originalQuestionId,
            // Generate a fresh unique ID
            id: `copied_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
          };

          newQuestionsToAdd.push(questionCopy);
        }
      });

      if (newQuestionsToAdd.length === 0 && duplicateCount > 0) {
        setFeedback({
          type: 'info',
          message: `All ${duplicateCount} selected question(s) are already present in "${targetLesson.title}" and were skipped to prevent duplicates.`
        });
        setIsCopying(false);
        return;
      }

      // Merge and save
      const updatedQuestions = [...existingQuestions, ...newQuestionsToAdd];
      questionService.saveQuestions(selectedTargetLessonId, updatedQuestions);

      const msg = `Successfully copied ${newQuestionsToAdd.length} question(s) to "${targetLesson.title}"!${duplicateCount > 0 ? ` (${duplicateCount} duplicate(s) skipped)` : ''}`;
      setFeedback({ type: 'success', message: msg });

      if (onSuccess) {
        onSuccess(targetLesson.title, newQuestionsToAdd.length, duplicateCount);
      }

      setTimeout(() => {
        setIsCopying(false);
        onClose();
      }, 1500);

    } catch (e) {
      console.error("Error copying questions:", e);
      setFeedback({
        type: 'error',
        message: 'Failed to copy questions. Please try again.'
      });
      setIsCopying(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-purple-100 text-purple-700 rounded-2xl">
              <Copy className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">
                Copy {questionsToCopy.length === 1 ? 'Question' : `${questionsToCopy.length} Questions`}
              </h3>
              <p className="text-xs text-gray-500">
                Select target lesson or exam (same or different course)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Source info notice */}
        {sourceLessonTitle && (
          <div className="mt-4 p-3 bg-purple-50 text-purple-800 rounded-xl text-xs font-medium flex items-center">
            <Layers className="w-4 h-4 mr-2 flex-shrink-0 text-purple-600" />
            <span>Source: <strong>{sourceLessonTitle}</strong> ({questionsToCopy.length} item{questionsToCopy.length > 1 ? 's' : ''})</span>
          </div>
        )}

        {/* Feedback alert */}
        {feedback && (
          <div className={`mt-4 p-3 rounded-xl text-xs font-bold flex items-center ${
            feedback.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' :
            feedback.type === 'info' ? 'bg-blue-50 text-blue-800 border border-blue-200' :
            'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {feedback.type === 'success' ? <CheckCircle2 className="w-4 h-4 mr-2 flex-shrink-0 text-green-600" /> :
             feedback.type === 'info' ? <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0 text-blue-600" /> :
             <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0 text-red-600" />}
            <span>{feedback.message}</span>
          </div>
        )}

        {/* Step 1: Select Course */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
              1. Choose Course
            </label>
            <select
              value={selectedCourse}
              onChange={(e) => {
                setSelectedCourse(e.target.value as any);
                setSelectedTargetLessonId('');
              }}
              className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-gray-800 focus:ring-2 focus:ring-purple-500 outline-none cursor-pointer"
            >
              <option value="ALL">All Courses ({allLessons.length} items)</option>
              {courses.filter(c => c !== 'ALL').map(c => {
                const count = allLessons.filter(l => l.course === c).length;
                return (
                  <option key={c} value={c}>
                    {c} Course ({count} items)
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
              2. Filter Content Type
            </label>
            <div className="flex bg-gray-100 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => setTypeFilter('ALL')}
                className={`flex-1 py-1.5 text-[11px] font-bold rounded-lg transition-all ${
                  typeFilter === 'ALL' ? 'bg-white text-purple-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setTypeFilter('lesson')}
                className={`flex-1 py-1.5 text-[11px] font-bold rounded-lg transition-all ${
                  typeFilter === 'lesson' ? 'bg-white text-purple-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Lessons
              </button>
              <button
                type="button"
                onClick={() => setTypeFilter('exam')}
                className={`flex-1 py-1.5 text-[11px] font-bold rounded-lg transition-all ${
                  typeFilter === 'exam' ? 'bg-white text-purple-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Exams
              </button>
            </div>
          </div>
        </div>

        {/* Step 3: Search & Select Target Lesson/Exam */}
        <div className="mt-4 flex flex-col flex-1 min-h-0">
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
            3. Select Target Lesson or Exam ({filteredLessons.length})
          </label>
          <div className="relative mb-2">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by lesson or exam name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Lessons / Exams List */}
          <div className="flex-1 overflow-y-auto space-y-2 pr-1 min-h-[220px] max-h-[300px]">
            {filteredLessons.length > 0 ? (
              filteredLessons.map(lesson => {
                const isSelected = selectedTargetLessonId === lesson.id;
                return (
                  <div
                    key={lesson.id}
                    onClick={() => setSelectedTargetLessonId(lesson.id)}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-purple-50 border-purple-500 ring-2 ring-purple-100 shadow-sm'
                        : 'bg-white border-gray-100 hover:border-purple-200 hover:bg-purple-50/30'
                    }`}
                  >
                    <div className="flex items-center space-x-3 min-w-0 flex-1 mr-2">
                      <div className={`p-2 rounded-xl flex-shrink-0 ${
                        isSelected ? 'bg-purple-600 text-white' : lesson.type === 'exam' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-600'
                      }`}>
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-gray-900 text-xs sm:text-sm truncate">{lesson.title}</h4>
                        <div className="flex items-center space-x-2 mt-0.5">
                          <span className="text-[10px] font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded flex-shrink-0">
                            {lesson.course || 'EST1'}
                          </span>
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded flex-shrink-0 ${
                            lesson.type === 'exam' ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'bg-gray-100 text-gray-500'
                          }`}>
                            {lesson.type === 'exam' ? 'Full Exam' : 'Lesson'}
                          </span>
                        </div>
                      </div>
                    </div>
                    {isSelected && (
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 text-gray-400 text-xs bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                No target lessons or exams found for this selection.
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center space-x-3">
          <button
            type="button"
            onClick={onClose}
            disabled={isCopying}
            className="flex-1 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl text-sm transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleCopy}
            disabled={!selectedTargetLessonId || isCopying}
            className="flex-1 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-sm shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center space-x-2"
          >
            {isCopying ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Copying...</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Questions</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
