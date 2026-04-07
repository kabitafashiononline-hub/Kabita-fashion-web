import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "./Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "SERVICE_ID",
        "TEMPLATE_ID",
        form.current,
        "PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Enquiry Sent Successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send enquiry");
        }
      );
  };

  return (
    <>
      <motion.section
        className="contact-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-inner">
          <h1>Get in Touch</h1>
          <p className="hero-subtitle">
            Wholesale Enquiries • Bulk Orders • Latest Catalogue
          </p>
        </div>
      </motion.section>

      <section className="contact-main">
        <div className="contact-container">

          <motion.div
            className="contact-info-column"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="column-title">Reach Us Directly</h2>

            <div className="info-block">
              <div className="info-label">Address</div>
              <p>
                44A, Kali Krishna Tagore Street,<br />
                Landmark - Near Malapara More, <br />
                Kolkata - 700007,West Bengal, India
              </p>
            </div>

            <div className="info-block">
              <div className="info-label">Retail Customers</div>
              <p className="highlight-phone">+91 8420005363</p>
            </div>

            <div className="info-block">
              <div className="info-label">Wholesale Customers</div>
              <p className="wholesale-phone">+91 8981223025</p>
              <p className="wholesale-phone">+91 9433843097</p>
            </div>

            <div className="info-block">
              <div className="info-label">Email</div>
              <p>kabitafashion.online@gmail.com</p>
            </div>

            <div className="info-block">
              <div className="info-label">Business Hours</div>
              <p>Monday – Saturday: 10:00 AM – 8:00 PM</p>
              <p>Sunday: Closed</p>
            </div>

            <a
              href="https://wa.me/918420005363?text=Hello%20Kabita%20Fashion%2C%20I%20am%20interested%20in%20wholesale%20rates%20and%20catalogue"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-cta"
            >
              WhatsApp Message
            </a>
          </motion.div>

          <motion.div
            className="contact-form-column"
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="column-title">Send Your Enquiry</h2>

            <form ref={form} onSubmit={sendEmail} className="enquiry-form">

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="form-input"
              />

              <input
                type="tel"
                name="user_phone"
                placeholder="Phone / WhatsApp Number"
                required
                className="form-input"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                className="form-input"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Tell us what you're looking for"
                required
                className="form-textarea"
              ></textarea>

              <button type="submit" className="submit-btn">
                Submit Enquiry
              </button>

            </form>

            <p className="form-note">
              We usually reply within a few hours (fastest on WhatsApp)
            </p>

          </motion.div>

        </div>
      </section>
    </>
  );
}