import { doc, setDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export interface QuizDraft {
  lessonId: string;
  topicName?: string;
  mode: 'practice' | 'exam';
  currentIndex: number; // 0-indexed position (e.g. 8 = Question 9)
  answers: (number | string | null)[];
  submittedQuestions: number[]; // Array of submitted question indices
  totalQuestions: number;
  updatedAt: number;
}

const DRAFT_PREFIX = 'math_course_quiz_draft_v1_';

export const quizDraftService = {
  /**
   * Saves or updates a draft for a specific user & lesson.
   */
  saveDraft: (
    username: string,
    lessonId: string,
    draftData: Omit<QuizDraft, 'lessonId' | 'updatedAt'>
  ) => {
    if (!username || !lessonId || lessonId === 'review') return;
    try {
      const sanitizedUsername = username.trim().toLowerCase();
      const sanitizedLessonId = lessonId.trim();
      const key = `${DRAFT_PREFIX}${sanitizedUsername}_${sanitizedLessonId}`;
      const draft: QuizDraft = {
        ...draftData,
        lessonId: sanitizedLessonId,
        updatedAt: Date.now(),
      };
      
      // LocalStorage backup
      localStorage.setItem(key, JSON.stringify(draft));

      // Dual Persistence: Firestore
      if (db) {
        const docId = `${sanitizedUsername}_${sanitizedLessonId}`;
        setDoc(doc(db, 'quizDrafts', docId), draft, { merge: true }).catch(err => {
          console.error('Firestore saveDraft error:', err);
        });
      }
    } catch (e) {
      console.warn('Could not save quiz draft to localStorage:', e);
    }
  },

  /**
   * Retrieves a saved draft for a specific user & lesson synchronously from LocalStorage,
   * with async background sync attempt from Firestore.
   */
  getDraft: (username: string, lessonId: string): QuizDraft | null => {
    if (!username || !lessonId) return null;
    try {
      const sanitizedUsername = username.trim().toLowerCase();
      const sanitizedLessonId = lessonId.trim();
      const key = `${DRAFT_PREFIX}${sanitizedUsername}_${sanitizedLessonId}`;
      const raw = localStorage.getItem(key);
      if (!raw) return null;
      const draft: QuizDraft = JSON.parse(raw);
      if (
        draft &&
        typeof draft.currentIndex === 'number' &&
        Array.isArray(draft.answers)
      ) {
        return draft;
      }
    } catch (e) {
      console.warn('Could not read quiz draft from localStorage:', e);
    }
    return null;
  },

  /**
   * Async fetch draft directly from Firestore if offline/localStorage missing.
   */
  getDraftAsync: async (username: string, lessonId: string): Promise<QuizDraft | null> => {
    if (!username || !lessonId) return null;
    const local = quizDraftService.getDraft(username, lessonId);
    if (local) return local;

    if (db) {
      try {
        const sanitizedUsername = username.trim().toLowerCase();
        const sanitizedLessonId = lessonId.trim();
        const docId = `${sanitizedUsername}_${sanitizedLessonId}`;
        const snap = await getDoc(doc(db, 'quizDrafts', docId));
        if (snap.exists()) {
          const draft = snap.data() as QuizDraft;
          // Store locally
          const key = `${DRAFT_PREFIX}${sanitizedUsername}_${sanitizedLessonId}`;
          localStorage.setItem(key, JSON.stringify(draft));
          return draft;
        }
      } catch (e) {
        console.error('Firestore getDraftAsync error:', e);
      }
    }
    return null;
  },

  /**
   * Clears a saved draft once a quiz is finished or reset.
   */
  clearDraft: (username: string, lessonId: string) => {
    if (!username || !lessonId) return;
    try {
      const sanitizedUsername = username.trim().toLowerCase();
      const sanitizedLessonId = lessonId.trim();
      const key = `${DRAFT_PREFIX}${sanitizedUsername}_${sanitizedLessonId}`;
      localStorage.removeItem(key);

      if (db) {
        const docId = `${sanitizedUsername}_${sanitizedLessonId}`;
        deleteDoc(doc(db, 'quizDrafts', docId)).catch(err => {
          console.error('Firestore deleteDoc quizDrafts error:', err);
        });
      }
    } catch (e) {
      console.warn('Could not clear quiz draft from localStorage:', e);
    }
  },

  /**
   * Gets all saved drafts for a user.
   */
  getAllDrafts: (username: string): Record<string, QuizDraft> => {
    if (!username) return {};
    const result: Record<string, QuizDraft> = {};
    const prefix = `${DRAFT_PREFIX}${username.trim().toLowerCase()}_`;
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(prefix)) {
          const lessonId = key.replace(prefix, '');
          const raw = localStorage.getItem(key);
          if (raw) {
            const draft = JSON.parse(raw);
            if (draft) result[lessonId] = draft;
          }
        }
      }
    } catch (e) {
      console.warn('Could not list quiz drafts from localStorage:', e);
    }
    return result;
  },
};
