import React from 'react';
import './CustomerRating.css';

const CustomerRating = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      rating: 5,
      comment: 'Beautiful saree! Perfect fit and excellent quality.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
      id: 2,
      name: 'Anjali Patel',
      rating: 5,
      comment: 'Great service and fast delivery. Love my new saree!',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg'
    },
    {
      id: 3,
      name: 'Meera Singh',
      rating: 4,
      comment: 'Good quality fabric. Will shop again!',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg'
    },
  ];

  return (
    <section className="rating-container">
      <h2 className="rating-title">What Our Customers Say</h2>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">

            <div className="customer-info">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="customer-image"
              />

              <div>
                <h3 className="customer-name">
                  {testimonial.name}
                </h3>

                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      {i < testimonial.rating ? '★' : '☆'}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="testimonial-text">
              {testimonial.comment}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerRating;