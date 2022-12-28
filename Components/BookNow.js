import Link from 'next/link';
import React, {useState} from 'react';

const BookNow = () => {
    let [err, setErr] = useState('')

    let handlerForm = e => {
        e.preventDefault()
    }

    return (
        <div>
            <div className=' p-10 flex flex-col justify-center items-center gap-5'>
                    <h1 className='text-2xl font-bold text-secondary mb-10'>Book Now</h1>

                    <form onSubmit={handlerForm} className='flex flex-col gap-3 w-full max-w-xs'>
                        <div className="relative w-full max-w-xs font-semibold">
                            <input type="text" id="floating_email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-l-4 border-secondary outline-0 focus:ring-0 focus:border-secondary peer" placeholder=" " name='email' />
                            <label htmlFor="floating_email" className="absolute  text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                        </div>
                        <div className="relative w-full max-w-xs font-semibold">
                            <input type="text" id="floating_email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-l-4 border-secondary outline-0 focus:ring-0 focus:border-secondary peer" placeholder=" " name='email' />
                            <label htmlFor="floating_email" className="absolute  text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                        </div>
                        <div className="relative w-full max-w-xs font-semibold">
                            <input type="text" id="floating_email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-l-4 border-secondary outline-0 focus:ring-0 focus:border-secondary peer" placeholder=" " name='email' />
                            <label htmlFor="floating_email" className="absolute  text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                        </div>
                        <div className="relative w-full max-w-xs font-semibold">
                            <input type="text" id="floating_email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-l-4 border-secondary outline-0 focus:ring-0 focus:border-secondary peer" placeholder=" " name='email' />
                            <label htmlFor="floating_email" className="absolute  text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                        </div>
                        
                        {
                            err && <p className='text-center font-bold text-sm text-error'>{err}</p>
                        }
                        <input className='btn border-0 btn-info text-center text-white rounded-full w-full py-2 mt-10 bg-secondary' type='submit' value='SUBMIT' />
                        <Link href='/user/register' className='btn border-0 btn-link text-info text-center w-full mt-0'>New Member?</Link>
                    </form>
                </div>
        </div>
    );
};

export default BookNow;