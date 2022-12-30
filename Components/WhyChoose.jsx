import React from 'react';
import {AiFillStar, AiFillLike} from 'react-icons/ai'
import {GiEarthAmerica} from 'react-icons/gi'
const WhyChoose = () => {
    return (
        <div className={`w-full bg-[url(https://themes.themegoods.com/altair/demo/wp-content/uploads/2014/10/1600x1200-12.jpg)] bg-cover lg:p-20 sm:p-10 p-5 text-center text-black`}>
            <h1 className='text-white mb-20 font-bold text-3xl'>WHY CHOOSE US</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-20 max-w-5xl mx-auto'>
                {/* 1st div  */}
                <div className='p-5 bg-white'>
                    <div className='w-20 h-20 bg-red-700 rounded-full mx-auto -mt-[60px] mb-5 flex justify-center items-center'><p className='text-white text-2xl'><AiFillStar/></p></div>
                    <h1 className='text-2xl font-semibold'>Handpicked Hotels</h1>
                    <p className='my-2'>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                    <p className='text-red-700 cursor-pointer'>Learn More</p>
                </div>

                {/* 2nd div  */}
                <div className='p-5 bg-white'>
                    <div className='w-20 h-20 bg-red-700 rounded-full mx-auto -mt-[60px] mb-5 flex justify-center items-center'><p className='text-white text-2xl'><GiEarthAmerica/></p></div>
                    <h1 className='text-2xl font-semibold'>World Class Service</h1>
                    <p className='my-2'>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                    <p className='text-red-700 cursor-pointer'>Learn More</p>
                </div>

                {/* 3rd div  */}
                <div className='p-5 bg-white'>
                    <div className='w-20 h-20 bg-red-700 rounded-full mx-auto -mt-[60px] mb-5 flex justify-center items-center'><p className='text-white text-2xl'><AiFillLike/></p></div>
                    <h1 className='text-2xl font-semibold'>Best Price Guarantee</h1>
                    <p className='my-2'>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                    <p className='text-red-700 cursor-pointer'>Learn More</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;