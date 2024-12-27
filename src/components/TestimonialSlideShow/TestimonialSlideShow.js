import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useEffect, useState } from 'react'
import "./TestimonialSlideShow.css"
import DisplayTestimonial from "../DisplayTestimonial/DisplayTestimonial"

const TestimonialSlideShow = (props) => {

  const [slide, setSlide] = useState(0)
  const [mutliSlides, setMultiSlides] = useState(true)

  const nextSlide = (e) => {
    e.preventDefault()
    setSlide(slide === (props.entry.length - 1) ? 0 : (slide + 1))
  }

  const prevSlide = (e) => {
    e.preventDefault()
    setSlide(slide === 0 ? (props.entry.length - 1) : (slide - 1))
  }

  useEffect(() => {
    if (props.entry.length === 1) {
      setMultiSlides(false)
    }
  },[props.entry])

  return (
  <div className="testimonial-slideshow">
    {mutliSlides && <SlArrowLeft className="testimonial-arrow testimonial-arrow-left" onClick={prevSlide}/>}
      {props.entry.map((src, idx) => {
        return(
        <DisplayTestimonial key={idx} source={src} index={idx} slide={slide} />
        )
      })}
    {mutliSlides && <SlArrowRight className="testimonial-arrow testimonial-arrow-right" onClick={nextSlide}/>}
    {mutliSlides && <span className="testimonial-selections">
      {props.entry.map((_, idx) => {
        return (
          <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "testimonial-selection" : "testimonial-selection testimonial-selection-inactive"}></button>
        )
        })
      }
    </span>}
  </div>
  )
}

export default TestimonialSlideShow;