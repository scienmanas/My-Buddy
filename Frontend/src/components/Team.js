import React, { useState } from 'react'
import projectAvtar from '../assets/project/Avatar.png'
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Team() {

    const [teamInfo, setTeamInfo] = useState([
        "Intellisys", "12 members"
    ])


    return (
        <div className='project-team flex flex-row justify-between items-center px-2 py-4'>
            <div className="project-team-info flex flex-row gap-2 items-center">
                <div className="photo w-[48px] h-[48px]  cursor-pointer">
                    <img src={projectAvtar} alt="" />
                </div>
                <div className="content  cursor-pointer">
                    <div className="project-team-name text-white  select-none  cursor-pointer">
                        {teamInfo[0]}
                    </div>
                    <div className="total-members text-[#B6F09C] select-none cursor-pointer" >
                        {teamInfo[1]}
                    </div>
                </div>
            </div>
            <div className="actions text-[#686B6E] text-3xl cursor-pointer">
                <RiArrowDropDownLine />
            </div>
        </div>
    )
}
