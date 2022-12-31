import Navbar from "../Components/Navbar";
import About from "../Components/About";
import Footer from "../Components/Footer";
import Guides from "../Components/AboutPage/Guides";
import banner1 from '../images/About-image/15.jpg';
import Review from "../Components/AboutPage/Review";
import Head from "next/head";

const about = () => {

    return (
        <div style={{background: `url(${banner1.src})`,backgroundAttachment:'fixed', backgroundPosition:'center', backgroundRepeat:'no-repeat'}}>
            <Head>
        <title>About Us - Travel Next -The Best Travel Agency</title>
      </Head>
            <div className="pt-2 bg-opacity-20 bg-black">
              <Navbar />
            </div>
            {/* Navbar end */}

            {/* Heading part start */}
            <div className="bg-opacity-20 bg-black h-[300px] lg:h-[500px] flex items-center justify-center text-center">
                <div className="">
                    <h5 className="text-2xl uppercase text-primary font-semibold">The best travel agency</h5>
                    <h1 className="text-5xl font-bold uppercase text-[#fff] mt-3">We helping you find <br /> <span className="text-[#2095AE]">your dream</span> vacation</h1>
                </div>
 
            </div>
            {/* Heading part end */}

               <div className="bg-white">
                   <About />
               </div>
               
               {/* User details start */}
                  <div>
                    <Guides />
                  </div>
              {/* User details start */}

              {/* user Review start */}
              <div className="bg-opacity-20 bg-black py-10"> 
                  <Review />
              </div>
              {/* user Review end */}

              {/* Footer */}
               <div className='bg-blue-900'>
                <Footer />
            </div>
        </div>
    );
};

export default about;