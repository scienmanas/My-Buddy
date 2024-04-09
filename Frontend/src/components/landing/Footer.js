import React from 'react'
import { useState, useEffect } from 'react'
import GeneralResultsLoader from '../loaders/GeneralResultsLoader';
import { IoSendOutline } from "react-icons/io5";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoIosWarning } from "react-icons/io";
import emailjs from '@emailjs/browser';
import '../../styles/footer.css';
import footer_img_1 from '../../assets/logo/logo_transparent.png';
import logo from '../../assets/logo/logo_transparent.png'


export default function Footer() {

    const templet_id = process.env.REACT_APP_EMAIL_JS_TEMAPLATE_ID;
    const public_key = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;
    const service_id = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false)


    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Move this line here to prevent form submission

        const template_params = {
            user_email: email,
        };

        emailjs.send(service_id, templet_id, template_params, public_key)
            .then((result) => {
                setEmail('');
                setLoading(() => false);
            })
            .catch((error) => {
                console.log(error.text);
                setLoading(() => false);
                return;
            });
    };



    useEffect(() => {
        setIsEmailValid(validateEmail(email));
    }, [email]);




    return (
        <div className='fotter bg-gradient-to-tr p-9 pt-14 w-full h-fit from-[#1a1a1a] to-gray-700 rounded-sm flex flex-col gap-16'>
            <div className="content-1 flex justify-between flex-wrap items-center w-full h-fit gap-y-7">
                <div className="texts flex flex-col gap-4 w-fit h-fit">
                    <div className="text-1 select-none text-green-500">
                        Your Own Friend &#128522;
                    </div>
                    <div className="text-2 select-none footer-text-head">
                        Chat like you talk with your peeps <span className='font-mono'>!</span>
                    </div>
                    <div className="email-entry flex gap-2 items-center mt-2 flex-row">
                        <div className="field flex flex-col">
                            <input
                                type="text"
                                disabled={loading}
                                placeholder='Connect with creator !'
                                className='bg-transparent border-b-2 border-gray-400 sm:w-80 w-72 h-10 outline-none text-white focus:border-blue-500'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyDown={
                                    (e) => {
                                        if (e.key === 'Enter') {
                                            if (email.length === 0) {
                                                return;
                                            }
                                            if (!validateEmail(email)) {
                                                return;
                                            }
                                            setLoading(() => true);
                                            handleSubmit(e);
                                        }
                                    }
                                }
                            />
                        </div>
                        <div
                            disabled={() => {
                                if (email.length === 0) {
                                    return true;
                                } else if (!validateEmail(email)) {
                                    return true;
                                }
                                return false;

                            }}
                            className={`text-white w-fit h-fit button-clicked transition-all duration-150 ${loading ? 'hidden' : 'flex'} ${isEmailValid ? '' : 'cursor-not-allowed'} w-fit h-fit`}
                            onClick={(e) => {
                                setLoading(() => true);
                                handleSubmit(e)
                            }
                            }
                        >
                            <div>
                                <IoSendOutline className={`-rotate-[30deg] font-bold duration-200 ${isEmailValid ? 'text-pink-400 rotate-0 cursor-pointer' : 'cursor-not-allowed'}`}
                                />
                            </div>
                        </div>
                        <div className={`wait-loader flex justify-center items-center duration-150 ${loading ? '' : 'hidden'} `}>
                            <GeneralResultsLoader />
                        </div>
                    </div>
                </div>
                <div className="h-fit animate-pulse hidden sm:flex w-40">
                    <img
                        src={footer_img_1}
                        alt=""
                        className='pointer-events-none'
                    />
                </div>
            </div>
            <div className="content-2 flex gap-14 justify-normal lg:justify-evenly flex-wrap">
                <div className="compnay-logo select-none">
                    <div className="logo w-fit h-fit">
                        <img
                            src={logo}
                            alt=""
                            className='w-20 h-18 pointer-events-none'
                        />
                    </div>
                    <div className="logo-text flex flex-col gap-5 w-fit h-fit text-white">
                        <div className="text-1">&#169; My Buddy 2024</div>
                        <div className="text-1 text-transparent bg-clip-text bg-gradient-to-r from-[#C6EA8D] to-[#FE90AF] flex flex-wrap w-80">Always is and will be your companion at every time no matter what..</div>
                    </div>
                </div>
                <div className="social-links flex flex-row flex-wrap gap-x-9 gap-y-8 md:gap-x-11 md:gap-y-10 lg:gap-x-12 lg:gap-y-11 xl:gap-x-16 2xl:gap-x-24">
                    <div className="column-1 text-sm sm:text-base flex flex-col gap-y-[5px]">
                        <div className="text-slate-400 hover:text-white cursor-pointer">About</div>
                        <div className="text-slate-400 hover:text-white cursor-pointer">Impact</div>
                        <div className="text-slate-400 hover:text-white cursor-pointer">Open Source</div>
                    </div>
                    <div className="column-2 text-sm sm:text-base flex flex-col gap-y-[5px]">
                        <div className="text-slate-400 hover:text-white cursor-pointer">Terms and Conditions</div>
                        <div className="text-slate-400 hover:text-white cursor-pointer">Privacy Policy</div>
                        <div className="text-slate-400 hover:text-white cursor-pointer">Cookie Policy</div>
                    </div>
                    <div className="column-3 text-sm sm:text-base flex flex-col gap-3">
                        <div className="text-white text-xl font-bold tracking-[0.03em] select-none">Contact Us</div>
                        <div className="text-slate-300 hover:text-[#EA8D8D] custom-font"><a href="mailto:mybuddychatcontact">mybuddychatcontact@gmail<span className='font-serif'>.</span>com</a></div>
                        <div className="social-links text-slate-300 flex flex-rows gap-4 cursor-pointer -mt-1">
                            <div className="facebook text-lg hover:text-[#EA8D8D] duration-150"><a href="#"><FiFacebook /></a></div>
                            <div className="twitter text-lg hover:text-[#EA8D8D] duration-150"><a href="#"><FiTwitter /></a></div>
                            <div className="linkedin text-lg hover:text-[#EA8D8D] duration-150"><a href="#"><CiLinkedin /></a></div>
                            <div className="instagram text-lg hover:text-[#EA8D8D] duration-150"><a href="#"><FaInstagram /></a></div>
                            <div className="github text-lg hover:text-[#EA8D8D] duration-150"><a href="#"><FiGithub /></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}