import Link from 'next/link';
import React, { useState } from 'react';

const BookNow = () => {
    let [err, setErr] = useState('')
    let [book, setBook] = useState(true)

    let handlerForm = e => {
        e.preventDefault()
    }
    let handlerCheck = () => {
        setBook(false)
    }

    return (
        <div className='-mt-10 bg-white'>
            <div className=' p-10 flex flex-col justify-center items-center gap-5'>
                <h1 className='text-2xl font-bold text-secondary mb-10'>Book Now</h1>

                <form onSubmit={handlerForm} className='flex flex-col gap-3 w-full max-w-xs'>
                    <div className="relative w-full max-w-xs font-semibold">
                        <input required type="text" id="floating_email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-l-4 border-secondary outline-0 focus:ring-0 focus:border-secondary peer" placeholder=" " name='email' />
                        <label htmlFor="floating_email" className="absolute  text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                    </div>
                    <div className="relative w-full max-w-xs font-semibold">
                        <input required type="text" id="floating_mobileNo" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-l-4 border-secondary outline-0 focus:ring-0 focus:border-secondary peer" placeholder=" " name='mobileNo' />
                        <label htmlFor="floating_mobileNo" className="absolute  text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Mobile No.</label>
                    </div>
                    <div className="relative w-full max-w-xs font-semibold">
                        <input required type="text" id="floating_location" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-l-4 border-secondary outline-0 focus:ring-0 focus:border-secondary peer" placeholder=" " name='location' />
                        <label htmlFor="floating_location" className="absolute  text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Location</label>
                    </div>
                    <div className="relative w-full max-w-xs font-semibold">
                        <input required type="date" id="floating_date" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-l-4 border-secondary outline-0 focus:ring-0 focus:border-secondary peer" placeholder=" " name='date' onChange={()=>setBook(true)}/>
                        <label htmlFor="floating_date" className="absolute  text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Date</label>
                    </div>
                    {
                        !book && <div className="relative w-full max-w-xs font-semibold border-l-4 border-secondary">
                        <select className="select select-bordered w-full border-0 outline-0 focus:outline-0 text-sm text-gray-900 p-2" name='slot' defaultValue={null}>
                            <option value={'time1'}>time1</option>
                            <option value={'time2'}>time2</option>
                            <option value={'time3'}>time3</option>
                            <option value={'time4'}>time4</option>
                            <option value={'time5'}>time5</option>
                        </select>
                    </div>
                    }

                    {
                        err && <p className='text-center font-bold text-sm text-error'>{err}</p>
                    }
                    <button className='btn border-0 btn-info text-center text-white rounded-full w-full py-2 mt-10 bg-primary' onClick={handlerCheck}>Check Availability</button>
                    <input className='btn border-0 btn-info text-center text-white rounded-full w-full py-2 bg-secondary' type='submit' value='BOOK' disabled={book ? true : false} />
                </form>
            </div>
        </div>
    );
};

export default BookNow;