// src/pages/AboutUs.jsx
import { motion } from 'framer-motion';
import './About.css';

export default function AboutUs() {
  return (
    <>
      <motion.section
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About Kabita Fashion</h1>
          <p className="subtitle">Premium Wholesale Sarees from Kolkata</p>
        </div>
      </motion.section>

      <section className="about-content">
        <div className="container">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>Who We Are</h2>
            <p>
              Kabita Fashion is a leading wholesale saree supplier based in the heart of Kolkata's textile market — Barabazar. 
              With more than 15 years in the industry, we specialize in providing high-quality sarees to retailers, boutiques, 
              online sellers, exporters, and multi-brand stores across India and international markets.
            </p>
            <p>
              Our wide range includes pure silk, tussar, chanderi, malai cotton, ghicha, matka, banarasi, fancy party wear, 
              designer sarees, and seasonal collections — all sourced directly from trusted weavers and manufacturers.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="highlight-box"
          >
            <h3>Why Choose Kabita Fashion for Wholesale?</h3>
            <ul>
              <li>Competitive wholesale pricing with excellent profit margins</li>
              <li>Fresh stock updated daily — 100+ new designs every week</li>
              <li>Ready-to-dispatch inventory of thousands of sarees</li>
              <li>Direct sourcing from Bengal, Banaras, South India & more</li>
              <li>Pan-India & international shipping with reliable logistics</li>
              <li>Long-term trusted partner for 500+ retailers & boutiques</li>
              <li>Custom bulk orders & catalogue support available</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2>Our Promise</h2>
            <p>
              Quality, consistency, timely delivery, and complete customer satisfaction are the pillars of our business. 
              We aim to help our wholesale partners grow by offering the latest trends at unbeatable prices — so you can 
              focus on selling while we take care of sourcing and supply.
            </p>
            <p className="call-to-action">
              Looking to stock your store with trending sarees?  
              <br />
              <strong>Connect with us today for best wholesale rates and latest catalogue!</strong>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}