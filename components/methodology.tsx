import { Reveal } from './reveal'

const steps = [
  {
    number: '01',
    title: 'Reunión inicial',
    description:
      'Escuchamos tus necesidades, objetivos y se ejecuta presupuesto para entender el alcance del proyecto.',
  },
  {
    number: '02',
    title: 'Premisas conceptuales',
    description:
      'Desarrollamos las primeras ideas y propuestas espaciales que dan forma a tu visión.',
  },
  {
    number: '03',
    title: 'Desarrollo del proyecto',
    description:
      'Definimos la documentación técnica, materiales y detalles constructivos con precisión.',
  },
  {
    number: '04',
    title: 'Dirección y seguimiento',
    description:
      'Supervisamos la obra para garantizar que todo se ejecute según lo proyectado.',
  },
  {
    number: '05',
    title: 'Entrega final',
    description:
      'Entregamos un espacio listo para habitar, cuidando cada detalle hasta el cierre.',
  },
]

export function Methodology() {
  return (
    <section id="metodologia" className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Metodología de Trabajo
            </span>
          </div>
          <h2 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Un proceso claro, transparente y centrado en vos.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-5">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 70}>
              <li className="flex h-full flex-col bg-background p-7">
                <span className="text-sm font-mono text-primary">
                  {step.number}
                </span>
                <h3 className="mt-4 text-base font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
