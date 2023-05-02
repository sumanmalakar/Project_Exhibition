/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Product from "../models/Product";
import mongoose from "mongoose";

export default function smartwatch({ products }) {
  return (
    <>
    <div className="container">

{/*    
   <div className="box flex flex-col lg:flex-row justify-center mt-20 sm:flex-col md:flex-col"> */}

<div className="flex flex-wrap mt-4 justify-center">

            {Object.keys(products).length === 0 && <h1>Sorry all the smartphones are out of stock new are comming soon..</h1>}
            {Object.keys(products).map((item) => {
              return (

              <div
                  key={products[item]._id}
                   class="flex justify-center m-8 ">
                    <Link
                      href={`/product/${products[item].slug}`}
                      className="block relative  rounded overflow-hidden "
                    >
                  <div
                    class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                   
                    <div className='flex justify-center'>
                      <img
                        class="rounded-t-lg h-[50vh]"
                        src={products[item].img}
                        alt="" />
                        </div>
                    
                    <div class="p-6">
                      <h5
                        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {products[item].title}
                      </h5>
                      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      {products[item].desc}
                      </p>
                      {/* <h1>{products[item].ram}</h1> */}
                      <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Rs. {products[item].price}/-</button>
                    </div>
                  </div>
                  </Link>
                </div>
              
              );
            })}
       
    </div> </div>
    </>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({ category: 'smartwatches' });

  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  };
}
