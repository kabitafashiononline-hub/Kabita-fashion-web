import React from 'react';
import './CustomerRating.css';

const CustomerRating = () => {
  const testimonials = [
    { id: 1, name: 'Priya Sharma', rating: 5, comment: 'Beautiful saree! Perfect fit and excellent quality.', image: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: 2, name: 'Anjali Patel', rating: 5, comment: 'Great service and fast delivery. Love my new saree!', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 3, name: 'Meera Singh', rating: 4, comment: 'Good quality fabric. Will shop again!', image: 'https://randomuser.me/api/portraits/women/3.jpg' },
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