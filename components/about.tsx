import Image from 'next/image'
import { Reveal } from './reveal'

export function About() {
  return (
<section id="nosotros" className="bg-gray-50">
  <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-10">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-lg">
          <Image
            src="/cota-local.jpeg"
            alt="Espacio de trabajo del estudio COTA con planos y maquetas"
            fill
            className="object-contain"
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Sobre COTA
            </span>
          </div>

          <h2 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl">
            Arquitectura que une diseño, funcionalidad y calidad constructiva.
          </h2>

         <div className="mt-6 space-y-5 text-[17px] leading-8 text-[#4B5563]">
 
            <p>
              En <span className="font-medium text-black">COTA</span> creemos que cada
              proyecto es una oportunidad para crear espacios con identidad,
              funcionalidad y valor a largo plazo.
            </p>

            <p>
              Fundado en 2020 por el arquitecto Federico Lobos, COTA nace con la visión de ofrecer un servicio integral donde el diseño, la planificación y la construcción formen parte de un mismo proceso.
            </p>

            <p>
              Desde entonces acompañamos a nuestros clientes en el desarrollo de proyectos publicos y privados, combinando creatividad, precisión técnica y atención personalizada en cada etapa.
            </p>
          
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'Escuchamos antes de diseñar',
              'Proyectamos con criterio técnico',
              'Construimos con atención al detalle',
              'Acompañamos de principio a fin',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span className="text-sm text-[#4B5563]">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      </div>
    </section>
  )
}
