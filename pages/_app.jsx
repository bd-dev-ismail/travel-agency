import '../styles/globals.css'
import Navbar from '../Components/Navbar'
import  { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';
import "react-datepicker/dist/react-datepicker.css";
export default function App({ Component, pageProps }) {
  return <div className='bg-white text-black'>
    
    <SessionProvider>
    <Component {...pageProps} />
    <Toaster position='top-center'/>
    </SessionProvider>
  </div>
}
