
import { LessonId, Question } from './types';
import { lessonService } from './lessonService';

// The questionService now acts as a facade for the lessonService's question handling capabilities.
// This ensures that all data (Metadata + Questions) is stored in the same Firestore document structure.

export const questionService = {
  // Get questions for a lesson
  getQuestions: (lessonId: LessonId): Question[] => {
    return lessonService.getQuestions(lessonId);
  },

  // Save modified questions
  saveQuestions: (lessonId: LessonId, questions: Question[]) => {
    lessonService.saveQuestions(lessonId, questions);
  },

  // Reset to original static questions
  resetQuestions: (lessonId: LessonId) => {
    // We use lessonService's reset which handles both metadata and questions, 
    // but effectively resets questions if we re-save static ones.
    // However, to just reset questions without touching metadata:
    // Actually, we should pull from constants via lessonService reset logic or direct save.
    // For simplicity, let's trigger a full reset via lessonService for consistency in this editor context
    lessonService.resetLesson(lessonId);
  }
};
