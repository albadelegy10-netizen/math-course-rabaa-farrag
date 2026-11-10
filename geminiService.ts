
import { GoogleGenAI, Type } from "@google/genai";
import { LessonId, Question, Mistake, StaticLessonIds } from "./types";
import { questionService } from "./questionService";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

export async function generateQuizQuestions(lessonId: LessonId, _topicName: string): Promise<Question[]> {
  // Use questionService to get potentially edited questions
  // Removed setTimeout to improve performance
  const questions = questionService.getQuestions(lessonId);
  return questions;
}

export async function generateSimilarQuestions(
  wrongQuestions: Question[], 
  count: number = 20, 
  difficulty: 'same' | 'harder' = 'same',
  onProgress?: (status: string) => void
): Promise<Question[]> {
  // Initialize lazily to prevent top-level crash if API key is missing during app load
  const apiKey = process.env.API_KEY;
  
  // Basic fallback questions if API fails or no key
  const fallbackQuestions = questionService.getQuestions(StaticLessonIds.SATEx1).slice(0, count);

  if (!apiKey) {
    console.warn("API Key is missing. Returning fallback static questions.");
    if (onProgress) onProgress("API Key missing. Loading demo questions...");
    return new Promise(resolve => setTimeout(() => resolve(fallbackQuestions), 1500));
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // Limit samples to 5 to avoid token limits, but use them to set context
    const samples = wrongQuestions.slice(0, 5).map(q => q.question).join("\n---\n");
    
    const difficultyPrompt = difficulty === 'harder' 
      ? "Make these questions MORE DIFFICULT than the samples. Involve more steps, complex numbers, or higher-level conceptual application." 
      : "Keep the difficulty level EXACTLY the same as the samples.";

    const prompt = `You are a world-class math educator for EST1/SAT Math.
    
    I will provide a list of questions a student got wrong. 
    Generate exactly ${count} NEW questions that target the same mathematical concepts/topics.
    
    DIFFICULTY INSTRUCTION: ${difficultyPrompt}
    
    SAMPLES OF MISSED QUESTIONS:
    ${samples}

    RULES:
    1. Do NOT copy the samples. Create NEW questions with different values and scenarios.
    2. Each question must have 5 options.
    3. Provide a detailed explanation for each.
    4. **FORMATTING**: Write all mathematical expressions using LaTeX syntax wrapped in single dollar signs (e.g., $x^2$, $\\frac{a}{b}$, $\\sqrt{x}$). This is CRITICAL for readability.
    5. Format strictly as JSON array of objects.`;

    if (onProgress) onProgress("Initializing AI...");

    const response = await ai.models.generateContentStream({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        tools: [{ codeExecution: {} }],
        systemInstruction: "When generating EST 1, DSAT, EST 2, ACT 1, and ACT 2 Math exams or lessons for every math course, write and execute Python code using Matplotlib and NumPy to render all geometric diagrams, coordinate graphs, number lines, and histograms as Base64 images, and format the questions with HTML tables, KaTeX/LaTeX, and an exportable PDF layout.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.NUMBER },
              question: { type: Type.STRING },
              options: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              correctAnswer: { type: Type.NUMBER },
              explanation: { type: Type.STRING }
            },
            required: ["id", "question", "options", "correctAnswer", "explanation"]
          }
        }
      }
    });

    let text = '';
    for await (const chunk of response) {
      const chunkText = chunk.text || '';
      text += chunkText;
      if (onProgress) {
        // Count how many "id" fields appear to estimate number of questions generated
        const qCount = (text.match(/"id"\s*:/g) || []).length;
        if (qCount > 0) {
           if (qCount >= count) {
              onProgress(`Finalizing question ${qCount}... Please wait...`);
           } else {
              onProgress(`Creating question ${qCount} of ${count}...`);
           }
        } else {
           onProgress("Thinking...");
        }
      }
    }

    if (!text) throw new Error("AI returned empty content");
    
    return JSON.parse(text).map((q: any, idx: number) => ({ ...q, id: idx + 1 }));
  } catch (error) {
    console.error("AI Generation Error:", error instanceof Error ? error.message : String(error));
    if (onProgress) onProgress("Error occurred. Using fallback...");
    return fallbackQuestions;
  }
}

export async function generateQuestionsFromImage(
  imageBase64: string,
  count: number = 5,
  difficulty: 'similar' | 'harder' = 'similar',
  onProgress?: (status: string) => void
): Promise<Question[]> {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key missing");
    if (onProgress) onProgress("API Key missing. Returning demo data.");
    return new Promise(resolve => setTimeout(() => resolve(questionService.getQuestions(StaticLessonIds.SATEx1).slice(0, count)), 1500));
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // Extract base64 data if it contains the prefix
    const base64Data = imageBase64.includes('base64,') 
      ? imageBase64.split('base64,')[1] 
      : imageBase64;

    const difficultyInstruction = difficulty === 'harder'
      ? "Create questions that are significantly HARDER and more complex than the one in the image. Involve more steps or advanced concepts."
      : "Create questions that check the EXACT SAME concept and difficulty level as the image.";

    const prompt = `
      You are an expert Math Tutor. I am sending you an image of a math problem.
      
      TASK:
      1. Analyze the mathematical concept, topic, and difficulty of the problem in the image.
      2. Generate exactly ${count} NEW practice questions based on this analysis.
      
      INSTRUCTION: ${difficultyInstruction}
      
      REQUIREMENTS:
      - Each question must have 5 multiple-choice options.
      - One correct answer (0-indexed index).
      - A detailed explanation teaching the concept.
      - **FORMATTING**: Write all mathematical expressions using LaTeX syntax wrapped in single dollar signs (e.g., $x^2$, $\\frac{a}{b}$, $\\sqrt{x}$). This is CRITICAL for readability.
      - Return STRICT JSON.
    `;

    if (onProgress) onProgress("Analyzing image...");

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: {
        parts: [
          { inlineData: { mimeType: 'image/png', data: base64Data } },
          { text: prompt }
        ]
      },
      config: {
        tools: [{ codeExecution: {} }],
        systemInstruction: "When generating EST 1, DSAT, EST 2, ACT 1, and ACT 2 Math exams or lessons for every math course, write and execute Python code using Matplotlib and NumPy to render all geometric diagrams, coordinate graphs, number lines, and histograms as Base64 images, and format the questions with HTML tables, KaTeX/LaTeX, and an exportable PDF layout.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.NUMBER },
              question: { type: Type.STRING },
              options: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              correctAnswer: { type: Type.NUMBER },
              explanation: { type: Type.STRING }
            },
            required: ["id", "question", "options", "correctAnswer", "explanation"]
          }
        }
      }
    });

    if (onProgress) onProgress("Finalizing questions...");
    
    const text = response.text;
    if (!text) throw new Error("No response from AI");

    const questions = JSON.parse(text);
    return questions.map((q: any, idx: number) => ({ ...q, id: idx + 1 }));

  } catch (error) {
    console.error("Image Gen Error:", error instanceof Error ? error.message : String(error));
    if (onProgress) onProgress("Error analyzing image.");
    return questionService.getQuestions(StaticLessonIds.SATEx1).slice(0, count);
  }
}

export async function generateQuestionsFromPdf(
  pages: { pageNumber: number, base64: string }[],
  onProgress?: (status: string) => void
): Promise<Question[]> {
  const apiKey = process.env.API_KEY;
  if (!apiKey) throw new Error("API Key is missing.");

  try {
    const ai = new GoogleGenAI({ apiKey });
    const parts: any[] = [];

    // Add all pages as image parts
    pages.forEach(page => {
      const base64Data = page.base64.includes('base64,') 
        ? page.base64.split('base64,')[1] 
        : page.base64;
      
      parts.push({
        inlineData: { mimeType: 'image/png', data: base64Data }
      });
    });

    // Add the instruction prompt
    const prompt = `
      You are an expert Math Transcriber and Solver for American Diploma exams (EST, SAT, ACT).
      I have provided ${pages.length} pages from a math exam PDF.

      TASK:
      1. Extract ALL questions found in these pages (both Multiple-Choice and Grid-In/Fill-in). There should be exactly 58 questions (45 Multiple Choice and 13 Short Constructive Response) in the exact same order as they appear.
      2. **READ EXACTLY**: Do NOT paraphrase. Copy the question text word-for-word.
      3. **MATH NOTATION**: Convert all mathematical expressions into standard LaTeX wrapped in single dollar signs (e.g. $x^2$, $\\frac{1}{2}$).
      4. **GRAPHS/FIGURES/TABLES**: If a question contains an image, graph, figure, or table, you MUST convert it into a base64 string and include it directly inside the 'question' text. Do NOT use SVG.
      5. **SOLVE**: 
         - For Multiple-Choice: Provide the correct answer index (0 for A, 1 for B, etc.).
         - For Fill-in/Grid-In: Provide the exact text/number string of the correct answer in 'answerText'.
      6. **VOLUME**: Extract ALL 58 questions visible. Do not stop until all questions on these pages are processed.

      OUTPUT FORMAT:
      Return a JSON array of objects.
      Each object must contain:
      - 'pageNumber': The page number (1-indexed based on the order of images sent) where this question appears.
      - 'question': The exact text of the question, including any HTML/SVG/Markdown for graphs or tables.
      - 'options': Array of strings. If Multiple-Choice, list options. If Fill-in, return an EMPTY array [].
      - 'correctAnswer': Integer index of the correct option (0-4). If Fill-in, set to 0.
      - 'answerText': String. Required ONLY for Fill-in questions. The correct answer value.
      - 'explanation': Detailed solution.
    `;
    parts.push({ text: prompt });

    if (onProgress) onProgress(`Analyzing ${pages.length} pages with AI... This may take up to 60 seconds.`);

    // Use Gemini 3.8 Flash for large context
    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash", 
      contents: { parts: parts },
      config: {
        tools: [{ codeExecution: {} }],
        systemInstruction: "When generating EST 1, DSAT, EST 2, ACT 1, and ACT 2 Math exams or lessons for every math course, write and execute Python code using Matplotlib and NumPy to render all geometric diagrams, coordinate graphs, number lines, and histograms as Base64 images, and format the questions with HTML tables, KaTeX/LaTeX, and an exportable PDF layout.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              pageNumber: { type: Type.NUMBER },
              question: { type: Type.STRING },
              options: { type: Type.ARRAY, items: { type: Type.STRING } },
              correctAnswer: { type: Type.NUMBER },
              answerText: { type: Type.STRING },
              explanation: { type: Type.STRING }
            },
            required: ["pageNumber", "question", "options", "correctAnswer", "explanation"]
          }
        }
      }
    });

    if (onProgress) onProgress("Processing results...");
    
    if (onProgress) onProgress("Uploading images to save space...");
    
    // Upload pages to Firebase Storage so we don't blow up Firestore 1MB limits
    const pageUrls: (string | undefined)[] = await Promise.all(
      pages.map(async (page, index) => {
        try {
          const filename = `images/pdf_${Date.now()}_${index}.jpg`;
          const imageRef = ref(storage, filename);
          await uploadString(imageRef, page.base64, 'data_url');
          return await getDownloadURL(imageRef);
        } catch (e) {
          console.error("Failed to upload page to storage:", e instanceof Error ? e.message : String(e));
          return undefined; // fallback
        }
      })
    );

    const text = response.text;
    if (!text) throw new Error("AI returned empty content");

    const rawQuestions = JSON.parse(text);
    
    // Map back to our application's Question type and inject the page image as the "svg" (visual context)
    return rawQuestions.map((q: any, idx: number) => {
        // Find the image for this page to attach as visual context
        // The AI returns pageNumber 1-indexed based on provided images
        const pageImageUrl = pageUrls[q.pageNumber - 1];
        
        // We wrap the image in a simplified HTML img tag for the app's renderer
        // This ensures graphs are visible because the whole page is shown for context
        const visualContext = pageImageUrl 
            ? `<img src="${pageImageUrl}" style="width:100%; border:1px solid #eee; border-radius:8px; margin-bottom:10px;" alt="Page Context" />`
            : undefined;

        return {
            id: Date.now() + idx,
            question: q.question,
            options: q.options,
            correctAnswer: q.correctAnswer,
            answerText: q.answerText,
            explanation: q.explanation,
            // We use the 'svg' field to store the full page image so the student sees the graph
            svg: visualContext,
            category: ""
        };
    });

  } catch (error) {
    console.error("PDF Extraction Error:", error instanceof Error ? error.message : String(error));
    if (onProgress) onProgress("Error analyzing PDF.");
    return [];
  }
}

export async function generateQuestionsFromAI(
  promptContext: string,
  count: number = 10,
  onProgress?: (status: string) => void
): Promise<Question[]> {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    if (onProgress) onProgress("API Key missing. Returning demo data.");
    return new Promise(resolve => setTimeout(() => resolve(questionService.getQuestions(StaticLessonIds.SATEx1).slice(0, count)), 1500));
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const prompt = `
      You are an expert Math Tutor and Curriculum Designer.
      
      TASK:
      ${promptContext}
      
      REQUIREMENTS:
      - Each question must have 5 multiple-choice options.
      - One correct answer (0-indexed index).
      - A detailed explanation teaching the concept.
      - **FORMATTING**: Write all mathematical expressions using LaTeX syntax wrapped in single dollar signs (e.g., $x^2$, $\\frac{a}{b}$, $\\sqrt{x}$). This is CRITICAL for readability.
      - Return STRICT JSON.
    `;

    if (onProgress) onProgress("Generating questions with AI...");

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        tools: [{ codeExecution: {} }],
        systemInstruction: "When generating EST 1, DSAT, EST 2, ACT 1, and ACT 2 Math exams or lessons for every math course, write and execute Python code using Matplotlib and NumPy to render all geometric diagrams, coordinate graphs, number lines, and histograms as Base64 images, and format the questions with HTML tables, KaTeX/LaTeX, and an exportable PDF layout.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              question: { type: Type.STRING },
              options: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              correctAnswer: { type: Type.NUMBER },
              explanation: { type: Type.STRING }
            },
            required: ["question", "options", "correctAnswer", "explanation"]
          }
        }
      }
    });

    if (onProgress) onProgress("Finalizing questions...");
    
    const text = response.text;
    if (!text) throw new Error("No response from AI");

    const questions = JSON.parse(text);
    return questions.map((q: any, idx: number) => ({ ...q, id: idx + 1 }));

  } catch (error) {
    console.error("AI Generation Error:", error instanceof Error ? error.message : String(error));
    if (onProgress) onProgress("Error generating content.");
    return [];
  }
}

export async function generateStudyPlan(mistakes: Mistake[]): Promise<string> {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    const topics = Array.from(new Set(mistakes.map(m => m.topicName)));
    return `**Personalized Study Strategy (Demo Mode)**

Since an API Key is not configured, here is a template strategy based on your mistakes in **${topics.join(', ')}**.

**1. Identify Weak Spots**
You struggled with questions related to:
${topics.map(t => `- **${t}**`).join('\n')}

**2. Immediate Action Plan**
- **Review Formulas**: Go back to the lesson notes for these topics.
- **Practice Similar Problems**: Use the "Deep Learning Generator" to create new practice sets.
- **Slow Down**: Many mistakes are simple calculation errors. Double-check your work.

**3. Mastery Goal**
Aim to complete 3 consecutive quizzes with >90% accuracy to ensure you have mastered these concepts.

*(To get real-time AI analysis, please add API_KEY to your .env file)*`;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // Group mistakes by topic
    const summary = mistakes.map(m => `Topic: ${m.topicName} | Question: ${m.question.question} | Mistake Count: ${m.count}`).join('\n');

    const prompt = `
      You are an expert Math Tutor for EST1 MATH EXAM students. 
      The student has struggled with the following specific questions. 
      
      DATA:
      ${summary}

      TASK:
      Create a personalized, encouraging, and actionable study plan.
      1. Identify the core weak concepts based on the mistakes.
      2. Provide specific tips or formulas they need to memorize for these specific types of problems.
      3. Create a step-by-step strategy for them to master these topics.
      4. Use LaTeX formatting for formulas (e.g. $a^2+b^2=c^2$).
      
      Format the output in clear text using **bold** for headers and key points. Do not use markdown tables. Keep it under 400 words.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt
    });

    return response.text || "Could not generate plan.";
  } catch (error) {
    console.error("Plan Generation Error:", error instanceof Error ? error.message : String(error));
    return "An error occurred while communicating with the AI tutor. Please try again later.";
  }
}

export async function generateRescuePlan(
  studentName: string,
  attendanceRate: number,
  avgScore: number,
  weakLessons: string[]
): Promise<{ studentMessage: string, parentMessage: string }> {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return {
        studentMessage: `Demo Rescue Plan for ${studentName}.\nFocus on: ${weakLessons.join(', ')}. Please attend more classes if attendance is low (${attendanceRate}%).`,
        parentMessage: `Demo Parent Update.\n${studentName} has a score of ${avgScore}%. Please ensure they study ${weakLessons.join(', ')}.`
    };
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `
      You are Eng Rabaa Farrag, a dedicated and strict but caring Math Instructor.
      Analyze the following student data:
      - Student Name: ${studentName}
      - Attendance Rate: ${attendanceRate}%
      - Average Quiz Score: ${avgScore}%
      - Weakest Topics: ${weakLessons.join(', ')}

      TASK:
      Generate two separate messages.
      
      1. **Student Message**: A "Rescue Plan". 
         - Tone: Serious, urgent, yet motivating.
         - Call out their attendance if it's below 80%.
         - Specifically mention their weak topics and give 1 concrete study tip for each.
         - Set a specific goal for next week.
         
      2. **Parent Message**: A professional status update.
         - Tone: Professional, informative, collaborative.
         - Summarize performance clearly.
         - Outline exactly what support is needed from home (e.g., "Ensure they solve X").
         
      Return the response in JSON format with keys "studentMessage" and "parentMessage".
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        tools: [{ codeExecution: {} }],
        systemInstruction: "When generating EST 1, DSAT, EST 2, ACT 1, and ACT 2 Math exams or lessons for every math course, write and execute Python code using Matplotlib and NumPy to render all geometric diagrams, coordinate graphs, number lines, and histograms as Base64 images, and format the questions with HTML tables, KaTeX/LaTeX, and an exportable PDF layout.",
        responseMimeType: "application/json",
        responseSchema: {
            type: Type.OBJECT,
            properties: {
                studentMessage: { type: Type.STRING },
                parentMessage: { type: Type.STRING }
            }
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response");
    
    return JSON.parse(text);

  } catch (error) {
    console.error("Rescue Plan Error:", error instanceof Error ? error.message : String(error));
    return {
        studentMessage: "Error generating plan.",
        parentMessage: "Error generating update."
    };
  }
}

// New Chat Functionality
export async function getChatResponse(message: string, history: {role: string, text: string}[]): Promise<string> {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return "I am currently in demo mode. Please configure the API Key to chat with me!";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // Construct simple context
    const historyText = history.slice(-5).map(h => `${h.role === 'user' ? 'Student' : 'Tutor'}: ${h.text}`).join('\n');
    
    const prompt = `
      You are the AI Assistant for "Eng Rabaa Farrag's Math Course".
      You are a helpful, encouraging, and knowledgeable Math Tutor specialized in SAT, ACT, and EST exams.
      
      Context of conversation:
      ${historyText}
      
      Current Student Question: ${message}
      
      Instructions:
      1. Keep answers concise and helpful.
      2. If asking about a math problem, explain the steps clearly.
      3. Use LaTeX formatting for math expressions (wrap in single $). e.g., $x^2 + 5$.
      4. Be motivating.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt
    });

    return response.text || "I'm thinking, but I couldn't come up with an answer right now.";
  } catch (error) {
    console.error("Chat Error:", error instanceof Error ? error.message : String(error));
    return "I'm having trouble connecting to the math server right now. Please try again.";
  }
}
