import "./FacebookBanner.css";
import { FaSquareFacebook } from "react-icons/fa6";

const FacebookBanner = () => {
  return (
    <div className="facebook-banner">
      <a href="https://www.facebook.com/mandpcompany/" target="_blank" rel="noopener noreferrer">
        <FaSquareFacebook className="facebook-icon" color="var(--secondary-color)" size={25} />
        <span>See our latest projects and transformations on Facebook</span>
      </a>
    </div>
  );
};

export default FacebookBanner;
