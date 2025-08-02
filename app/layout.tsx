import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nikhil Salwe - Architect Resume',
  description: 'Professional resume and portfolio of Nikhil Salwe, an experienced architect with expertise in modern design and sustainable architecture.',
  keywords: 'architect, resume, portfolio, Nikhil Salwe, architecture, design',
  authors: [{ name: 'Nikhil Salwe' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  )
} 