import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Navbar } from '@/components/navbar/index'
import Header from '@/components/header'
import About from '@/components/about'
import Catalogue from '@/components/catalogue'

export default function Home() {

  const [height, setHeight] = useState() 
  useEffect(() => {
    setHeight(window.innerHeight)
  },[])

  return (
    <div style={{ height: height - 200}}>
      <Head>
        <title>MHPC</title>
      </Head>
      <Navbar/>
      <Header/>
      <About/>
      <Catalogue/>
    </div>
  )
}
