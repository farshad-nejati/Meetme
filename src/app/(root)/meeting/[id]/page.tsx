'use client'

import React, { useState } from 'react'
import useUser from '../../../../../hooks/useUser'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk'
import MeetingSetup from '@/components/MeetingSetup'
import MeetingRoom from '@/components/MeetingRoom'
import { useCallById } from '../../../../../hooks/useCallById'
import Loader from '@/components/Loader'

const Meeting = ({ params: { id } }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser()
  const [isSetupComplete, setIsSetupComplete] = useState(false)
  const { call, iscallLoading } = useCallById(id)
  
  if(!isLoaded || iscallLoading) {
    return <Loader />
  }
  return (
    <main className="h-full w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? <MeetingSetup setIsSetupComplete={setIsSetupComplete} /> : <MeetingRoom />}
        </StreamTheme>
      </StreamCall>
    </main>
  )
}

export default Meeting
