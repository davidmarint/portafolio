import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  // Esta función observa qué sección está visible y actualiza el estado
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'contact'];
      let currentSection = activeSection;
      
      // Encontrar qué sección está más visible actualmente
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Si al menos la mitad de la sección está en la ventana, la consideramos activa
          if (rect.top <= window.innerHeight/2 && rect.bottom >= window.innerHeight/2) {
            currentSection = section;
            break;
          }
        }
      }
      
      // Actualizar el estado si la sección ha cambiado
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Llamar una vez al inicio para establecer la sección inicial
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
        <div id="skills"><SkillsSection /></div>
        <div id="projects"><ProjectsSection /></div>
        <div id="contact"><ContactSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default App;

// DONE