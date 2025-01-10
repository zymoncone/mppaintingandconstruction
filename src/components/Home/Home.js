import "./Home.css";
import { useState, useEffect } from "react";
import { testimonials } from "../../media/testimonials";
import { isMobileDevice } from "../../assets/helper_functions";
import ServicesBanner from "../ServicesBanner/ServicesBanner";
import TestimonialSlideShow from "../TestimonialSlideShow/TestimonialSlideShow";
import AboutBanner from "../AboutBanner/AboutBanner";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (isMobileDevice()) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <div className="home" id="home">
      <div className="home-top">
        {isMobile && <div className="nav-subheader">
          <span className="underlined">
            Serving North New Jersey for over 20 years
          </span>
        </div>}
        <div className="image-container">
          <div className="vans">
            {isMobile ?
            (<img src="https://i.imgur.com/xaoNvw4.png" alt="Fernando Oyola standing in front of his vans" />) :
            (<img src="https://i.imgur.com/Qf4Fkkj.png" alt="Fernando Oyola standing in front of his vans" className="vans-image" />)}
          </div>
        </div>
      </div>
      <ServicesBanner />
      <AboutBanner />
      <TestimonialSlideShow entry={testimonials} />
    </div>
  )
}

export default Home