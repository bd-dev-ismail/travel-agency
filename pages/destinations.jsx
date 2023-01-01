import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer';
import Loading from '../Components/Loading';
import Navbar from '../Components/Navbar';
import SingleDestinationCard from '../Components/SingleDestinationCard'
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/italy.jpg";
import img5 from "../images/scotLand.jpg";
import img6 from "../images/solvenia.jpg";
const destinations = () => {
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



  return (
    <div className="bg-[url('https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-fixed bg-cover">
      <Head>
        <title>Destinations - Travel Next -The Best Travel Agency</title>
      </Head>
      <div className='backdrop-blur-sm'>
      <div className=''>
        <Navbar />
      </div>
      <h1 className='text-5xl font-bold mt-10 text-center text-secondary border-secondary w-fit mx-auto'>All Locations</h1>
      {isLoading ?
        <div className="max-w-sm mx-auto opacity-50 py-20">
          <Loading />
        </div> :
        <>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 px-2'>
            {
              tours.map((tour, idx) => <div key={idx}>
                <Link href={`/tour/${tour._id}`}>
                  <SingleDestinationCard tour={tour} />
                </Link>
              </div>)
            }
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 px-2'>
            {
              tours.map((tour, idx) => <div key={idx}>
                <Link href={`/tour/${tour._id}`}>
                  <SingleDestinationCard tour={tour} />
                </Link>
              </div>)
            }
          </div>
        </>
      }
      <Footer />
      </div>
    </div>
  );
};

export default destinations;