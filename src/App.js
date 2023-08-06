import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Product from './pages/Product/Product';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/" element={<Product />} />
        <Route path="/about/" element={<About />} />
        <Route path="/contact/" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
