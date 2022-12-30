import React from "react";
import { FaSearchLocation } from "react-icons/fa";

const FindNow = () => {
  return (
    <div className="flex justify-center lg:absolute bottom-40 z-50 w-full items-center">
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
            <option className=" bg-primary text-white">2-3 Days Tour</option>
            <option className=" bg-primary text-white">2-4 Days Tour</option>
            <option className=" bg-primary text-white">4-6 Days Tour</option>
            <option className=" bg-primary text-white">7+ Days Tour</option>
          </select>
        </div>
        <div>
          <button className="btn rounded-none btn-secondary hover:btn-primary w-full max-w-xs">
            <FaSearchLocation className="mr-3" /> Find Now
          </button>
        </div>
      </div>
    </div>
  );
};


export default FindNow;
