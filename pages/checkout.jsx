/* eslint-disable react/jsx-no-undef */
import Link from 'next/link'
import React from "react";

import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";

import { BsFillBagCheckFill } from "react-icons/bs";

export default function checkout({ cart, addToCart, removeFromCart, clearCart, subTotal }) {
  return (
    <div className="container px-2 sm:m-auto ">
      <div className="mt-20">
        <h1 className="font-bold text-center text-3xl">CheckOut</h1>
        <h2 className="font-bold text-xl">1. Delivery Details</h2>

        <div className="mx-auto flex my-4">
          <div className="px-2 w-1/2">
            <div class=" mb-4">
              <label htmlFor="name" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="px-2 w-1/2">
            <div class=" mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>

        <div className="px-2 w-full">
          <div class=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm tex t-gray-600">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              cols="30"
              rows="2"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>

        <div className="mx-auto flex my-4">
          <div className="px-2 w-1/2">
            <div class=" mb-4">
              <label htmlFor="phone" class="leading-7 text-sm text-gray-600">
                Phone
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="px-2 w-1/2">
            <div class=" mb-4">
              <label htmlFor="city" class="leading-7 text-sm text-gray-600">
                City
              </label>
              <input
                type="city"
                id="city"
                name="city"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto flex my-4">
          <div className="px-2 w-1/2">
            <div class=" mb-4">
              <label htmlFor="phone" class="leading-7 text-sm text-gray-600">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="px-2 w-1/2">
            <div class=" mb-4">
              <label htmlFor="pincode" class="leading-7 text-sm text-gray-600">
                Pincode
              </label>
              <input
                type="city"
                id="pincode"
                name="pincode"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>

        {/* Cart Review */}

        <h2 className="font-bold text-xl">2. Review Cart Items & Pay </h2>

        <div className="py-5 px-8 m-4 sideCart  bg-pink-100  text-black ">
          <span className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-600">
            <AiFillCloseCircle />
          </span>
          <ol className="list-decimal font-semibold py-2">
            {/* if cart is empty than so some text */}
            {Object.keys(cart).length === 0 && (
              <div className="text-center m-4 font-semibold">
                Your Cart is Empty
              </div>
            )}

            {Object.keys(cart).map((k) => {
              return (
                <>
                  <li key={k}>
                    <div className="item flex my-5">
                      <div className="mx-2 font-semibold text-xl">
                        {cart[k].name}
                      </div>
                      <div className="flex justify-center items-center w-1/3 font-semibold text-3xl">
                        {/* decrease qty */}

                        <AiFillMinusCircle
                          onClick={() =>
                            removeFromCart(
                              k,
                              1,
                              cart[k].price,
                              cart[k].name,
                              cart[k].size,
                              cart[k].variant
                            )
                          }
                          className="text-pink-500 cursor-pointer"
                        />
                        <span className="mx-4 text-xl">{cart[k].qty}</span>

                        {/* increase qty */}

                        <AiFillPlusCircle
                          onClick={() =>
                            addToCart(
                              k,
                              1,
                              cart[k].price,
                              cart[k].name,
                              cart[k].size,
                              cart[k].variant
                            )
                          }
                          className="text-pink-500 cursor-pointer"
                        />
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </ol>
          <span className="font-bold">SubTotal: ₹{subTotal}</span>
        </div>

        {/* Pay */}

        <div className=" mx-8">
          <Link href={"/checkout"}>
            {" "}
            <button class=" text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm ">
              Pay ₹{subTotal}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
