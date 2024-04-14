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
          Lets dive into some of the demos and feature &#10024;
        </p>
      </div>
      <div className="feautures-display-example flex flex-col gap-20 justify-around">
        <div className="pic-1-contents gap-8 flex flex-row flex-wrap  sm:flex-nowrap lg:flex-wrap lg:gap-14 xl:gap-16 justify-between  items-center w-full h-fit">
          <div className="img-1 w-full flex items-center justify-center sm:w-fit h-fit ">
            <img
              className='rounded-3xl h-auto w-52 sm:w-56 md:w-72 lg:w-80 duration-200 transform hover:scale-110 hover:rotate-3 cursor-pointer'
              src={pic1}
              alt="pic1"
            />
          </div>
          <div className="content-pic-1 flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
            <div className="heading-pic-1 example-body-text h-fit w-fit text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-gray-700 sm:flex-nowrap lg:flex-wrap lg:gap-14">
              Customizable to your needs!
            </div>
            <div className="highlights flex flex-col flex-wrap">
              <div className="text-higlights text-wrap w-fit h-fit flex flex-row gap-2">
                <div className="tick select-none w-fit h-fit text-lg text-purple-700">
                  ✓
                </div>
                <div className="text-after-tick max-w-[500px] sm:text-lg md:text-xl xl:text-2xl">
                  Takes your emotions as input and custimize the chat experience.</div>
              </div>
              <div className="text-higlights text-wrap w-fit h-fit flex flex-row gap-2">
                <div className="tick select-none w-fit h-fit text-lg text-purple-700">
                  ✓
                </div>
                <div className="text-after-tick max-w-[500px] sm:text-lg md:text-xl xl:text-2xl">
                  Various mood options are available to choose from.</div>
              </div>
              <div className="text-higlights text-wrap w-fit h-fit flex flex-row gap-2">
                <div className="tick select-none w-fit h-fit text-lg text-purple-700">
                  ✓
                </div>
                <div className="text-after-tick max-w-[500px] sm:text-lg md:text-xl xl:text-2xl">
                  The chatbot will respond according to the mood selected</div>
              </div>
            </div>
          </div>
        </div>
        <div className="pic-2-contents gap-8 flex flex-row-reverse flex-wrap  sm:flex-nowrap lg:flex-wrap lg:gap-14 justify-between  items-center w-full h-fit xl:gap-16 ">
          <div className="img-2  w-full flex items-center justify-center sm:w-fit h-fit">
            <img
              className='rounded-3xl h-auto w-52 sm:w-56 md:w-72 lg:w-80 duration-200 transform hover:scale-110 hover:-rotate-3 cursor-pointer'
              src={pic2}
              alt="pic2"
            />
          </div>
          <div className="content-pic-2 flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
            <div className="heading-pic-1 example-body-text h-fit w-fit text-2xl sm:text-3xl md:text-4xl xl:text-5xl  font-bold text-gray-700">
              Experience Talking like never before.
            </div>
            <div className="highlights flex flex-col flex-wrap">
              <div className="text-higlights text-wrap w-fit h-fit flex flex-row gap-2">
                <div className="tick select-none w-fit h-fit text-lg text-purple-700">
                  ✓
                </div>
                <div className="text-after-tick max-w-[500px] sm:text-lg md:text-xl xl:text-2xl">
                  Talk to friend, parent or a councellor as you need.</div>
              </div>
              <div className="text-higlights text-wrap w-fit h-fit flex flex-row gap-2">
                <div className="tick select-none w-fit h-fit text-lg text-purple-700">
                  ✓
                </div>
                <div className="text-after-tick max-w-[500px] sm:text-lg md:text-xl xl:text-2xl">
                  Get emotional support, aexpert advice or parent's perceptive on differnt matters.</div>
              </div>
              <div className="text-higlights text-wrap w-fit h-fit flex flex-row gap-2">
                <div className="tick select-none w-fit h-fit text-lg text-purple-700">
                  ✓
                </div>
                <div className="text-after-tick max-w-[500px] sm:text-lg md:text-xl xl:text-2xl">
                  Can you smile, happy and support your feeling and emotions based on your mood.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="pic-3-contents gap-8 flex flex-row flex-wrap sm:flex-nowrap lg:flex-wrap lg:gap-14 justify-between  items-center w-full h-fit xl:gap-16 ">
          <div className="img-3 w-full flex items-center justify-center sm:w-fit h-fit">
            <img
              className='rounded-3xl h-auto w-52 sm:w-56 md:w-72 lg:w-80 duration-200 transform hover:scale-110 hover:rotate-3 cursor-pointer'
              src={pic3}
              alt="pic3"
            />
          </div>
          <div className="content-pic-3 flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
            <div className="heading-pic-1 example-body-text h-fit w-fit text-2xl sm:text-3xl md:text-4xl xl:text-5xl  font-bold text-gray-700">
              Want to save your conversation ?
            </div>
            <div className="highlights flex flex-col flex-wrap">
              <div className="text-higlights text-wrap w-fit h-fit flex flex-row gap-2">
                <div className="tick select-none w-fit h-fit text-lg text-purple-700">
                  ✓
                </div>
                <div className="text-after-tick max-w-[500px] sm:text-lg md:text-xl xl:text-2xl">
                  Saves your conversation if you resume it in future.</div>
              </div>
              <div className="text-higlights text-wrap w-fit h-fit flex flex-row gap-2">
                <div className="tick select-none w-fit h-fit text-lg text-purple-700">
                  ✓
                </div>
                <div className="text-after-tick max-w-[500px] sm:text-lg md:text-xl xl:text-2xl">
                  Completely remebers your conversation and emotions your expressed at time of conversation.</div>
              </div>
              <div className="text-higlights text-wrap w-fit h-fit flex flex-row gap-2">
                <div className="tick select-none w-fit h-fit text-lg text-purple-700">
                  ✓
                </div>
                <div className="text-after-tick max-w-[500px] sm:text-lg md:text-xl xl:text-2xl">
                  Protect privacy, you can just set a nickname instead od actual name of yourself. </div>
              </div>
            </div>
          </div>

        </div>
        <div className="pic-4-contents gap-8 flex flex-row-reverse flex-wrap sm:flex-nowrap lg:flex-wrap lg:gap-14 justify-between items-center w-full h-fit xl:gap-16 ">
          <div className="img-4 w-full flex items-center justify-center sm:w-fit h-fit">
            <img
              className='rounded-3xl h-auto w-52 sm:w-56 md:w-72 lg:w-80 duration-200 transform hover:scale-110 hover:-rotate-3 cursor-pointer'
              src={pic4}
              alt="pic4"
            />
          </div>
          <div className="content-pic-4 flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
            <div className="heading-pic-1 example-body-text h-fit w-fit text-2xl sm:text-3xl md:text-4xl xl:text-5xl  font-bold text-gray-700">
              Start a new conversation !
            </div>
            <div className="highlights flex flex-col flex-wrap">
              <div className="text-higlights text-wrap w-fit h-fit flex flex-row gap-2">
                <div className="tick select-none w-fit h-fit text-lg text-purple-700">
                  ✓
                </div>
                <div className="text-after-tick max-w-[500px] sm:text-lg md:text-xl xl:text-2xl">
                  Want to start a conversation on a new topic, we have got all covered.</div>
              </div>
              <div className="text-higlights text-wrap w-fit h-fit flex flex-row gap-2">
                <div className="tick select-none w-fit h-fit text-lg text-purple-700">
                  ✓
                </div>
                <div className="text-after-tick max-w-[500px] sm:text-lg md:text-xl xl:text-2xl">
                  Tailor your new conversation with your new emotions.</div>
              </div>
              <div className="text-higlights text-wrap w-fit h-fit flex flex-row gap-2">
                <div className="tick select-none w-fit h-fit text-lg text-purple-700">
                  ✓
                </div>
                <div className="text-after-tick max-w-[500px] sm:text-lg md:text-xl xl:text-2xl">
                  Be it, breakup with girlfriend, relationship issues, normal day-to-day emotions and venting out, we have got all covered.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
