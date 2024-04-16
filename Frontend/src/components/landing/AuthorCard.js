import React from 'react';
import '../../styles/author-card.css'
import { LuGithub } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function AuthorCard(props) {

    // document.body.style.backgroundColor = "#000000"

    return (
        <div className="card-author-container">
            <div className="card glow">
                <div className="imgBx">
                    <img
                        src={props.photo}
                        alt=""
                    />
                </div>
                <div className="content">
                    <div className="contentBx">
                        <h3>{props.name}<br /><span>{props.designation}</span></h3>
                    </div>
                    <ul className="sci">
                        <li style={{ '--i': 1 }}>
                            <a href={props.linkedin}>
                                <FaLinkedin />
                            </a>
                        </li>
                        <li style={{ '--i': 2 }}>

                            <a href={props.github}>
                                <LuGithub />
                            </a>
                        </li>
                        <li style={{ '--i': 3 }}>
                            <a href={props.instagram}>
                                <FaInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
