import Header from '@/components/Header'
import './globals.css'
import Providers from './Providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
        <Header/>
        {children}
        </Providers>
        </body>
    </html>
  )
}
