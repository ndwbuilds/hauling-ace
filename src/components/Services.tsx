import Link from 'next/link'
import { Truck, Home, Package, Hammer, Wrench } from 'lucide-react'

const services = [
  {
    icon: Truck,
    title: 'Moving & Carrier',
    description:
      'Full-service local and regional moves. We handle your belongings with care from start to finish.',
  },
  {
    icon: Home,
    title: 'Clean Outs',
    description:
      "Estate clean-outs, garage hauls, and property cleanups. We remove the junk so you don't have to.",
  },
  {
    icon: Package,
    title: 'Delivery',
    description:
      'Furniture, appliances, equipment — we pick up and deliver wherever you need it.',
  },
  {
    icon: Hammer,
    title: 'Home Prep',
    description:
      'Staging, decluttering, and prep work to get your home ready for sale or rent.',
  },
  {
    icon: Wrench,
    title: 'Odd Jobs',
    description:
      'If it needs doing, we can do it. Hauling, assembly, light labor — just ask.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-ink py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Every Job, Done Right.
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            From a single-item haul to a full move, Hauling Ace handles it all
            with the same care and professionalism.
          </p>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/40 rounded-2xl p-8 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">
                  {s.title}
                </h3>
                <p className="text-white/55 leading-relaxed">{s.description}</p>
              </div>
            )
          })}

          {/* CTA card */}
          <div className="bg-gold/10 border border-gold/30 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
                Not Sure?
              </p>
              <h3 className="text-white font-semibold text-xl mb-3">
                Just Give Us a Call
              </h3>
              <p className="text-white/55 leading-relaxed">
                We'll figure out the best way to help. No job too small, no haul
                too big.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-block bg-gold hover:bg-gold-light text-ink font-bold text-center py-3 px-6 rounded-full transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
