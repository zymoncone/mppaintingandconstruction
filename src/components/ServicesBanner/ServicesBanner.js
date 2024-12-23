import "./ServicesBanner.css";

import { GoHomeFill } from "react-icons/go";
import { PiPaintBrushBroadFill } from "react-icons/pi";
import { BiWater } from "react-icons/bi";
import { GiWoodBeam } from "react-icons/gi";
import ContactButton from "../ContactButton/ContactButton";





const ServicesBanner = () => {
  return (
    <div className="services-banner">
        <h1 className="services-banner-title">Services</h1>
        <div className="services-banner-blocks">
          <div className="services-banner-block">
            <GoHomeFill className="services-banner-block-icon" />
            <div className="services-banner-block-text-container">
            <h2 className="services-banner-block-title">Remodels</h2>
            <p className="services-banner-block-text">We offer a variety of painting services, from interior to exterior painting.</p>
            </div>
          </div>

          <div className="services-banner-block">
            <PiPaintBrushBroadFill className="services-banner-block-icon" />
            <div className="services-banner-block-text-container">
            <h2 className="services-banner-block-title">Painting</h2>
            <p className="services-banner-block-text">We offer a variety of painting services, from interior to exterior painting.</p>
            </div>
          </div>

          <div className="services-banner-block">
            <BiWater className="services-banner-block-icon" />
            <div className="services-banner-block-text-container">
            <h2 className="services-banner-block-title">Power Washing</h2>
            <p className="services-banner-block-text">We offer a variety of painting services, from interior to exterior painting.</p>
            </div>
          </div>

          <div className="services-banner-block">
            <GiWoodBeam className="services-banner-block-icon" />
            <div className="services-banner-block-text-container">
            <h2 className="services-banner-block-title">Decks and Patios</h2>
            <p className="services-banner-block-text">We offer a variety of painting services, from interior to exterior painting.</p>
            </div>
          </div>
        </div>
        <ContactButton text="Get In Touch" onClick={() => {}} />
    </div>
  );
}

export default ServicesBanner;