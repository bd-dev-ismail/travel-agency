import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/italy.jpg";
import img5 from "../images/scotLand.jpg";
import img6 from "../images/solvenia.jpg";
import Image from "next/image";


const Slider = () => {
    const bannerSiders1 = [
      {
        img: img1,
        name: "Grand Turkey",
        subName: "Turkey",
        days: 8,
        price: 205,
      },
      {
        img: img2,
        name: "Grand Spain Madrid",
        subName: "Spain",
        days: 9,
        price: 305,
      },
      {
        img: img3,
        name: "Swiss Alps Trip",
        subName: "Austria, Switzerland",
        days: 13,
        price: 400,
      },
      {
        img: img4,
        name: "Grand Italy",
        subName: "Italy",
        days: 8,
        price: 300,
      },
      {
        img: img5,
        name: " UK Trip",
        subName: "England, Scotland, Wales",
        days: 13,
        price: 500,
      },
      {
        img: img6,
        name: "East Europe",
        subName: "Solvenia, Hungary, czech",
        days: 10,
        price: 280,
      },
    ];
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
        {bannerSiders1.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Link href='/tour'>
            <div className="lg:flex gap-6 my-10 items-center justify-center ">
              <div className="relative">
                <Image src={item.img} alt="" className="mb-3 lg:mb-0" />
                <div
                  className="flex absolute bottom-0 w-full justify-between img-card px-4 py-5 bg-black text-white"
                  style={{ backgroundColor: "rgba(0,0,0,.5)" }}
                >
                  <div>
                    <p className="text-xl font-bold italic uppercase">
                      {item.subName}
                    </p>
                    <h3 className="text-3xl font-bold">{item.name}</h3>
                  </div>
                  <div>
                    <p className="text-xl font-bold italic">{item.days}-Days</p>
                    <h3 className="text-3xl font-bold">${item.price}</h3>
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
