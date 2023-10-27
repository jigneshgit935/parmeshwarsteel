import React from 'react';
import './Product.css';
import ImageOne from '../../assets/img1.jpg';
import ImageTwo from '../../assets/img2.jpg';
import ImageThree from '../../assets/img3.jpg';
import ImageFor from '../../assets/img4.jpg';
import AngleChannel from '../../assets/angleMain.jpg';
import Bars from '../../assets/bars.jpg';
import ImageEight from '../../assets/img8.jpg';
import ImageTen from '../../assets/img10.jpg';
import { Table } from 'react-bootstrap';
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom';

const dataone = [
  { cities: 'Banglore' },
  { cities: 'Mumbai' },
  { cities: 'Chennai' },
  { cities: 'Hyderabad' },
  { cities: 'Kolkata' },
  { cities: 'Pune' },
];

const datatwo = [
  { cities: 'New Delhi' },
  { cities: 'Ahmedabad' },
  { cities: 'Jaipur' },
  { cities: 'Surat' },
  { cities: 'Salem' },
  { cities: 'Gandhinagar' },
];

const datathree = [
  { cities: 'Bhiwandi' },
  { cities: 'Tiruppur' },
  { cities: 'Sivakasi' },
  { cities: 'Jamnagar' },
  { cities: 'Thiruvananthapuram' },
  { cities: 'Rajahmundry' },
];

const datafour = [
  { cities: 'Bhubaneshwar' },
  { cities: 'Vijaywada' },
  { cities: 'Firozabad' },
  { cities: 'Bakaro Steel City' },
  { cities: 'Rajkot' },
  { cities: 'Bharush' },
];

const datafive = [
  { cities: 'Panna' },
  { cities: 'Raipur' },
  { cities: 'Cochin' },
  { cities: 'Ludhiana' },
  { cities: 'Panipat' },
  { cities: 'Durgapur' },
];

const datasix = [
  { cities: 'Peenya' },
  { cities: 'Pimpri-Chinchwad' },
  { cities: 'Channapatna' },
  { cities: 'Kharagpur' },
  { cities: 'Nashik' },
  { cities: 'Bareilly' },
];

const dataseven = [
  { cities: 'Varanasi' },
  { cities: 'Haldia' },
  { cities: 'Rourkela' },
  { cities: 'Banglore' },
  { cities: 'Moradabad' },
  { cities: 'Inodore' },
];
const dataeight = [
  { cities: 'Visakhapatnam' },
  { cities: 'Trivandrum' },
  { cities: 'Pithampur' },
  { cities: 'Dibrugarh' },
  { cities: 'Angul' },
  { cities: 'Gwalior' },
];

const datanine = [
  { cities: 'Coimbatore' },
  { cities: 'Kannur' },
  { cities: 'Nagpur' },
  { cities: 'Vadodara' },
  { cities: 'Rudrapur' },
  { cities: 'Noida' },
];

const dataten = [
  { cities: 'Agra' },
  { cities: 'Bhagalpur' },
  { cities: 'Jamshedpur' },
  { cities: 'Bhilai' },
  { cities: 'Lucknow' },
  { cities: 'Kanpur' },
];
const dataelven = [
  { cities: 'Thane' },
  { cities: 'Bhopal' },
  { cities: 'Navi Mumbai' },
  { cities: 'Vasai' },
  { cities: 'Bikaner' },
  { cities: 'Maharashtra' },
];
const productData = [
  {
    link: '/fittings',
    name: 'Fittings',
    img: ImageOne,
  },
  {
    link: '/pipes',
    name: 'Pipes',
    img: ImageTwo,
  },
  {
    link: '/flanges',
    name: 'Flanges',
    img: ImageThree,
  },
  {
    link: '/bold-fastners',
    name: 'Bold / Fastners',
    img: ImageFor,
  },
  {
    link: '/angle-channels',
    name: 'Angle / Channels',
    img: AngleChannel,
  },
  {
    link: '/steets-plates',
    name: 'Steets / PLates',
    img: ImageEight,
  },
  {
    link: '/bars-wires',
    name: 'Bars / Wires',
    img: Bars,
  },
  {
    link: '/percentage-alloys',
    name: 'percentage alloys',
    img: ImageTen,
  },
  {
    link: '/rods',
    name: 'Rods',
    img: ImageTen,
  },
];

const Product = () => {
  return (
    <Layout>
      <div className="pb-4">
        <div
          className="text-center text-white imgBgProducts"
          style={{ padding: '80px 0px' }}
        >
          <h1 className="display-3 fw-bold">Our Products</h1>
        </div>
        <div className="mt-5">
          <div className="d-flex justify-content-lg-start widhheading justify-content-center align-items-center">
            <h1 className=" fw-bold underline-for-heading d-inline">
              StockList and Suppliers of
            </h1>
          </div>
          <div className="py-3 grid-container">
            {productData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="grid-item shadow "
                  style={{ backgroundColor: '#Fafafa' }}
                >
                  <div className="">
                    <img
                      src={item.img}
                      alt="product-img"
                      className="imgWidth "
                    />
                  </div>
                  <h1 className="mt-lg-2 text-capitalize mt-4">{item.name}</h1>
                  <Link to={item.link}>
                    <button
                      className="mt-2 px-5 py-2 rounded-5 bg-transparent"
                      style={{ fontSize: '18px' }}
                    >
                      Learn More
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>

          <h3 className="pb-3 text-center paddingSupplirePara">
            Stainless Steel Industrial raw material like Elbows, Tee, Reducer,
            Nipple, cap, Flanges, IC fittings, BSPT & NPT Fittings, Dairy
            Fittings, Pipes, Sheet, Plate, Bar, Coir, Wire, Gun Metal,
            Aluminium, Copper, Brass, MS, Etc.
          </h3>
          <div className="px-lg-5 px-3">
            <div className="my-3">
              <h4 className="">
                We supply our products in below cities in India
              </h4>
            </div>
            {/* <h4>We supply our products in below cities in India</h4> */}
            <div className="py-2 bg-primary">
              <h6 className="text-white my-auto text-center">
                Manufactures, Suppliers of our Products
              </h6>
            </div>
            <Table
              bordered
              responsive="md"
              style={{ border: '1px solid #000' }}
            >
              <tbody className="text-center">
                <tr>
                  {dataone.map((item) => (
                    <td>{item.cities}</td>
                  ))}
                </tr>
                <tr>
                  {datatwo.map((item) => (
                    <td>{item.cities}</td>
                  ))}
                </tr>
                <tr>
                  {datathree.map((item) => (
                    <td>{item.cities}</td>
                  ))}
                </tr>
                <tr>
                  {datafour.map((item) => (
                    <td>{item.cities}</td>
                  ))}
                </tr>
                <tr>
                  {datafive.map((item) => (
                    <td>{item.cities}</td>
                  ))}
                </tr>
                <tr>
                  {datasix.map((item) => (
                    <td>{item.cities}</td>
                  ))}
                </tr>
                <tr>
                  {dataseven.map((item) => (
                    <td>{item.cities}</td>
                  ))}
                </tr>
                <tr>
                  {dataeight.map((item) => (
                    <td>{item.cities}</td>
                  ))}
                </tr>
                <tr>
                  {datanine.map((item) => (
                    <td>{item.cities}</td>
                  ))}
                </tr>
                <tr>
                  {dataten.map((item) => (
                    <td>{item.cities}</td>
                  ))}
                </tr>
                <tr>
                  {dataelven.map((item) => (
                    <td>{item.cities}</td>
                  ))}
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
