import "./Home.css"
import HomeFooter from "../HomeFooter/HomeFooter"
import VANS from "../../media/vans.png"

const Home = () => {
  return (
    <div className="home">
      <div className="image-container">
      <div className="vans">
        <img src={VANS} alt="M&P Construction Vans" className="vans-image"/>
      </div>
      <div className="quote-container">
      <p className="quote-text">
      " Welcome to our page! Here you'll find out about our company and how we can make your project dreams come true. I highly encourage you to go to our 'past projects' tab and see some of our work. Feel free to contact me anytime. "
      </p>
      <p className="quote-text">
        - Fernando Oyola
      </p>
      <p className="quote-text">
        Company Owner
      </p>
      </div>
      </div>
      <HomeFooter />
    </div>
  )
}

export default Home