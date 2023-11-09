
import { Inter } from 'next/font/google'
import './../globals.css'

import SearchHeader from '@/components/SearchHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'google clone',
  description: 'google clone created by next js13',
  
}

export default function SearchLayout({ children }) {
  return (
    
      
      <div className={inter.className}>
        <SearchHeader />
        {children}
      
      
      </div>
    
  )
}
