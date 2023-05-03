/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useState } from "react";
import mongoose from "mongoose";
import Product from "../../models/Product";
// import { json } from "stream/consumers";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Post = ({ buyNow, addToCart, product, variants }) => {


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
        <div className="container px-5 py-4 mx-auto ">
          <div className="lg:w-4/5 mx-auto flex flex-wrap ">
            <img
              alt="ecommerce"
              className="m-auto   h-[60vh] md:h-[36h] block"
              src={product.img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-white">
              {/* <h1 className="text-sm title-font text-gray-500 tracking-widest">
                NextJs Modern E-Commerce Application!
              </h1>
              <br /> */}
              <h1 className="text-white text-4xl title-font font-medium mb-1">
                {product.title} ({product.size}/{product.color})
              </h1>
              <br />

              <p className="leading-relaxed">
                {product.desc}
              </p>
              <div className=" mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">

                {product.color && (<div className="text-2xl">
                  <span className="mr-4 font-bold">Color</span>
                  <button type="button" class={`text-white bg-${product.color}-700 hover:bg-${product.color}-800 focus:outline-none focus:ring-4 focus:ring-${product.color}-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-${product.color}-600 dark:hover:bg-${product.color}-700 dark:focus:ring-${product.color}-800 `}>{product.color}</button>

                </div>)}

                {
                  product.ScreenSize && (
                    <div className="text-2xl">
                      <span className="mr-4 font-bold">Screen-Size :- </span>
                      {product.ScreenSize}
                    </div>
                  )
                }
                {
                  product.Storage && (
                    <div className="text-2xl">
                      <span className="mr-4 font-bold">Storage :- </span>
                      {product.Storage}
                    </div>
                  )
                }
                {
                  product.ram && (
                    <div className="text-2xl">
                      <span className="mr-4 font-bold">RAM :- </span>
                      {product.ram}
                    </div>
                  )
                }


                {
                  product.processor && (
                    <div className="text-2xl">
                      <span className="mr-4 font-bold">Processor :- </span>
                      {product.processor}
                    </div>
                  )
                }
                {
                  product.battery && (
                    <div className="text-2xl">
                      <span className="mr-4 font-bold">Battery :- </span>
                      {product.battery}
                    </div>
                  )
                }

                {
                  product.cellularTechnology && (
                    <div className="text-2xl">
                      <span className="mr-4 font-bold">Cellular-technology :- </span>
                      {product.cellularTechnology}
                    </div>
                  )
                }

                {
                  product.Touchscreen && (
                    <div className="text-2xl">
                      <span className="mr-4 font-bold">Touchscreen :- </span>
                      {product.Touchscreen}
                    </div>
                  )
                }

                {
                  product.DialColor && (
                    <div className="text-2xl">
                      <span className="mr-4 font-bold">DialColor :- </span>
                      {product.DialColor}
                    </div>
                  )
                }



                {
                  product.DialShape && (
                    <div className="text-2xl">
                      <span className="mr-4 font-bold">DialShape :- </span>
                      {product.DialShape}
                    </div>
                  )
                }
                {
                  product.StrapColor && (
                    <div className="text-2xl">
                      <span className="mr-4 font-bold">StrapColor :- </span>
                      {product.StrapColor}
                    </div>
                  )
                }

                {
                  product.StrapMaterial && (
                    <div className="text-2xl">
                      <span className="mr-4 font-bold">StrapMaterial :- </span>
                      {product.StrapMaterial}
                    </div>
                  )
                }

                {
                  product.ProcessorBrand && (
                    <div className="text-2xl">
                      <span className="mr-4 font-bold">ProcessorBrand :- </span>
                      {product.ProcessorBrand}
                    </div>
                  )
                }

                {
                  product.ProcessorName && (
                    <div className="text-2xl">
                      <span className="mr-4 font-bold">ProcessorName :- </span>
                      {product.ProcessorName}
                    </div>
                  )
                }

                {
                  product.SSDCapacity && (
                    <div className="text-2xl">
                      <span className="mr-4 font-bold">SSDCapacity :- </span>
                      {product.SSDCapacity}
                    </div>
                  )
                }

                {
                  product.RAM && (
                    <div className="text-2xl">
                      <span className="mr-4 font-bold">RAM :- </span>
                      {product.RAM}
                    </div>
                  )
                }

                {
                  product.BatteryBackup && (
                    <div className="text-2xl">
                      <span className="mr-4 font-bold">BatteryBackup :- </span>
                      {product.BatteryBackup}
                    </div>
                  )
                }

{
                  product.BatteryCapacity && (
                    <div className="text-2xl">
                      <span className="mr-4 font-bold">BatteryCapacity :- </span>
                      {product.BatteryCapacity}
                    </div>
                  )
                }

{
                  product.ChargingTime && (
                    <div className="text-2xl">
                      <span className="mr-4 font-bold">ChargingTime :- </span>
                      {product.ChargingTime}
                    </div>
                  )
                }



              </div>
              <div className="flex ">
                <span className="title-font font-medium text-2xl  text-white">
                  ₹{product.price}
                </span>

                <button
                  onClick={() => { buyNow(slug, 1, product.price, product.title, product.size, product.color) }}
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

  // console.log(products)
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    }, // will be passed to the page component as props
  };
}