import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/italy.jpg";
import img5 from "../images/scotLand.jpg";
import img6 from "../images/solvenia.jpg";
const destinations = () => {
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
        <>
        <Head>
                <title>About - Travel Next -The Best Travel Agency</title>
            </Head>
            <div className='bg-blue-900 shadow-2xl'>
                <Navbar />
            </div>
        <h1 className='text-5xl font-bold mt-10 text-center text-primary border-b-4 border-secondary w-fit mx-auto'>All Locations</h1>
        <div className='grid grid-cols-3 gap-10 my-10'>
        {
            bannerSiders1.map((item, idx)=> <div key={idx}>
            <div className="lg:flex gap-6  items-center justify-center ">
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
          </div>)
        }
        </div>
        <Footer />
        </>
    );
};

export default destinations;