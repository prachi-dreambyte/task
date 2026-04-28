'use client';

import { motion } from 'framer-motion';

export default function HeroBanner() {
  return (
    <section
      id="hero"
      className="py-5"
      style={{
        background: 'linear-gradient(135deg, #0066cc 0%, #00d4ff 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          top: '10%',
          right: '10%',
        }}
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '50%',
          bottom: '10%',
          left: '5%',
        }}
      />

      <div className="container position-relative z-1">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="display-3 fw-bold mb-4">
                Transform Your Digital Presence
              </h1>
              <p className="lead mb-4">
                Professional web development, SEO optimization, and app development services tailored to your business needs.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="d-flex gap-3 flex-wrap"
              >
                <button
                  className="btn btn-light btn-lg fw-bold"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </button>
                <button
                  className="btn btn-outline-light btn-lg fw-bold"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          </div>
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div
                style={{
                  fontSize: '150px',
                  opacity: 0.2,
                }}
              >
                💻
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
