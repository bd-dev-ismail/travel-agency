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
const SixButton = () => {
    let [btn, setBtn] = useState('information')
    console.log(btn)
    const change = () => {
        setBtn("")
    }
    return (
      <div className='max-w-4xl'>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6">
          <div
            className={` shadow-2xl font-bold border-gray-400 p-5 flex flex-col justify-center items-center cursor-pointer gap-3 duration-300 ${
              btn === "information"
                ? "scale-90 border-0  bg-blue-100 text-primary"
                : "bg-white text-secondary"
            } `}
            onClick={() => setBtn("information")}
          >
            <RiFileListFill />
            <p style={{ fontSize: "12px" }} className="uppercase">
              Information
            </p>
          </div>
          <div
            className={`shadow-2xl font-bold border-gray-400 p-5 flex flex-col justify-center items-center cursor-pointer gap-3 duration-300 ${
              btn === "yourplan"
                ? "scale-90 border-0  bg-blue-100 text-primary"
                : "bg-white text-secondary"
            } `}
            onClick={() => setBtn("yourplan")}
          >
            <BsFillMapFill />
            <p style={{ fontSize: "12px" }} className="uppercase">
              Tour Plan
            </p>
          </div>
          <div
            className={`shadow-2xl font-bold border-gray-400 p-5 flex flex-col justify-center items-center cursor-pointer gap-3 duration-300 ${
              btn === "location"
                ? "scale-90 border-0  bg-blue-100 text-primary"
                : "bg-white text-secondary"
            } `}
            onClick={() => setBtn("location")}
          >
            <ImLocation />
            <p style={{ fontSize: "12px" }} className="uppercase">
              Location
            </p>
          </div>
          <div
            className={`shadow-2xl font-bold border-gray-400 p-5 flex flex-col justify-center items-center cursor-pointer gap-3 duration-300 ${
              btn === "gallery"
                ? "scale-90 border-0  bg-blue-100 text-primary"
                : "bg-white text-secondary"
            } `}
            onClick={() => setBtn("gallery")}
          >
            <AiFillCamera />
            <p style={{ fontSize: "12px" }} className="uppercase">
              Gallery
            </p>
          </div>
          <div
            className={`shadow-2xl font-bold border-gray-400 p-5 flex flex-col justify-center items-center cursor-pointer gap-3 duration-300 ${
              btn === "reviews"
                ? "scale-90 border-0  bg-blue-100 text-primary"
                : "bg-white text-secondary"
            } `}
            onClick={() => setBtn("reviews")}
          >
            <BsPeopleFill />
            <p style={{ fontSize: "12px" }} className="uppercase">
              Reviews
            </p>
          </div>
          <div
            className={`shadow-2xl font-bold border-gray-400 p-5 flex flex-col justify-center items-center cursor-pointer gap-3 duration-300 ${
              btn === "additional"
                ? "scale-90 border-0  bg-blue-100 text-primary"
                : "bg-white text-secondary"
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
      </div>
      </div>
    );
};

export default SixButton;
