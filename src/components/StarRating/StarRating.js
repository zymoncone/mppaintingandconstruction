import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./StarRating.css";

const StarRating = ({ rating }) => {
  const stars = [];

  // Fill in the full stars
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="star" />);
    } else if (i - 0.5 <= rating) {
      stars.push(<FaStarHalfAlt key={i} className="star" />);
    } else {
      stars.push(<FaRegStar key={i} className="star" />);
    }
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
