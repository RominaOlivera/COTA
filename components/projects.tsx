'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'
import { ProjectModal } from './project-modal'

type Category = 'Residencial' | 'Comercial' | 'Interiorismo'

const projects = [
{
  id: 1,
  title: 'Casa Galeano',
  category: 'Residencial',
  location: 'Barrio La Toscana',
  images: [
    '/resindencial-toscana.png',
    '/frente-toscana.jpeg',
    '/planta.jpeg',
    '/planta-techo.jpeg',
  ],
  span: true,
},
  {
    id: 2,
    title: 'Doble altura',
    category: 'Interiorismo',
    location: 'Loft Guerrero',
    images: [
    '/interiorismo-2.jpeg',
    '/interiorismo-3.jpeg',
  ]
  },
  {
    id:3,
    title: 'Proyecto Cultural',
    category: 'Comercial',
    location: 'Pedemonte',
    images: [
      '/comercial.jpeg',
      '/comercial-2.jpeg',
    ],
  },
  {
    id: 4,
    title: 'Casa Devito',
    category: 'Residencial',
    location: 'Barrio El Torreon',
    images: [
      '/proyecto-7.jpeg',
      '/devito-2.jpeg',
    ],
  },
  {
    id: 5,
    title: 'Casa Libellara',
    category: 'Residencial',
    location: 'Barrio Aguaribay',
    images: [
      '/proyecto-3.jpeg',
      '/referencias.jpeg',
    ],
  },
  
  {
    id: 6,
    title: 'Casa Libellara',
    category: 'Interiorismo',
    location: 'Barrio Aguaribay',
    images: [
      '/interiorismo.jpeg',
      '/vistas.jpeg',
    ],
    span: true,
  },
  {
    id: 7,
    title: 'Duplex espejados',
    category: 'Residencial',
    location: 'Barrio Jardín de los andes',
    images: [
      '/proyecto-5.jpeg',
      '/duplex-2.jpeg',
      '/duplex-1.jpeg',
    ],
  },
]

const filters: ('Todos' | Category)[] = [
  'Todos',
  'Residencial',
  'Comercial',
  'Interiorismo'
]

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>('Todos')

  const visible = projects.filter(
    (p) => active === 'Todos' || p.category === active,
  )

const [selectedProject, setSelectedProject] = useState(null)
const [currentImage, setCurrentImage] = useState(0)
  return (
  <section
    id="proyectos"
    className="w-full bg-gray-50 px-6 py-10 lg:px-10 lg:py-10"
  >
    <Reveal className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      
      <div className="max-w-2xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-primary" aria-hidden="true" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Proyectos
          </span>
        </div>

        <h2 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl">
          Una selección de obras que definen nuestra identidad.
        </h2>
      </div>

      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`border px-4 py-2 text-sm transition-colors ${
              active === filter
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-neutral-300 text-neutral-700 hover:border-black hover:text-black'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </Reveal>

    <div className="mx-auto mt-14 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {visible.map((project, i) => (
        <Reveal
          key={project.id}
          delay={i * 60}
          className={project.span ? 'sm:col-span-2' : ''}
        >
          
         <a className="group relative block h-full overflow-hidden rounded-2xl">
              <div
                className={`relative overflow-hidden rounded-2xl ${
                project.span ? 'h-[420px]' : 'h-[420px]'
                }`}
              >
                <Image
              src={project.images?.[0]}
              alt={project.title}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent" />
          </div>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-primary">
                  {project.category}
                </span>

                <h3 className="mt-1 text-xl font-medium text-black">
                  {project.title}
                </h3>

                <p className="text-sm text-neutral-600">
                  {project.location}
                </p>
              </div>

              <span className="flex size-10 items-center justify-center rounded-full border border-neutral-300 bg-white/70 text-black backdrop-blur-sm transition-colors group-hover:border-primary group-hover:text-primary">
              
                 <button
                    onClick={(e) => {
                      e.preventDefault()
                      setSelectedProject(project)
                      setCurrentImage(0)
                    }}
                  className="flex size-10 items-center justify-center rounded-full border border-neutral-300 bg-white/70"
                  >
                  <ArrowUpRight className="size-4" />
                </button>
              </span>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  {selectedProject && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
    onClick={() => setSelectedProject(null)}
  >
    <div
      className="w-full max-w-3xl rounded-2xl bg-white overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative h-[60vh] sm:h-[70vh] overflow-hidden bg-neutral-100">
        <Image
          src={selectedProject.images[currentImage]}
          alt={selectedProject.title}
          fill
          className="object-contain transition-transform duration-500 hover:scale-110"
        />

        <button
          onClick={() =>
            setCurrentImage((prev) =>
              prev === 0
                ? selectedProject.images.length - 1
                : prev - 1
            )
          }
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg"
        >
          ←
        </button>

        <button
          onClick={() =>
            setCurrentImage((prev) =>
              prev === selectedProject.images.length - 1
                ? 0
                : prev + 1
            )
          }
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg"
        >
          →
        </button>

        <button
          onClick={() => setSelectedProject(null)}
          className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-2 shadow-lg"
        >
          ✕
        </button>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold">
          {selectedProject.title}
        </h3>

        <p className="mt-1 text-sm text-neutral-500">
          {selectedProject.location}
        </p>

        <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
          {selectedProject.images.map((img, index) => (
            <button
              key={`${img}-${index}`}
              onClick={() => setCurrentImage(index)}
              className={`relative h-24 w-16 sm:h-28 sm:w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                currentImage === index
                  ? 'border-primary'
                  : 'border-transparent'
              }`}
            >
              <Image
                src={img}
                alt=""
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
)}
      <ProjectModal
      project={selectedProject}
      currentImage={currentImage}
      setCurrentImage={setCurrentImage}
      onClose={() => setSelectedProject(null)}
    />
  </section>
)
}