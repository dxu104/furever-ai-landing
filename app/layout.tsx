import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://furever-ai.com'),
  title: 'FurEver AI - Where Friendships Begin',
  description: 'The world\'s first AI-driven social wearable for pets. Help your furry friends build deeper connections through technology.',
  keywords: 'pet technology, AI, wearable, pet friendship, smart collar, pet social',
  authors: [{ name: 'FurEver AI Team' }],
  openGraph: {
    title: 'FurEver AI - Where Friendships Begin',
    description: 'The world\'s first AI-driven social wearable for pets.',
    type: 'website',
    locale: 'en_US',
    siteName: 'FurEver AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FurEver AI - Where Friendships Begin',
    description: 'The world\'s first AI-driven social wearable for pets.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

