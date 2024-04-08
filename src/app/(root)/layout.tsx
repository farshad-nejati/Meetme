import React, { PropsWithChildren } from 'react'

const Rootlayout = ({children}: PropsWithChildren) => {
  return (
    <main>
        {children}
    </main>
  )
}

export default Rootlayout