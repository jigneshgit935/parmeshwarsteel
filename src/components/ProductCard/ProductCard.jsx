import React from 'react';
import ImageOne from '../../assets/img1.jpg';
import ImageTwo from '../../assets/img2.jpg';
import ImageThree from '../../assets/img3.jpg';
import ImageFor from '../../assets/img4.jpg';
import AngleChannel from '../../assets/angleMain.jpg';
import Bars from '../../assets/bars.jpg';
import ImageEight from '../../assets/img8.jpg';
import ImageTen from '../../assets/img10.jpg';
import { Link } from 'react-router-dom';

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
const ProductCardHeader = 'StockList and Suppliers of';
const ProductCard = () => {
  return (
    <div>
      <div className="d-flex justify-content-lg-start widhheading justify-content-center align-items-center">
        <h1 className=" fw-bold underline-for-heading d-inline">
          {ProductCardHeader}
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
                <img src={item.img} alt="product-img" className="imgWidth " />
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
    </div>
  );
};

export default ProductCard;
