import React, { useState, useEffect, useRef, ClipboardEvent } from 'react';
import { compressImageBase64 } from "../utils/imageCompressor";
import { Question, View, LessonId } from '../types';
import { generateQuestionsFromImage } from '../geminiService';
import { 
  Image as ImageIcon, 
  Zap, 
  Brain, 
  ChevronRight, 
  Loader2, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2,
  Trash2,
  Home
} from 'lucide-react';

interface SmartPracticeProps {
  onStartQuiz: (questions: Question[]) => void;
  onNavigate?: (view: View, lessonId?: LessonId) => void;
}

const ENCOURAGING_MESSAGES = [
  "Analyzing your problem...",
  "Identifying the core mathematical concepts...",
  "You're doing great! Crafting similar challenges...",
  "Almost there! Just polishing the questions...",
  "Generating step-by-step explanations...",
  "Preparing a personalized practice set just for you...",
  "Learning from mistakes is the key to mastery!"
];

const SmartPractice: React.FC<SmartPracticeProps> = ({ onStartQuiz, onNavigate }) => {
  const [image, setImage] = useState<string | null>(null);
  const [count, setCount] = useState<number>(5);
  const [difficulty, setDifficulty] = useState<'similar' | 'harder'>('similar');
  
  const [loading, setLoading] = useState(false);
  const [progressMsg, setProgressMsg] = useState(ENCOURAGING_MESSAGES[0]);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Cycle through encouraging messages
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (loading) {
      let idx = 0;
      interval = setInterval(() => {
        idx = (idx + 1) % ENCOURAGING_MESSAGES.length;
        setProgressMsg(ENCOURAGING_MESSAGES[idx]);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      try {
        const compressed = await compressImageBase64(file, 800, 0.7);
        setImage(compressed);
        setError(null);
      } catch (err) {
        console.error("Compression error:", err);
      }
    }
  };

  const handlePaste = async (e: ClipboardEvent<HTMLDivElement>) => {
    const items = e.clipboardData.items;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf("image") !== -1) {
        const blob = items[i].getAsFile();
        if (blob) {
          try {
            const compressed = await compressImageBase64(blob, 800, 0.7);
            setImage(compressed);
            setError(null);
          } catch (err) {
            console.error("Compression error on paste:", err);
          }
        }
        e.preventDefault(); 
        break;
      }
    }
  };

  const handleGenerate = async () => {
    if (!image) {
      setError("Please paste or upload an image first.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const questions = await generateQuestionsFromImage(
        image, 
        count, 
        difficulty, 
        (_msg) => {
            // Optional: You can hook this up if the service provides granular updates
            // For now, we use the cycling messages for a smoother UX
        }
      );
      onStartQuiz(questions);
    } catch (err) {
      setError("Failed to generate questions. Please try a clearer image.");
      setLoading(false);
    }
  };

  const handleHome = () => {
    if (onNavigate) onNavigate('home');
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      {/* Breadcrumb */}
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
            <Brain className="w-4 h-4 mr-2" />
            AI Smart Practice
         </span>
      </nav>

      <div className="bg-white rounded-[2rem] border border-purple-100 shadow-xl overflow-hidden relative">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-100 to-indigo-50 rounded-full -mr-20 -mt-20 opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-50 rounded-full -ml-10 -mb-10 opacity-60 pointer-events-none"></div>

        <div className="relative z-10 p-8 md:p-12">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-200">
              <Sparkles className="w-8 h-8 text-yellow-300" />
            </div>
            <h1 className="text-4xl font-black text-gray-900 mb-4">Snap, Upload, Master</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Stuck on a tricky problem? Paste or upload an image, and our AI will generate similar practice questions to help you master the concept.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left: Input Area */}
            <div className="space-y-6">
              
              {/* Dropzone / Paste Area */}
              <div 
                onPaste={handlePaste}
                className={`relative group border-2 border-dashed rounded-3xl p-8 text-center transition-all duration-300 ${
                  image 
                    ? 'border-green-300 bg-green-50/30' 
                    : 'border-gray-300 bg-gray-50 hover:bg-purple-50 hover:border-purple-300'
                }`}
              >
                <input 
                  type="file" 
                  accept="image/*" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  className="hidden" 
                />
                
                {image ? (
                  <div className="relative">
                    <img src={image} alt="Uploaded Problem" className="max-h-64 mx-auto rounded-xl shadow-sm border border-gray-200" />
                    <button 
                      onClick={() => setImage(null)}
                      className="absolute -top-4 -right-4 bg-white text-red-500 p-2 rounded-full shadow-md border border-gray-100 hover:bg-red-50 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                    <div className="mt-4 flex items-center justify-center text-green-700 font-bold">
                        <CheckCircle2 className="w-5 h-5 mr-2" /> Image Ready
                    </div>
                  </div>
                ) : (
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="cursor-pointer py-8"
                  >
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                      <ImageIcon className="w-8 h-8 text-gray-400 group-hover:text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Click to Upload</h3>
                    <p className="text-gray-500 text-sm mb-4">or drag and drop here</p>
                    <div className="inline-block bg-gray-200 text-gray-600 px-3 py-1 rounded text-xs font-mono">
                        Ctrl+V to Paste
                    </div>
                  </div>
                )}
              </div>

              {error && (
                <div className="flex items-center p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 animate-in fade-in slide-in-from-top-2">
                  <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="font-bold text-sm">{error}</span>
                </div>
              )}
            </div>

            {/* Right: Controls & Generate */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-8">
               
               <div>
                 <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Settings</label>
                 
                 <div className="space-y-6">
                    {/* Count */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="text-sm font-bold text-gray-700">Number of Questions</span>
                            <span className="text-sm font-black text-purple-600 bg-purple-50 px-2 py-0.5 rounded">{count}</span>
                        </div>
                        <input 
                            type="range" 
                            min="1" 
                            max="10" 
                            value={count} 
                            onChange={(e) => setCount(parseInt(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                        />
                    </div>

                    {/* Difficulty */}
                    <div>
                        <label className="text-sm font-bold text-gray-700 block mb-3">Difficulty Level</label>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => setDifficulty('similar')}
                                className={`py-3 px-4 rounded-xl border-2 font-bold text-sm transition-all ${difficulty === 'similar' ? 'border-purple-600 bg-purple-50 text-purple-700' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}
                            >
                                Similar Idea
                            </button>
                            <button
                                onClick={() => setDifficulty('harder')}
                                className={`py-3 px-4 rounded-xl border-2 font-bold text-sm transition-all ${difficulty === 'harder' ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}
                            >
                                Challenge Me (Harder)
                            </button>
                        </div>
                    </div>
                 </div>
               </div>

               <div className="pt-4 border-t border-gray-100">
                 <button
                    onClick={handleGenerate}
                    disabled={loading || !image}
                    className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center text-lg ${
                        loading || !image 
                        ? 'bg-gray-300 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-[1.02] shadow-purple-200'
                    }`}
                 >
                    {loading ? (
                        <>
                            <Loader2 className="w-6 h-6 animate-spin mr-3" />
                            Processing...
                        </>
                    ) : (
                        <>
                            <Zap className="w-6 h-6 mr-2 fill-yellow-400 text-yellow-400" />
                            Generate Practice Set
                        </>
                    )}
                 </button>
               </div>

               {/* Loading Overlay/Message */}
               {loading && (
                 <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-8 text-center rounded-[2rem]">
                    <div className="w-20 h-20 border-4 border-purple-100 border-t-purple-600 rounded-full animate-spin mb-6"></div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">Generating Questions</h3>
                    <p className="text-purple-600 font-medium text-lg animate-pulse">{progressMsg}</p>
                    <p className="text-gray-400 text-xs mt-8">This usually takes about 10-15 seconds.</p>
                 </div>
               )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartPractice;