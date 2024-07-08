"use client"

import { currentCardNumberInArrayState, currentCardsState, nextCardsState } from '@/app/utils/Recoil'
import { useNextCard } from '@/app/utils/useNextCard'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'



// Do it all within the component (more repetitive, but much easier):
  // Make a handleCompletion button, which takes correct/incorrect status as param

// Array of 10 at a time
// Function to go to next card in array of 10
// When going to 10th, load next set
  // Next set and current set state
  // Switch next set to current after finishing 10th










const LearningModeCards: React.FC = () => {

  const [currentCards, setCurrentCards] = useRecoilState(currentCardsState)
  const [currentCardNumberInArray, setCurrentCardNumberInArray] = useRecoilState(currentCardNumberInArrayState)
  const [nextCards, setNextCards] = useRecoilState(nextCardsState)

  const [answerRevealed, setAnswerRevealed] = useState(false)

  const handleClick = () => {
  
    if (currentCardNumberInArray === 8) {
      
    }


    setAnswerRevealed(false)
  }





  return (
    <div className='h-full w-full flex flex-col items-center justify-evenly'>
      <p className='break-words w-4/5'>{currentCards.length > 0 ? currentCards[currentCardNumberInArray]?.targetLanguageContent : 'Loading Cards...'}</p>
      <button onClick={() => {
        setAnswerRevealed(true)
      }} className='btn bg-menu w-3/5 text-text'>Reveal Answer</button>
      <p>{answerRevealed && (currentCards.length > 0 ? currentCards[currentCardNumberInArray]?.sourceLanguageContent : 'Loading Cards...')}</p>
      <div className='flex justify-between w-4/5 sm:w-3/5'>
        <button className='btn bg-menu w-2/5 text-text'
          onClick={() => {
            setAnswerRevealed(false)
          }}
        >Correct</button>
        <button className='btn bg-menu w-2/5 text-text'
          onClick={() => {
            setAnswerRevealed(false)
          }}
        >Incorrect</button>
      </div>
    </div>
  )
}

export default LearningModeCards