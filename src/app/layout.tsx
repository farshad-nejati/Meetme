import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css'

import { Toaster } from '@/components/ui/toaster'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Miting',
  description: 'Video calling app',
  icons: {
    icon: '/icons/logo.svg'
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { isAuthenticated } = getKindeServerSession()

  if (!(await isAuthenticated())) {
    redirect('/api/auth/login')
  }

  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-2`}>
        {children}

        <Toaster />
      </body>
    </html>
  )
}
