'use client'

import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '../../constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const MobileNav = () => {
  const pathName = usePathname()

  return (
    <section className="w-full max-w-[264px] sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            width={36}
            height={36}
            alt="hamburger icon"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <SheetClose asChild>
            <Link href="/" className="flex items-center gap-1">
              <Image
                src="/icons/logo.svg"
                width={32}
                height={32}
                alt="miting logo"
                className="max-sm:size-10"
              />
              <p className="text-[26px] font-extrabold text-white">Miting</p>
            </Link>
          </SheetClose>

          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <section className="flex h-full flex-col gap-6 pt-16 text-white">
              {sidebarLinks.map((link) => {
                const isActive =
                  pathName === link.route ||
                  pathName.startsWith(`${link.route}/`)

                return (
                  <SheetClose asChild key={link.route}>
                    <Link
                      href={link.route}
                      key={link.label}
                      className={cn(
                        'flex gap-4 items-center p-4 rounded-lg w-full max-w-60',
                        {
                          'bg-blue-1': isActive,
                        }
                      )}
                    >
                      <Image
                        src={link.imgUrl}
                        alt={link.label}
                        width={20}
                        height={20}
                      />
                      <p className="font-semibold">{link.label}</p>
                    </Link>
                  </SheetClose>
                )
              })}
            </section>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav
