import React, { useState, useEffect } from 'react';
import { 
  Bell, 
  Check, 
  CheckCheck, 
  Trash2, 
  Clock, 
  BookOpen, 
  FileText, 
  ChevronRight, 
  Calendar,
  Sparkles,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../authService';
import { AppNotification } from '../types';

const NotificationBell: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [filter, setFilter] = useState<'all' | 'homework' | 'unread'>('all');
  const navigate = useNavigate();

  useEffect(() => {
    loadAndSyncNotifications();
    const interval = setInterval(loadAndSyncNotifications, 5000); // sync every 5s
    return () => clearInterval(interval);
  }, []);

  const loadAndSyncNotifications = async () => {
    const user = authService.getCurrentUser();
    if (!user) {
      setNotifications([]);
      return;
    }

    // Auto-check for student homework assignments & due dates
    if (user.role === 'student') {
      try {
        await authService.checkAndSyncStudentNotifications(user.username);
      } catch (e) {
        console.error('Error syncing notifications:', e);
      }
    } else if (user.role === 'admin' || user.role === 'co-admin') {
      try {
        await authService.checkAndSyncAdminNotifications(user.username);
      } catch (e) {
        console.error('Error syncing notifications:', e);
      }
    }

    // Get freshest user data
    const freshUser = authService.getAllUsers().find(u => u.username === user.username) || authService.getCurrentUser();
    if (freshUser && freshUser.notifications) {
      setNotifications([...freshUser.notifications]);
    } else {
      setNotifications([]);
    }
  };

  const unreadCount = notifications.filter(n => n.unread).length;

  const markAllAsRead = async () => {
    const user = authService.getCurrentUser();
    if (user) {
      await authService.markAllNotificationsAsRead(user.username);
      loadAndSyncNotifications();
    }
  };

  const markAsRead = async (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const user = authService.getCurrentUser();
    if (user) {
      await authService.markNotificationAsRead(user.username, id);
      loadAndSyncNotifications();
    }
  };

  const handleDeleteNotification = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const user = authService.getCurrentUser();
    if (user) {
      await authService.deleteNotification(user.username, id);
      loadAndSyncNotifications();
    }
  };

  const handleClearAll = async () => {
    const user = authService.getCurrentUser();
    if (user) {
      await authService.clearAllNotifications(user.username);
      loadAndSyncNotifications();
    }
  };

  const handleNotificationClick = async (notification: AppNotification) => {
    const user = authService.getCurrentUser();
    if (user && notification.unread) {
      await authService.markNotificationAsRead(user.username, notification.id);
    }
    setIsOpen(false);

    if (notification.link) {
      navigate(notification.link);
    } else if (notification.type === 'homework' || notification.type === 'reminder') {
      navigate('/homework');
    } else if (notification.type === 'exam') {
      navigate('/history');
    }
  };

  const formatTime = (ts: number) => {
    const diff = Date.now() - ts;
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'Just now';
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days}d ago`;
    return new Date(ts).toLocaleDateString();
  };

  const filteredNotifications = notifications.filter(n => {
    if (filter === 'unread') return n.unread;
    if (filter === 'homework') return n.type === 'homework' || n.type === 'reminder';
    return true;
  });

  const getNotificationIcon = (type: AppNotification['type']) => {
    switch (type) {
      case 'homework':
        return <BookOpen className="w-4 h-4 text-indigo-600" />;
      case 'reminder':
        return <Clock className="w-4 h-4 text-amber-600" />;
      case 'exam':
        return <FileText className="w-4 h-4 text-rose-600" />;
      default:
        return <Bell className="w-4 h-4 text-blue-600" />;
    }
  };

  const getNotificationBadgeClass = (type: AppNotification['type']) => {
    switch (type) {
      case 'homework':
        return 'bg-indigo-50 border-indigo-100 text-indigo-700';
      case 'reminder':
        return 'bg-amber-50 border-amber-100 text-amber-700';
      case 'exam':
        return 'bg-rose-50 border-rose-100 text-rose-700';
      default:
        return 'bg-blue-50 border-blue-100 text-blue-700';
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-3 bg-white rounded-2xl shadow-md border border-gray-100 text-gray-700 hover:text-indigo-600 hover:border-indigo-100 hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/20 active:scale-95"
        aria-label="Notifications"
        title="Notifications"
      >
        <Bell className={`w-5 h-5 transition-transform ${unreadCount > 0 ? 'rotate-12 text-indigo-600' : ''}`} />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 min-w-[20px] px-1 items-center justify-center rounded-full bg-rose-500 text-[11px] font-bold text-white shadow-sm ring-2 ring-white animate-bounce">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for click outside */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-3 w-80 sm:w-[420px] bg-white rounded-3xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
            >
              {/* Header */}
              <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-gray-50/80 to-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                    <Bell className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base leading-tight">Notifications</h3>
                    <p className="text-xs text-gray-500">
                      {unreadCount > 0 ? `${unreadCount} unread update${unreadCount > 1 ? 's' : ''}` : 'All caught up'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className="px-2.5 py-1 text-xs font-semibold text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors flex items-center gap-1"
                      title="Mark all as read"
                    >
                      <CheckCheck className="w-3.5 h-3.5" />
                      <span>Read all</span>
                    </button>
                  )}
                  {notifications.length > 0 && (
                    <button
                      onClick={handleClearAll}
                      className="p-1.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                      title="Clear all notifications"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center px-4 pt-2.5 pb-2 bg-gray-50/40 border-b border-gray-100 gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                    filter === 'all'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  All ({notifications.length})
                </button>
                <button
                  onClick={() => setFilter('homework')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all flex items-center gap-1 ${
                    filter === 'homework'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <BookOpen className="w-3 h-3" />
                  Homework & Due ({notifications.filter(n => n.type === 'homework' || n.type === 'reminder').length})
                </button>
                <button
                  onClick={() => setFilter('unread')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                    filter === 'unread'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Unread ({unreadCount})
                </button>
              </div>

              {/* Notification List */}
              <div className="max-h-[420px] overflow-y-auto divide-y divide-gray-50">
                {filteredNotifications.length > 0 ? (
                  filteredNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      onClick={() => handleNotificationClick(notification)}
                      className={`p-4 transition-all cursor-pointer group hover:bg-indigo-50/30 flex items-start gap-3 relative ${
                        notification.unread ? 'bg-indigo-50/20' : 'bg-white'
                      }`}
                    >
                      {/* Icon */}
                      <div className={`p-2 rounded-xl border flex-shrink-0 mt-0.5 ${getNotificationBadgeClass(notification.type)}`}>
                        {getNotificationIcon(notification.type)}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className={`text-sm font-bold truncate ${notification.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                            {notification.title}
                          </h4>
                          {notification.unread && (
                            <span className="w-2 h-2 rounded-full bg-indigo-600 flex-shrink-0"></span>
                          )}
                        </div>

                        <p className="text-xs text-gray-600 mt-1 leading-relaxed line-clamp-2">
                          {notification.message}
                        </p>

                        {/* Metadata tags */}
                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                          {notification.dueDate && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                              <Calendar className="w-2.5 h-2.5 mr-1" /> Due: {notification.dueDate}
                            </span>
                          )}
                          <span className="text-[11px] text-gray-400 font-medium">
                            {formatTime(notification.time)}
                          </span>
                          {(notification.type === 'homework' || notification.type === 'reminder') && (
                            <span className="text-[11px] font-bold text-indigo-600 ml-auto flex items-center group-hover:translate-x-0.5 transition-transform">
                              Open Homework <ChevronRight className="w-3 h-3 ml-0.5" />
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Quick Actions (Hover) */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 ml-1 flex-shrink-0">
                        {notification.unread && (
                          <button
                            onClick={(e) => markAsRead(notification.id, e)}
                            className="p-1 text-gray-400 hover:text-indigo-600 hover:bg-white rounded-md shadow-xs transition-colors"
                            title="Mark as read"
                          >
                            <Check className="w-3.5 h-3.5" />
                          </button>
                        )}
                        <button
                          onClick={(e) => handleDeleteNotification(notification.id, e)}
                          className="p-1 text-gray-400 hover:text-rose-600 hover:bg-white rounded-md shadow-xs transition-colors"
                          title="Delete"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-10 text-center flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400 mb-3">
                      <Sparkles className="w-6 h-6 text-indigo-400" />
                    </div>
                    <p className="text-gray-900 font-bold text-sm">No notifications found</p>
                    <p className="text-gray-400 text-xs mt-1 max-w-[220px]">
                      {filter === 'unread' 
                        ? "You have read all your notifications!" 
                        : "You're all caught up with your homework and due dates."}
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              {notifications.length > 0 && (
                <div className="p-3 bg-gray-50/70 border-t border-gray-100 text-center">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      navigate('/homework');
                    }}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1 transition-colors"
                  >
                    View All Homework Tasks <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotificationBell;
