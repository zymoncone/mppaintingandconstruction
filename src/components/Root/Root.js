import "./Root.css";
import { Link, Outlet } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import ContactButton from "../ContactButton/ContactButton";

const Root = () => {
  return (
    <div className="root">
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
          <ContactButton text="Get In Touch" onClick={() => {}} />
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Root;