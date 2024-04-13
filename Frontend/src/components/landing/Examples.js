import React from 'react';
import '../../styles/examples.css';
import pic1 from '../../assets/landing/demo/pic-1.png';
import pic2 from '../../assets/landing/demo/pic-2.png';
import pic3 from '../../assets/landing/demo/pic-3.png';
import pic4 from '../../assets/landing/demo/pic-4.png';


export default function Examples() {
  return (
    <div className='example-tab flex flex-col gap-20 w-full h-fit items-center px-10 py-10'>
      <div className="flex flex-col gap-1 items-center text-contents-example">
        <h1 className='head-text-example'>
          Demo
        </h1>
        <p className='landing-normal-body-text-demo text-base sm:text-lg md:text-xl lg:text-2xl  text-slate-700'>
          Lets dive into some of the demos and feature
        </p>
      </div>
      <div className="feautures-display-example flex flex-col gap-3">
        <div className="pic-1-contents flex flex-col flex-wrap items-center gap-4 w-full h-fit">
          <div className="img-1 w-fit h-fit">
            <img
              className='rounded-3xl h-auto w-72 sm:w-96 duration-200 transform hover:scale-110 hover:rotate-3 cursor-pointer'
              src={pic1}
              alt="pic1"
            />
          </div>
          <div className="content-pic-1">

          </div>
        </div>
        <div className="pic-2-contents flex flex-col-reverse flex-wrap items-center gap-4 w-full h-fit">
          <div className="img-2 w-fit h-fit">
            <img
              className='rounded-3xl h-auto w-72 sm:w-96'
              src={pic2}
              alt="pic2"
            />
          </div>
          <div className="content-pic-2">

          </div>
        </div>
        <div className="pic-3-contents flex flex-col flex-wrap items-center gap-4 w-full h-fit">
          <div className="img-3 w-fit h-fit">
            <img
              className='rounded-3xl h-auto w-72 sm:w-96'
              src={pic3}
              alt="pic3"
            />
          </div>
          <div className="content-pic-3">

          </div>

        </div>
        <div className="pic-4-contents flex flex-col-reverse flex-wrap items-center gap-4 w-full h-fit">
          <div className="img-4 w-fit h-fit">
            <img
              className='rounded-3xl h-auto w-72 sm:w-96'
              src={pic4}
              alt="pic4"
            />
          </div>
          <div className="content-pic-4">

          </div>
        </div>
      </div>
    </div>
  )
}
