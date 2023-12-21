import Image from 'next/image'
import Hero from './Components/Hero'
import Section from './Components/Section'
import SectionOne from './Components/SectionOne'
import SectionTwo from './Components/SectionTwo'

export default function Home() {
  return (
   <main>
    <Hero/>
    <Section/>
    <SectionOne/>
    <SectionTwo/>
   </main>
  )
}
