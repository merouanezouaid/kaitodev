import React from "react";
import TimeLine from "./TimeLine";
import "../styles/Experience.css";
import FadeInSection from "./FadeInSection";

export default function Experience() {
  return (
    <div id="experience">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">$ Experience</span>
        </div>
        <TimeLine />
      </FadeInSection>
    </div>
  );
}
