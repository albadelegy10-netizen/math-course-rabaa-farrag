import { GoogleGenAI, Type } from "@google/genai";
import fs from "fs";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  const prompt = `Write and execute Python code using Matplotlib and NumPy to render the following 7 graphs as Base64 encoded PNG images.
Return a JSON object where the keys are the IDs below, and the values are the base64 strings (starting with data:image/png;base64,...).
Make the graphs look like standard math exam diagrams (black and white, clear grid lines, labels).

Graph 1 (ID: est1_2021_april_6): A Cartesian plane with a line passing through (1, 0.5) and y-intercept 1.375. The line has slope -7/8. Mark point A(1, 0.5) with 'x' and text 'A(1, 0.5)'. Axes from -3 to 5.
Graph 2 (ID: est1_2021_april_8): A Cartesian plane with a circle centered at E(-1, 2) passing through F(-3, 0). Mark E and F with points and letters. Draw the circle.
Graph 3 (ID: est1_2021_april_14): A right triangle ADC with right angle at D. A=(0, 4.899), D=(0, 0), C=(13, 0). Point B is on DC at (5, 0). Draw segments AB, AD, DC, AC. Add labels A, B, C, D and right angle symbol at D.
Graph 4 (ID: est1_2021_april_19): A generic triangle with vertices (1, 0), (8, 0) extended, and a top vertex at (6, 5). Draw a line from (6,5) to (4,0). Add angle label '2x-3' at (1,0), 'x+22' at (4,0). Add an exterior angle arc 'x+4' at the top right vertex (6,5) relative to an extension of the right side.
Graph 5 (ID: est1_2021_april_24): A discrete bar/scatter plot. X-axis: months Jan to Dec. Y-axis: 0 to 12. Values: Jan: 2, Feb: 3, Mar: 2, Apr: 8, May: 6, June: 4, July: 2, Aug: 1, Sep: 11, Oct: 9, Nov: 3, Dec: 6. Draw vertical lines from x-axis to the point, and mark with 'x'.
Graph 6 (ID: est1_2021_april_34): A shaded polygon formed by union of two polygons. Poly 1: (-3, -3), (1, -3), (1, 3), (-1, 3). Poly 2: (1, 0), (4, 1), (4, 4), (1, 3). Draw grid and axes. Shade the region light gray with black border.
Graph 7 (ID: est1_2021_april_54): A scatterplot with X-axis 2009 to 2016, Y-axis 14 to 24. Points at 2010: (15, 18, 19), 2011: (16, 17, 20), 2012: (15, 16, 17, 19), 2013: (19, 20, 22), 2014: (15, 16, 18, 21), 2015: (18, 19, 22). Draw a dashed line from (2010, 17.1) to (2015, 19.1) labeled '17.4' at left and '19' at right.`;

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

  fs.writeFileSync('generated_graphs.json', response.text || '');
  console.log("Generated and saved to generated_graphs.json");
}

run().catch(console.error);
