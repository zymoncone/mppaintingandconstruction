import "./FacebookBanner.css";
import { FaFacebook } from "react-icons/fa";

const FacebookBanner = () => {
  return (
    <div className="facebook-banner">
      <a href="https://www.facebook.com/mandpcompany/" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="facebook-icon" />
        <span>See our latest projects and transformations on Facebook</span>
      </a>
    </div>
  );
};

export default FacebookBanner;
