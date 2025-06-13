import { useEffect, useState } from 'react';

export const useTypewriter = (text, speed = 70) => {
  const [typedText, setTypedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (typedText.length < text.length) {
      const timeout = setTimeout(() => {
        setTypedText(text.slice(0, typedText.length + 1));
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [typedText, text, speed]);

  return { typedText, isComplete };
};