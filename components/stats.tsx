'use client'

import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const stats = [
  {
    value: 50,
    suffix: '+',
    label: 'Clientes satisfechos',
  },
  {
    value: 5,
    suffix: '+',
    label: 'Años de experiencia',
  },
  {
    value: 120,
    suffix: '+',
    label: 'Proyectos desarrollados',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Atención personalizada',
  },
]

export function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
   <section ref={ref} className="bg-gray-50">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
    <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="border-l-5 border-primary pl-5"
        >
          <div className="text-4xl font-semibold tracking-tight text-[#111827] lg:text-5xl">
            {inView && (
              <CountUp
                end={stat.value}
                duration={2.5}
                suffix={stat.suffix}
              />
            )}
          </div>

          <p className="mt-2 text-sm text-[#6B7280]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}