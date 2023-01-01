import SixButton from "./SixButton";


const TourDetails = () => {
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
              <div>
                <h1
                  style={{ letterSpacing: "2px" }}
                  className="mb-5 lg:text-6xl  text-5xl font-bold"
                >
                  Austria, Switzerland
                </h1>
                <p
                  style={{ letterSpacing: ".5em" }}
                  className="text-sm uppercase "
                >
                  Amazing Tour
                </p>
              </div>
            </div>
          </div>
        </div>
     
     
      </div>
    );
};

export default TourDetails;
