import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Header/Navigation';
import HeroSection from './components/HeroSection/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AboutSection from './components/AbountMe';
import ProjectDetail from './components/ProjectDetail';


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'contact'];
      let currentSection = activeSection;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight/2 && rect.bottom >= window.innerHeight/2) {
            currentSection = section;
            break;
          }
        }
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} />
      <main>
        <div id="home"><HeroSection /></div>
        <div id="skills"><AboutSection /></div>
        <div id="projects"><ProjectsSection /></div>
        <div id="contact"><ContactSection /></div>
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/proyecto/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
};

export default App;