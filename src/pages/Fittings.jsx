import React from 'react';
import ProductsDetails from '../components/ProductsDetails/ProductsDetails';

const Fittings = () => {
  const post = {
    title: '',
    metaDescription: '',
    h1: 'Fittings',
    aboutSection: {
      paragraph1:
        'Metal fittings provide many benefits when used in pneumatic industrial applications. Depending on the metal materials used, Polyconn’s pneumatic fittings can be corrosion-resistant and durable. As metal fittings display high strength compared to other materials, they are well-suited to applications requiring an ability to restrict movement and stand firm',
    },

    productTables: {
      title: 'Types of Fittings',
      title1: 'Metal Available for Fittings',
      heading: [{ Srno: 'Sr.no', title: 'Fittings' }],
      heading1: [{ Srno: 'Sr.no', title: 'Metal' }],
      points: [
        { id: '1', points: 'IC Fittings' },
        { id: '2', points: 'Dairy Fittings' },
        { id: '3', points: 'BSPT Fittings' },
        { id: '4', points: 'BSPP Fittings' },
        { id: '5', points: 'NPT Fittings' },
        { id: '6', points: 'Pipe Fittings' },
        { id: '7', points: 'Compression Fittings' },
        { id: '8', points: 'DOT Fittings' },
        { id: '9', points: 'Hydrolic Fittings' },
      ],
      points1: [
        { id: '1', points: 'MS' },
        { id: '2', points: 'Copper' },
        { id: '3', points: 'Steel' },
        { id: '4', points: 'Bronze' },
        { id: '5', points: 'Stainless-Steel' },
        { id: '6', points: 'Alluminium' },
        { id: '7', points: 'Nickel' },
        { id: '8', points: 'Monel' },
        { id: '9', points: 'Gunmetel' },
        { id: '10', points: 'Brass' },
        { id: '11', points: 'Non-Ferrous Allow' },
        { id: '12', points: 'Ferrous Allow' },
      ],
    },
  };
  return <ProductsDetails {...post} />;
};

export default Fittings;
