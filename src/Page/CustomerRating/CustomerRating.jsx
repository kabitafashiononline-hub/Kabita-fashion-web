import React from 'react';
import './CustomerRating.css';

const CustomerRating = () => {
  const testimonials = [
    { id: 1, name: 'Kaushar khan', rating: 5, comment: 'If you want bulk fabric sarees then u have to contact.. awesome collection', image: '#' },
    { id: 2, name: 'Kasturi Basu', rating: 5, comment: 'Best place to shop beautiful sarees at low lost.', image: '#' },
    { id: 3, name: 'Dipankar Biswas', rating: 4, comment: 'Good quality fabric. Will shop again!', image: '#' },
  ];

  return (
    <section className="rating-container">
      <h2 className="rating-title">What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="customer-info">
              <img src={testimonial.image} alt={testimonial.name} className="customer-image" />
              <div>
                <h3 className="customer-name">{testimonial.name}</h3>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fas fa-star ${i < testimonial.rating ? 'filled' : ''}`}></i>
                  ))}
                </div>
              </div>
            </div>
            <p className="testimonial-text">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerRating;