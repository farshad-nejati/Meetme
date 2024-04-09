import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk'
import { useEffect, useState } from 'react'

export const useCallById = (id: string | string[]) => {
  const [call, setCall] = useState<Call>()
  const [iscallLoading, setIsCallLoading] = useState(true)

  const client = useStreamVideoClient()

  useEffect(() => {
    if (!client) return

    const loadCall = async () => {
      const { calls } = await client.queryCalls({
        filter_conditions: {
          id,
        },
      })

      if (calls.length > 0) setCall(calls[0])

      setIsCallLoading(false)
    }

    loadCall()
  }, [client, id])

  return { call, iscallLoading }
}
