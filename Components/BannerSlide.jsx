import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const BannerSlide = () => {
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
    <div className="container mx-auto my-20">
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="lg:flex gap-6  items-center justify-center ">
              {tours.map((tour, idx) => (
                <div className="relative" key={idx}>
                  {/* <Image src={tour.image} alt="" className="mb-3 lg:mb-0" /> */}
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
                      <p className="text-xl font-bold italic">
                        {tour.days}-Days
                      </p>
                      <h3 className="text-3xl font-bold">${tour.price}</h3>
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
