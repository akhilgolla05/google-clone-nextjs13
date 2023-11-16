import WebSearchResults from '@/components/WebSearchResults'
import Link from 'next/link'
import React from 'react'

export default async function page({searchParams}) {

  const startIndex = searchParams.start || "1"
  // await new Promise((resolve)=>setTimeout(resolve,5000))
  
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`
  )

  if(!response.ok)
  {
    throw new Error("Something went wrong")
    
  }

  const data = await response.json()
  
  // console.log(data)
  const results = data.items

  if(!results)
  return <div className="flex flex-col justify-center items-center pt-10 ">
    <h1 className="text-3xl mb-4">No Result Found..</h1>
    <p className="text-lg ">Go back to home page.
      <Link className="text-blue-500" href="/">Home</Link>
    </p>
    </div>
  return (
    <>
      {/* {results && results.map(result => (
        <h1>{result.title}</h1>
      ))} */
      
      results && <WebSearchResults results={data}/>
      }
    </>
  )
}
