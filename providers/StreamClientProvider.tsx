"use client"

import { ReactNode, useEffect, useState } from 'react'
import { tokenProvider } from '../actions/stream.actions'
import { StreamVideo, StreamVideoClient } from '@stream-io/video-react-sdk'
import Loader from '@/components/Loader'
import { getKindeUser } from '../actions/user.kinde'
const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY as string

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>()

  async function getInfo() {
    const user = await getKindeUser()

    if (!user) throw new Error('no user')

    try {
      const client = new StreamVideoClient({
        apiKey,
        user: {
          id: user.id,
          name: user?.given_name ?? '',
          image: user?.picture ?? undefined,
        },
        tokenProvider,
      })

      setVideoClient(client)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    if (!apiKey) throw new Error('Stream API key missing')
    getInfo()
  }, [])

  if (!videoClient) {
    return <Loader />
  }

  return <StreamVideo client={videoClient}>{children}</StreamVideo>
}

export default StreamVideoProvider
