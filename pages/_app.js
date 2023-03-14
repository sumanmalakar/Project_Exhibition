import Navbar from '../components/nav'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
  <>
  <Navbar/>
  <Component {...pageProps} />
  </>
  )
}
