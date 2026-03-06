import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Elegant Silk Sarees",
      description: "Traditional handwoven silk sarees with golden zari work",
      image: "/slider/1.webp",
      color: "#8a2387"
    },
    {
      id: 2,
      title: "Modern Georgette Collection",
      description: "Lightweight and comfortable for everyday wear",
      image: "/slider/2.jpeg",
      color: "#e94057"
    },
    {
      id: 3,
      title: "Banarasi Heritage",
      description: "Premium Banarasi silk with intricate designs",
      image: "/slider/3.webp",
      color: "#f27121"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

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
      
      {/* Dots navigation (kept for manual control) */}
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