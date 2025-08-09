import React, { useState, useEffect, useRef } from 'react';
import './HeroSection.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const slides = [
  {
    heading: "Hi, I'm Vasanth Developer",
    subtext: "Frontend Developer specializing in clean and interactive user interfaces using React, HTML, CSS, and JavaScript.",
    image: "/images/slide1.jpg"
  },
  {
    heading: "Building Modern Web Interfaces",
    subtext: "Crafting responsive, accessible, and fast websites using the latest frontend technologies like React Hooks and modern JavaScript.",
    image: "/images/slide2.jpg"
  },
  {
    heading: "Turning Ideas into Interactive Designs",
    subtext: "From concept to code, I transform ideas into polished web experiences with pixel-perfect design and intuitive UX.",
    image: "/images/slide3.jpg"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const { heading, subtext, image } = slides[currentSlide];

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="overlay" />
      <div className="hero-wrapper">
        <div className="hero-content">
          <h1>{heading}</h1>
          <p>{subtext}</p>

        
          <button
            className="animated-btn"
            onClick={() => {
              const aboutSection = document.getElementById("about");
              aboutSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About Me
          </button>
        </div>
        <div className="hero-image">
          <img src={image} alt="Slide" />
        </div>
      </div>

   
      <div className="slide-controls-fixed">
        <button onClick={prevSlide} className="nav-btn">
          <FaArrowLeft />
        </button>
        <button onClick={nextSlide} className="nav-btn">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
