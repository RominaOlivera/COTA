'use client'

import { useState } from 'react'
import {
  MapPin,
  Mail,
  Phone,
  Send
} from 'lucide-react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

const WHATSAPP_URL =
   'https://wa.me/5492617627374?text=Hola%20COTA%2C%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios.'
export function Contact() {
  const [sent, setSent] = useState(false)

async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>
) {
  e.preventDefault()

  const form = e.currentTarget

  const formData = new FormData(form)

  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nombre: formData.get('nombre'),
      telefono: formData.get('telefono'),
      email: formData.get('email'),
      mensaje: formData.get('mensaje'),
    }),
  })

  if (response.ok) {
    setSent(true)
    form.reset()
  }
}
  return (
    <section id="contacto" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Contacto
            </span>
          </div>
          <h2 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Hablemos de tu proyecto.
          </h2>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Contanos tu idea y nos prondremos en contacto para
            asesorarte sin compromiso.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-center gap-4">
              <span className="flex size-10 items-center justify-center rounded-lg border border-border text-primary">
                <MapPin className="size-4" />
              </span>
              <span className="text-sm text-foreground">
                Joaquin V. gonzalez 369, Mendoza, Argentina.
              </span>
            </li>
            <li className="flex items-center gap-4">
              <a href="mailto:estudio.arquitectura.cota@gmail.com" className="flex items-center gap-4 text-sm text-foreground transition-colors hover:text-primary">
                <span className="flex size-10 items-center justify-center rounded-lg border border-border text-primary">
                  <Mail className="size-4" />
                </span>
               estudio.arquitectura.cota@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-sm text-foreground transition-colors hover:text-primary">
                <span className="flex size-10 items-center justify-center rounded-lg border border-border text-primary">
                  <Phone className="size-4" />
                </span>
                +54 9 261 762 7374
              </a>
            </li>
          </ul>

          <div className="mt-5 space-y-5">
            <a
              href="https://instagram.com/cota.estudio.arquitectura"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-sm text-foreground transition-colors hover:text-primary"
            >
              <span className="flex size-10 items-center justify-center rounded-lg border border-border text-primary">
                <FaInstagram className="size-4" />
              </span>
              @cota.estudio.arquitectura
            </a>

            <a
              href="https://linkedin.com/company/cota-estudio-de-arquitectura"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-sm text-foreground transition-colors hover:text-primary"
            >
              <span className="flex size-10 items-center justify-center rounded-lg border border-border text-primary">
                <FaLinkedin className="size-4" />
              </span>
              COTA Estudio de Arquitectura
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card/40 p-8">
          {sent ? (
            <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Send className="size-5" />
              </span>
              <h3 className="mt-6 text-xl font-medium text-foreground">
                ¡Gracias por tu mensaje!
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Te responderemos a la brevedad.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nombre" name="nombre" placeholder="Tu nombre" />
                <Field label="Teléfono" name="telefono" placeholder="+54 9 261 ..." type="tel" required={false} />
              </div>
              <Field label="Email" name="email" placeholder="tu@email.com" type="email" />
              <div>
                <label htmlFor="mensaje" className="mb-2 block text-sm text-foreground">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  required
                  placeholder="Contanos sobre tu proyecto..."
                  className="w-full resize-none rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Enviar mensaje
                <Send className="size-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  placeholder,
  type = 'text',
  required = true,
}: {
  label: string
  name: string
  placeholder: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
      />
    </div>
  )
}
