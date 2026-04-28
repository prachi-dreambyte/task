'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    company: 'Tech Startup Inc',
    text: 'VD Infotech delivered an exceptional website that exceeded our expectations. Their team was professional and responsive throughout the project.',
    rating: 5,
    image: '👨‍💼',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    company: 'E-commerce Solutions',
    text: 'The SEO optimization services have significantly improved our search rankings. We saw a 150% increase in organic traffic within 3 months.',
    rating: 5,
    image: '👩‍💼',
  },
  {
    id: 3,
    name: 'Amit Patel',
    company: 'Digital Marketing Agency',
    text: 'Their Google Ads management has been a game-changer for our campaigns. ROI improved dramatically with their strategic approach.',
    rating: 5,
    image: '👨‍💼',
  },
  {
    id: 4,
    name: 'Neha Gupta',
    company: 'Mobile App Startup',
    text: 'The app development team created a beautiful and functional mobile application. Highly recommended for anyone looking for quality work.',
    rating: 5,
    image: '👩‍💼',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-light">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Client Testimonials
        </motion.h2>

        <div className="row g-4">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              className="col-md-6 col-lg-6"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="card card-hover h-100"
                whileHover={{ y: -5 }}
              >
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div style={{ fontSize: '2.5rem', marginRight: '1rem' }}>
                      {testimonial.image}
                    </div>
                    <div>
                      <h6 className="card-title fw-bold mb-0">{testimonial.name}</h6>
                      <small className="text-muted">{testimonial.company}</small>
                    </div>
                  </div>

                  <div className="mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} style={{ color: '#ffc107', fontSize: '1.2rem' }}>
                        ⭐
                      </span>
                    ))}
                  </div>

                  <p className="card-text">{testimonial.text}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="row mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="col-lg-12 text-center">
            <p className="lead text-muted">
              Join <strong>500+</strong> satisfied clients who have transformed their business with us
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
