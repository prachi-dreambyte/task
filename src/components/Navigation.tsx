'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Navigation.module.css';

interface NavigationProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

export default function Navigation({ isDark, setIsDark }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light sticky-top ${styles.navbar}`} style={{ backgroundColor: isScrolled ? 'white' : 'transparent', boxShadow: isScrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none', transition: 'all 0.3s ease' }}>
      <div className="container">
        <motion.a
          className="navbar-brand"
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Image
            src="https://www.vdinfotech.in/wp-content/uploads/2025/06/cropped-cropped-vd-infotech-colour.png"
            alt="VD Infotech Logo"
            width={150}
            height={50}
            priority
            style={{ height: 'auto', width: 'auto', maxHeight: '50px' }}
          />
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
          <ul className={`navbar-nav mx-auto ${styles.navList}`}>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${styles.navLink}`}
                onClick={() => scrollToSection('about')}
              >
                About Us
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${styles.navLink}`}
                onClick={() => scrollToSection('services')}
              >
                Services
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${styles.navLink}`}
                onClick={() => scrollToSection('why-us')}
              >
                Why Us
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${styles.navLink}`}
                onClick={() => scrollToSection('testimonials')}
              >
                Testimonials
              </button>
            </li>
          </ul>
          <button
            className={`btn btn-danger ${styles.contactBtn}`}
            onClick={() => scrollToSection('contact')}
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}
