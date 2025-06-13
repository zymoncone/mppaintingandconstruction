import "./DisplayTestimonial.css"
import StarRating from "../StarRating/StarRating"
import { FaGoogle } from "react-icons/fa"

const hyperlink_color = {color:"#007bff"}

const renderText = (text) => {

  const renderArr = []
  const pattern_bold = /~{1}(.+:)/g
  const pattern_hyperlink = /\[([^\]]*?)\|([^\]]*?)\]/g
  let textArr = text.split("\n")

  for (const [i, sample] of Object.entries(textArr)) {
    if (sample.match(pattern_bold)) {
      let sampleToBold = sample.split(pattern_bold)
      // index 1 is the first group from regexp
      // index 2 is the remaining text after the match
      renderArr.push(<p key={i}><b>{sampleToBold[1]}</b>{sampleToBold[2]}</p>)
    } else if (sample.match(pattern_hyperlink)) {
      let sampleToHyperlink = sample.split(pattern_hyperlink)
      let allHyperlinkElements = []
      for (let j=0; j<sampleToHyperlink.length; j+=4) {
        if (j > 3) {
          let hyperlink = <a href={sampleToHyperlink[j+1]}
                             style={hyperlink_color}
                             target="_blank"
                             rel="noopener noreferrer">{sampleToHyperlink[j]}</a>
          allHyperlinkElements.push(<span key={i+j}>{hyperlink}{sampleToHyperlink[j+2]}</span>)
        } else {
          let hyperlink = <a href={sampleToHyperlink[j+2]}
                                   style={hyperlink_color}
                                   target="_blank"
                                   rel="noopener noreferrer">{sampleToHyperlink[j+1]}</a>
          allHyperlinkElements.push(<span key={i+j}>{sampleToHyperlink[j]}{hyperlink}{sampleToHyperlink[j+3]}</span>)
        }
      }
      renderArr.push(<p key={i}>{allHyperlinkElements}</p>)
    } else {
      renderArr.push(<p key={i}>{sample}</p>)
    }
  }
  return (<div>{renderArr}</div>)
}

const DisplayTestimonial = ({ source,
  index,
  slide }) => {

  return (<div className={slide === index ? "testimonial" : "testimonial testimonial-hidden"}>
    {/* <h1 className="testimonial-title">What My Customers Say</h1> */}
    <div className="customer-quote">{renderText(source.quote)}</div>

    {source.stars && <StarRating rating={source.stars} />}

    <div className="customer-location">
      {source.customers} | {
        source.location === "Google Review" ? (
          <a
            href={source.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="google-review-link"
          >
            <FaGoogle className="google-icon" /> {source.location}
          </a>
        ) : source.location
      }
    </div>
  </div>)
}

export default DisplayTestimonial