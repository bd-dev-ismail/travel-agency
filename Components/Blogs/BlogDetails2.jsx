import React from 'react';
import { BiCalendar } from 'react-icons/bi';

const BlogDetails2 = () => {
    return (
        <div>
             {/* box-1 */}
             <div className='border rounded-md'>
                          <div className='py-6 pl-8 bg-[rgb(181,217,231)] rounded'>
                               <h2 className='text-2xl font-bold text-secondary'>Categories</h2>
                          </div>
                          <div className='py-3'>
                                <div className='flex items-center justify-between text-xl px-8 mb-3'>
                                     <p>Trip & Tours</p>
                                      <p>(18)</p> 
                                </div>
                                <div className='flex items-center justify-between text-xl px-8 mb-3'>
                                     <p>Traveling</p>
                                      <p>(12)</p>
                                </div>
                                <div className='flex items-center justify-between text-xl px-8 mb-3'>
                                     <p>National Parks</p>
                                      <p>(13)</p>
                                </div>
                                <div className='flex items-center justify-between text-xl px-8 mb-3'>
                                     <p>Adventures</p>
                                      <p>(19)</p>
                                </div>
                                <div className='flex items-center justify-between text-xl px-8 mb-3'>
                                     <p>Beaches and Sea</p>
                                      <p>(25)</p>
                                </div>
                                <div className='flex items-center justify-between text-xl px-8 mb-3'>
                                     <p>Lifestyle</p>
                                      <p>(21)</p>
                                </div>
                          </div>
                     </div>
                     {/* box-2 */}
                     <div className='border rounded-md mt-10'>
                           <div className='py-6 pl-8 bg-[rgb(181,217,231)]'>
                               <h2 className='text-2xl font-bold text-secondary'>Recent Posts</h2>
                          </div>
                          {/* post-1 */}
                          <div className='flex items-center justify-between mb-4 px-3'>
                               <div>
                                   <img src="https://themecrazy.net/html/tourest/img/blog/post1.png" alt="" />
                               </div>
                               <div className='ml-3'>
                                    <p className='flex items-center text-[#029E9D]'><BiCalendar /> January 26, 2022</p>
                                    <h5 className='text-xl font-semibold text-secondary hover:text-[#029E9D]'>A journey of a thousand miles begins with a single step</h5>
                               </div>
                          </div>
                          {/* post-2 */}
                          <div className='flex items-center justify-evenly mb-4 px-3'>
                               <div>
                                   <img src="https://themecrazy.net/html/tourest/img/blog/post2.png" alt="" />
                               </div>
                               <div className='ml-3'>
                                    <p className='flex items-center text-[#029E9D]'><BiCalendar /> January 27, 2022</p>
                                    <h5 className='text-xl font-semibold text-secondary hover:text-[#029E9D]'>Travel makes one modest. You what a tiny place you occupy</h5>
                               </div>
                          </div>
                          {/* post-3 */}
                          <div className='flex items-center justify-evenly mb-4 px-3'>
                               <div>
                                   <img src="https://themecrazy.net/html/tourest/img/blog/post3.png" alt="" />
                               </div>
                               <div className='ml-3'>
                                    <p className='flex items-center text-[#029E9D]'><BiCalendar /> January 28, 2022</p>
                                    <h5 className='text-xl font-semibold text-secondary hover:text-[#029E9D]'>Traveling allows you to become so many different versions</h5>
                               </div>
                          </div>
                          {/* post-4 */}
                          <div className='flex items-center justify-evenly mb-4 px-3'>
                               <div>
                                   <img src="https://themecrazy.net/html/tourest/img/blog/post4.png" alt="" />
                               </div>
                               <div className='ml-3'>
                                    <p className='flex items-center text-[#029E9D]'><BiCalendar /> January 29, 2022</p>
                                    <h5 className='text-xl font-semibold text-secondary hover:text-[#029E9D]'>Travel is the only thing you buy that makes you richer</h5>
                               </div>
                          </div>
                          {/* post-4 */}
                     </div>

                     {/* Box-3 */}
                     <div className='border rounded-md mt-10'>
                          <div className='py-5 pl-8 bg-[rgb(181,217,231)]'>
                               <h2 className='text-2xl font-bold text-secondary'>Popular Tag</h2>
                          </div>

                          <div className='py-5 px-10'>
                              <div className=''>
                                    <button className='btn btn-xs btn-primary '>Travel</button>
                                    <button className='btn btn-xs btn-primary mx-4'>Tour</button>
                                    <button className='btn btn-xs btn-primary '>Adventure</button>
                              </div>
                              <div className='my-3'>
                                    <button className='btn btn-xs btn-primary '>Parks</button>
                                    <button className='btn btn-xs btn-primary mx-4'>Parks</button>
                                    <button className='btn btn-xs btn-primary '>Lifestyle</button>
                              </div>
                              <div className=''>
                                    <button className='btn btn-xs btn-primary '>Tourisms</button>
                                    <button className='btn btn-xs btn-primary mx-4'>Beach</button>
                                    <button className='btn btn-xs btn-primary '>Nature</button>
                              </div>
                          </div>
                     </div>

                     {/*box-4  */}
                     <div className='border rounded-md mt-10'>
                     <div className="rounded-md shadow-md ">
	<img src="https://themecrazy.net/html/tourest/img/blog/Black_Friday.png" alt="" className="object-cover object-center w-full rounded-t-md  " />
	
</div>
                     </div>
        </div>
    );
};

export default BlogDetails2;