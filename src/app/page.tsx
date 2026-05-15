import Hero from '@/components/Hero'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import WhyUs from '@/components/WhyUs'
import ServiceAreas from '@/components/ServiceAreas'
import Testimonials from '@/components/Testimonials'
import ContactCTA from '@/components/ContactCTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <WhyUs />
      <ServiceAreas />
      <Testimonials />
      <ContactCTA />
    </main>
  )
}
