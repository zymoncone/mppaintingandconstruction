import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="services-title">Services</div>

      {/* BATHROOM REMODEL */}
      <div className="service-container">
        <div className="service-image-container">
          <img src="https://i.imgur.com/0iCQm08.jpeg" alt="bathroom remodel" />
        </div>
        <div className="service-text-container">
          <div className="service-title">Bathroom Remodel</div>
          <div className="service-text-subcontainer">
            <div className="service-paragraph">
              If you want to improve the functionality or appearance of your bathroom,
              count on me for the job.
              Rest assured that you will get the bathroom you have always wanted
              with my quality products and services.
            </div>
            <div className="service-list">
              <div className="service-list-title">Bathroom Remodel Services</div>
              <div className="service-list-item">Tile Installation</div>
              <div className="service-list-item">Sink, Toilet, and Tub Installation</div>
              <div className="service-list-item">Framing</div>
              <div className="service-list-item">Sheetrock</div>
              <div className="service-list-item">Walk-in Showers</div>
              <div className="service-list-item">Shower Door Installation</div>
              <div className="service-list-item">Plumbing</div>
            </div>
            <div className="service-links-container">
              <Link to={`/contact#contact`} className="service-links">Get An Estimate</Link>
              <Link to={`/past-projects#projects`} className="service-links">See Examples</Link>
            </div>
          </div>
        </div>
      </div>

      {/* KITCHEN REMODEL */}
      <div className="service-container">
        <div className="service-image-container">
          <img src="https://i.imgur.com/pneZxNz.jpeg" alt="kitchen remodel" />
        </div>
        <div className="service-text-container">
          <div className="service-title">Kitchen Remodel</div>
          <div className="service-text-subcontainer">
            <div className="service-paragraph">
            Allow me to make your kitchen beautiful!
            Do you want to remodel your kitchen and make it
            look even more stunning than it is now? Trust the experts
            at M&P to take care of all your remodeling needs.
            Get consulation about your dream kitchen and
            rely on me to fulfill your vision.
            </div>
            <div className="service-list">
              <div className="service-list-title">Kitchen Remodel Services</div>
              <div className="service-list-item">Backsplash</div>
              <div className="service-list-item">Cabinet Installation</div>
              <div className="service-list-item">Tile Installation</div>
              <div className="service-list-item">Sink Installation</div>
              <div className="service-list-item">Recessed Light Installation</div>
              <div className="service-list-item">Painting Services</div>
              <div className="service-list-item">Cabinet Refinishing</div>
              <div className="service-list-item">Open Concept</div>
            </div>
            <div className="service-links-container">
              <Link to={`/contact#contact`} className="service-links">Get An Estimate</Link>
              <Link to={`/past-projects#projects`} className="service-links">See Examples</Link>
            </div>
          </div>
        </div>
      </div>

       {/* BASEMENT REMODEL */}
       <div className="service-container">
        <div className="service-image-container">
          <img src="https://i.imgur.com/mUsBjjz.jpeg" alt="basement remodel" />
        </div>
        <div className="service-text-container">
          <div className="service-title">Basement Remodel</div>
          <div className="service-text-subcontainer">
            <div className="service-paragraph">
            Don't let your basement space go to waste! At M&P, I
            believe that there's no limit to imagination. If
            you have thought of ways to enhance your basement space,
            count on me to bring your ideas to life. Trust me to
            provide you with complete basement remodeling and finishing
            services. Whether you want to install hardwood flooring or
            a home theater system, I will handle everything with ease!
            </div>
            <div className="service-list">
              <div className="service-list-title">Basement Remodel Services</div>
              <div className="service-list-item">Basement renovation</div>
              <div className="service-list-item">Framing</div>
              <div className="service-list-item">Insulation</div>
              <div className="service-list-item">Sheetrock</div>
              <div className="service-list-item">Painting</div>
              <div className="service-list-item">Lighting</div>
              <div className="service-list-item">Hardwood Floor Installation</div>
              <div className="service-list-item">Additions</div>
              <div className="service-list-item">Man Caves</div>
              <div className="service-list-item">Home Theater Installation</div>
              <div className="service-list-item">Wet Bars Installation</div>
            </div>
            <div className="service-links-container">
              <Link to={`/contact#contact`} className="service-links">Get An Estimate</Link>
              <Link to={`/past-projects#projects`} className="service-links">See Examples</Link>
            </div>
          </div>
        </div>
      </div>

      {/* DECKS AND PATIOS */}
      <div className="service-container">
        <div className="service-image-container">
          <img src="https://i.imgur.com/aK3LyS2.jpeg" alt="decks and patios" />
        </div>
        <div className="service-text-container">
          <div className="service-title">Decks & Patios</div>
          <div className="service-text-subcontainer">
            <div className="service-paragraph">
            A beautiful deck in your backyard is the perfect
            place for you to relax and spend some quality time
            with your friends and family. Whether you want to
            install a new deck on your property or replace the
            old one, hire the experienced team at M&P for the job.
            We also provide deck maintenance services. We use both
            water-based and oil-based products for our deck services.
            </div>
            <div className="service-list">
              <div className="service-list-title">Deck & Patio Services</div>
              <div className="service-list-item">Installation</div>
              <div className="service-list-item">Replacement</div>
              <div className="service-list-item">Maintenance</div>
              <div className="service-list-item">Restaining</div>
              <div className="service-list-item">Repainting</div>
              <div className="service-list-item">Power Washing</div>
              <div className="service-list-item">Restoration of Gray Wood</div>
              <div className="service-list-item">Treatment of Algae and Mildew</div>
              <div className="service-list-item">Pressure-treated Pine and Cedar</div>
              <div className="service-list-item">Weather Sealing</div>
            </div>
            <div className="service-links-container">
              <Link to={`/contact#contact`} className="service-links">Get An Estimate</Link>
              <Link to={`/past-projects#projects`} className="service-links">See Examples</Link>
            </div>
          </div>
        </div>
      </div>

      {/* POWER WASHING */}
      <div className="service-container">
        <div className="service-image-container">
          <img src="https://i.imgur.com/cMTIUTu.jpeg" alt="power Washing" />
        </div>
        <div className="service-text-container">
          <div className="service-title">Power Washing</div>
          <div className="service-text-subcontainer">
            <div className="service-paragraph">
            Over time, your property's exterior will lose its appeal
            due to accumulated grime and dust. If you want to give
            your property a fresh look once again, trust the experts at M&P
             to make it happen. Our excellent power washing services
             will make your property look like new again. From siding
             and decks to retaining walls, we can clean them all.
            </div>
            <div className="service-list">
              <div className="service-list-title">Power Washing Services</div>
              <div className="service-list-item">Cleaning vinyl, aluminium and cedar siding</div>
              <div className="service-list-item">Decks</div>
              <div className="service-list-item">Docks</div>
              <div className="service-list-item">Retaining Walls</div>
              <div className="service-list-item">Concrete, Brick, and Stone Facing</div>
            </div>
            <div className="service-links-container">
              <Link to={`/contact#contact`} className="service-links">Get An Estimate</Link>
              <Link to={`/past-projects#projects`} className="service-links">See Examples</Link>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Services;