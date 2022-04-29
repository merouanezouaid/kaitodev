import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";

const projects = {
  "Dictme | Dictionary app": {
    desc:
      "Python web app that provides definitions of English words, as well as pronunciations, synonyms, and other features.",
    techStack: "Python (Flask), Bootstrap, SQLite",
    link: "https://github.com/merouanezouaid/dictme",
    open: "https://dictme.herokuapp.com",
  },
  YupTube: {
    desc:
      "Node.js web application for collecting data, converting and downloading videos from YouTube.",
    techStack: "Node.js, Express",
    link: "https://github.com/merouanezouaid/yuptube",
    open: "https://yuptube.herokuapp.com",
  },
  "Clinic MS": {
    desc: "A hospital management system desktop mini-application",
    techStack: "C#, SQLServer",
    link: "https://github.com/merouanezouaid/ClinicMS",
    open: "",
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
