'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'linear-gradient(135deg, #0066cc 0%, #00d4ff 100%)',
        color: 'white',
        paddingTop: '60px',
        paddingBottom: '20px',
      }}
    >
      <div className="container">
        <div className="row mb-5">
          <motion.div
            className="col-md-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h5 className="fw-bold mb-3">VD Infotech</h5>
            <p className="small">
              Transforming businesses through innovative digital solutions and cutting-edge technology.
            </p>
          </motion.div>

          <motion.div
            className="col-md-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h6 className="fw-bold mb-3">Services</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="#services" className="text-white text-decoration-none">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-white text-decoration-none">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#services" className="text-white text-decoration-none">
                  Google Ads
                </a>
              </li>
              <li>
                <a href="#services" className="text-white text-decoration-none">
                  App Development
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="col-md-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="#hero" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-white text-decoration-none">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white text-decoration-none">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="col-md-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h6 className="fw-bold mb-3">Contact Info</h6>
            <ul className="list-unstyled small">
              <li>
                📧{' '}
                <a href="mailto:info@vdinfotech.in" className="text-white text-decoration-none">
                  info@vdinfotech.in
                </a>
              </li>
              <li>
                📱{' '}
                <a href="tel:+919876543210" className="text-white text-decoration-none">
                  +91 98765 43210
                </a>
              </li>
              <li>🌐 www.vdinfotech.in</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-top pt-4"
          style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start small">
              <p className="mb-0">
                © {currentYear} VD Infotech Technologies Pvt Ltd. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end small">
              <div className="d-flex justify-content-center justify-content-md-end gap-3">
                <a href="#" className="text-white text-decoration-none">
                  Privacy Policy
                </a>
                <a href="#" className="text-white text-decoration-none">
                  Terms of Service
                </a>
                <a href="#" className="text-white text-decoration-none">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
