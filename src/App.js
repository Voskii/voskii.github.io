import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ProjectCard from "./components/ProjectCard";
// import Data from '.Data'

export default function App() {

  return (
    <div className="container">
      <Header />
      <ProjectCard />
      <AboutMe />
      <div className="moveButt">
        <a href="https://www.linkedin.com/in/swingshutt/" target="_blank" rel="noreferrer">
          <button className="butt">LinkedIn</button>
        </a>
      </div>
      <h3 className="contact">In the process of updating! Check again soon!</h3>
    </div>
  );
}