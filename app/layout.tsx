import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Geist_Mono, Geist } from 'next/font/google'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: 'COTA · Estudio de Arquitectura',
  description:
    'COTA Estudio de Arquitectura. Diseñamos espacios que transforman ideas en realidad. Diseño arquitectónico, dirección de obra, interiorismo y visualización 3D.',
  generator: 'v0.app',
  icons: {
    icon: '/logo-cota.png',
    apple: '/logo-cota.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#34373d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
