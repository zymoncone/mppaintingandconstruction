import "./CallToAction.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact#root');
  };

  return (
    <div className="cta-container">
      <div className="cta-content">
        <h2>Ready to transform your space?</h2>
        <p>Get in touch for a free consultation and quote on your project</p>
        <button
          className="cta-button"
          onClick={handleContactClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Get a Free Quote
          <span className={`cta-arrow ${isHovered ? 'arrow-animate' : ''}`}>→</span>
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
