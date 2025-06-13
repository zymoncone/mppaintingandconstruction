import "./TestimonialSlideShow.css"
import ScrollingTestimonials from "../ScrollingTestimonials/ScrollingTestimonials"

const TestimonialSlideShow = (props) => {
  return (
    <div className="testimonial-slideshow">
      <ScrollingTestimonials testimonials={props.entry} />
    </div>
  );
};

export default TestimonialSlideShow;