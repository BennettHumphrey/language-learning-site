"use client"

import React, { useEffect, useState } from 'react'
import CardModeDropdown from '@/components/cardsComponents/CardModeDropdown'
import CardSetDropdown from '@/components/cardsComponents/CardSetDropdown'
import { useRecoilState } from 'recoil'
import { getDataArray } from '../utils/getDataArray'
import { cardSetState, currentCardsState } from '../utils/Recoil'
import { getTenCards } from '../actions/getTenCards'

const layout = ({
    children
  }: {
    children: React.ReactNode
  }) => {

    const [currentCards, setCurrentCards] = useRecoilState(currentCardsState)
    const [cardSet, setCardSet] = useRecoilState(cardSetState);
  
    useEffect(() => {
      cardSet && getDataArray(setCurrentCards, getTenCards, [cardSet, true])
    }, [cardSet])

    useEffect(() => {
      console.log('currentCards in cards/layout.tsx', JSON.stringify(currentCards))
    }, [currentCards])


    // const currentDate = new Date()
    // const weekFromNow = new Date()
    // weekFromNow.setDate(weekFromNow.getDate() + 7)

    // console.log('currentDate in cards layout:', currentDate)
    // console.log('weekFromNow in cards layout:', weekFromNow)
    // console.log('currentDate.getTime() in cards layout:', currentDate.getTime())
    // console.log('weekFromNow.getTime() in cards layout:', weekFromNow.getTime())
    

  return (

    


    <div className='h-[calc(100vh-60px)] w-full bg-main flex flex-col gap-10 p-10 items-center justify-center'>
      <div  className='bg-accent w-[80vw] h-[80vh] max-w-[600px] max-h-[600px] text-center flex flex-col items-center justify-center gap-6 py-4'>
        <div className='w-full flex items-center justify-evenly px-1'>
          <CardModeDropdown />
          <CardSetDropdown />
        </div>
        <div className='w-full h-full'>
            {children}
        </div>
      </div>
    </div>
  )
}

export default layout