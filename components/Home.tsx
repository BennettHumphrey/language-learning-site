import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10 p-12 bg-main h-[calc(100vh-60px)]'>
      <Link href={'/cards'}>
        <div className='bg-accent text-center p-6 max-w-[250px]'>
          <h2>
            Cards
          </h2>
          <p>
            Short description of "Cards" section
          </p>
        </div>
      </Link>
      <Link href={'/notes'}>
        <div className='bg-accent text-center p-6 max-w-[250px]'>
          <h2>
            Notes
          </h2>
          <p>
            Short description of "Notes" section
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Home