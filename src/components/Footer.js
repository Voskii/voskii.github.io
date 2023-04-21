import React from "react";
import LI from '../images/linkedin.svg'
import Github from "../images/fghub.svg";

export default function Footer(){
    return (
        <div className="footer">
            <div className="moveButt">
                {/* <a href="https://www.linkedin.com/in/swingshutt/" target="_blank" rel="noreferrer">
                    <button className="butt">LinkedIn</button>
                </a>
                <a href="https://github.com/Voskii/VschoolAssignments" target="_blank" rel="noreferrer">
                    <button className="butt">GitHub</button>
                </a> */}
            </div>
            {/* <h4>In the process of updating! Check again soon!</h4> */}
            <div className="footer-email">
                <div className="foot-text">Contact me at VoskiLLC@gmail.com</div>
                    <a href="https://www.linkedin.com/in/swingshutt/" target="_blank" rel="noreferrer">
                        <img src={LI} className="foot-img" />
                    </a>
                    <a href="https://github.com/Voskii/VschoolAssignments" target="_blank" rel="noreferrer">
                        <img src={Github} className="foot-img" />
                    </a>
                
                <div className="foot-text">Copyright © 2023. All Rights Reserved</div>
            </div>
        </div>
    )
}