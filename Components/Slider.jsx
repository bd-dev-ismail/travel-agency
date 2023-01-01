import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleDestinationCard from './SingleDestinationCard'

const Slider = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    (async () => {
      try {
        const tours = await axios.get(
          "http://localhost:3000/api/getPosts"
        );
        const toursData = tours.data;
        setTours(toursData)
        console.log(toursData)
      } catch (e) {
      } finally {
        setIsLoading(false)
      }
    })();
  }, [])

  if(isLoading){
    return <p>Loading...</p>
  }

  return (
    <div >
      <div className="text-center pt-10">
        <p className="text-2xl font-bold text-primary">Destinations </p>
        <h3 className="text-3xl font-bold lg:text-4xl text-secondary">Choose Your Place</h3>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3.5}
        coverflowEffect={{
          rotate: 20,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        // pagination={true}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {tours.map((tour, idx) => (
          <SwiperSlide key={idx}>
            <Link href={`/tour/${tour?._id}`}>
            {/* <div className="lg:flex gap-6 my-5 items-center justify-center " onMouseEnter={()=>setHoverEffect(true)} onMouseLeave={()=>setHoverEffect(false)}>
              <div className="relative">
                <img src={tour.image} alt="" className="mb-3 lg:mb-0" />
                <div
                  className={`flex absolute bottom-0 w-full justify-between img-card px-4 py-5 bg-black text-white ${HoverEffect ? 'bg-[#d6773780]' : 'bg-[rgba(0,0,0,.5)]'}`}
                >
                  <div>
                    <p className="text-xl font-bold italic uppercase">
                      {tour.subName}
                    </p>
                    <h3 className="text-3xl font-bold">{tour.name}</h3>
                  </div>
                  <div>
                    <p className="text-xl font-bold italic">{tour.day}-Days</p>
                    <h3 className="text-3xl font-bold">${tour.price}</h3>
                  </div>
                </div>
              </div>
            </div> */}
            <SingleDestinationCard tour={tour}/>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
