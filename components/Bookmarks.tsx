
import React, { useState } from 'react';
import { User, Bookmark, View, LessonId } from '../types';
import { Bookmark as BookmarkIcon, Trash2, ChevronDown, ChevronUp, AlertCircle, CheckCircle2, Home, ChevronRight } from 'lucide-react';
import { authService } from '../authService';
import { renderRichText, renderSvgOrImage } from '../utils/textRenderer';

interface BookmarksProps {
  currentUser: User;
  onUpdateUser: (user: User) => void;
  onNavigate?: (view: View, lessonId?: LessonId) => void;
}

const Bookmarks: React.FC<BookmarksProps> = ({ currentUser, onUpdateUser, onNavigate }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleDelete = async (bookmark: Bookmark) => {
    if (window.confirm('Are you sure you want to remove this bookmark?')) {
      const updatedUser = await authService.toggleBookmark(
        currentUser.username, 
        bookmark.lessonId, 
        bookmark.topicName, 
        bookmark.question,
        bookmark.mode
      );
      if (updatedUser) {
        onUpdateUser(updatedUser);
      }
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const stripHtml = (text: string) => {
     // If text contains img, add [Image] marker
     const hasImg = /<img/i.test(text);
     const clean = text.replace(/<[^>]*>?/gm, '');
     return hasImg ? `[Image] ${clean}` : clean;
  };

  const handleHome = () => {
    if (onNavigate) onNavigate('home');
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center text-sm font-medium text-gray-500 mb-8 overflow-x-auto whitespace-nowrap pb-2 no-scrollbar">
         <button 
           onClick={handleHome} 
           className="hover:text-purple-600 transition-colors flex items-center p-1 rounded-md hover:bg-purple-50"
           title="Go Home"
         >
           <Home className="w-4 h-4" />
         </button>
         
         <ChevronRight className="w-4 h-4 mx-2 text-gray-300 flex-shrink-0" />
         <span className="font-bold text-purple-900 bg-purple-50 px-3 py-1 rounded-full border border-purple-100 flex items-center">
            Bookmarks
         </span>
      </nav>

      {(!currentUser.bookmarks || currentUser.bookmarks.length === 0) ? (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
            <BookmarkIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Bookmarks Yet</h3>
            <p className="text-gray-500 max-w-sm">
            Bookmark questions during quizzes to review them later here. They are great for revision!
            </p>
        </div>
      ) : (
        <>
            <div className="mb-8 flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded-lg flex items-center justify-center">
                <BookmarkIcon className="w-6 h-6" />
                </div>
                <div>
                <h2 className="text-2xl font-bold text-gray-900">Your Bookmarks</h2>
                <p className="text-gray-500 text-sm">Review {currentUser.bookmarks.length} saved questions</p>
                </div>
            </div>

            <div className="space-y-4">
                {currentUser.bookmarks.map((bookmark) => (
                <div key={bookmark.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div 
                    onClick={() => toggleExpand(bookmark.id)}
                    className="p-4 flex items-center justify-between cursor-pointer bg-gray-50/50 hover:bg-gray-50 transition-colors"
                    >
                    <div className="flex items-center space-x-4 overflow-hidden">
                        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center font-bold text-gray-400 text-xs">
                        Q{bookmark.question.id}
                        </div>
                        <div className="min-w-0">
                        <p className="text-sm font-bold text-gray-900 truncate pr-4">{stripHtml(bookmark.question.question)}</p>
                        <p className="text-xs text-gray-500 font-medium">
                            {bookmark.topicName} • {new Date(bookmark.timestamp).toLocaleDateString()}
                        </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 pl-2">
                        <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(bookmark);
                        }}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Remove Bookmark"
                        >
                        <Trash2 className="w-4 h-4" />
                        </button>
                        {expandedId === bookmark.id ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                    </div>
                    </div>

                    {expandedId === bookmark.id && (
                    <div className="p-6 border-t border-gray-100 bg-white">
                        <div className="mb-6 font-semibold text-gray-900">
                        {renderRichText(bookmark.question.question)}
                        </div>

                        {bookmark.question.svg && (
                        <div className="mb-6 flex justify-center bg-gray-50 rounded-xl p-4 border border-gray-100">
                            {renderSvgOrImage(bookmark.question.svg)}
                        </div>
                        )}

                        <div className="space-y-3 mb-6">
                        {bookmark.question.options.map((opt, idx) => {
                            let isCorrect = idx === bookmark.question.correctAnswer;
                            if (!isCorrect && typeof bookmark.question.correctAnswer === 'string') {
                                const match = bookmark.question.correctAnswer.trim().match(/^([A-Ea-e])/);
                                if (match) isCorrect = idx === (match[1].toUpperCase().charCodeAt(0) - 65);
                                else isCorrect = idx === Number(bookmark.question.correctAnswer);
                            }
                            return (
                                <div 
                                key={idx}
                                className={`flex items-center p-3 rounded-lg border ${
                                    isCorrect 
                                    ? 'bg-green-50 border-green-200 text-green-900' 
                                    : 'bg-white border-gray-100 text-gray-500'
                                }`}
                                >
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 ${
                                    isCorrect 
                                    ? 'bg-green-200 text-green-700 font-bold' 
                                    : 'bg-gray-100 text-gray-400'
                                }`}>
                                    {String.fromCharCode(65 + idx)}
                                </div>
                                <div className="text-sm font-medium">{renderRichText(opt)}</div>
                                {isCorrect && <CheckCircle2 className="w-4 h-4 ml-auto text-green-600" />}
                                </div>
                            );
                        })}
                        </div>

                        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                        <h4 className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-2 flex items-center">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            Explanation
                        </h4>
                        <div className="text-sm text-blue-900 leading-relaxed">
                            {renderRichText(bookmark.question.explanation)}
                        </div>
                        </div>
                    </div>
                    )}
                </div>
                ))}
            </div>
        </>
      )}
    </div>
  );
};

export default Bookmarks;
