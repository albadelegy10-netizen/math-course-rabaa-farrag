import { Question } from '../../../types';

/**
 * Normalise question text so it renders correctly everywhere (quiz, question bank, PDF exports):
 *  - currency written as "$$50$" or "$\$9{,}646.87$" becomes a literal "\$50" / "\$9,646.87"
 *    (the text renderer shows "\$" as a dollar sign instead of starting math mode)
 *  - bare \begin{cases} ... \end{cases} systems get $...$ math delimiters
 */
export const fixText = (t: string): string =>
  String(t ?? '')
    .replace(/\$\$(\d[\d,]*(?:\.\d+)?)\$(?!\$)/g, (_m, n) => '\\$' + n)
    .replace(/\$\\\$([0-9{},.]+)\$/g, (_m, n) => '\\$' + String(n).replace(/[{}]/g, ''))
    .replace(/\$(\d[\d,]*(?:\.\d+)?)\\\$\$/g, (_m, n) => '\\$' + n) // "$5000\$$" -> "\$5000"
    .replace(/additional \$300$/, 'additional \\$300')
    .replace(/^\s*(\\begin\{cases\}[\s\S]*\\end\{cases\})\s*$/, (_m, c) => '$' + c + '$');

export const normalise = (questions: Question[]): Question[] =>
  questions.map(q => ({
    ...q,
    question: fixText(q.question),
    options: (q.options || []).map(fixText),
    explanation: fixText(q.explanation),
  }));
