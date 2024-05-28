"use client"

import React, { FC, useState } from 'react'
import Link from 'next/link'
import { navOptions } from './navOptions'
import { dropBtnStyles } from './navStyles'
import { signIn, signOut } from 'next-auth/react'
import { Session } from 'next-auth'

type MobileNavProps = {
  session: Session | null;
};

const MobileNav: FC<MobileNavProps> = ({ session }) => {

    const [dropdownActive, setDropdownActive] = useState(false)

  return (
    <div className='flex h-[60px] px-4 justify-center items-center bg-menu'>
      <div className='w-16 p-2'>
        {session ?  <Link href='/' className=''>
                      <img src={session.user?.image ?? ''}
                                    className="rounded-full m-auto"
                                />
                    </Link> : <button className='w-28 text-lg m-auto' onClick={() => signIn()} >Sign In</button>}
      </div>
      {session && <div onClick={() => setDropdownActive(!dropdownActive)} style={{...dropBtnStyles.btn}} >
          <div style={dropdownActive ? {...dropBtnStyles.barOne, ...dropBtnStyles.bars, ...dropBtnStyles.barOneX} : {...dropBtnStyles.barOne, ...dropBtnStyles.bars} as any} />
          <div style={dropdownActive ? {...dropBtnStyles.barTwo, ...dropBtnStyles.bars, ...dropBtnStyles.barTwoX} : {...dropBtnStyles.barTwo, ...dropBtnStyles.bars} as any} />
          <div style={dropdownActive ? {...dropBtnStyles.barThree, ...dropBtnStyles.bars, ...dropBtnStyles.barThreeX} : {...dropBtnStyles.barThree, ...dropBtnStyles.bars} as any}/>
          <div style={dropdownActive ? {...dropBtnStyles.dropContent, ...dropBtnStyles.dropContentShow} : {...dropBtnStyles.dropContent} as any} >
          {navOptions.map((o: any, i: any) => (
                      <Link key={i} style={dropBtnStyles.dropItem} href={o.href}>{o.title}</Link>
              ))}
          </div>
      </div>}
      <div className='w-16'>
        {session ? <button className='text-base' onClick={() => signOut()} >Sign Out</button> : <div className='w-16' />}
      </div>
    </div>
  )
}

export default MobileNav