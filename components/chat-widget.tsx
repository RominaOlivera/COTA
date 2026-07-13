'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: `Hola 👋

        Soy el asistente virtual de COTA.

        Puedo ayudarte con consultas sobre:

        • Obra nueva
        • Relevamientos
        • Renders y modelado 3D
        • Dirección técnica
        • Construcción`,
    },
  ])

  async function sendMessage() {
    if (!message.trim() || loading) return

    const userMessage = message

    setMessages((prev) => [
      ...prev,
      {
        role: 'user',
        content: userMessage,
      },
    ])

    setMessage('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      })

      const data = await res.json()

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            data.answer ||
            'No pude procesar tu consulta en este momento.',
        },
      ])
    } catch (error) {
      console.error(error)

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Ocurrió un error al conectar con el asistente.',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {open && (
        <div
  className="
    fixed
    z-50

    inset-x-4
    bottom-24

    h-[75vh]
    w-auto

    rounded-3xl
    border border-white/10
    bg-zinc-950
    shadow-2xl

    flex flex-col
    overflow-hidden

    sm:inset-auto
    sm:bottom-28
    sm:right-6
    sm:w-[380px]
    sm:h-[620px]
  "
        >
          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-white/10
              bg-zinc-900
              px-5
              py-4
            "
          >
            <div>
              <h3 className="font-semibold text-white">
                Asistente COTA
              </h3>

              <p className="text-xs tracking-wide text-[#69D3A7]">
                Arquitectura • Proyecto • Construcción
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-zinc-400 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          <div className="h-[470px] overflow-y-auto p-4">
            <div className="flex flex-col gap-3 whitespace-pre-line">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                    msg.role === 'user'
                      ? 'ml-auto bg-[#69D3A7] text-black'
                      : 'bg-zinc-800 text-zinc-100'
                  }`}
                >
                  {msg.content}
                </div>
              ))}

              {loading && (
                <div className="max-w-[85%] rounded-2xl bg-zinc-800 px-4 py-3 text-sm text-zinc-100">
                  Escribiendo...
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-white/10 p-4">
            <div className="flex gap-2">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    sendMessage()
                  }
                }}
                type="text"
                placeholder="Consultá sobre tu proyecto..."
                className="
                  flex-1
                  rounded-xl
                  border
                  border-white/10
                  bg-zinc-900
                  px-4
                  py-3
                  text-sm
                  text-white
                  placeholder:text-zinc-500
                  outline-none
                  focus:border-[#69D3A7]
                "
              />

              <button
                onClick={sendMessage}
                disabled={loading}
                className="
                  rounded-xl
                  bg-[#69D3A7]
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-black
                  transition
                  hover:brightness-110
                  disabled:opacity-50
                "
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="
          fixed
          bottom-6
          right-24
          z-50
          flex
          items-center
          gap-3
          border
          border-[#69D3A7]/30
          bg-black/90
          px-5
          py-2
          text-white
          backdrop-blur-md
          transition-all
          hover:border-[#69D3A7]
          hover:bg-zinc-900
        "
      >
        <MessageCircle
          size={18}
          className="text-[#69D3A7]"
        />

        <div className="text-left">
          <p className="text-xs text-zinc-400">
            Consulta rápida
          </p>

          <p className="text-sm font-medium">
            Asistente COTA
          </p>
        </div>
      </button>
    </>
  )
}