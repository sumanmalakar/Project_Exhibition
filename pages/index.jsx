import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../Components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
       <Navbar />

          <div className="bg-orange-800  text-white">
            <h1>Hello This is NextJS Application</h1>
          </div>
          <div className="bg-amber-400 ">
            <h1>Akanksha</h1>
          </div>
      <div className="bg-blue-700 h-80 w-96 rounded-2xl">Vaishnavi Nagvanshi</div>
      <br />
          <div className=" max-h-full bg-black">

      <h1 className='bg-slate-700 text-white'>glady thomas</h1>

          </div>
        
      </main>
    </>
  )
}