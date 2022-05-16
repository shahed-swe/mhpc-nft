import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Navbar } from '@/components/navbar/index'
import Header from '@/components/header'
import About from '@/components/about'
import Catalogue from '@/components/catalogue'

export default function Home() {

  return (
    <div>
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
