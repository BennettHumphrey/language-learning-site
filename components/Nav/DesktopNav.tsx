"use client"

import Link from 'next/link'
import React, { FC } from 'react'
import { homeNavOptions } from './navOptions'
import { signIn, signOut } from 'next-auth/react'
import { Session } from 'next-auth'

type DesktopNavProps = {
    session: Session | null;
  };

const DesktopNav: FC<DesktopNavProps> = ({ session }) => {

homeNavOptions
  return (
    <div className='h-[60px] bg-menu px-8'>
        <ul className='flex justify-between items-center h-full'>
            {session ?  <Link href='/' className='w-[40px]'>
                            <img src={session.user?.image ?? ''}
                                        className="rounded-full m-auto"
                                    />
                        </Link> : <button className='w-28 text-lg m-auto' onClick={() => signIn()} >Sign In</button>}
            {session && homeNavOptions.map(o => (
                <Link key={o.href} href={o.href} >
                    <li  >
                        {o.title}
                    </li>
                </Link>
        ))}
            {session ? <button className='text-base' onClick={() => signOut()} >Sign Out</button> : <div className='w-16' />}
        </ul>
    </div>
  )
}

export default DesktopNav