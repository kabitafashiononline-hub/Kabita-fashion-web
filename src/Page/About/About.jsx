import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="about"
    >
      <h1>About Us</h1>
      <p>Saree Elegance is dedicated to bringing you the finest collection of traditional Indian sarees. Our sarees are crafted with love, blending heritage with modern elegance.</p>
      <p>From silk to cotton, we offer a variety of styles for every occasion.</p>
    </motion.div>
  );
}

export default About;