"use client"

import React, { useState } from 'react'
import { CardsProps } from '@/app/types'

// TODO: 
  // String manipulation for hard options
  // Choosing similar words for easy options
    // pg_trgm db extension to sort by similarity


const MultipleChoiceModeCards: React.FC<CardsProps> = ({  }) => {

 const [easy, setEasy] = useState(true)


  const multipleChoiceButtons = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
  ] 

  return (
    <div className='h-full w-full flex flex-col items-center justify-evenly'>
      <p className='text-text text-wrap w-4/5 break-words'>Target Language Content</p>
      {multipleChoiceButtons.map(button => (
        <button key={button} className='btn bg-menu w-3/5 text-text'>{button}</button>
      ))}
    </div>
  )
}

export default MultipleChoiceModeCards