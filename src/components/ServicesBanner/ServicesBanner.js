import "./ServicesBanner.css";

import { GoHomeFill } from "react-icons/go";
import { PiPaintBrushBroadFill } from "react-icons/pi";
import { BiWater } from "react-icons/bi";
import { GiWoodBeam } from "react-icons/gi";
import ContactButton from "../ContactButton/ContactButton";





const ServicesBanner = () => {
  return (
    <div className="services-banner">
        <h1 className="services-banner-title">My Services</h1>
        <div className="services-banner-blocks">
          <div className="services-banner-block">
            <GoHomeFill className="services-banner-block-icon" />
            <div className="services-banner-block-text-container">
            <h2 className="services-banner-block-title">Remodels</h2>
            <p className="services-banner-block-text">
            M&P offers expert remodeling services for bathrooms,
            kitchens, and basements, providing quality products
            and craftsmanship to bring your vision to life with
            services like tile installation, plumbing, painting,
            and custom features such as walk-in showers, open-concept
            kitchens, and home theaters.
            </p>
            </div>
          </div>

          <div className="services-banner-block">
            <PiPaintBrushBroadFill className="services-banner-block-icon" />
            <div className="services-banner-block-text-container">
            <h2 className="services-banner-block-title">Painting</h2>
            <p className="services-banner-block-text">
            M&P offers a variety of painting services, including interior
            and exterior painting, cabinet refinishing, and sheetrock
            painting, ensuring a flawless finish that enhances the
            beauty and durability of your spaces.
            </p>
            </div>
          </div>

          <div className="services-banner-block">
            <BiWater className="services-banner-block-icon" />
            <div className="services-banner-block-text-container">
            <h2 className="services-banner-block-title">Power Washing</h2>
            <p className="services-banner-block-text">
            M&P offers professional power washing services to revitalize
            your property's exterior, cleaning siding, decks, docks,
            retaining walls, and more to restore its fresh and
            appealing look.
            </p>
            </div>
          </div>

          <div className="services-banner-block">
            <GiWoodBeam className="services-banner-block-icon" />
            <div className="services-banner-block-text-container">
            <h2 className="services-banner-block-title">Decks and Patios</h2>
            <p className="services-banner-block-text">
            M&P specializes in deck and patio services, offering expert
            installation, replacement, maintenance, and restoration
            using high-quality materials and treatments to create and
            preserve the perfect outdoor space for relaxation and
            entertainment.
            </p>
            </div>
          </div>
        </div>
        <ContactButton text="Get In Touch" />
    </div>
  );
}

export default ServicesBanner;