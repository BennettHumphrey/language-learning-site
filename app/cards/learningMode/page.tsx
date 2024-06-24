"use client"

import React from 'react'
import { CardsProps } from '@/app/types'

const LearningModeCards: React.FC<CardsProps> = ({  }) => {

  return (
    <div className='h-full w-full flex flex-col items-center justify-evenly'>
      <p className='break-words w-4/5'>Target Language Content</p>
      <button className='btn bg-menu w-3/5 text-text'>Reveal Answer</button>
      <p>Source Language Content</p>
      <div className='flex justify-between w-4/5 sm:w-3/5'>
        <button className='btn bg-menu w-2/5 text-text'>Correct</button>
        <button className='btn bg-menu w-2/5 text-text'>Incorrect</button>
      </div>
    </div>
  )
}

export default LearningModeCards