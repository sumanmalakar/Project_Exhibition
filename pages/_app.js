import Navbar from '../components/nav.jsx'
import Footer from '../components/footer.jsx'

import '../styles/globals.css'
import { useState, useEffect } from 'react'


export default function App({ Component, pageProps }) {

  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {

    try {

      // if cart is already present in localStorage
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
      }

    } catch (error) {
      console.log(error);
      localStorage.clear();
    }

    // console.log(Object.keys(cart))

  }, [])

  // save cart's to localStorage and calculate subtotal
  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));

    // calculating sub total
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    } 

    setSubTotal(subt);

  }

  // adding a new item to the cart
  const addToCart = (itemCode, qty, price, name, size, varient) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, varient }
    }

    // update the state variable
    setCart(newCart);
    // store cart in local storage
    saveCart(newCart)

  }

  // remove particular item from cart
  const removeFromCart = (itemCode, qty, price, name, size, varient) => {
    let newCart = cart;

    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }

    // if cart qty is already zero
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode]
    }

    setCart(newCart);
    // store cart in local storage
    saveCart(newCart)

  }

  // clear all the item from cart
  const clearCart = () => {
    setCart({})
    saveCart({})
    console.log("Cart is cleard!")
  }


  return (<>
    <Navbar
      cart={cart}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      clearCart={clearCart}
      subTotal={subTotal}
    />

    <Component
      cart={cart}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      clearCart={clearCart}
      subTotal={subTotal}
      {...pageProps}
    />
  <Footer />
  </>
  )
}
