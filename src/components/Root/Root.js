import "./Root.css";
import { Link, Outlet } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import ContactButton from "../ContactButton/ContactButton";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import { isMobileDevice } from "../../assets/helper_functions";
import { Twirl as Hamburger } from 'hamburger-react';
import Logo from "../Logo/Logo";

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
        <div className="navbar-container">
          <div className="nav-header-container">
            <Logo />
            <div className="nav-subheader">
              <span className="underlined">
                Serving North New Jersey for over 20 years
              </span>
            </div>
          </div>
          <div className="navbar">
            <div className="nav-links">
              <Link to={`/`} className="past-projects-text">Home</Link>
              <Link to={`/services`} className="services-text">Services</Link>
              <Link to={`/past-projects`} className="past-projects-text">Past Projects</Link>
            </div>
            <div className="nav-more-info">
              <a href="https://www.facebook.com/mandpcompany/" target="_blank" rel="noreferrer" className="fb-logo-container">
                <FaFacebookSquare className="fb-logo" />
              </a>
              <ContactButton text="Get In Touch" />
            </div>
          </div>
        </div>}
      {isMobile &&
        <div>

          <div className="navbar-mobile">
            <div className="hamburger-container">
              <Link to={`/`} onClick={() => setOpen(false)}>
                <Logo />
              </Link>
              <span className="nav-link-button" onClick={() => setOpen(false)}>
                <ContactButton text="Get In Touch" />
              </span>
              <div className="hamburger">
                <Hamburger toggled={isOpen} toggle={setOpen} size={42} rounded={true} />
              </div>
            </div>
            <div className="grid-rows-collapsible" style={isOpen ? { gridTemplateRows: "1fr" } : {}}>
              <div className="nav-links-mobile" style={isOpen ? { borderBottom: "2px solid var(--primary-red)"} : {}}>
                <span className="nav-link-mobile" onClick={() => setOpen(false)}>
                  <Link to={`/`} className="services-text">Home</Link>
                </span>
                <span className="nav-link-mobile" onClick={() => setOpen(false)}>
                  <Link to={`/services`} className="services-text">Services</Link>
                </span>
                <span className="nav-link-mobile" onClick={() => setOpen(false)}>
                  <Link to={`/past-projects`} className="past-projects-text">Past Projects</Link>
                </span>
                <a href="https://www.facebook.com/mandpcompany/" target="_blank" rel="noreferrer">
                  <FaFacebookSquare className="nav-mobile-fb-logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      }
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;