import React, { PropsWithChildren } from 'react'
import StreamVideoProvider from '../../../providers/StreamClientProvider'

const Rootlayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  )
}

export default Rootlayout
