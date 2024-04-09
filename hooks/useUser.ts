import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types'
import React, { useEffect, useState } from 'react'
import { getKindeUser } from '../actions/user.kinde'

const useUser = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [user, setUser] = useState<KindeUser | null>()

  useEffect(() => {
    const getUser = async () => {
      const user = await getKindeUser()

      setUser(() => user)
      setIsLoaded(true)
    }

    getUser()
  }, [])

  return { user, isLoaded }
}

export default useUser
