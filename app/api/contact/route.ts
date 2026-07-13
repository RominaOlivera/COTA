import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { nombre, email, telefono, mensaje } = body

    const { data, error } = await resend.emails.send({
      from: 'COTA <onboarding@resend.dev>',
      to: ['estudio.arquitectura.cota@gmail.com'],
      subject: 'Nueva consulta desde la web',
      html: `
        <h2>Nueva consulta</h2>

        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    })

    if (error) {
      return Response.json(error, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json(error, { status: 500 })
  }
}