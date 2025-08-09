import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './pages/HeroSection';
import ExploreSection from'./pages/ExploreSection'
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects'; 
import Contact from './pages/Contacts';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={
            <>
              <HeroSection />
            <ExploreSection />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
