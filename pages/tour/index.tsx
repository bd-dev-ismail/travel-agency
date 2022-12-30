import Navbar from "../../Components/Navbar";
import SixButton from "../../Components/SixButton";
import TourDetails from "../../Components/TourDetails";

const Tour = () => {
    return (
      <div>
        <div className="absolute h-[65vh] lg:h-[95vh] z-50 w-full">
          <Navbar />
        </div>

        <TourDetails />
        {/* <SixButton/> */}
      </div>
    );
};

export default Tour;