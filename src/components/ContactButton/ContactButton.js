import "./ContactButton.css";

const ContactButton = ({ text, onClick }) => {
  return (
    <button className="button-74" onClick={onClick}>
      {text}
    </button>
  );
}

export default ContactButton;