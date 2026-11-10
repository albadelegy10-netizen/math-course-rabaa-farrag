import React, { useState } from "react";
import { User, Mistake, Question, View, LessonId } from "../types";
import { generateStudyPlan, generateSimilarQuestions } from "../geminiService";
import { authService } from "../authService";
import { convertLatexToPlain } from "../utils/documentGenerator";
import {
  Target,
  Sparkles,
  Brain,
  AlertTriangle,
  CheckCircle2,
  Zap,
  BookOpen,
  Download,
  FileText,
  Home,
  ChevronRight,
} from "lucide-react";

interface ReviewPlanProps {
  currentUser: User;
  onStartCorrectionQuiz: (questions: Question[]) => void;
  onNavigate?: (view: View, lessonId?: LessonId) => void;
}

const ReviewPlan: React.FC<ReviewPlanProps> = ({
  currentUser,
  onStartCorrectionQuiz,
  onNavigate,
}) => {
  const [plan, setPlan] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [genLoading, setGenLoading] = useState(false);
  const [genProgressMsg, setGenProgressMsg] = useState("");

  // Generation Settings
  const [genCount, setGenCount] = useState<number>(5);
  const [genDifficulty, setGenDifficulty] = useState<"same" | "harder">("same");

  // Local state for mistakes to handle immediate UI updates upon deletion
  const [mistakes, setMistakes] = useState<Mistake[]>(
    currentUser.mistakes || [],
  );

  const handleGeneratePlan = async () => {
    setLoading(true);
    const result = await generateStudyPlan(mistakes);
    setPlan(result);
    setLoading(false);
  };

  const handleStartPractice = () => {
    const questions = mistakes.map((m) => m.question);
    onStartCorrectionQuiz(questions);
  };

  const handleGenerateAIQuiz = async () => {
    if (mistakes.length === 0) return;
    setGenLoading(true);
    setGenProgressMsg("Starting AI engine...");

    // Extract unique questions to base the generation on
    const uniqueWrongQuestions = Array.from(
      new Set(mistakes.map((m) => m.question)),
    ) as Question[];

    const newQuestions = await generateSimilarQuestions(
      uniqueWrongQuestions,
      genCount,
      genDifficulty,
      (msg) => setGenProgressMsg(msg),
    );

    setGenLoading(false);
    onStartCorrectionQuiz(newQuestions);
  };

  const handleDeleteMistake = async (mistake: Mistake) => {
    if (
      window.confirm(
        "Mark this question as mastered? It will be removed from your Deep Learning review list.",
      )
    ) {
      const updatedUser = await authService.resolveMistake(
        currentUser.username,
        mistake.question.question,
      );
      if (updatedUser) {
        setMistakes(updatedUser.mistakes || []);
      }
    }
  };

  const handleDownloadMistakes = (includeAnswers: boolean) => {
    if (mistakes.length === 0) return;

    let content = `Math Course with Eng Rabaa Farrag\nDeep Learning Review List\nStudent: ${currentUser.name || currentUser.username}\nDate: ${new Date().toLocaleDateString()}\n\n`;
    content += `==========================================================\n`;
    content += `                 TARGETED PRACTICE QUESTIONS\n`;
    content += `==========================================================\n\n`;

    mistakes.forEach((m, i) => {
      const q = m.question;
      // Strip HTML tags for text file and convert latex
      let qText = q.question.replace(/<[^>]*>?/gm, "");
      qText = convertLatexToPlain(qText);
      content += `Question ${i + 1} (Topic: ${m.topicName}):\n${qText}\n`;

      q.options.forEach((opt, oi) => {
        let plainOpt = opt.replace(/<[^>]*>?/gm, "");
        plainOpt = convertLatexToPlain(plainOpt);
        content += `${String.fromCharCode(65 + oi)}) ${plainOpt}\n`;
      });

      if (includeAnswers) {
        let answerStr = "N/A";
        if (q.options && q.options.length > 0) {
          if (typeof q.correctAnswer === "number" && !isNaN(q.correctAnswer)) {
            answerStr = String.fromCharCode(65 + q.correctAnswer);
          } else if (typeof q.correctAnswer === "string") {
            const match = q.correctAnswer.trim().match(/^([A-Ea-e])/);
            if (match) answerStr = match[1].toUpperCase();
            else answerStr = q.correctAnswer;
          }
        } else {
          answerStr = q.answerText || (typeof q.correctAnswer === "string" ? q.correctAnswer : "N/A");
        }
        content += `\nCORRECT ANSWER: ${answerStr}\n`;
        let explanationClean = q.explanation.replace(/<[^>]*>?/gm, "");
        explanationClean = convertLatexToPlain(explanationClean);
        content += `EXPLANATION: ${explanationClean}\n`;
        if (q.youtubeLink) {
          content += `VIDEO SOLUTION: ${q.youtubeLink}\n`;
        }
      }
      content += `\n----------------------------------------------------------\n\n`;
    });

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Deep_Learning_Review_${new Date().toISOString().split("T")[0]}${includeAnswers ? "_Key" : ""}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleHome = () => {
    if (onNavigate) onNavigate("home");
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
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
          Deep Learning
        </span>
      </nav>

      {mistakes.length === 0 ? (
        <div className="max-w-4xl mx-auto py-20 px-6 text-center">
          <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Deep Learning Complete!
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto leading-relaxed">
            Incredible job! You have mastered all your flagged questions. Keep
            practicing quizzes to challenge yourself, and if you miss any, they
            will appear here.
          </p>
        </div>
      ) : (
        <>
          {/* Header Section */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full -mr-20 -mt-20 opacity-50 blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-orange-100 text-orange-600 p-2 rounded-lg">
                  <Brain className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Deep Learning Center
                </h2>
              </div>
              <p className="text-gray-600 text-lg max-w-2xl mb-8">
                You have{" "}
                <span className="font-bold text-orange-600">
                  {mistakes.length} concepts
                </span>{" "}
                to master. Generate targeted practice, download your review
                sheet, or analyze your habits.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleGeneratePlan}
                  disabled={loading}
                  className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl font-bold transition-all shadow-lg shadow-purple-100 disabled:opacity-70 text-sm"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Sparkles className="w-4 h-4" />
                  )}
                  <span>{loading ? "Analyzing..." : "Generate Plan"}</span>
                </button>

                <button
                  onClick={handleStartPractice}
                  className="flex items-center space-x-2 bg-white border border-gray-200 text-orange-600 hover:bg-orange-50 px-5 py-3 rounded-xl font-bold transition-all text-sm"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Study Again</span>
                </button>

                <div className="w-px h-10 bg-gray-200 mx-2 hidden sm:block"></div>

                <button
                  onClick={() => handleDownloadMistakes(false)}
                  className="flex items-center space-x-2 bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 px-4 py-3 rounded-xl font-bold transition-all text-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>PDF</span>
                </button>
                <button
                  onClick={() => handleDownloadMistakes(true)}
                  className="flex items-center space-x-2 bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 px-4 py-3 rounded-xl font-bold transition-all text-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>PDF w/ Key</span>
                </button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column: AI Generation & Plan */}
            <div className="lg:col-span-2 space-y-8">
              {/* AI Generator Card */}
              <div className="bg-white rounded-2xl border border-blue-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-blue-600" />
                  AI Quiz Generator
                </h3>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                      Number of Questions
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={genCount}
                      onChange={(e) =>
                        setGenCount(parseInt(e.target.value) || 5)
                      }
                      className="w-full border border-gray-300 rounded-lg p-2.5 font-bold text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                      Difficulty Level
                    </label>
                    <div className="flex bg-gray-100 p-1 rounded-lg">
                      <button
                        onClick={() => setGenDifficulty("same")}
                        className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${genDifficulty === "same" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500"}`}
                      >
                        Similar
                      </button>
                      <button
                        onClick={() => setGenDifficulty("harder")}
                        className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${genDifficulty === "harder" ? "bg-white text-orange-600 shadow-sm" : "text-gray-500"}`}
                      >
                        Harder
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleGenerateAIQuiz}
                  disabled={genLoading}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-bold transition-all shadow-md flex items-center justify-center disabled:opacity-70"
                >
                  {genLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      {genProgressMsg || "Initializing..."}
                    </>
                  ) : (
                    <>
                      <Brain className="w-5 h-5 mr-2" />
                      Generate & Start Quiz
                    </>
                  )}
                </button>
              </div>

              {plan ? (
                <div className="bg-white rounded-2xl border border-purple-100 p-8 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-500"></div>
                  <h3 className="text-xl font-bold text-purple-900 mb-6 flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 text-purple-600" />
                    Your Personalized Strategy
                  </h3>
                  <div className="prose prose-purple max-w-none prose-headings:font-bold prose-h3:text-lg prose-p:text-gray-700">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: plan
                          .replace(/\n/g, "<br/>")
                          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 border border-gray-200 border-dashed rounded-2xl p-12 text-center flex flex-col items-center justify-center h-48">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-3">
                    <Target className="w-6 h-6 text-gray-300" />
                  </div>
                  <p className="text-gray-400 text-sm font-medium">
                    Generate a plan to see AI insights.
                  </p>
                </div>
              )}
            </div>

            {/* Right Column: Mistake List */}
            <div className="space-y-4">
              <h3 className="font-bold text-gray-900 flex items-center justify-between">
                <span className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-orange-500" />{" "}
                  Review List
                </span>
                <span className="text-xs font-normal text-gray-500">
                  Click check to remove
                </span>
              </h3>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden max-h-[600px] overflow-y-auto">
                {mistakes.map((mistake, idx) => (
                  <div
                    key={idx}
                    className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors group flex items-start gap-3"
                  >
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                          {mistake.topicName}
                        </span>
                        <span className="text-xs text-orange-600 font-bold bg-orange-50 px-2 py-0.5 rounded-full">
                          {mistake.count}x Missed
                        </span>
                      </div>
                      <p className="text-sm font-medium text-gray-800 line-clamp-2 mb-2">
                        {mistake.question.question.replace(/<[^>]*>?/gm, "")}
                      </p>
                      <div className="flex items-center text-xs text-gray-400">
                        <span>
                          Last seen:{" "}
                          {new Date(mistake.timestamp).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteMistake(mistake)}
                      className="p-2 text-gray-300 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all"
                      title="Mark as Mastered (Remove)"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ReviewPlan;
