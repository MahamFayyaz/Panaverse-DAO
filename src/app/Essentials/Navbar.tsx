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
            <div><Link href='/'><Image src={logo} alt='logo'/></Link></div>
            <div>
                <ul className='hidden lg:inline-flex space-x-8 text-xl items-center'>
                    <li  className='hover'><Link href="/Pages/About">About</Link></li>
                    <li className='hover'><Link href="/Pages/Syllabus">Syllabus</Link></li>
                    <li className='hover'><Link href="/Pages/Community">Community</Link></li>
                    <li className='hover'><Link href="/Pages/Web3">Web3.0</Link></li>
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
                    <li  className='hover'><Link href="/Pages/About">About</Link></li>
                    <li className='hover'><Link href="/Pages/Syllabus">Syllabus</Link></li>
                    <li className='hover'><Link href="/Pages/Community">Community</Link></li>
                    <li className='hover'><Link href="/Pages/Web3">Web3.0</Link></li>
                    <li className='hover'>More</li>
                    <li><button className='bg-red-900 text-white text-md p-2 px-5 rounded-md'>Apply</button></li>
                </ul>
            </div>  
        </div>
      )}
    </header>
  )
}
