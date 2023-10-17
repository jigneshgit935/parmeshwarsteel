import React from 'react';
import ProductsDetails from '../components/ProductsDetails/ProductsDetails';

const ICFittings = () => {
  const post = {
    title: '',
    metaDescription: '',
    h1: 'ICFittings',
    aboutSection: {
      paragraph1:
        'Flanges are used to connect pipes with each other, to valves, to fittings, and to specialty items such as strainers and pressure vessels. A cover plate can be connected to create a blind flange. Flanges are joined by bolting, and sealing is often completed with the use of gaskets or other methods.',
    },

    benefitsSection: {
      title: 'Benefits of Hiring Dedicated Angular JS Developers',
      keyPoints: [
        'Improve Project Outcomes',
        'Cost-effective',
        'No investment On Hardware/Software Requirement',
        'Get Access to Skilled Developers',
        'Agile Approach',
        'Collaborative Engagement',
        'Painless Project Management',
        'Greater focus on business',
      ],
      image:
        'https://images.unsplash.com/photo-1603404235009-71c1f80e31fc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
  };
  return <ProductsDetails {...post} />;
};

export default ICFittings;
