import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals-vanilla.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ModernTech Solutions - Innovative Technology Solutions',
  description: 'Transform your business with cutting-edge technology solutions. We provide web development, mobile apps, cloud services, and digital transformation.',
  keywords: 'web development, mobile apps, cloud services, digital transformation, technology solutions',
  authors: [{ name: 'ModernTech Solutions' }],
  openGraph: {
    title: 'ModernTech Solutions - Innovative Technology Solutions',
    description: 'Transform your business with cutting-edge technology solutions.',
    url: 'https://your-domain.vercel.app',
    siteName: 'ModernTech Solutions',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ModernTech Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ModernTech Solutions - Innovative Technology Solutions',
    description: 'Transform your business with cutting-edge technology solutions.',
    images: ['/og-image.png'],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}