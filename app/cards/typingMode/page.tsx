"use client"

import React, { useEffect, useState } from 'react'
import { CardsProps } from '@/app/types'
import { useRecoilState } from 'recoil'
import { cardSetState, currentCardNumberInArrayState, currentCardsState, nextCardsState } from '@/app/utils/Recoil'
import { getDataArray } from '@/app/utils/getDataArray'
import { getTenCards } from '@/app/actions/getTenCards'
import { completeCard } from '@/app/actions/completeCard'

// TODO: 
  // Typing match function



const TypingModeCards: React.FC<CardsProps> = ({  }) => {

  const [currentCards, setCurrentCards] = useRecoilState(currentCardsState)
  const [currentCardNumberInArray, setCurrentCardNumberInArray] = useRecoilState(currentCardNumberInArrayState)
  const [nextCards, setNextCards] = useRecoilState(nextCardsState)
  const [cardSet, setCardSet] = useRecoilState(cardSetState);

  const [textContent, setTextContent] = useState('')
  const [isCompleted, setIsCompleted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  // useEffect(() => {
  //   console.log('textContent in handleSubmit:', textContent)
  // }, [textContent])

  useEffect(() => {
    console.log('isCompleted in handleSubmit:', isCompleted)
  }, [isCompleted])

  const handleSubmit = (content:string) => {isCompleted


    // console.log('contant in handleSubmit:', content)
    if(content.toLowerCase() === currentCards[currentCardNumberInArray]?.sourceLanguageContent.toLowerCase()) {

      console.log('CORRECT')
      completeCard(currentCards[currentCardNumberInArray], true)
      setIsCorrect(true)
      setIsCompleted(true)

        return

    }

    console.log('INCORRECT')
    completeCard(currentCards[currentCardNumberInArray], false)
    setIsCompleted(true)
    setIsCorrect(false)

      return

  }

  const handleNextCard = () => {
    setTextContent('')
    setCurrentCardNumberInArray(prev => prev + 1)
    if(currentCardNumberInArray === 8) getDataArray(setNextCards, getTenCards, [cardSet]);
    if(currentCardNumberInArray === 9) setCurrentCards(nextCards)
    setIsCompleted(false)
      return

  }






  return (
    <div className='h-full w-full flex flex-col items-center justify-evenly'>
      <p className='break-words w-4/5'>{currentCards.length > 0 ? currentCards[currentCardNumberInArray]?.targetLanguageContent : 'Loading Cards...'}</p>
        <div className="w-4/5">
          <p className='text-sm w-full'>Type Answer</p>
          <textarea 
            className='textarea mt-1 mb-4 bg-menu text-text p-2 w-4/5' 
            onChange={(e) => setTextContent(e.target.value)} 
            value={textContent}/>
          {isCompleted ? 
          <div>
            <p>{isCorrect ? "Correct!" : `Incorrect! Answer: ${currentCards[currentCardNumberInArray]?.sourceLanguageContent}`}</p> 
            <button className='btn w-2/5 min-w-[120px] bg-menu text-text mt-2' onClick={() => handleNextCard()} >Next</button>
          </div> 
          :
           <button className='btn w-2/5 min-w-[120px] bg-menu text-text mt-2' onClick={() => handleSubmit(textContent)}>Submit</button>}
        </div>
    </div>
  )
}

export default TypingModeCards