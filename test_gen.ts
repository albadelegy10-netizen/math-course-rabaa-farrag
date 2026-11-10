import { GoogleGenAI } from '@google/genai';
import * as dotenv from 'dotenv';
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

async function test() {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-pro',
    contents: 'Say hi'
  });
  console.log(response.text);
}
test();
