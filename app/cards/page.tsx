"use client"

import AddCards from '@/components/cardsComponents/AddCards'
import CardModeDropdown from '@/components/cardsComponents/CardModeDropdown'
import CardSetDropdown from '@/components/cardsComponents/CardSetDropdown'
import LearningModeCards from '@/components/cardsComponents/LearningModeCards'
import MultipleChoiceModeCards from '@/components/cardsComponents/MultipleChoiceModeCards'
import TypingModeCards from '@/components/cardsComponents/TypingModeCards'
import React, { useEffect, useRef, useState } from 'react'

const CardsPage = () => {

  const [mode, setMode] = useState("Learning Mode")
  const [cardSet, setCardSet] = useState("Loading...D")

  useEffect(() => {
    console.log('mode in cards/page.tsx:', mode)
  }, [mode])
  useEffect(() => {
    console.log('cardSet in cards/page.tsx:', cardSet)
  }, [cardSet])

// TODO: 

  // Get cards function (10 at a time?)
    // Based on time since last completed, and successful completions in a row
      // Create cols in cards table for time last completed (timestamp) and consecutive completions (int)



  

  return (
    <></>
    // <div className='h-[calc(100vh-60px)] w-full bg-main flex flex-col gap-10 p-10 items-center justify-center'>
    //   <div  className='bg-accent w-[80vw] h-[80vh] max-w-[600px] max-h-[600px] text-center flex flex-col items-center justify-center gap-6 py-4'>
    //     <div className='w-full flex items-center justify-evenly px-1'>
    //       <CardModeDropdown setMode={setMode} />
    //       <CardSetDropdown setCardSet={setCardSet} />
    //     </div>
    //     <div className=' h-full'>
    //       {mode === "Add New Cards" ? <AddCards cardSet={cardSet} /> :
    //         mode === "Learning Mode" ? <LearningModeCards cardSet={cardSet} /> :
    //         mode === "Multiple Choice Mode" ? <MultipleChoiceModeCards cardSet={cardSet} /> :
    //         mode === "Typing Mode" ? <TypingModeCards cardSet={cardSet} /> :
    //       //  Default:
    //         <LearningModeCards cardSet={cardSet} />}
    //     </div>
    //   </div>
    // </div>
  )
}

export default CardsPage