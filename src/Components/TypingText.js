import React, { useState, useEffect } from 'react';

const TypingText = ({ texts = [] }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    if (texts.length === 0) {
      return;
    }

    const currentText = texts[currentTextIndex];

    const typingTimer = setTimeout(() => {
      if (typedText.length < currentText.length) {
        setTypedText(currentText.slice(0, typedText.length + 1));
      } else if (currentTextIndex < texts.length - 1) {
        setCurrentTextIndex(currentTextIndex + 1);
        setTypedText('');
      }
    }, 100); // Adjust the typing speed by modifying the delay value (in milliseconds)

    return () => clearTimeout(typingTimer);
  }, [currentTextIndex, typedText, texts]);

  return <span>{typedText}</span>;
};
export default TypingText;

