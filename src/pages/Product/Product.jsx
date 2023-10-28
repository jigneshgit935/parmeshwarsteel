import React from 'react';
import './Product.css';
import Layout from '../../components/Layout/Layout';
// import { motion } from 'framer-motion';
import TableContent from '../../components/TableContent/TableContent';
import ProductCard from '../../components/ProductCard/ProductCard';

const Product = () => {
  // const textVariants = {
  //   initial: {
  //     x: -500,
  //     opacity: 0,
  //   },
  //   animate: {
  //     x: 0,
  //     opacity: 1,
  //     transition: {
  //       duration: 1,
  //       staggerChildren: 0.2,
  //       type: 'spring',
  //       stiffness: 100,
  //       damping: 15,
  //     },
  //   },
  // };
  // const backgroundImage = {
  //   initial: {
  //     x: 0,
  //     opacity: 0,
  //   },
  //   animate: {
  //     x: 0,
  //     opacity: 1,
  //     transition: {
  //       duration: 0.4,
  //       staggerChildren: 0.1,
  //     },
  //   },
  // };
  return (
    <Layout>
      <div className="pb-4">
        <div
          // variants={backgroundImage}
          // initial="initial"
          // animate="animate"
          className="text-center text-white imgBgProducts"
          style={{ padding: '80px 0px' }}
        >
          <h1
            // variants={textVariants}
            // initial="initial"
            // animate="animate"
            className="display-3 fw-bold"
          >
            Our Products
          </h1>
        </div>
        <div className="mt-5">
          <ProductCard />
          <TableContent />
        </div>
      </div>
    </Layout>
  );
};

export default Product;
