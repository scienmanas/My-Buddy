import React from 'react'
import Navbar from './Navbar'
import AuthorCard from './AuthorCard'
import Footer from './Footer'
import Lottie from 'react-lottie'
import { useState, useEffect } from 'react'
import authorsAnimartionfile from '../../assets/animations/author_section.json'
import '../../styles/authors.css';
import ManasPhoto from '../../assets/authors/manas.png';
import NikhilPhoto from '../../assets/authors/nikhil.png';


const authorAnimation = {
    loop: true,
    autoplay: true,
    animationData: authorsAnimartionfile,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet'
    }
};



export default function Authors() {

    const [animationSize, setAnimationSize] = useState({ width: 350, height: 250 });

    useEffect(() => {
        // Function to update animation size based on window width
        const updateAnimationSize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1280) {
                setAnimationSize({ width: 500, height: 350 }); // for lg and xl screens
            } else if (screenWidth >= 768) {
                setAnimationSize({ width: 400, height: 300 }); // for md screens
            } else {
                setAnimationSize({ width: 350, height: 250 }); // default size
            }
        };

        // Initial call to set animation size based on initial window width
        updateAnimationSize();

        // Event listener to update animation size when window is resized
        window.addEventListener('resize', updateAnimationSize);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            window.removeEventListener('resize', updateAnimationSize);
        };
    }, [window.innerWidth]); // Dependency on window.innerWidth ensures effect runs on width changes


    return (
        <div className='author-tab w-full h-fit flex flex-col'>
            <div className="navbar">
                <Navbar />
            </div>
            <div className='upper-content-navbar bg-transparent bg-gradient-to-tr from-blue-900 to-[#9d1f83] flex flex-row h-fit pt-16  sm:pt-24 pb-32 sm:pb-56 w-full p-7 items-center gap-5 relative'>
                <div className="left-content flex flex-col justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 sm:w-[60%] w-full">
                    <div className="text-contents-upper flex flex-col gap-2">
                        <div className="head-text text-white w-fit h-fit">
                            <span className='text-orange-500'>Drum Rolls,</span><br /> Meet the Authors!
                        </div>
                        <div className="pickup-line text-white w-fit h-fit">
                            Meet us the geeky guys who built this product, wanna contact, or have a chat, dive into our dms ! <span className='text-yellow-600' style={{ fontWeight: 'bolder' }}>Hehe..</span>
                        </div>
                    </div>
                </div>
                <div className="right-content relative sm:flex sm:w-[40%] w-fhatull hidden items-center">
                    <div className="animation-1 w-fit h-fit pointer-events-none">
                        <Lottie
                            options={authorAnimation}
                            height={animationSize.height + 50}
                            width={animationSize.width + 50}
                            isClickToPauseDisabled={true}
                        />
                    </div>
                </div>
                <div className="custom-shape-divider-bottom-1712904230">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
            <div className="appreaciation-cards-authors w-full h-fit flex flex-row flex-wrap items-center justify-center gap-9 md:gap-14 lg:gap-16 my-9 p-7">
                <div className="author-1 h-fit w-fit hover:rotate-6 hover:scale-105 duration-200">
                    <AuthorCard name="Manas Poddar" designation="3rd year student" github="https://github.com/scienmanas" instagram="https://www.instagram.com/scienmanas" linkedin="https://www.linkedin.com/in/manas-poddar-5a0098227/" photo={ManasPhoto} />
                </div>
                <div className="author-2 h-fit w-fit hover:-rotate-6 hover:scale-105 duration-200">
                    <AuthorCard name="Nikhil Srivastava" designation="3rd year student" github="https://github.com/nikhilsrv" instagram="https://www.instagram.com/nikhilsrv_2022/" linkedin="https://www.linkedin.com/in/nikhilsrv/" photo={NikhilPhoto} />
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}
