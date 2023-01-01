
import { Inter } from '@next/font/google'
import Head from 'next/head'
import About from '../Components/About'

import BannerSlide from '../Components/BannerSlide'
import Blog from '../Components/Blog'
import Card from '../Components/Card'
import WhyChoose from '../Components/WhyChoose'
import Footer from '../Components/Footer'
import LotteBanner from '../Components/LotteBanner'
import MainBanner from '../Components/MainBanner'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Stars from '../Components/Stars'
import WhyUs from '../Components/WhyUs'
import SixButton from '../Components/SixButton'
import { FaSearchLocation } from 'react-icons/fa'
import FindNow from '../Components/FindNow'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Travel Next -The Best Travel Agency</title>
      </Head>
      <div>
        <div className='absolute z-50 w-full'>
          <Navbar />
        </div>
        <div className=''>
          <MainBanner />
          <FindNow />
        </div>
        <div className="hidden lg:block">
          <Slider />
        </div>
        <div className="block lg:hidden">
          <BannerSlide />
        </div>
        <div className='scale-105'>
          <LotteBanner />
        </div>

        <div>
          <Card />
        </div>


        <div className="">
          <Stars />
        </div>
        <div className='bg-primary'>
          <About />
        </div>
        <div>
          <WhyChoose />
        </div>

        
        <div>
          <Blog />
        </div>
        <>
          <Footer />
        </>
      </div>
    </>
  );
}
