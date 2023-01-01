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
      } catch (e) {
      } finally {
        setIsLoading(false)
      }
    })();
  }, [])
  return (
    <div>
      <div className="text-center py-10">
        <p className="text-sm font-bold text-primary">Destinations </p>
        <h3 className="text-3xl font-bold lg:text-4xl text-secondary">Choose Your Place</h3>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3.5}
        coverflowEffect={{
          rotate: 30,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {tours.map((tour, idx) => (
          <SwiperSlide key={idx}>
            <Link href='/tour'>
            <div className="lg:flex gap-6 my-10 items-center justify-center ">
              <div className="relative">
                <img src={tour.image} alt="" className="mb-3 lg:mb-0" />
                <div
                  className="flex absolute bottom-0 w-full justify-between img-card px-4 py-5 bg-black text-white"
                  style={{ backgroundColor: "rgba(0,0,0,.5)" }}
                >
                  <div>
                    <p className="text-xl font-bold italic uppercase">
                      {tour.subName}
                    </p>
                    <h3 className="text-3xl font-bold">{tour.name}</h3>
                  </div>
                  <div>
                    <p className="text-xl font-bold italic">{tour.days}-Days</p>
                    <h3 className="text-3xl font-bold">${tour.price}</h3>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider;
