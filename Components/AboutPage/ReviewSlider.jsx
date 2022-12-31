import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const ReviewSlider = () => {


    return (
        <>
            <Swiper
                loop={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div id="item1" className="flex flex-col w-full p-10 lg:p-20 bg-white">
                        <p className="text-primary font-semibold text-xl">TESTIMONIALS</p> <br />
                        <h2 className="text-2xl font-bold text-[#0f2454] -mt-4">TRAVELERS REVIEWS</h2>
                        <p className="text-secondary font-semibold mt-4">Travel dapibus asue metus the nec feusiate era the miss hendreri the vemante the lemon insan toleon nectan feugiat erat hendrerit necuis vesaire tours inilla neca ine the sene miss habitan.</p>

                        <div className="flex items-center mt-4">
                            <img src="https://duruthemes.com/demo/html/travol/img/team/06.png" style={{ width: '100px' }} alt="" />
                            <div className="ml-3">
                                <h5 className="text-xl font-semibold">Olivia  Martin</h5>
                                <p className="font-semibold">Guest review</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="item2" className="flex flex-col w-full p-20 bg-white">
                        <p className="text-primary font-semibold text-xl">TESTIMONIALS</p> <br />
                        <h2 className="text-2xl font-bold text-[#0f2454] -mt-4">TRAVELERS REVIEWS</h2>
                        <p className="text-secondary font-semibold mt-4">Travel dapibus asue metus the nec feusiate era the miss hendreri the vemante the lemon insan toleon nectan feugiat erat hendrerit necuis vesaire tours inilla neca ine the sene miss habitan.</p>

                        <div className="flex items-center mt-4">
                            <img src="https://duruthemes.com/demo/html/travol/img/team/04.png" style={{ width: '100px' }} alt="" />
                            <div className="ml-3">
                                <h5 className="text-xl font-semibold">Nolan White</h5>
                                <p className="font-semibold">Guest review</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="item3" className="flex flex-col w-full p-20 bg-white">
                        <p className="text-primary font-semibold text-xl">TESTIMONIALS</p> <br />
                        <h2 className="text-2xl font-bold text-[#0f2454] -mt-4">TRAVELERS REVIEWS</h2>
                        <p className="text-secondary font-semibold mt-4">Travel dapibus asue metus the nec feusiate era the miss hendreri the vemante the lemon insan toleon nectan feugiat erat hendrerit necuis vesaire tours inilla neca ine the sene miss habitan.</p>

                        <div className="flex items-center mt-4">
                            <img src="https://duruthemes.com/demo/html/travol/img/team/05.png" style={{ width: '100px' }} alt="" />
                            <div className="ml-3">
                                <h5 className="text-xl font-semibold">Emily Brown</h5>
                                <p className="font-semibold">Guest review</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default ReviewSlider;