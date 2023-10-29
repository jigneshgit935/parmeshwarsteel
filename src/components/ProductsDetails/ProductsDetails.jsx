import React from 'react';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';
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
                src={props.imageSection}
                alt={props.h1}
                className="img-block-child border"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
            {!props.heading1Main ? (
              ''
            ) : (
              <h2 className="fw-bold py-2">{props.heading1Main}</h2>
            )}

            {props.aboutSection.length !== 0 ? (
              <>
                <p
                  className="text-center"
                  style={{ fontSize: '20px', textAlign: 'justify' }}
                >
                  {props.aboutSection.paragraph1}
                </p>
              </>
            ) : (
              ''
            )}
          </div>
          {!props.productTables.points ? (
            ''
          ) : (
            <div className="my-4">
              <div className="px-lg-5 px-3">
                <>
                  {!props.productTables.pointHead ? (
                    ''
                  ) : (
                    <h3 className="">{props.productTables.pointHead}</h3>
                  )}
                  {!props.productTables.pointPara ? (
                    ''
                  ) : (
                    <p
                      style={{ fontSize: '19px', textAlign: 'justify' }}
                      className=""
                    >
                      {props.productTables.pointPara}
                    </p>
                  )}
                </>
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
                        <th className="table-th-width">{item.Srno}</th>
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
          )}
          {!props.productTables.points1 ? (
            ''
          ) : (
            <div className="my-4">
              <div className="px-lg-5 px-3">
                {!props.productTables.title1 ? (
                  ''
                ) : (
                  <div className="py-2 bg-primary">
                    <h4 className="text-white my-auto text-center">
                      {props.productTables.title1}
                    </h4>
                  </div>
                )}
                <>
                  {!props.productTables.point1Head ? (
                    ''
                  ) : (
                    <h3 className="">{props.productTables.point1Head}</h3>
                  )}
                  {!props.productTables.point1Para ? (
                    ''
                  ) : (
                    <p
                      style={{ fontSize: '19px', textAlign: 'justify' }}
                      className=""
                    >
                      {props.productTables.point1Para}
                    </p>
                  )}
                </>

                <Table
                  bordered
                  responsive="md"
                  style={{ border: '1px solid #000' }}
                >
                  <tbody className="text-center">
                    {props.productTables.heading1.map((item) => (
                      <tr>
                        <th className="table-th-width">{item.Srno}</th>
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
          )}
          {props.ifTrue === 'true' ? (
            <div className="px-lg-5 px-3 my-4">
              <Table
                bordered
                responsive="md"
                style={{ border: '1px solid #000' }}
              >
                <tbody className="text-center">
                  <tr>
                    <td className="fw-bold table-th-width" rowSpan="7">
                      Stainless Steel
                    </td>
                    <td>
                      <b>200 Series – </b>201, 202, 205.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>300 Series</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      301, 302, 303, 304, 304L, 308, 309, 309S, 310, 310S, 314,
                      316, 316L, 316TI, 317, 317L, 321, 347.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>400 Series</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      405, 409, 429, 430, 430F, 430FSe, 434, 436, 442, 446, 403,
                      410, 414,416, 416Se, 420,420F, 422, 431, 440A, 440B, 440C.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b> 500 Series – </b>501, 502.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>600 Series –</b> 630 (17-4 PH).
                    </td>
                  </tr>

                  <tr>
                    <td className="fw-bold" rowSpan={2}>
                      Carbon Steel
                    </td>
                    <td>ASTM / ASME A105.</td>
                  </tr>
                  <tr>
                    <td>ASTM / ASME A 350 LF 2 .</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Alloy Steel</td>
                    <td>
                      ASTM / ASME A 182 GR F 5, F 9 , F 11 , F 12 , F 22 , F 91.
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Duplex / Super Duplex Steel</td>
                    <td>
                      D S31803, D S32205, SD S32750, SD S32760, SD S32950.
                    </td>
                  </tr>

                  <tr>
                    <td className="fw-bold">Inconel</td>
                    <td>601, 625, 660A, 718, X-750, 825, 925, 608.</td>
                  </tr>

                  <tr>
                    <td className="fw-bold">Monel</td>
                    <td>400, K500.</td>
                  </tr>

                  <tr>
                    <td className="fw-bold">Hastelloy</td>
                    <td>C22, C276, X, B-2.</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          ) : (
            ''
          )}
          {props.tablefittingIfTrue === 'true' ? (
            <div className="my-4">
              <div className="px-lg-5 px-3">
                <h3>Stainless Steel Forged Fittings Mechanical Properties</h3>
                <p style={{ fontSize: '19px', textAlign: 'justify' }}>
                  The mechanical properties of the stainless steel forged
                  fittings are displayed in the following table:
                </p>
                <div className="py-2 bg-primary">
                  <h4 className="text-white my-auto text-center">
                     Mechanical Properties
                  </h4>
                </div>
                <Table
                  bordered
                  responsive="md"
                  style={{ border: '1px solid #000' }}
                >
                  <tbody className="text-center">
                    <tr>
                      <th className="table-th-width" rowSpan={2}>
                        Type
                      </th>
                      <th rowSpan={2}>UNS</th>
                      <th>Tensile</th>
                      <th>Yield</th>
                      <th>Elongation</th>
                      <th>Hardness</th>
                      <th>Hardness</th>
                    </tr>

                    <tr>
                      {/* <td>304*</td> */}
                      <th>(KSI) min</th>
                      <th>(KSI) min</th>
                      <th>min</th>
                      <th>(Brinell) max</th>
                      <th>(Rockwell B) max</th>
                    </tr>
                    <tr>
                      <td>304*</td>
                      <td>S30400</td>
                      <td>75</td>
                      <td>30</td>
                      <td>40% in 2″</td>
                      <td>183</td>
                      <td>88</td>
                    </tr>
                    <tr>
                      <td>304L*</td>
                      <td>S30403</td>
                      <td>70</td>
                      <td>30</td>
                      <td>40% in 2″</td>
                      <td>183</td>
                      <td>88</td>
                    </tr>
                    <tr>
                      <td>316*</td>
                      <td>S31600</td>
                      <td>75</td>
                      <td>30</td>
                      <td>40% in 2″</td>
                      <td>217</td>
                      <td>95</td>
                    </tr>
                    <tr>
                      <td>316L*</td>
                      <td>S31603</td>
                      <td>70</td>
                      <td>25</td>
                      <td>35% in 2″</td>
                      <td>217</td>
                      <td>95</td>
                    </tr>
                    <tr>
                      <td>321</td>
                      <td>S32100</td>
                      <td>75</td>
                      <td>30</td>
                      <td>40% in 2″</td>
                      <td>183</td>
                      <td>88</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          ) : (
            ''
          )}

          {props.tablefittingIfTrueExtra === 'true' ? (
            <div className="my-4">
              <div className="px-lg-5 px-3">
                <h3>Stainless Steel Forged Fittings Chemical Composition</h3>
                <p style={{ fontSize: '19px', textAlign: 'justify' }}>
                  The chemical reactivity of stainless steel Forged Fittings is
                  essential since it impacts the fitting’s ability to resist
                  corrosion and other characteristics.
                </p>
                <div className="py-2 bg-primary">
                  <h4 className="text-white my-auto text-center">
                    Chemical Composition
                  </h4>
                </div>
                <Table
                  bordered
                  responsive="md"
                  style={{ border: '1px solid #000' }}
                >
                  <tbody className="text-center">
                    <tr>
                      <th className="table-th-width">Type</th>
                      <th style={{ width: '400px' }}>C</th>
                      <th>Mn</th>
                      <th>P</th>
                      <th>S</th>
                      <th>Si</th>
                      <th>Cr</th>
                      <th>Ni</th>
                      <th>Mo</th>
                    </tr>

                    <tr>
                      <td>304*</td>
                      <td>0.08</td>
                      <td>2</td>
                      <td>0.045</td>
                      <td>0.03</td>
                      <td>1</td>
                      <td>18.00/20.00</td>
                      <td>8.00/10.50</td>
                      <td>–</td>
                    </tr>

                    <tr>
                      <td>304L*</td>
                      <td>0.03</td>
                      <td>2</td>
                      <td>0.045</td>
                      <td>0.03</td>
                      <td>1</td>
                      <td>18.00/20.00</td>
                      <td>8.00/12.00</td>
                      <td>–</td>
                    </tr>

                    <tr>
                      <td>316*</td>
                      <td>0.08</td>
                      <td>2</td>
                      <td>0.045</td>
                      <td>0.03</td>
                      <td>1</td>
                      <td>16.00/18.00</td>
                      <td>10.00/14.00</td>
                      <td>2.00/3.00</td>
                    </tr>

                    <tr>
                      <td>316L*</td>
                      <td>0.03</td>
                      <td>2</td>
                      <td>0.045</td>
                      <td>0.03</td>
                      <td>1</td>
                      <td>16.00/18.00</td>
                      <td>10.00/14.00</td>
                      <td>2.00/3.00</td>
                    </tr>

                    <tr>
                      <td>321</td>
                      <td>0.08</td>
                      <td>2</td>
                      <td>0.04</td>
                      <td>0.03</td>
                      <td>1</td>
                      <td>17.00/19.00</td>
                      <td>9.00/12.00</td>
                      <td>0.75/0.75</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductsDetails;
