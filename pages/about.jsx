import Head from 'next/head';
import React from 'react';
import About from '../Components/About';
import Footer from '../Components/Footer';
import LotteBanner from '../Components/LotteBanner';
import Navbar from '../Components/Navbar';

const about = () => {
    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <Head>
                <title>About - Travel Next -The Best Travel Agency</title>
            </Head>
            <div className='bg-blue-900 shadow-2xl'>
                <Navbar />
            </div>
            <div>
                <About />
            </div>
            <Footer />
        </div>
    );
};

export default about;