import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import DesktopNavigation from "./DesktopNavigation";
import MobileMenuButton from "./MobileButton";
import MobileNavigation from "./MobileNavigation";
import { useNavigation } from "../../hooks/useNavigation";

const ConditionalNavigation = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Hook para obtener la ruta actual
  const isHomePage = location.pathname === "/";

  const { handleNavClick, goToHome, getLinkClasses } = useNavigation({
    isHomePage,
    activeSection,
    isMenuOpen,
    setIsMenuOpen,
  });

  // Cerrar menú móvil al redimensionar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <nav className="fixed w-full bg-black bg-opacity-90 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo onClick={goToHome} />

          {/* Navegación desktop */}
          <DesktopNavigation
            handleNavClick={handleNavClick}
            getLinkClasses={getLinkClasses}
            isHomePage={isHomePage}
          />

          {/* Botón menú móvil */}
          <MobileMenuButton
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </div>

      {/* Menú móvil */}
      <MobileNavigation
        isMenuOpen={isMenuOpen}
        handleNavClick={handleNavClick}
        getLinkClasses={getLinkClasses}
      />
    </nav>
  );
};

export default ConditionalNavigation;
