import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Contact & Free Quote | Hauling Ace',
  description:
    'Get a free quote from Hauling Ace. Call us or fill out our quick form for moving, hauling, clean-outs, and more.',
}

const PHONE = '(347) 388-1312'
const PHONE_HREF = 'tel:+13473881312'
const EMAIL = 'haulingacecompany@gmail.com'

export default function ContactPage() {
  return (
    <main className="pt-20 bg-ink min-h-screen">
      {/* Page header */}
      <div className="py-20 lg:py-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Free Estimates
          </p>
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-5">
            Let's Talk.
          </h1>
          <p className="text-white/60 text-xl max-w-xl mx-auto">
            Tell us about your job and we'll put together a clear, honest quote.
            No pressure, no surprises.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl font-bold text-white mb-8">
              Prefer to Call?
            </h2>

            <div className="space-y-6">
              <a
                href={PHONE_HREF}
                className="flex items-start gap-4 group"
              >
                <div className="w-11 h-11 bg-gold/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold/25 transition-colors">
                  <Phone size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-white font-semibold text-lg group-hover:text-gold transition-colors">
                    {PHONE}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-start gap-4 group"
              >
                <div className="w-11 h-11 bg-gold/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold/25 transition-colors">
                  <Mail size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Email</p>
                  <p className="text-white font-medium group-hover:text-gold transition-colors break-all">
                    {EMAIL}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-gold/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Based In</p>
                  <p className="text-white font-medium">Milford, PA 18337</p>
                  <p className="text-white/50 text-sm mt-1">
                    Serving Eastern PA · Western NJ · Southern NY
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-gold/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Hours</p>
                  <p className="text-white font-medium">Monday – Saturday</p>
                  <p className="text-white/50 text-sm">7:00 AM – 7:00 PM</p>
                  <p className="text-white/50 text-sm">Sunday by appointment</p>
                </div>
              </div>
            </div>

            {/* Big call button */}
            <a
              href={PHONE_HREF}
              className="mt-10 flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-ink font-bold text-lg py-4 px-8 rounded-full transition-all hover:scale-105 w-full"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-3xl font-bold text-white mb-8">
              Request a Quote
            </h2>
            <QuoteForm />
          </div>
        </div>
      </div>
    </main>
  )
}
