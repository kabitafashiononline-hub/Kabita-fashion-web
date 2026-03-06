import { motion } from "framer-motion";
import "./About.css";

export default function AboutUs() {
  return (
    <>
      <motion.section
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="hero-content">
          <h1>Kabita Fashion</h1>
          <p>Premium Wholesale Sarees from Kolkata</p>
        </div>
      </motion.section>

      <section className="about-wrapper">
        <div className="container">

          <motion.div
            className="about-block"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Who We Are</h2>
            <p>
              Kabita Fashion is a trusted wholesale saree supplier located in
              the heart of Kolkata’s famous Barabazar textile market. With more
              than 15 years of experience in the saree industry, we supply
              premium quality sarees to boutiques, retailers, online sellers
              and exporters across India.
            </p>

            <p>
              Our collection includes silk, chanderi, cotton, matka, banarasi,
              fancy party wear and designer sarees sourced directly from
              trusted weavers and manufacturers.
            </p>
          </motion.div>

          <motion.div
            className="about-highlight"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <h3>Why Choose Kabita Fashion</h3>

            <div className="features">

              <div className="feature">
                Competitive wholesale pricing
              </div>

              <div className="feature">
                100+ new designs every week
              </div>

              <div className="feature">
                Thousands of sarees ready to dispatch
              </div>

              <div className="feature">
                Direct sourcing from weavers
              </div>

              <div className="feature">
                Pan-India & international shipping
              </div>

              <div className="feature">
                Trusted by 500+ retailers
              </div>

            </div>
          </motion.div>

          <motion.div
            className="promise"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <h2>Our Promise</h2>

            <p>
              We believe in quality, consistency and long-term partnerships.
              Our goal is to provide trending saree collections at the best
              wholesale prices so that our partners can grow their business
              confidently.
            </p>

            {/* <button className="about-btn">
              Get Latest Catalogue
            </button> */}

          </motion.div>

        </div>
      </section>
    </>
  );
}