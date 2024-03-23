import React from 'react'
import Link from 'next/link'
export default function Q1() {
  return (
    <section className='mt-10'>
        <h2 className='text-4xl text-red-900 font-bold text-center'>Quarter 01 (Core)</h2>
        <p className='text-2xl text-center mt-2'>CS-101: Object-Oriented Programming using TypeScript</p>
        <p className='text-xl text-center mt-2'>Duration: 13 Weeks</p>
        <p className='text-2xl text-red-900  font-semibold text-start mt-2'>Course Description</p>
        <p className='text-xl  text-start mt-2'>We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.</p>
        <p className='text-2xl text-red-900  font-semibold text-start mt-2'>Course Outline</p>
        <p className='text-2xl text-center mt-2 text-[#452B96] font-semibold'>HTML and CSS (Homework)</p>
       <ul>
        <li className='text-xl  text-gray-800'><Link href='https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6'><i className="fa-solid fa-video"></i> Learn HTML by Hira Khan</Link></li>
        <li className='text-xl text-gray-800'><Link href='https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob'><i className="fa-solid fa-video"></i>Learn CSS Intro by Hira Khan</Link></li>
       </ul>
    </section>
  )
}
