import Navbar from '@/Components/navbar/Navbar'
import './globals.css'
import { Inter,Roboto } from 'next/font/google'
import Footer from '@/Components/footer/Footer'
import { ThemeProvider } from '@/Context/ThemeContext'
import AuthProvider from '@/Components/AuthProvider/AuthProvider' 
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Haroune App',
  description: 'This is desc',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
        <AuthProvider>
        <div className='container'>
      <Navbar/>
        {children}
        <Footer/>
        </div>
        </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
