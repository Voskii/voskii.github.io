import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ProjectCard from "./components/ProjectCard";
import Login from "./components/Login";
import vid from "./images/pokeapi.mp4";
import Github from "./images/ghub3.svg";
import html from './images/html.svg';
import Fcss from './images/fcss.svg';
import Js from './images/js.svg';
import Mongo from "./images/mongo.png";
import ImgReact from './images/imgreact.svg'
import Node from './images/node.png'


export default function App() {

  const projects = [
    {
      name: 'PokéPlanet', ghub: 'https://github.com/Voskii/poke', url: 'https://pokiplanet.netlify.app/', img: vid, orientation: 'l'
    },
    // {
    //   name: 'StudyBuddy', ghub: 'https://github.com/Voskii/lvl5cap', url: 'https://pokiplanet.netlify.app/', img: vid, orientation: 'r'
    // }
  ]

  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="res-panel">
        <img src={ImgReact} className="res-panel-img"/>
        <img src={html} className="res-panel-img"/>
        <img src={Fcss} className="res-panel-img"/>
        <img src={Js} className="res-panel-img"/>
        <img src={Mongo} className="res-panel-img"/>
        <img src={Node} className="res-panel-img"/>
      </div>
      <AboutMe />
        {projects.map(proj => <><ProjectCard data={proj} key={proj.name}/></>)}
      <div className="moveButt">
        <a href="https://www.linkedin.com/in/swingshutt/" target="_blank" rel="noreferrer">
          <button className="butt">LinkedIn</button>
        </a>
      </div>
      <h3 className="contact">In the process of updating! Check again soon!</h3>
    </div>
  );
}

//   console.clear();

// let angle = 3.14/4;
// let length = 2;

// let particles = [];

// let mouseHasMoved = false;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   colorMode(HSB);
//   background(0, 0, 0);
//   noStroke();
//   angle = PI/3;
//   for (let i=0; i<500; i++) {
//     new Particle(createVector(random(width), random(height)));
//   }
// }

// function draw() {
//   if (!mouseHasMoved) {
//     for (let i=0; i<5; i++) {
//       new Particle(createVector(random(width), random(height)));
//     }
//   }
//   background(0, 0, 0, .1);
//   for (let p of particles) {
//     p.update();
//     p.draw();
//   }
// }

// function mouseMoved() {
//   mouseHasMoved = true;
//   for (let i=0; i<5; i++) {
//     new Particle(createVector(mouseX, mouseY));
//   }
// }

// class Particle {
//   constructor(pos) {
//     this.pos = pos;
//     this.vel = createVector(random(length*.5, length*1.5), 0).rotate(angle * round(random(0, 360)));
//     this.hue = random(90, 150);
//     this.sat = 100;
//     this.val = 100;
//     this.lifetime = random(50, 150);
//     this.age = 0;
//     particles.push(this);
//   }
  
//   update() {
//     if (this.age >= this.lifetime) {this.remove()}
//     this.age += 1;
//     if (this.age % 10 == 0) {
//       this.vel.rotate(random([-angle, angle]));
//     }
//     this.pos.add(this.vel);
//   }
  
//   draw() {
//     push()
//     stroke(this.hue, this.sat, this.val, 1-this.age/this.lifetime);
//     translate(this.pos.x, this.pos.y);
//     line(0, 0, -this.vel.x, -this.vel.y);
//     pop()
//   }
  
//   remove() {
//     particles.splice(particles.indexOf(this), 1);
//   }
// }