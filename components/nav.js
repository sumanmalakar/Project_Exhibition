import React from 'react'

export default function Nav() {
  return (
    <>
      <ul className="flex justify-center bg-gray-900">
        <li className='p-3 bg-gray-900 text-white hover:bg-white hover:text-black hover:cursor-pointer'>Home</li>
        <li className='p-3 bg-gray-900 text-white hover:bg-white hover:text-black hover:cursor-pointer'>About</li>
        <li className='p-3 bg-gray-900 text-white hover:bg-white hover:text-black hover:cursor-pointer'>Login</li>
        <li className='p-3 bg-gray-900 text-white hover:bg-white hover:text-black hover:cursor-pointer'>Sing-Up</li>
        <li className='p-3 bg-gray-900 text-white hover:bg-white hover:text-black hover:cursor-pointer'>Contact</li>
        <li className='p-3 bg-gray-900 text-white hover:bg-white hover:text-black hover:cursor-pointer'>Menu</li>
        <li className='p-3 bg-gray-900 text-white hover:bg-white hover:text-black hover:cursor-pointer'>Teams</li>
      </ul>

    </>
 
  )
}
