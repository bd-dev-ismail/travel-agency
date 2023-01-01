import React, { useState } from 'react';

const SingleDestinationCard = ({tour}) => {
    const [HoverEffect, setHoverEffect] = useState(false);

    return (
        <div className="lg:flex gap-6 my-5 items-center justify-center " onMouseEnter={()=>setHoverEffect(true)} onMouseLeave={()=>setHoverEffect(false)}>
              <div className="relative">
                <img src={tour?.image} alt="" className="mb-3 lg:mb-0" />
                <div
                  className={`flex absolute bottom-0 w-full justify-between img-card px-4 py-5 bg-black text-white ${HoverEffect ? 'bg-[#ff660080]' : 'bg-[rgba(0,0,0,.5)]'}`}
                >
                  <div>
                    <p className="text-xl font-bold italic uppercase">
                      {tour?.subName}
                    </p>
                    <h3 className="text-3xl font-bold">{tour?.name}</h3>
                  </div>
                  <div>
                    <p className="text-xl font-bold italic">{tour?.day}-Days</p>
                    <h3 className="text-3xl font-bold">${tour?.price}</h3>
                  </div>
                </div>
              </div>
            </div>
    );
};

export default SingleDestinationCard;