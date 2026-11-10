import { get, set } from 'idb-keyval';

import { Lesson, LessonId, Question } from './types';
import { LESSONS } from './constants';
import { STATIC_QUESTIONS } from './questions';
import { getOrCategorizeQuestion } from './utils/courseCategorizer';
import { db } from './firebase';
import { collection, doc, setDoc, deleteDoc, onSnapshot } from 'firebase/firestore';

// In-memory cache to store lessons fetched from DB
let lessonCache: Record<string, Lesson & { questions?: Question[] }> = {};

// Old ACT2 exams replaced by the 3D Academy Tests #1–#8 (act2_3d_exam1..8).
// Hidden everywhere (course pages and Bin), including any copies saved in Firestore.
const RETIRED_LESSON_IDS = new Set<string>([
  'act2_ex1', 'act2_ex2', 'act2_ex3', 'act2_ex4', 'act2_ex5', 'act2_ex6', 'act2_ex7', 'act2_ex8',
  'act2-exam1-27', 'act2-exam2-27', 'act2-exam3-27', 'act2-exam8-27',
  // EST1 exams replaced by verified versions (src/data/est1_official, ids ending in _v2)
  'est1_2020_oct', 'est1_2020_dec', 'est1_2021_jan', 'est1_2021_march', 'est1_2021_june', 'est1_2021_may', 'est1_2021_april', 'est1_2021_aug', 'est1_2021_oct', 'est1_2021_dec', 'est1_2026_march_new', 'est1_2026_may_new', 'est1_2026_sample',
]);
let isInitialSyncDone = false;
let initialSyncPromise: Promise<void> | null = null;
let subscribers: (() => void)[] = [];
let lessonsUnsubscribe: (() => void) | null = null;

// Synchronous local storage read fallback
try {
  const localCached = localStorage.getItem('app_lessons_cache');
  if (localCached) {
    const parsed = JSON.parse(localCached);
    Object.keys(parsed).forEach(k => {
      lessonCache[k] = parsed[k];
    });
  }
} catch (e) {
  console.warn("localStorage initial read fallback", e);
}

// IDB load is handled asynchronously
let idbLoadPromise = get('app_lessons_cache').then(cached => {
    if (cached) {
        let parsed = typeof cached === 'string' ? JSON.parse(cached) : cached;
        Object.keys(parsed).forEach(k => {
            if (!lessonCache[k]) lessonCache[k] = parsed[k];
        });
    }
}).catch(e => console.warn("IDB read fallback", e));


const notifySubscribers = () => subscribers.forEach(fn => fn());
const persistToLocal = () => {
    // IndexedDB is our primary high-capacity offline cache store
    set('app_lessons_cache', lessonCache).catch(e => {
        console.warn("IDB write warning:", e);
    });

    // Try storing in localStorage only if size permits (< 2MB), otherwise rely on IndexedDB
    try {
        const str = JSON.stringify(lessonCache);
        if (str.length < 2 * 1024 * 1024) {
            localStorage.setItem('app_lessons_cache', str);
        } else {
            localStorage.removeItem('app_lessons_cache');
        }
    } catch (e) {
        try {
            localStorage.removeItem('app_lessons_cache');
        } catch (_) {}
    }
};


import { safeStringify, deepSanitize } from './authService';

// Helper to remove undefined keys to prevent overwriting defaults
const cleanUndefined = (obj: any) => {
  const newObj = { ...obj };
  Object.keys(newObj).forEach(key => {
    if (newObj[key] === undefined) delete newObj[key];
  });
  return newObj;
};

export const lessonService = {
  subscribe: (callback: () => void) => {
    subscribers.push(callback);
    return () => { subscribers = subscribers.filter(fn => fn !== callback); };
  },
  // Get currently loaded lessons synchronously from memory/localStorage cache
  getLoadedLessonsSync: (): Lesson[] => {
    const mergedLessons: Lesson[] = LESSONS.map(l => ({ ...l }));
    Object.values(lessonCache).forEach(cachedL => {
        const index = mergedLessons.findIndex(l => l.id === cachedL.id);
        if (index !== -1) {
            mergedLessons[index] = { 
              ...mergedLessons[index], 
              ...cachedL,
              recordLink: cachedL.recordLink || mergedLessons[index].recordLink
            };
        } else {
            mergedLessons.push(cachedL);
        }
    });
    const seenIds = new Set<string>();
    return mergedLessons.filter(l => {
        if (!l || !l.id || l.deleted || RETIRED_LESSON_IDS.has(l.id) || seenIds.has(l.id)) return false;
        seenIds.add(l.id);
        return true;
    });
  },

  // Initialize: Set up real-time listener using onSnapshot with instant local cache loading
  getAllLessons: async (): Promise<Lesson[]> => {
    if (!isInitialSyncDone) {
        if (!initialSyncPromise) {
            initialSyncPromise = new Promise(async (resolve) => {
                let resolved = false;
                const finishInitialSync = () => {
                    if (!resolved) {
                        resolved = true;
                        resolve();
                    }
                };

                // If we already have lessons in local storage cache, unblock UI immediately
                if (Object.keys(lessonCache).length > 0) {
                    finishInitialSync();
                }

                try {
                  await idbLoadPromise;
                  if (Object.keys(lessonCache).length > 0) {
                    finishInitialSync();
                  }
                } catch (e) {
                  console.warn("IDB await warning in getAllLessons", e);
                }

                // Fallback timeout so UI renders instantly from cache if offline or slow network
                const fallbackTimeout = setTimeout(finishInitialSync, 1000);
                  
                try {
                  // Establish real-time onSnapshot sync with Firestore persistent local cache
                  lessonsUnsubscribe = onSnapshot(collection(db, 'lessons'), (snap) => {
                      clearTimeout(fallbackTimeout);
                      snap.forEach(d => {
                          const data = d.data();
                          const rawLesson = {
                              id: d.id,
                              title: data.title,
                              description: data.description,
                              icon: data.icon,
                              studyNotes: data.studyNotes,
                              questions: data.questions,
                              course: data.course,
                              type: data.type,
                              order: data.order,
                              deleted: data.deleted,
                              recordLink: data.recordLink,
                              pdfUrl: data.pdfUrl
                          };
                          lessonCache[d.id] = cleanUndefined(rawLesson) as any;
                      });

                      // Automatically remove any documents that were deleted from the remote collection
                      snap.docChanges().forEach(change => {
                          if (change.type === 'removed') {
                              delete lessonCache[change.doc.id];
                          }
                      });

                      isInitialSyncDone = true;
                      persistToLocal();
                      notifySubscribers();
                      finishInitialSync();
                  }, (e) => {
                      console.error("Firebase onSnapshot lessons error:", e?.message || e);
                      // CRITICAL: Unsubscribe if quota exceeded or permission error to prevent infinite backoff loops
                      if (lessonsUnsubscribe) {
                        try { lessonsUnsubscribe(); } catch (_) {}
                        lessonsUnsubscribe = null;
                      }
                      isInitialSyncDone = true;
                      finishInitialSync();
                  });
                } catch (e) {
                  console.error("Could not initialize onSnapshot for lessons:", e instanceof Error ? e.message : String(e));
                  isInitialSyncDone = true;
                  finishInitialSync();
                }
            });
        }
        await initialSyncPromise;
    }

    // 2. Merge with Static (Static serves as "default" or "seed", Cache overrides)
    // Create a deep copy of LESSONS to avoid mutation issues
    const mergedLessons: Lesson[] = LESSONS.map(l => ({ ...l }));

    // Update static ones with cache if exists, or add new dynamic ones
    Object.values(lessonCache).forEach(cachedL => {
        const index = mergedLessons.findIndex(l => l.id === cachedL.id);
        if (index !== -1) {
            // Override static with cached version
            mergedLessons[index] = { 
              ...mergedLessons[index], 
              ...cachedL,
              recordLink: cachedL.recordLink || mergedLessons[index].recordLink
            };
        } else {
            // Add new dynamic lesson from cache
            mergedLessons.push(cachedL);
        }
    });

    // 3. Filter out deleted lessons and ensure uniqueness by ID
    const seenIds = new Set<string>();
    return mergedLessons.filter(l => {
        if (!l || !l.id || l.deleted || RETIRED_LESSON_IDS.has(l.id) || seenIds.has(l.id)) return false;
        seenIds.add(l.id);
        return true;
    });
  },

  getDeletedLessons: async (): Promise<Lesson[]> => {
    // Rely on getAllLessons logic but reverse the filter or process it manually
    // Actually, let's just do a similar merge and filter for deleted === true
    const mergedLessons: Lesson[] = LESSONS.map(l => ({ ...l }));
    Object.values(lessonCache).forEach(cachedL => {
        const index = mergedLessons.findIndex(l => l.id === cachedL.id);
        if (index !== -1) {
            mergedLessons[index] = { ...mergedLessons[index], ...cachedL };
        } else {
            mergedLessons.push(cachedL);
        }
    });
    return mergedLessons.filter(l => l.deleted && !RETIRED_LESSON_IDS.has(l.id));
  },

  getLesson: (lessonId: LessonId): Lesson => {
    const staticL = LESSONS.find(l => l.id === lessonId);
    const cached = lessonCache[lessonId];
    if (staticL && cached) {
      return { 
        ...staticL, 
        ...cached, 
        recordLink: cached.recordLink || staticL.recordLink 
      };
    }
    if (cached) return cached;
    return staticL || {
        id: lessonId,
        title: 'Unknown Lesson',
        description: '',
        icon: 'FileText',
        studyNotes: ''
    };
  },

  saveLesson: async (lesson: Lesson) => {
    // Update Memory immediately for UI responsiveness
    const current = lessonCache[lesson.id] || {};
    lessonCache[lesson.id] = { ...current, ...cleanUndefined(lesson) } as any; persistToLocal(); notifySubscribers();

    // Update Firestore
    try {
      const payload: any = JSON.parse(safeStringify(deepSanitize({
        title: lesson.title,
        description: lesson.description,
        studyNotes: lesson.studyNotes,
        icon: lesson.icon,
        course: lesson.course,
        type: lesson.type,
        order: lesson.order,
        deleted: lesson.deleted, // Ensure deleted status is synced if changed
        recordLink: lesson.recordLink
      })));

      // Calculate approximate size
      const jsonString = safeStringify(payload);
      const sizeInBytes = new TextEncoder().encode(jsonString).length;
      const sizeInMB = sizeInBytes / (1024 * 1024);
      
      console.log(`Saving lesson ${lesson.id}. Size: ${sizeInMB.toFixed(2)} MB`);

      if (sizeInMB > 1.0) {
          throw new Error(`Data size (${sizeInMB.toFixed(2)}MB) exceeds Firestore limit of 1MB.`);
      }

      await setDoc(doc(db, 'lessons', lesson.id), payload, { merge: true });
      console.log(`Successfully saved lesson ${lesson.id}`);
    } catch (e: any) {
      console.error("Failed to save lesson to Firestore", e instanceof Error ? e.message : String(e));
      const errorMsg = e.message || String(e);
      if (errorMsg.includes('too large')) {
          alert("SAVE FAILED: The study notes or lesson metadata is too large (limit 1MB). Please remove some images.");
      } else {
          alert(`Error saving to database: ${errorMsg}`);
        throw e;
      }
    }
  },

  createLesson: async (lesson: Lesson) => {
      // Update cache immediately
      lessonCache[lesson.id] = { ...lesson, questions: [] };
      
      try {
          await setDoc(doc(db, 'lessons', lesson.id), cleanUndefined({
              title: lesson.title,
              description: lesson.description,
              studyNotes: lesson.studyNotes,
              icon: lesson.icon,
              course: lesson.course,
              type: lesson.type,
              order: lesson.order,
              questions: []
          }));
      } catch (e) {
          console.error("Failed to create lesson in Firestore", e instanceof Error ? e.message : String(e));
          alert("Error creating exam in database. Please check your connection.");
      }
  },

  deleteLesson: async (lessonId: string) => {
      // Always soft delete so it goes to the Bin
      const current = lessonCache[lessonId] || { id: lessonId };
      lessonCache[lessonId] = { ...current, id: lessonId, deleted: true } as any;
      try {
          // Mark as deleted in DB to persist removal
          await setDoc(doc(db, 'lessons', lessonId), { deleted: true }, { merge: true });
      } catch (e) {
          console.error("Failed to soft-delete lesson", e instanceof Error ? e.message : String(e));
      }
  },

  restoreLesson: async (lessonId: string) => {
      const current = lessonCache[lessonId] || { id: lessonId };
      current.deleted = false;
      lessonCache[lessonId] = current; persistToLocal(); notifySubscribers();
      try {
          await setDoc(doc(db, 'lessons', lessonId), { deleted: false }, { merge: true });
      } catch (e) {
          console.error("Failed to restore lesson", e instanceof Error ? e.message : String(e));
      }
  },

  permanentlyDeleteLesson: async (lessonId: string) => {
      delete lessonCache[lessonId]; persistToLocal(); notifySubscribers();
      try {
          await deleteDoc(doc(db, 'lessons', lessonId));
      } catch (e) {
          console.error("Failed to permanently delete lesson", e instanceof Error ? e.message : String(e));
      }
  },

  getQuestions: (id: LessonId): Question[] => {
    const cachedLesson = lessonCache[id];
    let questions: Question[] = [];

    let staticQs = STATIC_QUESTIONS[id] || [];

    if (staticQs.length === 0) {
        const title = (cachedLesson?.title || lessonService.getLesson(id)?.title || '').toLowerCase().replace(/[^a-z0-9]/g, '');
        if (title.includes('systemofequations') || title.includes('systemequation')) {
            staticQs = STATIC_QUESTIONS['est1_system_of_equations'] || STATIC_QUESTIONS['(Est1- system of equations )'] || [];
        } else if (title.includes('trigonometrynew') || title.includes('est2trigonometrynew')) {
            staticQs = STATIC_QUESTIONS['est2_trigonometry_new'] || [];
        } else if (title.includes('est1statisticspart1') || title.includes('est1statisticpart1')) {
            staticQs = STATIC_QUESTIONS['est1_statistics_part1_new'] || [];
        } else if (title.includes('est1statistic') || title.includes('est2statistic') || (title.includes('statistic') && title.includes('est1'))) {
            staticQs = STATIC_QUESTIONS['est2_est1_statistic'] || [];
        } else if ((title.includes('transformation') || title === 'transformations') && (cachedLesson?.course === 'EST2' || lessonService.getLesson(id)?.course === 'EST2' || String(id).includes('est2'))) {
            staticQs = STATIC_QUESTIONS['est2_transformations'] || [];
        }
    }

    if (cachedLesson && Array.isArray(cachedLesson.questions)) {
        // Use cachedLesson.questions array directly as authoritative list saved by user
        const staticMap = new Map(staticQs.map(sq => [String(sq.id), sq]));
        
        questions = cachedLesson.questions.map(cq => {
            const sq = staticMap.get(String(cq.id));
            if (!sq) return cq;
            return {
                ...sq,
                ...cq,
                image: cq.image || sq.image,
                options: (cq.options && cq.options.length > 0) ? cq.options : sq.options
            };
        });
    } else {
        questions = [...staticQs];
    }

    // Dynamic Topics Logic
    const lesson = lessonService.getLesson(id);
    
    // Ensure categories for exam questions use official course categories, preserving manual edits
    if (lesson && lesson.type === 'exam') {
        questions = questions.map(q => ({
            ...q,
            category: getOrCategorizeQuestion(q, lesson.course || 'EST1', lesson.title)
        }));
    } else if (lesson && lesson.type !== 'exam') {
        questions = questions.map(q => ({ ...q, category: q.category || lesson.title }));
    }

    // Fallback for user creating "Est1-linear equations part1" from PDF (only if never saved)
    if ((!cachedLesson || !Array.isArray(cachedLesson.questions)) && questions.length === 0 && lesson && lesson.title && lesson.title.toLowerCase().replace(/\s+/g, '') === 'est1-linearequationspart1') {
        questions = [...(STATIC_QUESTIONS['est1_linear_equation_part1'] || [])];
    }

    if (lesson.dynamicTopics && lesson.dynamicTopics.length > 0) {
        const allQs = lessonService.getAllSystemQuestions();
        
        // Filter questions that match the dynamic topics
        const dynamicQs = allQs.filter(q => {
            // Check topics array
            if (q.topics && q.topics.some(t => lesson.dynamicTopics?.includes(t))) return true;
            // Check category
            if (q.category && lesson.dynamicTopics?.includes(q.category)) return true;
            return false;
        });

        // Merge and deduplicate by ID
        const seenIds = new Set(questions.map(q => String(q.id)));
        dynamicQs.forEach(q => {
            if (!seenIds.has(String(q.id))) {
                // Add as a copy to avoid mutation issues, but keep ID to track origin
                questions.push({ ...q, id: `dynamic_${q.id}` }); 
                seenIds.add(String(q.id));
            }
        });
    }

    // Normalize correctAnswer for multiple-choice questions (e.g. converting "A) 505" to 0)
    return questions.map(q => {
      let finalCorrectAnswer = q.correctAnswer;
      if (q.options && q.options.length > 0) {
        if (typeof finalCorrectAnswer === 'string') {
          const trimmed = finalCorrectAnswer.trim();
          const match = trimmed.match(/^([A-Ea-e])/);
          if (match) {
            finalCorrectAnswer = match[1].toUpperCase().charCodeAt(0) - 65;
          } else {
            const num = parseInt(trimmed, 10);
            if (!isNaN(num) && num >= 0 && num < q.options.length) {
              finalCorrectAnswer = num;
            }
          }
        }
      }
      return {
        ...q,
        correctAnswer: finalCorrectAnswer
      };
    });
  },

  getAllSystemQuestions: (): Question[] => {
      const allQuestions: Question[] = [];
      const seenIds = new Set<string>();
      const processedLessonIds = new Set<string>();

      // 1. Get from Cached Lessons (Dynamic/Edited Questions) - Priority
      Object.values(lessonCache).forEach(lesson => {
          if (lesson.questions && lesson.questions.length > 0) {
              processedLessonIds.add(lesson.id);
              lesson.questions.forEach(q => {
                  if (!seenIds.has(String(q.id))) {
                      const finalQ = (lesson.type !== 'exam' && !q.category) ? { ...q, category: lesson.title } : q;
                      allQuestions.push(finalQ);
                      seenIds.add(String(q.id));
                  }
              });
          }
      });

      // 2. Get from Static Questions (only if not already processed from cache)
      Object.entries(STATIC_QUESTIONS).forEach(([lessonId, qs]) => {
          if (!processedLessonIds.has(lessonId)) {
              const lesson = lessonService.getLesson(lessonId);
              qs.forEach(q => {
                  if (!seenIds.has(String(q.id))) {
                      const finalQ = lesson && lesson.type !== 'exam' ? { ...q, category: lesson.title } : q;
                      allQuestions.push(finalQ);
                      seenIds.add(String(q.id));
                  }
              });
          }
      });

      return allQuestions;
  },

  addDynamicTopic: async (lessonId: LessonId, topic: string) => {
      const lesson = lessonService.getLesson(lessonId);
      const currentTopics = lesson.dynamicTopics || [];
      
      if (!currentTopics.includes(topic)) {
          const newTopics = [...currentTopics, topic];
          
          // Update Cache
          lessonCache[lessonId] = { ...lesson, dynamicTopics: newTopics } as any; persistToLocal(); notifySubscribers();

          // Save to DB
          await lessonService.saveLesson({ ...lesson, dynamicTopics: newTopics });
      }
  },

  calculateSizeMB: (data: any): number => {
    try {
        const jsonString = safeStringify(data);
        const sizeInBytes = new TextEncoder().encode(jsonString).length;
        return sizeInBytes / (1024 * 1024);
    } catch (e) {
        return 0;
    }
  },

  saveQuestions: async (id: LessonId, questions: Question[]) => {
    try {
        const lesson = lessonService.getLesson(id);
        const courseName = lesson?.course || 'EST1';

        // Auto-apply course categories to exam questions every time an exam is added/saved,
        // while preserving any manual category edits permanently!
        let processedQuestions = questions;
        if (lesson && lesson.type === 'exam') {
            processedQuestions = questions.map(q => ({
                ...q,
                category: getOrCategorizeQuestion(q, courseName, lesson.title)
            }));
        }

        // Deep clean undefined for Firestore
        const cleanQuestions = deepSanitize(processedQuestions);
        
        // Ensure no undefined values & no circular refs
        const finalClean = JSON.parse(safeStringify(cleanQuestions));

        // Calculate approximate size
        const sizeInMB = lessonService.calculateSizeMB({ questions: finalClean });
        
        console.log(`Saving ${id} questions. Size: ${sizeInMB.toFixed(2)} MB`);

        if (sizeInMB > 1.0) {
            throw new Error(`Data size (${sizeInMB.toFixed(2)}MB) exceeds Firestore limit of 1MB. Please remove some images or use smaller ones.`);
        }

        // Warning: Firestore has a 1MB limit. High-res images in 'questions' can cause this to fail.
        await setDoc(doc(db, 'lessons', id), { questions: finalClean }, { merge: true });
        
        // Only update cache if successful
        const current = lessonCache[id] || {};
        lessonCache[id] = { ...current, questions: finalClean } as any; persistToLocal(); notifySubscribers();
        
        console.log(`Successfully saved questions for ${id}`);
    } catch (e: any) {
        console.error("Failed to save questions to Firestore", e instanceof Error ? e.message : String(e));
        const errorMsg = e.message || String(e);
        if (errorMsg.includes('too large') || errorMsg.includes('1048576 bytes')) {
            alert("UPLOAD FAILED: The exam is too large for the database (maximum 1MB). This usually happens when adding too many high-resolution images. Please delete some images or convert them to smaller sizes.");
        } else {
            alert(`Error saving to database: ${errorMsg}`);
        throw e;
        }
    }
  },

  resetLesson: async (lessonId: LessonId) => {
    let staticLesson = LESSONS.find(l => l.id === lessonId);
    let staticQuestions = STATIC_QUESTIONS[lessonId] || [];

    if (staticQuestions.length === 0) {
      const lessonObj = staticLesson || lessonService.getLesson(lessonId);
      const titleNorm = (lessonObj?.title || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      if (titleNorm.includes('systemofequations') || titleNorm.includes('systemequation')) {
        staticQuestions = STATIC_QUESTIONS['est1_system_of_equations'] || STATIC_QUESTIONS['(Est1- system of equations )'] || [];
      }
    }

    const titleToUse = staticLesson?.title || lessonService.getLesson(lessonId)?.title || 'Lesson';
    const payload = JSON.parse(safeStringify(deepSanitize({
        title: titleToUse,
        description: staticLesson?.description || '',
        studyNotes: staticLesson?.studyNotes || '',
        questions: staticQuestions,
        course: staticLesson?.course || 'EST1',
        type: staticLesson?.type || 'lesson',
        deleted: false
    })));
    
    lessonCache[lessonId] = { 
      ...(staticLesson || lessonService.getLesson(lessonId)), 
      questions: staticQuestions, 
      deleted: false 
    } as any; 
    persistToLocal(); 
    notifySubscribers();
    
    try {
        await setDoc(doc(db, 'lessons', lessonId), payload);
    } catch (e) {
        console.error("Failed to reset lesson", e instanceof Error ? e.message : String(e));
    }
  }
};
