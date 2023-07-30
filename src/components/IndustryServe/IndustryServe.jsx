import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import dairyImage from '../../assets/dairyImage.jpg';
import foodAndDairy from '../../assets/food &dairy insutry.jpeg';
import paperMills from '../../assets/paper mills.jpg';
import Pharma from '../../assets/pharmaceutikal.jpg';
import sugarMills from '../../assets/sugar mills.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './IndustryServe.css';
const serviceData = [
  {
    image: dairyImage,
    titles: 'Dairy',
  },
  {
    image: foodAndDairy,
    titles: 'Food Industries',
  },
  {
    image: paperMills,
    titles: 'Paper Mills',
  },
  {
    image: Pharma,
    titles: 'Pharmaceutikal',
  },
  {
    image: sugarMills,
    titles: 'Sugar and Mills',
  },
];
const IndustryServe = () => {
  return (
    <div className="py-5">
      <div className="px-lg-5 px-md-3 px-2">
        <div className="d-flex justify-content-lg-start justify-content-center">
          <h1 className="fw-bold text-center underline-for-heading d-inline">
            Industries we serve
          </h1>
        </div>
        <div className="d-flex flex-wrap mt-lg-3 mt-2">
          <div className="px-2 col-lg-4 col-12 d-flex  flex-column justify-content-between text-lg-start text-center">
            <h1 className="" style={{ fontWeight: '900' }}>
              Industries our products are used
            </h1>
            <p className="mt-3 ">
              We have serve various of industries in India, as well as over
              world wide recently we have supplied large quantity of{' '}
              <b>Pipe Fittings, Flanges</b> to Sugar Mills, Pharmacutical
              Industry and Water Treatment Plant
            </p>
          </div>
          <div className="col-lg-8 col-12 ">
            <div>
              <MultiItemCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryServe;

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="nextArrorDesignIndustries" onClick={onClick}>
      <BsArrowRight color="white" className="" size={25} onClick={onClick} />
    </button>
  );
};

// Custom Prev Arrow component
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="prevArrorDesignIndustries" onClick={onClick}>
      <BsArrowLeft color="white" className=" " onClick={onClick} size={25} />
    </button>
  );
};

const MultiItemCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      {serviceData.map((item, index) => (
        <div
          key={index}
          className="px-2 d-flex justify-content-center  postionArrowIndustries"
        >
          <div
            className="d-flex flex-column justify-content-between align-items-center "
            style={{
              width: '300px',
              maxWidth: '100%',
              height: '250px',
              backgroundColor: '#fff',
              opacity: '82%',
            }}
          >
            <div className="border" style={{ width: '100%', height: '80%' }}>
              <img
                src={item.image}
                alt=""
                className="img-fluid"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <h4 className="fw-bold">{item.titles}</h4>
          </div>
        </div>
      ))}
    </Slider>
  );
};