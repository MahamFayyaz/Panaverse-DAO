import React from 'react'
import Image from 'next/image'
import logo from '/public/panaverse.webp'
export default function Navbar() {
  return (
    <header className='shadow-lg'>
        <div className='flex justify-between items-center mt-7 mx-14'>
            <div><Image src={logo} alt='logo'/></div>
            <div>
                <ul className='flex space-x-8 text-xl items-center'>
                    <li  className='hover'>About</li>
                    <li className='hover'>Blog</li>
                    <li className='hover'>Community</li>
                    <li className='hover'>Web3.0</li>
                    <li className='hover'>More</li>
                    <li><button className='bg-red-900 text-white p-4 px-7 rounded-md buttonhover'>Apply</button></li>
                </ul>
            </div>
        </div>
    </header>
  )
}
