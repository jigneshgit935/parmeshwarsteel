import React from 'react';
import { SlLocationPin } from 'react-icons/sl';
import { TfiEmail } from 'react-icons/tfi';
import { LiaPhoneVolumeSolid } from 'react-icons/lia';
import { VscDebugStepInto } from 'react-icons/vsc';
import './Contact.css';
import Layout from '../../components/Layout/Layout';

const address = [
  {
    icons: <LiaPhoneVolumeSolid size={60} color="blue" />,
    personInfo: '+91 9869037711',
    namesperson: '(Jayesh Purohit)',
  },
  {
    icons: <TfiEmail size={60} color="blue" />,
    personInfo: 'psc11mail@gmail.com',
    namesperson: 'Email',
  },
  {
    icons: <VscDebugStepInto size={60} color="blue" />,
    namesperson: 'GSTIN',
    personInfo: '27FDEPP1007A1Z4',
  },
  {
    icons: <SlLocationPin size={60} color="blue" />,
    name: 'Office Address',
    subpara:
      '26, 1st Floor, 65/71 Haji Kasam Bldg, Near Durgadevi Street, 2nd Kumbharwada, Mumbai - 400 004.',
  },
  {
    icons: <SlLocationPin size={60} color="blue" />,
    name: 'Godown Address',
    subpara:
      ' 6, Gr. Floor, 10/12, Shankar Marwadi chawl, X Crosslane, 4th Khetwadi, Girgaon, Mumbai - 400 004',
  },
  {
    icons: <SlLocationPin size={60} color="blue" />,
    name: 'Godown Address',
    subpara:
      ' 6, Gr. Floor, 10/12, Shankar Marwadi chawl, X Crosslane, 4th Khetwadi, Girgaon, Mumbai - 400 004',
  },
];

const Contact = () => {
  return (
    <Layout>
      <div className=" ">
        <div
          className="text-center text-white bgImageContact"
          style={{ padding: '80px 0px' }}
        >
          <h1 className="display-3 fw-bold ">Contact</h1>
        </div>

        <div className="py-5 bgimgcontacthere">
          <div className="px-lg-5 px-md-3 px-2">
            <div className="d-flex flex-wrap ">
              {address.map((item, index) => {
                return (
                  <div className="col-lg-4 col-md-6 col-12 my-lg-4 my-3 px-lg-2 px-md-2 px-0">
                    <div className="d-flex justify-content-center">
                      <div className="contactContainer shadow text-center py-3 px-5  d-flex flex-column justify-content-evenly align-items-center">
                        <span className="mt-3">{item.icons}</span>
                        <span className="">{item.gstin}</span>
                        <h3 className="">{item.personInfo}</h3>
                        <span className="">{item.namesperson}</span>
                        <h3 className="mt-1">{item.name}</h3>
                        <p className="">{item.subpara}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
