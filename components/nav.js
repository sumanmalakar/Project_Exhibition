import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { ImSearch } from "react-icons/im";
import { MdShoppingCart } from "react-icons/md";

// import { ImSearch } from "react-icons";

export default function Nav() {
  return (
    <>
    
      <div className=' flex justify-center bg-gray-500'>
      <ul className=" flex justify-center ">
        <li className='p-3  text-black hover:bg-black hover:text-white hover:cursor-pointer'>Home</li>
        <li className='p-3  text-black hover:bg-black hover:text-white hover:cursor-pointer'>About</li>
        <li className='p-3  text-black hover:bg-black hover:text-white hover:cursor-pointer'>Login</li>
        <li className='p-3  text-black hover:bg-black hover:text-white hover:cursor-pointer'>Sing-Up</li>
        <li className='p-3  text-black hover:bg-black hover:text-white hover:cursor-pointer'>Contact</li>
        <li className='p-3  text-black hover:bg-black hover:text-white hover:cursor-pointer'>Menu</li>
        <li className='p-3  text-black hover:bg-black hover:text-white hover:cursor-pointer'>Teams</li>
      </ul>
      {/* <ImSearch/> */}
      <div className="icon pl-20 pt-4 flex ">
      <a href="" className='hover:cursor-pointer hover:scale-150 pl-4'><ImSearch/></a>
      <a href="" className='hover:cursor-pointer hover:scale-150 pl-4'><MdShoppingCart/></a>

      </div>
      </div>


    </>
 
  )
}
