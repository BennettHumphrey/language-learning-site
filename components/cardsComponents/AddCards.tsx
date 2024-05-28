import React from 'react'
import CardsDropdown from './CardsDropdown'

const AddCards: React.FC = () => {
  return (
    <div className='bg-accent w-full h-full text-center flex flex-col items-center justify-evenly'>
      <div className='py-2 w-full'>
        <CardsDropdown  />
      </div>
      <form className='w-4/5 h-full' action="">
        <p className='text-sm w-full'>Target Language Content</p>
        <textarea className='textarea h-[30%] mt-1 mb-4 bg-menu text-text p-2 w-full sm:w-4/5' />
        <p className='text-sm w-full'>Source Language Content</p>
        <textarea className='textarea h-[30%] mt-1 mb-4 bg-menu text-text p-2 w-full sm:w-4/5' />
        {/* Change out the input for a custom <SubmitButton/> component */}
        {/* https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations */}
        <input className='btn w-4/5 sm:w-3/5 bg-menu text-text' defaultValue='Submit'/>
      </form>
    </div>
  )
}

export default AddCards