"use client"

import React, { useState } from 'react'

// this is from nextjs12 import { useRouter } from 'next/router'

import { useRouter } from 'next/navigation'

import {AiOutlineSearch} from "react-icons/ai"
import {BsFillMicFill} from "react-icons/bs"

export default function HomeSearch() {

    const router = useRouter()
    const [input, setInput] = useState("")

    const [randomSearchLoading, setRandomSearchLoading] = useState(false)

    function handleSubmit(e)
    {
        //to prevent the default behaviour of the form
        //when submission, i.e., refreshing the page
        e.preventDefault()
        if(!input.trim()) return
        router.push(`/search/web?searchTerm=${input}`)

    }

    async function randomSearch()
    {
        setRandomSearchLoading(true)
        const response = await fetch("https://random-word-api.herokuapp.com/word")
        .then((response)=>(response.json()))
        .then((data)=>data[0])

        if(!response) return;
        router.push(`/search/web?searchTerm=${response}`)
        setRandomSearchLoading(false)
    }

  return (
    <>
    {/* we have added onsubmit event listner
     we cannot use this component anymore on the server side
     we need to change this to client side*/}

      <form 
      onSubmit={handleSubmit}
      className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-300 px-5 py-3
       rounded-full hover:shadow-md transition-shadow focus-within:shadow-md
       sm:max-w-xl lg:max-w-2xl">
        <AiOutlineSearch className='text-lg text-gray-500 mr-3'/>
        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" className="flex-grow focus:outline-none"/>
        <BsFillMicFill className="text-lg "/>
      </form>

      <div className="mt-8 flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row">
        <button className="btn " onClick={handleSubmit}>Google Search</button>
        <button disabled={randomSearchLoading} onClick={randomSearch} 
        className="btn flex items-center justify-center disabled:opacity-80">
            {randomSearchLoading ? (
                <img src="spinner.svg" alt="loading..." className="h-6 text-center"/>)
                :(
                    "I am Feeling Lucky"
                )
            }
            
            </button>
      </div>
    </>
  )
}
