'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Code, Search, MousePointerClick, Smartphone
} from 'lucide-react';
import styles from '@/styles/service.module.css';

const services = [
  {
    id: 1,
    tag: 'WEB DEVELOPMENT',
    title: 'Web Development',
    description: 'Build powerful, scalable, and visually stunning websites tailored to your business goals. From sleek landing pages to full-featured web applications, we craft secure and responsive digital experiences with cutting-edge technologies and intuitive UI/UX.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    width: 600,
    height: 400,
    icon: Code,
  },
  {
    id: 2,
    tag: 'SEO',
    title: 'SEO',
    description: 'Dominate search rankings and drive organic traffic with our expert SEO strategies. We optimize your website for both users and search engines — covering on-page SEO, technical SEO, keyword research, link building, and local SEO to grow your visibility.',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=900&h=600&fit=crop',
    width: 900,
    height: 600,
    icon: Search,
  },
  {
    id: 3,
    tag: 'GOOGLE ADS',
    title: 'Google Ads',
    description: 'Reach your ideal customers at the right moment with high-converting Google Ads campaigns. Our data-driven approach covers Search, Display, Shopping, and YouTube ads — maximizing your ROI through precise targeting, compelling creatives, and continuous optimization.',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=900&h=600&fit=crop',
    width: 900,
    height: 600,
    icon: MousePointerClick,
  },
  {
    id: 4,
    tag: 'APP DEVELOPMENT',
    title: 'App Development',
    description: 'Turn your ideas into powerful mobile experiences. We design and develop native and cross-platform apps for iOS and Android that are fast, secure, and user-friendly — from concept and wireframing to launch and post-deployment support.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
    width: 600,
    height: 400,
    icon: Smartphone,
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.serviceSection}>
      <div className="container">
        <motion.div
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Our Services</h2>
          <p>Comprehensive solutions tailored to your business needs</p>
        </motion.div>

        <div className={styles.servicesContainer}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                className={`${styles.serviceItem} ${index % 2 === 1 ? styles.reverse : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className={styles.serviceContent}>
                  <div className={styles.serviceIconWrapper}>
                    <IconComponent className={styles.serviceIcon} />
                  </div>
                  <span className={styles.serviceTag}>{service.tag}</span>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </div>

                <motion.div
                  className={styles.serviceImage}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    width={service.width}
                    height={service.height}
                    style={{ objectFit: 'cover' }}
                    priority={index < 3}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}