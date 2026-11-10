import { GoogleGenAI } from "@google/genai";
import * as fs from 'fs';
import * as path from 'path';

// Define the required output schema for a single question
const questionSchema = {
    type: "OBJECT",
    properties: {
        id: { type: "STRING", description: "A unique identifier for the question (e.g., 'pyth_sin_1')" },
        question: { type: "STRING", description: "The question text, using LaTeX for math expressions (e.g., $a^2 + b^2 = c^2$). No HTML or markdown formatting other than LaTeX." },
        options: {
            type: "ARRAY",
            items: { type: "STRING" },
            description: "Exactly 4 options, using LaTeX for math if needed."
        },
        correctAnswer: { type: "INTEGER", description: "The index of the correct option (0, 1, 2, or 3)." },
        explanation: { type: "STRING", description: "A detailed step-by-step explanation using LaTeX." }
    },
    required: ["id", "question", "options", "correctAnswer", "explanation"]
};

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || process.env.GEMINI_API_KEY });

async function main() {
    const prompt = `
Create 30 SAT-style multiple-choice questions focusing on the Pythagorean theorem and the Law of Sines in geometry.
The questions should vary in difficulty from easy to hard, resembling the actual SAT Math section.
Return the result as a JSON array exactly matching the schema.
    `;

    try {
        console.log("Generating questions...");
        const response = await ai.models.generateContent({
            model: "gemini-2.5-pro",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: "ARRAY",
                    items: questionSchema
                },
                temperature: 0.2
            }
        });

        const text = response.text || '[]';
        
        let questions = JSON.parse(text);
        
        const fileContent = `import { Question } from '../types';\n\nexport const GEOMETRY_PYTHAGORAS_SIN_LAW: Question[] = ${JSON.stringify(questions, null, 4)};\n`;
        const outPath = path.join(process.cwd(), 'src/data/questions_geometry_pythagoras_sin_law.ts');
        
        fs.writeFileSync(outPath, fileContent);
        console.log("Successfully generated and saved 30 questions to " + outPath);
    } catch (e) {
        console.error("Failed:", e);
    }
}

main();