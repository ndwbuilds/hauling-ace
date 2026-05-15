import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hauling-ace.vercel.app'),
  title: 'Hauling Ace | Moving & Hauling Services – Eastern PA, NJ & NY',
  description:
    'Professional moving, clean-outs, delivery, and home prep in Eastern Pennsylvania, Western New Jersey, and Southern New York. Call for a free quote.',
  openGraph: {
    title: 'Hauling Ace',
    description: 'Your best bet for moving and hauling in the tri-state area.',
    images: ['/images/truck.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-cream text-ink">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
