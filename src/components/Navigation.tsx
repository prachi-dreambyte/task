'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Navigation.module.css';

interface NavigationProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

export default function Navigation({ isDark, setIsDark }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{ backgroundColor: isDark ? '#1a1f2e' : '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <div className="container-fluid">
        <motion.a
          className="navbar-brand fw-bold"
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: '1.5rem', color: '#0066cc' }}
        >
          VD Infotech
        </motion.a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => scrollToSection('services')}
              >
                Services
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => scrollToSection('why-us')}
              >
                Why Us
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => scrollToSection('testimonials')}
              >
                Testimonials
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </li>
            <li className="nav-item ms-3">
              <button
                className="btn btn-outline-primary"
                onClick={() => setIsDark(!isDark)}
              >
                {isDark ? '☀️ Light' : '🌙 Dark'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
