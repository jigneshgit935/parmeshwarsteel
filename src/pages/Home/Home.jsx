import React from 'react';
import Layout from '../../components/Layout/Layout';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import IndustryServe from '../../components/IndustryServe/IndustryServe';
import Slider from '../../components/Slider/Slider';
import Counter from '../../components/Counter/Counter';

const Home = () => {
  return (
    <>
      <Layout>
        <div>
          <Banner />
          <About />
          <Services />
          <IndustryServe />
          <Slider />
          <Counter />
        </div>
      </Layout>
    </>
  );
};

export default Home;
