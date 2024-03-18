import TestimonialSlideShow from "../TestimonialSlideShow/TestimonialSlideShow"
import { testimonials } from "../../media/testimonials"
import "./HomeFooter.css"

const HomeFooter = () => {
  return (
    <div className="home-footer-container">
      <div className="form-container">
      <form action="#" method="post" className="input-area-container">
        <div className="contact-form-text-container">
        <h2 className="contact-form-title">Contact Us!</h2>
        <p className="contact-form-text">mppaintingandconstruction@yahoo.com</p>
        <p className="contact-form-text">973-827-6350</p>
        </div>
        <input className="input-contact-form" type="text" id="name" name="name" placeholder="Name" required></input>
        <input className="input-contact-form" type="email" id="email" name="email" placeholder="Email" required></input>
        <input className="input-contact-form" type="tel" id="phone" name="phone" placeholder="Phone" required></input>
        <input className="input-contact-form" type="text" id="address" name="address" placeholder="Address" required></input>
        <textarea className="input-contact-form" id="message" name="message" rows="5" placeholder="Message" required></textarea>
        <input className="submit-button" type="submit" value="Submit"></input>
      </form>
      </div>
      <TestimonialSlideShow entry={testimonials}/>
    </div>
  )
}

export default HomeFooter