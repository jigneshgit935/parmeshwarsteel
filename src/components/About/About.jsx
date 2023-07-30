import React from 'react';
import Pipe from '../../assets/pipe.jpg';
import './About.css';

const About = () => {
  return (
    <div className=" px-lg-5 px-md-4 px-3 py-5">
      <div id="about" className="py-lg-5 py-0 ">
        <div className="d-flex flex-wrap ">
          <div className="col-lg-6 col-12 d-flex  justify-content-center align-items-center">
            <img
              src={Pipe}
              alt=""
              className="img-fluid "
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="col-lg-6 col-12 ">
            <div
              className="px-lg-4 px-0 d-flex  flex-column justify-content-evenly"
              style={{ width: '100%', height: '100%' }}
            >
              <div className="d-flex">
                <span className="d-flex justify-content-center align-items-center">
                  {/* <hr className="me-2" id="hrTag" /> */}
                </span>
                <h1 className="fw-bold underline-for-heading">About Us</h1>
              </div>
              <div className="">
                <p className="mt-lg-4 mt-3" style={{ fontSize: '18px' }}>
                  We, Parmeshwar Steel Center founded in 1980's by our visionary
                  entrepreneur Shri XYZ having an experience of more than 3
                  decades in this field, Parmeshwar Steel Center is now a well
                  established and learning manufacturers and suppliers of&nbsp;
                  <b>PIPE FITTINGS, FLANGES and FASTENERS</b>.
                </p>
                <p className="mt-lg-4 mt-3" style={{ fontSize: '18px' }}>
                  In today's competitive and demanding market place it takes
                  more than just supply of material to become a reliable
                  supplier. We at PSC have painstakingly master the Supply Chain
                  Network with excellent source capability, thorough knowledge
                  of product, extensive product range, capabilities to supply on
                  demand, scalabilty and efficient management to become a real "
                  <b>Partner in Progress</b>" for clients.
                </p>
                <p className="mt-lg-4 mt-3" style={{ fontSize: '18px' }}>
                  Our satisfied and repeat customers of over 3 decades are the
                  who's and who of Oil & Gas, Petrochemicals, Refineries, Power,
                  Steel, Chemical & Fertilizer, Water Treatment, Offshore,
                  Nuclear and other sectors in India and globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
