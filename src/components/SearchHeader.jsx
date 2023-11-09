
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBoxComponent from './SearchBoxComponent'
import {RiSettings3Line} from "react-icons/ri"
import {BiSolidGrid} from "react-icons/bi"
import SearchHeaderOptions from './SearchHeaderOptions'

export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        <Link href="/">
            <Image width="120" height="40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"/>
        </Link>

        <div className="flex-1">
        <SearchBoxComponent />
        
      </div>

      <div className="hidden md:inline-flex space-x-2 ">
        <RiSettings3Line className="header-icon"/>
        <BiSolidGrid className="header-icon"/>
    </div>
    <button className="bg-blue-500 ml-2 text-white px-6 py-2 font-md rounded-md hover:brightness-105 hover:shadow-md transition-all">Sign in</button>
      </div>

    <SearchHeaderOptions/>
      
     
    </header>
  )
}
