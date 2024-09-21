"use client"

import React, { FC, useState } from 'react'
import Link from 'next/link'
import { dropBtnStyles } from './navStyles'
import { signIn, signOut } from 'next-auth/react'
import { Session } from 'next-auth'
import { cardsNavOptions, homeNavOptions } from './navOptions'
import { usePathname } from 'next/navigation'

type MobileNavProps = {
  session: Session | null;
};

const MobileNav: FC<MobileNavProps> = ({ session }) => {

    const [dropdownActive, setDropdownActive] = useState(false)
  
    const pathName = usePathname()



  return (
    <div className='flex fixed w-full h-[60px] px-4 justify-center items-center bg-menu z-50'>
      <div className='w-16 p-2'>
        {session ?  <Link href='/' className=''>
                      <img src={session.user?.image ?? ''}
                                    className="rounded-full m-auto"
                                />
                    </Link> : <button className='w-28 text-lg m-auto' onClick={() => signIn()} >Sign In</button>}
      </div>
      {session && <div className='select-none' onClick={() => setDropdownActive(!dropdownActive)} style={{...dropBtnStyles.btn}} >
          <div style={dropdownActive ? {...dropBtnStyles.barOne, ...dropBtnStyles.bars, ...dropBtnStyles.barOneX} : {...dropBtnStyles.barOne, ...dropBtnStyles.bars} as any} />
          <div style={dropdownActive ? {...dropBtnStyles.barTwo, ...dropBtnStyles.bars, ...dropBtnStyles.barTwoX} : {...dropBtnStyles.barTwo, ...dropBtnStyles.bars} as any} />
          <div style={dropdownActive ? {...dropBtnStyles.barThree, ...dropBtnStyles.bars, ...dropBtnStyles.barThreeX} : {...dropBtnStyles.barThree, ...dropBtnStyles.bars} as any}/>
          <div style={dropdownActive ? {...dropBtnStyles.dropContent, ...dropBtnStyles.dropContentShow} : {...dropBtnStyles.dropContent} as any} >
          {pathName.includes('cards') ? cardsNavOptions.map((o: any, i: any) => (
                      <Link key={i} style={dropBtnStyles.dropItem} href={o.href}>{o.title}</Link>
              )) : 
              homeNavOptions.map((o: any, i: any) => (
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