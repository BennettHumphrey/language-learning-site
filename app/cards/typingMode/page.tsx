"use client"

import React, { useState } from 'react'
import { CardsProps } from '@/app/types'

// TODO: 
  // Typing match function



const TypingModeCards: React.FC<CardsProps> = ({  }) => {

  const [easy, setEasy] = useState(true)


  return (
    <div className='h-full w-full flex flex-col items-center justify-evenly'>
      <p className='break-words w-4/5'>Target Language Content {easy ? "Easy" : "Hard"}</p>
      <form className='w-4/5' action="">
        <p className='text-sm w-full'>Source Language Content</p>
        <textarea className='textarea mt-1 mb-4 bg-menu text-text p-2 w-full' />
        {/* Change out the input for a custom <SubmitButton/> component */}
        {/* https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations */}
        <input className='btn w-full bg-menu text-text' defaultValue='Submit'/>
      </form>
    </div>
  )
}

export default TypingModeCards