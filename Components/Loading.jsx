import * as loader from '../images/lotte/liquid-4-dot-loader.json'
import Lottie from 'lottie-react'

const Loading = () => {
    return (
        <div className='w-full'>
            <Lottie animationData={loader} />
        </div>
    );
};

export default Loading;