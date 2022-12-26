
import { Inter } from '@next/font/google'
import About from '../Components/About'

import BannerSlide from '../Components/BannerSlide'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import MainBanner from '../Components/MainBanner'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Stars from '../Components/Stars'
import WhyUs from '../Components/WhyUs'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <div className="hidden lg:block">
        <Slider />
      </div>
      <div className='block lg:hidden'>
        <BannerSlide />
      </div>
      <div>
        <Card />
      </div>
      <div className="my-10">
        <Stars />
      </div>
      <div>
        <About />
      </div>
      <>
      <Footer/>
      </>
    </>
  );
}
