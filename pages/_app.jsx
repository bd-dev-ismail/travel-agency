import '../styles/globals.css'
import Navbar from '../Components/Navbar'
import  { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return <div className='bg-white text-black'>
    <Component {...pageProps} />
    <Toaster position='top-center'/>
  </div>
}
