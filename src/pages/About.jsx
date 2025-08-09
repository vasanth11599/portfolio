import React, { useEffect } from 'react';
import './About.css';
import Image from "../assets/vasanth.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaDownload, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiRedux } from 'react-icons/si';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="container">

        <div className="container">
 
  <div className="intro-row" data-aos="fade-up">

    <div className="contact-image">
            <img src={Image} alt="Vasanth s" />
           </div>

    <div className="intro-left" data-aos="fade-left">
      <h3>Hi, I'm <span className="highlight"> VASANTH</span></h3>
      <p>I’m a <strong>Full-Stack Developer</strong> skilled in building scalable, efficient web applications using <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>.</p>
      <a href="/vasanthresume.pdf" download="VASANTH_S_Resume" className="download-resume-btn">
        <FaDownload /> Download Resume
      </a>
    </div>
  </div>
</div>


      
        <div className="skills-section" data-aos="zoom-in">
          <h2 className="skills-title"> Technical Skills</h2>

          <div className="skills-row">
        
            <div className="skills-group">
              <div className="skill-item"><FaHtml5 className="icon html" /> HTML5</div>
              <div className="skill-item"><FaCss3Alt className="icon css" /> CSS3</div>
              <div className="skill-item"><FaJs className="icon js" /> JavaScript</div>
              <div className="skill-item"><FaReact className="icon react" /> React</div>
              <div className="skill-item"><SiRedux className="icon redux" /> Redux</div>
            </div>

         
            <div className="skills-group">
              <div className="skill-item"><FaNode className="icon node" /> Node.js</div>
              <div className="skill-item"><SiExpress className="icon express" /> Express</div>
              <div className="skill-item"><SiMongodb className="icon mongo" /> MongoDB</div>
              <div className="skill-item"><FaDatabase className="icon sql" /> SQL</div>
              <div className="skill-item"><FaGithub className="icon github" /> GitHub</div>
            </div>
          </div>
        </div>

      
        <div className="info-row-line" data-aos="fade-up">
          <div className="info-section">
            <h4>🎓 Education</h4>
            <p>BE in EEE, Nandha Engineering College (2020)<br />CGPA: 7.3</p>
          </div>
          <div className="info-section">
            <h4>💼 Experience</h4>
            <p>Alitemat Technologies (2022–2024)<br />SUN TV Network (2024–Present)</p>
          </div>
          <div className="info-section">
            <h4>📜 Certifications</h4>
            <p>Java – Completed<br />Selenium – Completed</p>
          </div>
          <div className="info-section">
            <h4>📧 Contact</h4>
            <p>vasanthsv3344@gmail.com<br />9788609469</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
