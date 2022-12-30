import React, { useRef } from 'react';
import animate from '../../images/Contact/91188-contact-blue.json'
import Lottie from 'lottie-react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';


const ContactFrom = () => {
    const form = useRef();

    const handleEmailSend = (event) => {
        event.preventDefault();

        emailjs.sendForm(
            'service_ltuwoka',
            'template_h8zvr1s',
            form.current,
            'NVVeZcHJEzEI9RFr2'

        )
            .then((result) => {
                console.log(result.text);
                toast.success('submitted successfully')
                event.target.reset()
            }, (error) => {
                toast.error(error.text)
                event.target.reset()
            });

    }
    return (
        <div>
            <div className="backdrop-blur-sm">
                <div className=" ">
                    <div className=" flex items-center justify-evenly flex-col lg:flex-row px-3 lg:px-14">
                        <div className="w-full max-w-2xl ">

                            <Lottie animationData={animate} />
                        </div>
                        <form ref={form} onSubmit={handleEmailSend} className="w-full  lg:w-1/2  p-5 rounded">
                            <div className='sm:flex justify-between gap-5'>
                                <input required type="text" placeholder="Enter your name" className="input mt-8 p-6 bg-primary text-secondary font-bold border-y-4 border-secondary focus:outline-0 input-bordered w-full placeholder:text-gray-300" />

                                <input required type="email" placeholder="Enter email address" className="input mt-8 p-6 bg-primary text-secondary font-bold border-y-4 border-secondary focus:outline-0 input-bordered w-full placeholder:text-gray-300" />
                            </div>
                            <br />
                            <textarea required className="textarea mb-8 p-6 bg-primary text-secondary font-bold border-y-4 border-secondary focus:outline-0 input-bordered w-full placeholder:text-gray-300" placeholder="Type Your Message"></textarea>
                            <br />

                            <input type={'submit'} className="btn btn-secondary mb-7 w-full" value={'Send Message'} />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactFrom;