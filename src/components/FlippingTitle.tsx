import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function FlippingTitle() {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      rotateX: direction > 0 ? 90 : -90,
      opacity: 0
    }),
    center: {
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1]
      }
    },
    exit: (direction: number) => ({
      rotateX: direction < 0 ? 90 : -90,
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1]
      }
    })
  };

  return (
    <div className="perspective-1000 h-24 mb-8">
      <AnimatePresence mode="wait" custom={isFlipped ? 1 : -1}>
        {isFlipped ? (
          <motion.div
            key="programmer"
            custom={1}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary-dark glowing-text"
          >
            I'm a Programmer
          </motion.div>
        ) : (
          <motion.div
            key="name"
            custom={-1}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-primary-light glowing-text"
          >
            Mohamed Essam
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}