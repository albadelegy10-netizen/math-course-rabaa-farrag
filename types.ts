
export type LessonId = string;

// Keep commonly used IDs as constants if needed for static mapping, 
// but the type is now flexible.
export const StaticLessonIds = {
  SATEx1: 'sat_ex1',
  SATEx3: 'sat_ex3',
  SATEx4: 'sat_ex4',
  SATEx5: 'sat_ex5',
  SATEx6: 'sat_ex6',
  SATEx7: 'sat_ex7',
  SATEx8: 'sat_ex8',
  SATEx9: 'sat_ex9',
  SATEx10: 'sat_ex10',
  SATScatterPlot: 'sat_scatter_plot',
  SATNov1_2025: 'sat_2025_nov1',
  SATDec_2025: 'sat_2025_dec',
  SATDec_2025_FormC: 'sat_2025_dec_form_c',
  SATDec_2025_FormD: 'sat_2025_dec_form_d', // New Exam ID
  SAT2026MarchFormA: 'sat_2026_march_form_a',
  SAT2026MarchFormB: 'sat_2026_march_form_b',
  SAT2026MarchFormC: 'sat_2026_march_form_c',
  SAT2026MarchFormD: 'sat_2026_march_form_d',
  SATCircleMastery: 'sat_circle_mastery',
  SATSolvingEquationsWordProblems: 'sat_solving_equations_word_problems',
  SATPercentage: 'sat_percentage',
  SATInverseFunction: 'sat_inverse_function',
  DSATProbabilityPart1: 'dsat_probability_part1',
  DSATHardQuestionsPart1: 'dsat_hard_questions_part1',
  
  ACT2Ex1: 'act2_ex1',
  ACT2Exam1_27: 'act2-exam1-27',
  ACT2Exam2_27: 'act2-exam2-27',
  ACT2Exam3_27: 'act2-exam3-27',
  ACT2Exam8_27: 'act2-exam8-27',
  ACT2Ex2: 'act2_ex2',
  ACT2Ex3: 'act2_ex3',
  ACT2Ex4: 'act2_ex4',
  ACT2Ex5: 'act2_ex5',
  ACT2Ex6: 'act2_ex6',
  ACT2Ex7: 'act2_ex7',
  ACT2Ex8: 'act2_ex8',
  ACT2Percentage: 'ACT2-percentage', // New ACT2 Percentage Lesson
  
  EST1Ex1: 'est1_ex1',
  EST1Ex2: 'est1_ex2',
  EST1Ex3: 'est1_ex3',
  EST12020M10: 'est1_2020_m10', // New Exam
  EST1Inequality: 'est1_inequality',
  EST1Ratio: 'est1_ratio',
  EST1Exponent: 'est1_exponent',
  EST1Polynomial: 'est1_polynomial',
  EST1LinearEquationPart1: 'est1_linear_equation_part1',
  EST1LinearEquationWord: 'est1_linear_equation_word', // New Lesson
  EST1LinearEquationWordProblem: 'est1_linear_equation_word_problem', // New EST1 Lesson
  EST1MidpointLength: 'est1_midpoint_length', // New EST1 Lesson
  EST1Isolation: 'est1_isolation', // New EST1 Lesson
  EST1SystemOfEquations: 'est1_system_of_equations', // New EST1 Lesson
  EST1Oct2021: 'est1_2021_oct',
  EST1May2021: 'est1_2021_may',
  EST1SolvingEquationsWordProblems: 'est1_solving_equations_word_problems', // New Lesson
  EST1Percentage: 'est1_percentage', // New Lesson
  EST1StatisticsPart2: 'est1_statistics_part2', // New Lesson
  DSATStatisticsPart2: 'dsat_statistics_part2', // New Lesson
  EST1StatisticsPart1: 'est1_statistics_part1',
  EST1StatisticsPart1New: 'est1_statistics_part1_new', // New Lesson
  EST1InverseFunction: 'est1_inverse_function', // New Lesson
  EST1Transformations: 'est1_transformations', // New Lesson
  EST1PythagorasSinLaw: 'est1_pythagoras_sin_law',
  EST1Variation: 'est1_variation', // New Lesson
  EST1ProbabilityPart1: 'est1_probability_part1',
  EST1QuadraticEquationsRootsPart1: 'est1_quadratic_equations_roots_part1',
  EST1QuadraticEquationsVertexPart2: 'est1_quadratic_equations_vertex_part2',
  EST12026Jan: 'est1_2026_jan', // New Exam
  EST12026Jan2: 'est1_2026_jan2', // New Exam
  EST12026JanComplete: 'est1_2026_jan_complete', // Complete Exam
  EST12026Sample: 'est1_2026_sample', // New Exam
  EST12026Expect: 'est1_2026_expect', // New Exam
  EST12026March: 'est1_2026_march_new', // New Exam
  EST12026MaySample: 'est1_2026_may_sample', // New Exam
  EST12026May: 'est1_2026_may',
  EST12026MayNew: 'est1_2026_may_new', // New Exam
  EST12021March: 'est1_2021_march',
  EST22026Jan: 'est2_2026_jan', // New Exam
  EST2Exam6: 'est2_exam_6', // New EST2 Exam
  EST2Exam7: 'est2_exam_7', // New EST2 Exam
  EST22026Sample: 'est2_2026_sample', // New Exam
  EST22021October: 'ESt2-2021-October', // New EST2 Exam
  EST22021May: 'Est2-2021-May', // New EST2 Exam
  EST22021June: 'Est2-2021-June', // New EST2 Exam
  EST2DomainRange: 'est2_domain_range',
  EST2EvenOdd: 'est2_even_odd',
  EST2ArithmeticSequence: 'est2_arithmetic_sequence', // New Lesson
  EST2GeometricSequence: 'est2_geometric_sequence', // New Lesson
  EST2CircleSphere: 'est2_circle_sphere', // New Lesson
  EST2Inequality: 'est2_inequality', // New Lesson
  EST2DistanceAngle: 'est2_distance_angle', // New Lesson
  EST2SolvingEquation: 'est2_solving_equation', // New Lesson
  EST2Quadratic: 'est2_quadratic', // New Lesson
  EST2Statistics: 'est2_statistics', // New Lesson
  EST2Est1Statistic: 'est2_est1_statistic', // New Lesson
  EST2CompositeInverse: 'est2_composite_inverse', // New Lesson
  EST2Composite: 'est2_composite', // New Lesson
  EST2Complex: 'est2_complex', // New Lesson
  EST2Polynomial2027: 'est2_polynomial_2027', // New Lesson (Est2-polynomial 2027)
  EST2LinearPolynomial: 'est2_linear_polynomial', // New Lesson
  EST2RationalFunction: 'est2_rational_function', // New Lesson
  EST2PeriodicFunction: 'est2_periodic_function', // New Lesson
  EST2Angles: 'est2_angles', // New Lesson
  EST2Geometry2026: 'est2_geometry_2026', // New Lesson
  EST1Angles: 'est1_angles', // New Lesson
  SATAngles: 'sat_angles', // New Lesson
  SATPythagorasSinLaw: 'sat_pythagoras_sin_law',
  EST2Logarithm: 'est2_logarithm', // New Lesson
  EST2Trigonometry: 'est2_trigonometry', // New Lesson
  EST2TrigonometryNew: 'est2_trigonometry_new', // New Lesson
  EST2Matrix: 'est2_matrix', // New Lesson
  EST2Percentage: 'EST2-percentage', // New EST2 Percentage Lesson
  EST2Transformations: 'est2_transformations', // New Lesson
  EST2Isolation: 'est2_isolation', // New EST2 Lesson
  EST2MidpointDistance: 'est2_midpoint_distance', // New EST2 Midpoint & Distance Lesson
  EST12025: 'est1_2025_custom',
  EST12025Form1: 'est1_2025_form1',
  EST12025Form2: 'est1_2025_form2',
  EST12025Form3: 'est1_2025_form3',
  EST12025Form4: 'est1_2025_form4',
  EST12025Form5: 'est1_2025_form5',
  EST12025Form6: 'est1_2025_form6',
  EST12025May: 'est1_2025_may',
  EST12021April: 'est1_2021_april',
  EST12021Jan: 'est1_2021_jan',
  EST12021Aug: 'est1_2021_aug',
  EST12021Dec: 'est1_2021_dec',
  EST12020Dec: 'est1_2020_dec',
  EST12020Oct: 'est1_2020_oct',
  EST12021June: 'est1_2021_june',
  EST12022June: 'est1_2022_june',
  EST12022March: 'est1_2022_march',
  EST1NewExam: 'est1_new_exam',
  
  SolvingEquation28: 'solving_equation_28',
  AnglesParallelLines: 'angles_parallel_lines',
  AreaPerimeter: 'area_perimeter_lesson',
  Circle1: 'circle_1_geometry', // New Lesson
  GeometryPythagorasSinLaw: 'geometry_pythagoras_sin_law',
  Similarity: 'geometry_similarity',
  EST2Similarity: 'est2_similarity',
  EST2InverseFunction1: 'est2_inverse_function1', // Pythagoras and Sin Law
  SAT1Exam: 'sat1_exam_practice',
  SATNov1_2025_FormA: 'sat_2025_nov1_form_a', // New Exam
  SATNov1_2025_ExB: 'sat_2025_nov1_ex_b', // New Exam
  SATNov1_2025_FormC: 'sat_2025_nov1_form_c', // New Exam
  SATNov2024FormA: 'sat_2024_nov_form_a', // New Exam
  SATOct2025FormA: 'sat_2025_oct_form_a', // New Exam
  SATOct2025FormB: 'sat_2025_oct_form_b', // New Exam
  SATSep2025FormB: 'sat_2025_sep_form_b', // New Exam
  SATAug2025FormB: 'sat_2025_aug_form_b', // New Exam
  SATAug2025FormBB: 'sat_2025_aug_form_bb', // New Exam
  SATJune2025FormA: 'sat_2025_june_form_a', // New Exam
  SATJune2025FormB: 'sat_2025_june_form_b', // New Exam
  SATMarch2025FormA: 'sat_2025_march_form_a', // New Exam
  SATMarch2025FormANew1: 'sat_2025_march_form_a_new1', // New Exam
  SATMarch2025FormB: 'sat_2025_march_form_b', // New Exam
  SATMarch2025FormC: 'sat_2025_march_form_c', // New Exam
  SATMarch2025FormD: 'sat_2025_march_form_d', // New Exam
  SATMarch2025FormBB: 'sat_2025_march_form_bb', // New Exam
  SATMarch2025FormE: 'sat_2025_march_form_e', // New Exam
  EST1LinearEquationPart2: 'est1_linear_equation_part2', // New Lesson
  ACT1MalekExam: 'act1_malek_exam',
};

export interface Lesson {
  id: LessonId;
  title: string;
  description: string;
  icon: string;
  studyNotes: string;
  course?: string; // e.g. 'DSAT', 'EST1'
  type?: 'lesson' | 'exam'; // Distinguish between lessons and full exams
  deleted?: boolean; // Flag for soft deletion of static content
  dynamicTopics?: string[]; // List of topics to automatically include questions from
  questions?: Question[]; // Optional: Questions can be stored directly in the lesson object
  order?: number; // Used for drag-and-drop reordering
  recordLink?: string; // Video or recorded lecture link
  pdfUrl?: string; // Printable PDF of the exam/lesson that students and admins can download
}

export interface Question {
  id: number | string;
  question: string;
  type?: 'multiple-choice' | 'fill-in-the-blank' | 'grid-in';
  options: string[];
  correctAnswer?: number | string; // 0-indexed or string for grid-in
  answerText?: string; // For fill-in-the-blank questions
  explanation: string;
  html?: string;
  svg?: string; // Optional SVG string or HTML for graphs/images
  imageUrl?: string; // Optional URL for image-based questions
  image?: string; // Base64 or URL for diagram/image
  explanationSvg?: string; // Optional SVG/HTML specifically for the explanation
  youtubeLink?: string; // Optional YouTube video URL for explanation
  category?: string; // Topic category (e.g., Geometry, Algebra)
  topic?: string; // Single topic tag
  topics?: string[]; // Detailed topic tags (e.g., 'solving equation', 'Geometry', etc.)
  examId?: string; // Optional reference to the exam this question belongs to
  difficulty?: string; // Optional difficulty level
  originalQuestionId?: string | number; // To track imported questions and prevent duplicates
  isGridIn?: boolean; // Added for EST
  section?: string;
  text?: string;
}

export type View = 'home' | 'lesson' | 'quiz' | 'users' | 'bookmarks' | 'review' | 'reports' | 'parent-dashboard' | 'editor' | 'courses' | 'payment' | 'homework' | 'attendance' | 'course-details' | 'smart-practice' | 'question-bank' | 'analysis' | 'book-generator' | 'history' | 'bin' | 'groups' | 'leaderboard' | 'pdf-exams' | 'ai-generator';

export type CourseCategory = 'DSAT' | 'EST1' | 'EST2' | 'ACT1' | 'ACT2' | 'GEOMETRY';

export interface QuizState {
  lessonId: LessonId;
  mode: 'practice' | 'exam';
  questions: Question[];
  currentIndex: number;
  answers: (number | string | null)[];
  isComplete: boolean;
  timeLeft: number | null;
  isRetakeMode?: boolean; // If true, we are only doing wrong ones
}

export type UserRole = 'admin' | 'co-admin' | 'student' | 'parent';

export interface Testimonial {
  id: string;
  studentName: string;
  course: CourseType | string;
  content: string; // The testimonial text
  score?: string; // e.g. 780, 32, 1450
  timestamp: number;
}


export type CourseType = 'DSAT' | 'EST1' | 'EST2' | 'ACT1' | 'ACT2' | 'GEOMETRY';

export interface Bookmark {
  id: string;
  lessonId: LessonId;
  topicName: string;
  question: Question;
  timestamp: number;
  mode: 'practice' | 'exam';
}

export interface Mistake {
  id: string; // unique combo of lessonId + questionId
  lessonId: LessonId;
  topicName: string;
  question: Question;
  timestamp: number;
  count: number; // How many times they got it wrong
}

export interface QuizAttempt {
  id: string;
  lessonId: string;
  topicName: string;
  score: number; // Percentage
  totalQuestions: number;
  correctCount: number;
  timestamp: number;
  mode: 'practice' | 'exam';
  questionAnswers?: {
    questionId: number | string;
    questionText?: string;
    category?: string;
    userAnswer?: string | number;
    correctAnswer?: string | number;
    isCorrect: boolean;
  }[];
}

export interface PaymentRecord {
  id: string;
  amount: number;
  date: string; // ISO Date string (YYYY-MM-DD)
  notes: string;
  timestamp: number;
}

export interface AttendanceRecord {
  id: string;
  date: string; // YYYY-MM-DD
  status: 'present' | 'absent' | 'late';
  notes?: string;
  timestamp: number;
}

export interface Assignment {
  id: string;
  lessonId?: string; // Optional now, since we have links
  course: CourseType;
  availableDate?: string; // YYYY-MM-DD (Start Date)
  dueDate?: string; // YYYY-MM-DD (Optional for free homework)
  maxAttempts: number;
  manualScore?: number;
  assignedDate: number;
  notes?: string;
  type?: 'lesson' | 'homework' | 'exam' | 'record' | 'pdf';
  link?: string;
  title?: string;
}

export interface GroupAssignment {
  id: string;
  groupId: string;
  type: 'lesson' | 'homework' | 'exam' | 'record' | 'pdf';
  title?: string;
  lessonId?: string;
  link?: string;
  availableDate?: string;
  dueDate?: string;
  notes?: string;
  assignedDate: number;
  targetStudentUsernames?: string[];
  maxAttempts?: number;
  attendanceRecords?: { username: string; status: 'present' | 'absent'; date?: string; notes?: string }[];
}

export interface StudentGroup {
  id: string;
  name: string;
  course: CourseType;
  studentUsernames: string[];
  assignments?: GroupAssignment[];
  createdAt?: number; // Timestamp when group was created
  createdDay?: string; // Formatted day/date string
  status?: 'active' | 'inactive'; // Active (default) or Inactive when course lessons finished
}

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  time: number;
  unread: boolean;
  type: 'homework' | 'exam' | 'system' | 'reminder';
  link?: string;
  lessonId?: string;
  dueDate?: string;
  assignmentId?: string;
}

export interface User {
  username: string;
  password: string; // In a real app, this should be hashed
  role: UserRole;
  tier?: 'free' | 'premium'; // Account tier
  progress: Record<string, number>; // LessonId -> Highest Score Percentage
  bookmarks: Bookmark[];
  mistakes: Mistake[]; // Track incorrect answers
  history: QuizAttempt[];
  payments?: PaymentRecord[]; // Track financial payments
  attendance?: AttendanceRecord[]; // Track class attendance
  assignments?: Assignment[]; // Track homework
  
  // Extended Profile Fields
  name?: string;
  email?: string;
  phone?: string;
  parentPhone?: string;
  whatsapp?: string;
  parentWhatsapp?: string;
  joinDate?: string;
  dueAmount?: number;
  paymentPlan?: 'monthly' | 'weekly' | 'per_session';
  planPrice?: number;
  pricePerSession?: number;
  isActive?: boolean;
  course?: CourseType; // Kept for backward compatibility
  courses?: CourseType[]; // New: Multiple courses support
  profilePicture?: string; // Base64 string or URL
  questionEmotions?: Record<string, string>; // questionId -> emotion ('love', 'like', 'angry', etc.)
  notifications?: AppNotification[];
  
  // Parent specific
  children?: string[]; // Array of usernames linked to this parent
}
