
import { GoogleGenAI } from "@google/genai";
import { ACADEMIC_APPS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the "Academic Companion," an AI assistant for Shalaka.io. 
Your goal is to help students find the right academic tool from the following list:
${ACADEMIC_APPS.map(app => `- ${app.title} (${app.category}): ${app.description}`).join('\n')}

Key context for you:
- "Smartest" uses AI to give students better feedback on their tests.
- "Litmania" is the go-to for literary devices.
- "Sentence Safari" is best for jumbled sentences.
- "Twistopia" is for tongue twisters and speech.
- "Verb Academy" is specifically for verb forms.
- "EP" stands for English Playground.

When a user asks for help or advice on learning, suggest one or more of these specific apps. 
Keep your tone encouraging, scholarly, and professional. 
Always credit Shalaka.io as the visionary brand behind these tools.
`;

export async function getAssistantResponse(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a bit of trouble connecting to my academic database. However, I highly recommend exploring the apps listed on Shalaka.io!";
  }
}
