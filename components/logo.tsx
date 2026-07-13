import Image from 'next/image'

export function Logo({
  className = '',
  width = 150,
  height = 80,
  showWordmark = false,
  priority = false,
}: {
  className?: string
  width?: number
  height?: number
  showWordmark?: boolean
  priority?: boolean
}) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/logo-completo.png"
        alt="COTA Estudio de Arquitectura"
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-auto object-contain"
        style={{ width, height }}
      />
      {showWordmark && (
        <span className="sr-only">COTA Estudio de Arquitectura</span>
      )}
    </span>
  )
}
