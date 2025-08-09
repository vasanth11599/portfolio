import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaNodeJs, FaDatabase
} from "react-icons/fa";
import { SiMongodb, SiRedux } from "react-icons/si";
import "./Skills.css";
import frontendImg from "../assets/illustration2.jpg";
import backendImg from "../assets/illustration3.jpg";
import databaseImg from "../assets/illustration4.jpg";

const skillsByCategory = {
  Frontend: [
    { name: "HTML", icon: <FaHtml5 className="icon html" />, desc: "Structured the portfolio with semantic elements such as <header>, <section>, <main>, and <footer> to ensure accessibility and clean markup." },
    { name: "CSS", icon: <FaCss3Alt className="icon css" />, desc: "Styled the entire portfolio using custom CSS. Implemented responsive design using media queries, Flexbox, and Grid." },
    { name: "Bootstrap", icon: <FaBootstrap className="icon bootstrap" />, desc: "Accelerated UI development by leveraging Bootstrap's responsive grid and utility classes." },
    { name: "JavaScript", icon: <FaJs className="icon js" />, desc: "Added interactivity like dark/light mode toggle, auto-slider, and animations." },
    { name: "React", icon: <FaReact className="icon react" />, desc: "Built the entire portfolio using React components with smooth page transitions." },
    { name: "Redux", icon: <SiRedux className="icon redux" />, desc: "Handled global state like dark mode and menu toggles using Redux." },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="icon node" />, desc: "Created backend APIs and form submission logic using Express and Node.js." },
  ],
  Database: [
    { name: "MongoDB", icon: <SiMongodb className="icon mongo" />, desc: "Stored form submissions and project data using Mongoose schemas." },
    { name: "SQL", icon: <FaDatabase className="icon sql" />, desc: "Managed structured relational data using SQL queries and normalization." },
  ]
};

export default function SkillsRow() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="skills-vertical-section" id="skills">


      {Object.entries(skillsByCategory).map(([category, skills], index) => {
        let illustration;
        if (category === "Frontend") illustration = frontendImg;
        else if (category === "Backend") illustration = backendImg;
        else if (category === "Database") illustration = databaseImg;

        const isReversed = category === "Database";

        return (
          <div className="skills-section-block" key={index} data-aos="fade-up">
            <h3 className="skills-section-title">{category}</h3>

         
            {category === "Frontend" ? (
              <>
                <div className="skills-illustration-container">
                  <img src={illustration} alt={`${category} Illustration`} className="skills-illustration" />
                </div>
                <div className="frontend-section-multi">
                  {skills.map((skill, i) => (
                    <div className="single-skill-line-block" key={i} data-aos="fade-up">
                      <div className="vertical-line skill-line"></div>
                      <div className="skill-card-vertical">
                        <div className="skill-icon">{skill.icon}</div>
                        <div className="skill-texts">
                          <div className="skill-name">{skill.name}</div>
                          <p className="skill-desc">{skill.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className={`skill-flex-row ${isReversed ? "reverse-row" : ""}`}>
             
                <div className="skills-pair-grid">
                  {skills.map((skill, i) => (
                    <div className="skill-card-vertical" key={i} data-aos="zoom-in">
                      <div className="skill-icon">{skill.icon}</div>
                      <div className="skill-texts">
                        <div className="skill-name">{skill.name}</div>
                        <p className="skill-desc">{skill.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="skills-illustration-container side-image">
                  <img
                    src={illustration}
                    alt={`${category} Illustration`}
                    className="skills-illustration"
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
