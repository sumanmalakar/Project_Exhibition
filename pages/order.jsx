/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function order() {
  return (
    <div className="m-[1rem] text-white">
      <section class=" body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 class="text-sm title-font text-white tracking-widest">E-Commerce Store</h2>
              <h1 class="text-white text-3xl title-font font-medium mb-4">Order Id: #894820</h1>
              <p class="leading-relaxed mb-4">Your order has been sucessfully placed.</p>
              <div class="flex mb-4">
                <a class="flex-grow  text-center  py-2 text-lg px-1">Item Description</a>
                <a class="flex-grow  text-center py-2 text-lg px-1">Quantity</a>
                <a class="flex-grow text-center  py-2 text-lg px-1">Item Total</a>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">iPhone 13 (proMax)</span>
                <span class="ml-auto text-gray-900">1</span>
                <span class="ml-auto text-gray-900">499</span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">iPhone 14 (proUltra)</span>
                <span class="ml-auto text-gray-900">1</span>
                <span class="ml-auto text-gray-900">4990</span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">iPhone 15 (proMax)</span>
                <span class="ml-auto text-gray-900">2</span>
                <span class="ml-auto text-gray-900">999</span>
              </div>
              <div class="flex my-3">
                <span class="title-font font-medium text-2xl text-gray-900">$58.00</span>
                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Track Order</button>
                
              </div>
            </div>
            <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          </div>
        </div>
      </section>
    </div>
  )
}
