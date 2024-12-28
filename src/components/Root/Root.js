import "./Root.css";
import { Link, Outlet } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import ContactButton from "../ContactButton/ContactButton";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import { isMobileDevice } from "../../assets/helper_functions";
import { Squeeze as Hamburger } from 'hamburger-react';

const Root = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isMobileDevice()) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <div className="root">
      {!isMobile &&
        <div className="navbar">
          <Link to={``} className="logo">M&P</Link>
          <div className="nav-links">
            <Link to={`services`} className="services-text">Services</Link>
            <Link to={`past-projects`} className="past-projects-text">Past Projects</Link>
          </div>
          <div className="nav-more-info">
            <div className="fb-logo-container">
              <a href="https://www.facebook.com/mandpcompany/" target="_blank" rel="noreferrer" style={{ margin: 0 }}>
                <FaFacebookF className="fb-logo" />
              </a>
            </div>
            <ContactButton text="Get In Touch" />
          </div>
        </div>}
      {isMobile &&
        <div className="navbar-mobile">
          <div className="hamburger-container">
            <div className="hamburger">
              <Hamburger toggled={isOpen} toggle={setOpen} size={30} rounded={true} />
            </div>
            <span onClick={() => setOpen(false)}>
              <Link to={``} className="logo-mobile">M&P</Link>
            </span>
          </div>
          <div className="nav-links-mobile" style={isOpen ? { display: 'flex' } : { display: 'none' }}>
            <span className="nav-link-mobile" onClick={() => setOpen(false)}>
              <Link to={``} className="services-text">Home</Link>
            </span>
            <span className="nav-link-mobile" onClick={() => setOpen(false)}>
              <Link to={`services`} className="services-text">Services</Link>
            </span>
            <span className="nav-link-mobile" onClick={() => setOpen(false)}>
              <Link to={`past-projects`} className="past-projects-text">Past Projects</Link>
            </span>
            <a href="https://www.facebook.com/mandpcompany/" target="_blank" rel="noreferrer" style={{ margin: 0 }}>
              <FaFacebookF className="nav-mobile-fb-logo" />
            </a>
            <span className="nav-link-mobile button-mobile" onClick={() => setOpen(false)}>
              <ContactButton text="Get In Touch" />
            </span>
          </div>
        </div>
      }
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;