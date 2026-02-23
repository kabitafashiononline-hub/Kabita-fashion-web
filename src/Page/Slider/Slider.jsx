import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Elegant Silk Sarees",
      description: "Traditional handwoven silk sarees with golden zari work",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1200",
      color: "#8a2387"
    },
    {
      id: 2,
      title: "Modern Georgette Collection",
      description: "Lightweight and comfortable for everyday wear",
      image: "https://images.unsplash.com/photo-1568121293041-d6fe4dcec8b4?w=1200",
      color: "#e94057"
    },
    {
      id: 3,
      title: "Banarasi Heritage",
      description: "Premium Banarasi silk with intricate designs",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w-1200",
      color: "#f27121"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ 
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`,
              backgroundColor: slide.color
            }}
          >
            <div className="slide-content">
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-description">{slide.description}</p>
              <button className="shop-now-btn">
                Shop Now <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <button className="slider-btn prev-btn" onClick={prevSlide}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="slider-btn next-btn" onClick={nextSlide}>
        <i className="fas fa-chevron-right"></i>
      </button>
      
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;