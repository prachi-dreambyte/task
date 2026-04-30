'use client';

import { 
  Mail, 
  Phone, 
  Globe, 
  Home, 
  Users, 
  MessageSquare, 
  Contact, 
  Code,
  Shield,
  FileText,
  Map,
  ArrowUp,
  Info,
  Search,
  MousePointerClick,
  Smartphone
} from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { 
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ), 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/company/vd-infotech/?originalSubdomain=in', 
      color: '#0077B5' 
    },
    { 
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ), 
      label: 'Instagram', 
      href: 'https://www.instagram.com/vdinfotech.in/', 
      color: '#E4405F' 
    },
  ];

  const services = [
    { icon: Code, label: 'Web Development', href: '#services' },
    { icon: Search, label: 'SEO', href: '#services' },
    { icon: MousePointerClick, label: 'Google Ads', href: '#services' },
    { icon: Smartphone, label: 'App Development', href: '#services' },
  ];

  const quickLinks = [
    { icon: Home, label: 'Home', href: '#hero' },
    { icon: Info, label: 'About Us', href: '#about' },
    { icon: Users, label: 'Why Us', href: '#why-us' },
    { icon: MessageSquare, label: 'Testimonials', href: '#testimonials' },
    { icon: Contact, label: 'Contact', href: '#contact' },
  ];

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'info@vdinfotech.in', href: 'mailto:info@vdinfotech.in' },
    { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+91 8218080679' },
    { icon: Globe, label: 'Website', value: 'www.vdinfotech.in', href: 'https://www.vdinfotech.in' },
  ];

  const footerLinks = [
    { icon: Shield, label: 'Privacy Policy', href: '#' },
    { icon: FileText, label: 'Terms of Service', href: '#' },
    { icon: Map, label: 'Sitemap', href: '#' },
  ];

  return (
    <>
      <footer style={{ 
        paddingTop: '80px', 
        paddingBottom: '40px',
        background:"#000",
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-md-4 mb-4">
              <div style={{ marginBottom: '20px', background: '#fff' }}>
                <Image
                  src="https://www.vdinfotech.in/wp-content/uploads/2025/06/cropped-cropped-vd-infotech-colour.png"
                  alt="VD Infotech Logo"
                  width={150}
                  height={50}
                  style={{ height: 'auto', width: 'auto', maxHeight: '50px' }}
                />
              </div>
              <p style={{ opacity: 0.8, lineHeight: '1.6' }}>
                Transforming digital presence with cutting-edge web development, 
                SEO optimization, and app development solutions.
              </p>
              <div className="mt-4">
                <h6 style={{ color: '#fff', marginBottom: '15px' }}>Follow Us</h6>
                <div className="d-flex gap-3">
                  {socialLinks.map((link, index) => {
                    return (
                      <a
                        key={index}
                        href={link.href}
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: link.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#da251c',
                          textDecoration: 'none',
                          transition: 'transform 0.3s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      >
                        {link.icon()}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-md-2 mb-4">
              <h5 style={{ color: '#ff4444', marginBottom: '20px' }}>Quick Links</h5>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {quickLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <li key={index} style={{ marginBottom: '10px' }}>
                      <a 
                        href={link.href}
                        style={{
                          color: 'white',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          opacity: 0.8,
                          transition: 'opacity 0.3s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
                      >
                        <Icon size={16} color="#da251c" />
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Services */}
            <div className="col-md-3 mb-4">
              <h5 style={{ color: '#ff4444', marginBottom: '20px' }}>Our Services</h5>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <li key={index} style={{ marginBottom: '10px' }}>
                      <a 
                        href={service.href}
                        style={{
                          color: 'white',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          opacity: 0.8,
                          transition: 'opacity 0.3s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
                      >
                        <Icon size={16} color="#da251c" />
                        {service.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-md-3 mb-4">
              <h5 style={{ color: '#ff4444', marginBottom: '20px' }}>Contact Us</h5>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <li key={index} style={{ marginBottom: '15px' }}>
                      <a 
                        href={info.href}
                        style={{
                          color: 'white',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          opacity: 0.8,
                          transition: 'opacity 0.3s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
                      >
                        <Icon size={16} color="#da251c" />
                        <div>
                          <div style={{ fontSize: '14px', opacity: 0.7 }}>{info.label}</div>
                          <div>{info.value}</div>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Footer Links */}
          <div className="row mt-5 pt-4 border-top" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <div className="col-md-6">
              <div className="d-flex gap-4">
                {footerLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      style={{
                        color: 'white',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        opacity: 0.7,
                        fontSize: '14px',
                        transition: 'opacity 0.3s',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
                    >
                      <Icon size={14} color="#da251c" />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="col-md-6 text-md-end">
              <p style={{ opacity: 0.7, fontSize: '14px', margin: 0 }}>
                © {currentYear} VD Infotech Technologies. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '50px',
            height: '50px',
            background: '#8080801c',
            color: 'white',
            borderRadius: '50%',
            border: 'none',
            boxShadow: '0 4px 15px rgba(218, 37, 28, 0.3)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.3s',
          }}
          onClick={scrollToTop}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <ArrowUp size={24} color="#da251c" />
        </button>
      )}
    </>
  );
}