const reviews = [
  {
    name: 'Sarah M.',
    location: 'Milford, PA',
    rating: 5,
    text: 'Hauling Ace made my move completely painless. They showed up on time, worked fast, and were careful with everything. I wouldn\'t use anyone else.',
  },
  {
    name: 'James R.',
    location: 'Port Jervis, NY',
    rating: 5,
    text: 'Needed a full garage clean-out on short notice. They came the next day and handled everything. Priced fairly and no drama. Exactly what you want.',
  },
  {
    name: 'Lisa T.',
    location: 'Newton, NJ',
    rating: 5,
    text: 'Granger and his team are the real deal. Professional, friendly, and got the job done faster than expected. Highly recommend.',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold fill-gold" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-ink py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Reviews
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Don't Take Our Word for It.
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Our customers across Eastern PA, Western NJ, and Southern NY keep
            calling us back — and sending their neighbors our way.
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col"
            >
              <Stars count={r.rating} />
              <blockquote className="mt-4 text-white/75 leading-relaxed flex-1">
                "{r.text}"
              </blockquote>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white font-semibold">{r.name}</p>
                <p className="text-white/40 text-sm">{r.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Yelp nudge */}
        <p className="text-center text-white/40 text-sm mt-10">
          See more reviews on{' '}
          <a
            href="https://www.yelp.com/biz/hauling-ace-milford"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            Yelp
          </a>
        </p>
      </div>
    </section>
  )
}
