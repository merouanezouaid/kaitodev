import React, { useEffect, useCallback } from "react";
import SidebarNav from "./components/SidebarNav";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import Credits from "./components/Credits";
import Contact from "./components/Contact";
// import IntroLogo from "./components/IntroLogo";
import "./App.css";
import "./styles/Global.css";
import "rsuite/dist/styles/rsuite-default.css";

export default function App() {
  const vid = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  const handleKeyPress = useCallback((event) => {
    if (event.key === "f" || event.key === "F") {
      window.location.replace(vid);
    }
  }, []);

  useEffect(() => {
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listenerf
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="App">
      <div id="content">
        {/* <IntroLogo /> */}
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Credits />
      </div>
      <SidebarNav />
    </div>
  );
}
