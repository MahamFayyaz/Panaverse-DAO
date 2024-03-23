import React from 'react'
import Image from 'next/image';
interface HelloProps {
quantity: any
    src: any;
    alt: string;
    des:string;
  }
export default function Cards({ quantity,src,alt,des}:HelloProps) {
  return (
    <div>
        <div className='flex flex-col items-center justify-center '>
       <Image src={src} alt={alt} />
            <h1 className='text-center text-4xl lg:text-5xl font-bold text-white mt-3'>{quantity}</h1>
            <p className='text-lg text-center lg:text-md mt-2'>{des}</p>
        </div>
    </div>
  )
}
