import React from "react";
import Image from "next/image";
import rightImage from "/public/img.png";
export default function Hero() {
  return (
    <section className="">
      <div className="flex flex-col lg:flex-row md:flex-row justify-center w-full ">
        <div className="w-25 pt-20 w-25% lg:pt-40">
          <p className="text-start text-xl ml-0 text-red-900 lg:text-2xl lg:ml-6">Uncover your path</p>
          <h1 className="text-4xl text-start mt-6 lg:text-5xl lg:mt-10">
            Embark on Your <span className="text-red-900 text-bold">Development</span>  Journey with <span className="text-red-900">Web 3</span>  and the <span className="text-red-900">Metaverse</span> 
          </h1>
          <p className="text-start mt-6 text-xl lg:mt-10">Certified Web 3.0 and Metaverse Developer. A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet.</p>
          <button className='bg-red-900 text-white p-2 px-4 rounded-md buttonhover text-md mt-8 lg:p-4 lg:px-7 lg:text-lg '>Explore Course</button>
        </div>
        <div className="flex w-full items-start img">
          <Image src={rightImage} alt="img" />
        </div>
      </div>
    </section>
  );
}
