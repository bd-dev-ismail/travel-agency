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
    <>
      <Head>
        <title>About - Travel Next -The Best Travel Agency</title>
      </Head>
      <div className='bg-blue-900 shadow-2xl'>
        <Navbar />
      </div>
      <h1 className='text-5xl font-bold mt-10 text-center text-primary border-b-4 border-secondary w-fit mx-auto'>All Locations</h1>
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
    </>
  );
};

export default destinations;