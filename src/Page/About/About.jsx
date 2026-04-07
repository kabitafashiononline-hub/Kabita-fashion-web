import { motion } from "framer-motion";
import "./About.css";

export default function AboutUs() {

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Retail Partners" },
    { number: "1000+", label: "Saree Designs" },
    { number: "Pan India", label: "Shipping" }
  ];

  return (
    <>

      <section className="about-hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>Kabita Fashion</h1>
          <p>Premium Wholesale Sarees From The Heart Of Kolkata</p>
        </div>
      </section>


      <section className="about-story">
        <div className="container">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h2>Our Journey</h2>

            <p>
              Kabita Fashion was founded in the famous textile hub of
              Burrabazar, Kolkata with a vision to connect traditional
              saree weavers with retailers across India.
            </p>

            <p>
              For more than 15 years we have been supplying premium
              saree collections to boutiques, retailers and online
              sellers who trust us for quality and reliable
              wholesale pricing.
            </p>

          </motion.div>

        </div>
      </section>


      <section className="about-features">
        <div className="container">

          <h2>Why Retailers Choose Kabita Fashion</h2>

          <div className="features-grid">

            <div className="feature-card">
              <h3>Direct From Manufacturers</h3>
              <p>
                We source sarees directly from trusted weavers and
                manufacturers ensuring quality and competitive prices.
              </p>
            </div>

            <div className="feature-card">
              <h3>Wholesale Pricing</h3>
              <p>
                Our collections are specially curated for retailers
                so they can maintain strong profit margins.
              </p>
            </div>

            <div className="feature-card">
              <h3>Ready Stock</h3>
              <p>
                Thousands of sarees are always available in stock
                ready for dispatch across India.
              </p>
            </div>

            <div className="feature-card">
              <h3>Trusted By Retailers</h3>
              <p>
                Hundreds of retailers rely on Kabita Fashion for
                consistent quality and trending collections.
              </p>
            </div>

          </div>

        </div>
      </section>


      <section className="about-stats">

        <div className="container">

          <div className="stats-grid">

            {stats.map((item, index) => (
              <div key={index} className="stat-box">
                <h3>{item.number}</h3>
                <p>{item.label}</p>
              </div>
            ))}

          </div>

        </div>

      </section>


      <section className="founder-section">

        <div className="container founder-wrapper">

          <div className="founder-image">
            <img
              src="./Kishan.jpeg"
              alt="Kabita Fashion Founder"
            />
          </div>

          <div className="founder-text">

            <h2>Message From The Founder</h2>

            <p>
              Kabita Fashion was started with a vision to support
              retailers by providing premium saree collections
              at genuine wholesale prices.
            </p>

            <p>
              From Burrabazar in Kolkata we have grown into a trusted
              supplier for retailers across India.
            </p>

            <p>
              We believe strong relationships build strong businesses
              and we are committed to helping our retail partners grow.
            </p>

            <h4>— Founder, Kabita Fashion</h4>
            <h4>— Kishan Kumar Jha</h4>


          </div>

        </div>

      </section>

    </>
  );
}