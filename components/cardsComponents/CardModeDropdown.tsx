"use client"

import { getTenCards } from '@/app/actions/getTenCards';
import { getDataArray } from '@/app/utils/getDataArray';
import { cardSetState, currentCardsState } from '@/app/utils/Recoil';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import React, { useEffect, useRef, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';





const CardModeDropdown: React.FC = () => {

  // const [client, setClient] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const [currentCards, setCurrentCards] = useRecoilState(currentCardsState)

  const dropdownRef = useRef<HTMLDetailsElement>(null)

  const currentPath = usePathname()

  const cardSet = useRecoilValue(cardSetState)

  useEffect(() => {
    console.log('currentPath in CardModeDropdown.tsx:', currentPath)
  }, [currentPath])

  const handleClick = (mode:string) => {
    if(currentPath === '/cards/addCards' && mode !== 'Add New Cards') {
      getDataArray(setCurrentCards, getTenCards, [cardSet])
    }
  } 

  // useEffect(() => {
  //   console.log('dropdown open:', dropdownOpen)
  // }, [dropdownOpen])

  const handleDropdownClick = () => {
    
    
    if(dropdownOpen) {
      if (dropdownRef.current) {
        dropdownRef.current.removeAttribute('open');
      }
      return setDropdownOpen(false)
    }
    setDropdownOpen(true)
  }


  const modes = [
    {
      title: "Add New Cards",
      href: "/cards/addCards"
    },
    {
      title: "Learning Mode",
      href: "/cards/learningMode"
    },
    {
      title: "Multiple Choice Mode",
      href: "/cards/multipleChoiceMode"
    },
    {
      title: "Typing Mode",
      href: "/cards/typingMode"
    },
  ]

  // const modes = [
  //   "Add New Cards",
  //   "Learning Mode",
  //   "Multiple Choice Mode",
  //   "Typing Mode"
  // ]

  return (
    
    <div className='w-full max-w-[120px]'>
        {dropdownOpen && <div className='absolute z-[1] bg-transparent left-0 top-0 h-full w-full' 
        onClick={() => handleDropdownClick()} />}
        <details className="dropdown w-full" ref={dropdownRef} onClick={() => handleDropdownClick()}>
          <summary className="btn bg-menu text-text w-full p-0">Change Mode</summary>
          <ul className="p-2 shadow menu dropdown-content z-[2] bg-base-100 rounded-box w-52">
            {modes.map(mode => (
              // <li key={mode} onClick={() => handleClick(mode)} >{mode}</li>
              <Link onClick={() => handleClick(mode.title)} key={mode.href} href={mode.href} >{mode.title}</Link>
            ))}
          </ul>
        </details>
    </div>
  )
}

export default CardModeDropdown