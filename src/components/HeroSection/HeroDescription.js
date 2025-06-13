import React from 'react';

const HeroDescription = ({ description }) => {
  return (
    <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto animate-fade-in delay-200 opacity-90">
      {description}
    </p>
  );
};

export default HeroDescription;