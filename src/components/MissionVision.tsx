'use client';

import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import styles from '@/styles/missionVision.module.css';

export default function MissionVision() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section id="mission-vision" className={styles.section}>
      <div className="container">
        {/* Animated Background Elements */}
        <div className={styles.bgShapes}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
        </div>

        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className={styles.badge}>Our Purpose</span>
          <h2 className={styles.title}>Mission & Vision</h2>
          <p className={styles.description}>
            Guiding principles that shape every decision we make
          </p>
        </motion.div>

        {/* Cards Container */}
        <motion.div
          className={styles.cardsContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Mission Card */}
          <motion.div
            className={`${styles.card} ${styles.missionCard}`}
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>
                <Target size={40} />
              </div>

              <h3 className={styles.cardTitle}>Mission</h3>

              <p className={styles.cardMainText}>
                To empower businesses, communities, and individuals through transformative digital solutions that are scalable, ethical, and deeply human-centric.
              </p>

              <div className={styles.divider}></div>

              <div className={styles.keyPoints}>
                <div className={styles.keyPoint}>
                  <span className={styles.number}>01</span>
                  <div>
                    <h4>Value Over Vanity</h4>
                    <p>Real value, measurable outcomes</p>
                  </div>
                </div>
                <div className={styles.keyPoint}>
                  <span className={styles.number}>02</span>
                  <div>
                    <h4>Outcomes Over Outputs</h4>
                    <p>Results that matter, not just deliverables</p>
                  </div>
                </div>
                <div className={styles.keyPoint}>
                  <span className={styles.number}>03</span>
                  <div>
                    <h4>Impact Over Impressions</h4>
                    <p>Meaningful change, lasting relationships</p>
                  </div>
                </div>
              </div>

              <div className={styles.tagline}>
                <p>"Dare. Design. Deliver. Disrupt."</p>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className={`${styles.card} ${styles.visionCard}`}
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>
                <Eye size={40} />
              </div>

              <h3 className={styles.cardTitle}>Vision</h3>

              <p className={styles.cardMainText}>
                A future where every idea, individual, and institution has the digital power to thrive — sustainably, ethically, and creatively.
              </p>

              <div className={styles.divider}></div>

              <div className={styles.keyPoints}>
                <div className={styles.keyPoint}>
                  <span className={styles.number}>01</span>
                  <div>
                    <h4>Small Brands, Big Stories</h4>
                    <p>Smart, ethical marketing for growth</p>
                  </div>
                </div>
                <div className={styles.keyPoint}>
                  <span className={styles.number}>02</span>
                  <div>
                    <h4>Global Competition</h4>
                    <p>Rural entrepreneurs with tech advantage</p>
                  </div>
                </div>
                <div className={styles.keyPoint}>
                  <span className={styles.number}>03</span>
                  <div>
                    <h4>Digital Revolution</h4>
                    <p>Students creating, not just learning</p>
                  </div>
                </div>
              </div>

              <div className={styles.tagline}>
                <p>"Everyone Thrives, Together"</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          className={styles.statement}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className={styles.statementContent}>
            <h4>Our Commitment</h4>
            <p>
              We are on a relentless journey to deliver technology that bridges dreams and achievement — from startups to enterprises, from cities to rural India. Every solution we create is designed with purpose and impact in mind.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
