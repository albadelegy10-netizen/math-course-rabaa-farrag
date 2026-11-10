
import React, { useState } from 'react';
import { User, Lesson } from '../types';
import { CheckCircle2, AlertCircle, History as HistoryIcon, Calendar, PieChart } from 'lucide-react';
import { ExamTopicAnalysisModal } from './ExamTopicAnalysisModal';

interface HistoryProps {
  user: User;
  lessons: Lesson[];
}

const History: React.FC<HistoryProps> = ({ user, lessons }) => {
  const [selectedExamAnalysis, setSelectedExamAnalysis] = useState<{ title: string; lessonId?: string } | null>(null);
  const attempts = user.history || [];

  if (attempts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
          <HistoryIcon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">No History Yet</h3>
        <p className="text-gray-500 max-w-sm">
          Once you complete a quiz, your results and progress will be tracked here.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <div className="mb-8 flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
          <HistoryIcon className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Quiz History</h2>
          <p className="text-gray-500 text-sm">{user.name || user.username}'s progress log</p>
        </div>
      </div>

      <div className="space-y-4">
        {attempts.map((attempt) => {
          const lesson = lessons.find(l => l.id === attempt.lessonId);
          const isExam = lesson?.type === 'exam' || attempt.mode === 'exam' || /form|exam|sat|est|act/i.test(attempt.topicName);
          const displayScore = isExam 
            ? Math.round((attempt.correctCount / attempt.totalQuestions) * 800) 
            : attempt.score;

          return (
            <div key={attempt.id} className="bg-white rounded-2xl border border-gray-200 p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold ${
                  attempt.score >= 50 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {displayScore}{isExam ? '' : '%'}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-gray-900">{attempt.topicName}</h4>
                    {isExam && (
                      <button
                        onClick={() => setSelectedExamAnalysis({ title: attempt.topicName, lessonId: attempt.lessonId })}
                        className="bg-purple-100 hover:bg-purple-200 text-purple-700 text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center transition-colors"
                        title="View Topic Analysis for this exam"
                      >
                        <PieChart className="w-3.5 h-3.5 mr-1" /> Topics Analysis
                      </button>
                    )}
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-gray-500 mt-1">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(attempt.timestamp).toLocaleDateString()}
                    </span>
                    <span className="flex items-center capitalize">
                       {attempt.mode} Mode
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Result</p>
                  <p className="text-sm font-medium text-gray-900">{attempt.correctCount} / {attempt.totalQuestions} Correct</p>
                </div>
                <div className={`p-2 rounded-full ${attempt.score >= 50 ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                  {attempt.score >= 50 ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedExamAnalysis && (
        <ExamTopicAnalysisModal
          isOpen={!!selectedExamAnalysis}
          onClose={() => setSelectedExamAnalysis(null)}
          examTitle={selectedExamAnalysis.title}
          lessonId={selectedExamAnalysis.lessonId}
          user={user}
          lessons={lessons}
        />
      )}
    </div>
  );
};

export default History;
