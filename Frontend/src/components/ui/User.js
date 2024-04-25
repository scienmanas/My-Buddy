import React from 'react';
import MarkDownConverter from './MarkDownConverter';
import '../../styles/user.css';
import { useGlobalContext } from '../../Context/global_context';
import boyImage from '../../assets/users/boy.png';
import girlImage from '../../assets/users/girl.png';

export default function User(props) {

    const { authUser } = useGlobalContext();
    const userPhoto = authUser?.gender === 'male' ? boyImage : girlImage;



    return (
        <div className="user w-full flex justify-end">
            <div className='user-box flex items-start max-w-[75%] gap-[5px]'>
                <div className="text-user-box px-2 py-1 bg-transparent bg-gradient-to-tr to-[#C33764] from-[#1D2671] text-sm sm:text-base">
                    <MarkDownConverter chat={props.text} />
                </div>
                <div className="user-logo flex-shrink-0 h-8 w-8">
                    <img
                        src={userPhoto}
                        alt=""
                        className='h-full w-full rounded-full'
                    />
                </div>
            </div>
        </div>
    );
}
