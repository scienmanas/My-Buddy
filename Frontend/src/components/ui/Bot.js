import React from 'react'
import MarkDownConverter from './MarkDownConverter'
import botLogo from '../../assets/logo/logo.png'

export default function Bot(props) {
    return (
        <div className='bot flex flex-row text-sm sm:text-base lg:text-lg w-[72%] '>
            <div className="bot-logo w-4">
                <img
                    src={botLogo}
                    alt=""
                />
            </div>
            <div className="text">
                <MarkDownConverter chat={props.text} />
            </div>
        </div>
    )
}
