import React from 'react'
import CardsDropdown from './CardsDropdown'

const MultipleChoiceModeCards: React.FC = () => {

  const multipleChoiceButtons = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
  ] 

  return (
    <div className='bg-accent w-full h-full text-center flex flex-col items-center justify-evenly'>
      <CardsDropdown  />
      <p className='text-text text-wrap w-4/5 break-words'>Target Language Content</p>
      {multipleChoiceButtons.map(button => (
        <button className='btn bg-menu w-3/5 text-text'>{button}</button>
      ))}
    </div>
  )
}

export default MultipleChoiceModeCards