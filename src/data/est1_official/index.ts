import { Question, Lesson } from '../../../types';
import { EST1_OFFICIAL_AUG21 } from './aug21';
import { EST1_OFFICIAL_DEC20 } from './dec20';
import { EST1_OFFICIAL_DEC21 } from './dec21';
import { EST1_OFFICIAL_JAN21 } from './jan21';
import { EST1_OFFICIAL_JUN22 } from './jun22';
import { EST1_OFFICIAL_MAR21 } from './mar21';
import { EST1_OFFICIAL_MAR22 } from './mar22';
import { EST1_OFFICIAL_MAR26 } from './mar26';
import { EST1_OFFICIAL_MAY21 } from './may21';
import { EST1_OFFICIAL_MAY26 } from './may26';
import { EST1_OFFICIAL_OCT20 } from './oct20';
import { EST1_OFFICIAL_OCT21 } from './oct21';
import { EST1_OFFICIAL_SAM26 } from './sam26';

// Official EST I exams (verified against the PDFs, official answer keys, figures/tables from the papers).
export const EST1_OFFICIAL_EXAMS: Record<string, Question[]> = {
  est1_2020_oct_v2: EST1_OFFICIAL_OCT20,
  est1_2020_dec_v2: EST1_OFFICIAL_DEC20,
  est1_2021_jan_v2: EST1_OFFICIAL_JAN21,
  est1_2021_march_v2: EST1_OFFICIAL_MAR21,
  est1_2021_june_v2: EST1_OFFICIAL_MAR21,
  est1_2021_may_v2: EST1_OFFICIAL_MAY21,
  est1_2021_april_v2: EST1_OFFICIAL_MAY21,
  est1_2021_aug_v2: EST1_OFFICIAL_AUG21,
  est1_2021_oct_v2: EST1_OFFICIAL_OCT21,
  est1_2021_dec_v2: EST1_OFFICIAL_DEC21,
  est1_2022_march_v2: EST1_OFFICIAL_MAR22,
  est1_2022_june_v2: EST1_OFFICIAL_JUN22,
  est1_2026_march_v2: EST1_OFFICIAL_MAR26,
  est1_2026_may_v2: EST1_OFFICIAL_MAY26,
  est1_2026_sample_v2: EST1_OFFICIAL_SAM26
};

// Older lesson ids replaced by the verified versions (kept so old links/homework redirect).
export const EST1_REPLACED_IDS: Record<string, string> = {
  est1_2020_oct: 'est1_2020_oct_v2',
  est1_2020_dec: 'est1_2020_dec_v2',
  est1_2021_jan: 'est1_2021_jan_v2',
  est1_2021_march: 'est1_2021_march_v2',
  est1_2021_june: 'est1_2021_june_v2',
  est1_2021_may: 'est1_2021_may_v2',
  est1_2021_april: 'est1_2021_april_v2',
  est1_2021_aug: 'est1_2021_aug_v2',
  est1_2021_oct: 'est1_2021_oct_v2',
  est1_2021_dec: 'est1_2021_dec_v2',
  est1_2026_march_new: 'est1_2026_march_v2',
  est1_2026_may_new: 'est1_2026_may_v2',
  est1_2026_sample: 'est1_2026_sample_v2'
};

export const EST1_OFFICIAL_LESSONS: Lesson[] = [
 {
  "id": "est1_2020_oct_v2",
  "title": "est1- 2020-october",
  "description": "EST1 Official Exam - October 2020",
  "icon": "Sigma",
  "course": "EST1",
  "type": "exam",
  "pdfUrl": "/pdfs/est1/EST1-October-2020.pdf",
  "studyNotes": "**EST1 Official Exam - October 2020**\n\nOfficial EST I Math paper with the official answer key. Download the printable PDF (questions, answer key and worked answers) with the Download PDF button above."
 },
 {
  "id": "est1_2020_dec_v2",
  "title": "est1- 2020-december",
  "description": "EST1 Official Exam - December 2020",
  "icon": "Sigma",
  "course": "EST1",
  "type": "exam",
  "pdfUrl": "/pdfs/est1/EST1-December-2020.pdf",
  "studyNotes": "**EST1 Official Exam - December 2020**\n\nOfficial EST I Math paper with the official answer key. Download the printable PDF (questions, answer key and worked answers) with the Download PDF button above."
 },
 {
  "id": "est1_2021_jan_v2",
  "title": "EST1-2021-JAN",
  "description": "EST1 Official Exam - January 2021",
  "icon": "Sigma",
  "course": "EST1",
  "type": "exam",
  "pdfUrl": "/pdfs/est1/EST1-January-2021.pdf",
  "studyNotes": "**EST1 Official Exam - January 2021**\n\nOfficial EST I Math paper with the official answer key. Download the printable PDF (questions, answer key and worked answers) with the Download PDF button above."
 },
 {
  "id": "est1_2021_march_v2",
  "title": "Est1-2021-march",
  "description": "EST1 Official Exam - March 2021",
  "icon": "Sigma",
  "course": "EST1",
  "type": "exam",
  "pdfUrl": "/pdfs/est1/EST1-March-2021.pdf",
  "studyNotes": "**EST1 Official Exam - March 2021**\n\nOfficial EST I Math paper with the official answer key. Download the printable PDF (questions, answer key and worked answers) with the Download PDF button above."
 },
 {
  "id": "est1_2021_june_v2",
  "title": "est1-2021-june",
  "description": "EST1 Official Exam - June 2021 (same paper as March 2021)",
  "icon": "Sigma",
  "course": "EST1",
  "type": "exam",
  "pdfUrl": "/pdfs/est1/EST1-March-2021.pdf",
  "studyNotes": "**EST1 Official Exam - June 2021 (same paper as March 2021)**\n\nOfficial EST I Math paper with the official answer key. Download the printable PDF (questions, answer key and worked answers) with the Download PDF button above."
 },
 {
  "id": "est1_2021_may_v2",
  "title": "EST1 May 2021 Exam",
  "description": "EST1 Official Exam - May 2021",
  "icon": "Sigma",
  "course": "EST1",
  "type": "exam",
  "pdfUrl": "/pdfs/est1/EST1-May-2021.pdf",
  "studyNotes": "**EST1 Official Exam - May 2021**\n\nOfficial EST I Math paper with the official answer key. Download the printable PDF (questions, answer key and worked answers) with the Download PDF button above."
 },
 {
  "id": "est1_2021_april_v2",
  "title": "EST1-2021-APRIL",
  "description": "EST1 Official Exam - April 2021 (same paper as May 2021)",
  "icon": "Sigma",
  "course": "EST1",
  "type": "exam",
  "pdfUrl": "/pdfs/est1/EST1-May-2021.pdf",
  "studyNotes": "**EST1 Official Exam - April 2021 (same paper as May 2021)**\n\nOfficial EST I Math paper with the official answer key. Download the printable PDF (questions, answer key and worked answers) with the Download PDF button above."
 },
 {
  "id": "est1_2021_aug_v2",
  "title": "est1- 2021-august",
  "description": "EST1 Official Exam - August 2021",
  "icon": "Sigma",
  "course": "EST1",
  "type": "exam",
  "pdfUrl": "/pdfs/est1/EST1-August-2021.pdf",
  "studyNotes": "**EST1 Official Exam - August 2021**\n\nOfficial EST I Math paper with the official answer key. Download the printable PDF (questions, answer key and worked answers) with the Download PDF button above."
 },
 {
  "id": "est1_2021_oct_v2",
  "title": "EST1 October 2021 Exam",
  "description": "EST1 Official Exam - October 2021",
  "icon": "Sigma",
  "course": "EST1",
  "type": "exam",
  "pdfUrl": "/pdfs/est1/EST1-October-2021.pdf",
  "studyNotes": "**EST1 Official Exam - October 2021**\n\nOfficial EST I Math paper with the official answer key. Download the printable PDF (questions, answer key and worked answers) with the Download PDF button above."
 },
 {
  "id": "est1_2021_dec_v2",
  "title": "est1- 2021-december",
  "description": "EST1 Official Exam - December 2021",
  "icon": "Sigma",
  "course": "EST1",
  "type": "exam",
  "pdfUrl": "/pdfs/est1/EST1-December-2021.pdf",
  "studyNotes": "**EST1 Official Exam - December 2021**\n\nOfficial EST I Math paper with the official answer key. Download the printable PDF (questions, answer key and worked answers) with the Download PDF button above."
 },
 {
  "id": "est1_2022_march_v2",
  "title": "est1-2022-march",
  "description": "EST1 Official Exam - March 2022",
  "icon": "Sigma",
  "course": "EST1",
  "type": "exam",
  "pdfUrl": "/pdfs/est1/EST1-March-2022.pdf",
  "studyNotes": "**EST1 Official Exam - March 2022**\n\nOfficial EST I Math paper with the official answer key. Download the printable PDF (questions, answer key and worked answers) with the Download PDF button above."
 },
 {
  "id": "est1_2022_june_v2",
  "title": "est1-2022-june",
  "description": "EST1 Official Exam - June 2022",
  "icon": "Sigma",
  "course": "EST1",
  "type": "exam",
  "pdfUrl": "/pdfs/est1/EST1-June-2022.pdf",
  "studyNotes": "**EST1 Official Exam - June 2022**\n\nOfficial EST I Math paper with the official answer key. Download the printable PDF (questions, answer key and worked answers) with the Download PDF button above."
 },
 {
  "id": "est1_2026_march_v2",
  "title": "EST1-2026-MARCH-NEW",
  "description": "EST I Official Exam - March 2026 (50 Questions)",
  "icon": "Sigma",
  "course": "EST1",
  "type": "exam",
  "pdfUrl": "/pdfs/est1/EST1-March-2026.pdf",
  "examMinutes": 75,
  "studyNotes": "**EST I Official Exam - March 2026 (50 Questions)**\n\nOfficial EST I Math paper with the official answer key. Download the printable PDF (questions, answer key and worked answers) with the Download PDF button above."
 },
 {
  "id": "est1_2026_may_v2",
  "title": "EST1-2026-May -new",
  "description": "EST I Official Exam - May 2026 (50 Questions)",
  "icon": "Sigma",
  "course": "EST1",
  "type": "exam",
  "pdfUrl": "/pdfs/est1/EST1-May-2026.pdf",
  "examMinutes": 75,
  "studyNotes": "**EST I Official Exam - May 2026 (50 Questions)**\n\nOfficial EST I Math paper with the official answer key. Download the printable PDF (questions, answer key and worked answers) with the Download PDF button above."
 },
 {
  "id": "est1_2026_sample_v2",
  "title": "EST-2026-sample",
  "description": "EST I Math - 2026 Sample Exam (50 Questions)",
  "icon": "Sigma",
  "course": "EST1",
  "type": "exam",
  "pdfUrl": "/pdfs/est1/EST1-2026-Sample.pdf",
  "examMinutes": 75,
  "studyNotes": "**EST I Math - 2026 Sample Exam (50 Questions)**\n\nOfficial EST I Math paper with the official answer key. Download the printable PDF (questions, answer key and worked answers) with the Download PDF button above."
 }
];
