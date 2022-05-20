import Head from 'next/head'
import { Navbar } from '@/components/navbar/index'
import Header from '@/components/header'
import About from '@/components/about'
import Catalogue from '@/components/catalogue'
import Features from '@/components/features'
import RoadMap from '@/components/roadmap'
import Mining from '@/components/mining'
import Founder from '@/components/founder'
import FAQ from '@/components/faq'

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
      <Features/>
      <RoadMap/>
      <Mining/>
      <Founder/>
      <FAQ/>
    </div>
  )
}
