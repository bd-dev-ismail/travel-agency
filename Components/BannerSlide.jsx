import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg"; 
import img3 from "../images/img3.jpg";
import img4 from "../images/italy.jpg";
import img5 from "../images/scotLand.jpg";
import img6 from "../images/solvenia.jpg";
import Image from "next/image";

const BannerSlide = () => {
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
  ];
  const bannerSliders2 = [
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
  ];
  const bannerSiders3 = [
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
    <div className="container mx-auto my-20">
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="lg:flex gap-6  items-center justify-center ">
              {bannerSiders1.map((item, idx) => (
                <div className="relative" key={idx}>
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
                      <p className="text-xl font-bold italic">
                        {item.days}-Days
                      </p>
                      <h3 className="text-3xl font-bold">${item.price}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:flex gap-6  items-center justify-center ">
              {bannerSliders2.map((item, idx) => (
                <div className="relative" key={idx}>
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
                      <p className="text-xl font-bold italic">
                        {item.days}-Days
                      </p>
                      <h3 className="text-3xl font-bold">${item.price}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:flex gap-6  items-center justify-center ">
              {bannerSiders3.map((item, idx) => (
                <div className="relative" key={idx}>
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
                      <p className="text-xl font-bold italic">
                        {item.days}-Days
                      </p>
                      <h3 className="text-3xl font-bold">${item.price}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BannerSlide;
