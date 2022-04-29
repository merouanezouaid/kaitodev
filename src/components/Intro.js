import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";

export default function Intro() {
  return (
    <div id="intro">
      <Typist avgTypingDelay={120}>
        <span className="intro-title">
          {"Hello! I'm "}
          <span className="intro-name">{"Kaito."}</span>
          <Typist.Backspace count={6} delay={500} />
          <span className="intro-name">{"Merouane."}</span>
        </span>
      </Typist>
      <FadeInSection>
        <div className="intro-subtitle">Coding is my favorite videogame.</div>
        <div className="intro-desc">
          I'm a junior software engineer and MERN Stack web developer from
          Agadir, very passionate about all aspects of software engineering and
          enjoy learning new skills everyday.
          <div style={{ marginTop: "10px" }}>
            I'm looking forward to working with you!{" "}
            <span class="wave" role="img" aria-label="xxxx">
              👋
            </span>
          </div>
        </div>
        <a href="mailto:marwan.zouaid@gmail.com" className="intro-contact">
          <EmailRoundedIcon />
          {" Get in touch"}
        </a>
      </FadeInSection>
    </div>
  );
}
