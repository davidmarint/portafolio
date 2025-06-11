import React, { useEffect, useState } from 'react';

const HeroSection = ({ gradientType = 1 }) => {
  // State para la animación de texto
  const [typedText, setTypedText] = useState('');
  const fullText = 'Desarrollador Full-Stack Móvil & Web';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Definimos los diferentes gradientes como opciones
  const gradients = [
    'bg-gradient-to-br from-black via-red-900 to-black', // Negro con rojo profundo
    'bg-gradient-to-br from-red-950 to-black', // Rojo muy oscuro a negro
    'bg-gradient-to-br from-black to-red-800', // Negro a rojo oscuro
    'bg-gradient-to-r from-red-900 via-black to-red-900', // Rojo-Negro-Rojo horizontal
    'bg-gradient-to-br from-gray-900 via-red-800 to-black', // Gris oscuro, rojo, negro
    'bg-gradient-to-bl from-red-600 via-red-900 to-black', // Rojo degradé a negro
  ];

  // Paletas de colores alternativas para acentos
  const accentColors = [
    'text-red-400',      // Para el gradiente negro-rojo-negro
    'text-white',        // Para el rojo oscuro a negro
    'text-red-300',      // Para negro a rojo oscuro
    'text-yellow-400',   // Para rojo-negro-rojo (contraste dorado)
    'text-red-400',      // Para gris-rojo-negro
    'text-red-200',
  ];

  // Efecto de escritura
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 70); // Velocidad de escritura

      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [typedText, fullText]);

  // Función para el scroll suave hacia abajo
  const scrollToNextSection = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Función para la navegación a proyectos
  const navigateToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Función para la navegación a contacto
  const navigateToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`min-h-screen flex flex-col justify-center items-center ${gradients[gradientType]} text-white px-4 relative overflow-hidden`}>
      {/* Elementos de fondo para efecto visual */}
      <div className="absolute inset-0 overflow-hidden z-0">
  <div className="absolute top-10 left-10 w-64 h-64 bg-white opacity-5 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
    <div className="absolute bottom-20 right-10 w-80 h-80 bg-white opacity-5 rounded-full animate-bounce" style={{animationDuration: '6s'}}></div>
  <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-white opacity-5 rounded-full animate-ping" style={{animationDuration: '5s'}}></div>
  

</div>

      <div className="max-w-4xl mx-auto text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Hola, soy <span className={accentColors[gradientType]}>David Marin</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 h-12 flex justify-center items-center">
          <span className="animate-pulse">{typedText}</span>
          {!isTypingComplete && <span className="animate-blink ml-1">|</span>}
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto animate-fade-in delay-200 opacity-90">
          Creo experiencias digitales impactantes que funcionan perfectamente en cualquier dispositivo,
          combinando diseño atractivo con tecnologías modernas para impulsar tu presencia en línea.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
          <button
            onClick={() => window.open('https://drive.google.com/file/d/1c77b6Orx6sYT8FnxQIqi7nBB9d7NrFsf/view', '_blank')}
            className={`px-8 py-3 ${gradientType === 0 ? 'bg-yellow-400' : 'bg-white'} text-gray-900 font-bold rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg`}
          >
            Descargar CV
          </button>
          <button
            onClick={navigateToContact}
            className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            Contacto
          </button>
        </div>

        {/* Redes sociales */}
        <div className="mt-12 flex justify-center space-x-6 animate-fade-in delay-400">
          <a href="https://github.com/davidmarint" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://linkedin.com/in/michael-david-marin-tapiero-509a95335" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Flecha animada para scroll */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-10 animate-bounce cursor-pointer focus:outline-none"
        aria-label="Scroll hacia abajo"
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  );
};

export default HeroSection;