'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < value) {
        setCount(prevCount => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust interval as needed

    return () => clearInterval(interval);
  }, [count, value]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 10000 }}
      animate={{ opacity: 10, y: 10 }}
      transition={{ duration: 2 }}
    >
      {count}
    </motion.span>
  );
};

export default AnimatedCounter;
