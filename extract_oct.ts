import { GoogleGenAI, Type } from "@google/genai";
import fs from "fs";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const pdfBuffer = fs.readFileSync("est1-2020-october.pdf"); // I don't have the PDF file natively, or do I? No, the user provided it in chat. But I can copy the OCR!
