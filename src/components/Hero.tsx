import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowDown } from 'lucide-react'

const PHONE = '570-618-1143'
const PHONE_HREF = 'tel:+15706181143'

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background image — Next.js Image for WebP conversion + preload */}
      <Image
        src="/images/truck.jpg"
        alt="Hauling Ace branded van"
        fill
        priority
        quality={75}
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/65 to-ink/85" />

      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />

      {/* Content — pt-20 offsets the fixed navbar height */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-20">
        {/* Eyebrow */}
        <p className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-6">
          <span className="w-8 h-px bg-gold" />
          Milford, PA &amp; Surrounding Areas
          <span className="w-8 h-px bg-gold" />
        </p>

        {/* Headline */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight mb-6">
          When You Gotta Move,{' '}
          <span className="text-gold italic">Hauling Ace</span> Has You Covered.
        </h1>

        {/* Subheading */}
        <p className="text-white/75 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Moving, hauling, clean-outs, and more across Eastern Pennsylvania,
          Western New Jersey, and Southern New York. Stress-free. Every time.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-3 bg-gold hover:bg-gold-light text-ink font-bold text-lg px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-gold/20"
          >
            <Phone size={20} />
            Call {PHONE}
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-full border border-white/30 transition-all hover:scale-105 backdrop-blur-sm"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Trust chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-12">
          {['Licensed & Insured', 'Local & Reliable', 'Free Estimates', 'Stress-Free'].map(
            (item) => (
              <span
                key={item}
                className="text-white/60 text-sm px-4 py-1.5 rounded-full border border-white/20"
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <ArrowDown size={24} />
      </div>
    </section>
  )
}
