import React, { useEffect } from "react";
import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {FaHtml5,FaCss3Alt,FaJs,FaReact,} from "react-icons/fa";

const projectData = [
  {
    title: "Survey Form",
    description:
      "A form collecting user details like name, age, and preferences using HTML elements.",
    tech: [<FaHtml5 />, <FaCss3Alt />, <FaReact />],
    codeLink: "https://github.com/yourusername/survey-form",
  },
  {
    title: "Temperature Converter",
    description:
      "Converts temperature values between Celsius, Fahrenheit, and Kelvin.",
    tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    codeLink: "https://github.com/yourusername/temp-converter",
  },
  {
    title: "Character Counter",
    description:
      "Counts characters and words in real-time as the user types in a text field.",
    tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    codeLink: "https://github.com/yourusername/char-counter",
  },
  {
    title: "Palindrome Checker",
    description:
      "A tool that checks if an input string is a palindrome using string reversal and regex.",
    tech: [<FaJs />, <FaReact />],
    codeLink: "https://github.com/yourusername/palindrome-checker",
  },
  {
    title: "Roman Numeral Converter",
    description:
      "Converts numbers between 1 and 3999 into Roman numerals using a greedy algorithm.",
    tech: [<FaJs />, <FaReact />],
    codeLink: "https://github.com/yourusername/roman-converter",
  },
  {
    title: "US Phone Number Validator",
    description:
      "Validates US phone number formats using regular expressions.",
    tech: [<FaJs />, <FaReact />],
    codeLink: "https://github.com/yourusername/phone-validator",
  },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card" data-aos="fade-up">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((Icon, i) => (
                <span key={i} className="tech-icon">
                  {Icon}
                </span>
              ))}
            </div>
            <a
              href={project.codeLink}
              className="code-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
