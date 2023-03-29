
import React from 'react'
import Link from 'next/link'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { ImSearch } from "react-icons/im";
import { MdShoppingCart } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";





export default function Nav() {
  return (
    <>

      <div className='sticky top-0 flex flex-col md:flex-row justify-around bg-pink-400 w-[100%] z-10'>
        <div >
        <ul className="flex justify-center items-center">
          <li className='p-3  text-black hover:bg-black hover:text-white hover:cursor-pointer'>
            <Link href="/">Home</Link>

          </li>
          {/* <li className='p-3  text-black hover:bg-black hover:text-white hover:cursor-pointer'>
            <Link href="/about">About </Link>
          </li> */}
          <Link href="/smartwatch">
          <li className='p-3  text-black hover:bg-black hover:text-white hover:cursor-pointer'>
          Smartwatches
          </li></Link>
          <Link href="/smartphone">
          <li className='p-3  text-black hover:bg-black hover:text-white hover:cursor-pointer'>
           Smartphones
          </li></Link>
          <Link href="/bluetoothdevice">
          <li className='p-3  text-black hover:bg-black hover:text-white hover:cursor-pointer'>
            Bluetooth Devices
          </li></Link>
        </ul>
        </div>
        <div className="icon  flex justify-center items-center ">
          <Link href="" ><ImSearch className="text-3xl md:text-2xl mx-3 " /></Link>
          <Link href=""><MdShoppingCart  className="text-3xl md:text-2xl mx-3 " /></Link>
          <Link href="/login"><MdAccountCircle className="text-3xl md:text-2xl mx-3" /></Link>
        </div>
      </div>


    </>

  )
}
