import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
      <div className="footer-content-top">
        <div className="footer-content-left">
          <div className="footer-title">M&P Painting & Remodeling</div>
          <div className="footer-text">Servicing North New Jersey</div>
          <div className="footer-text">DoCA License #13VH09587100</div>
        </div>
        <div className="footer-content-right">
          <div className="footer-title">Contact Me</div>
          <div className="footer-text"><a href="mailto:mppaintingandconstruction@yahoo.com">mppaintingandconstruction@yahoo.com</a></div>
          <div className="footer-text"><a href="tel:973-827-6350">(973) 827-6350</a></div>
          <a href="https://www.facebook.com/mandpcompany/" target="_blank" rel="noreferrer">
            <FaFacebookSquare className="footer-fb-logo" />
          </a>
        </div>
      </div>
        <div className="footer-bottom">
          <div className="footer-bottom-text">© 2025 M&P Painting & Remodeling</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;