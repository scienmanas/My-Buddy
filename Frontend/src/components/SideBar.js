import React from 'react'
import Team from './Team'
import General from './General'
import Projects from './Projects'
import Account from './Account'
import './styles/side_bar.css'


export default function SideBar() {
    return (
        <div className='side-bar side-bar-height bg-[#1f2325] flex flex-col justify-between py-4 pl-2 pr-3 rounded-2xl m-2'>
            <div className="top-items flex flex-col gap-8">
                <div className="project-setting">
                    <Team />
                </div>
                <div className="general">
                    < General />
                </div>
                <div className="project">
                    < Projects />
                </div>

            </div>
            <div className="down-items">
                <div className="account-settings">
                    < Account />
                </div>
            </div>
        </div>
    )
}
