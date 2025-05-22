import React, { useState, useEffect } from 'react';

const Navigation = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para manejar la navegación suave
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    
    // Cerrar el menú móvil si está abierto
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 64, // Ajuste para la altura del navbar
        behavior: 'smooth'
      });
    }
  };

  // Cerrar el menú móvil al redimensionar la ventana a un tamaño de escritorio
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Helper para determinar las clases de los enlaces de navegación
  const getLinkClasses = (section) => {
    const baseDesktopClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors";
    const baseMobileClasses = "block px-3 py-2 rounded-md text-base font-medium";
    
    // Determinar si este enlace corresponde a la sección activa
    const isActive = activeSection === section;
    
    const desktopClasses = isActive
      ? `text-yellow-400 ${baseDesktopClasses}`
      : `text-white hover:text-yellow-400 ${baseDesktopClasses}`;
    
    const mobileClasses = isActive
      ? `text-yellow-400 bg-gray-700 ${baseMobileClasses}`
      : `text-white hover:bg-gray-700 ${baseMobileClasses}`;
    
    return {
      desktop: desktopClasses,
      mobile: mobileClasses
    };
  };

  return (
    <nav className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-white font-bold text-xl"
            >
              <span className="text-yellow-400">Dev</span>Port
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, 'home')}
                className={getLinkClasses('home').desktop}
              >
                Inicio
              </a>
              <a 
                href="#skills" 
                onClick={(e) => handleNavClick(e, 'skills')}
                className={getLinkClasses('skills').desktop}
              >
                Habilidades
              </a>
              <a 
                href="#projects" 
                onClick={(e) => handleNavClick(e, 'projects')}
                className={getLinkClasses('projects').desktop}
              >
                Proyectos
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className={getLinkClasses('contact').desktop}
              >
                Contacto
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">{isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className={getLinkClasses('home').mobile}
            >
              Inicio
            </a>
            <a 
              href="#skills" 
              onClick={(e) => handleNavClick(e, 'skills')}
              className={getLinkClasses('skills').mobile}
            >
              Habilidades
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleNavClick(e, 'projects')}
              className={getLinkClasses('projects').mobile}
            >
              Proyectos
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className={getLinkClasses('contact').mobile}
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;