import "./AboutBanner.css";

const AboutBanner = () => {
  return (
    <div className="about-banner">
      <div className="about-title">About Us</div>
      <div className="about-container">
        <div className="about-image-container">
          <img src="https://i.imgur.com/TrmEIBh.png" alt="Fernando Oyola remodeling a kitchen" />
        </div>
        <div className="about-text-container">
          <div className="my-story">Our Story</div>
          <div className="about-text">
            <p>
              Eighteen years ago, we started a small remodeling business that's grown into the
              trusted company we are today. M&P is a family-owned business that takes pride in
              personal attention and exceptional craftsmanship. We take one job at a time and
              dedicate all our resources to creating truly unique renovations.
            </p>
            <p>
              Serving communities from Vernon to Denville, Englewood and beyond, we're committed to
              bringing your vision to life with quality materials and skilled workmanship.
            </p>
            <div className="license">
              Fully DoCA licensed: M&P Painting and Construction #13VH09587100
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;