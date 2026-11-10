import React, { useEffect, useState } from 'react';
import { Lesson, User } from '../types';
import { lessonService } from '../lessonService';
import { Trash2, RefreshCw, Eye, Edit } from 'lucide-react';

interface BinProps {
  currentUser: User;
  onNavigateLesson: (id: string) => void;
  onRefreshLessons: () => void;
  onNavigateEditor: (id: string) => void;
}

const Bin: React.FC<BinProps> = ({ onNavigateLesson, onRefreshLessons, onNavigateEditor }) => {
  const [deletedLessons, setDeletedLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDeleted = async () => {
    setLoading(true);
    const lessons = await lessonService.getDeletedLessons();
    setDeletedLessons(lessons);
    setLoading(false);
  };

  useEffect(() => {
    fetchDeleted();
  }, []);

  const handleRestore = async (id: string) => {
    if (window.confirm('Are you sure you want to restore this item?')) {
      await lessonService.restoreLesson(id);
      await fetchDeleted();
      onRefreshLessons();
    }
  };

  const handlePermanentDelete = async (id: string) => {
    if (window.confirm('Are you absolutely sure you want to permanently delete this item? This cannot be undone.')) {
      await lessonService.permanentlyDeleteLesson(id);
      await fetchDeleted();
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-gray-500">Loading bin...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 animate-in fade-in zoom-in-95 duration-300">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight flex items-center">
            <Trash2 className="w-8 h-8 mr-3 text-red-500" /> Bin
          </h1>
          <p className="text-gray-500 mt-2 font-medium">Manage deleted lessons and exams. Use this space to restore items or delete them permanently.</p>
        </div>
      </div>

      {deletedLessons.length === 0 ? (
        <div className="text-center p-12 bg-white rounded-2xl border border-gray-200">
          <Trash2 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-900">Bin is empty</h3>
          <p className="text-gray-500 mt-2">Any deleted lessons or exams will appear here.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {deletedLessons.map(lesson => (
            <div key={lesson.id} className="w-full flex items-center justify-between p-5 bg-white border border-gray-200 rounded-2xl hover:shadow-md hover:border-red-300 transition-all group opacity-80 hover:opacity-100">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-red-100 text-red-700 rounded-md">Deleted</span>
                  <span className="text-xs font-bold text-gray-500">{lesson.course || 'Uncategorized'}</span>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mt-1 group-hover:text-red-700 transition-colors">{lesson.title}</h3>
                <p className="text-sm text-gray-500">{lesson.type === 'lesson' ? 'Lesson' : 'Exam'}</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => onNavigateLesson(lesson.id)} 
                  className="flex items-center px-3 py-2 bg-gray-50 text-gray-600 text-xs font-bold rounded-lg hover:bg-gray-200 transition-colors"
                  title="Preview"
                >
                  <Eye className="w-4 h-4 mr-1" /> View
                </button>
                <button 
                  onClick={() => onNavigateEditor(lesson.id)} 
                  className="flex items-center px-3 py-2 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg hover:bg-blue-100 transition-colors"
                  title="Edit"
                >
                  <Edit className="w-4 h-4 mr-1" /> Edit
                </button>
                <button 
                  onClick={() => handleRestore(lesson.id)} 
                  className="flex items-center px-3 py-2 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-lg hover:bg-emerald-100 transition-colors"
                  title="Restore"
                >
                  <RefreshCw className="w-4 h-4 mr-1" /> Restore
                </button>
                <button 
                  onClick={() => handlePermanentDelete(lesson.id)} 
                  className="flex items-center px-3 py-2 bg-red-50 text-red-600 text-xs font-bold rounded-lg hover:bg-red-100 transition-colors"
                  title="Delete permanently"
                >
                  <Trash2 className="w-4 h-4 mr-1" /> Hard Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bin;
