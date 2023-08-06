import React from 'react';
import Layout from '../Layout/Layout';

const ProductsDetails = (props) => {
  return (
    <Layout>
      <div className="py-5 px-5 bg-danger">
        <h1 className="display-2">{props.h1}</h1>
      </div>
    </Layout>
  );
};

export default ProductsDetails;
