import React from 'react';
import './Banner.css';
import Image from '../../assets/bannerBg1.jpg';
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <>
      <div className="">
        <div>
          <div className="alignTextOnImage">
            <img
              src={Image}
              alt="banner img"
              className="img-fluid bannerImg"
              style={{ width: '100%', height: '600px' }}
            />
          </div>
          <div className="alignOnImage text-white px-lg-5 px-md-5 px-2">
            <h1
              className="display-4 text-lg-start text-md-start text-center"
              style={{ fontWeight: 600 }}
            >
              Pipe Fittings, Flanges Manufacturer <br /> and Suppliers in India
            </h1>
            <h4 className=" text-lg-start  text-md-start text-center">
              Ferrous & Non-Ferrous Metal, Stainless Steel, Buttweld fittings,
              Monel, Nickel, Duplex, <br /> Titanium All (percentage items)
              Export Quality.
            </h4>

            <div className="d-flex justify-content-center justify-content-md-start justify-content-lg-start">
              <Link to="/products">
                <button className="buttonBanner py-2 mx-lg-0 mx-md-0 mx-3">
                  View More
                </button>
              </Link>

              <Link to="/contact">
                <button className="buttonBannerMobile py-2  mx-3">Quote</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
