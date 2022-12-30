

const Guides = () => {
    return (
        <div className="bg-[#0f2454] py-14 px-5 lg:px-14">
        <div className="mb-10">
        <p className=" text-[#2095AE] text-xl">T R A V E L  E X P E R T S</p>
        <h1 className="text-5xl font-bold my-2 text-[#2095AE]"><span className="text-white">MEET OUR</span> GUIDES</h1>
         
        </div>
         {/* Card area start*/}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             {/* card-1 */}
             <div className="drop-shadow-lg pb-6 relative mx-auto ">
   <div className="">
     <img
       className=""
       src="https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg?size=800x"
       alt=""
     />
   </div>
   <div className="w-1/2 mx-auto bg-primary py-4 absolute -bottom-4 right-32 rounded text-white">
     <h1 className="text-xl text-center font-bold ">
        Bappy Sheikh <br />
        Switzerland Guide
     </h1>
   </div>
 
             </div>
              {/* card-2 */}
              <div className="drop-shadow-lg pb-6 relative mx-auto ">
   <div className="">
     <img
       className=""
       src="https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg?size=800x"
       alt=""
     />
   </div>
   <div className="w-1/2 mx-auto bg-primary py-4 absolute -bottom-4 right-32 rounded text-white">
     <h1 className="text-xl text-center font-bold ">
        Harry <br />
        Switzerland Guide
     </h1>
   </div>
 
             </div>
               {/* card-3 */}
               <div className="drop-shadow-lg pb-6 relative mx-auto ">
   <div className="">
     <img
       className=""
       src="https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg?size=800x"
       alt=""
     />
   </div>
   <div className="w-1/2 mx-auto bg-primary py-4 absolute -bottom-4 right-32 rounded text-white">
     <h1 className="text-xl text-center font-bold ">
        Tom <br />
        Switzerland Guide
     </h1>
   </div>
 
             </div>
         </div>
         {/* Card area end*/}
    </div>
    );
};

export default Guides;