import React from 'react';

const MobileMenuButton = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="-mr-2 flex md:hidden">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
        aria-expanded={isMenuOpen}
      >
        <span className="sr-only">
          {isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        </span>
        <svg 
          className="h-6 w-6" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          ) : (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          )}
        </svg>
      </button>
    </div>
  );
};

export default MobileMenuButton;