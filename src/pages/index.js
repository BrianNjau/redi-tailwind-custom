import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from 'antd'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
const inter = Inter({ subsets: ['latin'] })
import Script from 'next/script'
import { Flowbite } from 'flowbite-react'

export default function Home() {
  return (
    <Flowbite
      className={`${inter.className}`}
    >
    <Header/>
   
     <Hero/>
 
    </Flowbite>
  )
}
