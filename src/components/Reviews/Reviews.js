import React from 'react';
import { testimonials } from "../../media/testimonials";
import StarRating from "../StarRating/StarRating";
import { FaGoogle } from "react-icons/fa";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import "./Reviews.css";

// Reuse the renderText function from DisplayTestimonial
const renderText = (text) => {
  const renderArr = [];
  const pattern_bold = /~{1}(.+:)/g;
  const pattern_hyperlink = /\[([^\]]*?)\|([^\]]*?)\]/g;
  let textArr = text.split("\n");

  for (const [i, sample] of Object.entries(textArr)) {
    if (sample.match(pattern_bold)) {
      let sampleToBold = sample.split(pattern_bold);
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

// Static review card component
const ReviewCard = ({ testimonial }) => {
  return (
    <div className="review-card">
      <div className="review-stars">
        <StarRating rating={testimonial.stars} />
      </div>

      <div className="review-content">
        <div className="review-text">
          {renderText(testimonial.quote)}
        </div>
      </div>

      <div className="review-footer">
        <div className="review-customer">{testimonial.customers}</div>
        <div className="review-source">
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

const Reviews = () => {
  return (
    <div className="reviews-page">
      <h1 className="reviews-title">Customer Testimonials</h1>
      <p className="reviews-subtitle">Read what our satisfied customers have to say about our services</p>

      <div className="reviews-container">
        {testimonials.map((testimonial, index) => (
          <ScrollAnimation key={index} type="fade-up" delay={index * 150}>
            <ReviewCard testimonial={testimonial} />
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
