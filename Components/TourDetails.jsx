import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SixButton from "./SixButton";


const TourDetails = () => {
  let route = useRouter()
  let { id } = route.query
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const tours = await axios.get(
          `/api/getPosts`
        );
        const toursData = tours.data;
        setTours(toursData)
      } catch (e) {
      } finally {
        setIsLoading(false)
      }
    })();
  }, [])
  return (
    <div>
      <div>
        <div
          className="hero  lg:h-[60vh] h-[55vh]"
          style={{
            backgroundImage: `url(/_next/static/media/2.0a91fe80.jpg)`,
          }}
        >
          <div className="hero-overlay bg-opacity-30"></div>
          <div className="hero-content relative text-center text-white">
            {
              tours.map(tour=><div>
                <h1
                  style={{ letterSpacing: "2px" }}
                  className="mb-5 lg:text-6xl  text-5xl font-bold"
                >
                  {tour.name}
                </h1>
                <p
                  style={{ letterSpacing: ".5em" }}
                  className="text-sm uppercase "
                >
                  Amazing Tour
                </p>
              </div>)
            }
          </div>
        </div>
      </div>


    </div>
  );
};

export default TourDetails;
