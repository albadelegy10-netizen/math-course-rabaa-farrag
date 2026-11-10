
import React from 'react';
import { View, User, Lesson, CourseCategory } from '../types';
import { getIcon } from '../constants';
import { Sparkles, TrendingUp, Target, BookOpen, CheckCircle2, FileDown } from 'lucide-react';
import TestimonialsSection from './TestimonialsSection';
import Leaderboard from './Leaderboard';

interface HomeProps {
  onNavigate: (view: View) => void;
  currentUser: User | null;
  lessons?: Lesson[];
  onSelectCourse?: (course: CourseCategory) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, currentUser, lessons = [], onSelectCourse }) => {
  return (
    <div className="max-w-6xl mx-auto py-6 sm:py-10 px-4 sm:px-6 space-y-8 sm:space-y-12">
      {/* Hero Section */}
      <div className="bg-white rounded-[2rem] border border-gray-200 p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-lg shadow-pink-50">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center space-x-3 bg-pink-50 text-pink-900 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-pink-200">
            <span className="text-pink-700">{getIcon('GraduationCap', 'w-5 h-5')}</span>
            <span className="tracking-wide uppercase text-xs">For American Diploma Students</span>
          </div>
          
          <div className="mb-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Ready to achieve <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-600">700+</span> in Math
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 tracking-tight mt-1">
              with Eng Rabaa Farrag
            </p>
          </div>

          {/* Third line: Amazing rectangle containing each course name */}
          <div className="mb-8 p-3 sm:p-4 bg-gradient-to-r from-pink-50/60 via-purple-50/40 to-indigo-50/60 border border-purple-200/80 rounded-2xl shadow-sm">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <button
                onClick={() => onSelectCourse ? onSelectCourse('EST1') : onNavigate('courses')}
                className="group flex flex-col items-center justify-center py-3.5 px-3 rounded-xl bg-white border border-purple-200 hover:border-purple-500 hover:shadow-md hover:shadow-purple-100 hover:-translate-y-0.5 transition-all text-center cursor-pointer"
                title="Open EST 1 Course"
              >
                <span className="text-lg sm:text-xl font-black text-purple-700 tracking-wider group-hover:scale-105 transition-transform">
                  EST 1
                </span>
                <span className="text-[11px] font-bold text-purple-500 uppercase tracking-wider mt-0.5">
                  COURSE
                </span>
              </button>

              <button
                onClick={() => onSelectCourse ? onSelectCourse('EST2') : onNavigate('courses')}
                className="group flex flex-col items-center justify-center py-3.5 px-3 rounded-xl bg-white border border-indigo-200 hover:border-indigo-500 hover:shadow-md hover:shadow-indigo-100 hover:-translate-y-0.5 transition-all text-center cursor-pointer"
                title="Open EST 2 Course"
              >
                <span className="text-lg sm:text-xl font-black text-indigo-700 tracking-wider group-hover:scale-105 transition-transform">
                  EST 2
                </span>
                <span className="text-[11px] font-bold text-indigo-500 uppercase tracking-wider mt-0.5">
                  COURSE
                </span>
              </button>

              <button
                onClick={() => onSelectCourse ? onSelectCourse('DSAT') : onNavigate('courses')}
                className="group flex flex-col items-center justify-center py-3.5 px-3 rounded-xl bg-white border border-blue-200 hover:border-blue-500 hover:shadow-md hover:shadow-blue-100 hover:-translate-y-0.5 transition-all text-center cursor-pointer"
                title="Open DSAT Course"
              >
                <span className="text-lg sm:text-xl font-black text-blue-700 tracking-wider group-hover:scale-105 transition-transform">
                  DSAT
                </span>
                <span className="text-[11px] font-bold text-blue-500 uppercase tracking-wider mt-0.5">
                  COURSE
                </span>
              </button>

              <button
                onClick={() => onSelectCourse ? onSelectCourse('ACT1') : onNavigate('courses')}
                className="group flex flex-col items-center justify-center py-3.5 px-3 rounded-xl bg-white border border-emerald-200 hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-100 hover:-translate-y-0.5 transition-all text-center cursor-pointer"
                title="Open ACT Courses"
              >
                <span className="text-lg sm:text-xl font-black text-emerald-700 tracking-wider group-hover:scale-105 transition-transform">
                  ACT
                </span>
                <span className="text-[11px] font-bold text-emerald-500 uppercase tracking-wider mt-0.5">
                  COURSES
                </span>
              </button>
            </div>
          </div>
          
          <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
            The premier learning portal by <strong>Eng Rabaa Farrag</strong>. We provide the <strong>first specialized math course</strong> utilizing advanced <strong>Deep Learning technology</strong> to analyze your performance, identify learning gaps, and personalize your path to a top score.
          </p>
          
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <button 
              onClick={() => onNavigate('courses')}
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold flex items-center justify-center space-x-2 flex-1 sm:flex-none transition-all shadow-lg shadow-pink-200 transform hover:-translate-y-0.5"
            >
              <span>Explore Courses</span>
              <span className="text-xl">→</span>
            </button>
            {(currentUser?.role === 'admin' || currentUser?.role === 'co-admin' || currentUser?.tier === 'premium') && (
              <button 
                onClick={() => onNavigate('pdf-exams')}
                className="bg-indigo-50 hover:bg-indigo-100 text-indigo-900 border border-indigo-200 px-6 py-3.5 sm:py-4 rounded-xl font-bold transition-all flex items-center justify-center space-x-2 flex-1 sm:flex-none"
              >
                <FileDown className="w-5 h-5 text-indigo-600" />
                <span>PDF Exams & Keys</span>
              </button>
            )}
            {(currentUser?.role === 'admin' || currentUser?.role === 'co-admin' || currentUser?.tier === 'premium') && (
              <button 
                onClick={() => onNavigate('homework')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold transition-all shadow-md shadow-emerald-200 flex items-center justify-center space-x-2 flex-1 sm:flex-none transform hover:-translate-y-0.5"
              >
                <span>Go to Homework</span>
                <span className="text-emerald-100">📝</span>
              </button>
            )}
            {(currentUser?.role === 'admin' || currentUser?.role === 'co-admin' || currentUser?.tier === 'premium') && (
              <button 
                onClick={() => onNavigate('leaderboard')}
                className="bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 px-6 py-3.5 sm:py-4 rounded-xl font-bold transition-all flex items-center justify-center space-x-2 flex-1 sm:flex-none"
              >
                <span>🏆 Top Rankings</span>
              </button>
            )}
          </div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-pink-100/50 to-pink-50/50 rounded-full -mr-24 -mt-24 blur-3xl opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-0 right-20 w-32 h-32 bg-blue-50 rounded-full blur-2xl opacity-60 pointer-events-none"></div>
      </div>

      {/* Leaderboard Section for Dashboard - Admin Only */}
      {(currentUser?.role === 'admin' || currentUser?.role === 'co-admin') && (
        <div>
          <Leaderboard 
            currentUser={currentUser} 
            lessons={lessons} 
            onNavigate={onNavigate}
            isEmbedded={true}
          />
        </div>
      )}

      {/* Value Proposition Grid */}
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {/* Deep Learning Card */}
        <div className="bg-gradient-to-br from-indigo-900 to-pink-900 p-6 sm:p-10 rounded-[2rem] text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20">
              <Sparkles className="w-7 h-7 text-yellow-300" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Pioneering Deep Learning</h3>
            <p className="text-indigo-100 mb-6 leading-relaxed">
              Our platform utilizes proprietary AI algorithms to track your mistake patterns across DSAT, EST, and ACT exams. We turn your weaknesses into strengths through targeted, adaptive problem sets tailored specifically for you.
            </p>
            <ul className="space-y-3">
              {[
                'Automated Weakness Detection', 
                'Personalized "Deep Learning" Quizzes', 
                'Dynamic Difficulty Adjustment'
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-sm font-medium text-indigo-200">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-20"></div>
        </div>

        {/* Courses Card */}
        <div className="bg-white p-6 sm:p-10 rounded-[2rem] border border-gray-200 shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive American Diploma Prep</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
               Detailed curriculums covering Algebra, Geometry, Data Analysis, and Advanced Math for all American Diploma boards.
            </p>
            <div className="grid grid-cols-2 gap-3">
               {[
                 { name: 'DSAT', desc: 'Digital SAT Prep' },
                 { name: 'EST 1', desc: 'Literacy 1 Math' },
                 { name: 'EST 2', desc: 'Literacy 2 Math' },
                 { name: 'ACT 1', desc: 'Mathematics' },
                 { name: 'ACT 2', desc: 'Subject Test' },
               ].map((c) => (
                 <div key={c.name} className="flex flex-col bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <span className="font-bold text-gray-900">{c.name}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wide">{c.desc}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats / Trust */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {[
          { label: 'Success Rate', val: '98%', icon: TrendingUp },
          { label: 'Exams Covered', val: '80+', icon: BookOpen },
          { label: 'Total Questions', val: '2500+', icon: Target },
          { label: 'Deep Learning', val: 'Active', icon: Sparkles },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
             <div className="mx-auto w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mb-3 text-pink-600">
               <stat.icon className="w-5 h-5" />
             </div>
             <div className="text-2xl font-black text-gray-900">{stat.val}</div>
             <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      <TestimonialsSection currentUser={currentUser} />

      {/* SEO Optimized Content Footer */}
      <div className="border-t border-gray-100 pt-10 mt-10">
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-6 text-center">Comprehensive Math Preparation Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 opacity-60 hover:opacity-100 transition-opacity">
          <div className="text-xs text-gray-500 leading-loose">
            <p className="mb-4">
              <strong>Best Math Courses for American Diploma:</strong> Our specialized curriculum covers 
              EST 1 March 2026 exam preparation, EST 1 January 2026 exam intensives, and full Digital SAT (DSAT) coverage. 
              Whether you are preparing for EST 1, EST 2, SAT, DSAT, ACT 1, or ACT 2, Eng Rabaa Farrag provides 
              the ultimate toolkit for success with real practice exams from 2025 and 2026.
            </p>
            <p>
              Keywords: EST 1 Math exams, EST 2 Advanced Level, DSAT Practice 2026, ACT Mathematics subject test, American Diploma Math exams Egypt, 
              Math prep Eng Rabaa Farrag, SAT DSAT Geometry masters, Algebra for EST students, EST 1 March 2026 exam, EST 1 January 2026 exam.
            </p>
          </div>
          <div className="text-xs text-gray-500 leading-loose text-right" dir="rtl">
            <p className="mb-4">
              <strong>أفضل كورسات الماث للدبلومة الأمريكية:</strong> نوفر مراجعات شاملة لامتحانات 
              است 1 مارس 2026، است 1 يناير 2026، وتغطية كاملة لامتحانات السات والدي سات. 
              المهندسه رابعه فراج تقدم أقوى الكورسات المتخصصة في الماث لطلاب الدبلومة الأمريكية.
            </p>
            <p>
              كلمات دلالية: كورس ماث اونلاين، است 1، است 2، سات، دي سات، الدبلومة الأمريكية، امتحانات ماث 2025، مراجعة ماث 2026، 
              است 1 مارس 2026، است 1 يناير 2026، مراجعة نهائية ماث است، شرح دروس الماث.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Footer for Google Sitelinks */}
      <div className="mt-16 border-t border-gray-100 pt-10 pb-20">
        <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-10 text-center">Exam Materials & Class Resources</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <button onClick={() => onNavigate('courses')} className="group flex flex-col items-center">
            <span className="text-sm font-bold text-gray-700 group-hover:text-pink-600 transition-colors">EST 1 Math Lessons</span>
            <span className="h-0.5 w-0 group-hover:w-full bg-pink-600 transition-all duration-300 mt-1"></span>
          </button>
          <button onClick={() => onNavigate('courses')} className="group flex flex-col items-center">
            <span className="text-sm font-bold text-gray-700 group-hover:text-pink-600 transition-colors">EST 1 Practice Exams</span>
            <span className="h-0.5 w-0 group-hover:w-full bg-pink-600 transition-all duration-300 mt-1"></span>
          </button>
          <button onClick={() => onNavigate('courses')} className="group flex flex-col items-center">
            <span className="text-sm font-bold text-gray-700 group-hover:text-pink-600 transition-colors">Digital SAT (DSAT)</span>
            <span className="h-0.5 w-0 group-hover:w-full bg-pink-600 transition-all duration-300 mt-1"></span>
          </button>
          <button onClick={() => onNavigate('courses')} className="group flex flex-col items-center">
            <span className="text-sm font-bold text-gray-700 group-hover:text-pink-600 transition-colors">EST 1 March 2026</span>
            <span className="h-0.5 w-0 group-hover:w-full bg-pink-600 transition-all duration-300 mt-1"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
