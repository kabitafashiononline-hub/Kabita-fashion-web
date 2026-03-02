import { motion } from 'framer-motion';
import './Collections.css';

export default function Collections() {
  // Dummy data - real wholesale categories with approx price ranges per piece (INR)
  // These are typical ranges in Kolkata Barabazar wholesale for retailers
  const collections = [
    {
      id: 1,
      name: 'Pure Silk Sarees',
      description: 'Classic Banarasi, Katan, Tussar pure silk with rich zari work. Premium quality for high-end retail.',
      priceRange: '₹2,500 – ₹12,000',
      image: 'https://aham.store/products/printed-design-pure-silk-saree-hs1105?srsltid=AfmBOoodlzSW4mprkAJVe9ptP4ALqqYxGZtXQknMZva3G4W1Y1oi-Vqn', // replace with your real image
    },
    {
      id: 2,
      name: 'Fancy / Designer Sarees',
      description: 'Party wear, sequence, embroidery, georgette, net with modern designs. Fast-selling for festive season.',
      priceRange: '₹800 – ₹4,500',
      image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d26?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      name: 'Chanderi Sarees',
      description: 'Lightweight Chanderi silk-cotton blend with zari borders. Elegant and breathable for daily & semi-formal.',
      priceRange: '₹1,200 – ₹5,000',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 4,
      name: 'Tussar / Ghicha Sarees',
      description: 'Natural texture tussar, ghicha, matka with handwoven appeal. Popular for contemporary ethnic look.',
      priceRange: '₹1,000 – ₹4,800',
      image: 'https://images.unsplash.com/photo-1610030469668-8a0b0d8e8f8d?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 5,
      name: 'Cotton Sarees',
      description: 'Printed cotton, Tant, Bengal cotton, mulmul – comfortable everyday wear with traditional prints.',
      priceRange: '₹400 – ₹2,200',
      image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d26?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 6,
      name: 'Malai Cotton Sarees',
      description: 'Soft malai cotton with light work or prints. Best for summer and casual retail sales.',
      priceRange: '₹600 – ₹2,800',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 7,
      name: 'Semi-Silk / Art Silk Sarees',
      description: 'Affordable semi-silk, art silk with fancy borders. High demand for budget-conscious buyers.',
      priceRange: '₹500 – ₹3,000',
      image: 'https://images.unsplash.com/photo-1610030469983-98e9d17f0d0c?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 8,
      name: 'Linen & Blended Sarees',
      description: 'Linen, cotton-linen blends with modern minimal designs. Growing trend in urban wholesale.',
      priceRange: '₹900 – ₹4,000',
      image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d26?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <>
      <motion.section
        className="collections-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Our Wholesale Collections</h1>
        <p className="subtitle">
          Premium sarees for retailers, boutiques & exporters • Direct from Barabazar, Kolkata
        </p>
        <p className="wholesale-note">
          All prices are indicative wholesale rates per piece (MOQ applies) • Contact for best rates & latest stock
        </p>
      </motion.section>

      <section className="collections-grid-section">
        <div className="container">
          <div className="collections-grid">
            {collections.map((item) => (
              <motion.div
                key={item.id}
                className="collection-card"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
              >
                <div className="card-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="card-content">
                  <h3>{item.name}</h3>
                  <p className="description">{item.description}</p>
                  <p className="price-range">
                    <strong>Wholesale Price:</strong> {item.priceRange} / pc
                  </p>
                  <a
                    href="https://wa.me/918420005363?text=Interested%20in%20wholesale%20rates%20for%20[Category]%20sarees"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="enquiry-btn"
                  >
                    Get Latest Rates on WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Stock Your Store?</h2>
        <p>Daily new arrivals • Bulk discounts • Fast dispatch</p>
        <a
          href="https://wa.me/918420005363?text=Hello%20Kabita%20Fashion%2C%20send%20latest%20wholesale%20catalogue%20please"
          target="_blank"
          rel="noopener noreferrer"
          className="main-cta"
        >
          Send Enquiry for Catalogue & Prices
        </a>
      </section>
    </>
  );
}