import React from 'react'
import { useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import blueOctagon from '../assets/icons/blue_octagon.png';
import greenSquare from '../assets/icons/green_square.png';
import orangeSquare from '../assets/icons/red_square.png';
import redTriangle from '../assets/icons/red_triangle.png';


export default function Projects() {


    // This can be configured based on API data

    const [projects, setProjects] = useState([
        ["Orbital Oddysey", greenSquare], 
        ["Digital Production Launch", redTriangle ],
        ["Brand Refresh", orangeSquare ],
        ["Social Medai Strategy", blueOctagon],
        ["Orbital Oddysey", greenSquare], 
        ["Digital Production Launch", redTriangle ],
        ["Brand Refresh", orangeSquare ],
        ["Social Medai Strategy", blueOctagon],
        ["Orbital Oddysey", greenSquare], 
        ["Digital Production Launch", redTriangle ],
        ["Brand Refresh", orangeSquare ],
        ["Social Medai Strategy", blueOctagon],
    ])


    return (
        <div className='project-list flex flex-col gap-4' >
            <div className="heading text-[#686B6E] select-none">
                <h2>Projects</h2>
            </div>
            <div className="project-list text-[#E8E9E9]" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                <ul>
                    {projects.map((project, index) => (
                        <li
                            className='items flex flex-row items-center gap-4 select-none hover:bg-transparent hover:bg-gradient-to-tr hover:from-slate-900 hover:to-slate-600 cursor-pointer rounded-lg duration-150 py-3 px-3'
                            key={index}>
                            <div className="svg w-fit h-fit">
                                <img src={project[1]} alt="" />
                            </div>
                            <div className="project-name">
                                {project[0]}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="add-new-project flex text-[#686B6E] flex-row items-center gap-3 select-none hover:bg-transparent hover:bg-gradient-to-tr hover:from-slate-900 hover:to-slate-600 cursor-pointer rounded-lg duration-150 py-3 px-3">
                <div className="svg text-lg">
                    <IoIosAddCircleOutline />
                </div>
                <div className="text-add-new-project font-bold">
                    Add new project
                </div>
            </div>
        </div>
    )
}
