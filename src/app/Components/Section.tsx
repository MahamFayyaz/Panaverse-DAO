import React from "react";
import AnimatedCounter from "../SideComponents/AnimatedCounter";
import Cards from "../SideComponents/Cards";
import i1 from "/public/students.webp";
import i2 from "/public/classes.webp";
import i3 from "/public/instructors.webp";
export default function Section() {
  return (
    <section>
      <div>
        <h1 className="text-5xl text-center mt-6 lg:text-6xl lg:mt-10">
          We Are <span className="text-red-900">Proud</span>
        </h1>
        <p className="text-center mt-3 text-xl ml-0 lg:text-2xl lg:ml-6 lg:mt-7">
          You do not have to struggle alone, you have got our assistance and
          help.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="bg-red-900 p-4 lg:p-8 rounded-lg">
            <Cards quantity={<AnimatedCounter value={5000} />} src={i2} alt="/" des="Students Enrolled" />
          </div>
          <div className="bg-[#452b96] p-4 lg:p-8 rounded-lg">
            <Cards quantity={<AnimatedCounter value={1000} />} src={i1} alt="/" des="Classes Completed" />
          </div>
          <div className="bg-red-900 p-4 lg:p-8 rounded-lg">
            <Cards quantity={<AnimatedCounter value={100} />} src={i3} alt="/" des="Skilled Instructors" />
          </div>
          <div className="bg-[#452b96] p-4 lg:p-8 rounded-lg">
            <Cards quantity={<AnimatedCounter value={5000} />} src={i2} alt="/" des="Students Enrolled" />
          </div>
        </div>
      </div>
    </section>
  );
}
