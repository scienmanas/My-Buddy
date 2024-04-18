import React from 'react'
import '../../styles/poweredby.css';
import googleGemini from '../../assets/landing/poweredby/gemini.svg';
import vercel from '../../assets/landing/poweredby/vercel.png';
import github from '../../assets/landing/poweredby/github.png';
import lottie from '../../assets/landing/poweredby/lottiefiles.png';
import tailwindCSS from '../../assets/landing/poweredby/tailwind.svg';
import render from '../../assets/landing/poweredby/render.svg';
import mondoDb from '../../assets/landing/poweredby/mongodb.png'
import cloudinary from '../../assets/landing/poweredby/cloudinary.png'


export default function PoweredBy() {
    return (
        <div className='powered-by-section flex flex-col items-center my-9 w-full h-fit  gap-11 sm:gap-y-12 lg:gap-y-14 xl:gap-y-24 py-10 px-10 lg:p-14 xl:px-36  xl:py-14'>
            <div className="head-text-powered-by">
                <h1><span className='text-gray-400 select-none'>------ </span>Powered By<span className='text-gray-400 select-none'> ------</span></h1>
            </div>
            <div className="powered-by-contents flex flex-row items-center gap-8 flex-wrap justify-around w-full h-fit">
                <div className="google-gemini w-fit pointer-events-none select-none">
                    <img
                        className='w-20 sm:w-28 lg:w-36 xl:w-48 h-auto'
                        src={googleGemini}
                        alt=""
                    />
                </div>
                <div className="vercel w-fit pointer-events-none select-none">
                    <img
                        className='w-20 sm:w-28 lg:w-36 xl:w-48 h-auto'
                        src={vercel}
                        alt=""
                    />
                </div>
                <div className="github w-fit pointer-events-none select-none">
                    <img
                        className='w-20 sm:w-28 lg:w-36 xl:w-48 h-auto'
                        src={github}
                        alt=""
                    />
                </div>
                <div className="lottie w-fit pointer-events-none select-none">
                    <img
                        className='w-20 sm:w-28 lg:w-36 xl:w-48 h-auto'
                        src={lottie}
                        alt=""
                    />
                </div>
                <div className="tailwind-css w-fit pointer-events-none select-none">
                    <img
                        className='w-20 sm:w-28 lg:w-36 xl:w-48 h-auto'
                        src={tailwindCSS}
                        alt=""
                    />
                </div>
                <div className="render w-fit pointer-events-none select-none">
                    <img
                        className='w-20 sm:w-28 lg:w-36 xl:w-48 h-auto'
                        src={render}
                        alt=""
                    />
                </div>
                <div className="mongodb w-fit pointer-events-none select-none">
                    <img
                        className='w-20 sm:w-28 lg:w-36 xl:w-48 h-auto'
                        src={mondoDb}
                        alt=""
                    />
                </div>
                <div className="cloudinary w-fit pointer-events-none select-none">
                    <img
                        className='w-20 sm:w-28 lg:w-36 xl:w-48 h-auto'
                        src={cloudinary}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}
