import { PWAInstallPrompt } from "./PWAInstallPrompt";

import React from 'react';
import { LessonId, View, User } from '../types';
import { PanelLeftClose, Bookmark, BarChart3, Baby, Users, BrainCircuit, BookOpen, CreditCard, FileText, Calendar, Home as HomeIcon, LogOut, Wand2, Crown, Sparkles, Database, LineChart, History, Trash2, Trophy, FileDown } from 'lucide-react';

type NavTone = 'brand' | 'dark' | 'danger' | 'warm';

// One visual system for every nav item; the tone keeps each section's colour identity.
const NAV_TONES: Record<NavTone, { active: string; hover: string }> = {
  brand: { active: 'bg-gradient-to-r from-pink-600 to-indigo-600 text-white shadow-lg shadow-pink-200/70', hover: 'hover:bg-pink-50 hover:text-pink-700' },
  dark: { active: 'bg-gray-900 text-white shadow-lg shadow-gray-300/70', hover: 'hover:bg-gray-100 hover:text-gray-900' },
  danger: { active: 'bg-red-700 text-white shadow-lg shadow-red-200/70', hover: 'hover:bg-red-50 hover:text-red-700' },
  warm: { active: 'bg-orange-500 text-white shadow-lg shadow-orange-200/70', hover: 'hover:bg-orange-50 hover:text-orange-600' },
};

interface SidebarProps {
  activeView: View;
  activeLessonId: LessonId | null;
  onNavigate: (view: View, lessonId?: LessonId) => void;
  onClose?: () => void;
  currentUser: User | null;
  onLogout?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, onNavigate, onClose, currentUser, onLogout }) => {
  const isParent = currentUser?.role === 'parent';
  const isAdmin = currentUser?.role === 'admin' || currentUser?.role === 'co-admin';
  const isPremium = currentUser?.tier === 'premium';
  const isGuest = currentUser?.username.startsWith('guest_');

  const NavButton = ({ view, icon: Icon, label, description, tone = 'brand' }: { view: View, icon: any, label: string, description?: string, tone?: NavTone }) => {
    const isActive = activeView === view;
    const styles = NAV_TONES[tone];
    return (
      <button
        onClick={() => onNavigate(view)}
        title={description}
        aria-current={isActive ? 'page' : undefined}
        className={`relative w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/60 ${
          isActive ? styles.active : `text-gray-600 ${styles.hover} hover:translate-x-0.5`
        }`}
      >
        <Icon className={`w-[18px] h-[18px] flex-shrink-0 transition-transform duration-200 ${isActive ? '' : 'group-hover:scale-110'}`} />
        <span className="font-bold tracking-wide text-sm leading-tight min-w-0">{label}</span>
      </button>
    );
  };

  const SectionLabel = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
    <p className={`px-3.5 text-[10px] font-black uppercase tracking-[0.2em] mb-2 mt-1 ${className}`}>{children}</p>
  );

  const Brand = () => (
    <div className="min-w-0">
      <h1 className="text-2xl font-black text-gray-900 leading-none tracking-tight">Achieve 700+</h1>
      <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-600 mt-1">
        with Eng Rabaa Farrag
      </p>
      <div className="h-1 w-20 mt-3 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full opacity-20"></div>
    </div>
  );

  const closeButton = onClose && (
    <button
      onClick={onClose}
      className="text-gray-400 hover:text-pink-600 transition-colors p-1.5 hover:bg-pink-50 rounded-lg -mr-1 flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/60"
      title="Collapse Sidebar"
      aria-label="Collapse Sidebar"
    >
      <PanelLeftClose className="w-5 h-5" />
    </button>
  );

  if (isGuest) {
     return (
        <div className="w-64 h-full bg-white border-r border-gray-200 flex flex-col overflow-y-auto relative z-50">
            <div className="px-6 pt-6 pb-4 flex items-start justify-between gap-2">
                <Brand />
                {closeButton}
            </div>
            <div className="px-5 py-2">
                <div className="bg-purple-50 border border-purple-100 rounded-2xl p-4 text-center">
                    <p className="text-sm font-bold text-purple-800 mb-2">Guest Mode</p>
                    <p className="text-xs text-purple-600 mb-4 leading-relaxed">You are viewing a shared lesson. Sign in to access full features.</p>
                    {onLogout && (
                        <button 
                            onClick={onLogout}
                            className="w-full py-2.5 bg-white border border-purple-200 text-purple-700 rounded-xl text-xs font-bold hover:bg-purple-100 transition-colors"
                        >
                            Sign In / Sign Up
                        </button>
                    )}
                </div>
            </div>
        </div>
     );
  }

  return (
    <div className="w-64 h-full bg-white border-r border-gray-200 flex flex-col relative z-50">
      {/* Header (stays visible while the menu scrolls) */}
      <div className="px-6 pt-6 pb-3 flex items-start justify-between gap-2 flex-shrink-0">
        <Brand />
        {closeButton}
      </div>

      <nav className="flex-1 min-h-0 overflow-y-auto sidebar-scroll px-3 pt-3 pb-4 space-y-0.5">
        {/* SECTION 1: LEARNING CENTER */}
        <div>
          <SectionLabel className="text-pink-600">Learning Center</SectionLabel>
          
          <NavButton view="home" icon={HomeIcon} label="Home" />
          
          <NavButton 
            view="courses" 
            icon={BookOpen} 
            label="Courses" 
            description="View all your enrolled courses and exams"
          />

          {isAdmin && (
            <NavButton 
              view="pdf-exams" 
              icon={FileDown} 
              label="PDF Exams" 
              description="Download all PDF exams and answer keys" 
            />
          )}

          {(isAdmin || isPremium || currentUser?.role === 'student') && (
            <NavButton 
              view="homework" 
              icon={FileText} 
              label="Homework" 
              description="Contains assigned homework" 
            />
          )}

          {isAdmin && (
            <NavButton 
              view="leaderboard" 
              icon={Trophy} 
              label="Leaderboard" 
              description="View top ranking students in each group" 
            />
          )}

          {/* Tools specific to Students/Admins */}
          {!isParent && (
            <>
              {(isAdmin || isPremium || currentUser?.role === 'student') && (
                <NavButton 
                  view="review" 
                  icon={BrainCircuit} 
                  label="Deep Learning" 
                  description="Deep learning button contains all your wrong solved questions" 
                />
              )}

              {(isAdmin || isPremium || currentUser?.role === 'student') && (
                <NavButton 
                  view="bookmarks" 
                  icon={Bookmark} 
                  label="Bookmarks" 
                  description="Show tricky questions" 
                />
              )}

              {isAdmin && (
                <NavButton 
                  view="history" 
                  icon={History} 
                  label="History" 
                  description="View your quiz attempts" 
                />
              )}
            </>
          )}
        </div>

        {/* SECTION 2: TRACKING & FINANCE - Admin Only */}
        {isAdmin && (
          <div className="pt-3 mt-3 border-t border-gray-100">
            <SectionLabel className="text-emerald-600">Tracking & Finance</SectionLabel>

            <NavButton 
              view="reports" 
              icon={BarChart3} 
              label="Reports" 
              description="Shows your progress" 
            />

            <NavButton 
              view="attendance" 
              icon={Calendar} 
              label="Attendance" 
              description="View your attendance record"
            />

            <NavButton 
              view="payment" 
              icon={CreditCard} 
              label="Payment" 
              description="Show your payments" 
            />
          </div>
        )}

        {/* SECTION 3: ADMIN / FAMILY */}
        {(isAdmin || isParent) && (
          <div className="pt-3 mt-3 border-t border-gray-100">
            {isAdmin && (
              <>
                <SectionLabel className="text-orange-600">Admin</SectionLabel>
                <NavButton view="users" icon={Users} label="User Management" tone="dark" />
                <NavButton view="groups" icon={Users} label="Groups" tone="dark" />
                <NavButton view="question-bank" icon={Database} label="Question Bank" tone="dark" />
                <NavButton view="analysis" icon={LineChart} label="Analysis" tone="dark" />
                <NavButton view="book-generator" icon={BookOpen} label="Book Generator" tone="dark" />
                <NavButton view="ai-generator" icon={Wand2} label="AI Content Generator" tone="dark" />
                <NavButton view="bin" icon={Trash2} label="Bin" tone="danger" />
              </>
            )}

            {isParent && (
              <>
                <SectionLabel className="text-orange-600">Family</SectionLabel>
                <NavButton view="parent-dashboard" icon={Baby} label="My Children" tone="warm" />
              </>
            )}
          </div>
        )}
      </nav>

      <PWAInstallPrompt className="px-4 pt-3 border-t border-gray-100 bg-gray-50/50 flex justify-center flex-shrink-0" />
      <div className="p-3 border-t border-gray-100 bg-gray-50/50 flex-shrink-0">
        {currentUser ? (
          <div className="bg-white rounded-xl p-3 flex items-center justify-between border border-gray-100 shadow-sm relative overflow-hidden">
            {/* Visual Indicator for Premium */}
            {isPremium && (
              <div className="absolute top-0 right-0 p-1">
                  <Crown className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              </div>
            )}
            
            <div className="flex items-center space-x-3 overflow-hidden">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-black text-sm flex-shrink-0 border overflow-hidden ${isPremium ? 'bg-gradient-to-br from-yellow-100 to-orange-100 text-orange-700 border-orange-200' : 'bg-gradient-to-br from-pink-100 to-indigo-100 text-pink-700 border-pink-200'}`}>
                {currentUser?.profilePicture ? (
                    <img src={currentUser.profilePicture} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                    currentUser?.name ? currentUser.name.substring(0, 2).toUpperCase() : currentUser?.username.substring(0, 2).toUpperCase()
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center">
                    <p className="text-sm font-bold text-gray-900 truncate">{currentUser?.name || currentUser?.username}</p>
                    {isPremium && <Sparkles className="w-3 h-3 text-yellow-500 ml-1" />}
                </div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider truncate flex items-center">
                  {currentUser?.tier === 'premium' ? (
                      <span className="text-yellow-600">Premium Account</span>
                  ) : (
                      <span>Free Account</span>
                  )}
                </p>
              </div>
            </div>
            {onLogout && (
              <button 
                onClick={onLogout}
                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors ml-1"
                title="Log Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            )}
          </div>
        ) : (
          <button 
            onClick={() => onNavigate('signin' as View)}
            className="w-full bg-gradient-to-r from-pink-600 to-indigo-600 text-white rounded-xl p-3 flex items-center justify-center space-x-2 shadow-lg hover:shadow-pink-200 transition-all font-bold"
          >
            <LogOut className="w-4 h-4 rotate-180" />
            <span>Sign In</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
