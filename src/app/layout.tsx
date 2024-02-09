import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Footer} from '@/components/Footer/Footer'
import { SliderProvider } from '@/context/SliderContext'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Voltie',
  description: 'Voltie-Electric Car Chargers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <SliderProvider>
      <div className='absolute top-0 left-0 right-0 sticky z-30'>
         <Navbar />
      </div>
        {children}
        <Footer />
      </SliderProvider>
      </body>
    </html>
  )
}
