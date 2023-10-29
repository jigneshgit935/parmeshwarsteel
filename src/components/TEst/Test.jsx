import React from 'react';
import { motion } from 'framer-motion';
import './Test.css';
const Test = () => {
  const backgroundImage = {
    initial: {
      x: 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      variants={backgroundImage}
      initial="initial"
      animate="animate"
      className="test"
    ></motion.div>
  );
};

export default Test;
