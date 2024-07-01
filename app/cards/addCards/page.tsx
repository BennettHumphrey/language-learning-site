"use client"

import React, { useEffect, useState } from 'react'
import { CardsProps } from '@/app/types'
import SubmitButton from '@/app/utils/SubmitButton'
import { addCardSet } from '@/app/actions/addCardSet'
import { useSession } from 'next-auth/react'
import { useRecoilValue } from 'recoil'
import { cardSetState, currentUserIdState } from '@/app/utils/Recoil'
import { addCard } from '@/app/actions/addCard'
import { usePathname } from 'next/navigation'

// TODO:

  // Delete card sets from DB
    // New button on "Change set" 
      // Trash can icon, with modal pop-up to confirm
    // Prisma server action to delete


const AddCards: React.FC<CardsProps> = () => {
  
  
  const [addNewSet, setAddNewSet] = useState(false)

  const [cardSetTitle, setCardSetTitle] = useState('');

  const [cardSourceLanguageContent, setCardSourceLanguageContent] = useState('');
  const [cardTargetLanguageContent, setCardTargetLanguageContent] = useState('');


  const currentUser = useRecoilValue(currentUserIdState)
  const cardSet = useRecoilValue(cardSetState)

  const session = useSession()

  
  useEffect(() => {
    console.log('session.data in addCards/page.tsx:', session.data)
  }, [session])
  
  useEffect(() => {
    console.log('cardSetTitle in cards/addCards/page.tsx:', cardSetTitle)
  }, [cardSetTitle])
  
  


  return (
    <div className='h-full w-full flex flex-col items-center justify-evenly'>

      <button className='btn bg-menu text-text'
        onClick={() => setAddNewSet((prev) => !prev)}
      >{addNewSet ? "Add New Cards":"Add New Card Set"}</button>

      {
        
        addNewSet ? 
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            addCardSet(currentUser, cardSetTitle);
            setCardSetTitle('');
          }}
          className='flex flex-col items-center justify-evenly h-full'>
          <div className='flex flex-col gap-3 justify-center items-center'>
            <p className='text-base'>New Card Set Title</p>
            <input 
              required
              value={cardSetTitle}
              onChange={e => setCardSetTitle(e.target.value)}
              className='input input-bordered text-text bg-menu w-4/5'/>
          </div>
          <SubmitButton  >Submit</SubmitButton>
        </form>

          :

        <form className='w-4/5 h-full flex flex-col items-center justify-evenly' 
            onSubmit={
              (e) => {
                e.preventDefault();
                addCard(cardSourceLanguageContent, cardTargetLanguageContent, cardSet);
                setCardSourceLanguageContent('');
                setCardTargetLanguageContent('');
              }
            }
        >
          <p className='text-sm w-full'>Target Language Content</p>
          <textarea 
            className='textarea h-[25%] mt-1 mb-4 bg-menu text-text p-2 w-full sm:w-4/5' 
            required
            value={cardTargetLanguageContent}
            onChange={e => setCardTargetLanguageContent(e.target.value)}
          />
          <p className='text-sm w-full'>Source Language Content</p>
          <textarea 
            className='textarea h-[25%] mt-1 mb-4 bg-menu text-text p-2 w-full sm:w-4/5' 
            required
            value={cardSourceLanguageContent}
            onChange={e => setCardSourceLanguageContent(e.target.value)}
          />
          <SubmitButton  >Submit</SubmitButton>
        </form>
        
      }
    </div>
  )
}


export default AddCards