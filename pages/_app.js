import Navbar from '../components/nav'
import Slider from '../components/slider'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
  <>
  <Navbar/>
  <Slider/>
  <Component {...pageProps} />
  </>
  )
}
