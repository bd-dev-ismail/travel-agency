import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import banner1 from '../images/1.jpg';
import banner2 from '../images/2.jpg';
import banner3 from '../images/3.jpg';
import { FaSearchLocation } from "react-icons/fa";

const MainBanner = () => {
  return (
    <div>
      <Swiper
        loop={true}
        slidesPerView={1}
        modules={[Autoplay]}
        className="mySwiper"
        autoplay
      >
        <SwiperSlide>
          <div
            className="hero  lg:h-[90vh] h-[55vh]"
            style={{
              backgroundImage: `url(${banner1.src})`,
            }}
          >
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content relative text-center text-white">
              <div>
                <p
                  style={{ letterSpacing: ".5em" }}
                  className="text-sm uppercase "
                >
                  Let's travel the world with us
                </p>
                <h1
                  style={{ letterSpacing: "2px" }}
                  className="mb-5 lg:text-6xl  text-5xl font-bold"
                >
                  Explore The World <br /> With{" "}
                  <span
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "1px #fff",
                    }}
                  >
                    Travol
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:absolute bottom-[20%] w-full items-center">
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
                <button className="btn rounded-none btn-primary hover:btn-secondary w-full max-w-xs">
                  <FaSearchLocation className="mr-3" /> Find Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero  lg:h-[90vh] h-[55vh]"
            style={{
              backgroundImage: `url(${banner2.src})`,
            }}
          >
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content relative text-center text-white">
              <div>
                <p
                  style={{ letterSpacing: ".5em" }}
                  className="text-sm uppercase "
                >
                  Let's travel the world with us
                </p>
                <h1
                  style={{ letterSpacing: "2px" }}
                  className="mb-5 lg:text-6xl  text-5xl font-bold"
                >
                  Explore The World <br /> With{" "}
                  <span
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "1px #fff",
                    }}
                  >
                    Travol
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:absolute bottom-[20%] w-full items-center">
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
                <button className="btn rounded-none btn-primary hover:btn-secondary w-full max-w-xs">
                  <FaSearchLocation className="mr-3" /> Find Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero  lg:h-[90vh] h-[55vh]"
            style={{
              backgroundImage: `url(${banner3.src})`,
            }}
          >
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content relative text-center text-white">
              <div>
                <p
                  style={{ letterSpacing: ".5em" }}
                  className="text-sm uppercase "
                >
                  Let's travel the world with us
                </p>
                <h1
                  style={{ letterSpacing: "2px" }}
                  className="mb-5 lg:text-6xl  text-5xl font-bold"
                >
                  {" "}
                  <span
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "1px #fff",
                    }}
                  >
                    Discover
                  </span>{" "}
                  The World <br /> With Our Guide
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:absolute bottom-[20%] w-full items-center">
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
                <button className="btn rounded-none btn-primary hover:btn-secondary w-full max-w-xs">
                  <FaSearchLocation className="mr-3" /> Find Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainBanner;
