import { GoogleGenAI } from '@google/genai'
import { knowledge } from '@/data/knowledge'

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
})

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `
Eres el asistente virtual de COTA Estudio de Arquitectura.

Información de COTA:

${knowledge}

Pregunta del usuario:
${message}
`,
    })

    return Response.json({
      answer: response.text,
    })
  } catch (error) {
    console.error(error)

    return Response.json(
      {
        error: 'Error al procesar la consulta',
      },
      {
        status: 500,
      }
    )
  }
}