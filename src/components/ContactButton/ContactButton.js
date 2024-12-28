import "./ContactButton.css";
import { Link } from "react-router-dom";

const ContactButton = ({ text }) => {
  return (
    <Link to={`/contact#contact`}>
      <span className="button-74">
        {text}
      </span>
    </Link>
  );
}

export default ContactButton;