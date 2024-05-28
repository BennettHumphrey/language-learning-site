

import AddCards from '@/components/cardsComponents/AddCards'
import CardsDropdown from '@/components/cardsComponents/CardsDropdown'
import LearningModeCards from '@/components/cardsComponents/LearningModeCards'
import MultipleChoiceModeCards from '@/components/cardsComponents/MultipleChoiceModeCards'
import TypingModeCards from '@/components/cardsComponents/TypingModeCards'
import React from 'react'

const CardsPage = () => {
  return (
    <div className='h-[calc(100vh-60px)] w-full bg-main flex flex-col gap-10 p-10 items-center justify-center'>
      <div className='w-[80vw] h-[80vh] max-w-[600px]'>
        <AddCards  />
        {/* <LearningModeCards  /> */}
        {/* <MultipleChoiceModeCards  /> */}
        {/* <TypingModeCards  /> */}
      </div>
    </div>
  )
}

export default CardsPage