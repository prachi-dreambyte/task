'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Phone must be 10 digits'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      console.log('Form data:', data);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {submitted && (
                <motion.div
                  className="alert alert-success alert-dismissible fade show"
                  role="alert"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <strong>Success!</strong> Your message has been sent. We'll get back to you soon.
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setSubmitted(false)}
                  ></button>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label fw-bold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      id="name"
                      placeholder="Your name"
                      {...register('name')}
                    />
                    {errors.name && (
                      <div className="error-message">{errors.name.message}</div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label fw-bold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      placeholder="your@email.com"
                      {...register('email')}
                    />
                    {errors.email && (
                      <div className="error-message">{errors.email.message}</div>
                    )}
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label fw-bold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      id="phone"
                      placeholder="10-digit number"
                      {...register('phone')}
                    />
                    {errors.phone && (
                      <div className="error-message">{errors.phone.message}</div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="service" className="form-label fw-bold">
                      Service Interested In
                    </label>
                    <select
                      className={`form-select ${errors.service ? 'is-invalid' : ''}`}
                      id="service"
                      {...register('service')}
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="seo">SEO Optimization</option>
                      <option value="google-ads">Google Ads</option>
                      <option value="app-development">App Development</option>
                    </select>
                    {errors.service && (
                      <div className="error-message">{errors.service.message}</div>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-bold">
                    Message
                  </label>
                  <textarea
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    id="message"
                    rows={5}
                    placeholder="Tell us about your project..."
                    {...register('message')}
                  ></textarea>
                  {errors.message && (
                    <div className="error-message">{errors.message.message}</div>
                  )}
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary-custom btn-lg w-100 fw-bold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>

              <div className="row mt-5 text-center">
                <div className="col-md-4">
                  <h6 className="fw-bold">📧 Email</h6>
                  <p>
                    <a href="mailto:info@vdinfotech.in" className="text-decoration-none">
                      info@vdinfotech.in
                    </a>
                  </p>
                </div>
                <div className="col-md-4">
                  <h6 className="fw-bold">📱 Phone</h6>
                  <p>
                    <a href="tel:+919876543210" className="text-decoration-none">
                      +91 98765 43210
                    </a>
                  </p>
                </div>
                <div className="col-md-4">
                  <h6 className="fw-bold">🌐 Website</h6>
                  <p>
                    <a href="https://www.vdinfotech.in" className="text-decoration-none">
                      www.vdinfotech.in
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
