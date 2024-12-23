import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import "./NavBar.css"
import MP_LOGO from "../../media/m_and_p_logo.webp"
import { FaFacebookSquare } from "react-icons/fa";

const NavButton = styled.button`
    margin: 1rem 0.5rem 0.1rem 0.5rem;
    font-size: 1rem;
    border: none;
    background-color: transparent;
    color: ${props => props.$selected ? "rgb(140, 101, 94)" : "black"};
    letter-spacing: 0.1rem;
    padding: 0 0.5rem;
    outline: 0;
    cursor: pointer;
    &:hover {
      color: rgb(140, 101, 94);
    }
    @media (max-width: 768px) {
      margin: 1rem 0.2rem 0.1rem 0.2rem;
      font-size: 0.5rem;
    }
  `

const NavBar = () => {

  let navigate = useNavigate()
  const [pageNum, setPageNum] = useState(0)

  const handleClick = (address, clickedPageNum) => {
    navigate(address)
    setPageNum(clickedPageNum)
  }

  return (
    <div className="nav-container">
      <div className="nav-header">
        <div style={{width:'100%'}}>
          <img src={MP_LOGO} alt="M&P Construction Logo" className="logo"/>
        </div>
        <p className="header-text">
          Servicing North New Jersey
          <br />
          DoCA License #13VH09587100
          <br />
          Contact Us For a Free Estimate | 973-827-6350
        </p>
      </div>
      <div class="nav-bar-container">
      <nav className="nav-bar">
        <NavButton $selected={(pageNum === 0)} onClick={() => handleClick("/", 0)}>
            Home
        </NavButton>
        <NavButton $selected={(pageNum === 1)} onClick={() => handleClick("/services", 1)}>
            Services
        </NavButton>
        <NavButton $selected={(pageNum === 2)} onClick={() => handleClick("/past-projects", 2)}>
            Past Projects
        </NavButton>
        <NavButton $selected={(pageNum === 3)} onClick={() => handleClick("/testimonials", 3)}>
          Testimonials
        </NavButton>
        <NavButton $selected={(pageNum === 4)} onClick={() => handleClick("/about", 4)}>
            About
        </NavButton>
        <NavButton $selected={(pageNum === 5)} onClick={() => handleClick("/contact-us", 5)}>
            Contact Us
        </NavButton>
      </nav>
        <div class="fb-logo-container">
          <a href="https://www.facebook.com/mandpcompany/" target="_blank" rel="noreferrer" style={{margin:0}}>
            <FaFacebookSquare class="fb-logo"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavBar