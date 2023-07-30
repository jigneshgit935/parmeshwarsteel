import React from 'react';
import Diamond from '../../assets/diamond.jpg';
import Nation from '../../assets/natioan.jpg';
import Sumitomo from '../../assets/sumitomo.JPG';
import Welspon from '../../assets/welspon.jpg';
import VBeverages from '../../assets/varun.png';
import Bajaj from '../../assets/bajaj.JPG';
import './Slider.css';

const imagesData = [
  {
    images: Diamond,
  },
  {
    images: Nation,
  },
  {
    images: Sumitomo,
  },
  {
    images: Welspon,
  },
  {
    images: VBeverages,
  },
  {
    images: Bajaj,
  },
  {
    images: Diamond,
  },
  {
    images: Nation,
  },
  {
    images: Sumitomo,
  },
  {
    images: Welspon,
  },
  {
    images: VBeverages,
  },
  {
    images: Bajaj,
  },
  {
    images: Diamond,
  },
  {
    images: Nation,
  },
  {
    images: Sumitomo,
  },
  {
    images: Welspon,
  },
  {
    images: VBeverages,
  },
  {
    images: Bajaj,
  },
  {
    images: Diamond,
  },
  {
    images: Nation,
  },
  {
    images: Sumitomo,
  },
  {
    images: Welspon,
  },
  {
    images: VBeverages,
  },
  {
    images: Bajaj,
  },
  {
    images: Diamond,
  },
  {
    images: Nation,
  },
  {
    images: Sumitomo,
  },
  {
    images: Welspon,
  },
  {
    images: VBeverages,
  },
  {
    images: Bajaj,
  },
  {
    images: Diamond,
  },
  {
    images: Nation,
  },
  {
    images: Sumitomo,
  },
  {
    images: Welspon,
  },
  {
    images: VBeverages,
  },
  {
    images: Bajaj,
  },
  {
    images: Diamond,
  },
  {
    images: Nation,
  },
  {
    images: Sumitomo,
  },
  {
    images: Welspon,
  },
  {
    images: VBeverages,
  },
  {
    images: Bajaj,
  },
];

const Slider = () => {
  return (
    <div className="py-5">
      <div className="d-flex justify-content-center">
        <h1 className="fw-bold text-center underline-for-heading d-inline">
          Client Portfolio
        </h1>
      </div>
      <div className="logos">
        <div className="logos-slide">
          {imagesData.map((item, index) => {
            return <img key={index} src={item.images} alt="" className="" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
