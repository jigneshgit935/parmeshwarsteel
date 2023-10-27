import React from 'react';
import './PreLoader.css';
import { motion } from 'framer-motion';
const Preloader = () => {
  return (
    <div className="preloader">
      <motion.div
        className="spinner"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
};

export default Preloader;
