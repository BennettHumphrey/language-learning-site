'use client'
import React from 'react'
require('dotenv').config()

const Home = () => {
    console.log('GITHUB_ID:', process.env.GITHUB_ID)
  return (
    <div className='flex flex-col gap-10'>Homeeeee
        <button onClick={() => console.log('click')}>
            CLICK
        </button>
    </div>
  )
}

export default Home