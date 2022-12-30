import { FiPhoneCall } from "react-icons/fi";
import { TiTick } from "react-icons/ti";

const Review = () => {
    return (
        <div className="flex items-center justify-between flex-col-reverse lg:flex-row-reverse px-16">
        <div className="w-full lg:w-1/2 pt-10 relative">
        <div className="carousel rounded-lg w-full lg:w-1/2  h-[500px] mx-auto">
      <div id="item1" className="carousel-item flex flex-col w-full p-5 pt-20 bg-white">
         <p className="text-primary font-semibold text-xl">TESTIMONIALS</p> <br />
         <h2 className="text-2xl font-bold text-[#0f2454] -mt-4">TRAVELERS REVIEWS</h2>
         <p className="text-secondary font-semibold mt-4">Travel dapibus asue metus the nec feusiate era the miss hendreri the vemante the lemon insan toleon nectan feugiat erat hendrerit necuis vesaire tours <br /> inilla neca ine the sene miss habitan.</p>
    
         <div className="flex items-center mt-4">
            <img src="https://duruthemes.com/demo/html/travol/img/team/06.png" style={{width:'100px'}} alt="" />
            <div className="ml-3">
                <h5 className="text-xl font-semibold">Olivia  Martin</h5>
                 <p className="font-semibold">Guest review</p>
            </div>
         </div>
      </div> 
      <div id="item2" className="carousel-item flex flex-col w-full p-5 pt-20 bg-white">
         <p className="text-primary font-semibold text-xl">TESTIMONIALS</p> <br />
         <h2 className="text-2xl font-bold text-[#0f2454] -mt-4">TRAVELERS REVIEWS</h2>
         <p className="text-secondary font-semibold mt-4">Travel dapibus asue metus the nec feusiate era the miss hendreri the vemante the lemon insan toleon nectan feugiat erat hendrerit necuis vesaire tours <br /> inilla neca ine the sene miss habitan.</p>
    
         <div className="flex items-center mt-4">
            <img src="https://duruthemes.com/demo/html/travol/img/team/04.png" style={{width:'100px'}} alt="" />
            <div className="ml-3">
                <h5 className="text-xl font-semibold">Nolan White</h5>
                 <p className="font-semibold">Guest review</p>
            </div>
         </div>
      </div>  
      <div id="item3" className="carousel-item flex flex-col w-full p-5 pt-20 bg-white">
         <p className="text-primary font-semibold text-xl">TESTIMONIALS</p> <br />
         <h2 className="text-2xl font-bold text-[#0f2454] -mt-4">TRAVELERS REVIEWS</h2>
         <p className="text-secondary font-semibold mt-4">Travel dapibus asue metus the nec feusiate era the miss hendreri the vemante the lemon insan toleon nectan feugiat erat hendrerit necuis vesaire tours <br /> inilla neca ine the sene miss habitan.</p>
    
         <div className="flex items-center mt-4">
            <img src="https://duruthemes.com/demo/html/travol/img/team/05.png" style={{width:'100px'}} alt="" />
            <div className="ml-3">
                <h5 className="text-xl font-semibold">Emily Brown</h5>
                 <p className="font-semibold">Guest review</p>
            </div>
         </div>
      </div> 
      
    </div> 
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