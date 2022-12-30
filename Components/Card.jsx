

const Card = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className=" text-center mb-5 ">
          <h1 className="text-4xl text-secondary font-bold">
            Most Popular Tours
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
          <div className="drop-shadow-lg pb-6 w-96 bg-white rounded">
            <div className="relative">
              <img
                className=""
                src="https://themecrazy.net/html/tourest/img/tour/2.png"
                alt=""
              />
              <div className="bg-primary text-white rounded absolute top-5 left-5 text-xl font-bold px-2 w-22 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 ml-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                12 Days
              </div>
            </div>
            <div className="px-6 my-6 ">
              <div className="flex justify-between">
                <h4 className="bg-secondary text-white font-bold w-28 py-1 rounded text-[14px] text-center">
                  From $ 50
                </h4>
                <div className="rating bg-yellow-400 py-1 px-2 rounded">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-white"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-white"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-white"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-white"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-white"
                  />
                </div>
              </div>
              <h1 className="text-xl text-black font-bold mt-5">
                A good traveler has no fixed plans and is not intent on
                arriving.
              </h1>
              <p className="my-5">Kuala Lumpur, Malaysia</p>
            </div>
          </div>
          <div className="drop-shadow-lg pb-6 w-96 bg-white rounded">
            <div className="relative">
              <img
                className=""
                src="https://themecrazy.net/html/tourest/img/tour/3.png"
                alt=""
              />
              <div className="bg-primary text-white rounded absolute top-5 left-5 text-xl font-bold px-2 w-22 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 ml-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                8 Days
              </div>
            </div>
            <div className="px-6 my-6 ">
              <div className="flex justify-between">
                <h4 className="bg-secondary text-white font-bold w-28 py-1 rounded text-[14px] text-center">
                  From $ 150
                </h4>
                <div className="rating bg-yellow-400 py-1 px-2 rounded">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-white"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-white"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-white"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-white"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-white"
                  />
                </div>
              </div>
              <h1 className="text-xl text-black font-bold mt-5">
                eave nothing but footprints, take nothing but photos, kill
                nothing but time.
              </h1>
              <p className="my-5">Imam Nagar, Maldips</p>
            </div>
          </div>
          <div className="drop-shadow-lg pb-6 w-96 bg-white rounded">
            <div className="relative">
              <img
                className=""
                src="https://themecrazy.net/html/tourest/img/tour/1.png"
                alt=""
              />
              <div className="bg-primary text-white rounded absolute top-5 left-5 text-xl font-bold px-2 w-22 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 ml-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                18 Days
              </div>
            </div>
            <div className="px-6 my-6 ">
              <div className="flex justify-between">
                <h4 className="bg-secondary text-white font-bold w-28 py-1 rounded text-[14px] text-center">
                  From $ 250
                </h4>
                <div className="rating bg-yellow-400 py-1 px-2 rounded">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-white"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-white"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-white"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-white"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-white"
                  />
                </div>
              </div>
              <h1 className="text-xl text-black font-bold mt-5">
                The journey of a thousand miles begins with a single step
              </h1>
              <p className="my-5">East Europe, United State</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Card;