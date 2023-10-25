import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Product from './pages/Product/Product';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import About from './components/About/About';
import Fittings from './pages/Fittings';
import Pipes from './pages/Pipes';
import Flanges from './pages/Flanges';
import ICFittings from './pages/BoldFastners';
import BSPTFittings from './pages/BSPTFittings';
import Wire from './pages/Wire';
import BarsWires from './pages/BarsWires';
import SteelPlates from './pages/SteelPlates';
import AngleChannels from './pages/AngleChannels';
import PercentageAlloys from './pages/PercentageAlloys';

function App() {
  return (
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
        <Route path="/bspt-fittings" element={<BSPTFittings />} />
        <Route path="/bars-wires" element={<BarsWires />} />
        <Route path="/steets-plates" element={<SteelPlates />} />
        <Route path="/wires-bars" element={<Wire />} />
        <Route path="/percentage-alloys" element={<PercentageAlloys />} />
      </Routes>
    </div>
  );
}

export default App;
