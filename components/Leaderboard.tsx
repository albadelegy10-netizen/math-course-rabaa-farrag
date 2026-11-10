import React, { useState, useMemo, useEffect } from 'react';
import { User, StudentGroup, Lesson, View } from '../types';
import { authService } from '../authService';
import { 
  Trophy, 
  CheckCircle2, 
  Search, 
  Users, 
  ChevronRight, 
  TrendingUp, 
  Sparkles,
  Crown,
  BookOpen,
  Filter
} from 'lucide-react';

interface LeaderboardProps {
  currentUser?: User | null;
  lessons?: Lesson[];
  onNavigate?: (view: View, lessonId?: string) => void;
  isEmbedded?: boolean;
}

export interface StudentLeaderboardStats {
  username: string;
  name: string;
  tier: string;
  course: string;
  groupNames: string[];
  totalAssignedHw: number;
  completedHwCount: number;
  hwCompletionRate: number;
  avgExamScore: number;
  highestExamScore: number;
  totalQuizzesTaken: number;
  totalQuestionsAnswered: number;
  totalQuestionsCorrect: number;
  accuracyRate: number;
  compositeScore: number; // 0 - 100 rating
  badges: string[];
  isCurrentUser: boolean;
}

type SortMetric = 'composite' | 'exam' | 'homework' | 'questions';

const Leaderboard: React.FC<LeaderboardProps> = ({
  currentUser,
  lessons = [],
  onNavigate,
  isEmbedded = false
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [groups, setGroups] = useState<StudentGroup[]>([]);
  const [selectedGroupId, setSelectedGroupId] = useState<string>('all');
  const [sortMetric, setSortMetric] = useState<SortMetric>('composite');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllRows, setShowAllRows] = useState(!isEmbedded);

  const isAdminOrCoAdmin = currentUser?.role === 'admin' || currentUser?.role === 'co-admin';

  // Visible groups: Admins see all groups, students only see the groups they belong to
  const visibleGroups = useMemo(() => {
    if (isAdminOrCoAdmin) {
      return groups;
    }
    if (currentUser) {
      return groups.filter(g => g.studentUsernames.includes(currentUser.username));
    }
    return [];
  }, [groups, currentUser, isAdminOrCoAdmin]);

  useEffect(() => {
    const allUsers = authService.getAllUsers();
    const allGroups = authService.getGroups();
    setUsers(allUsers);
    setGroups(allGroups);

    // If current user is a student, ensure selectedGroupId defaults to one of their groups
    if (currentUser && currentUser.role === 'student') {
      const userGroups = allGroups.filter(g => g.studentUsernames.includes(currentUser.username));
      if (userGroups.length > 0) {
        setSelectedGroupId(userGroups[0].id);
      } else {
        setSelectedGroupId('none');
      }
    }
  }, [currentUser]);

  // Compute stats for all students
  const studentStatsList: StudentLeaderboardStats[] = useMemo(() => {
    const students = users.filter(u => u.role === 'student' && !u.username.startsWith('guest_'));

    return students.map(student => {
      const studentGroups = groups.filter(g => g.studentUsernames.includes(student.username));
      const groupNames = studentGroups.map(g => g.name);

      // Homework metrics
      const directAssignments = student.assignments || [];
      // Combine with group assignments from groups the student belongs to
      const groupAssignments = studentGroups.flatMap(g => g.assignments || []);
      
      const allUniqueLessonIds = new Set<string>();
      directAssignments.forEach(a => { if (a.lessonId) allUniqueLessonIds.add(a.lessonId); });
      groupAssignments.forEach(a => { if (a.lessonId) allUniqueLessonIds.add(a.lessonId); });

      const totalAssignedHw = Math.max(allUniqueLessonIds.size, directAssignments.length);

      let completedHwCount = 0;
      allUniqueLessonIds.forEach(lessonId => {
        const solvedInHistory = student.history?.some(h => h.lessonId === lessonId);
        const hasManualScore = directAssignments.some(a => a.lessonId === lessonId && a.manualScore !== undefined);
        if (solvedInHistory || hasManualScore) {
          completedHwCount++;
        }
      });

      const hwCompletionRate = totalAssignedHw > 0 
        ? Math.round((completedHwCount / totalAssignedHw) * 100) 
        : (student.history && student.history.length > 0 ? 100 : 0);

      // Exam & Quiz scores
      const attempts = student.history || [];
      const examAttempts = attempts.filter(h => {
        if (h.mode === 'exam') return true;
        const lesson = lessons.find(l => l.id === h.lessonId);
        return lesson?.type === 'exam';
      });

      const avgExamScore = examAttempts.length > 0
        ? Math.round(examAttempts.reduce((acc, h) => acc + h.score, 0) / examAttempts.length)
        : (attempts.length > 0 ? Math.round(attempts.reduce((acc, h) => acc + h.score, 0) / attempts.length) : 0);

      const highestExamScore = attempts.length > 0
        ? Math.max(...attempts.map(h => h.score))
        : 0;

      const totalQuestionsAnswered = attempts.reduce((acc, h) => acc + h.totalQuestions, 0);
      const totalQuestionsCorrect = attempts.reduce((acc, h) => acc + h.correctCount, 0);
      const accuracyRate = totalQuestionsAnswered > 0
        ? Math.round((totalQuestionsCorrect / totalQuestionsAnswered) * 100)
        : 0;

      // Composite rating calculation (0 - 100 points)
      // 40% Homework Completion + 45% Exam Avg + 15% Activity/Consistency
      let compositeScore = 0;
      if (attempts.length > 0 || totalAssignedHw > 0) {
        const hwPoints = (hwCompletionRate / 100) * 40;
        const examPoints = (avgExamScore / 100) * 45;
        const activityPoints = Math.min(15, (attempts.length * 3) + Math.min(totalQuestionsAnswered / 20, 5));
        compositeScore = Math.min(100, Math.round(hwPoints + examPoints + activityPoints));
      }

      // Badges
      const badges: string[] = [];
      if (hwCompletionRate === 100 && totalAssignedHw > 0) badges.push('💯 100% Homework');
      if (avgExamScore >= 90) badges.push('🌟 High Scorer');
      if (totalQuestionsAnswered >= 100) badges.push('🔥 Problem Solver');
      if (accuracyRate >= 85 && totalQuestionsAnswered >= 30) badges.push('🎯 Sniper Accuracy');

      return {
        username: student.username,
        name: student.name || student.username,
        tier: student.tier || 'free',
        course: student.course || (student.courses && student.courses[0]) || 'Math',
        groupNames,
        totalAssignedHw,
        completedHwCount,
        hwCompletionRate,
        avgExamScore,
        highestExamScore,
        totalQuizzesTaken: attempts.length,
        totalQuestionsAnswered,
        totalQuestionsCorrect,
        accuracyRate,
        compositeScore,
        badges,
        isCurrentUser: currentUser?.username === student.username
      };
    });
  }, [users, groups, lessons, currentUser]);

  // Filter students based on group and search query
  const filteredStudents = useMemo(() => {
    let list = studentStatsList;

    if (isAdminOrCoAdmin) {
      if (selectedGroupId !== 'all') {
        const selectedGroup = groups.find(g => g.id === selectedGroupId);
        if (selectedGroup) {
          list = list.filter(s => selectedGroup.studentUsernames.includes(s.username));
        }
      }
    } else {
      // For a student: if they are in groups, only show members of their selected group (or their assigned groups)
      if (visibleGroups.length === 0) {
        return [];
      }
      const currentSelected = visibleGroups.find(g => g.id === selectedGroupId) || visibleGroups[0];
      if (currentSelected) {
        list = list.filter(s => currentSelected.studentUsernames.includes(s.username));
      } else {
        list = [];
      }
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(s => 
        (s.name || '').toLowerCase().includes(q) || 
        (s.username || '').toLowerCase().includes(q) ||
        (s.course || '').toLowerCase().includes(q)
      );
    }

    // Sort by chosen metric
    return [...list].sort((a, b) => {
      if (sortMetric === 'composite') {
        if (b.compositeScore !== a.compositeScore) return b.compositeScore - a.compositeScore;
        if (b.avgExamScore !== a.avgExamScore) return b.avgExamScore - a.avgExamScore;
        return b.hwCompletionRate - a.hwCompletionRate;
      }
      if (sortMetric === 'exam') {
        if (b.avgExamScore !== a.avgExamScore) return b.avgExamScore - a.avgExamScore;
        return b.compositeScore - a.compositeScore;
      }
      if (sortMetric === 'homework') {
        if (b.hwCompletionRate !== a.hwCompletionRate) return b.hwCompletionRate - a.hwCompletionRate;
        return b.compositeScore - a.compositeScore;
      }
      if (sortMetric === 'questions') {
        if (b.totalQuestionsAnswered !== a.totalQuestionsAnswered) return b.totalQuestionsAnswered - a.totalQuestionsAnswered;
        return b.compositeScore - a.compositeScore;
      }
      return 0;
    });
  }, [studentStatsList, selectedGroupId, groups, visibleGroups, isAdminOrCoAdmin, searchQuery, sortMetric]);

  // Find current user's rank in filtered list
  const currentUserRank = useMemo(() => {
    if (!currentUser) return null;
    const index = filteredStudents.findIndex(s => s.username === currentUser.username);
    return index !== -1 ? index + 1 : null;
  }, [filteredStudents, currentUser]);

  const currentUserStats = useMemo(() => {
    if (!currentUser) return null;
    return studentStatsList.find(s => s.username === currentUser.username) || null;
  }, [studentStatsList, currentUser]);

  const topThree = filteredStudents.slice(0, 3);
  const remainingStudents = filteredStudents.slice(3);
  const displayRemaining = showAllRows ? remainingStudents : remainingStudents.slice(0, isEmbedded ? 4 : remainingStudents.length);

  const selectedGroupObj = groups.find(g => g.id === selectedGroupId);

  return (
    <div className={`bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm ${isEmbedded ? 'p-6 md:p-8' : 'p-6 md:p-10 max-w-6xl mx-auto my-6'}`}>
      {/* Header Title Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-100">
        <div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shadow-inner">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-black text-gray-900 tracking-tight">Student Leaderboard</h2>
                <span className="bg-amber-100 text-amber-800 text-xs font-black px-2.5 py-0.5 rounded-full border border-amber-200 flex items-center">
                  <Sparkles className="w-3 h-3 mr-1" /> Live Rankings
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-0.5">
                Top performing students ranked by homework completion rates and exam scores
              </p>
            </div>
          </div>
        </div>

        {/* Quick Navigation Button if Embedded */}
        {isEmbedded && onNavigate && (
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onNavigate('homework')}
              className="px-4 py-2 text-xs font-bold text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 transition-colors flex items-center"
            >
              <BookOpen className="w-3.5 h-3.5 mr-1.5 text-gray-500" />
              My Homework
            </button>
            <button
              onClick={() => onNavigate('courses')}
              className="px-4 py-2 text-xs font-bold text-pink-700 bg-pink-50 hover:bg-pink-100 rounded-xl border border-pink-200 transition-colors flex items-center"
            >
              <TrendingUp className="w-3.5 h-3.5 mr-1.5 text-pink-600" />
              Practice Exams
            </button>
          </div>
        )}
      </div>

      {/* Group Tabs & Filter Bar */}
      <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Groups Horizontal Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {isAdminOrCoAdmin && (
            <button
              onClick={() => setSelectedGroupId('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                selectedGroupId === 'all'
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>All Groups ({studentStatsList.length})</span>
            </button>
          )}

          {visibleGroups.map(group => {
            const isSelected = selectedGroupId === group.id;
            const count = group.studentUsernames.length;
            const isUserInGroup = currentUser && group.studentUsernames.includes(currentUser.username);

            return (
              <button
                key={group.id}
                onClick={() => setSelectedGroupId(group.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center space-x-1.5 border ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-100'
                    : isUserInGroup
                      ? 'bg-indigo-50/70 text-indigo-700 border-indigo-200 hover:bg-indigo-100'
                      : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <span>{group.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-indigo-700 text-indigo-100' : 'bg-gray-200 text-gray-700'}`}>
                  {count}
                </span>
                {isUserInGroup && <span className="w-1.5 h-1.5 rounded-full bg-pink-500 ml-1"></span>}
              </button>
            );
          })}
        </div>

        {/* Sort & Search Controls */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full md:w-auto">
          <div className="relative flex-1 sm:w-48">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search student..."
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
            />
          </div>

          <div className="flex items-center space-x-1.5 bg-gray-50 p-1 rounded-xl border border-gray-200">
            <Filter className="w-3 h-3 text-gray-400 ml-1.5" />
            <select
              value={sortMetric}
              onChange={(e) => setSortMetric(e.target.value as SortMetric)}
              className="text-xs font-bold text-gray-700 bg-transparent py-1 pr-2 focus:outline-none cursor-pointer"
            >
              <option value="composite">Overall Score</option>
              <option value="exam">Exam Score Avg</option>
              <option value="homework">HW Completion %</option>
              <option value="questions">Questions Solved</option>
            </select>
          </div>
        </div>
      </div>

      {/* Current Student Highlight Banner (if in group) */}
      {currentUser && currentUser.role === 'student' && currentUserRank && currentUserStats && (
        <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-pink-50 via-indigo-50 to-purple-50 border border-pink-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white border border-pink-200 shadow-sm flex items-center justify-center font-black text-pink-600 text-lg flex-shrink-0">
              #{currentUserRank}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-pink-700 uppercase tracking-wider">Your Standing</span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs font-medium text-gray-600">
                  {selectedGroupObj ? selectedGroupObj.name : 'Overall Leaderboard'}
                </span>
              </div>
              <p className="text-sm font-bold text-gray-900 mt-0.5">
                Rank <span className="text-pink-600 font-black">#{currentUserRank}</span> of {filteredStudents.length} students
                {currentUserRank === 1 ? (
                  <span className="ml-2 inline-flex items-center text-xs font-black text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">
                    👑 You are leading!
                  </span>
                ) : (
                  <span className="text-xs text-gray-500 font-normal ml-2">
                    (Rating: <strong>{currentUserStats.compositeScore}</strong>/100)
                  </span>
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 self-stretch sm:self-auto justify-between sm:justify-end text-xs font-bold border-t sm:border-t-0 pt-2 sm:pt-0 border-pink-100">
            <div className="text-right">
              <span className="text-gray-400 block text-[10px] uppercase font-bold">HW Rate</span>
              <span className={`text-sm font-black ${currentUserStats.hwCompletionRate >= 80 ? 'text-emerald-600' : 'text-gray-900'}`}>
                {currentUserStats.hwCompletionRate}%
              </span>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-right">
              <span className="text-gray-400 block text-[10px] uppercase font-bold">Exam Avg</span>
              <span className={`text-sm font-black ${currentUserStats.avgExamScore >= 80 ? 'text-indigo-600' : 'text-gray-900'}`}>
                {currentUserStats.avgExamScore}%
              </span>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-right">
              <span className="text-gray-400 block text-[10px] uppercase font-bold">Total Solved</span>
              <span className="text-sm font-black text-purple-600">
                {currentUserStats.totalQuestionsAnswered}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Podium for Top 3 Students */}
      {topThree.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 1st Place - Center or Left in grid */}
          {topThree[0] && (
            <div className="order-1 md:order-2 bg-gradient-to-b from-amber-50/80 to-white p-6 rounded-2xl border-2 border-amber-300 relative shadow-md shadow-amber-100 flex flex-col justify-between">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-950 px-3 py-0.5 rounded-full text-xs font-black uppercase tracking-wider flex items-center shadow-sm">
                <Crown className="w-3.5 h-3.5 mr-1 fill-current" /> 1st Place Champion
              </div>

              <div>
                <div className="flex items-center justify-between mt-2 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-100 border-2 border-amber-300 text-amber-800 flex items-center justify-center font-black text-xl shadow-inner relative">
                    🥇
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-black text-amber-700 uppercase tracking-wider block">Score Index</span>
                    <span className="text-2xl font-black text-amber-600">{topThree[0].compositeScore}</span>
                    <span className="text-xs text-gray-400 font-bold">/100</span>
                  </div>
                </div>

                <h4 className="text-lg font-black text-gray-900 truncate flex items-center gap-1.5">
                  <span>{topThree[0].name}</span>
                  {topThree[0].isCurrentUser && (
                    <span className="text-[10px] bg-pink-100 text-pink-700 px-1.5 py-0.5 rounded font-black">YOU</span>
                  )}
                </h4>
                <p className="text-xs text-gray-500 font-medium truncate mt-0.5">
                  {topThree[0].groupNames.join(', ') || topThree[0].course}
                </p>

                <div className="mt-4 space-y-2.5 pt-3 border-t border-amber-100">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-500" /> HW Completion:
                    </span>
                    <span className="font-bold text-gray-900">{topThree[0].hwCompletionRate}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${topThree[0].hwCompletionRate}%` }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-gray-500 flex items-center">
                      <TrendingUp className="w-3.5 h-3.5 mr-1 text-indigo-500" /> Exam Average:
                    </span>
                    <span className="font-bold text-gray-900">{topThree[0].avgExamScore}%</span>
                  </div>
                </div>
              </div>

              {topThree[0].badges.length > 0 && (
                <div className="mt-4 pt-3 border-t border-amber-100 flex flex-wrap gap-1">
                  {topThree[0].badges.map((b, i) => (
                    <span key={i} className="text-[10px] font-bold bg-amber-100/70 text-amber-800 px-2 py-0.5 rounded-md">
                      {b}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 2nd Place */}
          {topThree[1] && (
            <div className="order-2 md:order-1 bg-gradient-to-b from-slate-50/80 to-white p-6 rounded-2xl border border-slate-300 relative shadow-sm flex flex-col justify-between">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-300 text-slate-800 px-3 py-0.5 rounded-full text-xs font-black uppercase tracking-wider flex items-center shadow-sm">
                🥈 2nd Place
              </div>

              <div>
                <div className="flex items-center justify-between mt-2 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 border-2 border-slate-300 text-slate-700 flex items-center justify-center font-black text-xl shadow-inner">
                    🥈
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Score Index</span>
                    <span className="text-2xl font-black text-slate-700">{topThree[1].compositeScore}</span>
                    <span className="text-xs text-gray-400 font-bold">/100</span>
                  </div>
                </div>

                <h4 className="text-lg font-black text-gray-900 truncate flex items-center gap-1.5">
                  <span>{topThree[1].name}</span>
                  {topThree[1].isCurrentUser && (
                    <span className="text-[10px] bg-pink-100 text-pink-700 px-1.5 py-0.5 rounded font-black">YOU</span>
                  )}
                </h4>
                <p className="text-xs text-gray-500 font-medium truncate mt-0.5">
                  {topThree[1].groupNames.join(', ') || topThree[1].course}
                </p>

                <div className="mt-4 space-y-2.5 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-500" /> HW Completion:
                    </span>
                    <span className="font-bold text-gray-900">{topThree[1].hwCompletionRate}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${topThree[1].hwCompletionRate}%` }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-gray-500 flex items-center">
                      <TrendingUp className="w-3.5 h-3.5 mr-1 text-indigo-500" /> Exam Average:
                    </span>
                    <span className="font-bold text-gray-900">{topThree[1].avgExamScore}%</span>
                  </div>
                </div>
              </div>

              {topThree[1].badges.length > 0 && (
                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1">
                  {topThree[1].badges.map((b, i) => (
                    <span key={i} className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                      {b}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 3rd Place */}
          {topThree[2] && (
            <div className="order-3 bg-gradient-to-b from-amber-50/40 to-white p-6 rounded-2xl border border-amber-200 relative shadow-sm flex flex-col justify-between">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-200 text-amber-900 px-3 py-0.5 rounded-full text-xs font-black uppercase tracking-wider flex items-center shadow-sm">
                🥉 3rd Place
              </div>

              <div>
                <div className="flex items-center justify-between mt-2 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 border-2 border-orange-200 text-orange-700 flex items-center justify-center font-black text-xl shadow-inner">
                    🥉
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-black text-amber-700 uppercase tracking-wider block">Score Index</span>
                    <span className="text-2xl font-black text-amber-700">{topThree[2].compositeScore}</span>
                    <span className="text-xs text-gray-400 font-bold">/100</span>
                  </div>
                </div>

                <h4 className="text-lg font-black text-gray-900 truncate flex items-center gap-1.5">
                  <span>{topThree[2].name}</span>
                  {topThree[2].isCurrentUser && (
                    <span className="text-[10px] bg-pink-100 text-pink-700 px-1.5 py-0.5 rounded font-black">YOU</span>
                  )}
                </h4>
                <p className="text-xs text-gray-500 font-medium truncate mt-0.5">
                  {topThree[2].groupNames.join(', ') || topThree[2].course}
                </p>

                <div className="mt-4 space-y-2.5 pt-3 border-t border-amber-100">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-500" /> HW Completion:
                    </span>
                    <span className="font-bold text-gray-900">{topThree[2].hwCompletionRate}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${topThree[2].hwCompletionRate}%` }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-gray-500 flex items-center">
                      <TrendingUp className="w-3.5 h-3.5 mr-1 text-indigo-500" /> Exam Average:
                    </span>
                    <span className="font-bold text-gray-900">{topThree[2].avgExamScore}%</span>
                  </div>
                </div>
              </div>

              {topThree[2].badges.length > 0 && (
                <div className="mt-4 pt-3 border-t border-amber-100 flex flex-wrap gap-1">
                  {topThree[2].badges.map((b, i) => (
                    <span key={i} className="text-[10px] font-bold bg-orange-50 text-orange-800 px-2 py-0.5 rounded-md">
                      {b}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="mt-8 p-8 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-300">
          <Users className="w-10 h-10 text-gray-400 mx-auto mb-2" />
          <h4 className="text-base font-bold text-gray-700">
            {!isAdminOrCoAdmin && visibleGroups.length === 0 
              ? 'You have not been assigned to a study group yet' 
              : 'No student activity in this group yet'}
          </h4>
          <p className="text-xs text-gray-500 mt-1">
            {!isAdminOrCoAdmin && visibleGroups.length === 0
              ? 'Once your instructor adds you to a class group, you will see your group rankings and standings here.'
              : 'As students complete homework assignments and take practice exams, rankings will appear here automatically.'}
          </p>
        </div>
      )}

      {/* Detailed Rankings Table - Restricted to Admin and Co-Admin */}
      {isAdminOrCoAdmin && remainingStudents.length > 0 && (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <h3 className="text-sm font-black text-gray-700 uppercase tracking-wider">
                Full Standings (Ranks #4+)
              </h3>
              <span className="text-[10px] bg-indigo-50 text-indigo-700 font-bold px-2 py-0.5 rounded-md border border-indigo-200">
                Admin / Co-Admin Only
              </span>
            </div>
            <span className="text-xs text-gray-400 font-medium">
              Showing {displayRemaining.length} of {remainingStudents.length} students
            </span>
          </div>

          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 font-bold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="py-3 px-4 w-12 text-center">Rank</th>
                    <th className="py-3 px-4">Student</th>
                    <th className="py-3 px-4">Group / Course</th>
                    <th className="py-3 px-4 text-center">HW Completion</th>
                    <th className="py-3 px-4 text-center">Exam Avg</th>
                    <th className="py-3 px-4 text-center">Solved</th>
                    <th className="py-3 px-4 text-right">Score Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {displayRemaining.map((student, idx) => {
                    const rank = idx + 4;
                    const isSelf = student.isCurrentUser;

                    return (
                      <tr 
                        key={student.username}
                        className={`transition-colors ${isSelf ? 'bg-pink-50/60 font-bold' : 'hover:bg-gray-50/80 bg-white'}`}
                      >
                        <td className="py-3.5 px-4 text-center">
                          <span className={`inline-flex items-center justify-center w-6 h-6 rounded-lg text-xs font-black ${
                            isSelf ? 'bg-pink-600 text-white' : 'bg-gray-100 text-gray-700'
                          }`}>
                            #{rank}
                          </span>
                        </td>

                        <td className="py-3.5 px-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-100 to-pink-100 text-indigo-700 flex items-center justify-center font-black text-xs flex-shrink-0 border border-indigo-200">
                              {student.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="font-bold text-gray-900">{student.name}</span>
                                {isSelf && (
                                  <span className="text-[9px] bg-pink-600 text-white px-1.5 py-0.2 rounded font-black">
                                    YOU
                                  </span>
                                )}
                              </div>
                              <span className="text-[10px] text-gray-400">@{student.username}</span>
                            </div>
                          </div>
                        </td>

                        <td className="py-3.5 px-4">
                          <span className="inline-block bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-[10px] font-bold">
                            {student.groupNames[0] || student.course}
                          </span>
                        </td>

                        <td className="py-3.5 px-4 text-center">
                          <div className="inline-flex flex-col items-center">
                            <span className={`font-black ${student.hwCompletionRate >= 80 ? 'text-emerald-600' : 'text-gray-700'}`}>
                              {student.hwCompletionRate}%
                            </span>
                            <span className="text-[10px] text-gray-400">
                              ({student.completedHwCount}/{student.totalAssignedHw})
                            </span>
                          </div>
                        </td>

                        <td className="py-3.5 px-4 text-center">
                          <span className={`inline-block px-2 py-0.5 rounded-full font-black ${
                            student.avgExamScore >= 85 
                              ? 'bg-emerald-50 text-emerald-700' 
                              : student.avgExamScore >= 70 
                                ? 'bg-blue-50 text-blue-700' 
                                : 'bg-gray-100 text-gray-700'
                          }`}>
                            {student.avgExamScore > 0 ? `${student.avgExamScore}%` : '-'}
                          </span>
                        </td>

                        <td className="py-3.5 px-4 text-center text-gray-600 font-bold">
                          {student.totalQuestionsAnswered}
                        </td>

                        <td className="py-3.5 px-4 text-right">
                          <span className="text-sm font-black text-indigo-600">
                            {student.compositeScore}
                          </span>
                          <span className="text-[10px] text-gray-400 font-normal">/100</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Toggle view all button if in preview mode */}
            {isEmbedded && remainingStudents.length > 4 && (
              <div className="p-3 bg-gray-50 border-t border-gray-100 text-center">
                <button
                  onClick={() => setShowAllRows(!showAllRows)}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors inline-flex items-center space-x-1"
                >
                  <span>{showAllRows ? 'Show Less' : `View All ${filteredStudents.length} Students in Leaderboard`}</span>
                  <ChevronRight className={`w-3.5 h-3.5 transform transition-transform ${showAllRows ? '-rotate-90' : 'rotate-90'}`} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
