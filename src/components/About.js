import React from "react";

import "../styles/About.css";
import FadeInSection from "./FadeInSection";

export default function About() {
  const tech_stack = [
    "Javascript ES6+",
    "TypeScript",
    "React.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Python",
    "Java",
    "HTML & CSS",
    "Git",
  ];

  const image = require("./assets/mypic.jpg");

  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">$ About me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            <p>
              Hello, I am Merouane Zouaid, a sophomore majoring in Computer
              Engineering at the Higher School of Technology in Agadir, Morocco.
            </p>
            {"I currently use the following technologies:"}
            <ul className="tech-stack">
              {tech_stack.map((tech_item) => (
                <li>{tech_item}</li>
              ))}
            </ul>
            <p>
              I'm interested in Web Developement, Software Engineering and I'm
              self-studying Machine Learning and Cyber Security. I'm also a
              content creator on Instagram and Twitter.
            </p>
            <p>
              When I'm AFK, you can find me playing Football or reading books.
            </p>
          </div>
          <div className="about-image">
            <img src={image} alt="kaitopic" />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
