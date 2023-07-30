import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './Counter.css';

const Counter = ({ className, ...rest }) => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="my-5">
        <div className="py-5 bgCounterImage">
          <div className="container py-lg-5 py-md-2 py-0 text-white">
            <div className="row  text-center justify-content-center ">
              <div className="col-12 col-md-6 col-lg-3 my-lg-0 my-md-4 my-4">
                <h1 className="">
                  {counterOn && (
                    <CountUp start={0} end={10} duration={2} delay={0} />
                  )}
                  +
                </h1>
                <h3 className="">On the market</h3>
              </div>
              <div className="col-12 col-md-6 col-lg-3 my-lg-0 my-md-4 my-4">
                <h1 className="">
                  {counterOn && (
                    <CountUp start={0} end={1000} duration={2} delay={0} />
                  )}
                  +
                </h1>
                <h3>Hours</h3>
              </div>

              <div className="col-12 col-md-6 col-lg-3 my-lg-0 my-md-4 my-4">
                <h1>
                  {counterOn && (
                    <CountUp start={0} end={20} duration={2} delay={0} />
                  )}
                  +
                </h1>
                <h3>Completed Projects</h3>
              </div>
              <div className="col-12 col-md-6 col-lg-3 my-lg-0 my-md-4 my-4">
                <h1>
                  {counterOn && (
                    <CountUp start={0} end={40} duration={2} delay={0} />
                  )}
                  +
                </h1>
                <h3>Cities Delivered</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
