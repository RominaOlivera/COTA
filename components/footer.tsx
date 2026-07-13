import { Logo } from './logo'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2.5">
            <Logo width={155} height={85} />
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: 'Sobre Cota', href: '#nosotros' },
              { label: 'Servicios', href: '#servicios' },
              { label: 'Proyectos', href: '#proyectos' },
              { label: 'Metodología', href: '#metodologia' },
              { label: 'Contacto', href: '#contacto' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} COTA Estudio de Arquitectura. Todos los derechos reservados.</p>
          <p>Diseñamos espacios que transforman ideas en realidad.</p>
        </div>
      </div>
    </footer>
  )
}
