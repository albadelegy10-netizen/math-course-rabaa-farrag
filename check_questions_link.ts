import { STATIC_QUESTIONS } from './questions';
import { StaticLessonIds } from './types';
import { est1_2026_march } from './est1_2026_march_new';
import { EST1_2026_MARCH_SET } from './src/data/questions_est1_2026_march';

console.log('STATIC_QUESTIONS count for est1_2026_march:', STATIC_QUESTIONS[StaticLessonIds.EST12026March]?.length);
console.log('est1_2026_march from est1_2026_march_new length:', est1_2026_march.length);
console.log('EST1_2026_MARCH_SET from questions_est1_2026_march length:', EST1_2026_MARCH_SET.length);
