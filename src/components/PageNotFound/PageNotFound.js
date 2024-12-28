import "./PageNotFound.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="error-404"><h1>Oh no!</h1></div>
      <div className="error-404">
        <p>Looks like you've gone off the map!</p>
      </div>
      <div className="error-404">
        <p>Let's get you back on track.</p>
      </div>
      <img src="https://media.giphy.com/media/OiC5BKaPVLl60/giphy.gif" alt="monkey on computer gif" className="error-gif" />
      <Link to={`/`} className="button-28">
        <span>Return Home</span>
      </Link>
    </div>
  );
};

export default PageNotFound;