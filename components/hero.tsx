import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const WHATSAPP_URL =
  'https://wa.me/5492617627374?text=Hola%20COTA%2C%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios.'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-architecture.png"
          alt="Proyecto arquitectónico contemporáneo"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent"></div>
      </div>
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-20 lg:px-10">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-primary" />

          <span className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
            Arquitectura · Proyecto · Dirección · Construcción 
          </span>
        </div>

       <h1 className="mt-8 max-w-4xl text-balance text-4xl font-medium leading-[1.02] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.75rem]">
          Diseñamos arquitectura
          <br />
          con identidad,
          <br />
          precisión y propósito.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
          En COTA desarrollamos proyectos arquitectónicos que combinan
          funcionalidad, estética y una profunda comprensión de quienes los
          habitan.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:translate-y-[-2px] hover:opacity-90"
          >
            Ver proyectos
            <ArrowRight className="size-4" />
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-white/20 bg-white/5 px-8 py-4 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-primary hover:bg-white/10"
          >
            <img
              src="/whatsapp-green.svg"
              alt="WhatsApp"
              className="h-7 w-7 px-1"
                />
            Hablemos de tu proyecto
          </a>
        </div>
      </div>
    </section>
  )
}