import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from './head'
import { GlobalProvider } from './globalProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hotel-Booking-App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head/>
      <body className={inter.className}>
        <GlobalProvider>
        {children}
        </GlobalProvider>
        </body>
    </html>
  )
}
