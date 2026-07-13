import { MessageCircle } from 'lucide-react'

const WHATSAPP_URL =
  'https://wa.me/5492617627374?text=Hola%20COTA%2C%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios.'

export function WhatsappFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" />
      <span className="absolute inline-flex size-14 animate-ping rounded-full bg-primary opacity-20" aria-hidden="true" />
    </a>
  )
}
