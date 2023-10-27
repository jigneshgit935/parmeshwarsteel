import React, { useRef } from 'react';
import Pipe from '../../assets/pipe.jpg';
import './About.css';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const variants = {
    initial: {
      x: -200,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  const ref = useRef();

  const isInView = useInView(ref, { margin: '-50px' });
  return (
    <motion.div
      variants={variants}
      initial="initial"
      //   animate="animate"
      whileInView="animate"
      ref={ref}
      animate={isInView && 'animate'}
      className="px-lg-5 px-md-4 px-3 py-5"
    >
      <div className="py-lg-5 py-0 ">
        <div className="d-flex flex-wrap ">
          <motion.div
            variants={variants}
            className="col-lg-6 col-12 d-flex  justify-content-center align-items-center"
          >
            <motion.img
              variants={variants}
              src={Pipe}
              alt=""
              className="img-fluid "
              style={{ width: '100%', height: '100%' }}
            />
          </motion.div>
          <div className="col-lg-6 col-12 ">
            <div
              className="px-lg-4 px-0 d-flex  flex-column justify-content-evenly"
              style={{ width: '100%', height: '100%' }}
            >
              <motion.div variants={variants} className="d-flex">
                <h1 className="fw-bold underline-for-heading">About Us</h1>
              </motion.div>
              <motion.div variants={variants} className="">
                <p
                  className="mt-lg-4 mt-3"
                  style={{ fontSize: '18px', textAlign: 'justify' }}
                >
                  We, Parmeshwar Steel Center founded in 1980's by our visionary
                  entrepreneur Shri XYZ having an experience of more than 3
                  decades in this field, Parmeshwar Steel Center is now a well
                  established and learning manufacturers and suppliers of&nbsp;
                  <b>PIPE FITTINGS, FLANGES and FASTENERS</b>.
                </p>
                <p
                  className="mt-lg-4 mt-3"
                  style={{ fontSize: '18px', textAlign: 'justify' }}
                >
                  In today's competitive and demanding market place it takes
                  more than just supply of material to become a reliable
                  supplier. We at PSC have painstakingly master the Supply Chain
                  Network with excellent source capability, thorough knowledge
                  of product, extensive product range, capabilities to supply on
                  demand, scalabilty and efficient management to become a real "
                  <b>Partner in Progress</b>" for clients.
                </p>
                <p
                  className="mt-lg-4 mt-3"
                  style={{ fontSize: '18px', textAlign: 'justify' }}
                >
                  Our satisfied and repeat customers of over 3 decades are the
                  who's and who of Oil & Gas, Petrochemicals, Refineries, Power,
                  Steel, Chemical & Fertilizer, Water Treatment, Offshore,
                  Nuclear and other sectors in India and globally.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
