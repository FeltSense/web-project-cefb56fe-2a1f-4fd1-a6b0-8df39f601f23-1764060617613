import HeroSection from '@/components/hero-section'
import Features from '@/components/features'
import Testimonials from '@/components/testimonials'
import Pricing from '@/components/pricing'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Features />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
