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
        '/collec/silk1.jpeg',
        '/collec/silk2.jpeg',
        '/collec/silk3.jpeg',
        '/collec/silk4.jpeg',
        '/collec/silk5.jpeg',
        '/collec/silk6.jpeg',
      ]
    },
    {
      id: 2,
      name: 'Kota Digital Print Sarees',
      description: 'Kota digital print saree featuring vibrant digital prints, soft airy texture, and a graceful elegant drape—designed for all-day comfort, easy styling, and perfect for daily wear, office looks, and casual outings.',
      priceRange: '₹500 – ₹600',
      images: [
        '/collec/kota1.jpeg',
        '/collec/kota2.jpeg',
        '/collec/kota3.jpeg',
        '/collec/kota4.jpeg',
        '/collec/kota5.jpeg',
        '/collec/kota6.jpeg',
        '/collec/kota7.jpeg'
      ]
    },
    {
      id: 3,
      name: 'Maheshwari Chanderi Hand Sarees',
      description: 'Lightweight Maheshwari Chanderi saree crafted from a fine silk-cotton blend, featuring elegant zari borders and a soft, breathable texture—perfect for graceful everyday wear and festive occasions.',
      priceRange: '₹1,200 – ₹1300',
      images: [
        '/collec/chanderi1.jpeg',
        '/collec/chanderi2.jpeg',
        '/collec/chanderi3.jpeg',
        '/collec/chanderi4.jpeg',
        '/collec/chanderi5.jpeg',
        '/collec/chanderi6.jpeg',
        '/collec/chanderi7.jpeg'
      ]
    },
    {
      id: 4,
      name: 'Ghicha Silk Pichwai Lotous Sarees',
      description: 'Rustic elegance in every drape, Natural ghicha silk with a handwoven charm and beautiful Pichwai lotus design—perfect for a classy traditional look.',
      priceRange: '₹1,000 – ₹4,800',
      images: [
        '/collec/Ghicha1.jpeg',
        '/collec/Ghicha2.jpeg',
        '/collec/Ghicha3.jpeg',
        '/collec/Ghicha4.jpeg',
        '/collec/Ghicha5.jpeg',
        '/collec/Ghicha6.jpeg'
      ]
    },
    {
      id: 5,
      name: 'Cotton Sarees',
      description: 'Printed cotton, Tant, Bengal cotton, mulmul.',
      priceRange: '₹400 – ₹2,200',
      images: [
        '/collec/cotton.webp',
      //   '/collec/cotton2.webp',
      //  '/collec/cotton3.webp',
      //   '/collec/cotton4.webp',
      //   '/collec/cotton5.webp',
      //   '/collec/cotton6.webp',
      //   '/collec/cotton7.webp' 
      ]
    },
    {
      id: 6,
      name: 'Malai Cotton Sarees',
      description: 'Soft malai cotton with light work or prints.',
      priceRange: '₹600 – ₹2,800',
      images: [
        '/collec/malai.webp',
        // '/collec/malai2.webp',
        // '/collec/malai3.webp',
        // '/collec/malai4.webp',
        // '/collec/malai5.webp',
        // '/collec/malai6.webp',
        // '/collec/malai7.webp'
      ]
    },
    {
      id: 7,
      name: 'Matka Tussar Jari Weaving',
      description: 'Classic matka tussar drape with fine zari detailing, offering rich and elegant vibes',
      priceRange: '₹2000 – ₹3,000',
      images: [
        '/collec/matka1.jpeg',
        '/collec/matka2.jpeg',
        '/collec/matka3.jpeg',
        '/collec/matka4.jpeg',
        '/collec/matka5.jpeg',
        '/collec/matka6.jpeg',
        '/collec/matka7.jpeg'
      ]
    },
    {
      id: 8,
      name: 'Gicha Gujarati Work Saree',
      description: 'Elegant ghicha silk saree adorned with intricate Gujarati work, featuring rich texture and traditional craftsmanship—perfect for festive occasions and a classy ethnic look.',
      priceRange: '₹2000 – 2600',
      images: [
        '/collec/gichagujrati1.jpeg',
        '/collec/gichagujrati2.jpeg',
        '/collec/gichagujrati3.jpeg',
        '/collec/gichagujrati4.jpeg',
        '/collec/gichagujrati5.jpeg',
        '/collec/gichagujrati6.jpeg',
        '/collec/gichagujrati7.jpeg'
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

      {/* Zoom + Crop Modal - Buttons Removed */}
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