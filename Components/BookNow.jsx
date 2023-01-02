import Link from 'next/link';
import React, { useState, useEffect } from "react";
import FormDate from '../Components/FormDate';

import { format } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";

const BookNow = () => {
    const [startDate, setStartDate] =  useState(new Date());
    let [err, setErr] = useState('')
    let [book, setBook] = useState(true);
    // const [booking, setBooking] = useState({});
    //format date
      const [error, setError] = useState('');
   const date = format(startDate,'PP');
    useEffect(()=> {
        setBook(true);
    },[startDate])
    const handlerForm = async (e) => {
        e.preventDefault();
        const name = e.currentTarget.name.value;
        const email = e.currentTarget.email.value;
        const phone = e.currentTarget.phone.value;
        const location = e.currentTarget.location.value;
        const slot = e.currentTarget.slot.value;
        // console.log(email, phone, location, slot);
        const bookingData = {
            name,
            email,
            phone,
            location,
            slot,
            date,
            price: 500,
        }
       console.log(bookingData);
         fetch("https://genius-car-server-gamma.vercel.app/v2/orders", {
           method: "POST",
           headers: {
             "content-type": "application/json",
           },
           body: JSON.stringify(bookingData),
         })
           .then((res) => res.json())
           .then((data) => {
             window.location.replace(data.url);
             console.log('working')
           })
           .catch((err) => console.log(err));
    }
    let handlerCheck = () => {
        setBook(false)
    }

    return (
      <div className="-mt-10 bg-white">
        <div className=" p-10 flex flex-col justify-center items-center gap-5">
          <h1 className="text-2xl font-bold text-secondary mb-10">Book Now</h1>

          <form
            onSubmit={handlerForm}
            className="flex flex-col gap-3 w-full max-w-xs"
          >
            <div className="relative w-full max-w-xs font-semibold">
              <input
                required
                type="text"
                id="floating_email"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-l-4 border-secondary outline-0 focus:ring-0 focus:border-secondary peer"
                placeholder=" "
                name="name"
              />

              <label
                htmlFor="floating_email"
                className="absolute  text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Your Name
              </label>
            </div>
            <div className="relative w-full max-w-xs font-semibold">
              <input
                required
                type="email"
                id="floating_email"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-l-4 border-secondary outline-0 focus:ring-0 focus:border-secondary peer"
                placeholder=" "
                name="email"
              />

              <label
                htmlFor="floating_email"
                className="absolute  text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Email
              </label>
            </div>
            <div className="relative w-full max-w-xs font-semibold">
              <input
                required
                type="text"
                id="floating_mobileNo"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-l-4 border-secondary outline-0 focus:ring-0 focus:border-secondary peer"
                placeholder=" "
                name="phone"
              />
              <label
                htmlFor="floating_mobileNo"
                className="absolute  text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Mobile No.
              </label>
            </div>
            <div className="relative w-full max-w-xs font-semibold">
              <input
                required
                type="text"
                id="floating_location"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-l-4 border-secondary outline-0 focus:ring-0 focus:border-secondary peer"
                placeholder=" "
                name="location"
              />
              <label
                htmlFor="floating_location"
                className="absolute  text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Location
              </label>
            </div>
            <div className="relative w-full max-w-xs font-semibold">
              <div className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-l-4 border-secondary outline-0 focus:ring-0 focus:border-secondary peer">
                <FormDate
                  startDate={startDate}
                  setStartDate={setStartDate}
                  onChange={() => setBook(true)}
                />
              </div>
              {/* <input required type="date" id="floating_date" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-l-4 border-secondary outline-0 focus:ring-0 focus:border-secondary peer" placeholder=" " name='date' /> */}
              <label
                htmlFor="floating_date"
                className="absolute  text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Date
              </label>
            </div>
            {!book && (
              <div className="relative w-full max-w-xs font-semibold border-l-4 border-secondary">
                <select
                  className="select select-bordered w-full border-0 outline-0 focus:outline-0 text-sm text-gray-900 p-2"
                  name="slot"
                  defaultValue={"6.00AM"}
                >
                  <option value={"6.00AM"}>6.00AM</option>
                  <option value={"8.00AM"}>8.00AM</option>
                  <option value={"12.00PM"}>12.00PM</option>
                  <option value={"3.00PM"}>3.00PM</option>
                  <option value={"6.00PM"}>6.00PM</option>
                </select>
              </div>
            )}

            {err && (
              <p className="text-center font-bold text-sm text-error">{err}</p>
            )}
            <button
              className="btn border-0 btn-info text-center text-white rounded-full w-full py-2 mt-10 bg-primary"
              onClick={handlerCheck}
              disabled={!book ? true : false}
            >
              Check Availability
            </button>

            <button
              className="btn border-0 btn-info text-center text-white rounded-full w-full py-2 bg-secondary"
              type="submit"
              disabled={book ? true : false}
            >
            Confrim Booking
            </button>
          </form>
        </div>
      </div>
    );
};

export default BookNow;