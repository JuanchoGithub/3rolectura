
import { GoogleGenAI, Type } from "@google/genai";
import { QuestData } from "../types";
import { GEMINI_MODEL } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const questSchema = {
  type: Type.OBJECT,
  properties: {
    title: {
      type: Type.STRING,
      description: "Un título corto y atrapante para la historia, en español.",
    },
    passage: {
      type: Type.STRING,
      description: "Un pasaje de 100-150 palabras, para un nivel de lectura de 3er grado (Lexile 420-820L), escrito en español de Argentina. La historia debe ser divertida, misteriosa o de aventuras.",
    },
    vocabulary: {
      type: Type.ARRAY,
      description: "Una lista de 3 palabras de vocabulario clave del pasaje.",
      items: {
        type: Type.OBJECT,
        required: ["word", "definition"],
        properties: {
          word: { type: Type.STRING, description: "La palabra de vocabulario." },
          definition: { type: Type.STRING, description: "Una definición simple y amigable para niños de la palabra, en español." },
        },
      },
    },
    comprehensionQuestions: {
      type: Type.ARRAY,
      description: "Una lista de 3 preguntas de opción múltiple sobre el pasaje.",
      items: {
        type: Type.OBJECT,
        required: ["questionText", "options", "correctAnswerIndex"],
        properties: {
          questionText: { type: Type.STRING, description: "La pregunta, en español." },
          options: {
            type: Type.ARRAY,
            description: "Una lista de 4 opciones de respuesta, en español.",
            items: { type: Type.STRING },
          },
          correctAnswerIndex: {
            type: Type.INTEGER,
            description: "El índice (0-3) de la respuesta correcta en la lista de opciones.",
          },
        },
      },
    },
  },
  required: ["title", "passage", "vocabulary", "comprehensionQuestions"],
};

const bulkQuestSchema = {
    type: Type.OBJECT,
    properties: {
        quests: {
            type: Type.ARRAY,
            description: "Una lista de 50 aventuras de lectura únicas para niños de tercer grado.",
            items: questSchema,
        }
    },
    required: ["quests"]
};


export const generateBulkReadingQuests = async (): Promise<QuestData[]> => {
  try {
    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: "Genera una colección de 50 aventuras de lectura variadas para un niño de tercer grado en Argentina. Asegúrate de que cada una sea única en su tema y contenido.",
      config: {
        systemInstruction: "Sos un escritor creativo y educador que crea una gran biblioteca de aventuras de lectura para estudiantes de tercer grado en Argentina. Todo el contenido debe estar en español de Argentina. El objetivo es que sea divertido, educativo y muy variado.",
        responseMimeType: "application/json",
        responseSchema: bulkQuestSchema,
      },
    });

    const jsonText = response.text.trim();
    const data = JSON.parse(jsonText);
    
    if (!data.quests || !Array.isArray(data.quests) || data.quests.length === 0) {
      throw new Error("La respuesta de la API no contiene una lista de aventuras válida.");
    }

    return data.quests as QuestData[];
  } catch (error) {
    console.error("Error al generar la colección de aventuras:", error);
    throw new Error("No se pudo preparar la biblioteca de aventuras. Por favor, intentá de nuevo más tarde.");
  }
};
