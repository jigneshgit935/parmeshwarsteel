import React from 'react';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';
import Diamond from '../../assets/diamond.jpg';
import { Table } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';
import './ProductsDetails.css';

const ProductsDetails = (props) => {
  console.log(props);
  return (
    <Layout>
      <div className="py-3 px-3 ">
        <div className="">
          <Link to="/products">
            <button
              className="px-1 py-1 bg-white"
              style={{
                borderRadius: '50%',
                border: '2px solid #015583',
                overflow: 'hidden',
              }}
            >
              <BsArrowLeft size={30} color="#015583" />
            </button>
          </Link>
          <div className="d-flex  flex-column justify-content-center align-items-center py-2">
            <h1 className="display-1 fw-bold m-0 col-12 text-center">
              {props.h1}
            </h1>
            <div
              className="image-block border my-3"
              style={{
                width: '600px',
                maxWidth: '100%',
                height: '250px',
                overflow: 'hidden',
                borderRadius: '10px',
              }}
            >
              <img
                src={Diamond}
                alt={props.h1}
                className="img-block-child border"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
            <p
              className="text-center"
              style={{ fontSize: '20px', textAlign: 'justify' }}
            >
              {props.aboutSection.paragraph1}
            </p>
          </div>
          <div className="my-4">
            <div className="px-lg-5 px-3">
              <div className="py-2 bg-primary">
                <h4 className="text-white my-auto text-center">
                  {props.productTables.title}
                </h4>
              </div>
              <Table
                bordered
                responsive="md"
                style={{ border: '1px solid #000' }}
              >
                <tbody className="text-center">
                  {props.productTables.heading.map((item) => (
                    <tr>
                      <th style={{ width: '150px' }}>{item.Srno}</th>
                      <th>{item.title}</th>
                    </tr>
                  ))}
                  {props.productTables.points.map((item) => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.points}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
          <div className="my-4">
            <div className="px-lg-5 px-3">
              <div className="py-2 bg-primary">
                <h4 className="text-white my-auto text-center">
                  {props.productTables.title1}
                </h4>
              </div>
              <Table
                bordered
                responsive="md"
                style={{ border: '1px solid #000' }}
              >
                <tbody className="text-center">
                  {props.productTables.heading1.map((item) => (
                    <tr>
                      <th style={{ width: '150px' }}>{item.Srno}</th>
                      <th>{item.title}</th>
                    </tr>
                  ))}
                  {props.productTables.points1.map((item) => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.points}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsDetails;
