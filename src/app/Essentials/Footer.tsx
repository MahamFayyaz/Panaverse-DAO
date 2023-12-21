import React from "react";
import Image from "next/image";
import logo from "/public/panaverse.webp";
import { Twitter, YoutubeIcon, Instagram, Github, Mail } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="flex flex-col lg:flex-row  justify-center space-x-10 mt-7 mx-10 lg:mx-20">
        <div className=" w-full lg:w-[40%] mt-5">
          <Image src={logo} alt="/" />
          <p className="text-start  mt-6 text-md lg:text-lg lg:mt-10">
            The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
            Panaverse DAO is a movement to spread these technolgies globally. It
            is community of Web 3 and Metaverse developers, designers, trainers,
            startup founders and service providers.
          </p>
          <div className="flex w-full items-center space-x-2 lg:space-x-6 mt-5">
            <Twitter className="text-white  rounded-full bg-red-900 border-2" />
            <YoutubeIcon className="text-white  rounded-full bg-red-900 border-2" />
            <Instagram className="text-white  rounded-full bg-red-900 border-2" />
            <Github className="text-white  rounded-full bg-red-900 border-2" />
          </div>
        </div>

        <div className="w-full lg:w-[20%] mt-5">
          <ul className="space-y-5">
            <li>
              <h2 className="text-xl font-semibold">Company</h2>
            </li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Instructors</li>
            <li>Testimonials</li>
            <li>Build Career</li>
            <li>Become Instructor</li>
          </ul>
        </div>

        <div className="w-full lg:w-[20%] mt-5">
          <ul className="space-y-5">
            <li>
              <h2 className="text-xl font-semibold">Help Center</h2>
            </li>
            <li>Terms of Service</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Status</li>
          </ul>
        </div>

        <div className="w-full lg:w-[20%] mt-5">
          <ul className="space-y-4">
            <li>
              <h2 className="text-xl font-semibold">Stay up to date</h2>
            </li>
            <li>
                <div className="flex items-center space-x-2">
              <Mail className="text-red-900 lg:size-32"/><input placeholder="Enter Email"  className="p-3"></input></div>
            </li>
            <li>
              Get the latest updates and news <br />
              right at your inbox
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
