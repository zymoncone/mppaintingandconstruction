import "./Home.css";
import { useState, useEffect, useRef } from "react";
import { testimonials } from "../../media/testimonials";
import { isMobileDevice } from "../../assets/helper_functions";
import { FaStar } from "react-icons/fa";
import ServicesBanner from "../ServicesBanner/ServicesBanner";
import TestimonialSlideShow from "../TestimonialSlideShow/TestimonialSlideShow";
import AboutBanner from "../AboutBanner/AboutBanner";
import FacebookBanner from "../FacebookBanner/FacebookBanner";
import CallToAction from "../CallToAction/CallToAction";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeState, setFadeState] = useState('in'); // 'in' or 'out'
  const timeoutRef = useRef(null);

  const initialImage = {
    desktop: "https://i.imgur.com/Qf4Fkkj.png",
    mobile: "https://i.imgur.com/xaoNvw4.png"
  };

  const slideshowImages = [
    initialImage,
    "https://i.imgur.com/pneZxNz.jpeg",
    "https://i.imgur.com/mUsBjjz.jpeg",
    "https://i.imgur.com/aK3LyS2.jpeg"
  ];

  useEffect(() => {
    if (isMobileDevice()) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  // Image transition handling
  useEffect(() => {
    const startSlideshow = () => {
      if (currentImageIndex === 0 && fadeState === 'in') {
        // Start fading out after 5 seconds on first image
        timeoutRef.current = setTimeout(() => {
          setFadeState('out');
        }, 5000);
      } else if (fadeState === 'out') {
        // After fade-out completes, change image and fade in
        timeoutRef.current = setTimeout(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
          setFadeState('in');
        }, 2000);
      } else if (fadeState === 'in') {
        // After fade-in completes, wait and then fade out
        timeoutRef.current = setTimeout(() => {
          setFadeState('out');
        }, 4000);
      }
    };

    startSlideshow();

    // Cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentImageIndex, fadeState, slideshowImages.length]);

  return (
    <div className="home" id="home">
      <ScrollAnimation type="fade-up">
        <div className="home-top">
          <div className="image-container">
            <div className="home-badge">20+ Years Experience</div>
            <div className="vans">
              <div className={`slideshow-image ${fadeState}`}>
                {currentImageIndex === 0 ? (
                  <img
                    src={isMobile ? initialImage.mobile : initialImage.desktop}
                    alt="Fernando Oyola standing in front of his vans"
                    className="vans-image"
                  />
                ) : (
                  <img
                    src={slideshowImages[currentImageIndex]}
                    alt={`M&P Painting and Construction showcase ${currentImageIndex}`}
                    className="vans-image"
                  />
                )}
              </div>
              <div className="hero-overlay">
                <h1>North Jersey's Trusted Professionals</h1>
                <div className="review-highlight">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p>"Exceptional quality and service" - <span style={{fontWeight: 600, fontStyle: "normal"}}>Google Reviews</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation>
        <FacebookBanner />
      </ScrollAnimation>
      <ScrollAnimation type="fade-right">
        <ServicesBanner />
      </ScrollAnimation>
      <ScrollAnimation type="fade-up">
        <TestimonialSlideShow entry={testimonials} />
      </ScrollAnimation>
      <ScrollAnimation type="fade-left">
        <AboutBanner />
      </ScrollAnimation>
      <ScrollAnimation type="fade-up">
        <CallToAction />
      </ScrollAnimation>
    </div>
  );
};

export default Home;
