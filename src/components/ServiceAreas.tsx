const regions = [
  {
    name: 'Eastern Pennsylvania',
    towns: ['Pike County', 'Monroe County', 'Wayne County', 'Carbon County', 'Milford', 'Stroudsburg', 'Jim Thorpe'],
  },
  {
    name: 'Western New Jersey',
    towns: ['Sussex County', 'Warren County', 'Newton', 'Hackettstown', 'Belvidere'],
  },
  {
    name: 'Southern New York',
    towns: ['Orange County', 'Sullivan County', 'Port Jervis', 'Middletown', 'Monticello'],
  },
]

export default function ServiceAreas() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left copy */}
          <div>
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Service Areas
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink mb-6 leading-tight">
              We Come to You.
            </h2>
            <p className="text-ink/60 text-lg leading-relaxed mb-8">
              Based in Milford, PA, we serve a wide coverage area across the
              tri-state region. Not sure if we cover your area? Just call — if
              we can get there, we will.
            </p>
            <a
              href="tel:+13473881312"
              className="inline-block bg-ink hover:bg-charcoal text-white font-bold px-7 py-3.5 rounded-full transition-colors"
            >
              Call to Confirm Your Area
            </a>
          </div>

          {/* Right: region list */}
          <div className="flex flex-col gap-6">
            {regions.map((region) => (
              <div
                key={region.name}
                className="bg-white rounded-2xl border border-mist p-6 shadow-sm"
              >
                <h3 className="font-semibold text-ink text-lg mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold inline-block" />
                  {region.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {region.towns.map((town) => (
                    <span
                      key={town}
                      className="text-sm text-ink/60 bg-mist px-3 py-1 rounded-full"
                    >
                      {town}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
