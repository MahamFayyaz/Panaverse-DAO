import QuarterCard from '@/app/SideComponents/QuarterCard'
import React from 'react'
export default function About() {
  return (

<section className='mt-10'>
  <h2 className='text-3xl lg:text-5xl text-center lg:text-start '>What is <span className='text-red-900 font-semibold'>Panaverse DAO</span>?</h2>
  <p className='text-2xl lg:text-3xl mt-6 lg:ml-20 lg:mr-20 text-center'>The Future of the Web is <span className='text-red-900'>Web 3.0, Metaverse, and Edge Computing. <br /></span><span className='text-xl lg:text-2xl'> Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</span></p>
  <p className='text-4xl lg:text-5xl  ml-50 mr-50 mt-10 text-center'>Admissions are now Open in</p>
  <div className="grid grid-rows-4 lg:grid-rows-2 grid-flow-col lg:gap-4 mt-10">
  <div className='bg-red-900 ml-5 mr-5 lg:ml-20
   lg:mr-20
     p-3 text-center mt-3'><QuarterCard title='LAHORE' des='The City Of Gardens'/> </div>
  <div className='bg-red-900 ml-5 mr-5 lg:ml-20
   lg:mr-20
     p-3 text-center mt-3'><QuarterCard title='KARACHI' des='The City Of Lights'/> </div>
  <div className='bg-red-900 ml-5 mr-5 lg:ml-20
   lg:mr-20
     p-3 text-center mt-3'><QuarterCard title='ISLAMABAD' des='The City Of Gardens'/> </div>
  <div className='bg-red-900 ml-5 mr-5 lg:ml-20
   lg:mr-20
     p-3 text-center mt-3'><QuarterCard title='PESHAWAR' des='The City Of Flowers'/> </div>
</div>
<p className='text-lg lg:text-xl mt-6'>The internet is without a doubt the most important technological development in human history. Web3 and metaverse technologies expand the internet as we know it by introducing novel features and advancements. <br /> Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud computing, voice computing, ambient computing, and more.

<br />Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centred on decentralised technologies and virtual worlds. Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030.</p>

</section>
  )
}
