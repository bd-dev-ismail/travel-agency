import React, {useState} from 'react';
import {RiFileListFill} from 'react-icons/ri'
import {BsFillMapFill} from 'react-icons/bs'
import {ImLocation} from 'react-icons/im'
import {AiFillCamera} from 'react-icons/ai'
import {BsPeopleFill} from 'react-icons/bs'
import {FaBook} from 'react-icons/fa'
import Additional from './Additional';
import Map from './Map';
import TourInformation from './TourInformation';
import Gallery from './Gallery';
import TourPlan from './TourPlan';
import ReviewSlider from './AboutPage/ReviewSlider';
const SixButton = () => {
    let [btn, setBtn] = useState('information')
    console.log(btn)
    const change = () => {
        setBtn("")
    }
    return (
      <div className='max-w-4xl -mt-10'>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 w-fit">
          <div
            className={` font-bold border-gray-400 p-5 flex flex-col justify-center items-center cursor-pointer gap-3 duration-300 ${
              btn === "information"
                ? "scale-100 -translate-y-3 border-0 shadow-2xl bg-blue-100 text-primary"
                : "bg-white text-secondary "
            } `}
            onClick={() => setBtn("information")}
          >
            <RiFileListFill />
            <p style={{ fontSize: "12px" }} className="uppercase">
              Information
            </p>
          </div>
          <div
            className={` font-bold border-gray-400 p-5 flex flex-col justify-center items-center cursor-pointer gap-3 duration-300 ${
              btn === "yourplan"
                ? "scale-100 -translate-y-3 border-0 shadow-2xl bg-blue-100 text-primary"
                : "bg-white text-secondary "
            } `}
            onClick={() => setBtn("yourplan")}
          >
            <BsFillMapFill />
            <p style={{ fontSize: "12px" }} className="uppercase">
              Tour Plan
            </p>
          </div>
          <div
            className={` font-bold border-gray-400 p-5 flex flex-col justify-center items-center cursor-pointer gap-3 duration-300 ${
              btn === "location"
                ? "scale-100 -translate-y-3 border-0 shadow-2xl bg-blue-100 text-primary"
                : "bg-white text-secondary "
            } `}
            onClick={() => setBtn("location")}
          >
            <ImLocation />
            <p style={{ fontSize: "12px" }} className="uppercase">
              Location
            </p>
          </div>
          <div
            className={` font-bold border-gray-400 p-5 flex flex-col justify-center items-center cursor-pointer gap-3 duration-300 ${
              btn === "gallery"
                ? "scale-100 -translate-y-3 border-0 shadow-2xl bg-blue-100 text-primary"
                : "bg-white text-secondary "
            } `}
            onClick={() => setBtn("gallery")}
          >
            <AiFillCamera />
            <p style={{ fontSize: "12px" }} className="uppercase">
              Gallery
            </p>
          </div>
          <div
            className={` font-bold border-gray-400 p-5 flex flex-col justify-center items-center cursor-pointer gap-3 duration-300 ${
              btn === "reviews"
                ? "scale-100 -translate-y-3 border-0 shadow-2xl bg-blue-100 text-primary"
                : "bg-white text-secondary "
            } `}
            onClick={() => setBtn("reviews")}
          >
            <BsPeopleFill />
            <p style={{ fontSize: "12px" }} className="uppercase">
              Reviews
            </p>
          </div>
          <div
            className={` font-bold border-gray-400 p-5 flex flex-col justify-center items-center cursor-pointer gap-3 duration-300 ${
              btn === "additional"
                ? "scale-100 -translate-y-3 border-0 shadow-2xl bg-blue-100 text-primary"
                : "bg-white text-secondary "
            } `}
            onClick={() => setBtn("additional")}
          >
            <FaBook />
            <p style={{ fontSize: "12px" }} className="uppercase">
              Additional
            </p>
          </div>
        </div>
        <div className='mt-5 p-5'>
        {
          btn === 'additional' && <Additional />
        }
        {
          btn === 'location' && <Map />
        }
        {
            btn === 'information' && <TourInformation/>
        } 
         {
            btn === 'gallery' && <Gallery />
         }
         {
          btn === 'yourplan' && <TourPlan />
         }
         {
          btn === 'reviews' && <ReviewSlider />
         }
      </div>
      </div>
    );
};

export default SixButton;
