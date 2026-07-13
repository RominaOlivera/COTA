import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Projects } from '@/components/projects'
import { Methodology } from '@/components/methodology'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { WhatsappFloat } from '@/components/whatsapp-float'
import { Stats } from '@/components/stats'
import { ChatWidget } from '@/components/chat-widget'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Methodology />
      <Stats />
      <Contact />
      <Footer />
      <WhatsappFloat />
      <ChatWidget/>
    </main>
  )
}
