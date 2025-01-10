import "./Root.css";
import { Link, Outlet, useLocation } from "react-router-dom";
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
  const [isRootOpen, setRootOpen] = useState(false);

  const menuOpenSettings = {
    backgroundColor: "rgba(81, 39, 39, 0.8)",
    height: "100%",
    width: "100%"
  };
  const menuClosedSettings = {
    backgroundColor: "rgba(0, 0, 0, 0)",
    height: 0,
    width: 0
  };

  useEffect(() => {
    if (isMobileDevice()) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="root" id="root">
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
          <div className="root-button-container" style={isRootOpen ? menuOpenSettings : menuClosedSettings}>

            <div className="grid-rows-collapsible" style={isRootOpen ? { gridTemplateRows: "1fr" } : {}}>
              <div className="root-button-links">
                <span className="nav-link-mobile" onClick={() => setRootOpen(false)}>
                  <Link to={`/#root`} className="root-button-text">Home</Link>
                </span>
                <span className="nav-link-mobile" onClick={() => setRootOpen(false)}>
                  <Link to={`/services#root`} className="root-button-text">Services</Link>
                </span>
                <span className="nav-link-mobile" onClick={() => setRootOpen(false)}>
                  <Link to={`/past-projects#root`} className="root-button-text">Past Projects</Link>
                </span>
                <div className="nav-menu-mobile-bottom-container">
                <a className="nav-link-mobile root-button-text"
                   href="https://www.facebook.com/mandpcompany/"
                   target={isMobile ? "" : "_blank"}
                   rel={isMobile ? "" : "noreferrer"}>
                  Check Us Out on Facebook
                </a>
                <span className="nav-link-mobile" onClick={() => setRootOpen(false)}>
                  <Link to={`/contact#root`} className="root-button-text">Get In Touch</Link>
                </span>
                </div>

              </div>
            </div>
            <div className="root-button">
              <Hamburger toggled={isRootOpen} toggle={setRootOpen} size={42} rounded={true} />
            </div>

          </div>
          <div className="navbar-mobile">
            <div className="hamburger-container">
              <Link to={`/`} onClick={() => setOpen(false)}>
                <Logo />
              </Link>
              <div className="nav-button-header-container-row">
                <div className="nav-button-header-container-column">
                  <span className="nav-link-button" onClick={() => setOpen(false)}>
                    <ContactButton text="Get In Touch" />
                  </span>
                  <div className="nav-tel-text"><a href="tel:973-827-6350">(973) 827-6350</a></div>
                </div>
              </div>
            </div>
            <div className="grid-rows-collapsible" style={isOpen ? { gridTemplateRows: "1fr" } : {}}>
              <div className="nav-links-mobile" style={isOpen ? { borderBottom: "2px solid var(--primary-red)" } : {}}>
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