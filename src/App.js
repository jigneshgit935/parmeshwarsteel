import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Product from './pages/Product/Product';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Fittings from './pages/Fittings';
import Pipes from './pages/Pipes';
import Flanges from './pages/Flanges';
import ICFittings from './pages/BoldFastners';
import Wire from './pages/Wire';
import BarsWires from './pages/BarsWires';
import SteelPlates from './pages/SteelPlates';
import AngleChannels from './pages/AngleChannels';
import PercentageAlloys from './pages/PercentageAlloys';
import Rods from './pages/Rods';
import { useEffect, useState } from 'react';
import Preloader from './components/Preloader/Preloader';
import About from './components/About/About';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  });
  return (
    <>
      {/* {!loading ? (
        <Preloader />
      ) : ( */}
      <div className="App container-width">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/fittings" element={<Fittings />} />
          <Route path="/pipes" element={<Pipes />} />
          <Route path="/flanges" element={<Flanges />} />
          <Route path="/bold-fastners" element={<ICFittings />} />
          <Route path="/angle-channels" element={<AngleChannels />} />
          <Route path="/rods" element={<Rods />} />
          <Route path="/bars-wires" element={<BarsWires />} />
          <Route path="/steets-plates" element={<SteelPlates />} />
          <Route path="/wires-bars" element={<Wire />} />
          <Route path="/percentage-alloys" element={<PercentageAlloys />} />
        </Routes>
      </div>
      {/* )} */}
    </>
  );
}

export default App;
