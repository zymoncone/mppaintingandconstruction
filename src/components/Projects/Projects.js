import "./Projects.css";
import { useState, useEffect } from "react";
import SlideShow from "../SlideShow/SlideShow";
import SOURCE_IMAGES from "../../assets/source_images";
import { FaFacebookSquare } from "react-icons/fa";

const Projects = () => {
  const ROW_SIZE = 2;

  const [openGallery, setOpenGallery] = useState(false);
  // const [rowSize, setRowSize] = useState(ROW_SIZE_MOBILE);
  const [galleryPhotos, setGalleryPhotos] = useState([]);

  const handleClose = () => {
    setOpenGallery(false);
  };

  const handleOpen = (e) => {
    setOpenGallery(true);
    setGalleryPhotos(e.target.getAttribute("image-urls").split(","));
  };

  useEffect(() => {
    // Prevent scrolling when gallery is open
    if (openGallery) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.documentElement.style.overflow = 'auto';
    };
  }, [openGallery]);

  return (
    <div className="projects" id="projects">
      <div className="projects-title">Past Projects</div>
      <div className="project-column-container">
        {
          [...Array(Math.ceil(SOURCE_IMAGES.length / ROW_SIZE))].map((_, i) => (
            <div key={i} className="project-row-container">
              {SOURCE_IMAGES.slice(i * ROW_SIZE, i * ROW_SIZE + ROW_SIZE).map((image, j) => (
                <div key={j} className="project-item-container">
                  <div className="project-item">
                    <img
                      src={image.content[0].src}
                      alt={image.content[0].alt}
                      className="project-title-image"
                      image-urls={image.content.map(contentItem => contentItem.src)}
                      onClick={handleOpen}
                    />
                    <div className="project-title-container">
                      <div className="project-title-text">{image.title}</div>
                      <a href={image["facbook-link"]} target="_blank" rel="noreferrer" className="project-fb-container">
                        <FaFacebookSquare className="project-fb-logo" />
                      </a>
                    </div>
                    <div className="project-date-text">{image.date}</div>
                  </div>
                </div>
              ))}
            </div>
          ))
        }
      </div>
      {openGallery && <SlideShow entry={galleryPhotos} handleClose={handleClose} activeSlide={0} />}
    </div>
  )
};

export default Projects;