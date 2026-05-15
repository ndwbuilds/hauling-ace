import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const PHONE = '(347) 388-1312'
const PHONE_HREF = 'tel:+13473881312'
const EMAIL = 'haulingacecompany@gmail.com'

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Hauling Ace"
                width={200}
                height={38}
                className="h-9 w-auto invert brightness-0 filter mb-4"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              Your stress-free solution for moving, hauling, and clean-outs
              across Eastern PA, Western NJ, and Southern NY. Locally owned and
              operated out of Milford, PA.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/40 hover:text-gold transition-colors"
              >
                {/* Instagram icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/40 hover:text-gold transition-colors"
              >
                {/* Facebook icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.yelp.com/biz/hauling-ace-milford"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yelp"
                className="text-white/40 hover:text-gold transition-colors text-sm font-bold"
              >
                Yelp
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Navigation
            </p>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/50 hover:text-gold text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 text-white/50 hover:text-gold text-sm transition-colors"
                >
                  <Phone size={14} />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-white/50 hover:text-gold text-sm transition-colors"
                >
                  <Mail size={14} />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/50 text-sm">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                Milford, PA 18337
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs">
          <p>© {new Date().getFullYear()} Hauling Ace. All rights reserved.</p>
          <p>Milford, PA — Serving Eastern PA, Western NJ &amp; Southern NY</p>
        </div>
      </div>
    </footer>
  )
}
