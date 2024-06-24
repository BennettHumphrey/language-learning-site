import React, { useState } from 'react'
import CardsDropdown from './CardModeDropdown'
import { CardsProps } from '@/app/types'
import SubmitButton from '@/app/utils/SubmitButton'

// TODO:
  // Dropdown to create new card set
  // Server action that adds new cards
    // Gets the current card group (props?) and adds to that





const AddCards: React.FC<CardsProps> = ({  }) => {

  const [addNewSet, setAddNewSet] = useState(false)



  return (
    <div className='h-full w-full flex flex-col items-center justify-evenly'>
      <button className='btn bg-menu text-text'
        onClick={() => setAddNewSet((prev) => !prev)}
      >{"Add New Card Set"}</button>
      {addNewSet ? <form className='flex flex-col items-center justify-evenly h-full'>
        <div className='flex flex-col gap-3 justify-center items-center'>
          <p className='text-base'>New Card Set Title</p>
          <input className='input input-bordered text-text bg-menu w-4/5'></input>
        </div>
        <SubmitButton  >Submit</SubmitButton>
      </form>
        :
      <form className='w-4/5 h-full flex flex-col items-center justify-evenly' action="">
        <p className='text-sm w-full'>Target Language Content</p>
        <textarea className='textarea h-[25%] mt-1 mb-4 bg-menu text-text p-2 w-full sm:w-4/5' />
        <p className='text-sm w-full'>Source Language Content</p>
        <textarea className='textarea h-[25%] mt-1 mb-4 bg-menu text-text p-2 w-full sm:w-4/5' />
        <SubmitButton  >Submit</SubmitButton>
      </form>}
    </div>
  )
}

export default AddCards