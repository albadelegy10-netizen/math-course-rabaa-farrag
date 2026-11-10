import { GoogleGenAI, Type } from "@google/genai";
import fs from "fs";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  const pythonCode = fs.readFileSync('generate_graphs.py', 'utf8');
  const prompt = `Please execute the following python code using the code execution tool. It will generate a dictionary of base64 images. Please return the dictionary as JSON.\n\n\`\`\`python\n${pythonCode}\n\`\`\`\n\nPlease make sure to return the full JSON object containing all 7 keys.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      tools: [{ codeExecution: {} }],
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          est1_2021_april_6: { type: Type.STRING },
          est1_2021_april_8: { type: Type.STRING },
          est1_2021_april_14: { type: Type.STRING },
          est1_2021_april_19: { type: Type.STRING },
          est1_2021_april_24: { type: Type.STRING },
          est1_2021_april_34: { type: Type.STRING },
          est1_2021_april_54: { type: Type.STRING },
        }
      }
    }
  });

  fs.writeFileSync('generated_graphs2.json', response.text || '');
  console.log("Generated and saved to generated_graphs2.json");
}

run().catch(console.error);
