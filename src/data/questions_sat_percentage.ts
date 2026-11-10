import { Question } from '../../types';
import { PERCENTAGE_PART1 } from './questions_percentage_part1';
import { PERCENTAGE_PART2 } from './questions_percentage_part2';
import { PERCENTAGE_PART3 } from './questions_percentage_part3';

export const SAT_PERCENTAGE_SET: Question[] = [
  ...PERCENTAGE_PART1,
  ...PERCENTAGE_PART2,
  ...PERCENTAGE_PART3
];
