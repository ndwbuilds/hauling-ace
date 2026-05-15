const steps = [
  {
    number: '01',
    title: 'Call or Request a Quote',
    description:
      'Give us a call or fill out our quick form. Tell us what you need moved, hauled, or cleared out.',
  },
  {
    number: '02',
    title: 'We Show Up Ready',
    description:
      'On your scheduled date, our crew arrives on time, fully equipped, and ready to work.',
  },
  {
    number: '03',
    title: 'Job Done. Stress Gone.',
    description:
      'We handle everything start to finish. You just point and relax — we take care of the rest.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            How It Works
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink mb-4">
            Simple. Fast. Done.
          </h2>
          <p className="text-ink/60 text-lg max-w-xl mx-auto">
            We keep it easy so you can focus on what matters.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px bg-mist" />

          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="relative mb-6">
                <span className="font-display text-7xl font-bold text-mist leading-none select-none">
                  {step.number}
                </span>
                <div className="absolute -bottom-1 left-0 w-10 h-1 bg-gold rounded-full" />
              </div>
              <h3 className="text-ink font-semibold text-xl mb-3">{step.title}</h3>
              <p className="text-ink/60 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
