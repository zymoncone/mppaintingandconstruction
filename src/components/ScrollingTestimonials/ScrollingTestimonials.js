import React, { useState, useEffect, useRef } from 'react';
import StarRating from "../StarRating/StarRating";
import { FaGoogle } from "react-icons/fa";
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
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When card becomes visible in the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-10% 0px"
      }
    );

    const currentCard = cardRef.current;
    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, []);

  return (
    <div className={`testimonial-card ${isVisible ? 'visible' : ''}`} ref={cardRef}>
      <div className="testimonial-stars">
        <StarRating rating={testimonial.stars} />
      </div>

      <div className="testimonial-content">
        <div className="testimonial-text">
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
            >
              <FaGoogle className="google-icon" /> {testimonial.location}
            </a>
          ) : (
            testimonial.location
          )}
        </div>
      </div>
    </div>
  );
};

const ScrollingTestimonials = ({ testimonials }) => {
  const scrollContainerRef = useRef(null);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Enable smooth vertical scrolling through testimonials
  useEffect(() => {
    if (!autoScrollEnabled || !scrollContainerRef.current) return;

    const scrollContainer = scrollContainerRef.current;
    const scrollHeight = scrollContainer.scrollHeight;
    const clientHeight = scrollContainer.clientHeight;

    // Don't scroll if there's not enough content
    if (scrollHeight <= clientHeight) return;

    const scrollSpeed = 0.3; // pixels per frame - slower for a more elegant scroll
    let animationFrameId;
    let lastTimestamp = null;

    const scroll = (timestamp) => {
      if (lastTimestamp === null) {
        lastTimestamp = timestamp;
      }

      const elapsed = timestamp - lastTimestamp;

      // Calculate how much to scroll based on time elapsed
      let newPosition = scrollPosition + (scrollSpeed * elapsed / 16); // 16ms is approx one frame at 60fps

      // Reset when we reach the bottom with some offset
      if (newPosition >= scrollHeight - clientHeight) {
        // Reset to just before the first duplicate testimonial
        // This creates a smoother looping effect
        newPosition = 0;

        // Add a small delay before starting the loop again
        setAutoScrollEnabled(false);
        setTimeout(() => setAutoScrollEnabled(true), 1000);
      }

      setScrollPosition(newPosition);
      scrollContainer.scrollTop = newPosition;
      lastTimestamp = timestamp;

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [autoScrollEnabled, scrollPosition]);

  // Pause scrolling when user interacts with the container
  const handleMouseEnter = () => {
    setAutoScrollEnabled(false);
  };

  const handleMouseLeave = () => {
    setAutoScrollEnabled(true);
  };

  const handleScroll = () => {
    if (!autoScrollEnabled && scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollTop);
    }
  };

  return (
    <div className="scrolling-testimonials-wrapper">
      <h2 className="testimonials-header">What Our Customers Say</h2>

      <div
        className="scrolling-testimonials-container"
        ref={scrollContainerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onScroll={handleScroll}
      >
        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
            />
          ))}

          {/* Duplicate the first few testimonials to create seamless loop effect */}
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <TestimonialCard
              key={`duplicate-${index}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingTestimonials;