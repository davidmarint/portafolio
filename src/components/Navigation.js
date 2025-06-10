import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ConditionalNavigation = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Hook para obtener la ruta actual
  const navigate = useNavigate(); // Hook para navegar programáticamente
  
  // CONDICIÓN PRINCIPAL: ¿Estamos en la página principal?
  const isHomePage = location.pathname === '/';
  
  console.log('Página actual:', location.pathname);
  console.log('¿Es página principal?', isHomePage);

  // Función inteligente que decide qué hacer según la página
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    
    // Cerrar menú móvil si está abierto
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    
    // AQUÍ ESTÁ LA LÓGICA CONDICIONAL:
    if (isHomePage) {
      // CASO 1: Estamos en la página principal (/)
      // → Hacer scroll suave a la sección
      console.log('Estamos en home, haciendo scroll a:', targetId);
      
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 64,
          behavior: 'smooth'
        });
      } else {
        console.warn(`Sección "${targetId}" no encontrada en la página`);
      }
      
    } else {
      // CASO 2: Estamos en otra página (/proyecto/1, /about, etc.)
      // → Navegar al home Y luego hacer scroll
      console.log('Estamos en otra página, navegando a home y luego a:', targetId);
      
      // Opción A: Navegar y esperar a que cargue la página
      navigate('/');
      
      // Usar setTimeout para esperar que la página se renderice
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 64,
            behavior: 'smooth'
          });
        }
      }, 100); // Esperar 100ms para que el DOM se actualice
      
      // Opción B (alternativa): Usar el hash en la URL
      // navigate(`/#${targetId}`);
    }
  };

  // Función para ir directamente al home (sin sección específica)
  const goToHome = () => {
    if (isHomePage) {
      // Ya estamos en home, ir al inicio de la página
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navegar al home
      navigate('/');
    }
  };

  // Cerrar menú móvil al redimensionar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Helper para las clases CSS (igual que antes)
  const getLinkClasses = (section) => {
    const baseDesktopClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors";
    const baseMobileClasses = "block px-3 py-2 rounded-md text-base font-medium";
    
    // Solo mostrar como "activo" si estamos en home Y es la sección correcta
    const isActive = isHomePage && activeSection === section;
    
    const desktopClasses = isActive
      ? `text-red-600 ${baseDesktopClasses}`
      : `text-white hover:text-red-600 ${baseDesktopClasses}`;
    
    const mobileClasses = isActive
      ? `text-red-600 bg-gray-700 ${baseMobileClasses}`
      : `text-white hover:bg-gray-700 ${baseMobileClasses}`;
    
    return {
      desktop: desktopClasses,
      mobile: mobileClasses
    };
  };

  return (
    <nav className="fixed w-full bg-black bg-opacity-90 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo - comportamiento condicional */}
          <div className="flex items-center">
            <button 
              onClick={goToHome}
              className="text-white font-bold text-xl hover:text-red-600 transition-colors"
            >
              <span className="text-red-600">David </span>Marin
            </button>
          </div>
          
          
          {/* Navegación desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={(e) => handleNavClick(e, 'home')}
                className={getLinkClasses('home').desktop}
                title={isHomePage ? 'Ir al inicio de la página' : 'Ir al home'}
              >
                Inicio
              </button>
              
              <button 
                onClick={(e) => handleNavClick(e, 'skills')}
                className={getLinkClasses('skills').desktop}
                title={isHomePage ? 'Ir a Habilidades' : 'Ir al home → Habilidades'}
              >
                Habilidades
              </button>
              
              <button 
                onClick={(e) => handleNavClick(e, 'projects')}
                className={getLinkClasses('projects').desktop}
                title={isHomePage ? 'Ir a Proyectos' : 'Ir al home → Proyectos'}
              >
                Proyectos 
              </button>
              
              <button 
                onClick={(e) => handleNavClick(e, 'contact')}
                className={getLinkClasses('contact').desktop}
                title={isHomePage ? 'Ir a Contacto' : 'Ir al home → Contacto'}
              >
                Contacto
              </button>
            </div>
          </div>
          
          {/* Botón menú móvil */}
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
      
      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={(e) => handleNavClick(e, 'home')}
              className={`${getLinkClasses('home').mobile} w-full text-left`}
            >
              Inicio
            </button>
            
            <button 
              onClick={(e) => handleNavClick(e, 'skills')}
              className={`${getLinkClasses('skills').mobile} w-full text-left`}
            >
              Habilidades 
            </button>
            
            <button 
              onClick={(e) => handleNavClick(e, 'projects')}
              className={`${getLinkClasses('projects').mobile} w-full text-left`}
            >
              Proyectos
            </button>
            
            <button 
              onClick={(e) => handleNavClick(e, 'contact')}
              className={`${getLinkClasses('contact').mobile} w-full text-left`}
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ConditionalNavigation;