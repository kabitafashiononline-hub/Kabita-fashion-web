// src/components/FeaturedCollections.jsx  (or wherever you keep sections)
import { motion } from 'framer-motion';
import './Featured.css';

export default function FeaturedCollections() {
  // Only top 4 trending wholesale collections (you can change order/names/prices)
  const featured = [
    {
      id: 1,
      name: 'Premium Tussar Silk Sarees',
      desc: 'Natural texture, rich fall, zari work – high demand for premium retail',
      price: '₹2,200 – ₹6,500 / pc',
      image: '/featured/1.webp',
      moq: 'MOQ 10 pcs',
    },
    {
      id: 2,
      name: 'Malai Cotton Light Work',
      desc: 'Soft, breathable, minimal embroidery – summer bestseller',
      price: '₹650 – ₹2,200 / pc',
      image: '/featured/malai.jpg',
      moq: 'MOQ 20 pcs',
    },
    {
      id: 3,
      name: 'Chanderi Silk-Cotton',
      desc: 'Lightweight, elegant zari motifs – festive & semi-formal favorite',
      price: '₹1,300 – ₹4,800 / pc',
      image: '/featured/chanderi.avif',
      moq: 'MOQ 8 pcs',
    },
    {
      id: 4,
      name: 'Fancy Party Wear Net/Georgette',
      desc: 'Sequence, stones, embroidery – wedding season fast-mover',
      price: '₹900 – ₹4,200 / pc',
      image: '/featured/party.webp',
      moq: 'MOQ 12 pcs',
    },
  ];

  return (
    <section className="featured-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Featured Wholesale Collections
        </motion.h2>

        <p className="featured-subtitle">
          Our current best-sellers – ready for bulk orders at competitive prices
        </p>

        <div className="featured-grid">
          {featured.map((item) => (
            <motion.div
              key={item.id}
              className="featured-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10, boxShadow: '0 15px 35px rgba(139,0,0,0.1)' }}
            >
              <div className="card-img">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="card-info">
                <h3>{item.name}</h3>
                <p className="desc">{item.desc}</p>
                <p className="price">
                  <strong>₹{item.price}</strong>
                </p>
                <p className="moq-note">{item.moq}</p>

                <a
                  href={`https://wa.me/918420005363?text=Interested%20in%20${encodeURIComponent(item.name)}%20wholesale`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-enquiry"
                >
                  Enquiry on WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="see-all-wrapper">
          <a href="/collections" className="see-all-btn">
            View All Collections →
          </a>
        </div>
      </div>
    </section>
  );
}