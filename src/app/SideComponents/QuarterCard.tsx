import React from 'react'
import Image from 'next/image';
interface QuarterCardTypes {
title: string;
    des:string;
  }
export default function QuarterCard({title,des}:QuarterCardTypes) {
  return (
    <div>
        <div>
            <h1 className='text-3xl lg:text-5xl font-bold text-white mt-3 text-center'>{title}</h1>
            <p className='text-md lg:text-md mt-2 text-center text-white p-5 lg:ml-20 lg:mr-20'>{des}</p>
        </div>
    </div>
  )
}
