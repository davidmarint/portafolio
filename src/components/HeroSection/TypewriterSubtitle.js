import React from 'react';
import { useTypewriter } from '../../hooks/useTypewriter';

const TypewriterSubtitle = ({ text }) => {
  const { typedText, isComplete } = useTypewriter(text);

  return (
    <h2 className="text-2xl md:text-3xl font-semibold mb-8 h-12 flex justify-center items-center">
      <span className="animate-pulse">{typedText}</span>
      {!isComplete && <span className="animate-blink ml-1">|</span>}
    </h2>
  );
};

export default TypewriterSubtitle;