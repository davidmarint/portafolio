import React from 'react';

const ScrollArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-10 animate-bounce cursor-pointer focus:outline-none"
      aria-label="Scroll hacia abajo"
    >
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </button>
  );
};

export default ScrollArrow;