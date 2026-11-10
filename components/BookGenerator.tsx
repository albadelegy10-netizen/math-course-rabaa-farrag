import React, { useState, useEffect } from 'react';
import { CourseCategory, Lesson } from '../types';
import { lessonService } from '../lessonService';
import { questionService } from '../questionService';
import { generateBookWord } from '../utils/documentGenerator';
import { BookOpen, Download, Loader2, CheckSquare, Square } from 'lucide-react';

const BookGenerator: React.FC = () => {
  const [category, setCategory] = useState<CourseCategory>('DSAT');
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [selectedLessonIds, setSelectedLessonIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [bookTitle, setBookTitle] = useState('My Custom Book');

  useEffect(() => {
    const fetchLessons = async () => {
      setLoading(true);
      try {
        const allLessons = await lessonService.getAllLessons();
        const fetchedLessons = allLessons.filter(l => l.course === category);
        setLessons(fetchedLessons);
        setSelectedLessonIds([]); // Reset selection when category changes
      } catch (error) {
        console.error("Error fetching lessons:", error instanceof Error ? error.message : String(error));
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, [category]);

  const toggleLesson = (lessonId: string) => {
    setSelectedLessonIds(prev => 
      prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  const toggleAll = () => {
    if (selectedLessonIds.length === lessons.length) {
      setSelectedLessonIds([]);
    } else {
      setSelectedLessonIds(lessons.map(l => l.id));
    }
  };

  const handleGenerateBook = async (mode: 'student_exam' | 'teacher_key') => {
    if (selectedLessonIds.length === 0) return;
    
    setGenerating(true);
    try {
      const chapters = [];
      for (const lessonId of selectedLessonIds) {
        const lesson = lessons.find(l => l.id === lessonId);
        if (lesson) {
          const questions = questionService.getQuestions(lessonId as any);
          chapters.push({ lesson, questions });
        }
      }
      
      await generateBookWord(chapters, mode, bookTitle);
    } catch (error) {
      console.error("Error generating book:", error instanceof Error ? error.message : String(error));
      alert("Failed to generate book. Please try again.");
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex items-center space-x-4 mb-8">
        <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
          <BookOpen className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-3xl font-black text-gray-900">Book Generator</h1>
          <p className="text-gray-500 mt-1">Select lessons to compile into a single Word document.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Course Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as CourseCategory)}
              className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="DSAT">DSAT</option>
              <option value="EST1">EST 1</option>
              <option value="EST2">EST 2</option>
              <option value="ACT1">ACT 1</option>
              <option value="ACT2">ACT 2</option>
              <option value="GEOMETRY">Geometry</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Book Title</label>
            <input
              type="text"
              value={bookTitle}
              onChange={(e) => setBookTitle(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g., DSAT Practice Book"
            />
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Select Lessons</h2>
          <button 
            onClick={toggleAll}
            className="text-sm font-bold text-indigo-600 hover:text-indigo-800"
          >
            {selectedLessonIds.length === lessons.length ? 'Deselect All' : 'Select All'}
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto p-2">
            {lessons.map(lesson => {
              const isSelected = selectedLessonIds.includes(lesson.id);
              return (
                <div 
                  key={lesson.id}
                  onClick={() => toggleLesson(lesson.id)}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    isSelected 
                      ? 'border-indigo-600 bg-indigo-50' 
                      : 'border-gray-100 hover:border-indigo-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="mt-0.5">
                      {isSelected ? (
                        <CheckSquare className="w-5 h-5 text-indigo-600" />
                      ) : (
                        <Square className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 line-clamp-2">{lesson.title}</h3>
                      <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{lesson.type}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            {lessons.length === 0 && (
              <div className="col-span-full text-center py-8 text-gray-500">
                No lessons found for this category.
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-end">
        <button
          onClick={() => handleGenerateBook('student_exam')}
          disabled={selectedLessonIds.length === 0 || generating}
          className="flex items-center justify-center space-x-2 px-6 py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {generating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
          <span>Download Student Book</span>
        </button>
        <button
          onClick={() => handleGenerateBook('teacher_key')}
          disabled={selectedLessonIds.length === 0 || generating}
          className="flex items-center justify-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {generating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
          <span>Download Teacher Key</span>
        </button>
      </div>
    </div>
  );
};

export default BookGenerator;
