import { motion } from 'framer-motion';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Cropper from 'react-easy-crop';

import './Collections.css';

export default function Collections() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const collections = [
    {
      id: 1,
      name: 'Pure Silk Sarees',
      description: 'Classic Banarasi, Katan, Tussar pure silk with rich zari work. Premium quality for high-end retail.',
      priceRange: '₹2,500 – ₹12,000',
      images: [
        '/collec/silk.webp',
        '/collec/silk.webp',
        '/collec/silk.webp',
        '/collec/silk.webp',
        '/collec/silk.webp',
        '/collec/silk.webp',
        '/collec/silk.webp'
      ]
    },
    {
      id: 2,
      name: 'Fancy / Designer Sarees',
      description: 'Party wear, sequence, embroidery, georgette, net with modern designs.',
      priceRange: '₹800 – ₹4,500',
      images: [
        '/collec/fancy.avif',
        '/collec/fancy.avif',
        '/collec/fancy.avif',
        '/collec/fancy4.avif',
        '/collec/fancy5.avif',
        '/collec/fancy6.avif',
        '/collec/fancy7.avif'
      ]
    },
    {
      id: 3,
      name: 'Chanderi Sarees',
      description: 'Lightweight Chanderi silk-cotton blend with zari borders.',
      priceRange: '₹1,200 – ₹5,000',
      images: [
        '/collec/chanderi.jpg',
        '/collec/chanderi2.jpg',
        '/collec/chanderi3.jpg',
        '/collec/chanderi4.jpg',
        '/collec/chanderi5.jpg',
        '/collec/chanderi6.jpg',
        '/collec/chanderi7.jpg'
      ]
    },
    {
      id: 4,
      name: 'Tussar / Ghicha Sarees',
      description: 'Natural texture tussar, ghicha, matka with handwoven appeal.',
      priceRange: '₹1,000 – ₹4,800',
      images: [
        '/collec/tushar.webp',
        '/collec/tussar2.webp',
        '/collec/tussar3.webp',
        '/collec/tussar4.webp',
        '/collec/tussar5.webp',
        '/collec/tussar6.webp',
        '/collec/tussar7.webp'
      ]
    },
    {
      id: 5,
      name: 'Cotton Sarees',
      description: 'Printed cotton, Tant, Bengal cotton, mulmul.',
      priceRange: '₹400 – ₹2,200',
      images: [
        '/collec/cotton.webp',
        '/collec/cotton2.webp',
        '/collec/cotton3.webp',
        '/collec/cotton4.webp',
        '/collec/cotton5.webp',
        '/collec/cotton6.webp',
        '/collec/cotton7.webp'
      ]
    },
    {
      id: 6,
      name: 'Malai Cotton Sarees',
      description: 'Soft malai cotton with light work or prints.',
      priceRange: '₹600 – ₹2,800',
      images: [
        '/collec/malai.webp',
        '/collec/malai2.webp',
        '/collec/malai3.webp',
        '/collec/malai4.webp',
        '/collec/malai5.webp',
        '/collec/malai6.webp',
        '/collec/malai7.webp'
      ]
    },
    {
      id: 7,
      name: 'Semi-Silk / Art Silk Sarees',
      description: 'Affordable semi-silk, art silk with fancy borders.',
      priceRange: '₹500 – ₹3,000',
      images: [
        '/collec/silk.webp',
        '/collec/semisilk2.jpg',
        '/collec/semisilk3.jpg',
        '/collec/semisilk4.jpg',
        '/collec/semisilk5.jpg',
        '/collec/semisilk6.jpg',
        '/collec/semisilk7.jpg'
      ]
    },
    {
      id: 8,
      name: 'Linen & Blended Sarees',
      description: 'Linen, cotton-linen blends with modern minimal designs.',
      priceRange: '₹900 – ₹4,000',
      images: [
        '/collec/linen.jpg',
        '/collec/linen2.jpg',
        '/collec/linen3.jpg',
        '/collec/linen4.jpg',
        '/collec/linen5.jpg',
        '/collec/linen6.jpg',
        '/collec/linen7.jpg'
      ]
    },
  ];

  return (
    <>
      <motion.section className="collections-hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <h1>Our Wholesale Collections</h1>
        <p className="subtitle">Premium sarees for retailers, boutiques & exporters • Direct from Barabazar, Kolkata</p>
        <p className="wholesale-note">All prices are indicative wholesale rates per piece (MOQ applies) • Contact for best rates & latest stock</p>
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
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
              >
                <div className="card-image">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    className="saree-slider"
                  >
                    {item.images.map((img, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={img}
                          alt={`${item.name} ${index + 1}`}
                          onClick={() => setSelectedImage(img)}
                          style={{ cursor: 'zoom-in' }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className="card-content">
                  <h3>{item.name}</h3>
                  <p className="description">{item.description}</p>
                  <p className="price-range">
                    <strong>Wholesale Price:</strong> {item.priceRange} / pc
                  </p>
                  <a
                    href={`https://wa.me/918420005363?text=Interested in ${encodeURIComponent(item.name)}`}
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

      {/* Zoom + Crop Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>✕</button>
            
            <div className="crop-container">
              <Cropper
                image={selectedImage}
                crop={crop}
                zoom={zoom}
                aspect={3/4}
                onCropChange={setCrop}
                onZoomChange={setZoom}
              />
            </div>

            <div className="modal-controls">
              <button onClick={() => setZoom(z => z + 0.1)}>Zoom In</button>
              <button onClick={() => setZoom(z => Math.max(1, z - 0.1))}>Zoom Out</button>
              <button onClick={() => alert('Download feature baad mein add kar denge')}>Download Cropped</button>
            </div>
          </div>
        </div>
      )}

      <section className="cta-section">
        <h2>Ready to Stock Your Store?</h2>
        <p>Daily new arrivals • Bulk discounts • Fast dispatch</p>
        <a href="https://wa.me/918420005363?text=Hello Kabita Fashion, send latest wholesale catalogue please" target="_blank" rel="noopener noreferrer" className="main-cta">
          Send Enquiry for Catalogue & Prices
        </a>
      </section>
    </>
  );
}