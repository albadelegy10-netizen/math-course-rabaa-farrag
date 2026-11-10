import { Question } from '../types';
import { getCourseCategories } from './courseCategories';

/**
 * Returns the resolved category for a question.
 * If the question already has an explicit, non-generic category (e.g., from a manual edit),
 * THAT CATEGORY IS PRESERVED PERMANENTLY.
 * Otherwise, if empty or generic (e.g. matching exam title/ID), it auto-classifies
 * the question into one of the official course categories defined for that course.
 */
export const getOrCategorizeQuestion = (
  q: Question,
  courseName?: string,
  examTitleOrId?: string
): string => {
  const categories = getCourseCategories(courseName);

  // 1. Check if q.category is already set
  if (q.category && q.category.trim() !== '') {
    const existing = q.category.trim();

    // If it's any variation of solving equation or word problems, normalize to "solving equation& word problem"
    const lower = existing.toLowerCase();
    if (lower.includes('one equation with') || 
        lower.includes('solving equation and word problems') ||
        lower.includes('solving equation & word problem') ||
        lower.includes('solving equation& word problem') ||
        lower.includes('solving equations') ||
        lower.includes('solving equation') ||
        lower === 'word problem' ||
        lower === 'word problems') {
      return "solving equation& word problem";
    }

    // If it's a known course category or a manual edit (not just the generic exam title/id), keep it PERMANENTLY!
    const isGenericExamName = examTitleOrId && 
      (existing.toLowerCase() === examTitleOrId.toLowerCase() || 
       existing.toLowerCase().includes('exam') || 
       existing.toLowerCase().includes('march') || 
       existing.toLowerCase().includes('form'));

    if (!isGenericExamName || categories.includes(existing)) {
      return existing;
    }
  }

  // 2. Also check q.topic
  if (q.topic && q.topic.trim() !== '') {
    const topicTrim = q.topic.trim();
    if (topicTrim.toLowerCase().includes('one equation with') || 
        topicTrim.toLowerCase().includes('solving equation and word problems')) {
      return "solving equation& word problem";
    }
    if (categories.includes(topicTrim)) {
      return topicTrim;
    }
  }

  // 3. Perform smart keyword matching against the question's course category list
  const text = ((q.question || '') + ' ' + (q.explanation || '') + ' ' + (q.text || '')).toLowerCase();

  if (/matrix|matrices|determinant/i.test(text) && categories.includes("Matrix")) {
    return "Matrix";
  }
  if (/vector|magnitude|dot product/i.test(text) && categories.includes("Vector")) {
    return "Vector";
  }
  if (/limit|\\lim_/i.test(text) && categories.includes("Limits")) {
    return "Limits";
  }
  if (/arithmetic sequence|common difference/i.test(text) && categories.includes("Arithmetic Sequence")) {
    return "Arithmetic Sequence";
  }
  if (/geometric sequence|common ratio/i.test(text) && categories.includes("Geometric Sequence")) {
    return "Geometric Sequence";
  }
  if (/logarithm|log_|\ln/i.test(text) && categories.includes("logarithm")) {
    return "logarithm";
  }
  if (/midpoint|distance between two|distance formula/i.test(text) && categories.includes("Midpoint, Distance between Two points")) {
    return "Midpoint, Distance between Two points";
  }
  if (/odd.*even|even.*odd|f\(-x\)/i.test(text) && categories.includes("odd-Even function")) {
    return "odd-Even function";
  }
  if (/distance between line and point/i.test(text) && categories.includes("Distance between line and point")) {
    return "Distance between line and point";
  }
  if (/ellipse/i.test(text) && categories.includes("Ellipse")) {
    return "Ellipse";
  }
  if (/hyperbola/i.test(text) && categories.includes("hyperbola")) {
    return "hyperbola";
  }
  if (/cosine law|law of cosines/i.test(text) && categories.includes("Cosine law")) {
    return "Cosine law";
  }
  if (/sin law|law of sines/i.test(text) && categories.includes("Sin Law")) {
    return "Sin Law";
  }
  if (/permutation|combination|npr|ncr|ways to arrange/i.test(text) && categories.includes("permutation")) {
    return "permutation";
  }
  if (/inverse function|f\^{-1}|inverse of/i.test(text) && categories.includes("Inverse Function")) {
    return "Inverse Function";
  }
  if (/composite function|f\(g\(x\)\)|g\(f\(x\)\)|f \\circ g/i.test(text) && categories.includes("Composite Function")) {
    return "Composite Function";
  }
  if (/domain|range/i.test(text) && categories.includes("Domain - Range")) {
    return "Domain - Range";
  }
  if (/transformation|translated|shifted|reflected|stretched/i.test(text) && categories.includes("Transformation")) {
    return "Transformation";
  }
  if (/isolation|isolate|in terms of|express.*in terms/i.test(text) && categories.includes("Isolation")) {
    return "Isolation";
  }
  if (/circle|radius|diameter|circumference|\(x-h\)\^2/i.test(text) && categories.includes("Circle and Circle Equation")) {
    return "Circle and Circle Equation";
  }
  if (/exponent|exponential|growth|decay|e\^/i.test(text) && categories.includes("Exponent - Exponential function")) {
    return "Exponent - Exponential function";
  }
  if (/rational function|asymptote|vertical asymptote|horizontal asymptote/i.test(text) && categories.includes("Rational Function (Vertical Asymptote, Horizontal Asym.)")) {
    return "Rational Function (Vertical Asymptote, Horizontal Asym.)";
  }
  if (/absolute|\|.*\||absolute value/i.test(text) && categories.includes("Absolute Function")) {
    return "Absolute Function";
  }
  if (/volume|surface area|cylinder|cone|sphere|prism|pyramid/i.test(text) && categories.includes("Volume - surface Area")) {
    return "Volume - surface Area";
  }
  if (/pythagor|hypotenuse|right triangle/i.test(text) && categories.includes("pythagorase")) {
    return "pythagorase";
  }
  if (/parallel|alternate interior|corresponding|parallel lines/i.test(text) && categories.includes("angles - parallel lines")) {
    return "angles - parallel lines";
  }
  if (/similar|similarity|scale factor/i.test(text) && categories.includes("Similarity")) {
    return "Similarity";
  }
  if (/perimeter|area|square|rectangle|trapezoid/i.test(text) && categories.includes("perimeter and Area")) {
    return "perimeter and Area";
  }
  if (/trigonometry|sin|cos|tan|radians|degrees|unit circle/i.test(text) && categories.includes("Trigonometry")) {
    return "Trigonometry";
  }
  if (/system of equation|system|two equations/i.test(text) && categories.includes("system of Equation")) {
    return "system of Equation";
  }
  if (/linear|slope|intercept|y\s*=|y\s*-/i.test(text) && categories.includes("linear Equation")) {
    return "linear Equation";
  }
  if (/variation|proportional|inversely|directly/i.test(text) && categories.includes("Variation (Direct - Inverse)")) {
    return "Variation (Direct - Inverse)";
  }
  if (/ratio|proportion/i.test(text) && categories.includes("Ratio")) {
    return "Ratio";
  }
  if (/polynomial|monomial|binomial|trinomial|degree|factoring/i.test(text) && categories.includes("Polynomials")) {
    return "Polynomials";
  }
  if (/mean|median|mode|standard deviation|box plot|histogram|statistic|data/i.test(text) && categories.includes("statistics")) {
    return "statistics";
  }
  if (/percent|percentage|increased by|decreased by/i.test(text) && categories.includes("percentage")) {
    return "percentage";
  }
  if (/probability|chance|random|dice|deck/i.test(text) && categories.includes("probability")) {
    return "probability";
  }
  if (/inequality|inequalities|<|>|\\le|\\ge/i.test(text) && categories.includes("Inequality")) {
    return "Inequality";
  }

  // Default fallback to simplified category
  return "solving equation& word problem";
};
