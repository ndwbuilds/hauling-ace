import type { Metadata } from 'next'
import Link from 'next/link'
import { Truck, Home, Package, Hammer, Wrench, Phone } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'

export const metadata: Metadata = {
  title: 'Services | Hauling Ace',
  description:
    'Moving, clean-outs, delivery, home prep, and odd jobs across Eastern PA, Western NJ, and Southern NY.',
}

const services = [
  {
    icon: Truck,
    title: 'Moving & Carrier',
    tagline: 'Local & regional moves done right.',
    body: "Whether you're moving across town or across the region, Hauling Ace handles your belongings with care. We show up with the right equipment, work efficiently, and treat your stuff like our own. No damage. No excuses.",
    details: [
      'Full household moves',
      'Apartment & condo moves',
      'Office and business relocations',
      'Single-item and partial moves',
      'Loading & unloading only',
    ],
  },
  {
    icon: Home,
    title: 'Clean Outs',
    tagline: 'Clear the clutter. Reclaim your space.',
    body: "Estate clean-outs, hoarder hauls, garage purges — we've seen it all and handled it all. We remove, sort, and dispose of unwanted items so you don't have to. Quick, efficient, and respectful of your property.",
    details: [
      'Estate & foreclosure clean-outs',
      'Garage and basement hauls',
      'Construction debris removal',
      'Furniture and appliance disposal',
      'Donation drop-offs',
    ],
  },
  {
    icon: Package,
    title: 'Delivery',
    tagline: 'We pick it up. We bring it to you.',
    body: 'Got a piece of furniture, an appliance, or equipment that needs to get from point A to point B? We handle pickup and delivery anywhere in our service area. Quick turnaround, careful handling.',
    details: [
      'Furniture delivery & placement',
      'Appliance pickup & delivery',
      'Retail & marketplace hauls',
      'Equipment transport',
    ],
  },
  {
    icon: Hammer,
    title: 'Home Prep',
    tagline: 'Get your home market-ready.',
    body: "Selling or renting your property? We'll help you stage, declutter, and prepare. From clearing out old furniture to hauling away anything that shouldn't be in the listing photos, we get the job done fast.",
    details: [
      'Pre-listing declutter & haul',
      'Furniture staging assistance',
      'Cleanout before showing',
      'Post-move cleanup',
    ],
  },
  {
    icon: Wrench,
    title: 'Odd Jobs',
    tagline: "If it needs doing, we'll do it.",
    body: "Not everything fits neatly into a category. If you need something moved, hauled, lifted, or handled — give us a call. We've handled everything from piano moves to barn clean-outs. No job too strange.",
    details: [
      'Heavy item moving',
      'Piano & safe transport',
      'Barn & property hauls',
      'Light labor & assembly',
      'Custom requests welcome',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Page hero */}
      <div className="bg-ink py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            What We Offer
          </p>
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-5">
            Our Services
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            From a single haul to a full move, we bring the truck, the crew,
            and the care. Here's what we do best.
          </p>
        </div>
      </div>

      {/* Services list */}
      <div className="bg-cream">
        {services.map((s, i) => {
          const Icon = s.icon
          const isEven = i % 2 === 0
          return (
            <section
              key={s.title}
              className={`py-20 lg:py-28 ${isEven ? 'bg-cream' : 'bg-mist'}`}
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 bg-gold/15 rounded-xl flex items-center justify-center">
                        <Icon size={22} className="text-gold" />
                      </div>
                      <span className="text-gold text-sm font-semibold tracking-wider uppercase">
                        {s.tagline}
                      </span>
                    </div>
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink mb-5">
                      {s.title}
                    </h2>
                    <p className="text-ink/65 text-lg leading-relaxed mb-8">{s.body}</p>
                    <Link
                      href="/contact"
                      className="inline-block bg-ink hover:bg-charcoal text-white font-bold px-7 py-3.5 rounded-full transition-colors"
                    >
                      Get a Quote
                    </Link>
                  </div>

                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className="bg-ink rounded-2xl p-8">
                      <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-5">
                        What&apos;s Included
                      </p>
                      <ul className="space-y-4">
                        {s.details.map((d) => (
                          <li key={d} className="flex items-start gap-3 text-white/75">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 pt-6 border-t border-white/10">
                        <a
                          href="tel:+15706181143"
                          className="flex items-center gap-2 text-gold font-semibold hover:underline"
                        >
                          <Phone size={16} />
                          Call for a free quote
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      <ContactCTA />
    </main>
  )
}
