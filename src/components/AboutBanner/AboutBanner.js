import "./AboutBanner.css";

const AboutBanner = () => {
  return (
    <div className="about-banner">
      <div className="about-title">About Me</div>
      <div className="about-container">
      <div className="about-image-container">
        <img src="https://i.imgur.com/TrmEIBh.png" alt="Print of Fernando Oyola remodeling a kitchen" />
      </div>
      <div className="about-text-container">
        <div className="my-story">My Story</div>
        <div className="about-text">
          <p>
          Eighteen years ago, I started a little remodeling business
          that's grown to be the company we know today! M & P is small
          family-owned business. This means
          we take one job at a time and put all of our resources
          and efforts into making a one of a kind renovation.
          From Vernon to Denville, Englewood and back, we can take
          care of your home improvement project!
          </p>
          <span className="license">
          We are fully DoCA licensed,
          M & P Painting and Construction #13VH09587100.
          </span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AboutBanner;