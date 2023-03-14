import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'


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
       

          <div className="bg-orange-800 h-screen text-white">
            <h1>Hello This is NextJS Application</h1>
          </div>
          <div className="bg-amber-400 h-8 ">
            <h1>Akanksha</h1>
          </div>
      
        
      </main>
    </>
  )
}
