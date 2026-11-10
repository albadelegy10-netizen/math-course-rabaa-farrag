import React, { useState, useMemo, useEffect } from 'react';
import { Lesson, View } from '../types';
import { lessonService } from '../lessonService';
import { questionService } from '../questionService';
import { generatePDF } from '../utils/documentGenerator';
import { ExamTopicAnalysisModal } from './ExamTopicAnalysisModal';
import { 
  FileText, 
  Download, 
  Search, 
  Sparkles, 
  GraduationCap, 
  CheckCircle, 
  BookOpen, 
  Layers, 
  FileDown,
  Loader2,
  FileCheck,
  PieChart
} from 'lucide-react';

interface PdfExamsPageProps {
  allLessons?: Lesson[];
  onNavigate?: (view: View, lessonId?: string) => void;
}

const PdfExamsPage: React.FC<PdfExamsPageProps> = ({ allLessons = [], onNavigate }) => {
  const [lessons, setLessons] = useState<Lesson[]>(allLessons);
  const [selectedCourse, setSelectedCourse] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadingType, setDownloadingType] = useState<'student_exam' | 'teacher_key' | null>(null);
  const [selectedExamAnalysis, setSelectedExamAnalysis] = useState<{ title: string; lessonId?: string } | null>(null);

  useEffect(() => {
    // Dynamic SEO Title and Meta description update for search engines
    const prevTitle = document.title;
    document.title = "Math PDF Exams & Solutions | EST 1, EST 2, DSAT, SAT, ACT - Eng. Rabaa Farrag";

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Download free printable Math PDF exams with full answer keys for EST 1, EST 2, DSAT, SAT, and ACT. Practice real past papers with step-by-step solutions by Eng. Rabaa Farrag.');
    }

    // Add JSON-LD Schema dynamically for SEO Rich Snippets
    const scriptId = 'pdf-exams-seo-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Math PDF Exams and Solutions Library",
        "description": "Download free printable Math PDF exams and answer keys for EST 1, EST 2, DSAT, SAT, ACT math exams by Eng. Rabaa Farrag.",
        "url": window.location.href,
        "author": {
          "@type": "Person",
          "name": "Eng. Rabaa Farrag",
          "jobTitle": "Lead Math Instructor"
        },
        "about": [
          "EST 1 Math Exam PDF",
          "EST 2 Math Exam PDF",
          "Digital SAT (DSAT) Math PDF Exams",
          "ACT Math PDF Exams",
          "American Diploma Math Past Papers"
        ]
      });
      document.head.appendChild(script);
    }

    // Refresh lessons if needed
    lessonService.getAllLessons().then(res => {
      if (res && res.length > 0) {
        setLessons(res);
      }
    });

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) {
        metaDesc.setAttribute('content', prevDesc);
      }
      const existingScript = document.getElementById(scriptId);
      if (existingScript) existingScript.remove();
    };
  }, []);

  // Filter exam and practice test materials
  const examLessons = useMemo(() => {
    // We include items marked as type 'exam' or having 'exam' in title/description/id, plus practice lessons
    return (lessons || []).filter(l => {
      if (!l || l.deleted) return false;
      const title = (l.title || '').toLowerCase();
      const id = (l.id || '').toLowerCase();
      const desc = (l.description || '').toLowerCase();
      const isExam = l.type === 'exam' || 
        title.includes('exam') || 
        title.includes('test') ||
        id.includes('exam') ||
        id.includes('test') ||
        id.includes('march') ||
        id.includes('jan') ||
        id.includes('oct') ||
        id.includes('may') ||
        id.includes('april') ||
        id.includes('june') ||
        id.includes('aug') ||
        id.includes('nov') ||
        id.includes('dec') ||
        desc.includes('exam');
      return isExam;
    });
  }, [lessons]);

  const filteredExams = useMemo(() => {
    return examLessons.filter(exam => {
      if (!exam) return false;
      const course = (exam.course || '').toLowerCase();
      const matchesCourse = selectedCourse === 'all' || (exam.course || '').toUpperCase() === selectedCourse.toUpperCase();
      const q = (searchQuery || '').toLowerCase().trim();
      const title = (exam.title || '').toLowerCase();
      const desc = (exam.description || '').toLowerCase();
      const matchesSearch = !q || 
        title.includes(q) || 
        desc.includes(q) ||
        course.includes(q);

      return matchesCourse && matchesSearch;
    });
  }, [examLessons, selectedCourse, searchQuery]);

  const handleDownloadPdf = async (exam: Lesson, mode: 'student_exam' | 'teacher_key') => {
    setDownloadingId(exam.id);
    setDownloadingType(mode);
    try {
      const questions = questionService.getQuestions(exam.id as any);
      if (!questions || questions.length === 0) {
        alert("This exam currently has no questions to download.");
        return;
      }
      await generatePDF(exam, questions, mode);
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("An error occurred while generating the PDF. Please try again.");
    } finally {
      setDownloadingId(null);
      setDownloadingType(null);
    }
  };

  const courseCounts = useMemo(() => {
    const counts: Record<string, number> = { all: examLessons.length };
    ['EST1', 'DSAT', 'EST2', 'ACT1', 'ACT2', 'GEOMETRY'].forEach(c => {
      counts[c] = examLessons.filter(e => e.course === c).length;
    });
    return counts;
  }, [examLessons]);

  return (
    <main className="max-w-6xl mx-auto py-10 px-4 sm:px-6">
      {/* Hidden Semantic Elements for Search Engines Crawler Optimization */}
      <div className="sr-only" aria-hidden="true">
        <h1>All EST 1, EST 2, DSAT, SAT, ACT Math PDF Exams and Solutions by Eng Rabaa Farrag</h1>
        <p>Download free printable Math PDF exams, question papers, step by step answer keys, and model answers for American Diploma students. EST 1 March 2026, EST 1 January 2026, EST 1 October 2021, EST 1 May 2021, DSAT Practice Tests, ACT Malek exams.</p>
        <nav>
          <ul>
            {examLessons.map(e => (
              <li key={e.id}>
                <a href={`#exam-${e.id}`}>{e.title} - {e.course || 'Math'} Exam PDF Download</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* SEO & User Hero Header */}
      <header className="bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-950 text-white rounded-[2rem] p-8 md:p-12 shadow-xl relative overflow-hidden mb-10 border border-indigo-800/50">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2.5 bg-pink-500/20 text-pink-200 border border-pink-400/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-pink-300" />
            <span>Official Exam Archive & Printable PDFs</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
            PDF Math Exams <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-amber-300">
              EST 1, EST 2, DSAT, SAT & ACT
            </span>
          </h1>

          <p className="text-base sm:text-lg text-indigo-100/90 leading-relaxed mb-6 font-normal">
            Access, practice, and download high-yield <strong>printable PDF exams</strong> with comprehensive <strong>Teacher Answer Keys & LaTeX Solutions</strong> prepared by <strong>Eng. Rabaa Farrag</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-indigo-200">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> Formatted in LaTeX Math
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <FileDown className="w-4 h-4 text-pink-400" /> Student & Teacher Editions
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <GraduationCap className="w-4 h-4 text-amber-400" /> Ready for Real Exam Prep
            </span>
          </div>
        </div>

        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
      </header>

      {/* Course Filter & Search Controls */}
      <section className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCourse('all')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                selectedCourse === 'all'
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All Exams ({courseCounts.all || 0})</span>
            </button>

            {[
              { id: 'EST1', label: 'EST 1' },
              { id: 'DSAT', label: 'DSAT / SAT' },
              { id: 'EST2', label: 'EST 2' },
              { id: 'ACT1', label: 'ACT 1' },
              { id: 'ACT2', label: 'ACT 2' },
              { id: 'GEOMETRY', label: 'Geometry' }
            ].map(tab => {
              const isSelected = selectedCourse === tab.id;
              const count = courseCounts[tab.id] || 0;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCourse(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border flex items-center space-x-1.5 ${
                    isSelected
                      ? 'bg-pink-600 text-white border-pink-600 shadow-md shadow-pink-100'
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-pink-50 hover:text-pink-700 hover:border-pink-200'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-pink-700 text-pink-100' : 'bg-gray-200 text-gray-700'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by exam title or year..."
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all text-gray-800 placeholder-gray-400"
            />
          </div>
        </div>
      </section>

      {/* Grid of PDF Exams */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-lg font-black text-gray-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-pink-600" />
            <span>Available PDF Exams</span>
            <span className="text-xs bg-pink-100 text-pink-800 font-bold px-2 py-0.5 rounded-full">
              {filteredExams.length} Available
            </span>
          </h2>
          <span className="text-xs text-gray-500 font-medium">Click to download or solve online</span>
        </div>

        {filteredExams.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredExams.map((exam, idx) => {
              const isDownloadingThis = downloadingId === exam.id;
              const questions = questionService.getQuestions(exam.id as any);
              const qCount = questions?.length || 0;

              return (
                <article
                  id={`exam-${exam.id}`}
                  key={exam.id}
                  className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Course Badge & Number */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg bg-pink-50 text-pink-700 border border-pink-200">
                        {exam.course || 'MATH'} Exam
                      </span>
                      <span className="text-xs text-gray-400 font-bold">
                        #{idx + 1} • {qCount > 0 ? `${qCount} Questions` : 'Full Length Exam'}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <button
                        onClick={() => setSelectedExamAnalysis({ title: exam.title, lessonId: exam.id })}
                        className="text-left font-black text-gray-900 hover:text-pink-600 transition-colors leading-snug group flex items-center"
                        title="Click to view full Topic Analysis for this exam"
                      >
                        <span>{exam.title}</span>
                        <PieChart className="w-4 h-4 ml-1.5 text-purple-600 opacity-80 group-hover:scale-110 transition-transform" />
                      </button>
                      <button
                        onClick={() => setSelectedExamAnalysis({ title: exam.title, lessonId: exam.id })}
                        className="text-[10px] font-bold bg-purple-100 hover:bg-purple-200 text-purple-700 px-2 py-0.5 rounded-full flex items-center transition-colors whitespace-nowrap"
                        title="View Topic Breakdown"
                      >
                        <PieChart className="w-3 h-3 mr-1" /> Topics Analysis
                      </button>
                    </div>

                    {/* Description / Study Notes preview */}
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4">
                      {exam.description || `Official math exam and practice paper for ${exam.course || 'Math'}. Formatted with clean LaTeX formulas and verified step-by-step solutions.`}
                    </p>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
                    {/* Solve Online */}
                    {onNavigate && (
                      <button
                        onClick={() => onNavigate('lesson', exam.id)}
                        className="text-xs font-bold text-gray-700 hover:text-pink-600 flex items-center space-x-1 transition-colors py-1.5 px-2.5 rounded-lg hover:bg-pink-50"
                        title="Solve interactively online"
                      >
                        <BookOpen className="w-3.5 h-3.5 mr-1 text-pink-600" />
                        <span>Solve Online</span>
                      </button>
                    )}

                    {/* PDF Download Buttons */}
                    <div className="flex items-center space-x-2">
                      {/* Student Edition (Exam Only) */}
                      <button
                        onClick={() => handleDownloadPdf(exam, 'student_exam')}
                        disabled={isDownloadingThis}
                        className="px-3 py-1.5 text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all flex items-center space-x-1.5 disabled:opacity-50"
                        title="Download blank printable exam for students"
                      >
                        {isDownloadingThis && downloadingType === 'student_exam' ? (
                          <Loader2 className="w-3.5 h-3.5 animate-spin text-gray-600" />
                        ) : (
                          <Download className="w-3.5 h-3.5 text-gray-600" />
                        )}
                        <span>Student PDF</span>
                      </button>

                      {/* Teacher Edition (With Answers & Explanations) */}
                      <button
                        onClick={() => handleDownloadPdf(exam, 'teacher_key')}
                        disabled={isDownloadingThis}
                        className="px-3 py-1.5 text-xs font-bold text-white bg-pink-600 hover:bg-pink-700 rounded-xl transition-all shadow-sm shadow-pink-200 flex items-center space-x-1.5 disabled:opacity-50"
                        title="Download exam with full answer key & step-by-step solutions"
                      >
                        {isDownloadingThis && downloadingType === 'teacher_key' ? (
                          <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
                        ) : (
                          <FileCheck className="w-3.5 h-3.5 text-white" />
                        )}
                        <span>Answers & Key</span>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-2xl border border-dashed border-gray-300">
            <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-gray-700">No PDF exams found matching your criteria</h3>
            <p className="text-xs text-gray-500 mt-1">
              Try adjusting your search terms or course category filter.
            </p>
            <button
              onClick={() => { setSelectedCourse('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 text-xs font-bold text-pink-600 bg-pink-50 hover:bg-pink-100 rounded-xl transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* SEO Informational Footer Content */}
      <footer className="mt-12 p-8 bg-gray-50 rounded-2xl border border-gray-200 text-xs text-gray-600 space-y-4">
        <h3 className="text-sm font-black text-gray-800">
          About Math PDF Exams Library - Eng. Rabaa Farrag
        </h3>
        <p className="leading-relaxed">
          Welcome to the official <strong>PDF Math Exams repository</strong> designed specifically for American Diploma students preparing for <strong>EST 1 (Egyptian Scholastic Test 1)</strong>, <strong>EST 2</strong>, <strong>Digital SAT (DSAT)</strong>, and <strong>ACT 1 & ACT 2 Math</strong>. 
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-1">EST 1 Math Past Papers</h4>
            <p className="text-[11px] text-gray-500">
              Download complete exam models for EST 1 March 2026, January 2026, October 2021, and May 2021 with thorough step-by-step mathematical reasoning.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-1">DSAT Math Practice Tests</h4>
            <p className="text-[11px] text-gray-500">
              Printable Digital SAT math full modules covering Advanced Math, Problem Solving and Data Analysis, and Geometry & Trigonometry.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-1">Full Teacher Solutions</h4>
            <p className="text-[11px] text-gray-500">
              Every PDF comes with a verified Teacher Key edition showing mathematical proofs, formulas, and time-saving shortcuts.
            </p>
          </div>
        </div>
      </footer>

      {selectedExamAnalysis && (
        <ExamTopicAnalysisModal
          isOpen={!!selectedExamAnalysis}
          onClose={() => setSelectedExamAnalysis(null)}
          examTitle={selectedExamAnalysis.title}
          lessonId={selectedExamAnalysis.lessonId}
          lessons={lessons}
        />
      )}
    </main>
  );
};

export default PdfExamsPage;
