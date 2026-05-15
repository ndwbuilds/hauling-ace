import Link from 'next/link'
import { Phone } from 'lucide-react'

const PHONE = '570-618-1143'
const PHONE_HREF = 'tel:+15706181143'

export default function ContactCTA() {
  return (
    <section className="bg-gold py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl lg:text-6xl font-bold text-ink mb-5 leading-tight">
          Ready to Make Your Move?
        </h2>
        <p className="text-ink/70 text-xl mb-10 max-w-2xl mx-auto">
          Call us for a free, no-pressure quote. We'll tell you exactly what to
          expect — no games, no hidden fees.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-3 bg-ink hover:bg-charcoal text-white font-bold text-xl px-10 py-5 rounded-full transition-all hover:scale-105 shadow-xl"
          >
            <Phone size={22} />
            {PHONE}
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-ink font-semibold text-lg px-8 py-5 rounded-full border border-ink/20 transition-all hover:scale-105"
          >
            Send a Message
          </Link>
        </div>
      </div>
    </section>
  )
}
