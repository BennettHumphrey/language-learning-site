"use client"



import React, { useEffect, useState } from 'react'
import DesktopNav from './DesktopNav'
import { useWindowSize } from 'react-use'
import MobileNav from './MobileNav/MobileNav'
import { useSession } from 'next-auth/react'







const NavMenu = () => {

    const { width } = useWindowSize();

    const [isClient, setIsClient] = useState(false);

    const { data: session } = useSession();

    useEffect(() => {
      setIsClient(true);
    }, []);
  
    if (!isClient) {
      return null;
    }

    

    return (
        <div className='flex flex-col'>
            {width < 768 ? <MobileNav session={session} /> : <DesktopNav session={session}  />}
        </div>
    )
}


export default NavMenu

