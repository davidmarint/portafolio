import { useNavigate } from 'react-router-dom';

export const useNavigation = ({ isHomePage, activeSection, isMenuOpen, setIsMenuOpen }) => {
  const navigate = useNavigate();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    
    if (isHomePage) {
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
      console.log('Estamos en otra página, navegando a home y luego a:', targetId);
      
      navigate('/');
      
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 64,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  const goToHome = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const getLinkClasses = (section) => {
    const baseDesktopClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors";
    const baseMobileClasses = "block px-3 py-2 rounded-md text-base font-medium";
    
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

  return {
    handleNavClick,
    goToHome,
    getLinkClasses
  };
};