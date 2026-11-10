import { useState, useEffect, useMemo } from 'react';
import { CourseCategory, Lesson, Question } from '../types';
import { lessonService } from '../lessonService';
import { questionService } from '../questionService';
import { BarChart3, PieChart, AlertTriangle, BookOpen, Layers, CheckCircle2, Lightbulb } from 'lucide-react';
import { renderRichText } from '../utils/textRenderer';

const COURSES: CourseCategory[] = ['DSAT', 'EST1', 'EST2', 'ACT1', 'ACT2', 'GEOMETRY'];

export default function Analysis() {
  const [selectedCourse, setSelectedCourse] = useState<CourseCategory | ''>('');
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'repetitive' | 'importance' | 'ideas'>('overview');
  const [lessonsWithCounts, setLessonsWithCounts] = useState<(Lesson & { questionCount: number })[]>([]);
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [targetLessonId, setTargetLessonId] = useState<string>('');
  const [newLessonTitle, setNewLessonTitle] = useState('');
  const [newLessonType, setNewLessonType] = useState<'lesson' | 'exam'>('lesson');
  const [isSaving, setIsSaving] = useState(false);

  // Generate Mock Exam State
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [generateName, setGenerateName] = useState('Expected 2026 March SAT');
  const [generateCount, setGenerateCount] = useState(44);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateExam = async () => {
    if (!generateName.trim() || generateCount <= 0) {
      alert('Please enter a valid name and question count.');
      return;
    }

    setIsGenerating(true);
    try {
      // 1. Calculate topic distribution
      const topicCounts: Record<string, number> = {};
      const questionsByTopic: Record<string, Question[]> = {};
      
      questions.forEach(q => {
        // Use the first topic, or 'Uncategorized' if none
        const topic = (q.topics && q.topics.length > 0) ? q.topics[0] : 'Uncategorized';
        topicCounts[topic] = (topicCounts[topic] || 0) + 1;
        if (!questionsByTopic[topic]) questionsByTopic[topic] = [];
        questionsByTopic[topic].push(q);
      });

      const totalQuestions = questions.length;
      if (totalQuestions === 0) {
        alert('No questions available for this course to generate an exam.');
        setIsGenerating(false);
        return;
      }

      // 2. Select questions based on distribution
      let selectedForExam: Question[] = [];
      const topics = Object.keys(topicCounts);
      
      // First pass: select proportional amount
      topics.forEach(topic => {
        const proportion = topicCounts[topic] / totalQuestions;
        const targetCount = Math.floor(proportion * generateCount);
        
        if (targetCount > 0) {
          // Shuffle and pick
          const shuffled = [...questionsByTopic[topic]].sort(() => 0.5 - Math.random());
          selectedForExam.push(...shuffled.slice(0, targetCount));
        }
      });

      // Second pass: fill remaining slots if any (due to Math.floor)
      let remaining = generateCount - selectedForExam.length;
      if (remaining > 0) {
        // Get all questions not yet selected
        const selectedIds = new Set(selectedForExam.map(q => q.id));
        const available = questions.filter(q => !selectedIds.has(q.id));
        const shuffled = [...available].sort(() => 0.5 - Math.random());
        selectedForExam.push(...shuffled.slice(0, remaining));
      }

      // If we somehow selected too many, trim it
      if (selectedForExam.length > generateCount) {
        selectedForExam = selectedForExam.slice(0, generateCount);
      }

      // 3. Create the new exam lesson
      const newExamId = `exam_${Date.now()}`;
      const newExam: Lesson = {
        id: newExamId,
        title: generateName.trim(),
        description: `Auto-generated mock exam based on ${selectedCourse} distribution.`,
        course: selectedCourse as CourseCategory,
        type: 'exam',
        icon: 'FileText',
        studyNotes: '',
      };

      await lessonService.saveLesson(newExam);
      setLessons(prev => [...prev, newExam]);

      // 4. Save the questions to the new exam
      const newQuestions = selectedForExam.map((q, index) => ({
        ...q,
        id: `gen_${Date.now()}_${index}_${q.id}`
      }));

      await questionService.saveQuestions(newExamId, newQuestions);

      alert(`Successfully generated exam "${generateName}" with ${selectedForExam.length} questions!`);
      setShowGenerateModal(false);
      setGenerateName('Expected 2026 March SAT');
    } catch (error) {
      console.error('Error generating exam:', error instanceof Error ? error.message : String(error));
      alert('Failed to generate exam.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSaveQuestion = async () => {
    if (selectedQuestions.length === 0 || !targetLessonId) return;
    
    if (targetLessonId === 'new' && !newLessonTitle.trim()) {
      alert('Please enter a title for the new lesson/exam.');
      return;
    }

    setIsSaving(true);
    try {
      let finalLessonId = targetLessonId;

      if (targetLessonId === 'new') {
        finalLessonId = `lesson_${Date.now()}`;
        const newLesson: Lesson = {
          id: finalLessonId,
          title: newLessonTitle.trim(),
          description: `Created from Analysis tab`,
          course: selectedCourse as CourseCategory,
          type: newLessonType,
          icon: newLessonType === 'exam' ? 'FileText' : 'BookOpen',
          studyNotes: '',
        };
        await lessonService.saveLesson(newLesson);
        // Add to local state
        setLessons(prev => [...prev, newLesson]);
      }

      const existingQuestions = await questionService.getQuestions(finalLessonId);
      
      const newQuestions = selectedQuestions.map((q, index) => ({
        ...q,
        id: `copied_${Date.now()}_${index}_${q.id}`
      }));

      const updatedQuestions = [...existingQuestions, ...newQuestions];
      await questionService.saveQuestions(finalLessonId, updatedQuestions);
      
      alert(`Successfully saved ${selectedQuestions.length} question(s) to the lesson!`);
      setSelectedQuestions([]);
      setTargetLessonId('');
      setNewLessonTitle('');
      setNewLessonType('lesson');
    } catch (error) {
      console.error('Error saving question:', error instanceof Error ? error.message : String(error));
      alert('Failed to save question.');
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    if (!selectedCourse) {
      setLessons([]);
      setQuestions([]);
      setLessonsWithCounts([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const allLessons = await lessonService.getAllLessons();
        const courseLessons = allLessons.filter(l => l.course === selectedCourse);
        setLessons(courseLessons);

        let allQuestions: Question[] = [];
        const counts: (Lesson & { questionCount: number })[] = [];

        for (const lesson of courseLessons) {
          const lessonQuestions = await questionService.getQuestions(lesson.id);
          allQuestions = [...allQuestions, ...lessonQuestions];
          counts.push({ ...lesson, questionCount: lessonQuestions.length });
        }
        
        setQuestions(allQuestions);
        setLessonsWithCounts(counts.sort((a, b) => b.questionCount - a.questionCount));
      } catch (error) {
        console.error("Error fetching data for analysis:", error instanceof Error ? error.message : String(error));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCourse]);

  // Repetitive Questions Analysis
  const repetitiveQuestions = useMemo(() => {
    const questionMap = new Map<string, Question[]>();
    questions.forEach(q => {
      // Normalize question text for comparison
      const normalized = q.question.toLowerCase().replace(/[^a-z0-9]/g, '');
      if (!questionMap.has(normalized)) {
        questionMap.set(normalized, []);
      }
      questionMap.get(normalized)!.push(q);
    });

    return Array.from(questionMap.values()).filter(group => group.length > 1);
  }, [questions]);

  // Repetitive Ideas Analysis
  const repetitiveIdeas = useMemo(() => {
    const ideaMap = new Map<string, Question[]>();
    questions.forEach(q => {
      if (q.topics && q.topics.length > 0) {
        // Sort topics to ensure consistent grouping
        const ideaKey = [...q.topics].sort().join(' | ');
        if (!ideaMap.has(ideaKey)) {
          ideaMap.set(ideaKey, []);
        }
        ideaMap.get(ideaKey)!.push(q);
      }
    });

    // Only return groups with more than 1 question, sorted by group size
    return Array.from(ideaMap.entries())
      .filter(([_, group]) => group.length > 1)
      .sort((a, b) => b[1].length - a[1].length);
  }, [questions]);

  // Category Breakdown
  const categoryBreakdown = useMemo(() => {
    const counts: Record<string, number> = {};
    questions.forEach(q => {
      const cat = q.category || 'Uncategorized';
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [questions]);

  // Topic Breakdown
  const topicBreakdown = useMemo(() => {
    const counts: Record<string, number> = {};
    questions.forEach(q => {
      if (q.topics && q.topics.length > 0) {
        q.topics.forEach(t => {
          counts[t] = (counts[t] || 0) + 1;
        });
      } else {
        counts['No Topic'] = (counts['No Topic'] || 0) + 1;
      }
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 10); // Top 10 topics
  }, [questions]);

  // Question Type Breakdown
  const typeBreakdown = useMemo(() => {
    const counts: Record<string, number> = {};
    questions.forEach(q => {
      const type = q.type === 'fill-in-the-blank' ? 'Fill-in-the-blank' : 'Multiple Choice';
      counts[type] = (counts[type] || 0) + 1;
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [questions]);

  // Image Questions Count
  const imageQuestionsCount = useMemo(() => {
    return questions.filter(q => q.imageUrl || q.svg).length;
  }, [questions]);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Course Analysis</h1>
        <p className="text-gray-500 mt-2">Analyze question distribution, find duplicates, and identify key lessons.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex-1">
          <label className="block text-sm font-bold text-gray-700 mb-2">Select Course to Analyze</label>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value as CourseCategory)}
            className="w-full md:w-1/2 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
          >
            <option value="">-- Select a Course --</option>
            {COURSES.map(course => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
        </div>
        {selectedCourse && questions.length > 0 && (
          <button
            onClick={() => setShowGenerateModal(true)}
            className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2 whitespace-nowrap"
          >
            <Layers className="w-5 h-5" />
            <span>Generate Mock Exam</span>
          </button>
        )}
      </div>

      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {!loading && selectedCourse && (
        <div>
          {/* Tabs */}
          <div className="flex space-x-4 mb-6 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-4 px-4 text-sm font-bold transition-colors relative ${activeTab === 'overview' ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <div className="flex items-center space-x-2">
                <PieChart className="w-4 h-4" />
                <span>Overview</span>
              </div>
              {activeTab === 'overview' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 rounded-t-full"></div>}
            </button>
            <button
              onClick={() => setActiveTab('repetitive')}
              className={`pb-4 px-4 text-sm font-bold transition-colors relative ${activeTab === 'repetitive' ? 'text-pink-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4" />
                <span>Repetitive Questions</span>
                <span className="bg-pink-100 text-pink-600 py-0.5 px-2 rounded-full text-xs">{repetitiveQuestions.length}</span>
              </div>
              {activeTab === 'repetitive' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-600 rounded-t-full"></div>}
            </button>
            <button
              onClick={() => setActiveTab('importance')}
              className={`pb-4 px-4 text-sm font-bold transition-colors relative ${activeTab === 'importance' ? 'text-emerald-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4" />
                <span>Lesson Importance</span>
              </div>
              {activeTab === 'importance' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 rounded-t-full"></div>}
            </button>
            <button
              onClick={() => setActiveTab('ideas')}
              className={`pb-4 px-4 text-sm font-bold transition-colors relative ${activeTab === 'ideas' ? 'text-amber-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <div className="flex items-center space-x-2">
                <Lightbulb className="w-4 h-4" />
                <span>Repetitive Ideas</span>
                <span className="bg-amber-100 text-amber-600 py-0.5 px-2 rounded-full text-xs">{repetitiveIdeas.length}</span>
              </div>
              {activeTab === 'ideas' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 rounded-t-full"></div>}
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">Total Lessons</p>
                <p className="text-4xl font-black text-gray-900 mt-1">{lessons.length}</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center">
                    <Layers className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">Total Questions</p>
                <p className="text-4xl font-black text-gray-900 mt-1">{questions.length}</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">Unique Categories</p>
                <p className="text-4xl font-black text-gray-900 mt-1">{categoryBreakdown.length}</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
                    <Layers className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">Visual Questions</p>
                <p className="text-4xl font-black text-gray-900 mt-1">{imageQuestionsCount}</p>
              </div>

              <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Category Breakdown</h3>
                  <div className="space-y-4">
                    {categoryBreakdown.map(([category, count]) => (
                      <div key={category}>
                        <div className="flex justify-between text-sm font-bold mb-1">
                          <span className="text-gray-700">{category}</span>
                          <span className="text-indigo-600">{count} questions</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                          <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${(count / questions.length) * 100}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Top 10 Topics</h3>
                  <div className="space-y-4">
                    {topicBreakdown.map(([topic, count]) => (
                      <div key={topic}>
                        <div className="flex justify-between text-sm font-bold mb-1">
                          <span className="text-gray-700">{topic}</span>
                          <span className="text-emerald-600">{count} questions</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                          <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: `${(count / questions.length) * 100}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Question Types</h3>
                  <div className="space-y-4">
                    {typeBreakdown.map(([type, count]) => (
                      <div key={type}>
                        <div className="flex justify-between text-sm font-bold mb-1">
                          <span className="text-gray-700">{type}</span>
                          <span className="text-amber-600">{count} questions</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                          <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: `${(count / questions.length) * 100}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'repetitive' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-100 bg-gray-50">
                <h3 className="text-lg font-bold text-gray-900">Repetitive Questions</h3>
                <p className="text-sm text-gray-500 mt-1">Found {repetitiveQuestions.length} groups of similar or identical questions.</p>
              </div>
              <div className="divide-y divide-gray-100">
                {repetitiveQuestions.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">No repetitive questions found!</div>
                ) : (
                  repetitiveQuestions.map((group, idx) => (
                    <div key={idx} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="font-bold text-gray-900 flex-1">Group {idx + 1} ({group.length} occurrences)</h4>
                        <button 
                          onClick={() => setSelectedQuestions([group[0]])}
                          className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-bold hover:bg-indigo-100 transition-colors"
                        >
                          Save to Lesson
                        </button>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-xl p-4 text-sm text-gray-700 mb-4">
                        {renderRichText(group[0].question)}
                      </div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Found in:</div>
                      <div className="flex flex-wrap gap-2">
                        {group.map((q, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold">
                            ID: {q.id}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {activeTab === 'ideas' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-100 bg-gray-50">
                <h3 className="text-lg font-bold text-gray-900">Repetitive Ideas</h3>
                <p className="text-sm text-gray-500 mt-1">Found {repetitiveIdeas.length} groups of questions testing the exact same topics.</p>
              </div>
              <div className="divide-y divide-gray-100">
                {repetitiveIdeas.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">No repetitive ideas found!</div>
                ) : (
                  repetitiveIdeas.map(([idea, group], idx) => (
                    <div key={idx} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="font-bold text-gray-900 flex-1">Idea {idx + 1}: {idea}</h4>
                        <div className="flex items-center space-x-3">
                          <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold">
                            {group.length} occurrences
                          </span>
                          <button 
                            onClick={() => setSelectedQuestions(group)}
                            className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-bold hover:bg-indigo-100 transition-colors"
                          >
                            Save All to Lesson
                          </button>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {group.map((q, i) => (
                          <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 text-sm text-gray-700">
                            <div className="flex justify-between items-start mb-2">
                              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">ID: {q.id}</span>
                              <button 
                                onClick={() => setSelectedQuestions([q])}
                                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
                              >
                                Save to Lesson
                              </button>
                            </div>
                            {renderRichText(q.question)}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {activeTab === 'importance' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-100 bg-gray-50">
                <h3 className="text-lg font-bold text-gray-900">Lesson Importance</h3>
                <p className="text-sm text-gray-500 mt-1">Lessons ranked by the number of questions they contain.</p>
              </div>
              <div className="divide-y divide-gray-100">
                {lessonsWithCounts.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">No lessons found!</div>
                ) : (
                  lessonsWithCounts.map((lesson, idx) => (
                    <div key={lesson.id} className="p-6 hover:bg-gray-50 transition-colors flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center font-bold">
                          #{idx + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">{lesson.title}</h4>
                          <p className="text-sm text-gray-500">{lesson.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-black text-indigo-600">{lesson.questionCount}</span>
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Questions</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Save Question Modal */}
      {selectedQuestions.length > 0 && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-black text-gray-900">Save {selectedQuestions.length} Question(s)</h3>
              <p className="text-sm text-gray-500 mt-1">Select a destination lesson or exam for these questions.</p>
            </div>
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-700 mb-6 border border-gray-200">
                {selectedQuestions.length === 1 ? (
                  renderRichText(selectedQuestions[0].question)
                ) : (
                  <p className="font-bold text-gray-600">{selectedQuestions.length} questions selected.</p>
                )}
              </div>
              
              <label className="block text-sm font-bold text-gray-700 mb-2">Destination</label>
              <select
                value={targetLessonId}
                onChange={(e) => setTargetLessonId(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all mb-4"
              >
                <option value="">-- Select a Lesson/Exam --</option>
                <option value="new" className="font-bold text-indigo-600">+ Create New Lesson/Exam</option>
                {lessons.map(lesson => (
                  <option key={lesson.id} value={lesson.id}>{lesson.title}</option>
                ))}
              </select>

              {targetLessonId === 'new' && (
                <div className="space-y-4 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                  <div>
                    <label className="block text-sm font-bold text-indigo-900 mb-1">New Title</label>
                    <input
                      type="text"
                      value={newLessonTitle}
                      onChange={(e) => setNewLessonTitle(e.target.value)}
                      placeholder="e.g., Algebra Practice Test"
                      className="w-full p-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-indigo-900 mb-1">Type</label>
                    <select
                      value={newLessonType}
                      onChange={(e) => setNewLessonType(e.target.value as 'lesson' | 'exam')}
                      className="w-full p-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="lesson">Lesson</option>
                      <option value="exam">Exam</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
            <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end space-x-3">
              <button
                onClick={() => {
                  setSelectedQuestions([]);
                  setTargetLessonId('');
                  setNewLessonTitle('');
                }}
                className="px-6 py-2 rounded-xl font-bold text-gray-600 hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveQuestion}
                disabled={!targetLessonId || isSaving || (targetLessonId === 'new' && !newLessonTitle.trim())}
                className="px-6 py-2 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {isSaving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Saving...
                  </>
                ) : (
                  'Save Question(s)'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Generate Mock Exam Modal */}
      {showGenerateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-black text-gray-900">Generate Mock Exam</h3>
              <p className="text-sm text-gray-500 mt-1">Create a new exam based on the topic distribution of {selectedCourse}.</p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Exam Name</label>
                <input
                  type="text"
                  value={generateName}
                  onChange={(e) => setGenerateName(e.target.value)}
                  placeholder="e.g., Expected 2026 March SAT"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Number of Questions</label>
                <input
                  type="number"
                  min="1"
                  max={questions.length}
                  value={generateCount}
                  onChange={(e) => setGenerateCount(parseInt(e.target.value) || 0)}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                />
                <p className="text-xs text-gray-500 mt-2">Maximum available: {questions.length}</p>
              </div>
            </div>
            <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end space-x-3">
              <button
                onClick={() => setShowGenerateModal(false)}
                className="px-6 py-2 rounded-xl font-bold text-gray-600 hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleGenerateExam}
                disabled={isGenerating || !generateName.trim() || generateCount <= 0}
                className="px-6 py-2 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {isGenerating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Generating...
                  </>
                ) : (
                  'Generate Exam'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
