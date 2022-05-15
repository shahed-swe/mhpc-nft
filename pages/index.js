import Head from 'next/head'
import { Navbar } from '@/components/navbar/index'
import Header from '@/components/header'
import About from '@/components/about'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MHPC</title>
      </Head>
      <Navbar/>
      <Header/>
      <About/>
    </div>
  )
}
