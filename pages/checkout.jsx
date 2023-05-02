/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/inline-script-id */
/* eslint-disable @next/next/no-script-component-in-head */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
import Link from 'next/link'
import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import axios from "axios";


import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";

import { BsFillBagCheckFill } from "react-icons/bs";

export default function checkout({ cart, addToCart, removeFromCart, clearCart, subTotal }) {
  const router = useRouter();


  

  // Razorpay Payment Integration

  const makePayment = async (e) => {
    e.preventDefault();

    // Make API call to the serverless API
       
    const data = { subTotal  };

    let res = await fetch('/api/razorpay', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    console.log(response);


    // let key = process.env.RAZORPAY_KEY;
    // console.log(process.env.NEXT_PUBLIC_RAZORPAY_KEY)

    const options = {
      key: "rzp_test_ijv2EdLEy05f67" ,  // Enter the Key ID generated from the Dashboard
      amount: subTotal*100,
      currency: "INR",
      name: "Suman Malakar",
      description: "Tutorial of RazorPay",
      // image: "https://avatars.githubusercontent.com/u/25058652?v=4",
      // order_id: order.id,
      order_id: response.id,
     // callback_url: "/api/paymentvarification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999"
      },
      notes: {
        "address": "Razorpay Corporate Office"
      },
      theme: {
        "color": "#821232"
      }
    };

    const razor = new window.Razorpay(options);
    razor.open();
    
     setTimeout(() => {
         if(response.success){
      router.push('/order')
    }

      }, 30000);

  


  };


  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/');
    }
  }, [])

  return (
    <>
     <Script type="application/javascript" src="https://checkout.razorpay.com/v1/checkout.js" crossorigin="anonymous"/>

    <div className="container px-2 sm:m-auto ">

      <Head>
        {/* <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

        <Script type="application/javascript" src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`} crossorigin="anonymous"></Script> */}

        {/* <Script type="application/javascript" src="https://checkout.razorpay.com/v1/checkout.js" crossorigin="anonymous"></Script> */}

        {/* <script src="https://checkout.razorpay.com/v1/checkout.js"></script> */}
      </Head>

      <div className="mt-20 text-white">
        <h1 className="font-bold text-center text-3xl ">CheckOut</h1>
        <h2 className="font-bold text-xl">1. Delivery Details</h2>

        <div className="mx-auto flex my-4 text-white">
          <div className="px-2 w-1/2">
            <div className=" mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-700  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="px-2 w-1/2">
            <div className=" mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-700 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>

        <div className="px-2 w-full">
          <div className=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm tex t-gray-600">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              cols="30"
              rows="2"
              className="w-full bg-gray-700 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>

        <div className="mx-auto flex my-4 text-white">
          <div className="px-2 w-1/2">
            <div className=" mb-4">
              <label htmlFor="phone" className="leading-7 text-sm ">
                Phone
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                className="w-full bg-gray-700 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="px-2 w-1/2 text-white">
            <div className=" mb-4">
              <label htmlFor="city" className="leading-7 text-sm text-white">
                City
              </label>
              <input
                type="city"
                id="city"
                name="city"
                className="w-full bg-gray-700 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto flex my-4">
          <div className="px-2 w-1/2">
            <div className=" mb-4">
              <label htmlFor="phone" className="leading-7 text-sm text-white">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="w-full bg-gray-700 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="px-2 w-1/2">
            <div className=" mb-4">
              <label htmlFor="pincode" className="leading-7 text-sm text-white">
                Pincode
              </label>
              <input
                type="city"
                id="pincode"
                name="pincode"
                className="w-full bg-gray-700 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>

        {/* Cart Review */}

        <h2 className="font-bold text-xl">2. Review Cart Items & Pay </h2>

        <div className="py-5 px-8 m-4 sideCart  bg-gray-700  text-white ">
          <span className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-600">
            <AiFillCloseCircle />
          </span>
          <ol className="list-decimal font-semibold py-2">
            {/* if cart is empty than so some text */}
            {Object.keys(cart).length === 0 && (
              <div className="text-center m-4 font-semibold ">
                Your Cart is Empty
              </div>
            )}

            {Object.keys(cart).map((k) => {
              return (

                <li key={k}>
                  <div className="item flex my-5">
                    <div className="mx-2 font-semibold text-xl">
                      {cart[k].name}
                      ({cart[k].size}/{cart[k].varient})
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

              );
            })}
          </ol>
          <span className="font-bold">SubTotal: ₹{subTotal}</span>
        </div>

        {/* Pay */}

        <div className=" mx-8">
          <Link href={"/checkout"}>
            {" "}
            <button
              // // onClick={initiatePayment}
              // onClick={() => 
              //   makePayment(subTotal) }

              onClick={makePayment}

              className=" text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm ">
              Pay ₹{subTotal}
            </button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
