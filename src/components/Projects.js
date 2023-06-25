import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";

const projects = {
  "Complete AI | Text Autocomplete for ChatGPT": {
    desc:
      "Chrome extension that helps you write prompts faster on ChatGPT with AI-powered autocompletion.",
    techStack: "Python (Flask), Bootstrap, SQLite",
    link: "https://github.com/merouanezouaid/complete-ai",
    open: "https://chrome.google.com/webstore/detail/complete-ai/fbmngedglhldachckegobogcglnbojge/",
  },
  "Zklib-js": {
    desc:
      "Updated Node.js module for ZKTeco biometric devices (+1000 downloads)",
    techStack: "Node.js, Hardware",
    link: "https://github.com/merouanezouaid/zklib-js",
    open: "https://www.npmjs.com/package/zklib-js",
  },
  "My Gym": {
    desc: "A gym management system MERN Stack web application",
    techStack: "MongoDB, Express, React, Node.js",
    link: "https://github.com/merouanezouaid/gym-management-app",
    open: "https://gym-management-system-eight.vercel.app/",
  },
};

export default function Projects() {
  return (
    <div id="projects">
      <div className="section-header ">
        <span className="section-title">$ Projects</span>
      </div>

      <div className="project-container">
        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => (
            <FadeInSection delay={`${i + 1}00ms`}>
              <li className="projects-card">
                <div className="card-header">
                  <div className="folder-icon">
                    <FolderOpenRoundedIcon
                      style={{ fontSize: 35 }}
                    ></FolderOpenRoundedIcon>
                  </div>
                  <span className="external-links">
                    <a className="github-icon" href={projects[key]["link"]}>
                      <GitHubIcon
                        style={{
                          fontSize: 20,
                          color: "var(--lightest-slate)",
                        }}
                      ></GitHubIcon>
                    </a>
                    {projects[key]["open"] && (
                      <a className="open-icon" href={projects[key]["open"]}>
                        <OpenInBrowserIcon
                          style={{
                            fontSize: 25,
                            color: "var(--lightest-slate)",
                          }}
                        ></OpenInBrowserIcon>
                      </a>
                    )}
                  </span>
                </div>

                <div className="card-title">{key}</div>
                <div className="card-desc">{projects[key]["desc"]}</div>
                <div className="card-tech">{projects[key]["techStack"]}</div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </div>
  );
}
