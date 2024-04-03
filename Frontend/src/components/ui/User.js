import React from 'react'
import MarkDownConverter from './MarkDownConverter'
import userLogo from '../../assets/users/man.png'

export default function User(props) {
    return (
        <div className='user flex flex-row text-sm sm:text-base lg:text-lg items-center place-content-end'>
            <div className="bot-logo w-4">
                <img
                    src={userLogo}
                    alt=""
                />
            </div>
            <div className="text w-fit">
                <MarkDownConverter chat={props.text} />
            </div>
        </div>
    )
}
