
import { User, LessonId, Question, Mistake, QuizAttempt, Bookmark, PaymentRecord, AttendanceRecord, Assignment, CourseType, StudentGroup, GroupAssignment, AppNotification } from './types';
import { db, auth, googleProvider } from './firebase';
import { collection, doc, setDoc, deleteDoc, getDoc, onSnapshot, writeBatch } from 'firebase/firestore';
import { signInWithPopup } from 'firebase/auth';

const STORAGE_KEY = 'math_course_users';
const CURRENT_USER_KEY = 'math_course_current_user';
const GROUPS_KEY = 'math_course_groups';
const FREE_HOMEWORK_KEY = 'math_course_free_homework';

// In-memory cache to sync with localStorage and Firebase
let cachedUsers: User[] = [];
let cachedGroups: StudentGroup[] = [];
let cachedFreeHomework: Assignment[] = [];
let authSubscribers: (() => void)[] = [];
let isAuthRealtimeInitialized = false;
let usersUnsubscribe: (() => void) | null = null;
let groupsUnsubscribe: (() => void) | null = null;
let freeHomeworkUnsubscribe: (() => void) | null = null;

// Eagerly restore previously fetched users, students, groups, and assignments from local storage
try {
  const storedUsers = localStorage.getItem(STORAGE_KEY);
  if (storedUsers) {
    const parsed = JSON.parse(storedUsers);
    if (Array.isArray(parsed)) cachedUsers = parsed;
  }
  const storedGroups = localStorage.getItem(GROUPS_KEY);
  if (storedGroups) {
    const parsed = JSON.parse(storedGroups);
    if (Array.isArray(parsed)) cachedGroups = parsed;
  }
  const storedFreeHomework = localStorage.getItem(FREE_HOMEWORK_KEY);
  if (storedFreeHomework) {
    const parsed = JSON.parse(storedFreeHomework);
    if (Array.isArray(parsed)) cachedFreeHomework = parsed;
  }
} catch (e) {
  console.warn("Initial localStorage auth cache load:", e);
}

const isPlainObject = (val: any): boolean => {
  if (typeof val !== 'object' || val === null) return false;
  const proto = Object.getPrototypeOf(val);
  return proto === null || proto === Object.prototype;
};

export const deepSanitize = (obj: any, pathCache = new WeakSet()): any => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  // Handle circular references
  if (pathCache.has(obj)) {
    return '[Circular]';
  }
  pathCache.add(obj);

  // Handle DOM Nodes
  if (typeof Node !== 'undefined' && obj instanceof Node) {
    pathCache.delete(obj);
    return '[DOM Node]';
  }

  if (Array.isArray(obj)) {
    const arr = [];
    for (let i = 0; i < obj.length; i++) {
        arr.push(deepSanitize(obj[i], pathCache));
    }
    pathCache.delete(obj);
    return arr;
  }

  if (isPlainObject(obj)) {
    const res: any = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
         res[key] = deepSanitize(obj[key], pathCache);
      }
    }
    pathCache.delete(obj);
    return res;
  }

  // Handle other object types (Date, etc) - keeping it simple
  pathCache.delete(obj);
  if (obj instanceof Date) return obj.toISOString();
  
  // If it's a special object we don't know how to handle, return undefined to skip it in stringification
  return undefined; 
};

// Helper to sanitize undefined values before sending to Firestore
const sanitize = (obj: any): any => {
  try {
    return JSON.parse(safeStringify(deepCleanForFirebase(obj)));
  } catch (e) {
    return {};
  }
};

export const deepCleanForFirebase = (obj: any, seen = new WeakSet()): any => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Handle Circular References
  if (seen.has(obj)) {
    return undefined; // Break circle
  }

  // Ignore DOM elements, Events, Window
  if (
    typeof Window !== 'undefined' && obj instanceof Window ||
    typeof Node !== 'undefined' && obj instanceof Node ||
    typeof Event !== 'undefined' && obj instanceof Event
  ) {
    return undefined; // Removed from JSON
  }

  if (obj instanceof Date) {
    return obj.toISOString();
  }

  seen.add(obj);

  // If array, map elements and clean
  if (Array.isArray(obj)) {
    const cleanArr = obj.map(item => deepCleanForFirebase(item, seen));
    seen.delete(obj);
    return cleanArr;
  }

  // If plain object or simple class, deep clean fields
  const cleanObj: any = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const val = deepCleanForFirebase(obj[key], seen);
      if (val !== undefined) {
         cleanObj[key] = val;
      }
    }
  }

  seen.delete(obj);
  return cleanObj;
};

export const safeStringify = (obj: any): string => {
  try {
    const cache = new Set();
    return JSON.stringify(obj, (_key, value) => {
      // Ignore DOM elements or Window to avoid massive objects
      if (
        value !== null && typeof value === 'object' &&
        ((typeof Node !== 'undefined' && value instanceof Node) ||
        (typeof Window !== 'undefined' && value instanceof Window) ||
        (typeof Event !== 'undefined' && value instanceof Event))
      ) {
         return undefined;
      }
      
      if (typeof value === 'object' && value !== null) {
        if (cache.has(value)) {
          return undefined; // Discard circular reference
        }
        cache.add(value);
      }
      return value;
    });
  } catch (err: any) {
    console.error("Critical stringify error fallback:", err?.message || err);
    return "{}";
  }
};

const handleFirebaseError = (error: any, context: string) => {
  // If permission is denied, it usually means the app is running in 'demo' or 'local' mode
  // without backend rules configured. We warn but don't error, allowing local storage to work.
  if (error?.code === 'permission-denied' || error?.message?.includes('Missing or insufficient permissions')) {
    console.warn(
        `%c[${context}] Firebase Permission Locked`, 
        'color: orange; font-weight: bold; font-size: 12px;'
    );
    console.warn(
        `To unlock: Go to Firebase Console > Firestore Database > Rules tab.\n` + 
        `Replace the rules with:\n\n` +
        `rules_version = '2';\n` +
        `service cloud.firestore {\n` +
        `  match /databases/{database}/documents {\n` +
        `    match /{document=**} {\n` +
        `      allow read, write: if true;\n` +
        `    }\n` +
        `  }\n` +
        `}`
    );
  } else {
    console.error(`[${context}] Error:`, error?.message || error);
  }
};

const safeLocalSetItem = (key: string, value: string) => {
  try {
    // Proactively compress if payload is huge (e.g. > 3.5MB) to avoid browser quota warnings
    if (key === STORAGE_KEY && value.length > 3500000) {
        throw new Error("QuotaLimitReached");
    }
    localStorage.setItem(key, value);
  } catch (e) {
    if (key === STORAGE_KEY) {
       try {
           // If users cache is too large, compress local storage backup.
           // Keep full data for current user, but strip heavy arrays (history, mistakes) from others.
           const cu = localStorage.getItem(CURRENT_USER_KEY);
           let activeUser = cu ? JSON.parse(cu).username : '';
           
           const trimmed = cachedUsers.map(u => {
               if (u.username === 'admin' || u.username === activeUser) return u;
               // Strip heavy fields from other users for local backup
               return { ...u, history: [], progress: {}, mistakes: [], bookmarks: [], attendance: [], profilePicture: undefined };
           });
           
           localStorage.setItem(key, safeStringify(trimmed));
       } catch (err) {
           console.error("Critical LocalStorage failure. Disabling local persistence cache.");
       }
    } else {
       console.warn(`[LocalStorage] Failed to set ${key}. Data is saved to Cloud.`);
    }
  }
};

export const authService = {
  // --- SYNC & INIT ---
  
  // Helper to ensure default admin exists
  ensureDefaultAdmin: () => {
    if (!cachedUsers.some(u => u.username === 'admin')) {
        const adminUser: User = {
            username: 'admin',
            password: 'admin',
            name: 'Administrator',
            role: 'admin',
            tier: 'premium',
            course: 'DSAT',
            courses: ['DSAT', 'EST1', 'EST2', 'ACT1', 'ACT2', 'GEOMETRY'],
            progress: {},
            bookmarks: [],
            mistakes: [],
            history: [],
            isActive: true,
            pricePerSession: 0,
            assignments: [],
            payments: [],
            attendance: []
        };
        cachedUsers.push(adminUser);
        safeLocalSetItem(STORAGE_KEY, safeStringify(cachedUsers));
        
        // Try to sync to Firestore silently
        try {
            setDoc(doc(db, 'users', 'admin'), sanitize(adminUser)).catch(() => console.log("Admin sync skipped"));
        } catch {
            // Ignore permission errors
        }
    }
  },

  // New method: Load from local storage immediately to unblock UI
  loadFromLocal: (): boolean => {
    try {
      const storedUsers = localStorage.getItem(STORAGE_KEY);
      const storedGroups = localStorage.getItem(GROUPS_KEY);
      const storedFreeHomework = localStorage.getItem(FREE_HOMEWORK_KEY);
      
      let hasData = false;

      if (storedUsers) {
        cachedUsers = JSON.parse(storedUsers);
        hasData = true;
      }
      
      if (storedGroups) {
        cachedGroups = JSON.parse(storedGroups);
      }

      if (storedFreeHomework) {
        cachedFreeHomework = JSON.parse(storedFreeHomework);
      }
      
      authService.ensureDefaultAdmin();
      
      return hasData;
    } catch (e) {
      console.error("Failed to load from local storage", (e as any)?.message || e);
      return false;
    }
  },

  subscribe: (callback: () => void) => {
    authSubscribers.push(callback);
    return () => {
      authSubscribers = authSubscribers.filter(cb => cb !== callback);
    };
  },

  unsubscribeRealtime: () => {
    if (usersUnsubscribe) { usersUnsubscribe(); usersUnsubscribe = null; }
    if (groupsUnsubscribe) { groupsUnsubscribe(); groupsUnsubscribe = null; }
    if (freeHomeworkUnsubscribe) { freeHomeworkUnsubscribe(); freeHomeworkUnsubscribe = null; }
    isAuthRealtimeInitialized = false;
  },

  notifySubscribers: () => {
    authSubscribers.forEach(cb => {
      try { cb(); } catch (err) { console.error("Error in auth subscriber:", err); }
    });
  },

  syncWithFirebase: async (): Promise<boolean> => {
    if (isAuthRealtimeInitialized) {
      return true;
    }

    return new Promise((resolve) => {
      let resolved = false;
      const done = () => {
        if (!resolved) {
          resolved = true;
          resolve(true);
        }
      };

      // Fallback timer so UI renders immediately from cache if offline or slow network
      const fallbackTimer = setTimeout(done, 1500);

      try {
        isAuthRealtimeInitialized = true;

        // 1. Real-time Users / Students listener using onSnapshot (replaces getDocs)
        usersUnsubscribe = onSnapshot(collection(db, 'users'), (usersSnap) => {
          clearTimeout(fallbackTimer);
          const remoteUsers: User[] = [];
          usersSnap.forEach((docSnap) => {
            remoteUsers.push(docSnap.data() as User);
          });

          // Update Local Cache
          cachedUsers = remoteUsers;
          authService.ensureDefaultAdmin(); // Ensure admin exists even after sync
          safeLocalSetItem(STORAGE_KEY, safeStringify(cachedUsers));

          // Refresh current user session if currently logged in
          const current = authService.getCurrentUser();
          if (current && !current.username.startsWith('guest_')) {
            const freshUser = cachedUsers.find(u => u.username === current.username);
            if (freshUser) {
              safeLocalSetItem(CURRENT_USER_KEY, safeStringify(freshUser));
            }
          }

          authService.notifySubscribers();
          done();
        }, (error) => {
          handleFirebaseError(error, "Users onSnapshot");
          if (usersUnsubscribe) {
            try { usersUnsubscribe(); } catch (_) {}
            usersUnsubscribe = null;
          }
          const storedUsers = localStorage.getItem(STORAGE_KEY);
          if (storedUsers) {
            try { cachedUsers = JSON.parse(storedUsers); } catch (_) {}
          }
          authService.ensureDefaultAdmin();
          done();
        });

        // 2. Real-time Groups listener using onSnapshot (replaces getDocs)
        groupsUnsubscribe = onSnapshot(collection(db, 'groups'), (groupsSnap) => {
          const remoteGroups: StudentGroup[] = [];
          groupsSnap.forEach((docSnap) => {
            remoteGroups.push(docSnap.data() as StudentGroup);
          });

          cachedGroups = remoteGroups;
          safeLocalSetItem(GROUPS_KEY, safeStringify(cachedGroups));
          authService.notifySubscribers();
        }, (error) => {
          handleFirebaseError(error, "Groups onSnapshot");
          if (groupsUnsubscribe) {
            try { groupsUnsubscribe(); } catch (_) {}
            groupsUnsubscribe = null;
          }
          const storedGroups = localStorage.getItem(GROUPS_KEY);
          if (storedGroups) {
            try { cachedGroups = JSON.parse(storedGroups); } catch (_) {}
          }
        });

        // 3. Real-time Free Homework listener using onSnapshot (replaces getDoc)
        freeHomeworkUnsubscribe = onSnapshot(doc(db, 'system', 'free_homework'), (sysDocSnap) => {
          if (sysDocSnap.exists()) {
            cachedFreeHomework = sysDocSnap.data()?.assignments || [];
            safeLocalSetItem(FREE_HOMEWORK_KEY, safeStringify(cachedFreeHomework));
            authService.notifySubscribers();
          }
        }, (error) => {
          console.warn("Could not listen to free homework from Firebase, using cache.", error);
          if (freeHomeworkUnsubscribe) {
            try { freeHomeworkUnsubscribe(); } catch (_) {}
            freeHomeworkUnsubscribe = null;
          }
        });

      } catch (error) {
        handleFirebaseError(error, "Sync Setup");
        const storedUsers = localStorage.getItem(STORAGE_KEY);
        if (storedUsers) {
          try { cachedUsers = JSON.parse(storedUsers); } catch (_) {}
        }
        const storedGroups = localStorage.getItem(GROUPS_KEY);
        if (storedGroups) {
          try { cachedGroups = JSON.parse(storedGroups); } catch (_) {}
        }
        authService.ensureDefaultAdmin();
        done();
      }
    });
  },

  // --- READS (Synchronous from Cache) ---
  getAllUsers: (): User[] => {
    if (cachedUsers.length === 0) {
       const stored = localStorage.getItem(STORAGE_KEY);
       if (stored) cachedUsers = JSON.parse(stored);
    }
    
    // Auto-cleanup all users
    let madeChanges = false;
    cachedUsers = cachedUsers.map(u => {
        if (u.assignments && u.assignments.length > 0) {
            const uniqueMap = new Map();
            let hasDuplicates = false;
            
            // Prefer the latest assigned Date or first observed
            u.assignments.forEach(a => {
                if (uniqueMap.has(a.lessonId)) {
                    hasDuplicates = true;
                } else {
                    uniqueMap.set(a.lessonId, a);
                }
            });
            
            if (hasDuplicates) {
                madeChanges = true;
                const updatedUser = { ...u, assignments: Array.from(uniqueMap.values()) };
                // Async update to DB
                authService.updateUser(updatedUser).catch(e => console.error("Update error:", e?.message || e));
                return updatedUser;
            }
        }
        return u;
    });

    if (madeChanges) {
        safeLocalSetItem(STORAGE_KEY, safeStringify(cachedUsers));
    }

    return cachedUsers;
  },

  getCurrentUser: (): User | null => {
    try {
      const stored = localStorage.getItem(CURRENT_USER_KEY);
      // Ensure we return the latest version from cache if possible
      if (stored) {
        const simpleUser = JSON.parse(stored);
        const freshUser = cachedUsers.find(u => u.username === simpleUser.username);
        let finalUser = freshUser || simpleUser;
        
        // Auto-cleanup current user duplicates on get
        if (finalUser && finalUser.assignments) {
           const uniqueMap = new Map();
           let hasDuplicates = false;
           finalUser.assignments.forEach((a: Assignment) => {
               if (uniqueMap.has(a.lessonId)) {
                   hasDuplicates = true;
               } else {
                   uniqueMap.set(a.lessonId, a);
               }
           });
           if (hasDuplicates) {
               finalUser = { ...finalUser, assignments: Array.from(uniqueMap.values()) };
               // Async update without blocking
               authService.updateUser(finalUser).catch(e => console.error("Update error:", e?.message || e));
           }
        }
        
        return finalUser;
      }
      return null;
    } catch {
      return null;
    }
  },

  getGroups: (): StudentGroup[] => {
    if (cachedGroups.length === 0) {
        const stored = localStorage.getItem(GROUPS_KEY);
        if (stored) cachedGroups = JSON.parse(stored);
    }
    return cachedGroups;
  },

  getFreeHomework: (): Assignment[] => {
    if (cachedFreeHomework.length === 0) {
        const stored = localStorage.getItem(FREE_HOMEWORK_KEY);
        if (stored) cachedFreeHomework = JSON.parse(stored);
    }
    return cachedFreeHomework;
  },

  assignFreeHomework: async (course: CourseType, lessonIds: string[], availableDate: string): Promise<boolean> => {
      try {
          const newAssignments: Assignment[] = lessonIds.map(lessonId => ({
              id: `hw_free_${Date.now()}_${lessonId}_${Math.random().toString(36).substring(7)}`,
              lessonId,
              course,
              assignedDate: Date.now(),
              availableDate,
              maxAttempts: 3
          }));
          
          cachedFreeHomework = [...cachedFreeHomework, ...newAssignments];
          // Filter duplicates just in case
          cachedFreeHomework = cachedFreeHomework.filter((v, i, a) => a.findIndex(t => (t.lessonId === v.lessonId)) === i);
          
          safeLocalSetItem(FREE_HOMEWORK_KEY, safeStringify(cachedFreeHomework));
          authService.notifySubscribers();
          
          try { await setDoc(doc(db, 'system', 'free_homework'), { assignments: sanitize(cachedFreeHomework) }, { merge: true }); } catch (e) { console.error("Firebase setDoc free_homework error", e); }
          
          // Batch notify free students without sequential blocking
          const freeStudents = cachedUsers.filter(u => u.role === 'student' && (!u.tier || u.tier === 'free'));
          const modifiedFreeStudents: User[] = [];
          const notifNow = Date.now();
          for (const s of freeStudents) {
            if (!s.notifications) s.notifications = [];
            s.notifications.unshift({
              id: `${notifNow}-${Math.random().toString(36).substr(2, 9)}`,
              title: `📚 New Free Homework: ${course}`,
              message: `New practice homework has been assigned for ${course}.`,
              time: notifNow,
              unread: true,
              type: 'homework',
              link: '/homework'
            });
            modifiedFreeStudents.push(s);
          }
          if (modifiedFreeStudents.length > 0) {
            await authService.saveUsersBatch(modifiedFreeStudents);
          }

          return true;
      } catch (e) {
          console.error("Failed to assign free homework", (e as any)?.message || String(e));
          return false;
      }
  },

  clearFreeHomework: async (): Promise<boolean> => {
      try {
          cachedFreeHomework = [];
          safeLocalSetItem(FREE_HOMEWORK_KEY, safeStringify(cachedFreeHomework));
          authService.notifySubscribers();
          try { await setDoc(doc(db, 'system', 'free_homework'), { assignments: [] }, { merge: true }); } catch (e) { console.error("Firebase setDoc free_homework clear error", e); }
          return true;
      } catch (e) {
          console.error("Failed to clear free homework", (e as any)?.message || String(e));
          return false;
      }
  },

  // --- WRITES (Async to Firebase + Update Cache) ---

  createUser: async (user: User): Promise<boolean> => {
    if (cachedUsers.some(u => u.username === user.username)) {
      return false;
    }
    const newUser: User = { 
      ...user, 
      tier: user.tier || 'free', // Default to free if undefined
      progress: user.progress || {}, 
      bookmarks: user.bookmarks || [], 
      mistakes: user.mistakes || [],
      history: user.history || []
    };
    
    // Update Cache
    cachedUsers.push(newUser);
    safeLocalSetItem(STORAGE_KEY, safeStringify(cachedUsers));
    authService.notifySubscribers();

    // Update Firebase
    try {
      try { await setDoc(doc(db, 'users', newUser.username), sanitize(newUser)); } catch (e) { console.error("Firebase setDoc newUser error", e); }
    } catch (e) {
      handleFirebaseError(e, "Create User");
    }
    return true;
  },

  updateUser: async (updatedUser: User) => {
    const index = cachedUsers.findIndex(u => u.username === updatedUser.username);
    if (index !== -1) {
      // Merge
      cachedUsers[index] = { ...cachedUsers[index], ...updatedUser };
      safeLocalSetItem(STORAGE_KEY, safeStringify(cachedUsers));
      authService.notifySubscribers();
      
      // Update Current User Session if needed
      const currentUser = authService.getCurrentUser();
      if (currentUser && currentUser.username === updatedUser.username) {
        safeLocalSetItem(CURRENT_USER_KEY, safeStringify(cachedUsers[index]));
      }

      // Firebase
      try {
        try { await setDoc(doc(db, 'users', updatedUser.username), sanitize(cachedUsers[index]), { merge: true }); } catch (e) { console.error("Firebase setDoc updatedUser error", e); }
      } catch (e) {
        handleFirebaseError(e, "Update User");
      }
    }
  },

  saveUsersBatch: async (updatedUsers: User[]) => {
    if (!updatedUsers || updatedUsers.length === 0) return;

    // 1. Update in-memory cachedUsers in a single pass
    const currentUser = authService.getCurrentUser();
    let currentUserUpdated: User | null = null;

    for (const u of updatedUsers) {
      const idx = cachedUsers.findIndex(cu => cu.username === u.username);
      if (idx !== -1) {
        cachedUsers[idx] = { ...cachedUsers[idx], ...u };
        if (currentUser && currentUser.username === u.username) {
          currentUserUpdated = cachedUsers[idx];
        }
      }
    }

    // 2. Persist to localStorage ONCE
    safeLocalSetItem(STORAGE_KEY, safeStringify(cachedUsers));
    if (currentUserUpdated) {
      safeLocalSetItem(CURRENT_USER_KEY, safeStringify(currentUserUpdated));
    }

    // 3. Notify React subscribers ONCE
    authService.notifySubscribers();

    // 4. Batch commit to Firestore in chunks of 400 (under Firestore's 500 limit)
    try {
      const chunkSize = 400;
      const promises: Promise<void>[] = [];
      for (let i = 0; i < updatedUsers.length; i += chunkSize) {
        const chunk = updatedUsers.slice(i, i + chunkSize);
        const batch = writeBatch(db);
        for (const user of chunk) {
          batch.set(doc(db, 'users', user.username), sanitize(user), { merge: true });
        }
        promises.push(batch.commit());
      }
      await Promise.all(promises);
    } catch (e) {
      console.error("Firebase saveUsersBatch error:", e);
    }
  },

  deleteUser: async (username: string): Promise<boolean> => {
    const initialLength = cachedUsers.length;
    cachedUsers = cachedUsers.filter(u => u.username !== username);
    
    if (cachedUsers.length < initialLength) {
      safeLocalSetItem(STORAGE_KEY, safeStringify(cachedUsers));
      authService.notifySubscribers();
      
      try {
        try { await deleteDoc(doc(db, 'users', username)); } catch (e) { console.error("Firebase deleteDoc users error", e); }
      } catch (e) {
        handleFirebaseError(e, "Delete User");
      }
      return true;
    }
    return false;
  },

  login: async (username: string, password: string): Promise<User | null> => {
    // 1. Check Cache
    let user = cachedUsers.find(u => u.username === username && u.password === password);
    
    // 2. If not in cache, try Firestore (in case sync is still running or failed)
    if (!user) {
        try {
            const userDoc = await getDoc(doc(db, 'users', username));
            if (userDoc.exists()) {
                const userData = userDoc.data() as User;
                // Simple password check (plaintext as per existing implementation)
                if (userData.password === password) {
                    user = userData;
                    // Add to cache to speed up next time
                    if (!cachedUsers.some(u => u.username === user!.username)) {
                        cachedUsers.push(user);
                        safeLocalSetItem(STORAGE_KEY, safeStringify(cachedUsers));
                    }
                }
            }
        } catch (e) {
            console.error("Login fetch error", (e as any)?.message || String(e));
        }
    }

    if (user) {
      safeLocalSetItem(CURRENT_USER_KEY, safeStringify(user));
      return user;
    }
    return null;
  },

  loginWithGoogle: async (): Promise<User | null> => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const username = user.email || user.uid;

      // Check cache first
      let appUser = cachedUsers.find(u => u.username === username);

      if (!appUser) {
        try {
            // Check Firestore
            const userDocRef = doc(db, 'users', username);
            const userDocSnap = await getDoc(userDocRef);

            if (userDocSnap.exists()) {
                appUser = userDocSnap.data() as User;
                // Update cache if missing
                if (!cachedUsers.some(u => u.username === appUser!.username)) {
                    cachedUsers.push(appUser!);
                    safeLocalSetItem(STORAGE_KEY, safeStringify(cachedUsers));
                }
            }
        } catch (e) {
            handleFirebaseError(e, "Google Login (Fetch)");
            // If fetch fails (permissions), we fall through to create new user in memory
        }

        if (!appUser) {
          // Create new user automatically
          const newUser: User = {
            username: username,
            password: 'google-oauth-user', // Placeholder
            name: user.displayName || 'Google User',
            role: 'student',
            tier: 'free', // Default to free for new Google users
            course: 'DSAT', // Default to DSAT
            progress: {},
            bookmarks: [],
            mistakes: [],
            history: [],
            isActive: true,
            pricePerSession: 0, // Free tier default
          };
          
          await authService.createUser(newUser);
          appUser = newUser;
        }
      }

      if (appUser) {
        safeLocalSetItem(CURRENT_USER_KEY, safeStringify(appUser));
        return appUser;
      }
      return null;
    } catch (error) {
      // Re-throw specific auth errors for the UI to handle, log others
      const errorCode = (error as any).code;
      if (
          errorCode === 'auth/unauthorized-domain' || 
          errorCode === 'auth/popup-closed-by-user' ||
          errorCode === 'auth/operation-not-allowed'
      ) {
          throw error;
      }
      console.error("Google Login Error:", (error as any)?.message || String(error));
      return null;
    }
  },

  logout: () => {
    localStorage.removeItem(CURRENT_USER_KEY);
  },

  // --- SPECIFIC UPDATES (Wrappers around updateUser) ---

  updateProgress: async (username: string, lessonId: string, percentage: number) => {
    const user = cachedUsers.find(u => u.username === username);
    if (user) {
      const currentScore = user.progress[lessonId] || 0;
      if (percentage > currentScore) {
        user.progress[lessonId] = percentage;
        await authService.updateUser(user);
      }
    }
  },

  recordAttempt: async (username: string, attempt: QuizAttempt) => {
    const user = cachedUsers.find(u => u.username === username);
    if (user) {
      if (!user.history) user.history = [];
      user.history.unshift(attempt);
      if (user.history.length > 100) user.history = user.history.slice(0, 100);
      await authService.updateUser(user);
    }
  },

  toggleBookmark: async (username: string, lessonId: string, topicName: string, question: Question, mode: 'practice' | 'exam'): Promise<User | null> => {
    const user = cachedUsers.find(u => u.username === username);
    if (user) {
      if (!user.bookmarks) user.bookmarks = [];
      const existsIdx = user.bookmarks.findIndex(b => b.question.question === question.question);
      
      if (existsIdx > -1) {
        user.bookmarks.splice(existsIdx, 1);
      } else {
        const newBookmark: Bookmark = {
          id: Date.now().toString(),
          lessonId: lessonId as LessonId,
          topicName,
          question,
          timestamp: Date.now(),
          mode
        };
        user.bookmarks.push(newBookmark);
      }
      
      if (user.bookmarks.length > 200) user.bookmarks = user.bookmarks.slice(-200);
      
      await authService.updateUser(user);
      return user;
    }
    return null;
  },

  recordMistake: async (username: string, lessonId: string, topicName: string, question: Question): Promise<User | null> => {
    const user = cachedUsers.find(u => u.username === username);
    if (user) {
      if (!user.mistakes) user.mistakes = [];
      const existingMistake = user.mistakes.find(m => m.question.question === question.question);
      
      if (existingMistake) {
        existingMistake.count += 1;
        existingMistake.timestamp = Date.now();
      } else {
        const newMistake: Mistake = {
          id: `${lessonId}-${question.id}`,
          lessonId: lessonId as LessonId,
          topicName,
          question,
          timestamp: Date.now(),
          count: 1
        };
        user.mistakes.push(newMistake);
      }
      
      if (user.mistakes.length > 200) user.mistakes = user.mistakes.slice(-200);
      
      await authService.updateUser(user);
      return user;
    }
    return null;
  },

  resolveMistake: async (username: string, questionText: string): Promise<User | null> => {
    const user = cachedUsers.find(u => u.username === username);
    if (user && user.mistakes) {
      user.mistakes = user.mistakes.filter(m => m.question.question !== questionText);
      await authService.updateUser(user);
      return user;
    }
    return null;
  },

  // --- FINANCIAL ---
  addPayment: async (username: string, payment: PaymentRecord): Promise<boolean> => {
    const user = cachedUsers.find(u => u.username === username);
    if (user) {
      if (!user.payments) user.payments = [];
      user.payments.unshift(payment);
      await authService.updateUser(user);
      return true;
    }
    return false;
  },

  updatePayment: async (username: string, payment: PaymentRecord): Promise<boolean> => {
    const user = cachedUsers.find(u => u.username === username);
    if (user && user.payments) {
      const idx = user.payments.findIndex(p => p.id === payment.id);
      if (idx !== -1) {
        user.payments[idx] = payment;
        await authService.updateUser(user);
        return true;
      }
    }
    return false;
  },

  deletePayment: async (username: string, paymentId: string): Promise<boolean> => {
    const user = cachedUsers.find(u => u.username === username);
    if (user && user.payments) {
      user.payments = user.payments.filter(p => p.id !== paymentId);
      await authService.updateUser(user);
      return true;
    }
    return false;
  },

  // --- ATTENDANCE ---
  batchRecordAttendance: async (usernames: string[], date: string, notes: string, status: 'present' | 'absent' | 'late'): Promise<boolean> => {
    const modifiedUsers: User[] = [];
    const now = Date.now();
    
    for (const username of usernames) {
        const user = cachedUsers.find(u => u.username === username);
        if (user) {
            if (!user.attendance) user.attendance = [];
            const record: AttendanceRecord = {
                id: `${now}-${Math.random().toString(36).substr(2, 9)}`,
                date,
                status,
                notes,
                timestamp: now
            };
            user.attendance.unshift(record);
            modifiedUsers.push(user);
        }
    }

    if (modifiedUsers.length > 0) {
      await authService.saveUsersBatch(modifiedUsers);
      return true;
    }
    return false;
  },

  deleteAttendance: async (username: string, recordId: string): Promise<boolean> => {
    const user = cachedUsers.find(u => u.username === username);
    if (user && user.attendance) {
      user.attendance = user.attendance.filter(a => a.id !== recordId);
      await authService.updateUser(user);
      return true;
    }
    return false;
  },

  // --- GROUPS ---
  createGroup: async (name: string, course: CourseType, studentUsernames: string[], status: 'active' | 'inactive' = 'active'): Promise<StudentGroup> => {
    const now = Date.now();
    const formattedDay = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(new Date(now));

    const newGroup: StudentGroup = {
      id: `${now}`,
      name,
      course,
      studentUsernames,
      status,
      createdAt: now,
      createdDay: formattedDay
    };
    cachedGroups.push(newGroup);
    safeLocalSetItem(GROUPS_KEY, safeStringify(cachedGroups));
    authService.notifySubscribers();
    
    try {
      try { await setDoc(doc(db, 'groups', newGroup.id), sanitize(newGroup)); } catch (e) { console.error("Firebase setDoc newGroup error", e); }
    } catch (e) {
      handleFirebaseError(e, "Create Group");
    }
    
    return newGroup;
  },
  
  addStudentToGroup: async (groupId: string, username: string) => {
    const group = cachedGroups.find(g => g.id === groupId);
    if (group && !group.studentUsernames.includes(username)) {
        group.studentUsernames.push(username);
        safeLocalSetItem(GROUPS_KEY, safeStringify(cachedGroups));
        authService.notifySubscribers();
        
        try {
          try { await setDoc(doc(db, 'groups', group.id), sanitize(group), { merge: true }); } catch (e) { console.error("Firebase setDoc group error", e); }
        } catch (e) {
          handleFirebaseError(e, "Update Group");
        }
    }
  },

  updateGroup: async (id: string, name: string, course: CourseType, studentUsernames: string[], status?: 'active' | 'inactive'): Promise<StudentGroup | null> => {
    const idx = cachedGroups.findIndex(g => g.id === id);
    if (idx !== -1) {
      const updatedStatus = status || cachedGroups[idx].status || 'active';
      cachedGroups[idx] = { ...cachedGroups[idx], name, course, studentUsernames, status: updatedStatus };
      safeLocalSetItem(GROUPS_KEY, safeStringify(cachedGroups));
      authService.notifySubscribers();
      try {
        try { await setDoc(doc(db, 'groups', id), sanitize(cachedGroups[idx]), { merge: true }); } catch (e) { console.error("Firebase updateGroup error", e); }
      } catch (e) {
        handleFirebaseError(e, "Update Group");
      }
      return cachedGroups[idx];
    }
    return null;
  },

  toggleGroupStatus: async (id: string): Promise<StudentGroup | null> => {
    const idx = cachedGroups.findIndex(g => g.id === id);
    if (idx !== -1) {
      const currentStatus = cachedGroups[idx].status || 'active';
      const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
      cachedGroups[idx] = { ...cachedGroups[idx], status: newStatus };
      safeLocalSetItem(GROUPS_KEY, safeStringify(cachedGroups));
      authService.notifySubscribers();
      try {
        try { await setDoc(doc(db, 'groups', id), sanitize(cachedGroups[idx]), { merge: true }); } catch (e) { console.error("Firebase toggleGroupStatus error", e); }
      } catch (e) {
        handleFirebaseError(e, "Toggle Group Status");
      }
      return cachedGroups[idx];
    }
    return null;
  },

  deleteGroup: async (id: string) => {
    cachedGroups = cachedGroups.filter(g => g.id !== id);
    safeLocalSetItem(GROUPS_KEY, safeStringify(cachedGroups));
    authService.notifySubscribers();
    
    try {
        try { await deleteDoc(doc(db, 'groups', id)); } catch (e) { console.error("Firebase deleteDoc groups error", e); }
    } catch (e) {
        handleFirebaseError(e, "Delete Group");
    }
  },

  // --- NOTIFICATIONS ---
  notifyUser: async (
    username: string, 
    title: string, 
    message: string, 
    type: 'homework' | 'exam' | 'system' | 'reminder' = 'system',
    extra?: { link?: string; lessonId?: string; dueDate?: string; assignmentId?: string }
  ) => {
    const user = cachedUsers.find(u => u.username === username);
    if (!user) return false;

    // 1. In-App Notification
    const newNotif: AppNotification = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      title,
      message,
      time: Date.now(),
      unread: true,
      type,
      link: extra?.link,
      lessonId: extra?.lessonId,
      dueDate: extra?.dueDate,
      assignmentId: extra?.assignmentId
    };

    if (!user.notifications) user.notifications = [];
    user.notifications.unshift(newNotif);
    await authService.updateUser(user);

    // 2. Mock External Notifications
    if (user.whatsapp) {
      console.log(`[MOCK WhatsApp] Sent to ${user.whatsapp}: ${title}\n${message}`);
    } else if (user.parentWhatsapp) {
      console.log(`[MOCK WhatsApp] Sent to parent (${user.parentWhatsapp}): Notice regarding ${user.name || user.username}:\n${title}\n${message}`);
    }
    
    if (user.email) {
      console.log(`[MOCK Email] Sent to ${user.email} | Subject: ${title} | Body: ${message}`);
    }

    return true;
  },

  markNotificationAsRead: async (username: string, notifId: string) => {
    const user = cachedUsers.find(u => u.username === username);
    if (!user || !user.notifications) return false;
    user.notifications = user.notifications.map(n => n.id === notifId ? { ...n, unread: false } : n);
    await authService.updateUser(user);
    return true;
  },

  markAllNotificationsAsRead: async (username: string) => {
    const user = cachedUsers.find(u => u.username === username);
    if (!user || !user.notifications) return false;
    user.notifications = user.notifications.map(n => ({ ...n, unread: false }));
    await authService.updateUser(user);
    return true;
  },

  deleteNotification: async (username: string, notifId: string) => {
    const user = cachedUsers.find(u => u.username === username);
    if (!user || !user.notifications) return false;
    user.notifications = user.notifications.filter(n => n.id !== notifId);
    await authService.updateUser(user);
    return true;
  },

  clearAllNotifications: async (username: string) => {
    const user = cachedUsers.find(u => u.username === username);
    if (!user) return false;
    user.notifications = [];
    await authService.updateUser(user);
    return true;
  },

  checkAndSyncAdminNotifications: async (username: string): Promise<void> => {
    const user = cachedUsers.find(u => u.username === username);
    if (!user || (user.role !== 'admin' && user.role !== 'co-admin')) return;

    if (!user.notifications) user.notifications = [];
    let updated = false;

    // Check all students for outstanding balances
    const allStudents = cachedUsers.filter(u => u.role === 'student');
    for (const student of allStudents) {
      const sAttendance = student.attendance?.filter(a => a.status === 'present').length || 0;
      const sDue = sAttendance * (student.pricePerSession || 0);
      const sPaid = student.payments?.reduce((acc, p) => acc + p.amount, 0) || 0;
      const sBalance = sDue - sPaid;

      // If they owe money
      if (sBalance > 0) {
        // Find if we already notified about this exact balance
        const notifMsg = `${student.name || student.username} has an outstanding balance of $${sBalance.toFixed(2)}.`;
        const alreadyNotified = user.notifications.some(n => n.message === notifMsg);
        
        if (!alreadyNotified) {
          const newNotif: AppNotification = {
            id: 'admin_fin_' + student.username + '_' + sBalance.toFixed(2),
            type: 'system',
            title: 'Outstanding Payment Due',
            message: notifMsg,
            time: Date.now(),
            unread: true,
            link: '/payment'
          };
          user.notifications.unshift(newNotif);
          updated = true;
        }
      }
    }

    if (updated) {
      await authService.updateUser(user);
    }
  },

  checkAndSyncStudentNotifications: async (username: string): Promise<void> => {
    const user = cachedUsers.find(u => u.username === username);
    if (!user) return;

    if (!user.notifications) user.notifications = [];
    let updated = false;

    // 1. Sync group assignments for this student if missing and notify
    const userGroups = cachedGroups.filter(g => g.studentUsernames && g.studentUsernames.includes(username));
    for (const group of userGroups) {
      if (group.assignments && group.assignments.length > 0) {
        for (const ga of group.assignments) {
          // check if targeted to this student
          if (ga.targetStudentUsernames && ga.targetStudentUsernames.length > 0 && !ga.targetStudentUsernames.includes(username)) {
            continue;
          }

          if (!user.assignments) user.assignments = [];
          const hasAssignment = user.assignments.some(a => (ga.lessonId && a.lessonId === ga.lessonId) || a.assignedDate === ga.assignedDate);
          
          if (!hasAssignment) {
            const newAssignment: Assignment = {
              id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
              type: ga.type,
              course: group.course,
              lessonId: ga.lessonId,
              link: ga.link,
              title: ga.title,
              dueDate: ga.dueDate,
              availableDate: ga.availableDate,
              maxAttempts: ga.maxAttempts || 10,
              assignedDate: ga.assignedDate
            };
            user.assignments.unshift(newAssignment);
            updated = true;
          }

          // Check if notified about this assignment
          const notifId = `assign_${ga.id || ga.assignedDate}`;
          const alreadyNotified = user.notifications.some(n => n.assignmentId === (ga.id || String(ga.assignedDate)) || (ga.title && n.title.includes(ga.title)));
          
          if (!alreadyNotified) {
            user.notifications.unshift({
              id: notifId,
              title: `📚 New Homework: ${ga.title || 'Assignment'}`,
              message: `You have new homework assigned in ${group.name}.${ga.dueDate ? ` ⏰ Due on ${ga.dueDate}.` : ''}`,
              time: Date.now(),
              unread: true,
              type: 'homework',
              link: '/homework',
              lessonId: ga.lessonId,
              dueDate: ga.dueDate,
              assignmentId: ga.id || String(ga.assignedDate)
            });
            updated = true;
          }
        }
      }
    }

    // 2. Check Due Dates & Due Soon / Overdue for all student assignments
    const allAssignments = [...(user.assignments || [])];
    if (user.tier === 'free' || !user.tier) {
      allAssignments.push(...cachedFreeHomework);
    }

    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];

    for (const assignment of allAssignments) {
      if (!assignment.dueDate) continue;

      const assignmentTitle = assignment.title || assignment.lessonId || 'Homework';
      const assignKey = assignment.id || assignment.lessonId || assignmentTitle;
      
      // Check if student has already solved/completed it
      const attempts = user.history?.filter(h => h.lessonId === assignment.lessonId) || [];
      const isCompleted = (assignment.manualScore !== undefined) || (attempts.length > 0 && Math.max(...attempts.map(a => a.score)) >= 70);
      if (isCompleted) continue; // Don't nag if completed!

      const dueDateStr = assignment.dueDate.split('T')[0];
      const dueTime = new Date(dueDateStr).getTime();
      const todayTime = new Date(todayStr).getTime();
      const diffMs = dueTime - todayTime;
      const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

      if (diffDays === 0) {
        // Due TODAY
        const notifId = `due_today_${assignKey}_${dueDateStr}`;
        const alreadyExists = user.notifications.some(n => n.id === notifId || (n.title.includes('Due Today') && n.message.includes(assignmentTitle)));
        if (!alreadyExists) {
          user.notifications.unshift({
            id: notifId,
            title: `🚨 Due Today: ${assignmentTitle}`,
            message: `Your homework "${assignmentTitle}" is due today (${dueDateStr})! Please complete and submit it before midnight.`,
            time: Date.now(),
            unread: true,
            type: 'reminder',
            link: '/homework',
            lessonId: assignment.lessonId,
            dueDate: dueDateStr,
            assignmentId: assignment.id
          });
          updated = true;
        }
      } else if (diffDays === 1) {
        // Due TOMORROW
        const notifId = `due_tomorrow_${assignKey}_${dueDateStr}`;
        const alreadyExists = user.notifications.some(n => n.id === notifId || (n.title.includes('Due Tomorrow') && n.message.includes(assignmentTitle)));
        if (!alreadyExists) {
          user.notifications.unshift({
            id: notifId,
            title: `⏰ Due Tomorrow: ${assignmentTitle}`,
            message: `Reminder: Your homework "${assignmentTitle}" is due tomorrow (${dueDateStr}).`,
            time: Date.now(),
            unread: true,
            type: 'reminder',
            link: '/homework',
            lessonId: assignment.lessonId,
            dueDate: dueDateStr,
            assignmentId: assignment.id
          });
          updated = true;
        }
      } else if (diffDays > 1 && diffDays <= 3) {
        // Due Soon (2-3 days)
        const notifId = `due_soon_${assignKey}_${dueDateStr}`;
        const alreadyExists = user.notifications.some(n => n.id === notifId || (n.title.includes('Due Soon') && n.message.includes(assignmentTitle)));
        if (!alreadyExists) {
          user.notifications.unshift({
            id: notifId,
            title: `⏰ Due in ${diffDays} Days: ${assignmentTitle}`,
            message: `Your homework "${assignmentTitle}" is due on ${dueDateStr}. Don't forget to submit!`,
            time: Date.now(),
            unread: true,
            type: 'reminder',
            link: '/homework',
            lessonId: assignment.lessonId,
            dueDate: dueDateStr,
            assignmentId: assignment.id
          });
          updated = true;
        }
      } else if (diffDays < 0) {
        // OVERDUE
        const notifId = `overdue_${assignKey}_${dueDateStr}`;
        const alreadyExists = user.notifications.some(n => n.id === notifId || (n.title.includes('Overdue') && n.message.includes(assignmentTitle)));
        if (!alreadyExists) {
          user.notifications.unshift({
            id: notifId,
            title: `⚠️ Overdue Homework: ${assignmentTitle}`,
            message: `The deadline for "${assignmentTitle}" was ${dueDateStr}. Please submit it as soon as possible.`,
            time: Date.now(),
            unread: true,
            type: 'reminder',
            link: '/homework',
            lessonId: assignment.lessonId,
            dueDate: dueDateStr,
            assignmentId: assignment.id
          });
          updated = true;
        }
      }
    }

    if (updated) {
      await authService.updateUser(user);
    }
  },

  // --- HOMEWORK ---
  assignToGroup: async (
    groupId: string,
    assignmentData: Omit<GroupAssignment, 'id' | 'groupId' | 'assignedDate'>
  ): Promise<boolean> => {
    const group = cachedGroups.find(g => g.id === groupId);
    if (!group) return false;

    if (!group.assignments) group.assignments = [];

    const targetUsernames = assignmentData.targetStudentUsernames && assignmentData.targetStudentUsernames.length > 0
      ? assignmentData.targetStudentUsernames
      : group.studentUsernames;

    const now = Date.now();
    const newGroupAssignment: GroupAssignment = {
      ...assignmentData,
      targetStudentUsernames: targetUsernames,
      id: `${now}-${Math.random().toString(36).substr(2, 9)}`,
      groupId,
      assignedDate: now
    };

    group.assignments.unshift(newGroupAssignment);

    const modifiedUsers: User[] = [];

    // 1. Assign only to targeted students in memory
    for (const username of targetUsernames) {
      const user = cachedUsers.find(u => u.username === username);
      if (user) {
        if (!user.assignments) user.assignments = [];
        if (!user.notifications) user.notifications = [];
        
        // If student already has an assignment for this lesson, update its due date & settings to unlock it
        const existingAssignment = newGroupAssignment.lessonId ? user.assignments.find(a => a.lessonId === newGroupAssignment.lessonId) : null;
        if (existingAssignment) {
          if (newGroupAssignment.dueDate) existingAssignment.dueDate = newGroupAssignment.dueDate;
          if (newGroupAssignment.availableDate) existingAssignment.availableDate = newGroupAssignment.availableDate;
          if (newGroupAssignment.maxAttempts) existingAssignment.maxAttempts = newGroupAssignment.maxAttempts;
          if (newGroupAssignment.notes) existingAssignment.notes = newGroupAssignment.notes;

          const notifType = (newGroupAssignment.type === 'homework' || newGroupAssignment.type === 'lesson') ? 'homework' : (newGroupAssignment.type === 'exam' ? 'exam' : 'system');
          user.notifications.unshift({
            id: `${now}-${Math.random().toString(36).substr(2, 9)}`,
            title: `🔓 Due Date Extended: ${newGroupAssignment.title || 'Homework'}`,
            message: `Your due date for ${newGroupAssignment.title || 'your assignment'} in ${group.name} was updated to unlock the lesson.${newGroupAssignment.dueDate ? ` ⏰ New Due Date: ${newGroupAssignment.dueDate}.` : ''}`,
            time: now,
            unread: true,
            type: notifType,
            link: '/homework',
            lessonId: newGroupAssignment.lessonId,
            dueDate: newGroupAssignment.dueDate,
            assignmentId: existingAssignment.id
          });

          if (!modifiedUsers.includes(user)) {
            modifiedUsers.push(user);
          }
          continue;
        }

        const newAssignment: Assignment = {
          id: `${now}-${Math.random().toString(36).substr(2, 9)}`,
          type: newGroupAssignment.type,
          course: group.course,
          lessonId: newGroupAssignment.lessonId,
          link: newGroupAssignment.link,
          title: newGroupAssignment.title,
          dueDate: newGroupAssignment.dueDate,
          availableDate: newGroupAssignment.availableDate,
          maxAttempts: newGroupAssignment.maxAttempts || 10,
          assignedDate: newGroupAssignment.assignedDate
        };
        user.assignments.unshift(newAssignment);
        
        const notifType = (newGroupAssignment.type === 'homework' || newGroupAssignment.type === 'lesson') ? 'homework' : (newGroupAssignment.type === 'exam' ? 'exam' : 'system');
        user.notifications.unshift({
          id: `${now}-${Math.random().toString(36).substr(2, 9)}`,
          title: `📚 New Assignment: ${newGroupAssignment.title || 'Homework'}`,
          message: `You have a new ${newGroupAssignment.type} assigned in ${group.name}.${newGroupAssignment.dueDate ? ` ⏰ Due on ${newGroupAssignment.dueDate}.` : ''}`,
          time: now,
          unread: true,
          type: notifType,
          link: '/homework',
          lessonId: newGroupAssignment.lessonId,
          dueDate: newGroupAssignment.dueDate,
          assignmentId: newGroupAssignment.id
        });

        modifiedUsers.push(user);
      }
    }

    // 2. Record attendance if provided in assignmentData
    if (assignmentData.attendanceRecords && assignmentData.attendanceRecords.length > 0) {
      const sessionDate = assignmentData.availableDate || new Date().toISOString().split('T')[0];
      for (const att of assignmentData.attendanceRecords) {
        const user = cachedUsers.find(u => u.username === att.username);
        if (user) {
          if (!user.attendance) user.attendance = [];
          const record: AttendanceRecord = {
            id: `${now}-${Math.random().toString(36).substr(2, 9)}`,
            date: att.date || sessionDate,
            status: att.status,
            notes: att.notes || `Session Attendance (${newGroupAssignment.title || group.name})`,
            timestamp: now
          };
          user.attendance.unshift(record);
          if (!modifiedUsers.includes(user)) {
            modifiedUsers.push(user);
          }
        }
      }
    }

    safeLocalSetItem(GROUPS_KEY, safeStringify(cachedGroups));

    // Batch commit group and modified users in a single operation
    try {
      const batch = writeBatch(db);
      batch.set(doc(db, 'groups', group.id), sanitize(group), { merge: true });
      for (const u of modifiedUsers) {
        batch.set(doc(db, 'users', u.username), sanitize(u), { merge: true });
      }

      if (modifiedUsers.length > 0) {
        safeLocalSetItem(STORAGE_KEY, safeStringify(cachedUsers));
        const currentUser = authService.getCurrentUser();
        if (currentUser && modifiedUsers.some(u => u.username === currentUser.username)) {
          const fresh = cachedUsers.find(u => u.username === currentUser.username);
          if (fresh) safeLocalSetItem(CURRENT_USER_KEY, safeStringify(fresh));
        }
        authService.notifySubscribers();
      }

      await batch.commit();
    } catch (e) {
      console.error("Firebase assignToGroup error", e);
      handleFirebaseError(e, "Update Group");
    }
    return true;
  },

  deleteGroupAssignment: async (groupId: string, assignmentId: string): Promise<boolean> => {
    const group = cachedGroups.find(g => g.id === groupId);
    if (!group || !group.assignments) return false;

    const assignmentIndex = group.assignments.findIndex(a => a.id === assignmentId);
    if (assignmentIndex === -1) return false;

    const groupAssignment = group.assignments[assignmentIndex];
    group.assignments.splice(assignmentIndex, 1);

    const modifiedUsers: User[] = [];
    // Remove from all students in the group
    for (const username of group.studentUsernames) {
      const user = cachedUsers.find(u => u.username === username);
      if (user && user.assignments) {
        const prevLen = user.assignments.length;
        user.assignments = user.assignments.filter(a => a.assignedDate !== groupAssignment.assignedDate);
        if (user.assignments.length !== prevLen) {
          modifiedUsers.push(user);
        }
      }
    }

    safeLocalSetItem(GROUPS_KEY, safeStringify(cachedGroups));
    try {
      const batch = writeBatch(db);
      batch.set(doc(db, 'groups', group.id), sanitize(group), { merge: true });
      for (const u of modifiedUsers) {
        batch.set(doc(db, 'users', u.username), sanitize(u), { merge: true });
      }
      if (modifiedUsers.length > 0) {
        safeLocalSetItem(STORAGE_KEY, safeStringify(cachedUsers));
        authService.notifySubscribers();
      }
      await batch.commit();
    } catch (e) {
      console.error("Firebase deleteGroupAssignment error", e);
      handleFirebaseError(e, "Update Group");
    }
    return true;
  },

  updateGroupAssignment: async (
    groupId: string, 
    assignmentId: string, 
    updates: Partial<Omit<GroupAssignment, 'id' | 'groupId' | 'assignedDate'>>
  ): Promise<boolean> => {
    const group = cachedGroups.find(g => g.id === groupId);
    if (!group || !group.assignments) return false;

    const assignment = group.assignments.find(a => a.id === assignmentId);
    if (!assignment) return false;

    Object.assign(assignment, updates);

    const modifiedUsers: User[] = [];
    // Update for all students in the group
    for (const username of group.studentUsernames) {
      const user = cachedUsers.find(u => u.username === username);
      if (user && user.assignments) {
        let userChanged = false;
        user.assignments = user.assignments.map(a => {
          if (a.assignedDate === assignment.assignedDate) {
            userChanged = true;
            return {
              ...a,
              type: assignment.type,
              lessonId: assignment.lessonId,
              link: assignment.link,
              title: assignment.title,
              dueDate: assignment.dueDate,
              availableDate: assignment.availableDate,
            };
          }
          return a;
        });
        if (userChanged) {
          modifiedUsers.push(user);
        }
      }
    }

    safeLocalSetItem(GROUPS_KEY, safeStringify(cachedGroups));
    try {
      const batch = writeBatch(db);
      batch.set(doc(db, 'groups', group.id), sanitize(group), { merge: true });
      for (const u of modifiedUsers) {
        batch.set(doc(db, 'users', u.username), sanitize(u), { merge: true });
      }
      if (modifiedUsers.length > 0) {
        safeLocalSetItem(STORAGE_KEY, safeStringify(cachedUsers));
        authService.notifySubscribers();
      }
      await batch.commit();
    } catch (e) {
      console.error("Firebase updateGroupAssignment error", e);
      handleFirebaseError(e, "Update Group");
    }
    return true;
  },

  batchAssignHomework: async (
    usernames: string[], 
    course: CourseType, 
    lessonIds: string[], 
    dueDate: string, 
    maxAttempts: number, 
    notes?: string, 
    availableDate?: string,
    lessonDetails?: { id: string; course?: CourseType; title?: string; type?: 'lesson' | 'exam' }[]
  ): Promise<boolean> => {
    const modifiedUsers: User[] = [];
    const now = Date.now();
    const effectiveAvailableDate = availableDate || new Date().toISOString().split('T')[0];

    for (const username of usernames) {
        const user = cachedUsers.find(u => u.username === username);
        if (user) {
            if (!user.assignments) user.assignments = [];
            if (!user.notifications) user.notifications = [];
            
            let userChanged = false;
            for (const lessonId of lessonIds) {
                // If student already has an assignment for this lesson, update its due date & settings to unlock it
                const existingAssignment = user.assignments.find(a => a.lessonId === lessonId);
                const detail = lessonDetails?.find(l => l.id === lessonId);

                if (existingAssignment) {
                  existingAssignment.dueDate = dueDate;
                  existingAssignment.availableDate = effectiveAvailableDate;
                  if (maxAttempts) existingAssignment.maxAttempts = maxAttempts;
                  if (notes) existingAssignment.notes = notes;

                  user.notifications.unshift({
                    id: `${now}-${Math.random().toString(36).substr(2, 9)}`,
                    title: `🔓 Due Date Extended${detail?.title ? `: ${detail.title}` : ''}`,
                    message: `Your due date for ${detail?.title || 'your homework'} was updated to unlock the lesson.${dueDate ? ` ⏰ New Due Date: ${dueDate}.` : ''}`,
                    time: now,
                    unread: true,
                    type: 'homework',
                    link: '/homework',
                    lessonId,
                    dueDate,
                    assignmentId: existingAssignment.id
                  });

                  userChanged = true;
                  continue;
                }

                const resolvedCourse = detail?.course || ((course as string) === 'ALL' ? ((user.course as CourseType) || 'DSAT') : course);
                const assignmentId = `${now}-${Math.random().toString(36).substr(2, 9)}`;

                const newAssignment: Assignment = {
                    id: assignmentId,
                    lessonId,
                    course: resolvedCourse,
                    title: detail?.title,
                    type: detail?.type === 'exam' ? 'exam' : 'homework',
                    dueDate,
                    availableDate: effectiveAvailableDate,
                    maxAttempts,
                    assignedDate: now,
                    notes
                };
                user.assignments.unshift(newAssignment);
                
                user.notifications.unshift({
                  id: `${now}-${Math.random().toString(36).substr(2, 9)}`,
                  title: `📚 New Homework Assigned${detail?.title ? `: ${detail.title}` : ''}`,
                  message: `You have been assigned new homework for ${resolvedCourse}.${dueDate ? ` ⏰ Due on ${dueDate}.` : ''}`,
                  time: now,
                  unread: true,
                  type: 'homework',
                  link: '/homework',
                  lessonId,
                  dueDate,
                  assignmentId
                });

                userChanged = true;
            }
            if (userChanged) {
                modifiedUsers.push(user);
            }
        }
    }

    if (modifiedUsers.length > 0) {
      await authService.saveUsersBatch(modifiedUsers);
      return true;
    }
    return false;
  }
};

try {
  authService.ensureDefaultAdmin();
} catch (e) {
  console.warn("ensureDefaultAdmin initial call warning:", e);
}
