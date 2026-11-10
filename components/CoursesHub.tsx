
import React, { useMemo } from 'react';
import { CourseCategory, User, View, LessonId } from '../types';
import { Calculator, Sigma, Pi, FunctionSquare, Triangle, Home, ChevronRight, Hexagon } from 'lucide-react';
import { authService } from '../authService';

interface CoursesHubProps {
  onSelectCourse: (course: CourseCategory) => void;
  currentUser: User;
  onNavigate?: (view: View, lessonId?: LessonId) => void;
}

const CoursesHub: React.FC<CoursesHubProps> = ({ onSelectCourse, currentUser, onNavigate }) => {
  const allCourses: { id: CourseCategory; label: string; color: string; icon: React.ElementType; image: string }[] = [
    { 
      id: 'DSAT', 
      label: 'DSAT COURSE', 
      color: 'from-blue-600 to-blue-900', 
      icon: Calculator,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop'
    },
    { 
      id: 'EST1', 
      label: 'EST1 COURSE', 
      color: 'from-purple-600 to-purple-900', 
      icon: Sigma,
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop'
    },
    { 
      id: 'EST2', 
      label: 'EST2 COURSE', 
      color: 'from-indigo-600 to-indigo-900', 
      icon: Pi,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop'
    },
    { 
      id: 'ACT1', 
      label: 'ACT1 COURSE', 
      color: 'from-emerald-600 to-emerald-900', 
      icon: FunctionSquare,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop'
    },
    { 
      id: 'ACT2', 
      label: 'ACT2 COURSE', 
      color: 'from-orange-600 to-orange-900', 
      icon: Triangle,
      image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1000&auto=format&fit=crop'
    },
    { 
      id: 'GEOMETRY', 
      label: 'GEOMETRY', 
      color: 'from-pink-600 to-pink-900', 
      icon: Hexagon,
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1000&auto=format&fit=crop'
    },
  ];

  const filteredCourses = useMemo(() => {
    // 1. Admin/Co-Admin: See everything
    if (currentUser.role === 'admin' || currentUser.role === 'co-admin') {
      return allCourses;
    }

    // 2. Student: See enrolled courses (check both courses array and legacy course string)
    if (currentUser.role === 'student') {
      const userCourses = currentUser.courses || (currentUser.course ? [currentUser.course] : []);
      return allCourses.filter(c => userCourses.includes(c.id));
    }

    // 3. Parent: See unique courses of their children
    if (currentUser.role === 'parent' && currentUser.children && currentUser.children.length > 0) {
      const allUsers = authService.getAllUsers();
      const myChildren = allUsers.filter(u => currentUser.children?.includes(u.username));
      
      const childCourseIds = new Set<string>();
      myChildren.forEach(child => {
          if (child.courses) {
              child.courses.forEach(c => childCourseIds.add(c));
          } else if (child.course) {
              childCourseIds.add(child.course);
          }
      });
      
      return allCourses.filter(c => childCourseIds.has(c.id));
    }

    // Fallback: If no role match or no course, show nothing
    return [];
  }, [currentUser, allCourses]);

  const handleHome = () => {
    if (onNavigate) onNavigate('home');
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
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
            Courses
         </span>
      </nav>

      {filteredCourses.length === 0 ? (
        <div className="max-w-7xl mx-auto py-20 px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">No Courses Available</h2>
            <p className="text-gray-500 max-w-lg mx-auto">
            {currentUser.role === 'student' 
                ? "You are not currently enrolled in any course. Please contact the administrator."
                : "No courses found linked to your profile."}
            </p>
        </div>
      ) : (
        <>
            <div className="mb-10 text-center">
                <span className="bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">
                    American Diploma Program
                </span>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Select Your Course</h2>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                    Choose your specialized path. We offer targeted preparation for EST 1, EST 2, DSAT, ACT 1, ACT 2, and Geometry exams.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                <button
                    key={course.id}
                    onClick={() => onSelectCourse(course.id)}
                    className="relative h-72 rounded-3xl overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                    {/* Background Image with Zoom Effect */}
                    <div className="absolute inset-0 bg-gray-900">
                        <img 
                            src={course.image} 
                            alt={course.label} 
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110" 
                        />
                    </div>
                    
                    {/* Gradient Overlay for Text Readability */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300 mix-blend-multiply`}></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-6">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/30 shadow-inner">
                            <course.icon className="w-10 h-10 text-white drop-shadow-md" />
                        </div>
                        <h3 className="text-3xl font-black tracking-widest text-center drop-shadow-md">{course.label}</h3>
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                            <span className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider border border-white/40">
                                View Content
                            </span>
                        </div>
                    </div>
                </button>
                ))}
            </div>
        </>
      )}
    </div>
  );
};

export default CoursesHub;
