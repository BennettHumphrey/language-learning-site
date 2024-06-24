"use client"

import React, { useEffect, useRef, useState } from 'react'
import CardModeDropdown from '@/components/cardsComponents/CardModeDropdown'
import CardSetDropdown from '@/components/cardsComponents/CardSetDropdown'

const layout = ({
    children
  }: {
    children: React.ReactNode
  }) => {

    const [mode, setMode] = useState("Learning Mode")
    const [cardSet, setCardSet] = useState("Loading...")
  
    useEffect(() => {
      console.log('mode in cards/page.tsx:', mode)
    }, [mode])
    useEffect(() => {
      console.log('cardSet in cards/page.tsx:', cardSet)
    }, [cardSet])

    

  return (

    


    <div className='h-[calc(100vh-60px)] w-full bg-main flex flex-col gap-10 p-10 items-center justify-center'>
      <div  className='bg-accent w-[80vw] h-[80vh] max-w-[600px] max-h-[600px] text-center flex flex-col items-center justify-center gap-6 py-4'>
        <div className='w-full flex items-center justify-evenly px-1'>
          <CardModeDropdown setMode={setMode} />
          <CardSetDropdown setCardSet={setCardSet} />
        </div>
        <div className='w-full h-full'>
            {children}
        </div>
      </div>
    </div>
  )
}

export default layout