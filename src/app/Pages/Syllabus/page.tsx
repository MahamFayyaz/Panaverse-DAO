import QuarterCard from "@/app/SideComponents/QuarterCard";
import React from "react";
import Link from "next/link";
export default function Blog() {
  return (
    <section className="mt-10">
      <div>
        <h1 className="text-5xl text-center font-semibold">
          Web <span className="text-red-900">3.0</span>
        </h1>
        <h2 className="text-2xl mt-3 lg:mt-0 text-center text-red-900">
          Certified Web 3.0 and Metaverse Developer
        </h2>
        <h3 className="text-md text-center mt-2">
          A One and Quarter Years Panaverse DAO Earn as you Learn Program
          Getting Ready for the Next Generation of the Internet.
        </h3>
        <p className="text-lg text-center mt-9 ml-5 mr-5 lg:ml-7 lg:mr-7 text-gray-900">
          This curriculum is intended for beginners who want to learn software
          development from the ground up. The first two quarters are shared by
          all specialties and are dedicated to studying Object-Oriented
          Programming and cutting-edge Full-Stack Web 2.0 development. It is
          going to be a fifteen-month-long hybrid program that includes both
          onsite and online classes and is divided into five quarters of 13
          weeks each. The emphasis will be on hands-on learning by educating
          students to produce projects. To accommodate everyone, courses will be
          held primarily on weekends or after 6:00 p.m. (Pakistan Time) on
          weekdays. It employs a hybrid teaching format, with core onsite
          classes complemented by online Zoom laboratories and recorded videos.
        </p>
      </div>
      <div>
        <h2 className="text-5xl text-center font-semibold mt-20">
          Program Structure
        </h2>
        <p className="text-lg lg:text-xl text-center mt-7 lg:ml-10 lg:mr-10 text-red-900">
          A One and Quarter Years Panaverse DAO Earn as you Learn Program
          Getting Ready for the Next Generation of the Internet Consolidating
          Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and
          Ambient Computing/IoT Technologies
        </p>
        <p className="text-3xl mt-10">
          Core Courses (Common in All Specializations)
        </p>
        <p className="text-lg  mt-3 text-gray-900">
          Every participant of the program will start by completing the
          following three core courses:
        </p>

        <div className="grid grid-col-1 lg:grid-cols-3 gap-8 mt-6">
          <div className="bg-red-900 p-0 lg:p-6">
            <Link href="/Pages/Q1Details">
              <QuarterCard
                title="Quarter l"
                des="CS-101:JavaScript and Object Oriented Programming using TypeScript"
              />
            </Link>
          </div>
          <div className="bg-red-900 p-0 lg:p-6">
            <Link href="/">
              <QuarterCard
                title="Quarter ll"
                des="W2-201: Developing  Web 2.0 Serverless Cloud Apps and APIs using NextJS 13  and CDK"
              />
            </Link>
          </div>
          <div className="bg-red-900 p-0 lg:p-6">
            <Link href="/">
              <QuarterCard
                title="Quarter lll"
                des="$-101: Dollar Making BootCamp - Full-Stack Templates and API Product Development"
              />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p className="text-3xl mt-10">Specialized Tracks</p>
        <p className="text-lg  mt-3 text-gray-900">
          After completing the first two quarters the participants will select
          one or more specializations consisting of two courses each:
        </p>
        <h2 className="text-3xl text-center font-semibold mt-14 lg:mt-20">
          Web 3.0 (Blockchain) and Metaverse Specialization
        </h2>
        <p className="text-lg text-center lg:text-start mt-4 lg:mt-7  lg:ml-10 lg:mr-10 text-red-900">
          This Web 3.0 and Metaverse specialization focuses on developing
          full-stack Web 3.0 and Metaverse experiences for the next generation
          of the internet by specializing in building worlds that merge the best
          of cutting-edge decentralized distributed blockchains with 3D
          metaverse client experiences.{" "}
        </p>
        <div className="grid grid-col-1 lg:grid-cols-2 gap-8 mt-6">
          <div className="bg-red-900 p-0 lg:p-6 ">
            <Link href="/">
              <QuarterCard
                title="Quarter lV"
                des="W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps"
              />
            </Link>
          </div>
          <div className="bg-red-900 p-0 lg:p-6 ">
            <Link href="/">
              <QuarterCard
                title="Quarter V"
                des="MV-361: Developing Planet-Scale Open Virtual and Augmented MetaVerse Experiences"
              />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl text-center font-semibold mt-20">
          Artificial Intelligence (AI) and Deep Learning Specialization{" "}
        </h2>
        <p className="text-lg text-center lg:text-start mt-7 lg:ml-10 lg:mr-10 text-red-900">
          The AI and Deep Learning specialization focuses on building and
          deploying intelligent APIs using OpenAI models and building custom
          Deep Learning Tensorflow models.
        </p>
        <div className="grid grid-col-1 lg:grid-cols-2 gap-8 mt-6">
          <div className="bg-red-900 p-0 lg:p-6 ">
            <Link href="/">
              <QuarterCard
                title="Quarter lV"
                des="AI-351: Developing Planet-Scale Intelligent APIs and Python Programming"
              />
            </Link>
          </div>
          <div className="bg-red-900 p-0 lg:p-6 ">
            <Link href="/">
              <QuarterCard
                title="Quarter V"
                des="AI-361: Deep Learning and MLOps"
              />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl text-center font-semibold mt-20">
          Cloud-Native Computing Specialization
        </h2>
        <p className="text-lg text-center lg:text-start mt-7 lg:ml-10 lg:mr-10 text-red-900">
          The Cloud-Native Computing Specialization focuses on Containers,
          Kubernetes, and CDK for Kubernetes
        </p>
        <div className="grid grid-col-1 lg:grid-cols-2 gap-8 mt-6">
          <div className="bg-red-900 p-0 lg:p-6 ">
            <Link href="/">
              <QuarterCard
                title="Quarter lV"
                des="CN-351: Certified Kubernetes Application Developer (CKAD)"
              />
            </Link>
          </div>
          <div className="bg-red-900 p-0 lg:p-6 ">
            <Link href="/">
              <QuarterCard
                title="Quarter V"
                des="CN-361: Developing Multi-Cloud APIs using CDK for Terraform"
              />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl text-center font-semibold mt-20">
          Ambient Computing and IoT Specialization
        </h2>
        <p className="text-lg text-center lg:text-start mt-7 lg:ml-10 lg:mr-10 text-red-900">
          The Ambient Computing and IoT Specialization focuses on building Smart
          Homes, Offices, Factories, and Cities using Voice computing, Matter,
          and Embedded Devices.
        </p>
        <div className="grid grid-col-1 lg:grid-cols-2 gap-8 mt-6">
          <div className="bg-red-900 p-0 lg:p-6 ">
            <Link href="/">
              <QuarterCard
                title="Quarter lV"
                des="AC-351: Ambient Computing with Voice Assistants and Matter devices"
              />
            </Link>
          </div>
          <div className="bg-red-900 p-0 lg:p-6 ">
            <Link href="/">
              <QuarterCard
                title="Quarter V"
                des="AC-361: Embedded Programming using C and Rust"
              />
            </Link>
          </div>
        </div>
        <h2 className="text-3xl lg:text-4xl text-center font-semibold mt-20">
          The Outcome for Participants of the Program
        </h2>
        <p className="text-lg text-center mt-7 lg:ml-10 lg:mr-10 text-red-900">
          The graduates of this program will own products (Full-Stack App
          Templates, AR and VR Experiences, and APIs) that are marketed globally
          by the Panaverse DAO and, if they like, will also be able to start off
          by offering services at a rate of $50 per hour ($96,000 per year).
          This would give Pakistani professionals and students a fantastic
          opportunity to better their financial situation while also giving the
          economy a much-needed boost by expanding software exports.
        </p>
        <h2 className="text-xl lg:text-2xl text-start font-semibold mt-20  text-red-900">
          Read the Blogs
        </h2>
        <ul>
            <li className="mt-2 text-blue-950"><Link href='https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms'>Top 5 Metaverse Jobs that will rule the future of tech industry</Link></li>
            <li className="mt-2 text-blue-950"><Link href='https://web3.career/web3-salaries/blockchain-developer'>BlockChain Developer Salaray - June 2022 </Link></li>
            <li className="mt-2 text-blue-950"><Link href='https://thedefiant.io/web3-soaring-salaries'>Web3 Salaries Soar to $750,000 for Rank-and-File Devs</Link></li>
            <li className="mt-2 text-blue-950"><Link href='https://newzoo.com/resources/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022'>The Metaverse, Blockchain Gaming and NFTs: Navigating the Internet Uncharted Waters</Link></li>
            <li className="mt-2 text-blue-950"><Link href='https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/'>How to become a Metaverse Developer. Scope,Skills and Salary.</Link></li>
          </ul>
      </div>
    </section>
  );
}
