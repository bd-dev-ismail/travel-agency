import React from 'react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import BlogDetails2 from '../../Components/Blogs/BlogDetails2';
import BlogDetails1 from '../../Components/Blogs/BlogDetails1';

const Blog = () => {

    return (
        <div>
          {/*  className="bg-[url('https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-fixed bg-cover" */}
          <div>

            <div className='bg-blue-900'>
                <Navbar />
            </div>

            {/* blog Details start */}
            <div className='mt-5'>

                <div className='grid lg:grid-cols-[4fr,2fr] px-10'>

                    {/* 1 */}
                <div className=''>
                    <BlogDetails1 />
                </div>

                {/* 2 */}
                <div className=' pl-4'>
                      <BlogDetails2 />
                </div>

                </div>
            </div>
            {/* blog Details End */}
            
          </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Blog;