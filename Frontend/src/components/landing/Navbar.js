import React from 'react'
import '../../styles/navbar.css'
import logo from '../../assets/logo/logo_transparent.png'

export default function Navbar() {

  const handleClick = () => {
    if (document.getElementById('navbar').classList.contains('hidden')) {
      document.getElementById('navbar').classList.remove('hidden')
      document.getElementById('navbar').classList.add('flex')
      document.getElementById('line-1').classList.add('rotate-45')
      document.getElementById('line-3').classList.add('opacity-0')
      document.getElementById('line-2').classList.add('-rotate-45')

    }
    else {
      document.getElementById('navbar').classList.remove('flex')
      document.getElementById('navbar').classList.add('hidden')
      document.getElementById('line-1').classList.remove('rotate-45')
      document.getElementById('line-3').classList.remove('opacity-0')
      document.getElementById('line-2').classList.remove('-rotate-45')
    }
  }


  return (

    <div className='navbar fixed z-40  p-4 md:text-lg items-center justify-between flex top-0 w-full h-fit blurred-navbar'>
      <div className="left text-white">
        <img
          src={logo}
          alt="logo"
          className='w-16 h-11 pointer-events-none cursor-pointer'
        />
      </div>
      <div className="flex right text-white w-fit h-fit items-center justify-center">
        <button className="hamburger sm:hidden cursor-pointer flex flex-col gap-y-1 items-center bg-slate-300 p-[9px] rounded-lg ease-in-out" onClick={handleClick}>
          <div className="line-1 w-6 h-[2.5px] bg-slate-600 duration-200" id='line-1'></div>
          <div className="line-2 w-6 h-[2.5px] bg-slate-600 duration-200" id='line-2'></div>
          <div className="line-3 w-6 h-[2.5px] bg-slate-600 duration-200" id='line-3'></div>
        </button>
        <div className="navbar-items fixed sm:top-4 top-16 left-4 p-5 sm:p-0 w-auto right-4 sm:static sm:bg-none bg-transparent bg-gradient-to-tr from-[#009245] to-[#FCEE21] rounded-lg sm:flex flex-col sm:flex-row sm:w-fit shadow-xl sm:shadow-none hidden" id='navbar'>
          <ul className="navigation text-[#4C4C4C] navbar-text-custom  sm:text-white w-fit flex sm:flex-row flex-col gap-x-2 gap-y-2 sm:w-fit h-fit items-center">
            <li className="cursor-pointer sm:text-slate-200 sm:hover:text-slate-100 hover:text-[#3a3a3a] w-fit h-fit active:border-[#FFD700] border-[1px] border-dashed hover:scale-110 duration-150 active:scale-90 border-transparent rounded-[4px] px-3 py-1  home">
              <button className=''>
                Home
              </button>
            </li>
            <li className="cursor-pointer sm:text-slate-200 sm:hover:text-slate-100 hover:text-[#3a3a3a] w-fit h-fit active:border-[#FFD700] border-[1px] border-dashed hover:scale-110 duration-150 active:scale-90 border-transparent rounded-[4px] px-3 py-1  home">
              <button className=''>
                Features
              </button>
            </li>
            <li className="cursor-pointer sm:text-slate-200 sm:hover:text-slate-100 hover:text-[#3a3a3a] w-fit h-fit active:border-[#FFD700] border-[1px] border-dashed hover:scale-110 duration-150 active:scale-90 border-transparent rounded-[4px] px-3 py-1  home">
              <a href="https://github.com/scienmanas/My-Buddy">
                <button className=''>
                  Github
                </button>
              </a>
            </li>
            <li className="cursor-pointer sm:text-slate-200 sm:hover:text-slate-100 hover:text-[#3a3a3a] w-fit h-fit active:border-[#FFD700] border-[1px] border-dashed hover:scale-110 duration-150 active:scale-90 border-transparent rounded-[4px] px-3 py-1  home">
              <button className=''>
                Sponsor
              </button>
            </li>
            <li className="cursor-pointer w-fit h-fit px-3 py-1  home">
              <button className='px-4 py-2 bg-blue-600 rounded-xl font-bold text-white hover:bg-blue-700 duration-200 active:scale-90'
              >
                <div
                  className="text-button-sign-up w-fit h-fit "
                >
                  Sign up
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
