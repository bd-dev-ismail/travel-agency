import React, { useRef } from 'react';
import animate from '../../images/Contact/91188-contact-blue.json'
import Lottie from 'lottie-react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';


const ContactFrom = () => {
    const form = useRef();

    const handleEmailSend =(event)=>{
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
            
        }, (error) => {
            console.log(error.text);
        });
        
    }
    return (
        <div>
            <div className="bg-white">
            <div className=" ">
            <div className=" flex items-center justify-evenly flex-col lg:flex-row px-3 lg:px-14">
                    <div className="w-full max-w-2xl ">

                    <Lottie animationData={animate} />
                    </div>
                   <form ref={form} onSubmit={handleEmailSend} className="w-full h-[430px]  lg:w-1/2 bg-primary p-5 rounded">
                   <input type="text" placeholder="Enter your name" className="input mt-8 input-bordered w-full" /> 
                   <br />
                   <input type="email" placeholder="Enter email address" className="input my-8 input-bordered w-full " />
                   <br />
                   <textarea className="textarea w-full mb-8 py-4" placeholder="Type your keyword"></textarea>
                   <br />

                   <button className="btn bg-secondary mb-7">Send Message</button>
                  </form>
                </div>
            </div>

            </div>
        </div>
    );
};

export default ContactFrom;