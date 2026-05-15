'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Menu, X } from 'lucide-react'

const PHONE = '(347) 388-1312'
const PHONE_HREF = 'tel:+13473881312'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Hauling Ace"
              width={180}
              height={34}
              className="h-9 w-auto invert brightness-0 filter"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white/80 hover:text-gold text-sm font-medium tracking-wide uppercase transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Phone + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-gold font-semibold hover:text-gold-light transition-colors"
            >
              <Phone size={16} />
              {PHONE}
            </a>
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-light text-ink font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ink/98 border-t border-white/10">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white/80 hover:text-gold text-lg font-medium transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-gold font-semibold text-lg mt-2"
            >
              <Phone size={18} />
              {PHONE}
            </a>
            <Link
              href="/contact"
              className="bg-gold text-ink font-bold text-center py-3 rounded-full mt-1"
              onClick={() => setOpen(false)}
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
