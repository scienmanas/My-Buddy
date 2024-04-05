import React from 'react';
import MarkDownConverter from './MarkDownConverter';
import botLogo from '../../assets/logo/logo_transparent_48px.png';
import '../../styles/bot.css';

export default function Bot(props) {
    return (
        <div className={`bot flex flex-row text-sm sm:text-base lg:text-lg w-[68%] gap-[5px] items-start`}>
            <div className="bot-logo w-8 flex justify-center items-center">
                <img
                    src={botLogo}
                    alt=""
                    className='w-8 h-8 rounded-full bg-white p-1'
                />
            </div>
            <div className="text-bot-box flex-1 flex items-center">
                <div className="text-bot-box-content px-2 py-1 bg-gradient-to-br from-[#200122] to-[#6f0000] w-fit text-sm sm:text-base">
                    <MarkDownConverter chat={props.text} />
                </div>
            </div>
        </div>
    );
}
