import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'google clone',
  description: 'google clone created by next js13',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>{children}
      
      {/* footer */}
      <Footer/>
      </body>
    </html>
  )
}
