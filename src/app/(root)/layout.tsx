import React, { PropsWithChildren } from 'react'
import StreamVideoProvider from '../../../providers/StreamClientProvider'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Miting',
  description: 'Video calling app',
  icons: {
    icon: '/icons/logo.svg'
  }
}

const Rootlayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  )
}

export default Rootlayout
