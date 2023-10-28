import React from 'react';
import { Table } from 'react-bootstrap';

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

const tableContentPara =
  ' Stainless Steel Industrial raw material like Elbows, Tee, Reducer, Nipple, cap, Flanges, IC fittings, BSPT & NPT Fittings, Dairy Fittings, Pipes, Sheet, Plate, Bar, Coir, Wire, Gun Metal, Aluminium, Copper, Brass, MS, Etc.';

const headerTagForCities = 'We supply our products in below cities in India';
const headerforManufacturer = ' Manufactures, Suppliers of our Products';
const TableContent = () => {
  return (
    <div>
      <h3 className="pb-3 text-center paddingSupplirePara">
        {tableContentPara}
      </h3>
      <div className="px-lg-5 px-3">
        <div className="my-3">
          <h4 className="">{headerTagForCities}</h4>
        </div>
        {/* <h4>We supply our products in below cities in India</h4> */}
        <div className="py-2 bg-primary">
          <h6 className="text-white my-auto text-center">
            {headerforManufacturer}
          </h6>
        </div>
        <Table bordered responsive="md" style={{ border: '1px solid #000' }}>
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
  );
};

export default TableContent;
