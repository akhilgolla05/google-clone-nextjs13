'use client'

import React, { useEffect, useState } from 'react'

export default function CountryLookup() {

    const [country, setCountry] = useState("india")

    useEffect(()=>{
            fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
            .then((res)=>res.json())
            .then((data)=>setCountry(data.country))
    },[])
  return (
    <div>
      {
        country
      }
    </div>
  )
}
