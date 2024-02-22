import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { Header } from '../components/Header';
import './globals.css';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ui/ScrollToTop';

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My website',
  description: 'Glenn Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header/>
        <main>
          {children}
        </main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  )
}
