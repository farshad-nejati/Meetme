import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
