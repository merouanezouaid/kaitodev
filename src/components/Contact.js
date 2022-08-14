import React from "react";

import "../styles/Contact.css";
import FadeInSection from "./FadeInSection";

export default function Contact() {
  return (
    <div id="contact">
      <div className="section-header ">
        <span className="section-title">$ Resume</span>
      </div>
      <FadeInSection>
        <a
          href="https://drive.google.com/file/d/1EyNUnM7qrdeSDb9qmhvROAZZRh-cdJHE/view?usp=sharing"
          className="intro-contact"
        >
          {"Open Resume"}
        </a>
      </FadeInSection>
    </div>
  );
}
