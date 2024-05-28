"use client"

import React, { useState } from 'react'



const ProtectedTest = () => {

    const [data, setData] = useState({
        title: ""
    })

    const fetchDummyData = async () => {
        const response = await fetch('https://dummyjson.com/products/1')
        const data = await response.json()
        setData(data)
    }





  return (
    <div className='flex flex-col gap-5'>
      <p>ProtectedRoute</p>
      <button onClick={() => fetchDummyData()} >Fetch Data</button>
      <p>{data?.title}</p>
    </div>
  )
}

export default ProtectedTest