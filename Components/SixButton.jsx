import React, {useState} from 'react';
import {RiFileListFill} from 'react-icons/ri'
import {BsFillMapFill} from 'react-icons/bs'
import {ImLocation} from 'react-icons/im'
import {AiFillCamera} from 'react-icons/ai'
import {BsPeopleFill} from 'react-icons/bs'
import {FaBook} from 'react-icons/fa'
const SixButton = () => {
    let [btn, setBtn] = useState('information')
    console.log(btn)
    return (
        <ButtonSection btn={btn} setBtn={setBtn}/>
    );
};

export default SixButton;

function ButtonSection ({setBtn, btn}){
    return (
        <div className='grid grid-cols-6'>
            <div className={`border-y-[1px] font-bold border-gray-400 p-5 flex flex-col justify-center items-center cursor-pointer gap-3 duration-300 ${btn==='information'? 'scale-90 border-0  bg-blue-100 text-primary' : 'bg-white text-secondary' } `} onClick={()=> setBtn('information')}>
                <RiFileListFill />
                <p>Information</p>
            </div>
            <div className={`border-y-[1px] font-bold border-gray-400 p-5 flex flex-col justify-center items-center cursor-pointer gap-3 duration-300 ${btn==='yourplan'? 'scale-90 border-0  bg-blue-100 text-primary' : 'bg-white text-secondary' } `} onClick={()=> setBtn('yourplan')}>
                <BsFillMapFill />
                <p>Your Plan</p>
            </div>
            <div className={`border-y-[1px] font-bold border-gray-400 p-5 flex flex-col justify-center items-center cursor-pointer gap-3 duration-300 ${btn==='location'? 'scale-90 border-0  bg-blue-100 text-primary' : 'bg-white text-secondary' } `} onClick={()=> setBtn('location')}>
                <ImLocation />
                <p>Location</p>
            </div>
            <div className={`border-y-[1px] font-bold border-gray-400 p-5 flex flex-col justify-center items-center cursor-pointer gap-3 duration-300 ${btn==='gallery'? 'scale-90 border-0  bg-blue-100 text-primary' : 'bg-white text-secondary' } `} onClick={()=> setBtn('gallery')}>
                <AiFillCamera />
                <p>Gallery</p>
            </div>
            <div className={`border-y-[1px] font-bold border-gray-400 p-5 flex flex-col justify-center items-center cursor-pointer gap-3 duration-300 ${btn==='reviews'? 'scale-90 border-0  bg-blue-100 text-primary' : 'bg-white text-secondary' } `} onClick={()=> setBtn('reviews')}>
                <BsPeopleFill />
                <p>Reviews</p>
            </div>
            <div className={`border-y-[1px] font-bold border-gray-400 p-5 flex flex-col justify-center items-center cursor-pointer gap-3 duration-300 ${btn==='additional'? 'scale-90 border-0  bg-blue-100 text-primary' : 'bg-white text-secondary' } `} onClick={()=> setBtn('additional')}>
                <FaBook />
                <p>Additional</p>
            </div>
        </div>
    );
}

// function Divs({btn}) {
//     {
//         btn === 'information' &&
//     }
// }

function Information(){
    return(
        <div></div>
    )
}
function YourPlan(){
    return(
        <div></div>
    )
}
// function Information(){
//     return(
//         <div></div>
//     )
// }
// function Information(){
//     return(
//         <div></div>
//     )
// }
// function Information(){
//     return(
//         <div></div>
//     )
// }
// function Information(){
//     return(
//         <div></div>
//     )
// }