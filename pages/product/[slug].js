/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useState } from "react";
import mongoose from "mongoose";
import Product from "../../models/Product";
// import { json } from "stream/consumers";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Post = ({buyNow, addToCart, product, variants }) => {


  // console.log(product, variants);

  const router = useRouter();
  const { slug } = router.query;

  const [pin, setPin] = useState();
  const [service, setService] = useState();

  const checkServiceability = async (e) => {
 
  

    e.preventDefault();
    // let pins = await fetch('http://localhost:3000/api/pincode')

    let pins = await fetch("/api/pincode");
    let pinJson = await pins.json();


    // console.log(pinJson, pin);

    if (pinJson.includes(parseInt(pin))) {
      setService(true);
      // console.log(service);

      toast.success("Your Pincode is Serviceable!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

    } else {
      setService(false);
      // console.log(service);
      toast.warn("Sorry Your Pincode is not Serviceable!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const onChangePin = (e) => {
    setPin(e.target.value);
    // console.log(pin);
  };


  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
         />
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="m-auto   h-[30vh] md:h-[36h] block"
              src={product.img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Billion Dollar company!
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.title} ({product.size}/{product.color})
              </h1>


              <p className="leading-relaxed">
                {product.desc}
              </p>
              {/* <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div> */}
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₹{product.price}
                </span>

                <button 
                  onClick={() => { buyNow(slug, 1, product.price, product.title, product.size, product.color)}}
                 className=" flex ml-8 text-white bg-pink-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded">
                  Buy Now
                </button>

                <button
                  onClick={() => { addToCart(slug, 1, product.price, product.title, product.size, product.color) }}
                  className=" flex ml-4 text-white bg-pink-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded">
                  Add to Cart
                </button>


            

              </div>

              {/* pincode */}

              <div className="pin mt-10 flex space-x-2 text-sm">
                <input
                  type="text"
                  placeholder="Enter pincode"
                  className=" px-2 border-2
                  text-black border-pink-400 sm:text-2xl"
                  // value={pin}
                  onChange={onChangePin}
                />
                <button
                  onClick={checkServiceability}
                  className="flex ml-16 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded"
                >
                  Check PinCode
                </button>
              </div>
              {(!service && service != null) && (
                <div className="text-red-700 text-sm mt-3">
                  Sorry! We do not deliver to this pincode yet...
                </div>
              )}
              {(service && service != null) && (
                <div className="text-green-700 text-sm mt-3">
                  Yay! This pincode is serviceable..
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Post;


export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let product = await Product.findOne({ slug: context.query.slug });
  
  return {
    props: {
      product: JSON.parse(JSON.stringify(product))
      
    }, // will be passed to the page component as props
  };
}
