"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/panaverse.webp'
import { MenuIcon, XIcon } from 'lucide-react'
export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  const toggleMenu=()=>{
setisOpen(!isOpen)
  }
  return (
    <header className='shadow-lg'>
        <div className='flex justify-between items-center mt-7 mx-14'>
            <div><Image src={logo} alt='logo'/></div>
            <div>
                <ul className='hidden lg:inline-flex space-x-8 text-xl items-center'>
                    <li  className='hover'><a href="/Pages/About">About</a></li>
                    <li className='hover'><a href="/Pages/Blog">Blog</a></li>
                    <li className='hover'><a href="/Pages/Community">Community</a></li>
                    <li className='hover'><a href="/Pages/Web3">Web3.0</a></li>
                    <li className='hover'>More</li>
                    <li><button className='bg-red-900 text-white p-4 px-7 rounded-md'><Link href={'https://portal.piaic.org/'} target='blank'>Apply</Link></button></li>
                </ul>
            </div>  
            <button onClick={toggleMenu}  className="text-black hover:text-black focus:outline-none lg:hidden">{isOpen?(<XIcon className='h-6 w-6 text-red' aria-hidden="true" />):(<MenuIcon className='h-6 w-6 text-red' aria-hidden="true"/>)}</button>

        </div>
        {isOpen && (
        <div className="md:hidden">
           <div>
                <ul className='flex flex-col space-y-2 text-lg items-center'>
                    <li  className='hover'>About</li>
                    <li className='hover'>Blog</li>
                    <li className='hover'>Community</li>
                    <li className='hover'>Web3.0</li>
                    <li className='hover'>More</li>
                    <li><button className='bg-red-900 text-white text-md p-2 px-5 rounded-md'>Apply</button></li>
                </ul>
            </div>  
        </div>
      )}
    </header>
  )
}
