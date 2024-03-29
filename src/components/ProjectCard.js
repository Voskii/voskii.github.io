import React from "react";
import Github from "../images/ghub3.svg"
import Game from "../images/game3.svg"
import { useMediaQuery } from 'react-responsive'



export default function ProjectCard(props){
    const {data} = props
    console.log('projcard component', props)
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 840px)' })

    return (
        <div className="projectContainer">
            {isTabletOrMobile?
                <div className="project-whole-mq">
                    <h3 className="projects">{data.name}</h3>
                    <div className="proj-links-mq">
                        <a  href={data.ghub}>
                            <img src={Github} className="ghub-link"/>
                        </a>
                        <a  href={data.url}>
                            <img src={Game} className="url-link"/>
                        </a>
                    </div>
                
                    <div className="video-container shrink">
                        <video autoPlay muted loop id="video">
                            <source src={data.img} type="video/mp4" />
                        </video>
                    </div>
                </div>
            :
                data.orientation === 'l'?
                <div className="project-whole">
                        <div className="proj-links">
                            <a  href={data.ghub}>
                                <img src={Github} className="ghub-link"/>
                            </a>
                            <a  href={data.url}>
                                <img src={Game} className="url-link"/>
                            </a>
                        </div>
                    
                    <div className="video-container">
                        <h3 className="projects">{data.name}</h3>
                        <video autoPlay muted loop id="video">
                            <source src={data.img} type="video/mp4" />
                        </video>
                    </div>
                </div>
            :
            <div className="project-whole">
                <div className="video-container">
                        <h3 className="projects">{data.name}</h3>
                        <video autoPlay muted loop id="video">
                            <source src={data.img} type="video/mp4" />
                        </video>
                    </div>
                    <div className="proj-links">
                            <a  href={data.ghub}>
                                <img src={Github} className="ghub-link"/>
                            </a>
                            <a  href={data.url}>
                                <img src={Game} className="url-link"/>
                            </a>
                        </div>
            </div>
            }
            {
            }
        </div>
    )
}