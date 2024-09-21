import React from 'react'
import DeckList from './DeckList'

const Home = () => {
  return (
    <div className='bg-bg text-black h-full min-h-[100vh]'>
      <h1 className='font-bold tracking-wide text-4xl pl-[5vw] pt-3'>My Decks</h1>
      <DeckList  />
    </div>
  )
}



export default Home