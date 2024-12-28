import "./Home.css"
import { testimonials } from "../../media/testimonials"
import home_page_main from "../../media/home_page_main.png"
import ServicesBanner from "../ServicesBanner/ServicesBanner"
import TestimonialSlideShow from "../TestimonialSlideShow/TestimonialSlideShow"
import AboutBanner from "../AboutBanner/AboutBanner"

const Home = () => {
  return (
    <div className="home">
      <div className="home-top">
        <div className="home-title">
          <h1 className="home-title-subtext">M&P Painting</h1>
          <h1 className="home-title-subtext">& Remodeling</h1>
        </div>
        <div className="image-container">
          <div className="vans">
            <img src={home_page_main} alt="Fernando Oyola standing in front of his vans" className="vans-image" />
          </div>
        </div>
      </div>
      <ServicesBanner />
      <AboutBanner />
      <TestimonialSlideShow entry={testimonials}/>
    </div>
  )
}

export default Home