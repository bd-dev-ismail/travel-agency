
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
import BookNow from '../Components/BookNow'
import Map from '../Components/Map'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Travel Next -The Best Travel Agency</title>
      </Head>
      <div className='absolute z-50 w-full'>
        <Navbar />
      </div>
      <div className=''>
        <MainBanner />
      </div>
<Map/>
       {/* six button div  */}
      <div className='my-10 max-w-4xl mx-auto'>
        <SixButton />
        <BookNow />
      </div>
<h1>adada</h1>

      <div className="hidden lg:block">
        <Slider />
      </div>

      <div className="block lg:hidden">
        <BannerSlide />
      </div>

      <div>
        <Card />
      </div>

      <div>
        <LotteBanner />
      </div>
      <div className="my-10">
        <Stars />
      </div>
      <div>
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
    </>
  );
}
