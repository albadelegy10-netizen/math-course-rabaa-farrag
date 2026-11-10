import React, { useState, useEffect, useRef } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { LessonId, Question, Lesson } from "../types";
import { questionService } from "../questionService";
import { lessonService } from "../lessonService";
import { generateQuestionsFromPdf } from "../geminiService";
import { renderRichText, renderSvgOrImage } from "../utils/textRenderer";
import { getCourseCategories } from "../utils/courseCategories";
import { getOrCategorizeQuestion } from "../utils/courseCategorizer";
import { compressImageBase64 } from "../utils/imageCompressor";
import { generateAutoTablePDF, generateWord } from "../utils/documentGenerator";
import { CopyQuestionModal } from "./CopyQuestionModal";
import {
  Save,
  Plus,
  Trash2,
  Edit2,
  X,
  Youtube,
  Image as ImageIcon,
  Tag,
  Upload,
  CheckCircle2,
  FileText,
  Home,
  ChevronRight,
  FilePlus,
  Loader2,
  Database,
  Eye,
  EyeOff,
  AlertTriangle,
  ArrowUpDown,
  Download,
  Copy,
  CheckSquare,
  Square,
} from "lucide-react";

// Use dynamic import for pdfjs to avoid build issues with worker
// We will set workerSrc at runtime
declare global {
  interface Window {
    pdfjsLib: any;
  }
}

interface ExamEditorProps {
  lessonId: LessonId;
  lessonTitle: string;
  onExit: () => void;
  courseCategory?: string;
  onNavigateHome?: () => void;
  onNavigateToCourse?: () => void;
  onNavigateToLesson?: () => void;
  onDeleteLesson?: () => void; // New prop for deleting the whole exam
  isSynced?: boolean;
}

type EditorTab = "questions" | "studyGuide";

const getAnswerDisplayLetter = (q: Question) => {
  if (q.options && q.options.length > 0) {
    if (typeof q.correctAnswer === 'number' && !isNaN(q.correctAnswer)) {
      return String.fromCharCode(65 + q.correctAnswer);
    }
    if (typeof q.correctAnswer === 'string') {
      const trimmed = q.correctAnswer.trim();
      const match = trimmed.match(/^([A-Ea-e])/);
      if (match) return match[1].toUpperCase();
      const num = parseInt(trimmed, 10);
      if (!isNaN(num) && num >= 0 && num < 26) return String.fromCharCode(65 + num);
      const optIdx = q.options.findIndex(opt => opt === trimmed || opt.startsWith(trimmed));
      if (optIdx !== -1) return String.fromCharCode(65 + optIdx);
      return trimmed;
    }
    return "N/A";
  }
  return q.answerText || (typeof q.correctAnswer === 'string' ? q.correctAnswer : "N/A");
};

const getCorrectAnswerIndex = (correctAnswer?: number | string, options: string[] = []): number => {
  if (typeof correctAnswer === 'number' && !isNaN(correctAnswer)) return correctAnswer;
  if (typeof correctAnswer === 'string') {
    const trimmed = correctAnswer.trim();
    const match = trimmed.match(/^([A-Ea-e])/);
    if (match) return match[1].toUpperCase().charCodeAt(0) - 65;
    const num = parseInt(trimmed, 10);
    if (!isNaN(num) && num >= 0 && num < options.length) return num;
    const optIdx = options.findIndex(opt => opt === trimmed || opt.startsWith(trimmed));
    if (optIdx !== -1) return optIdx;
  }
  return 0;
};

interface SortableQuestionCardProps {
  q: Question;
  idx: number;
  handleEditQuestion: (q: Question) => void;
  setHoveredQuestionId: (id: number | string | null) => void;
  handleMoveQuestion: (e: React.MouseEvent, idx: number) => void;
  requestDeleteQuestion: (id: number | string) => void;
  renderRichText: (text: string) => React.ReactNode;
  isSelected?: boolean;
  onToggleSelect?: (id: number | string) => void;
  onCopySingleQuestion?: (q: Question) => void;
}

const SortableQuestionCard: React.FC<SortableQuestionCardProps> = ({
  q,
  idx,
  handleEditQuestion,
  setHoveredQuestionId,
  handleMoveQuestion,
  requestDeleteQuestion,
  renderRichText,
  isSelected = false,
  onToggleSelect,
  onCopySingleQuestion,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: q.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 1,
    opacity: isDragging ? 0.8 : 1,
    boxShadow: isDragging
      ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      onClick={() => handleEditQuestion(q)}
      onMouseEnter={() => setHoveredQuestionId(q.id)}
      onMouseLeave={() => setHoveredQuestionId(null)}
      className={`bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md cursor-pointer transition-all hover:border-purple-300 relative group min-h-[200px] flex flex-col ${
        isSelected ? "border-purple-500 bg-purple-50/20 ring-2 ring-purple-200" : "border-gray-200"
      } ${isDragging ? "border-purple-500 ring-2 ring-purple-200" : ""}`}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center space-x-2">
          {onToggleSelect && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleSelect(q.id);
              }}
              className={`p-1 rounded-md transition-colors ${
                isSelected ? "text-purple-600" : "text-gray-300 hover:text-gray-500"
              }`}
              title={isSelected ? "Deselect Question" : "Select Question"}
              onPointerDown={(e) => e.stopPropagation()}
            >
              {isSelected ? <CheckSquare className="w-5 h-5 fill-purple-100" /> : <Square className="w-5 h-5" />}
            </button>
          )}
          <span className="text-xs font-black text-gray-400 uppercase tracking-widest">
            Question {idx + 1}
          </span>
        </div>
        <div className="flex items-center space-x-1.5">
          <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded">
            {q.category || "General"}
          </span>
          {onCopySingleQuestion && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onCopySingleQuestion(q);
              }}
              className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
              title="Copy Question to Another Lesson/Exam"
              onPointerDown={(e) => e.stopPropagation()}
            >
              <Copy className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleEditQuestion(q);
            }}
            className="p-1.5 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 hover:text-purple-700 transition-colors opacity-100"
            title="Edit Question" onPointerDown={(e) => e.stopPropagation()}
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            {...attributes}
            {...listeners}
            className="p-1.5 bg-gray-50 text-gray-500 rounded-lg hover:bg-gray-200 hover:text-gray-700 transition-colors opacity-100 cursor-grab active:cursor-grabbing"
            title="Move Question"
            onClick={(e) => {
              e.stopPropagation();
              handleMoveQuestion(e, idx);
            }}
          >
            <ArrowUpDown className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              requestDeleteQuestion(q.id);
            }}
            className="p-1.5 bg-red-50 text-red-500 rounded-lg hover:bg-red-100 hover:text-red-700 transition-colors opacity-100"
            title="Delete Question" onPointerDown={(e) => e.stopPropagation()}
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      {(q.imageUrl || q.svg) && (
        <div className="mb-3 h-24 w-full overflow-hidden rounded-lg border border-gray-100 flex items-center justify-center bg-gray-50">
          {q.imageUrl ? (
            <img
              src={q.imageUrl}
              alt="Thumbnail"
              className="max-h-full max-w-full object-contain opacity-80"
            />
          ) : (
            <div
              className="scale-[0.4] origin-center opacity-60 pointer-events-none w-full"
              dangerouslySetInnerHTML={{ __html: q.svg || "" }}
            />
          )}
        </div>
      )}
      <div className="font-medium text-gray-800 line-clamp-3 mb-4 flex-1">
        {renderRichText(q.question)}
      </div>
      <div className="flex items-center text-xs text-gray-500 mt-auto pt-4 border-t border-gray-50">
        <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-green-500 flex-shrink-0" />
        <span className="text-gray-500 mr-1.5 font-medium">Answer:</span>
        <span className="font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200">
          {getAnswerDisplayLetter(q)}
        </span>
      </div>
      <div className="absolute inset-0 bg-purple-600/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity pointer-events-none"></div>
    </div>
  );
};

const ExamEditor: React.FC<ExamEditorProps> = ({
  lessonId,
  lessonTitle,
  onExit,
  courseCategory,
  onNavigateHome,
  onNavigateToCourse,
  onNavigateToLesson,
  onDeleteLesson,
}) => {
  const [activeTab, setActiveTab] = useState<EditorTab>("questions");

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setQuestions((prev) => {
        const oldIndex = prev.findIndex((q) => q.id === active.id);
        const newIndex = prev.findIndex((q) => q.id === over.id);
        const newQuestions = arrayMove(prev, oldIndex, newIndex);
        questionService.saveQuestions(lessonId, newQuestions);
        return newQuestions;
      });
    }
  };

  // Question State
  const [questions, setQuestions] = useState<Question[]>([]);
  const [editingId, setEditingId] = useState<number | string | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<
    number | string | null
  >(null);
  const [showDeleteLessonModal, setShowDeleteLessonModal] = useState(false);
  const [formData, setFormData] = useState<Question | null>(null);
  const [previewMode, setPreviewMode] = useState(false);

  // Copy & Selection State
  const [selectedQuestionIds, setSelectedQuestionIds] = useState<(number | string)[]>([]);
  const [copyModalOpen, setCopyModalOpen] = useState(false);
  const [questionsToCopy, setQuestionsToCopy] = useState<Question[]>([]);

  const handleToggleSelectQuestion = (qId: number | string) => {
    setSelectedQuestionIds(prev =>
      prev.includes(qId) ? prev.filter(id => id !== qId) : [...prev, qId]
    );
  };

  const handleSelectAllQuestions = () => {
    setSelectedQuestionIds(questions.map(q => q.id));
  };

  const handleDeselectAllQuestions = () => {
    setSelectedQuestionIds([]);
  };

  const handleOpenCopyModal = (qList: Question[]) => {
    if (qList.length === 0) return;
    setQuestionsToCopy(qList);
    setCopyModalOpen(true);
  };

  // Study Guide State
  const [lessonData, setLessonData] = useState<Lesson | null>(null);

  // UI State
  const [showToast, setShowToast] = useState(false);

  // Title Editing State
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [tempTitle, setTempTitle] = useState(lessonTitle);

  useEffect(() => {
    if (lessonData) {
      setTempTitle(lessonData.title);
    }
  }, [lessonData]);

  const saveTitleChange = () => {
    setIsEditingTitle(false);
    if (lessonData && tempTitle.trim() !== "") {
      setLessonData({ ...lessonData, title: tempTitle });
    }
  };

  // PDF Import State
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(1);
  const [isProcessingPdf, setIsProcessingPdf] = useState(false);
  const [pdfProgress, setPdfProgress] = useState("");
  const [hoveredQuestionId, setHoveredQuestionId] = useState<
    number | string | null
  >(null);
  const [isLoading, setIsLoading] = useState(true);

  // Export State
  const [isExporting, setIsExporting] = useState(false);

  const handleExportPDF = async (mode: "student_exam" | "teacher_key") => {
    if (questions.length === 0) {
      alert("No questions available to export.");
      return;
    }
    setIsExporting(true);
    try {
      await generateAutoTablePDF(lessonData || lessonTitle, questions, mode);
    } catch (e) {
      console.error("Failed to export PDF:", e);
      alert("An error occurred while exporting the PDF.");
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportWord = async (mode: "student_exam" | "teacher_key") => {
    if (questions.length === 0) {
      alert("No questions available to export.");
      return;
    }
    setIsExporting(true);
    try {
      await generateWord(lessonData || lessonTitle, questions, mode);
    } catch (e) {
      console.error("Failed to export Word document:", e);
      alert("An error occurred while exporting the Word document.");
    } finally {
      setIsExporting(false);
    }
  };

  // Upload State
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pdfInputRef = useRef<HTMLInputElement>(null);
  const [uploadTarget, setUploadTarget] = useState<{
    type: "question" | "studyGuide";
    field?: "question" | "explanation" | "option" | "svg" | "explanationSvg";
    idx?: number;
  } | null>(null);

  useEffect(() => {
    const initData = async () => {
      setIsLoading(true);

      try {
        // Wait for up to 1.5 seconds for data if it's not already in memory
        const timeout = new Promise((resolve) => setTimeout(resolve, 1500));
        await Promise.race([lessonService.getAllLessons(), timeout]);
      
    } catch (e) {
        console.warn("Editor initial sync timeout or error", e instanceof Error ? e.message : String(e));
      }

      // Load Questions from memory/cache
      setQuestions(questionService.getQuestions(lessonId));
      // Load Lesson Data
      setLessonData(lessonService.getLesson(lessonId));
      setIsLoading(false);

      // Continue background sync and update if necessary
      lessonService
        .getAllLessons()
        .then(() => {
          setQuestions(questionService.getQuestions(lessonId));
          setLessonData(lessonService.getLesson(lessonId));
        })
        .catch((e: any) => console.error(e instanceof Error ? e.message : String(e)));
    };
    initData();

    // Initialize PDF.js worker
    import("pdfjs-dist")
      .then((module) => {
        // In version 4+, the module might be the library itself or have a default export
        const pdfjs = module.default || module;
        window.pdfjsLib = pdfjs;

        // Use the version from the package to ensure worker matches
        const version = pdfjs.version || "4.10.38";
        // Use CDN for worker to avoid bundling complex worker files
        pdfjs.GlobalWorkerOptions.workerSrc = `https://esm.sh/pdfjs-dist@${version}/build/pdf.worker.min.mjs`;
        // Disable pdf.js warnings to prevent logging circular objects which crash the AI Studio proxy
        // @ts-ignore
        if (pdfjs.VerbosityLevel) pdfjs.GlobalWorkerOptions.verbosity = pdfjs.VerbosityLevel.ERRORS;
        // @ts-ignore
        else pdfjs.GlobalWorkerOptions.verbosity = 0;
        console.log("PDF.js loaded successfully, version:", version);
      })
      .catch((err) => {
        console.error("Failed to load PDF.js:", err instanceof Error ? err.message : String(err));
      });
  }, [lessonId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only trigger if not in an input/textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;

      if (e.key === "Delete" || e.key === "Backspace") {
        if (hoveredQuestionId !== null && !editingId) {
          requestDeleteQuestion(hoveredQuestionId);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hoveredQuestionId, editingId]);

  const saveQuestionsToStorage = (updatedQuestions: Question[]) => {
    setQuestions(updatedQuestions);
    questionService.saveQuestions(lessonId, updatedQuestions);
  };

  const saveLessonToStorage = async () => {
    if (lessonData) {
      await lessonService.saveLesson(lessonData);
    }
  };

  const handleSaveAll = async () => {
    let currentQuestions = questions;
    if (formData) {
      if (editingId !== null) {
        currentQuestions = currentQuestions.map((q) => (q.id === formData.id ? formData : q));
      } else {
        currentQuestions = [...currentQuestions, { ...formData, id: Date.now() }];
      }
      setEditingId(null);
      setFormData(null);
    }
    
    // Auto-apply course categorization rules to every question inside the exam (preserving manual edits)
    const courseName = lessonData?.course || 'EST1';
    const examTitle = lessonData?.title || '';
    currentQuestions = currentQuestions.map(q => ({
      ...q,
      category: getOrCategorizeQuestion(q, courseName, examTitle)
    }));
    setQuestions(currentQuestions);

    const size = lessonService.calculateSizeMB({ questions: currentQuestions });
    if (size > 0.95) {
      if (
        !confirm(
          `Warning: This exam is very large (${size.toFixed(2)}MB). You are nearing the 1MB Firestore limit. If you add more images, it might fail to save. Continue saving?`,
        )
      ) {
        return;
      }
    }
    try {
      await questionService.saveQuestions(lessonId, currentQuestions);
    await saveLessonToStorage();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
    
    } catch (e) {
      alert("Failed to save. You may have exceeded the database limit.");
    }
  };

  const handleReset = () => {
    if (
      confirm(
        "This will overwrite current Firebase data with the static hardcoded questions (e.g. from questions.ts). Continue?",
      )
    ) {
      if (activeTab === "questions") {
        questionService.resetQuestions(lessonId);
        setQuestions(questionService.getQuestions(lessonId));
      } else {
        lessonService.resetLesson(lessonId);
        setLessonData(lessonService.getLesson(lessonId));
      }
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    
    }
  };

  /* --- PDF Processing --- */
  const handlePdfFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPdfFile(e.target.files[0]);
    }
  };

  const processPdfImport = async () => {
    if (!pdfFile) return;
    if (startPage > endPage) {
      alert("Start page cannot be greater than end page.");
      return;
    }

    setIsProcessingPdf(true);
    setPdfProgress("Loading PDF engine...");

    try {
      if (!window.pdfjsLib) {
        throw new Error(
          "PDF engine (pdfjsLib) is not loaded yet. Please wait a moment and try again.",
        );
      }

      const arrayBuffer = await pdfFile.arrayBuffer();
      const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer })
        .promise;

      const numPages = pdf.numPages;
      if (endPage > numPages) {
        alert(`PDF only has ${numPages} pages. Adjusting end page.`);
        setEndPage(numPages);
      }

      const pageImages: { pageNumber: number; base64: string }[] = [];

      // Loop through pages and render to images
      for (let i = startPage; i <= Math.min(endPage, numPages); i++) {
        setPdfProgress(`Rendering page ${i}...`);
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 2.0 }); // High res for text clarity

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        if (context) {
          await page.render({ canvasContext: context, viewport: viewport })
            .promise;
          const base64 = canvas.toDataURL("image/png");
          pageImages.push({ pageNumber: i, base64 });
        }
      }

      // Send images to Gemini
      setPdfProgress("Sending to AI for extraction (can take 30-60s)...");
      const newQuestions = await generateQuestionsFromPdf(pageImages, (msg) =>
        setPdfProgress(msg),
      );

      if (newQuestions.length > 0) {
        // Assign new IDs
        const maxId =
          questions.length > 0
            ? Math.max(
                ...questions.map((q) => (typeof q.id === "number" ? q.id : 0)),
              )
            : 0;

        const processedQuestions = newQuestions.map((q, idx) => ({
          ...q,
          id: maxId + 1 + idx,
          category:
            lessonData?.type !== "exam"
              ? lessonData?.title ? lessonData.title.replace(/^\(\d+-/, "").replace(/\)$/, "").trim() : "Imported PDF"
              : q.category || "Imported PDF",
        }));

        const updated = [...questions, ...processedQuestions];
        saveQuestionsToStorage(updated);
        setShowPdfModal(false);
        setPdfFile(null);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      } else {
        alert(
          "No questions could be extracted. Please check the PDF quality or page range.",
        );
      }
    } catch (error: any) {
      console.error(
        "PDF Processing Error:",
        error instanceof Error ? error.message : String(error),
      );
      alert(
        `Error processing PDF: ${error.message || "Unknown error"}. Please try a smaller range or different file.`,
      );
    } finally {
      setIsProcessingPdf(false);
      setPdfProgress("");
    }
  };

  /* --- Question Editing Logic --- */
  const handleEditQuestion = (q: Question) => {
    console.log("Edit clicked", q.id); setEditingId(q.id);
    setFormData({ ...q });
    setPreviewMode(false);
  };

  const requestDeleteQuestion = (id: number | string) => {
    setDeleteConfirmId(id);
  };

  const performDeleteQuestion = () => {
    if (deleteConfirmId !== null) {
      const updated = questions.filter((q) => q.id !== deleteConfirmId);
      // Do not re-index to preserve IDs, especially if they are strings
      saveQuestionsToStorage(updated);
      if (editingId === deleteConfirmId) {
        setEditingId(null);
        setFormData(null);
      }
      setDeleteConfirmId(null);
    }
  };

  const handleMoveQuestion = (e: React.MouseEvent, currentIndex: number) => {
    e.stopPropagation();
    const newPosStr = prompt(
      `Move Question ${currentIndex + 1} to position (1-${questions.length}):`,
      (currentIndex + 1).toString(),
    );
    if (!newPosStr) return;
    const newPos = parseInt(newPosStr, 10);
    if (isNaN(newPos) || newPos < 1 || newPos > questions.length) {
      alert("Invalid position.");
      return;
    }

    const newIndex = newPos - 1;
    if (newIndex === currentIndex) return;

    const updated = [...questions];
    const [movedItem] = updated.splice(currentIndex, 1);
    updated.splice(newIndex, 0, movedItem);

    saveQuestionsToStorage(updated);
  };

  const handleAddNewQuestion = () => {
    const maxId =
      questions.length > 0
        ? Math.max(
            ...questions.map((q) => (typeof q.id === "number" ? q.id : 0)),
          )
        : 0;
    const newId = maxId + 1;

    const newQuestion: Question = {
      id: newId,
      question: "New Question Text",
      options: ["Option A", "Option B", "Option C", "Option D", "Option E"],
      correctAnswer: 0,
      explanation: "Explanation goes here.",
      svg: "",
      explanationSvg: "",
      youtubeLink: "",
      category:
        lessonData?.type !== "exam"
          ? lessonData?.title ? lessonData.title.replace(/^\(\d+-/, "").replace(/\)$/, "").trim() : "General"
          : "General",
      answerText: "",
    };
    setEditingId(newId);
    setFormData(newQuestion);
    setPreviewMode(false);
  };

  const saveCurrentQuestionEdit = () => {
    if (!formData) return;
    const exists = questions.find((q) => q.id === formData.id);
    let updatedQuestions;
    if (exists) {
      updatedQuestions = questions.map((q) =>
        q.id === formData.id ? formData : q,
      );
    } else {
      updatedQuestions = [...questions, formData];
    }
    saveQuestionsToStorage(updatedQuestions);
    setEditingId(null);
    setFormData(null);
  };

  /* --- File Upload & Insertion Logic --- */
  const triggerUpload = (
    type: "question" | "studyGuide",
    field?: "question" | "explanation" | "option" | "svg" | "explanationSvg",
    idx?: number,
  ) => {
    setUploadTarget({ type, field, idx });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
      fileInputRef.current.click();
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0 || !uploadTarget) return;

    const files = Array.from(e.target.files) as File[];
    const contentTags: string[] = [];

    for (const file of files) {
      if (!uploadTarget) continue;

      try {
        setIsLoading(true); // Optional: if we want to show loading
        const base64 = await uploadImageToStorage(file);
        setIsLoading(false);
        // Basic Image Tag
        contentTags.push(
          `<img src="${base64}" style="width: 300px; max-width: 100%; height: auto; display: block; margin: 10px auto; border-radius: 8px; border: 1px solid #e5e7eb;" alt="Uploaded Image" />`,
        );
      } catch (err) {
        setIsLoading(false);
        console.error(
          "Upload Error:",
          err instanceof Error ? err.message : String(err),
        );
      }
    }

    const combinedHtml = contentTags.join("\n");

    if (uploadTarget.type === "question") {
      setFormData((prev) => {
        if (!prev) return null;
        const newData = { ...prev };
        if (uploadTarget.field === "question")
          newData.question += "\n" + combinedHtml;
        else if (uploadTarget.field === "explanation")
          newData.explanation += "\n" + combinedHtml;
        else if (
          uploadTarget.field === "option" &&
          uploadTarget.idx !== undefined
        ) {
          const opts = [...newData.options];
          opts[uploadTarget.idx] += combinedHtml;
          newData.options = opts;
        } else if (uploadTarget.field === "svg")
          newData.svg = (newData.svg || "") + "\n" + combinedHtml;
        else if (uploadTarget.field === "explanationSvg")
          newData.explanationSvg = (newData.explanationSvg || "") + "\n" + combinedHtml;
        return newData;
      });
    } else if (uploadTarget.type === "studyGuide") {
      // Insert into Study Notes
      setLessonData((prev) => {
        if (!prev) return null;
        return { ...prev, studyNotes: prev.studyNotes + "\n" + combinedHtml };
      });
    }

    setUploadTarget(null);
  };

  const handlePaste = async (
    e: React.ClipboardEvent<HTMLTextAreaElement>,
    target: "question" | "explanation" | "svg" | "studyGuide",
  ) => {
    const items = e.clipboardData.items;

    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf("image") !== -1) {
        e.preventDefault();
        const blob = items[i].getAsFile();
        if (blob) {
          try {
            setIsLoading(true);
            const base64 = await uploadImageToStorage(blob);
            setIsLoading(false);
            const imgTag = `<img src="${base64}" style="width: 300px; max-width: 100%; height: auto; display: block; margin: 10px auto; border-radius: 8px; border: 1px solid #e5e7eb;" alt="Pasted Image" />`;

            if (target === "studyGuide") {
              setLessonData((prev) =>
                prev
                  ? {
                      ...prev,
                      studyNotes: (prev.studyNotes || "") + "\n" + imgTag,
                    }
                  : null,
              );
            } else {
              setFormData((prev) => {
                if (!prev) return null;
                const newData = { ...prev };
                if (target === "question")
                  newData.question = (newData.question || "") + "\n" + imgTag;
                else if (target === "explanation")
                  newData.explanation =
                    (newData.explanation || "") + "\n" + imgTag;
                else if (target === "svg")
                  newData.svg = (newData.svg || "") + "\n" + imgTag;
                return newData;
              });
            }
            setShowToast(true);
          } catch (err) {
            setIsLoading(false);
            console.error(
              "Paste compression error",
              err instanceof Error ? err.message : String(err),
            );
          }
        }
        break; // Handle first image only
      }
    }
  };

  const uploadImageToStorage = async (file: File): Promise<string> => {
    // Downscale and compress image (max 800px width/height, JPEG quality 0.7)
    // keeping Base64 string under 150 KB and saving directly into the Firestore document
    return await compressImageBase64(file, 800, 0.7);
  };

  const insertMediaLink = (
    type: "video" | "pdf" | "image",
    targetContext: "question" | "studyGuide",
    field?: "question" | "explanation" | "option",
    optionIndex?: number,
  ) => {
    const url = prompt(`Paste the ${type.toUpperCase()} link here:`);
    if (!url) return;

    if (type === "video" && targetContext === "question" && formData) {
      setFormData({ ...formData, youtubeLink: url });
      return;
    }

    let tag = "";
    if (type === "image") {
      tag = `<img src="${url}" style="width: 300px; max-width: 100%; height: auto; display: block; margin: 10px auto; border-radius: 8px;" alt="Image" />`;
    } else if (type === "video") {
      const title = prompt(
        "Enter a title for this video button (e.g., 'Watch Solution'):",
        "Watch Video Explanation",
      );
      const label = title || "Watch Video Explanation";
      // Create a visually appealing button-style link
      tag = `\n<a href="${url}" target="_blank" class="flex items-center p-4 bg-red-50 text-red-700 rounded-lg border border-red-100 hover:bg-red-100 transition-colors my-4 font-bold not-prose no-underline"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube w-6 h-6 mr-3"><path d="M2.5 17a24.12 24.12 0 0 1 0-3.235.199.199 0 0 1 .233-.197c1.697.278 3.396.417 5.093.417 1.697 0 3.396-.14 5.093-.417a.2.2 0 0 1 .233.197c.07.603.116 1.68.04 3.235-.113 2.308-1.574 3.522-3.15 3.522-1.575 0-3.036-1.214-3.149-3.522"/><path d="M16 8a5 5 0 0 1 5 5c0 2.761-2.239 5-5 5"/><path d="M4 8a5 5 0 0 0-5 5c0 2.761 2.239 5 5 5"/><line x1="12" x2="12" y1="2" y2="12"/></svg>${label}</a>\n`;
    } else if (type === "pdf") {
      const title = prompt(
        "Enter a title for this PDF (e.g., 'Download Worksheet'):",
        "Download Attached PDF",
      );
      const label = title || "Download Attached PDF";
      tag = `\n<a href="${url}" target="_blank" class="flex items-center p-4 bg-blue-50 text-blue-700 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors my-4 font-bold not-prose no-underline"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text w-6 h-6 mr-3"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>${label}</a>\n`;
    }

    if (targetContext === "question" && formData) {
      if (field === "explanation") {
        setFormData({
          ...formData,
          explanation: (formData.explanation || "") + "\n" + tag,
        });
      } else if (field === "option" && optionIndex !== undefined) {
        const newOptions = [...formData.options];
        newOptions[optionIndex] = (newOptions[optionIndex] || "") + tag;
        setFormData({ ...formData, options: newOptions });
      } else {
        setFormData({
          ...formData,
          question: (formData.question || "") + "\n" + tag,
        });
      }
    } else if (targetContext === "studyGuide" && lessonData) {
      setLessonData({
        ...lessonData,
        studyNotes: lessonData.studyNotes + "\n" + tag,
      });
    }
  };

  /* --- Render Helpers --- */
  const courseCategories = getCourseCategories(lessonData?.course);
  const availableCategories = Array.from(
    new Set([
      ...courseCategories,
      ...questions.map((q) => q.category).filter((c): c is string => typeof c === 'string' && c.trim() !== "")
    ]),
  );

  // Editor View for Study Guide
  const renderStudyGuideEditor = () => {
    if (!lessonData) return <div>Loading...</div>;

    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <div className="flex justify-between items-end mb-4">
          <label className="block text-lg font-bold text-gray-800">
            Study Guide Content
          </label>
          <div className="flex space-x-2">
            <button
              onClick={() => triggerUpload("studyGuide")}
              className="text-xs flex items-center bg-purple-600 text-white hover:bg-purple-700 px-3 py-1.5 rounded transition-all shadow-sm font-bold"
            >
              <Upload className="w-3 h-3 mr-2" /> Insert Image
            </button>
            <button
              onClick={() => insertMediaLink("image", "studyGuide")}
              className="text-xs flex items-center bg-indigo-600 text-white hover:bg-indigo-700 px-3 py-1.5 rounded transition-all shadow-sm font-bold"
            >
              <ImageIcon className="w-3 h-3 mr-2" /> Insert Image Link
            </button>
            <button
              onClick={() => insertMediaLink("video", "studyGuide")}
              className="text-xs flex items-center bg-red-600 text-white hover:bg-red-700 px-3 py-1.5 rounded transition-all shadow-sm font-bold"
            >
              <Youtube className="w-3 h-3 mr-2" /> Insert Video Link
            </button>
            <button
              onClick={() => insertMediaLink("pdf", "studyGuide")}
              className="text-xs flex items-center bg-blue-600 text-white hover:bg-blue-700 px-3 py-1.5 rounded transition-all shadow-sm font-bold"
            >
              <FileText className="w-3 h-3 mr-2" /> Insert PDF Link
            </button>
          </div>
        </div>
        <div className="mb-4 bg-purple-50/50 p-4 rounded-xl border border-purple-100">
          <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center">
            <Youtube className="w-4 h-4 mr-2 text-red-500" /> Lesson Record Link (YouTube URL)
          </label>
          <input
            type="text"
            value={lessonData.recordLink || ""}
            onChange={(e) =>
              setLessonData({ ...lessonData, recordLink: e.target.value })
            }
            placeholder="https://youtu.be/..."
            className="w-full p-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>
        <p className="text-xs text-gray-500 mb-2">
          Use Markdown-like syntax. Type **Bold Text** for headers. HTML is also
          supported.
        </p>
        <textarea
          value={lessonData.studyNotes}
          onChange={(e) =>
            setLessonData({ ...lessonData, studyNotes: e.target.value })
          }
          onPaste={(e) => handlePaste(e, "studyGuide")}
          className="w-full min-h-[500px] p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none font-mono text-sm leading-relaxed"
          placeholder="Type notes here or paste (Ctrl+V) images directly..."
        />
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSaveAll}
            className="flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg transition-all"
          >
            <Save className="w-5 h-5 mr-2" /> Save Study Guide
          </button>
        </div>
      </div>
    );
  };

  // Editor View for Questions (Existing logic mostly)
  const renderQuestionEditor = () => {
    if (editingId !== null && formData) {
      return (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden animate-in slide-in-from-bottom-4">
          <div className="bg-purple-600 p-4 flex justify-between items-center text-white">
            <h3 className="font-bold text-lg">Edit Question #{formData.id}</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className="flex items-center space-x-1 px-3 py-1 bg-purple-700 hover:bg-purple-800 rounded-lg text-xs font-bold transition-colors"
              >
                {previewMode ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
                <span>{previewMode ? "Edit" : "Preview"}</span>
              </button>
              <button
                onClick={() => {
                  setEditingId(null);
                  setFormData(null);
                }}
                className="p-1 hover:bg-purple-700 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {previewMode ? (
            <div className="p-8 space-y-6">
              <div className="text-xl font-medium text-gray-900 leading-relaxed">
                {renderRichText(formData.question)}
              </div>
              {formData.imageUrl && (
                <div className="flex justify-center my-4">
                  <img
                    src={formData.imageUrl}
                    alt="Question Image"
                    className="max-w-full h-auto rounded-lg border border-gray-200"
                  />
                </div>
              )}
              {formData.svg && (
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex justify-center">
                  {renderSvgOrImage(formData.svg)}
                </div>
              )}
              <div className="space-y-3">
                {formData.options.length > 0 ? (
                  formData.options.map((opt, idx) => {
                    const isCorrect = idx === getCorrectAnswerIndex(formData.correctAnswer, formData.options);
                    return (
                      <div
                        key={idx}
                        className={`p-4 rounded-xl border-2 flex items-center ${isCorrect ? "border-green-500 bg-green-50 text-green-900" : "border-gray-200"}`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 text-sm ${isCorrect ? "bg-green-200 text-green-700" : "bg-gray-100 text-gray-500"}`}
                        >
                          {String.fromCharCode(65 + idx)}
                        </div>
                        <div className="font-medium text-lg">
                          {renderRichText(opt)}
                        </div>
                        {isCorrect && (
                          <CheckCircle2 className="ml-auto w-6 h-6 text-green-600" />
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="p-4 rounded-xl border-2 border-green-500 bg-green-50 text-green-900 flex items-center">
                    <span className="font-bold mr-2">Correct Answer:</span>
                    <span className="font-medium text-lg">
                      {formData.answerText || "N/A"}
                    </span>
                    <CheckCircle2 className="ml-auto w-6 h-6 text-green-600" />
                  </div>
                )}
              </div>
              {formData.explanation && (
                <div className="mt-6 p-6 bg-blue-50 rounded-2xl border border-blue-200 text-blue-900">
                  <h4 className="font-bold mb-2 text-xs uppercase tracking-wider">
                    Explanation
                  </h4>
                  <div className="text-sm leading-relaxed">
                    {renderRichText(formData.explanation)}
                  </div>
                </div>
              )}
              {formData.youtubeLink && (
                <div className="mt-4 flex items-center p-3 bg-red-50 text-red-700 rounded-lg border border-red-100 font-bold max-w-max">
                  <Youtube className="w-5 h-5 mr-2" /> Video Explanation
                  Attached
                </div>
              )}
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {/* Category */}
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <label className="block text-sm font-bold text-blue-800 mb-2 flex items-center">
                  <Tag className="w-4 h-4 mr-2" /> Category
                </label>
                <input
                  list="category-list"
                  type="text"
                  value={formData.category || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full p-2 border border-blue-200 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none text-sm"
                />
                <datalist id="category-list">
                  {availableCategories.map((c) => (
                    <option key={c} value={c} />
                  ))}
                </datalist>
              </div>

              {/* Question Text */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="block text-sm font-bold text-gray-700">
                    Question Text
                  </label>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => triggerUpload("question", "question")}
                      className="text-xs flex items-center bg-purple-600 text-white px-2 py-1 rounded"
                    >
                      <Upload className="w-3 h-3 mr-1" /> Add Image
                    </button>
                    <button
                      onClick={() =>
                        insertMediaLink("image", "question", "question")
                      }
                      className="text-xs flex items-center bg-indigo-600 text-white px-2 py-1 rounded"
                    >
                      <ImageIcon className="w-3 h-3 mr-1" /> Image Link
                    </button>
                    <button
                      onClick={() =>
                        insertMediaLink("video", "question", "question")
                      }
                      className="text-xs flex items-center bg-red-600 text-white px-2 py-1 rounded"
                    >
                      <Youtube className="w-3 h-3 mr-1" /> Video Link
                    </button>
                    <button
                      onClick={() =>
                        insertMediaLink("pdf", "question", "question")
                      }
                      className="text-xs flex items-center bg-blue-600 text-white px-2 py-1 rounded"
                    >
                      <FileText className="w-3 h-3 mr-1" /> PDF Link
                    </button>
                  </div>
                </div>
                <textarea
                  value={formData.question}
                  onChange={(e) =>
                    setFormData({ ...formData, question: e.target.value })
                  }
                  onPaste={(e) => handlePaste(e, "question")}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none font-medium"
                  rows={4}
                  placeholder="Type question here or paste (Ctrl+V) an image..."
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                  <ImageIcon className="w-4 h-4 mr-2" /> Image URL (Optional)
                </label>
                <input
                  type="text"
                  value={formData.imageUrl || ""}
                  onChange={(e) => {
                    let val = e.target.value;
                    // Try to extract from src="..."
                    const srcMatch = val.match(/src=["'](.*?)["']/);
                    if (srcMatch && srcMatch[1]) {
                      val = srcMatch[1];
                    } else {
                      // Try to extract from markdown ![alt](url)
                      const mdMatch = val.match(/!\[.*?\]\((.*?)\)/);
                      if (mdMatch && mdMatch[1]) {
                        val = mdMatch[1];
                      }
                    }
                    setFormData({ ...formData, imageUrl: val });
                  }}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-purple-500 outline-none text-sm"
                  placeholder="https://example.com/image.png"
                />
                {formData.imageUrl && (
                  <div className="mt-2 p-2 bg-gray-50 rounded border border-gray-200 flex justify-center">
                    <img
                      src={formData.imageUrl}
                      alt="Preview"
                      className="max-h-32 object-contain"
                    />
                  </div>
                )}
              </div>

              {/* YouTube Link */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                  <Youtube className="w-4 h-4 mr-2 text-red-500" /> YouTube
                  Video Explanation URL (Optional)
                </label>
                <input
                  type="text"
                  value={formData.youtubeLink || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, youtubeLink: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-red-500 outline-none text-sm placeholder-gray-400"
                  placeholder="https://youtu.be/..."
                />
              </div>

              {/* SVG/Main Image */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <label className="text-sm font-bold text-gray-700 mb-2 block">
                  Main Image (SVG/HTML)
                </label>
                <textarea
                  value={formData.svg || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, svg: e.target.value })
                  }
                  onPaste={(e) => handlePaste(e, "svg")}
                  className="w-full p-3 border border-gray-300 rounded-lg font-mono text-xs h-24"
                  placeholder="SVG Code or Paste Image Here (Ctrl+V)"
                />
                {formData.svg && (
                  <div className="mt-2 text-sm font-bold text-gray-500">
                    Live Preview:
                  </div>
                )}
                {formData.svg && (
                  <div className="mt-2 p-2 bg-white rounded border border-gray-200 flex justify-center overflow-x-auto min-h-[100px]">
                    {renderSvgOrImage(formData.svg)}
                  </div>
                )}
              </div>

              {/* Question Type Toggle */}
              <div className="flex items-center space-x-4 mb-4">
                <label className="font-bold text-gray-700">
                  Question Type:
                </label>
                <div className="flex bg-gray-100 p-1 rounded-lg">
                  <button
                    onClick={() => {
                      if (formData.options.length === 0) {
                        setFormData({
                          ...formData,
                          options: [
                            "Option A",
                            "Option B",
                            "Option C",
                            "Option D",
                          ],
                          correctAnswer: 0,
                        });
                      }
                    }}
                    className={`px-3 py-1 rounded-md text-sm font-bold transition-all ${formData.options.length > 0 ? "bg-white shadow text-purple-600" : "text-gray-500 hover:text-gray-700"}`}
                  >
                    Multiple Choice
                  </button>
                  <button
                    onClick={() => {
                      if (formData.options.length > 0) {
                        if (
                          confirm(
                            "Switching to Fill-in will clear all options. Continue?",
                          )
                        ) {
                          setFormData({
                            ...formData,
                            options: [],
                            correctAnswer: 0,
                            answerText: "",
                          });
                        }
                      }
                    }}
                    className={`px-3 py-1 rounded-md text-sm font-bold transition-all ${formData.options.length === 0 ? "bg-white shadow text-purple-600" : "text-gray-500 hover:text-gray-700"}`}
                  >
                    Fill-in-the-Blank
                  </button>
                </div>
              </div>

              {/* Options or Answer Text */}
              {formData.options.length > 0 ? (
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Options
                  </label>
                  <div className="space-y-3">
                    {formData.options.map((opt, idx) => {
                      const isSelected = getCorrectAnswerIndex(formData.correctAnswer, formData.options) === idx;
                      return (
                        <div key={idx} className="flex items-center space-x-3">
                          <div
                            onClick={() =>
                              setFormData({ ...formData, correctAnswer: idx })
                            }
                            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold cursor-pointer transition-colors ${isSelected ? "bg-green-500 text-white shadow-sm" : "bg-gray-200 hover:bg-gray-300 text-gray-700"}`}
                            title={`Mark Option ${String.fromCharCode(65 + idx)} as correct`}
                          >
                            {String.fromCharCode(65 + idx)}
                          </div>
                          <div className="flex-1 relative">
                          <input
                            type="text"
                            value={opt}
                            onChange={(e) => {
                              const newOptions = [...formData.options];
                              newOptions[idx] = e.target.value;
                              setFormData({ ...formData, options: newOptions });
                            }}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-purple-500 outline-none pr-16"
                          />
                          <div className="absolute right-2 top-2 flex space-x-1">
                            <button
                              onClick={() =>
                                triggerUpload("question", "option", idx)
                              }
                              className="text-gray-400 hover:text-purple-600"
                              title="Upload Image"
                            >
                              <Upload className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() =>
                                insertMediaLink(
                                  "image",
                                  "question",
                                  "option",
                                  idx,
                                )
                              }
                              className="text-gray-400 hover:text-indigo-600"
                              title="Image Link"
                            >
                              <ImageIcon className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  </div>
                </div>
              ) : (
                <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                  <label className="block text-sm font-bold text-yellow-800 mb-2">
                    Correct Answer Text
                  </label>
                  <input
                    type="text"
                    value={formData.answerText || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, answerText: e.target.value })
                    }
                    className="w-full p-3 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none font-bold text-lg"
                    placeholder="Enter the correct answer (e.g. 42, 3.14, x=5)..."
                  />
                  <p className="text-xs text-yellow-600 mt-2">
                    Students must type this exact text (case-insensitive) to get
                    credit.
                  </p>
                </div>
              )}

              {/* Explanation */}
              <div className="bg-green-50 p-4 rounded-xl border border-green-100 mt-6">
                <div className="flex justify-between items-end mb-2">
                  <label className="block text-sm font-bold text-green-800 flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-2" /> Explanation
                  </label>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => triggerUpload("question", "explanation")}
                      className="text-xs flex items-center bg-green-600 text-white px-2 py-1 rounded"
                    >
                      <Upload className="w-3 h-3 mr-1" /> Add Image
                    </button>
                    <button
                      onClick={() =>
                        insertMediaLink("image", "question", "explanation")
                      }
                      className="text-xs flex items-center bg-indigo-600 text-white px-2 py-1 rounded"
                    >
                      <ImageIcon className="w-3 h-3 mr-1" /> Image Link
                    </button>
                    <button
                      onClick={() =>
                        insertMediaLink("video", "question", "explanation")
                      }
                      className="text-xs flex items-center bg-red-600 text-white px-2 py-1 rounded"
                    >
                      <Youtube className="w-3 h-3 mr-1" /> Add Video
                    </button>
                  </div>
                </div>
                <textarea
                  value={formData.explanation}
                  onChange={(e) =>
                    setFormData({ ...formData, explanation: e.target.value })
                  }
                  onPaste={(e) => handlePaste(e, "explanation")}
                  className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                  rows={3}
                  placeholder="Type explanation here or paste (Ctrl+V) an image..."
                />
              </div>

              <div className="flex justify-between pt-6 border-t border-gray-100">
                <button
                  onClick={() => requestDeleteQuestion(formData.id)}
                  className="text-red-500 hover:text-red-700 flex items-center font-bold px-4 py-2 rounded-lg hover:bg-red-50"
                >
                  <Trash2 className="w-5 h-5 mr-2" /> Delete
                </button>
                <button
                  onClick={saveCurrentQuestionEdit}
                  className="bg-purple-600 hover:bg-purple-700 text-white flex items-center font-bold px-6 py-3 rounded-xl shadow-lg shadow-purple-200"
                >
                  <Save className="w-5 h-5 mr-2" /> Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {/* Bulk Action Bar for Questions */}
        {questions.length > 0 && (
          <div className="flex flex-wrap items-center justify-between bg-white p-4 rounded-2xl border border-gray-200 shadow-sm gap-3">
            <div className="flex items-center space-x-3">
              <button
                onClick={
                  selectedQuestionIds.length === questions.length
                    ? handleDeselectAllQuestions
                    : handleSelectAllQuestions
                }
                className="flex items-center space-x-2 text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-xl transition-colors"
              >
                {selectedQuestionIds.length === questions.length ? (
                  <>
                    <CheckSquare className="w-4 h-4 text-purple-600" />
                    <span>Deselect All ({questions.length})</span>
                  </>
                ) : (
                  <>
                    <Square className="w-4 h-4 text-gray-400" />
                    <span>Select All ({questions.length})</span>
                  </>
                )}
              </button>

              {selectedQuestionIds.length > 0 && (
                <span className="text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1.5 rounded-xl border border-purple-100">
                  {selectedQuestionIds.length} question(s) selected
                </span>
              )}
            </div>

            <div className="flex items-center space-x-2">
              {selectedQuestionIds.length > 0 && (
                <button
                  onClick={() => {
                    const selected = questions.filter(q => selectedQuestionIds.includes(q.id));
                    handleOpenCopyModal(selected);
                  }}
                  className="flex items-center space-x-2 text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl shadow-sm transition-all"
                >
                  <Copy className="w-4 h-4" />
                  <span>Copy Selected ({selectedQuestionIds.length})</span>
                </button>
              )}

              <button
                onClick={() => handleOpenCopyModal(questions)}
                className="flex items-center space-x-2 text-xs font-bold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 px-4 py-2 rounded-xl transition-colors"
                title="Copy all questions in this exam to another lesson/exam"
              >
                <Copy className="w-4 h-4" />
                <span>Copy All ({questions.length})</span>
              </button>
            </div>
          </div>
        )}

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              onClick={handleAddNewQuestion}
              className="border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center p-8 cursor-pointer hover:border-purple-500 hover:bg-purple-50 transition-all text-gray-400 hover:text-purple-600 min-h-[200px]"
            >
              <Plus className="w-10 h-10 mb-2" />
              <span className="font-bold">Add New Question</span>
            </div>

            <SortableContext
              items={questions.map((q) => q.id)}
              strategy={rectSortingStrategy}
            >
              {questions.map((q, idx) => (
                <SortableQuestionCard
                  key={q.id}
                  q={q}
                  idx={idx}
                  handleEditQuestion={handleEditQuestion}
                  setHoveredQuestionId={setHoveredQuestionId}
                  handleMoveQuestion={handleMoveQuestion}
                  requestDeleteQuestion={requestDeleteQuestion}
                  renderRichText={renderRichText}
                  isSelected={selectedQuestionIds.includes(q.id)}
                  onToggleSelect={handleToggleSelectQuestion}
                  onCopySingleQuestion={(singleQ) => handleOpenCopyModal([singleQ])}
                />
              ))}
            </SortableContext>
          </div>
        </DndContext>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        <p className="text-gray-500 font-medium">
          Syncing questions with database...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:py-10 px-4 sm:px-6 relative pb-20">
      {/* Hidden File Input for Uploads */}
      <input
        type="file"
        accept="image/*"
        multiple
        ref={fileInputRef}
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* PDF Modal */}
      {showPdfModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <FilePlus className="w-6 h-6 mr-2 text-red-600" />
                Import Questions from PDF
              </h3>
              {!isProcessingPdf && (
                <button onClick={() => setShowPdfModal(false)}>
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              )}
            </div>

            {isProcessingPdf ? (
              <div className="text-center py-8">
                <Loader2 className="w-12 h-12 animate-spin text-purple-600 mx-auto mb-4" />
                <p className="font-bold text-gray-800 text-lg mb-2">
                  Processing PDF...
                </p>
                <p className="text-gray-500 text-sm animate-pulse">
                  {pdfProgress}
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div
                  className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => pdfInputRef.current?.click()}
                >
                  <input
                    type="file"
                    accept="application/pdf"
                    className="hidden"
                    ref={pdfInputRef}
                    onChange={handlePdfFileSelect}
                  />
                  <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-red-500">
                    <FileText className="w-6 h-6" />
                  </div>
                  {pdfFile ? (
                    <p className="font-bold text-green-600">{pdfFile.name}</p>
                  ) : (
                    <>
                      <p className="font-bold text-gray-700">
                        Click to Upload PDF
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Files under 10MB recommended
                      </p>
                    </>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                      Start Page
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={startPage}
                      onChange={(e) => setStartPage(parseInt(e.target.value))}
                      className="w-full border border-gray-300 rounded-lg p-2 font-bold focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                      End Page
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={endPage}
                      onChange={(e) => setEndPage(parseInt(e.target.value))}
                      className="w-full border border-gray-300 rounded-lg p-2 font-bold focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                  </div>
                </div>

                <button
                  onClick={processPdfImport}
                  disabled={!pdfFile}
                  className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Generate Questions
                </button>
                <p className="text-[10px] text-center text-gray-400">
                  The AI will extract questions, create solutions, and preserve
                  images/graphs.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {deleteConfirmId !== null && editingId === null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              Delete Question?
            </h3>
            <p className="text-gray-500 mb-6">
              Are you sure you want to delete this question? This action cannot
              be undone.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="flex-1 py-2 bg-gray-100 text-gray-700 font-bold rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={performDeleteQuestion}
                className="flex-1 py-2 bg-red-600 text-white font-bold rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Lesson Modal */}
      {showDeleteLessonModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-red-100 p-2 rounded-full">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900">
                Move Exam to Bin?
              </h3>
            </div>
            <p className="text-gray-500 mb-6">
              Are you sure you want to move <strong>{lessonTitle}</strong> to
              the bin? You can restore it later.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowDeleteLessonModal(false)}
                className="flex-1 py-2 bg-gray-100 text-gray-700 font-bold rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowDeleteLessonModal(false);
                  if (onDeleteLesson) onDeleteLesson();
                }}
                className="flex-1 py-2 bg-red-600 text-white font-bold rounded-lg"
              >
                Move to Bin
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Breadcrumb Navigation */}
      <nav className="flex items-center text-sm font-medium text-gray-500 mb-8 overflow-x-auto whitespace-nowrap pb-2 no-scrollbar">
        <button
          onClick={onNavigateHome}
          className="hover:text-purple-600 transition-colors flex items-center p-1 rounded-md hover:bg-purple-50"
          title="Go Home"
        >
          <Home className="w-4 h-4" />
        </button>

        {courseCategory && (
          <>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-300 flex-shrink-0" />
            <button
              onClick={onNavigateToCourse}
              className="hover:text-purple-600 transition-colors hover:underline decoration-2 underline-offset-4"
            >
              {courseCategory} Course
            </button>
          </>
        )}

        <ChevronRight className="w-4 h-4 mx-2 text-gray-300 flex-shrink-0" />
        <span className="text-gray-400 cursor-default">Full Exams</span>

        <ChevronRight className="w-4 h-4 mx-2 text-gray-300 flex-shrink-0" />
        <button
          onClick={onNavigateToLesson}
          className="hover:text-purple-600 transition-colors hover:underline decoration-2 underline-offset-4"
        >
          {lessonTitle}
        </button>

        <ChevronRight className="w-4 h-4 mx-2 text-gray-300 flex-shrink-0" />
        <span className="font-bold text-purple-900 bg-purple-50 px-3 py-1 rounded-full border border-purple-100 flex items-center">
          Editor
        </span>
      </nav>

      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-8 gap-5 bg-white p-5 sm:p-6 rounded-2xl border border-gray-200 shadow-sm">
        <div className="min-w-0 flex-1">
          <div className="flex items-center flex-wrap gap-y-1">
            <Edit2 className="w-6 h-6 mr-3 text-purple-600 flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center whitespace-nowrap mr-2">
              Exam Editor:
            </h2>
            {isEditingTitle ? (
              <input
                autoFocus
                value={tempTitle}
                onChange={(e) => setTempTitle(e.target.value)}
                onBlur={saveTitleChange}
                onKeyDown={(e) => e.key === "Enter" && saveTitleChange()}
                className="flex-1 min-w-[200px] text-2xl font-bold text-gray-900 border-b-2 border-purple-500 focus:outline-none bg-transparent"
              />
            ) : (
              <div
                className="flex items-center group cursor-pointer min-w-0"
                onClick={() => setIsEditingTitle(true)}
                title="Click to edit title"
              >
                <span className="text-xl sm:text-2xl font-bold text-gray-600 break-words group-hover:text-purple-600 border-b-2 border-transparent group-hover:border-purple-200 transition-all">
                  {lessonData?.title || lessonTitle}
                </span>
                <Edit2 className="w-4 h-4 ml-2 text-gray-300 group-hover:text-purple-400 opacity-0 group-hover:opacity-100 transition-all" />
              </div>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-1 pl-9">
            Modify questions, answers, explanations, and study material.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2.5 xl:justify-end">
          {activeTab === "questions" && (
            <>
              <button
                onClick={() => handleExportPDF("student_exam")}
                disabled={isExporting}
                className="px-3.5 py-2 bg-pink-50 text-pink-700 font-bold hover:bg-pink-100 rounded-lg text-sm transition-colors flex items-center border border-pink-200"
                title="Export Exam to formatted PDF using jsPDF and autoTable"
              >
                <Download className="w-4 h-4 mr-1.5 text-pink-600" />
                Export PDF
              </button>
              <button
                onClick={() => handleExportWord("student_exam")}
                disabled={isExporting}
                className="px-3.5 py-2 bg-blue-50 text-blue-700 font-bold hover:bg-blue-100 rounded-lg text-sm transition-colors flex items-center border border-blue-200"
                title="Export Exam to Word document (.docx)"
              >
                <FileText className="w-4 h-4 mr-1.5 text-blue-600" />
                Export Word
              </button>
              <button
                onClick={() => setShowPdfModal(true)}
                className="px-4 py-2 bg-red-50 text-red-600 font-bold hover:bg-red-100 rounded-lg text-sm transition-colors flex items-center border border-red-100"
              >
                <FilePlus className="w-4 h-4 mr-2" />
                Import from PDF
              </button>
            </>
          )}
          {onDeleteLesson && (
            <button
              onClick={() => setShowDeleteLessonModal(true)}
              className="px-4 py-2 text-red-600 bg-red-50 border border-red-200 hover:bg-red-100 hover:text-red-700 rounded-lg transition-all flex items-center font-bold text-sm shadow-sm"
              title="Delete Entire Exam"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete Exam
            </button>
          )}
          <button
            onClick={handleReset}
            className="px-4 py-2 text-blue-600 bg-blue-50 font-bold hover:bg-blue-100 rounded-lg text-sm transition-colors border border-blue-200 flex items-center"
          >
            <Database className="w-4 h-4 mr-2" />
            Upload Static Questions to DB
          </button>
          <button
            onClick={handleSaveAll}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg shadow-purple-200 transition-all flex items-center"
          >
            <Save className="w-4 h-4 mr-2" /> Save All
          </button>
          <button
            onClick={onExit}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl mb-8 w-fit mx-auto md:mx-0">
        <button
          onClick={() => setActiveTab("questions")}
          className={`px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center ${activeTab === "questions" ? "bg-white text-purple-600 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
        >
          Questions ({questions.length})
          {lessonService.calculateSizeMB({ questions }) > 0.8 && (
            <span
              className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full ${lessonService.calculateSizeMB({ questions }) > 0.95 ? "bg-red-500 text-white animate-pulse" : "bg-yellow-500 text-white"}`}
            >
              {(lessonService.calculateSizeMB({ questions }) * 1024).toFixed(0)}
              KB
            </span>
          )}
        </button>
        <button
          onClick={() => setActiveTab("studyGuide")}
          className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === "studyGuide" ? "bg-white text-purple-600 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
        >
          Study Guide
        </button>
      </div>

      {/* Content Area */}
      <div className="min-h-[500px]">
        {activeTab === "questions"
          ? renderQuestionEditor()
          : renderStudyGuideEditor()}
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-gray-900 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center animate-in slide-in-from-bottom-4 z-50">
          <CheckCircle2 className="w-5 h-5 text-green-400 mr-3" />
          <span className="font-bold">Changes Saved Successfully</span>
        </div>
      )}

      {/* Copy Question Modal */}
      <CopyQuestionModal
        isOpen={copyModalOpen}
        onClose={() => setCopyModalOpen(false)}
        questionsToCopy={questionsToCopy}
        sourceLessonTitle={lessonData?.title || lessonTitle}
        onSuccess={() => {
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3000);
          setSelectedQuestionIds([]);
        }}
      />
    </div>
  );
};

export default ExamEditor;
