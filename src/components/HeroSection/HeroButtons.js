import React from 'react';

const HeroButtons = ({ gradientType, onContactClick, cvUrl }) => {
  const handleDownloadCV = () => {
    window.open(cvUrl, '_blank');
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
      <button
        onClick={handleDownloadCV}
        className={`px-8 py-3 ${gradientType === 0 ? 'bg-yellow-400' : 'bg-white'} text-gray-900 font-bold rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg`}
      >
        Descargar CV
      </button>
      <button
        onClick={onContactClick}
        className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
      >
        Contacto
      </button>
    </div>
  );
};

export default HeroButtons;