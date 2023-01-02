import React from 'react';
import { BsFacebook, BsFillCheckCircleFill, BsInstagram, BsLinkedin } from 'react-icons/bs';

const BlogDetails1 = () => {
    return (
        <div>
                   <img src="https://cdn.pixabay.com/photo/2022/12/10/11/05/snow-7646952_960_720.jpg" className='w-full rounded' alt="" />
                       <div className='flex items-center my-3'>
                            <img style={{ width: "100px" }} src="https://i.ibb.co/68v3PHm/avater.png" alt="" />
                          <small>
                           <span className="font-bold ">Tom Kaku</span> <br />
                         </small>
                   </div>
                    <div>
                        <h1 className='text-2xl text-secondary font-bold my-3 mt-7 px-2'>Traveling allows you to become so many different versions of yourself</h1>
                         <p className='text-xl text-gray-700 px-3 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown to printer took a galley of type and scrambled it to make a type specimen book. It has that's survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <div>
                        <h1 className='text-2xl text-secondary font-bold my-3 mt-7 px-2 '>Travel makes one modest. You see what a tiny place you occupy in the world.</h1>
                         <p className='text-xl text-gray-700 px-3 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown to printer took a galley of type and scrambled it to make a type specimen book. It has that's survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                        
                    <div className='my-10'>
                        <h2 className='text-xl text-gray-500 flex items-center'><BsFillCheckCircleFill className='text-primary mr-3'/>Lorem Ipsum is simply dummy text of the printing and typesetting</h2>

                        <h2 className='text-xl my-3 text-gray-500 flex items-center'><BsFillCheckCircleFill className='text-primary mr-3'/>Lorem Ipsum is simply dummy text of the printing and typesetting</h2>

                        <h2 className='text-xl text-gray-500 flex items-center'><BsFillCheckCircleFill className='text-primary mr-3'/>Lorem Ipsum is simply dummy text of the printing and typesetting</h2>

                        
                    </div>
                    {/* blog image */}
                    <div className='my-10 grid grid-cols-1 lg:grid-cols-2 gap-5'>
                           <div>
                                <img className='w-full' src="https://themecrazy.net/html/tourest/img/blog/blog1.png" alt="" /> 
                                <div>
                                 <p className='text-justify text-xl mt-5'>Lorem Ipsum is simply dummy text of the print and typesetting industry lorem Ipsum has been the industry's standard.</p>
                                </div>
                           </div>
                           <div>
                               <img className='w-full' src="https://themecrazy.net/html/tourest/img/blog/blog2.png" alt="" />
                               <div>
                                <p className='text-justify text-xl mt-5'>Lorem Ipsum is simply dummy text of the print and typesetting industry lorem Ipsum has been the industry's standard.</p>
                               </div>
                           </div>
                    </div>
                    <div>
                        <p className='text-xl text-justify mt-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown to printer took a galley of type and scrambled it to make.</p>
                    </div>

                    <div className='my-12 flex items-center justify-between'>
                    
                         <div className='flex items-center'>
                               <h3 className='text-xl font-bold'>Tags:</h3>
                                 <div className='ml-5'>
                                    <button className='btn btn-xs btn-outline btn-primary '>Tour</button>
                                    <button className='btn btn-xs btn-outline btn-primary mx-2'>Travel</button>
                                    <button className='btn btn-xs btn-outline btn-primary '>Lifestyle</button>
                                 </div>      
                         </div>

                         <div className='flex items-center'>
                               <h3 className='text-xl font-bold'>Share:</h3>
                                 <div className='ml-5'>
                                    <button className='btn btn-xs btn-outline btn-primary '><BsFacebook /></button>
                                    <button className='btn btn-xs btn-outline btn-primary mx-2'><BsInstagram /></button>
                                    <button className='btn btn-xs btn-outline btn-primary '><BsLinkedin /></button>
                                 </div>      
                         </div>
                    </div>
        </div>
    );
};

export default BlogDetails1;