import React from "react";
import Image from "next/image";
import leftImage from "/public/LeftImage.png";

export default function SectionTwo() {
  return (
    <main>
      {/* <section className="mt-6 lg:mt-20">
        <div className="flex flex-col lg:flex-row md:flex-row items-center justify-center w-full ">
          {/* 1st div */}
          {/* <div className=" flex justify-center  items-start w-[50%] ">
            <Image src={leftImage} alt="img" className="w-[500px]" />
          </div> */}
          {/* 2nd div */}
          {/* <div className="w-[50%] ">
            <h1 className="text-4xl text-center mt-6 lg:text-5xl lg:mt-10">
              Achieve Your <span className="text-red-900 text-bold">Goals</span>
            </h1>
            <p className=" mt-6 text-sm lg:text-xl lg:mt-8">
              This curriculum is intended for beginners who want to learn
              software development from the ground up. The first two quarters
              are shared by all specialties and are dedicated to studying
              Object-Oriented Programming and cutting-edge Full-Stack Web 2.0
              development. It is going to be a fifteen-month-long hybrid program
              that includes both onsite and online classes and is divided into
              five quarters of 13 weeks each. The emphasis will be on hands-on
              learning by educating students to produce projects. To accommodate
              everyone, courses will be held primarily on weekends or after 6:00
              p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching
              format, with core onsite classes complemented by online Zoom
              laboratories and recorded videos.
            </p>
            <div className="flex items-center  justify-center">
            <button className="bg-red-900  text-white p-2 px-4 flex items-center justify-center rounded-md mx-50 buttonhover text-md mt-8 lg:p-4 lg:px-7 lg:text-lg ">
              Apply Now
            </button></div>
          </div>
        </div> */}
      {/* </section> */} 
      <section className="">
      <div className="flex flex-col lg:flex-row md:flex-row justify-center w-full ">
      <div className="flex w-full lg:p-8 lg:w-[50%] items-start img lg:mt-10">
          <Image src={leftImage} alt="img" />
        </div>
        <div className=" w-full lg:w-[50%] mt-10 lg:pt-40">  
                <h1 className="text-4xl text-center mt-6 lg:text-5xl ">
            Achieve Your <span className="text-red-900 text-bold">Goals</span>    
          </h1>
          <p className="text-start mt-6 text-sm lg:text-xl lg:mt-10">
          This curriculum is intended for beginners who want to learn
              software development from the ground up. The first two quarters
              are shared by all specialties and are dedicated to studying
              Object-Oriented Programming and cutting-edge Full-Stack Web 2.0
              development. It is going to be a fifteen-month-long hybrid program
              that includes both onsite and online classes and is divided into
              five quarters of 13 weeks each. The emphasis will be on hands-on
              learning by educating students to produce projects. To accommodate
              everyone, courses will be held primarily on weekends or after 6:00
              p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching
              format, with core onsite classes complemented by online Zoom
              laboratories and recorded videos.
            </p>
          <button className='bg-red-900 text-white p-2 px-4 rounded-md text-md mt-8 lg:p-4 lg:px-7 lg:text-lg '>Explore Course</button>
        </div>
      </div>
    </section>
    </main>
  );
}
