import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/logoparm.png';
import cross from '../../assets/cross.png';
import humberg from '../../assets/humberg.png';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [show, setShow] = useState('translate-y-0');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 250) {
        if (window.scrollY > lastScrollY) {
          setShow('minusTrans');
        } else {
          setShow('shadow-sm');
        }
      } else {
        setShow('translate-y-0');
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      <header className={`borderMain py-2 ${show}`}>
        <div className="px-lg-5 px-3 navbar d-flex justify-content-between">
          <div className="d-flex">
            <Link
              style={{ textDecoration: 'none' }}
              to="/"
              className="navbar-logo"
            >
              <img src={Logo} alt="" className="img-fluid navbarlogoherer" />
            </Link>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu my-auto'}>
            <div className="menu-icon" onClick={handleClick} aria-hidden="true">
              {click ? (
                <img
                  src={cross}
                  className="img-fluid menu-icons "
                  style={{ position: 'absolute', top: '30px', right: '40px' }}
                  alt="menu-icon"
                />
              ) : (
                <img
                  src={cross}
                  className="img-fluid menu-icons "
                  style={{ position: 'absolute', top: '30px', right: '40px' }}
                  alt="menu-icon"
                />
              )}
            </div>

            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/#about"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="">
            <Link to="/contact">
              <button className="buttonDesign me-auto">Quote</button>
            </Link>
          </div>
          <div className="menu-icon" onClick={handleClick} aria-hidden="true">
            {click ? (
              <img
                src={humberg}
                className="img-fluid menu-icons"
                alt="menu-icon"
              />
            ) : (
              <img
                src={humberg}
                className="img-fluid menu-icons"
                alt="menu-icon"
              />
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
