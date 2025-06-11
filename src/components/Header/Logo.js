import React from 'react';

const Logo = ({ onClick }) => {
  return (
    <div className="flex items-center">
      <button 
        onClick={onClick}
        className="text-white font-bold text-xl hover:text-red-600 transition-colors"
      >
        <span className="text-red-600">David </span>Marin
      </button>
    </div>
  );
};

export default Logo;
