'use client';

import { useState } from 'react';
import styles from '@/styles/contactForm.module.css';

const SERVICES = [
  'Web Development',
  'SEO Optimization',
  'Google Ads',
  'App Development',
  'Digital Marketing',
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '' });
  const [selectedService, setSelectedService] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Errors = {};
    if (form.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email address';
    if (!/^[0-9]{10}$/.test(form.phone.trim())) newErrors.phone = 'Enter a 10-digit number';
    if (!selectedService) newErrors.service = 'Please select a service';
    if (form.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const text =
      `*New Enquiry — VD Infotech Website*\n\n` +
      `*Name:* ${form.name.trim()}\n` +
      `*Email:* ${form.email.trim()}\n` +
      `*Phone:* ${form.phone.trim()}\n` +
      `*Service:* ${selectedService}\n\n` +
      `*Message:*\n${form.message.trim()}`;

    window.open(`https://wa.me/918218080679?text=${encodeURIComponent(text)}`, '_blank');

    setSuccess(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setSelectedService('');
    setErrors({});
    setTimeout(() => setSuccess(false), 5000);
  };

  const update = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="contact" style={{ padding: '3rem 1rem', fontFamily: 'sans-serif' }}>
      <div className={styles.contactContainer}>

        {/* ── Left: Form ── */}
        <div className={styles.formSection}>
          {/* Header */}
          <div className={styles.formHeader}>
            <h2>Get in Touch</h2>
            <p>
              Have a project in mind? Fill out the form below and our team will connect with you on WhatsApp within 24 hours.
            </p>
          </div>

          {/* Row: Name + Email */}
          <div className={styles.formGrid}>
            <Field label="Full name" error={errors.name}>
              <input 
                className={`${styles.inputField} ${errors.name ? styles.inputFieldError : ''}`}
                type="text" 
                placeholder="Your name" 
                value={form.name} 
                onChange={update('name')} 
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input 
                className={`${styles.inputField} ${errors.email ? styles.inputFieldError : ''}`}
                type="email" 
                placeholder="you@email.com" 
                value={form.email} 
                onChange={update('email')} 
              />
            </Field>
          </div>

          {/* Phone */}
          <div style={{ marginBottom: '0.75rem' }}>
            <Field label="Phone number" error={errors.phone}>
              <input 
                className={`${styles.inputField} ${errors.phone ? styles.inputFieldError : ''}`}
                type="tel" 
                placeholder="10-digit mobile number" 
                value={form.phone} 
                onChange={update('phone')} 
              />
            </Field>
          </div>

          {/* Service tags */}
          <div style={{ marginBottom: '0.75rem' }}>
            <div style={{ fontSize: 20, fontWeight: 600, color: '#1a1a1a', marginBottom: 8 }}>Service Interested In</div>
            <div className={styles.serviceTags}>
              {SERVICES.map(s => (
                <button
                  key={s}
                  onClick={() => { setSelectedService(s); setErrors(p => ({ ...p, service: undefined })); }}
                  className={`${styles.tagButton} ${selectedService === s ? styles.tagButtonActive : ''}`}
                >
                  {s}
                </button>
              ))}
            </div>
            {errors.service && <div className={styles.errorText}>{errors.service}</div>}
          </div>

          {/* Message */}
          <div style={{ marginBottom: '0.75rem' }}>
            <Field label="Message" error={errors.message}>
              <textarea 
                className={`${styles.inputField} ${errors.message ? styles.inputFieldError : ''}`}
                style={{ resize: 'vertical' }} 
                rows={3} 
                placeholder="Describe your project or requirement..." 
                value={form.message} 
                onChange={update('message')} 
              />
            </Field>
          </div>

          {/* Submit */}
          <button 
            onClick={handleSubmit} 
            className={styles.submitButton}
          >
            <WhatsAppIcon />
            Open WhatsApp
          </button>

          {/* Success */}
          {success && (
            <div className={styles.successMessage}>
              <svg width="15" height="15" viewBox="0 0 20 20" fill="#da251c"><path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm-1 15l-5-5 1.41-1.41L9 12.17l7.59-7.59L18 6l-9 9z"/></svg>
              Opening WhatsApp with your message...
            </div>
          )}
        </div>

        {/* ── Right: Info panel ── */}
        <div className={styles.infoPanel}>
          {/* Overlay for better text readability */}
          <div className={styles.infoOverlay} />
          
          <div className={styles.infoContent}>
            <span className={styles.companyBadge}>
              VD Infotech Technologies
            </span>
            <h3 className={styles.infoTitle}>
              Let's Build Something Great Together
            </h3>
            <p className={styles.infoDescription}>
              Our team is ready to help you transform your digital presence. Whether you need a website, app, or digital marketing strategy, we've got you covered.
            </p>
            <div className={styles.infoDescription}>
              Reach out and our team will connect with you on WhatsApp shortly.
            </div>
          </div>

          <hr className={styles.divider} />

          <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <InfoItem icon={<LocationIcon />} label="Office address">
              Office No. 505, 5th Floor, IT Park 43A,<br />
              Sahastradhara Road, Govind Vihar,<br />
              Dehradun, Uttarakhand – 248013
            </InfoItem>

            <InfoItem icon={<EmailIcon />} label="Email">
              <a href="mailto:info@vdinfotech.in" className={styles.infoLink}>info@vdinfotech.in</a>
            </InfoItem>

            <InfoItem icon={<WhatsAppIcon />} label="WhatsApp">
              <a href="https://wa.me/918218080679" className={styles.infoLink}>+91 82180 80679</a>
            </InfoItem>

            <InfoItem icon={<GlobeIcon />} label="Website">
              <a href="https://www.vdinfotech.in" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>www.vdinfotech.in</a>
            </InfoItem>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className={styles.mapSection}>
        <h3 className={styles.mapTitle}>Find Us Here</h3>
        <p className={styles.mapDescription}>
          Visit our office in Dehradun, Uttarakhand. We're located in the heart of the IT Park.
        </p>
        <div className={styles.mapContainer}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.493484332894!2d78.0880682!3d30.365342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d7251506e921%3A0x306d52535be47710!2sVD%20Infotech%20Technologies%20Pvt.%20Ltd.%20-%20Web%2C%20App%20%26%20Digital%20Marketing%20Dehradun!5e0!3m2!1sen!2sin!4v1777543864513!5m2!1sen!2sin" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.mapIframe}
          />
        </div>
      </div>
    </section>
  );
}

// ── Sub-components ──

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <label style={{ fontSize: 20, fontWeight: 500, color: '#000' }}>{label}</label>
      {children}
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}

function InfoItem({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className={styles.infoItem}>
      <div className={styles.infoIcon}>
        {icon}
      </div>
      <div>
        <div className={styles.infoLabel}>{label}</div>
        <div className={styles.infoContentText}>{children}</div>
      </div>
    </div>
  );
}

// ── Icons ──

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#da251c">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="#da251c">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="#da251c">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="#da251c">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  );
}

