'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

const services = [
  'Moving / Carrier',
  'Clean Out',
  'Delivery',
  'Home Prep',
  'Odd Jobs',
  'Not Sure',
]

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    moveFrom: '',
    moveTo: '',
    date: '',
    details: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission — wire up to a real API or service (Formspree, etc.)
    await new Promise((res) => setTimeout(res, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <CheckCircle size={48} className="text-gold" />
        <h3 className="text-2xl font-display font-bold text-white">
          We Got Your Message!
        </h3>
        <p className="text-white/60 max-w-sm">
          We'll be in touch shortly. Or if you need something sooner, give us a
          call.
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
            Your Name *
          </label>
          <input
            name="name"
            type="text"
            required
            placeholder="John Smith"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
            Phone *
          </label>
          <input
            name="phone"
            type="tel"
            required
            placeholder="(570) 000-0000"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="you@email.com"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
            Service Needed *
          </label>
          <select
            name="service"
            required
            value={form.service}
            onChange={handleChange}
            className={`${inputClass} cursor-pointer`}
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s} value={s} className="bg-charcoal text-white">
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
            Moving From
          </label>
          <input
            name="moveFrom"
            type="text"
            placeholder="City, State or Zip"
            value={form.moveFrom}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
            Moving To
          </label>
          <input
            name="moveTo"
            type="text"
            placeholder="City, State or Zip"
            value={form.moveTo}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* Date */}
      <div>
        <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
          Preferred Date
        </label>
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Details */}
      <div>
        <label className="block text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
          Job Details
        </label>
        <textarea
          name="details"
          rows={4}
          placeholder="Tell us about the job — size of move, special items, access info, anything that helps us give you an accurate quote."
          value={form.details}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-ink font-bold py-4 rounded-full transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          'Sending...'
        ) : (
          <>
            <Send size={18} />
            Send My Quote Request
          </>
        )}
      </button>
    </form>
  )
}
