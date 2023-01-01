import { FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';
import aboutUs from '../images/about.jpeg';

const About = () => {
    return (
      <div>
        <div className="px-4 text-primary py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
              <div className="max-w-xl mb-6">
                <div>
                  <p
                    style={{ letterSpacing: "4px" }}
                    className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-gray-200 uppercase "
                  >
                    The Best Travel Agency
                  </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-primary sm:text-5xl sm:leading-none">
                  Discover The <span className="text-gray-200">World </span>{" "}
                  <br /> With Our Guide
                </h2>
                <p className="text-base text-gray-200 md:text-sm">
                  You can choose any country with good tourism. Agency elementum
                  sesue the aucan vestibulum aliquam justo in sapien rutrum
                  volutpat. Donec in quis the pellentesque velit. Donec id velit
                  ac arcu posuere blane.
                </p>
                <p className="text-base text-gray-200 md:text-sm mt-5">
                  Hotel ut nisl quam nestibulum ac quam nec odio elementum
                  ceisue the miss varius natoque penatibus et magnis dis
                  parturient monte.
                </p>
              </div>
              <div >
                <div >
                  <p className="flex items-center ">
                    {" "}
                    <FaCheckCircle className=" mr-2 text-gray-200" /> 20Years
                    Experience
                  </p>
                  <p className="flex items-center">
                    {" "}
                    <FaCheckCircle className=" mr-2 text-gray-200" />
                    150+ Tour Destinations
                  </p>
                </div>
                <p className="text-gray-200 mt-5 font-semibold">
                  Call for Infomation
                </p>
                <div className="flex items-center mt-1">
                  <FaPhoneAlt className="mr-3  text-xl text-primary" />
                  <p className="text-xl text-primary">998 (455) 478</p>
                </div>
              </div>
            </div>
            <div className="relative w-full lg:w-1/2">
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={aboutUs.src}
                alt=""
              />
              {/* <a
                href="/"
                className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
              ></a> */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;