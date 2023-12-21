import type { Metadata } from 'next'
import {Quicksand } from 'next/font/google'
import Head from 'next/head'
import './globals.css'
import Navbar from './Essentials/Navbar'
import Footer from './Essentials/Footer'

const inter =Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Panaverse DAO',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Arimo:wght@600&family=Assistant:wght@300&family=Quicksand&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <div className='mx-14'>{children}</div>
        <Footer/>
      </body>
    </html>
  )
}
