import "./Contact.css";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <p className="contact-subtitle">Contact</p>
      <h2 className="contact-title">
        Let’s Discuss Your <span>Project</span>
      </h2>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <MdPhone className="icon" />
            <div>
              <p className="info-text">Call me</p>
              <p>+963994047399</p>
            </div>
          </div>
          <div className="info-item">
            <MdEmail className="icon" />
            <div>
              <p className="info-text">Email me</p>
              <p>omaralshamaa63@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <MdLocationOn className="icon" />
            <div>
              <p className="info-text">Address</p>
              <p>Damascus, Syria</p>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Full name" required />
            <input type="email" placeholder="Your email" required />
          </div>
          <input type="text" placeholder="Phone number" required />
          <textarea placeholder="Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
