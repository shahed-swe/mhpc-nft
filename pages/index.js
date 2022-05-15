import Head from 'next/head'
import { Navbar } from '@/components/navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MHPC</title>
      </Head>
      <Navbar/>
    </div>
  )
}
