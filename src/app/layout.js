import { Geist, Geist_Mono } from 'next/font/google'
import Menu from './components/Menu'
import { ThemeProvider } from './store/ThemeProvider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'CHUN-YUN XIAO',
  description: "XIAO's Resume",
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <Menu />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
