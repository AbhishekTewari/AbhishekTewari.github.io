import { useRef } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const ContactInfo = () => {
  return (
    <div className="contact-info-grid">

      <a href="mailto:tiwariabhishek687@gmail.com" className="contact-card">
        <FaEnvelope className="icon" />
        <div>
          <h4>Email</h4>
          <p>tiwariabhishek687@gmail.com</p>
        </div>
      </a>

      <a href="tel:+918181884650" className="contact-card">
        <FaPhone className="icon" />
        <div>
          <h4>Phone</h4>
          <p>+91 8181884650</p>
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/abhishek-tiwari-b09021169/"
        target="_blank"
        rel="noreferrer"
        className="contact-card"
      >
        <FaLinkedin className="icon" />
        <div>
          <h4>LinkedIn</h4>
          <p>View Profile</p>
        </div>
      </a>
      <a
        href="https://github.com/AbhishekTewari"
        target="_blank"
        rel="noreferrer"
        className="contact-card"
      >
        <FaGithub className="icon" />
        <div>
          <h4>GitHub</h4>
          <p>View Projects</p>
        </div>
      </a>

      <div className="contact-card">
        <FaMapMarkerAlt className="icon" />
        <div>
          <h4>Location</h4>
          <p>Lucknow, India</p>
        </div>
      </div>

    </div>
  );
};

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eoqmpyv",
        "template_2qr6s6l",
         {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "LGtVVvp5GkJdBBCPH"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );

    e.target.reset();
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <span className="contact-tag">Contact Me</span>
          <h2>
            Let’s Work <span>Together</span>
          </h2>
          <p>
            Have a project idea, freelance opportunity, or collaboration?
            Feel free to send me a message.
          </p>
          <ContactInfo />
        </div>
        <form ref={form}onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;