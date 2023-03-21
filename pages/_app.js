import Navbar from '../components/nav.jsx'
import Footer from '../components/footer.jsx'

import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
  <>
  <Navbar/>
  
  <Component 
 
  {...pageProps} />
  <Footer />
  </>
  )
}
