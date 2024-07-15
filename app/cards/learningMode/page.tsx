"use client"

import { completeCard } from '@/app/actions/completeCard'
import { deleteCards } from '@/app/actions/deleteCards'
import { getTenCards } from '@/app/actions/getTenCards'
import { getDataArray } from '@/app/utils/getDataArray'
import { Trash } from '@/app/utils/icons/Trash'
import { cardSetState, currentCardNumberInArrayState, currentCardsState, nextCardsState } from '@/app/utils/Recoil'
import { useNextCard } from '@/app/utils/useNextCard'
import React, { useEffect, useState } from 'react'
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
  const [cardSet, setCardSet] = useRecoilState(cardSetState);

  useEffect(() => {
    console.log('nextCards:', nextCards)
  }, [nextCards])
 

  const [answerRevealed, setAnswerRevealed] = useState(false)

  const handleClick = (correct:boolean) => {
  
    setAnswerRevealed(false)
    completeCard(currentCards[currentCardNumberInArray], correct)
    setCurrentCardNumberInArray(prev => prev + 1)
    if(currentCardNumberInArray === 8) getDataArray(setNextCards, getTenCards, [cardSet]);
    if(currentCardNumberInArray === 9) setCurrentCards(nextCards)

  }





  return (
    <div className='h-full w-full flex flex-col items-center justify-evenly'>
      <p className='break-words w-4/5'>{currentCards.length > 0 ? currentCards[currentCardNumberInArray]?.targetLanguageContent : 'Loading Cards...'}</p>
      <div className='flex items-center justify-center gap-2 w-[70%]'>
        <button onClick={() => {
          setAnswerRevealed(true)
        }} className='btn bg-menu text-text'>Reveal Answer</button>
        <div className='w-2'>
          <Trash onClick={() => {
            deleteCards(currentCards[currentCardNumberInArray].id)
            setCurrentCardNumberInArray(prev => prev + 1)
          }} />
        </div>
      </div>
      <p>{answerRevealed && (currentCards.length > 0 ? currentCards[currentCardNumberInArray]?.sourceLanguageContent : 'Loading Cards...')}</p>
      {answerRevealed && <div className='flex justify-between w-4/5 sm:w-3/5'>
        <button className='btn bg-menu w-2/5 text-text'
          onClick={() => {
            handleClick(true)
          }}
        >Correct</button>
        <button className='btn bg-menu w-2/5 text-text'
          onClick={() => {
            handleClick(false)
          }}
        >Incorrect</button>
      </div>}
    </div>
  )
}

export default LearningModeCards