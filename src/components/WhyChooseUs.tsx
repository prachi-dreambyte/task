'use client';

import { motion } from 'framer-motion';

const reasons = [
  {
    id: 1,
    title: 'Expert Team',
    description: 'Experienced professionals with years of industry expertise.',
    icon: '👥',
  },
  {
    id: 2,
    title: 'Fast Delivery',
    description: 'Quick turnaround times without compromising quality.',
    icon: '⚡',
  },
  {
    id: 3,
    title: 'Affordable Pricing',
    description: 'Competitive rates tailored to your budget.',
    icon: '💰',
  },
  {
    id: 4,
    title: '24/7 Support',
    description: 'Round-the-clock customer support and maintenance.',
    icon: '🛟',
  },
  {
    id: 5,
    title: 'Proven Results',
    description: 'Track record of successful projects and satisfied clients.',
    icon: '✅',
  },
  {
    id: 6,
    title: 'Latest Technology',
    description: 'Using cutting-edge tools and frameworks.',
    icon: '🚀',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h2>

        <div className="row g-4">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.id}
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="card card-hover h-100"
                whileHover={{ scale: 1.05 }}
              >
                <div className="card-body">
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                    {reason.icon}
                  </div>
                  <h5 className="card-title fw-bold mb-2">{reason.title}</h5>
                  <p className="card-text text-muted">{reason.description}</p>
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
          <div className="col-lg-8 mx-auto">
            <div
              className="card"
              style={{
                background: 'linear-gradient(135deg, #0066cc 0%, #00d4ff 100%)',
                color: 'white',
                border: 'none',
              }}
            >
              <div className="card-body text-center py-5">
                <h4 className="card-title fw-bold mb-3">Ready to Transform Your Business?</h4>
                <p className="card-text mb-4">
                  Join hundreds of satisfied clients who have grown their business with us.
                </p>
                <button
                  className="btn btn-light fw-bold"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Your Project Today
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
