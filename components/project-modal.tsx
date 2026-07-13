'use client'

import Image from 'next/image'
import {
  ArrowLeft,
  ArrowRight,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from 'lucide-react'
import {
  TransformWrapper,
  TransformComponent,
} from 'react-zoom-pan-pinch'

type Project = {
  id: number
  title: string
  category: string
  location: string
  images: string[]
}

type ProjectModalProps = {
  project: Project | null
  currentImage: number
  setCurrentImage: React.Dispatch<React.SetStateAction<number>>
  onClose: () => void
}

export function ProjectModal({
  project,
  currentImage,
  setCurrentImage,
  onClose,
}: ProjectModalProps) {
  if (!project) return null

  const nextImage = (
    resetTransform: () => void
  ) => {
    resetTransform()

    setCurrentImage((prev) =>
      prev === project.images.length - 1
        ? 0
        : prev + 1
    )
  }

  const prevImage = (
    resetTransform: () => void
  ) => {
    resetTransform()

    setCurrentImage((prev) =>
      prev === 0
        ? project.images.length - 1
        : prev - 1
    )
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl overflow-hidden border border-primary/20 bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="flex items-center justify-between border-b border-primary/20 px-5 py-4 sm:px-6">

          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">
              {project.category}
            </span>

            <h3 className="mt-1 text-lg font-light text-white sm:text-xl">
              {project.title}
            </h3>

            <p className="text-sm text-neutral-400">
              {project.location}
            </p>
          </div>


          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center border border-primary/30 bg-black/80 text-primary transition hover:bg-primary/10"
          >
            <X className="h-5 w-5" />
          </button>

        </div>

        <div className="relative h-[55vh] bg-black sm:h-[65vh]">

          <TransformWrapper
            initialScale={1}
            minScale={1}
            maxScale={5}
            centerOnInit
            wheel={{
              step: 0.2,
            }}
            doubleClick={{
              mode: 'zoomIn',
            }}
          >

            {({ zoomIn, zoomOut, resetTransform }) => (

              <>

                <TransformComponent
                  wrapperClass="!w-full !h-full"
                  contentClass="!w-full !h-full"
                >

                  <div className="relative h-[55vh] w-full sm:h-[65vh]">

                    <Image
                      src={project.images[currentImage]}
                      alt={project.title}
                      fill
                      className="object-contain"
                    />

                  </div>

                </TransformComponent>


                <div className="absolute left-4 top-4 flex gap-2 sm:left-6 sm:top-6">

                  <button
                    onClick={(e)=>{
                      e.stopPropagation()
                      zoomIn()
                    }}
                    className="flex h-10 w-10 items-center justify-center border border-primary/30 bg-black/80 text-primary"
                  >
                    <ZoomIn className="h-4 w-4"/>
                  </button>


                  <button
                    onClick={(e)=>{
                      e.stopPropagation()
                      zoomOut()
                    }}
                    className="flex h-10 w-10 items-center justify-center border border-primary/30 bg-black/80 text-primary"
                  >
                    <ZoomOut className="h-4 w-4"/>
                  </button>


                  <button
                    onClick={(e)=>{
                      e.stopPropagation()
                      resetTransform()
                    }}
                    className="flex h-10 w-10 items-center justify-center border border-primary/30 bg-black/80 text-primary"
                  >
                    <RotateCcw className="h-4 w-4"/>
                  </button>

                </div>


                <button
                  onClick={(e)=>{
                    e.stopPropagation()
                    prevImage(resetTransform)
                  }}
                  className="absolute left-6 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-primary/30 bg-black/80 text-primary sm:flex"
                >
                  <ArrowLeft className="h-5 w-5"/>
                </button>


                <button
                  onClick={(e)=>{
                    e.stopPropagation()
                    nextImage(resetTransform)
                  }}
                  className="absolute right-6 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-primary/30 bg-black/80 text-primary sm:flex"
                >
                  <ArrowRight className="h-5 w-5"/>
                </button>


                <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2 sm:hidden">

                  {project.images.map((_,index)=>(

                    <button
                      key={index}
                      onClick={(e)=>{
                        e.stopPropagation()
                        resetTransform()
                        setCurrentImage(index)
                      }}
                      className={`transition-all ${
                        currentImage === index
                          ? 'h-2 w-8 bg-primary'
                          : 'h-2 w-2 bg-white/80'
                      }`}
                    />

                  ))}

                </div>

                <div className="absolute bottom-5 right-5 border border-primary/20 bg-black/80 px-3 py-2 text-xs tracking-[0.3em] text-primary">
                  {String(currentImage+1).padStart(2,'0')}
                  {' / '}
                  {String(project.images.length).padStart(2,'0')}
                </div>


              </>

            )}

          </TransformWrapper>

        </div>


        <div className="hidden border-t border-primary/20 p-4 sm:block">

          <div className="flex gap-3 overflow-x-auto">

            {project.images.map((img,index)=>(

              <button
                key={`${img}-${index}`}
                onClick={()=>{
                  setCurrentImage(index)
                }}
                className={`relative h-24 w-16 flex-shrink-0 overflow-hidden border ${
                  currentImage === index
                    ? 'border-primary'
                    : 'border-primary/20'
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
  )
}