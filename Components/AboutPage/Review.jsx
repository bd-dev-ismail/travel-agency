import { FiPhoneCall } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import ReviewSlider from './ReviewSlider'
const Review = () => {
    return (
        <div className="flex items-center justify-between flex-col-reverse lg:flex-row-reverse px-16">
        <div className="w-full lg:w-1/2 pt-10 relative">
        <ReviewSlider />
    <div className="flex justify-center w-full lg:w-1/2 py-2 gap-2 mx-auto absolute bottom-0 right-48">
      <a href="#item1" className="btn btn-xs">1</a> 
      <a href="#item2" className="btn btn-xs">2</a> 
      <a href="#item3" className="btn btn-xs">3</a> 
    </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold text-white ">We Provide Top Destinations Expecially <br /> For You Book Now and Enjoy!</h1>
          <div className="py-6 flex  items-center">
                 <FiPhoneCall className="text-5xl mr-2 text-white" />
                  <div>
                   <p className="text-white text-xl">Call Now</p>
                   <p className="text-white text-2xl">855 333 4444</p>
                  </div>
          </div>
          <p className="text-white flex items-center"><TiTick className="text-2xl mr-2"/> Call us, it's toll-free.</p>
        </div>
      </div>
    );
};

export default Review;