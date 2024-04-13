import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import {
  LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/components'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

const Navbar = async () => {
  const { getUser } = await getKindeServerSession()
  const user = await getUser()

  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="Meet me logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Meet me
        </p>
      </Link>

      <div className="flex-between gap-4">
        {user != null && (
          <>
            {user.picture != null && (
              <Image
                width={36}
                src={user.picture}
                height={36}
                alt="logout icon"
                className='rounded-full'
              />
            )}
            {/* <p>{user.given_name}</p> */}
            <LogoutLink className="text-white">Logout</LogoutLink>
          </>
        )}

        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar
