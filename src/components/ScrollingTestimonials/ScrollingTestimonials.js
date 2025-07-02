import { useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import StarRating from "../StarRating/StarRating";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { shuffleArray } from "../../assets/helper_functions";
import "./ScrollingTestimonials.css";

// Reuse the renderText function from DisplayTestimonial
const renderText = (text) => {
  const renderArr = [];
  const pattern_bold = /~{1}(.+:)/g;
  const pattern_hyperlink = /\[([^\]]*?)\|([^\]]*?)\]/g;
  let textArr = text.split("\n");

  for (const [i, sample] of Object.entries(textArr)) {
    if (sample.match(pattern_bold)) {
      let sampleToBold = sample.split(pattern_bold);
      // index 1 is the first group from regexp
      // index 2 is the remaining text after the match
      renderArr.push(<p key={i}><b>{sampleToBold[1]}</b>{sampleToBold[2]}</p>);
    } else if (sample.match(pattern_hyperlink)) {
      let sampleToHyperlink = sample.split(pattern_hyperlink);
      let allHyperlinkElements = [];
      const hyperlink_color = { color: "#007bff" };

      for (let j = 0; j < sampleToHyperlink.length; j += 4) {
        if (j > 3) {
          let hyperlink = <a href={sampleToHyperlink[j+1]}
                             style={hyperlink_color}
                             target="_blank"
                             rel="noopener noreferrer">{sampleToHyperlink[j]}</a>;
          allHyperlinkElements.push(<span key={`${i}-${j}`}>{hyperlink}{sampleToHyperlink[j+2]}</span>);
        } else {
          let hyperlink = <a href={sampleToHyperlink[j+2]}
                             style={hyperlink_color}
                             target="_blank"
                             rel="noopener noreferrer">{sampleToHyperlink[j+1]}</a>;
          allHyperlinkElements.push(<span key={`${i}-${j}`}>{sampleToHyperlink[j]}{hyperlink}{sampleToHyperlink[j+3]}</span>);
        }
      }
      renderArr.push(<p key={i}>{allHyperlinkElements}</p>);
    } else {
      renderArr.push(<p key={i}>{sample}</p>);
    }
  }

  return <div>{renderArr}</div>;
};

// Testimonial card component
const TestimonialCard = ({ testimonial }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/reviews#root');
  };

  return (
    <div
      className="testimonial-card visible" // Always visible
      onClick={handleCardClick}
    >
      <div className="testimonial-stars">
        <StarRating rating={testimonial.stars} />
      </div>

      <div className="testimonial-content">
        <div className="testimonial-text non-interactive">
          {renderText(testimonial.quote)}
        </div>
      </div>

      <div className="testimonial-footer">
        <div className="testimonial-customer">{testimonial.customers}</div>
        <div className="testimonial-source">
          {testimonial.location === "Google Review" ? (
            <a
              href={testimonial.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="google-review-link"
              onClick={(e) => e.stopPropagation()}
              title="Google Review"
            >
              <FaGoogle className="google-icon-scrollable" />
            </a>
          ) : testimonial.location === "Facebook Review" ? (
            <a
              href={testimonial.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="facebook-review-link"
              onClick={(e) => e.stopPropagation()}
              title="Facebook Review"
            >
              <FaFacebook className="facebook-icon-scrollable" />
            </a>
          ) : (
            testimonial.location
          )}
        </div>
      </div>
      <div className="view-all-indicator">Click to view all reviews</div>
    </div>
  );
};

const ScrollingTestimonials = ({ testimonials }) => {
  const scrollContainerRef = useRef(null);
  const wrapperRef = useRef(null);

  // Shuffle testimonials once when component mounts
  const shuffledTestimonials = useMemo(() => shuffleArray(testimonials), [testimonials]);

  // CSS transform-based scrolling animation (no actual scrolling)
  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const testimonialCards = document.querySelector('.testimonial-cards');
    if (!testimonialCards) return;

    let position = 0;
    let scrollSpeed = 0.7; // pixels per frame
    let lastTimestamp;

    // Animation using CSS transforms instead of scrollTop
    const scrollAnimation = (timestamp) => {
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
      }

      // Calculate elapsed time for consistent speed across framerates
      const elapsed = timestamp - lastTimestamp;

      // Increment position (adjust for 60fps)
      position += scrollSpeed * (elapsed / 16.67);

      // If we've scrolled too far, reset to give the appearance of looping
      // Use the container height as the reset point
      const maxScroll = testimonialCards.scrollHeight - scrollContainerRef.current.clientHeight;
      if (position >= maxScroll) {
        // Smooth reset by shifting just enough to make it look continuous
        position = 0;
      }

      // Use CSS transform to move the content (smoother than scrollTop)
      testimonialCards.style.transform = `translateY(-${position}px)`;

      // Update timestamp
      lastTimestamp = timestamp;

      // Continue the animation
      animationFrame = requestAnimationFrame(scrollAnimation);
    };

    // Start the animation
    let animationFrame = requestAnimationFrame(scrollAnimation);

    // Clean up on unmount
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []); // No dependencies to prevent recreation

  // No need for mouse interaction handlers with the new approach

  return (
    <div className="scrolling-testimonials-wrapper" ref={wrapperRef}>
      <h2 className="testimonials-header">What Our Customers Say</h2>

      <div
        className="scrolling-testimonials-container"
        ref={scrollContainerRef}
      >
        <div className="testimonial-cards">
          {shuffledTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
            />
          ))}

          {/* Duplicate the first few testimonials to create seamless loop effect */}
          {shuffledTestimonials.slice(0, 2).map((testimonial, index) => (
            <TestimonialCard
              key={`duplicate-${index}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>

      <div className="view-all-reviews">
        <a href="/reviews#root" className="view-all-reviews-button">View All Customer Reviews</a>
      </div>
    </div>
  );
};

export default ScrollingTestimonials;