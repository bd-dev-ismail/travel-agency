import Navbar from "../../Components/Navbar";
import TourDetails from "../../Components/TourDetails";

const index = () => {
    return (
      <div>
        <div className="absolute h-[65vh] lg:h-[95vh] z-50 w-full">
          <Navbar />
        </div>

        <TourDetails />
      </div>
    );
};

export default index;