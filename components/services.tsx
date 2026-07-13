import {
  PencilRuler,
  HardHat,
  Hammer,
  Sofa,
  Box,
  ClipboardCheck,
} from 'lucide-react'
import { Reveal } from './reveal'

const services = [
  {
    icon: ClipboardCheck,
    title: 'Asesoramiento Profesional',
    description:
      'Consultas técnicas personalizadas, análisis de las premisas del cliente y desarrollo de alternativas para encontrar la solución más adecuada para cada proyecto.',
  },
  {
    icon: Hammer,
    title: 'Cálculos y presupuestos',
    description:
    'Elaboración de presupuestos detallados de mano de obra, materiales y honorarios profesionales, brindando una visión clara de la inversión necesaria para cada etapa del proyecto.',
  },
  {
    icon: PencilRuler,
    title: 'Proyecto Arquitectónico',
    description:
    'Proyectos integrales desde el concepto hasta la documentación técnica, con foco en la funcionalidad y la estética.',
  },
  {
    icon: Sofa,
    title: 'Interiorismo',
    description:
    'Diseño de interiores que combina confort, identidad y materiales seleccionados con criterio.',
  },
  {
    icon: Box,
    title: 'Renders y Modelados 3D',
    description:
      'Visualización digital del proyecto mediante modelos 3D y renders fotorrealistas para anticipar cada detalle antes de construir.',
  },
  {
    icon: HardHat,
    title: 'Dirección Técnica',
    description:
      'Supervisión y control de la ejecución de la obra para garantizar calidad, plazos y fidelidad al proyecto original.',
  }
]

export function Services() {
  return (
    <section id="servicios" className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Servicios
            </span>
          </div>
          <h2 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Soluciones completas para cada etapa de tu proyecto.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 60}>
              <article className="group flex h-full flex-col bg-background p-8 transition-colors hover:bg-card">
                <span className="inline-flex size-12 items-center justify-center rounded-lg border border-border text-primary transition-colors group-hover:border-primary">
                  <service.icon className="size-5" />
                </span>
                <h3 className="mt-6 text-lg font-medium text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
