import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [success, setSuccess] = useState(false);
  const access_key = process.env.REACT_APP_FORM_ACCESS_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", access_key);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setSuccess(true);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-form-title">Get In Touch</div>
      {!success && <div className="contact-form-subtitle">
        Fill out the form below for a
        free estimate and I will get back to you as soon
        as possible.
      </div>}
      {success ?
        (<div className="contact-success">
          <div className="result-text">{result}</div>
          <button className="button-28" onClick={() => setSuccess(false)}>Submit Another</button>
        </div>) :
        (<form className="contact-form" onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>

          <button className="button-28" type="submit">Submit</button>

        </form>)}


    </div>
  );
}

export default Contact;