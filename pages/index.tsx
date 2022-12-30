
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
import { FaSearchLocation } from 'react-icons/fa'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Travel Next -The Best Travel Agency</title>
        </Head>
        <div className="absolute h-[65vh] lg:h-[95vh] z-50 w-full">
          <Navbar />
          <div className="flex justify-center z-50 absolute bottom-0 lg:bottom-[20%] w-full items-center">
            <div className="grid grid-cols-1 md:grid-cols-4">
              <div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input rounded-none w-full max-w-xs"
                />
              </div>
              <div>
                <select className="select rounded-none w-full max-w-xs">
                  <option disabled className=" bg-primary text-white" selected>
                    Destination
                  </option>
                  <option className=" bg-primary text-white">Greeces </option>
                  <option className=" bg-primary text-white">London</option>
                  <option className=" bg-primary text-white">Maldips</option>
                  <option className=" bg-primary text-white">Paris</option>
                  <option className=" bg-primary text-white">Rome</option>
                </select>
              </div>
              <div>
                <select className="select rounded-none  w-full max-w-xs">
                  <option className=" bg-primary text-white" disabled selected>
                    Duration
                  </option>
                  <option className=" bg-primary text-white">1 Day Tour</option>
                  <option className=" bg-primary text-white">
                    2-3 Days Tour
                  </option>
                  <option className=" bg-primary text-white">
                    2-4 Days Tour
                  </option>
                  <option className=" bg-primary text-white">
                    4-6 Days Tour
                  </option>
                  <option className=" bg-primary text-white">
                    7+ Days Tour
                  </option>
                </select>
              </div>
              <div>
                <button className="btn rounded-none btn-secondary hover:btn-primary w-full max-w-xs">
                  <FaSearchLocation className="mr-3" /> Find Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <MainBanner />
        </div>

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
      </div>
    </>
  );
}
