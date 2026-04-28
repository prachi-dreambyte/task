'use client';

import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom, responsive websites built with modern technologies. Fast, secure, and SEO-optimized.',
    icon: '🌐',
    features: ['React/Next.js', 'Responsive Design', 'Fast Loading'],
  },
  {
    id: 2,
    title: 'SEO Optimization',
    description: 'Boost your online visibility with our comprehensive SEO strategies and optimization techniques.',
    icon: '📈',
    features: ['Keyword Research', 'On-page SEO', 'Link Building'],
  },
  {
    id: 3,
    title: 'Google Ads',
    description: 'Targeted advertising campaigns to reach your ideal customers and maximize ROI.',
    icon: '📢',
    features: ['Campaign Setup', 'Optimization', 'Analytics'],
  },
  {
    id: 4,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    icon: '📱',
    features: ['iOS/Android', 'Cross-platform', 'User-friendly'],
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="section-padding bg-light">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <motion.div
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div key={service.id} className="col-md-6 col-lg-3" variants={itemVariants}>
              <motion.div
                className="card card-hover h-100"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card-body text-center">
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    {service.icon}
                  </div>
                  <h5 className="card-title fw-bold mb-3">{service.title}</h5>
                  <p className="card-text text-muted mb-3">{service.description}</p>
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="badge bg-primary"
                        style={{ fontSize: '0.75rem' }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
