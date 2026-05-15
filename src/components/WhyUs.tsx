import { ShieldCheck, MapPin, HeartHandshake, DollarSign } from 'lucide-react'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Insured',
    description:
      "Your belongings are protected. We carry full insurance so you're covered from start to finish.",
  },
  {
    icon: MapPin,
    title: 'Locally Owned',
    description:
      'Based in Milford, PA — we know this area, we serve this community, and we take that seriously.',
  },
  {
    icon: HeartHandshake,
    title: 'Genuinely Stress-Free',
    description:
      'Moving is hard enough. We show up on time, communicate clearly, and handle every detail.',
  },
  {
    icon: DollarSign,
    title: 'Fair, Upfront Pricing',
    description:
      'No hidden fees, no surprises. You get a clear quote before we ever lift a box.',
  },
]

export default function WhyUs() {
  return (
    <section className="bg-charcoal py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Why Hauling Ace
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            The Difference Is in the Details.
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Anyone can show up with a truck. We show up with a plan, the right
            equipment, and the care your job deserves.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <div key={p.title} className="text-center">
                <div className="w-14 h-14 bg-gold/15 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Icon size={26} className="text-gold" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.description}</p>
              </div>
            )
          })}
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-16">
          {[
            { value: '500+', label: 'Jobs Completed' },
            { value: '5★', label: 'Average Rating' },
            { value: '3', label: 'States Served' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-5xl font-bold text-gold mb-2">
                {stat.value}
              </p>
              <p className="text-white/50 text-sm uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
