/* eslint-disable @next/next/no-img-element */
import React from 'react';
// import Router from 'next/router'

// Router.reload(window.location.pathname);
import Link from 'next/link'


export default function Mi() {
  return (
    <div className="container ">
      <div className="flex flex-col justify-center items-center mt-10 sm:flex-col md:flex-row lg:flex-row ">
    <Link href="/product/suman">
      <div class="flex justify-center m-7">
  <div
    class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
   
   <div className='flex justify-center'>
      <img
        class="rounded-t-lg h-[50vh] "
        src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61x8LySMM6L._AC_UY218_.jpg"
        alt="" />
</div>
   
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
       Redmi Note 10 pro
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        Some quick example text to build on the card title and make up the
        bulk of the content.
      </p>
      <button
        type="button"
        class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        RS. 14999 /-
      </button>
    </div>
  </div>
</div>
</Link>

<Link href="/product/190">

      <div class="flex justify-center m-7">
  <div
    class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
       
   <div className='flex justify-center'>
      <img
        class="rounded-t-lgrounded-t-lg h-[50vh]"
        src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81lAth+jv+L._AC_UY218_.jpg"
        alt="" />
</div>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
       Redmi 11 5G
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        Some quick example text to build on the card title and make up the
        bulk of the content.
      </p>
      <button
        type="button"
        class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-ripple-init
        data-te-ripple-color="light">
       Rs. 15,000 /-
      </button>
    </div>
  </div>
</div>
</Link>

<Link href="/product/22MCA10000">
      <div class="flex justify-center m-7">
  <div
    class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
   <div className='flex justify-center'>
      <img
        class="rrounded-t-lgrounded-t-lg h-[50vh]"
        src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51jyWjssSAL._AC_UY218_.jpg"
        alt="" />
 </div>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
       Redmi Ultra pro
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        Some quick example text to build on the card title and make up the
        bulk of the content.
      </p>
      <button
        type="button"
        class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        RS. 20,000 /-
      </button>
    </div>
  </div>
</div>
</Link>
      </div>
    </div>
  )
}
