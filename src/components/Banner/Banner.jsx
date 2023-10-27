import React from 'react';
import './Banner.css';
import Image from '../../assets/bannerBg1.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Banner = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
        type: 'spring',
        stiffness: 100,
        damping: 15, // Adjust the damping value here
      },
    },
  };
  const backgroundImage = {
    initial: {
      x: 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <>
      <div className="">
        <div>
          <motion.div
            variants={backgroundImage}
            initial="initial"
            animate="animate"
            className="alignTextOnImage"
          >
            <motion.img
              variants={backgroundImage}
              src={Image}
              alt="banner img"
              className="img-fluid bannerImg"
              style={{ width: '100%', height: '600px' }}
            />
          </motion.div>
          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="alignOnImage text-white px-lg-5 px-md-5 px-2"
          >
            <motion.h1
              variants={textVariants}
              className="display-4 text-lg-start text-md-start text-center"
              style={{ fontWeight: 700 }}
            >
              Pipe Fittings, Flanges Manufacturer <br /> and Suppliers in India
            </motion.h1>
            <motion.h4
              variants={textVariants}
              className=" text-lg-start  text-md-start text-center"
            >
              Ferrous & Non-Ferrous Metal, Stainless Steel, Buttweld fittings,
              Monel, Nickel, Duplex, <br /> Titanium All (percentage items)
              Export Quality.
            </motion.h4>

            <motion.div
              variants={textVariants}
              className="d-flex justify-content-center justify-content-md-start justify-content-lg-start"
            >
              <Link to="/products">
                <motion.button className="buttonBanner py-2 mx-lg-0 mx-md-0 mx-3">
                  View More
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  variants={textVariants}
                  className="buttonBannerMobile py-2  mx-3"
                >
                  Quote
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Banner;
