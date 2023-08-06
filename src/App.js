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
import ICFittings from './pages/ICFittings';
import DairyFittings from './pages/DariyFittings';
import BSPTFittings from './pages/BSPTFittings';
import SteelCaps from './pages/SteelCaps';
import SteelSheets from './pages/SteelSheets';
import Wire from './pages/Wire';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fittings" element={<Fittings />} />
        <Route path="/pipes" element={<Pipes />} />
        <Route path="/flanges" element={<Flanges />} />
        <Route path="/ic-fittings" element={<ICFittings />} />
        <Route path="/dairy-fittings" element={<DairyFittings />} />
        <Route path="/bspt-fittings" element={<BSPTFittings />} />
        <Route path="/steel-caps" element={<SteelCaps />} />
        <Route path="/steel-sheets" element={<SteelSheets />} />
        <Route path="/wires" element={<Wire />} />
      </Routes>
    </div>
  );
}

export default App;
