import React, { useState, useMemo, useEffect } from 'react';
import { LESSONS } from '../constants';
import { CourseCategory, Lesson, Question } from '../types';
import { Search, Filter, LayoutGrid, List, CheckSquare, Square, Plus, Link, Download, FileText, ChevronDown, Layers } from 'lucide-react';
import { renderRichText, renderSvgOrImage } from '../utils/textRenderer';
import { lessonService } from '../lessonService';
import { questionService } from '../questionService';
import { generateAutoTablePDF, generateWord } from '../utils/documentGenerator';

interface ExtendedQuestion extends Question {
  sourceLessonId: string;
  sourceLessonTitle: string;
  course: string;
  sourceType: 'lesson' | 'exam';
}

type SourceTypeFilter = 'both' | 'lesson' | 'exam';

// Same rule the course page uses to split its "Course Lessons" and "Full Exams" tabs.
const getLessonSourceType = (lesson: Lesson): 'lesson' | 'exam' => {
  if (lesson.type) return lesson.type === 'exam' ? 'exam' : 'lesson';
  const isExam = (lesson.title || '').toLowerCase().includes('exam') || lesson.id.includes('ex');
  return isExam ? 'exam' : 'lesson';
};

const QuestionBank: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<CourseCategory | 'All'>('All');
  const [sourceTypeFilter, setSourceTypeFilter] = useState<SourceTypeFilter>('both');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [selectedQuestionIds, setSelectedQuestionIds] = useState<Set<string>>(new Set());
  const [targetLessonId, setTargetLessonId] = useState<string>('');
  const [availableLessons, setAvailableLessons] = useState<Lesson[]>([]);
  const [isInserting, setIsInserting] = useState(false);

  const [showLinkTopicModal, setShowLinkTopicModal] = useState(false);
  const [topicToLink, setTopicToLink] = useState('');

  // Load available lessons for the target dropdown
  useEffect(() => {
    const loadLessons = async () => {
      const lessons = await lessonService.getAllLessons();
      setAvailableLessons(lessons);
    };
    loadLessons();
  }, []);

  const handleLinkTopic = async () => {
    if (!targetLessonId || !topicToLink) return;
    try {
      await lessonService.addDynamicTopic(targetLessonId, topicToLink);
      alert(`Successfully linked topic "${topicToLink}" to the lesson! Future questions will be added automatically.`);
      setShowLinkTopicModal(false);
      setTargetLessonId('');
    } catch (e) {
      console.error(e instanceof Error ? e.message : String(e));
      alert("Failed to link topic.");
    }
  };

  // Flatten all questions from all lessons
  const allQuestions = useMemo(() => {
    const questions: ExtendedQuestion[] = [];
    const usedIds = new Map<string, number>();
    LESSONS.forEach(lesson => {
      const lessonQuestions = lessonService.getQuestions(lesson.id);
      
      // Determine the accurate course for this lesson
      let resolvedCourse: CourseCategory = (lesson.course as CourseCategory) || 'DSAT';
      const lidLower = lesson.id.toLowerCase();
      const ltitleLower = lesson.title.toLowerCase();

      if (lidLower.startsWith('est1') || ltitleLower.startsWith('est1') || lidLower.includes('est1_') || ltitleLower.includes('est1-')) {
        resolvedCourse = 'EST1';
      } else if (lidLower.startsWith('est2') || ltitleLower.startsWith('est2') || lidLower.includes('est2_') || ltitleLower.includes('est2-')) {
        resolvedCourse = 'EST2';
      } else if (lidLower.startsWith('act1') || ltitleLower.startsWith('act1') || lidLower.includes('act1_') || ltitleLower.includes('act1-')) {
        resolvedCourse = 'ACT1';
      } else if (lidLower.startsWith('act2') || ltitleLower.startsWith('act2') || lidLower.includes('act2_') || ltitleLower.includes('act2-')) {
        resolvedCourse = 'ACT2';
      } else if (lidLower.includes('dsat') || ltitleLower.includes('dsat') || lidLower.startsWith('sat_') || ltitleLower.startsWith('sat-')) {
        resolvedCourse = 'DSAT';
      }

      const sourceType = getLessonSourceType(lesson);

      lessonQuestions.forEach(q => {
        // Combine lesson + question ID; some lessons repeat question IDs, so de-duplicate
        // (duplicate React keys left stale rows on screen and linked checkbox selections).
        const baseId = `${lesson.id}-${q.id}`;
        const seen = usedIds.get(baseId) || 0;
        usedIds.set(baseId, seen + 1);
        questions.push({
          ...q,
          id: seen === 0 ? baseId : `${baseId}~${seen}`,
          sourceLessonId: lesson.id,
          sourceLessonTitle: lesson.title,
          course: resolvedCourse,
          sourceType
        });
      });
    });
    return questions;
  }, []);

  const [topics, setTopics] = useState<string[]>([
    "Solving equation",
    "Inequality",
    "Ratio",
    "Variation (direct -inverse)",
    "Linear equation",
    "System of equations",
    "Quadratic",
    "Exponential equation",
    "Percentage",
    "Probability",
    "statistics",
    "Scatter plot",
    "Isolation",
    "Midpoint",
    "Distance between two points",
    "Perimeter",
    "Area",
    "Volume",
    "Angles and parallel lines",
    "Circle",
    "Circle equation",
    "Similarity",
    "Pythagoras",
    "Sin law",
    "Odd-even functions",
    "Periodic functions",
    "Arithmetic sequence",
    "Geometric sequence",
    "Permutation-combination"
  ]);

  const handleAddTopic = () => {
    const newTopic = prompt("Enter new topic name:");
    if (newTopic && !topics.includes(newTopic)) {
      setTopics(prev => [...prev, newTopic].sort());
    }
  };

  // Questions matching the course + search (before the Lessons/Exams filter), used for the counts.
  const courseAndSearchQuestions = useMemo(() => {
    return allQuestions.filter(q => {
      if (!q) return false;

      // Strict course check
      const matchesCourse = selectedCourse === 'All' || q.course === selectedCourse;
      if (!matchesCourse) return false;

      const titleLow = (q.sourceLessonTitle || '').toLowerCase();
      const idLow = (q.sourceLessonId || '').toLowerCase();

      // Additional course safety check: ensure source doesn't belong to another course
      if (selectedCourse === 'DSAT') {
        if (titleLow.includes('est1') || idLow.includes('est1') || titleLow.includes('est2') || idLow.includes('est2') || titleLow.includes('act1') || idLow.includes('act1') || titleLow.includes('act2') || idLow.includes('act2')) {
          return false;
        }
      } else if (selectedCourse === 'EST1') {
        if (titleLow.includes('est2') || idLow.includes('est2') || titleLow.includes('act1') || idLow.includes('act1') || titleLow.includes('act2') || idLow.includes('act2')) {
          return false;
        }
      }

      const searchLower = (searchQuery || '').trim().toLowerCase();
      if (!searchLower) return true;
      
      const questionText = (q.question || '').toLowerCase();
      const categoryText = (q.category || '').toLowerCase();

      // Check if search query matches any of the topics or category
      const matchesTopic = (q.topics || []).some(t => (t || '').toLowerCase().includes(searchLower)) ||
                           categoryText.includes(searchLower);
      
      const matchesText = questionText.includes(searchLower) || 
                          titleLow.includes(searchLower) ||
                          idLow.includes(searchLower);

      return matchesTopic || matchesText;
    });
  }, [allQuestions, selectedCourse, searchQuery]);

  const sourceTypeCounts = useMemo(() => {
    let lesson = 0;
    let exam = 0;
    courseAndSearchQuestions.forEach(q => (q.sourceType === 'exam' ? exam++ : lesson++));
    return { both: lesson + exam, lesson, exam };
  }, [courseAndSearchQuestions]);

  const filteredQuestions = useMemo(() => {
    if (sourceTypeFilter === 'both') return courseAndSearchQuestions;
    return courseAndSearchQuestions.filter(q => q.sourceType === sourceTypeFilter);
  }, [courseAndSearchQuestions, sourceTypeFilter]);

  const courses: (CourseCategory | 'All')[] = ['All', 'DSAT', 'EST1', 'EST2', 'ACT1', 'ACT2', 'GEOMETRY'];

  const getCourseColor = (course: string) => {
    switch (course) {
      case 'DSAT': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'EST1': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'EST2': return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'ACT1': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'ACT2': return 'bg-green-100 text-green-800 border-green-200';
      case 'GEOMETRY': return 'bg-teal-100 text-teal-800 border-teal-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const toggleQuestionSelection = (id: string) => {
    const newSelected = new Set(selectedQuestionIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedQuestionIds(newSelected);
  };

  const selectAllFiltered = () => {
    if (selectedQuestionIds.size === filteredQuestions.length) {
      setSelectedQuestionIds(new Set());
    } else {
      setSelectedQuestionIds(new Set(filteredQuestions.map(q => String(q.id))));
    }
  };

  const handleInsertQuestions = async () => {
    if (!targetLessonId || selectedQuestionIds.size === 0) return;
    
    setIsInserting(true);
    try {
      // 1. Get current questions of target lesson
      const currentQuestions = await lessonService.getQuestions(targetLessonId);
      
      // 2. Find selected questions objects
      const questionsToAdd: any[] = [];
      let duplicateCount = 0;

      allQuestions
        .filter(q => selectedQuestionIds.has(String(q.id)))
        .forEach(q => {
          // Check if this question is already in the lesson
          const isDuplicate = currentQuestions.some(cq => {
             // Extract the true original ID by removing any lesson prefix 
             // (since QuestionBank maps IDs to `${lesson.id}-${q.id}`)
             const normalizedQId = q.sourceLessonId && String(q.id).startsWith(q.sourceLessonId + '-') 
                 ? String(q.id).substring(q.sourceLessonId.length + 1) 
                 : String(q.id);
             
             // The question inside the lesson could be a static question (uses id) 
             // or an imported question (uses originalQuestionId)
             let normalizedCqId = String(cq.originalQuestionId || cq.id);
             // If cq was imported from a QuestionBank and somehow retained the prefix
             if (cq.originalQuestionId && typeof cq.originalQuestionId === 'string' && cq.originalQuestionId.includes('-')) {
                // Heuristic: If it has a prefix like 'est1_2021_aug-...', try to strip it if possible. 
                // But it's safer to compare both against normalizedQId
             }

             // 1. Check ID match
             if (normalizedCqId === normalizedQId || String(cq.id) === normalizedQId || String(cq.originalQuestionId) === normalizedQId || String(cq.originalQuestionId) === String(q.id)) return true;
             
             // 2. Exact same string ID match (fallback)
             if (String(cq.id) === String(q.id)) return true;

             // 3. Fallback to Content Matching
             // Check by text if it has a valid text body
             const hasText = q.question && q.question.trim() !== '';
             if (hasText && cq.question && cq.question.trim() === q.question.trim()) return true;

             // Check by HTML
             const hasHtml = q.html && q.html.trim() !== '';
             if (!hasText && hasHtml && cq.html === q.html) return true;

             // Check by image URL if it's an image question
             const hasImage = q.imageUrl && q.imageUrl.trim() !== '';
             if (!hasText && !hasHtml && hasImage && cq.imageUrl === q.imageUrl) return true;
             
             // Check by SVG if it's an SVG question
             const hasSvg = q.svg && q.svg.trim() !== '';
             if (!hasText && !hasHtml && !hasImage && hasSvg && cq.svg === q.svg) return true;

             return false;
          });

          if (isDuplicate) {
            duplicateCount++;
          } else {
            // Destructure to separate UI-only properties and the ID
            const { sourceLessonId, sourceLessonTitle, course, sourceType, id, ...originalProps } = q;
            
            // Create a DEEP COPY of the question data to ensure total independence
            const questionCopy = { ...originalProps, options: [...(originalProps.options || [])] };
            
            questionsToAdd.push({
              ...questionCopy,
              originalQuestionId: q.id,
              // Generate a completely new unique ID
              id: `imported_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            });
          }
        });

      if (questionsToAdd.length === 0 && duplicateCount > 0) {
        alert(`Finished. All ${duplicateCount} selected question(s) were already in the lesson and skipped.`);
        setSelectedQuestionIds(new Set()); // Clear selection
        setIsInserting(false);
        return;
      }

      // 3. Merge and Save
      const updatedQuestions = [...currentQuestions, ...questionsToAdd];
      await questionService.saveQuestions(targetLessonId, updatedQuestions);
      
      alert(`Successfully added ${questionsToAdd.length} questions to the lesson!${duplicateCount > 0 ? ` (${duplicateCount} duplicate questions skipped)` : ''}`);
      setSelectedQuestionIds(new Set()); // Clear selection
    } catch (error) {
      console.error("Failed to insert questions", error instanceof Error ? error.message : String(error));
      alert("Failed to insert questions. Please try again.");
    } finally {
      setIsInserting(false);
    }
  };

  const [exportMode, setExportMode] = useState<'student_exam' | 'teacher_key'>('student_exam');
  const [isExporting, setIsExporting] = useState(false);

  const getQuestionsToExport = () => {
    if (selectedQuestionIds.size > 0) {
      return allQuestions.filter(q => selectedQuestionIds.has(String(q.id)));
    }
    return filteredQuestions;
  };

  const handleExportPDF = async (mode: 'student_exam' | 'teacher_key' = exportMode) => {
    const questionsToExport = getQuestionsToExport();
    if (questionsToExport.length === 0) {
      alert("No questions selected or available to export.");
      return;
    }
    setIsExporting(true);
    try {
      const title = selectedQuestionIds.size > 0 
        ? `Question Bank - ${selectedQuestionIds.size} Selected Questions` 
        : `Question Bank Export (${selectedCourse} - ${questionsToExport.length} Questions)`;
      await generateAutoTablePDF(title, questionsToExport, mode);
    } catch (e) {
      console.error("Failed to export PDF:", e);
      alert("An error occurred while generating the PDF. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportWord = async (mode: 'student_exam' | 'teacher_key' = exportMode) => {
    const questionsToExport = getQuestionsToExport();
    if (questionsToExport.length === 0) {
      alert("No questions selected or available to export.");
      return;
    }
    setIsExporting(true);
    try {
      const title = selectedQuestionIds.size > 0 
        ? `Question Bank - ${selectedQuestionIds.size} Selected Questions` 
        : `Question Bank Export (${selectedCourse} - ${questionsToExport.length} Questions)`;
      await generateWord(title, questionsToExport, mode);
    } catch (e) {
      console.error("Failed to export Word document:", e);
      alert("An error occurred while generating the Word document. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Question Bank</h1>
          <p className="text-gray-500 mt-1">Select questions from exams and add them to your lessons</p>
        </div>
        
        <div className="flex items-center space-x-2 bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-pink-50 text-pink-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <LayoutGrid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-pink-50 text-pink-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 sticky top-0 z-20">
       <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full md:w-auto">
          {/* Course dropdown */}
          <label className="relative block md:w-48">
            <span className="sr-only">Course</span>
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value as CourseCategory | 'All')}
              className="w-full appearance-none pl-9 pr-9 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-bold text-gray-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
            >
              {courses.map(course => (
                <option key={course} value={course}>{course === 'All' ? 'All Courses' : course}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </label>

          {/* Lessons / Exams / Both dropdown */}
          <label className="relative block md:w-60">
            <span className="sr-only">Questions from</span>
            <Layers className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <select
              value={sourceTypeFilter}
              onChange={(e) => setSourceTypeFilter(e.target.value as SourceTypeFilter)}
              className="w-full appearance-none pl-9 pr-9 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-bold text-gray-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
            >
              <option value="both">Lessons & Exams ({sourceTypeCounts.both})</option>
              <option value="lesson">Lessons only ({sourceTypeCounts.lesson})</option>
              <option value="exam">Exams only ({sourceTypeCounts.exam})</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </label>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              list="topic-options"
              placeholder="Search topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
            />
            <datalist id="topic-options">
              {topics.map((title, index) => (
                <option key={index} value={title} />
              ))}
            </datalist>
          </div>
          <button
            onClick={handleAddTopic}
            className="p-2 bg-gray-50 border border-gray-200 rounded-lg hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200 transition-colors"
            title="Add new topic"
          >
            <Plus className="w-5 h-5" />
          </button>
          
          {searchQuery && topics.some(t => t.toLowerCase() === searchQuery.toLowerCase()) && (
              <button
                onClick={() => {
                    const matchedTopic = topics.find(t => t.toLowerCase() === searchQuery.toLowerCase()) || searchQuery;
                    setTopicToLink(matchedTopic);
                    setShowLinkTopicModal(true);
                }}
                className="p-2 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 text-purple-600 transition-colors"
                title={`Link topic "${searchQuery}" to a lesson`}
              >
                <Link className="w-5 h-5" />
              </button>
          )}
        </div>
       </div>
      </div>

      {/* Link Topic Modal */}
      {showLinkTopicModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
           <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Link Topic to Lesson</h3>
              <p className="text-gray-500 mb-6 text-sm">
                  Automatically add all current and future questions about <strong className="text-purple-600">"{topicToLink}"</strong> to:
              </p>
              
              <select 
                value={targetLessonId}
                onChange={(e) => setTargetLessonId(e.target.value)}
                className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 mb-6"
              >
                <option value="">Select Target Lesson...</option>
                {availableLessons.map(l => (
                  <option key={l.id} value={l.id}>{l.title}</option>
                ))}
              </select>

              <div className="flex space-x-3">
                 <button 
                    onClick={() => {
                        setShowLinkTopicModal(false);
                        setTargetLessonId('');
                    }} 
                    className="flex-1 py-2 bg-gray-100 text-gray-700 font-bold rounded-lg"
                 >
                    Cancel
                 </button>
                 <button 
                    onClick={handleLinkTopic}
                    disabled={!targetLessonId}
                    className="flex-1 py-2 bg-purple-600 text-white font-bold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                    Link Topic
                 </button>
              </div>
           </div>
        </div>
      )}

      {/* Action Bar (Visible when questions are selected) */}
      {selectedQuestionIds.size > 0 && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-4 rounded-2xl shadow-2xl z-50 flex flex-wrap items-center gap-4 w-[95%] md:w-auto animate-in slide-in-from-bottom-10">
          <div className="flex items-center gap-2 font-bold whitespace-nowrap">
            <CheckSquare className="w-5 h-5 text-pink-500" />
            <span>{selectedQuestionIds.size} Selected</span>
          </div>
          
          <div className="h-8 w-px bg-gray-700 hidden md:block"></div>

          {/* Export Mode Toggle */}
          <div className="flex items-center bg-gray-800 rounded-lg p-1 border border-gray-700">
            <button
              onClick={() => setExportMode('student_exam')}
              className={`px-3 py-1 rounded text-xs font-bold transition-colors ${exportMode === 'student_exam' ? 'bg-pink-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Student Exam
            </button>
            <button
              onClick={() => setExportMode('teacher_key')}
              className={`px-3 py-1 rounded text-xs font-bold transition-colors ${exportMode === 'teacher_key' ? 'bg-pink-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Teacher Key
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleExportPDF()}
              disabled={isExporting}
              className="flex items-center gap-1.5 bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm font-bold border border-gray-700 transition-colors"
              title="Export selected questions to formatted PDF using jsPDF and autoTable"
            >
              <Download className="w-4 h-4 text-pink-400" />
              <span>Export PDF</span>
            </button>
            <button
              onClick={() => handleExportWord()}
              disabled={isExporting}
              className="flex items-center gap-1.5 bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm font-bold border border-gray-700 transition-colors"
              title="Export selected questions to Word document (.docx)"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Export Word</span>
            </button>
          </div>

          <div className="h-8 w-px bg-gray-700 hidden md:block"></div>
          
          <select 
            value={targetLessonId}
            onChange={(e) => setTargetLessonId(e.target.value)}
            className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full md:w-56 p-2.5"
          >
            <option value="">Select Target Lesson...</option>
            {availableLessons.map(l => (
              <option key={l.id} value={l.id}>{l.title}</option>
            ))}
          </select>

          <button
            onClick={handleInsertQuestions}
            disabled={!targetLessonId || isInserting}
            className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {isInserting ? 'Inserting...' : 'Insert Questions'}
            <Plus className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Content Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
         <div className="text-sm text-gray-600 font-medium flex items-center gap-2">
           <span>Showing <strong>{filteredQuestions.length}</strong> questions</span>
           {selectedQuestionIds.size > 0 && (
             <span className="bg-pink-100 text-pink-700 px-2.5 py-0.5 rounded-full text-xs font-bold">
               {selectedQuestionIds.size} selected
             </span>
           )}
         </div>

         <div className="flex flex-wrap items-center gap-3">
           {/* Export All Filtered Buttons */}
           <button
             onClick={() => handleExportPDF('student_exam')}
             disabled={isExporting}
             className="flex items-center gap-1.5 px-3 py-1.5 bg-pink-50 hover:bg-pink-100 text-pink-700 rounded-lg text-xs font-bold transition-colors border border-pink-200"
             title="Export filtered questions as PDF using autoTable"
           >
             <Download className="w-3.5 h-3.5" />
             Export PDF
           </button>
           <button
             onClick={() => handleExportWord('student_exam')}
             disabled={isExporting}
             className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-xs font-bold transition-colors border border-blue-200"
             title="Export filtered questions as Word .docx"
           >
             <FileText className="w-3.5 h-3.5" />
             Export Docx
           </button>

           <div className="h-4 w-px bg-gray-200"></div>

           <button 
             onClick={selectAllFiltered}
             className="text-xs text-pink-600 font-bold hover:underline"
           >
             {selectedQuestionIds.size === filteredQuestions.length && filteredQuestions.length > 0 ? 'Deselect All' : 'Select All Filtered'}
           </button>
         </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredQuestions.map((q) => (
            <div 
              key={q.id} 
              onClick={() => toggleQuestionSelection(String(q.id))}
              className={`group bg-white rounded-2xl p-6 shadow-sm border cursor-pointer transition-all duration-200 relative overflow-hidden ${
                selectedQuestionIds.has(String(q.id)) 
                  ? 'border-pink-500 ring-2 ring-pink-100' 
                  : 'border-gray-100 hover:border-pink-200'
              }`}
            >
              <div className="absolute top-4 right-4">
                {selectedQuestionIds.has(String(q.id)) ? (
                  <CheckSquare className="w-6 h-6 text-pink-500" />
                ) : (
                  <Square className="w-6 h-6 text-gray-300 group-hover:text-pink-300" />
                )}
              </div>

              <div className="mb-4">
                <span className={`px-2 py-1 rounded text-[10px] font-bold border ${getCourseColor(q.course)}`}>
                  {q.course}
                </span>
                <span className={`ml-2 px-1.5 py-0.5 rounded text-[10px] font-bold ${q.sourceType === 'exam' ? 'bg-amber-50 text-amber-700' : 'bg-sky-50 text-sky-700'}`}>
                  {q.sourceType === 'exam' ? 'Exam' : 'Lesson'}
                </span>
                <span className="ml-2 text-xs text-gray-400">
                  {q.sourceLessonTitle}
                </span>
              </div>

              <div className="prose prose-sm max-w-none mb-4 text-gray-800">
                {renderRichText(q.question)}
              </div>
              
              {q.svg && (
                <div className="mb-4 bg-gray-50 p-2 rounded-lg">
                  {renderSvgOrImage(q.svg)}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-4">
                {q.topics?.map((t, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-6 py-4 w-12">
                    <div className="flex items-center justify-center">
                      <Square className="w-4 h-4 text-gray-400" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-xs font-black text-gray-500 uppercase tracking-wider w-32">Source</th>
                  <th className="px-6 py-4 text-xs font-black text-gray-500 uppercase tracking-wider">Question</th>
                  <th className="px-6 py-4 text-xs font-black text-gray-500 uppercase tracking-wider w-48">Topics</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredQuestions.map((q) => (
                  <tr 
                    key={q.id} 
                    onClick={() => toggleQuestionSelection(String(q.id))}
                    className={`hover:bg-pink-50/30 transition-colors cursor-pointer ${
                      selectedQuestionIds.has(String(q.id)) ? 'bg-pink-50/50' : ''
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center">
                        {selectedQuestionIds.has(String(q.id)) ? (
                          <CheckSquare className="w-5 h-5 text-pink-500" />
                        ) : (
                          <Square className="w-5 h-5 text-gray-300" />
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold border w-fit ${getCourseColor(q.course)}`}>
                            {q.course}
                          </span>
                          <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${q.sourceType === 'exam' ? 'bg-amber-50 text-amber-700' : 'bg-sky-50 text-sky-700'}`}>
                            {q.sourceType === 'exam' ? 'Exam' : 'Lesson'}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500 line-clamp-1" title={q.sourceLessonTitle}>
                          {q.sourceLessonTitle}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 line-clamp-3">
                        {renderRichText(q.question)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {q.topics?.slice(0, 2).map((t, i) => (
                          <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] rounded">
                            {t}
                          </span>
                        ))}
                        {(q.topics?.length || 0) > 2 && (
                          <span className="px-2 py-0.5 bg-gray-50 text-gray-400 text-[10px] rounded">
                            +{q.topics!.length - 2}
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {filteredQuestions.length === 0 && (
        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-300" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">No questions found</h3>
          <p className="text-gray-500">Try adjusting your filters or search query</p>
        </div>
      )}
    </div>
  );
};

export default QuestionBank;
