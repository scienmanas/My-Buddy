import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Lottie from 'react-lottie';
import robotImage from '../../assets/robots/robot.png'
import '../../styles/generalwebsiteloader.css';


export default function GeneralWebsiteLoader() {

    const [dots, setDots] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prevDots) => (prevDots % 3) + 1);
        }, 400);

        return () => clearInterval(interval);
    }, []);


    document.body.style.backgroundColor = "#131619"

    return (
        <div>
            <div className='w-full min-h-screen flex flex-col items-center justify-center p-2 relative gap-1 overflow-hidden'>
                <div className="preloader rotate-loader loader w-40 h-40 border-4 border-red-400 rounded-full border-dotted flex items-center justify-center">
                    <div className="preloader-nest-1 rotate-loader  w-32 h-32 border-4 border-yellow-200 rounded-full border-dotted flex items-center justify-center">
                        <div className="preloader-nest-2 flex justify-center items-center border-pink-500 w-20 h-20 border-4 border-dotted rounded-full">
                            <div className="preloader-nest-3 flex justify-center items-center w-28 h-20 rounded-full border-dotted border-4 border-green-400"></div>
                        </div>
                    </div>
                </div>
                <div className="text-xl text-gray-300">
                    Loading{Array.from({ length: 3 }).map((_, index) => <span key={index} style={{ opacity: index < dots ? 1 : 0 }}>.</span>)}
                </div>
            </div>
        </div>
    )
}
