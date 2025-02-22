import './globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import type { Metadata, Route } from 'next'
import Header from './components/header'
import Menu from './components/menu'

export const metadata: Metadata = {
  title: 'Apply Innopolis',
  description: '',
  metadataBase: new URL('https://cybertoad.ru'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US'
    }
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    )
  
}
