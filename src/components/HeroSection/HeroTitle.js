import React from 'react';

const HeroTitle = ({ name, accentColor }) => {
  return (
    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
      Hola, soy <span className={accentColor}>{name}</span>
    </h1>
  );
};

export default HeroTitle;