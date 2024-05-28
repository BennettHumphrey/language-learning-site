"use client"


import React, { useEffect, useState } from 'react'

const ApiTestPage = () => {

    const [name, setName] = useState<string>();

    useEffect(() => {
        fetch("/api/whoAmI")
        .then((res) => res.json())
        .then((data) => setName(data.name))
    }, [])


  return (
    <div>
        <div>
            API Route from CLIENT
        </div>
        <div>
            Name: {name}
        </div>
    </div>
  )
}

export default ApiTestPage