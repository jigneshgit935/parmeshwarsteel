import React from 'react';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';

const ProductsDetails = (props) => {
  return (
    <Layout>
      <div className="bg-primary py-5">
        <Link to="/products">
          <button className="px-3 py-2 my-3 rounded ">
            Back to Products Page
          </button>
        </Link>
        <div className="py-5 px-5 bg-danger">
          <h1 className="display-2">{props.h1}</h1>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsDetails;
