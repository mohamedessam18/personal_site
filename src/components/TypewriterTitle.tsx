import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const phrases = ["I'm a Programmer", "Mohamed Essam"];

export function TypewriterTitle() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      }
    } else {
      if (displayText === currentPhrase) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 100);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhraseIndex]);

  const gradientColors = theme === 'dark' 
    ? 'from-primary-light to-primary-dark'
    : 'from-primary-dark to-primary-light';

  return (
    <div className="h-24 mb-8 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative"
      >
        <motion.h1 
          className={`text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${gradientColors}`}
        >
          <span className="relative">
            {displayText}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ 
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className={`absolute -right-[4px] top-0 h-full w-[2px] bg-gradient-to-r ${gradientColors}`}
            />
          </span>
        </motion.h1>
        <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r ${gradientColors} opacity-50`} />
      </motion.div>
    </div>
  );
}