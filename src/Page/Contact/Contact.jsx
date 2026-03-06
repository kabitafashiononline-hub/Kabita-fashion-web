import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
  return (
    <>
      {/* Hero Banner */}
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

      {/* Main Content */}
      <section className="contact-main">
        <div className="contact-container">
          {/* Left - Contact Info */}
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
                Barabazar, Kolkata - 700007,<br />
                West Bengal, India
              </p>
            </div>

            <div className="info-block">
              <div className="info-label">Phone / WhatsApp</div>
              <p className="highlight-phone">+91 8420005363</p>
              <p>+91 8981223025</p>
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

            {/* Big WhatsApp CTA */}
            <a
              href="https://wa.me/918420005363?text=Hello%20Kabita%20Fashion%2C%20I%20am%20interested%20in%20wholesale%20rates%20and%20catalogue"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-cta"
            >
              <span className="whatsapp-icon">WhatsApp</span>
              Message Us Now
            </a>
          </motion.div>

          {/* Right - Enquiry Form */}
          <motion.div
            className="contact-form-column"
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="column-title">Send Your Enquiry</h2>
            <form className="enquiry-form">
              <input type="text" placeholder="Your Name *" required className="form-input" />
              <input type="tel" placeholder="Phone / WhatsApp Number *" required className="form-input" />
              <input type="email" placeholder="Email Address" className="form-input" />
              <textarea
                placeholder="Tell us what you're looking for (e.g. tussar, silk, fancy, quantity, budget...)"
                rows="5"
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