
import React from 'react'
import Link from 'next/link'
import  {useRef} from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { ImSearch } from "react-icons/im";
import { MdShoppingCart } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";

import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";

import { BsFillBagCheckFill } from "react-icons/bs";


export default function Nav() {
  const toggleCart = () =>{
    console.log("Cart is clicked")
    
    if(ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    
    else if(!ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
    
    
    }
    
    const ref  = useRef()

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

          <div 
          onClick={toggleCart}
          ><MdShoppingCart  className="text-3xl md:text-2xl mx-3 " /></div>

      {/* sidebar... */}

      <div
        ref={ref}
        className="w-72  sideCart absolute top-0 right-0 bg-pink-300 px-8 py-10 text-black transform
         transition-transform translate-x-full h-[100vh]"
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-900"
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal font-semibold py-2 ">
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="flex justify-center items-center w-2/3 font-semibold text-lg">
                <AiFillMinusCircle className="text-pink-500 cursor-pointer" /> 
                <span className="mx-3 text-sm">1</span>
                <AiFillPlusCircle  className="text-pink-500 cursor-pointer" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="flex justify-center items-center w-2/3 font-semibold">
                1
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="flex justify-center items-center w-2/3 font-semibold">
                1
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="flex justify-center items-center w-2/3 font-semibold">
                1
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="flex justify-center items-center w-2/3 font-semibold">
                1
              </div>
            </div>
          </li>
        </ol>
        <button class="flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-sm">
          <BsFillBagCheckFill className="m-1" /> 
        CheckOut</button>
      </div>


          <Link href="/login"><MdAccountCircle className="text-3xl md:text-2xl mx-3" /></Link>
        </div>
      </div>


    </>

  )
}
