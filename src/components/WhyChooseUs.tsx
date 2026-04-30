'use client';

import { motion } from 'framer-motion';
import { Users, Zap, DollarSign, Clock, CheckCircle, Rocket } from 'lucide-react';
import styles from '@/styles/whyChooseUs.module.css';

const reasons = [
  {
    id: 1,
    title: 'Expert Team',
    description: 'Experienced professionals with years of industry expertise dedicated to your success.',
    icon: Users,
  },
  {
    id: 2,
    title: 'Reliable Guidance',
    description: 'Proven results, every time. You can count on us to deliver exceptional outcomes.',
    icon: Zap,
  },
  {
    id: 3,
    title: 'Affordable Pricing',
    description: 'Enterprise-grade solutions at small-business-friendly prices.',
    icon: DollarSign,
  },
  {
    id: 4,
    title: '24/7 Support',
    description: 'Round-the-clock customer support and maintenance for your peace of mind.',
    icon: Clock,
  },
  {
    id: 5,
    title: 'Purpose-Driven',
    description: 'We believe technology should better the world, not just sell to it.',
    icon: CheckCircle,
  },
  {
    id: 6,
    title: 'Cutting-Edge Tech',
    description: 'Using AI, Automation, MarTech, and emerging technologies to keep you ahead.',
    icon: Rocket,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className={styles.whyChooseUsSection}>
      <div className="container">
        <motion.div
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>You Can Trust Us to Deliver the Best Guidance</h2>
          <p>Empowering You with Expert Guidance, Every Step of the Way</p>
        </motion.div>

        <div className={styles.cardsContainer}>
          {reasons.map((reason, idx) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={reason.id}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={styles.iconWrapper}>
                  <IconComponent className={styles.icon} />
                </div>
                <div className={styles.cardContent}>
                  <h5 className={styles.cardTitle}>{reason.title}</h5>
                  <p className={styles.cardDescription}>{reason.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
