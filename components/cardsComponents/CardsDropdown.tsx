"use client"

import React, { useEffect, useState } from 'react'

const CardsDropdown: React.FC = () => {

  const [client, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  return (
    <div className='w-full'>
      <details className="dropdown w-full">
        <summary className="m-1 btn bg-menu text-text w-3/5">Change Mode</summary>
        <ul className="p-2 shadow menu dropdown-content left-1/2 -translate-x-1/2 z-[1] bg-base-100 rounded-box w-52">
          <li><a>Mode 1</a></li>
          <li><a>Mode 2</a></li>
        </ul>
      </details>
    </div>
  )
}

export default CardsDropdown