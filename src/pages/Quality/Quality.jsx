import React from 'react';
import './Quality.css';
import QualityCheck from '../../assets/qualityCheck.jpg';
import Layout from '../../components/Layout/Layout';

const Quality = () => {
  return (
    <Layout>
      <>
        <div
          className="text-center text-white bgImageQuality"
          style={{ padding: '80px 0px' }}
        >
          <h1 className=" display-3 fw-bold ">Quality</h1>
        </div>
        <div className="my-5 container">
          <div className="d-flex">
            <h1 className="fw-bold underline-for-heading">
              Quality Policy & Quality Assurance
            </h1>
          </div>
          <div className="row py-4">
            <div className="py-lg-3 py-0 col-lg-6 col-12">
              <div className="row ">
                <div className="col-lg-6 py-lg-3 py-0 col-md-6 col-12">
                  <div>
                    <div className="d-flex justify-content-center">
                      <img
                        src={QualityCheck}
                        alt="qualityCheckImage"
                        className="img-fluid"
                      />
                    </div>
                    <p
                      className="mt-lg-3 mt-2"
                      style={{ fontSize: '17px', textAlign: 'justify' }}
                    >
                      The company has over two-decade long record of servicing
                      clienteles on both national and international ground.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div>
                    <p
                      className="mt-lg-3 mt-2"
                      style={{ fontSize: '17px', textAlign: 'justify' }}
                    >
                      The business attaches important emphasis on ensuring
                      obedience to quality standards at all levels. The basic
                      thrust of the quality philosophy is summed up in the
                      company's Quality Policy which serves as the bench mark of
                      all functions executed by the company.
                    </p>
                    <p
                      className="mt-lg-3 mt-2"
                      style={{ fontSize: '17px', textAlign: 'justify' }}
                    >
                      Strict quality declaration system is being surveyed in all
                      our departments and Total Quality Management is applied to
                      rationalize and all the measures and practices in
                      operation to achieve high average of efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-lg-3 py-0 col-lg-6 col-12 d-flex flex-column alignborderforQuality">
              <p
                className="mt-lg-3 mt-2"
                style={{ fontSize: '17px', textAlign: 'justify' }}
              >
                We are committed to furnishing superior quality products at an
                inexpensive price with schedule constancy. The company has
                industrialized quality objectives and work plans for a quality
                organization. We follow rigorous quality control standards by
                reviewing and nursing each production process.
              </p>
              <p
                className="mt-lg-3 mt-2"
                style={{ fontSize: '17px', textAlign: 'justify' }}
              >
                Each product of our range is tested as per the internationally
                accepted standards using various test procedures. We also
                facilitate specific testing as per the client's requirement. For
                quality control, we have a team of quality-checking staff.
              </p>
              <p
                className="mt-lg-3 mt-2"
                style={{ fontSize: '17px', textAlign: 'justify' }}
              >
                The materials supplied by us are as per the norms tested by
                Government recognized laboratories. AS AN ISO 9001: 2008 As An
                ISO 9001: 2008 We adhere to strict quality control and have
                developed our in-house quality control process. This process
                involves the use of famous Toyota production system methods like
                the kanban system, poka yoke, and just in time.
              </p>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Quality;
