'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import styles from '@/styles/aboutUs.module.css';

interface ValueCardData {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

export default function AboutUs() {
  const [flipped, setFlipped] = useState<number | null>(null);

  const valueCards: ValueCardData[] = [
    {
      id: 1,
      icon: <Award size={32} />,
      title: 'Value Over Vanity',
      description: 'We focus on delivering real value and measurable outcomes for your business.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      icon: <Target size={32} />,
      title: 'Outcomes Over Outputs',
      description: 'Our commitment is to results that matter, not just deliverables.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      icon: <Users size={32} />,
      title: 'Partnership Over Transactions',
      description: 'We build lasting relationships with our clients, not just one-time deals.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      icon: <Lightbulb size={32} />,
      title: 'Purpose-Driven Innovation',
      description: 'Every solution we create is designed with purpose and impact in mind.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <div className={styles.contentWrapper}>
          {/* Left side - Text content */}
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.title}>Company Overview</h2>
            <p className={styles.subtitle}>
              Plan your business strategy with our experts
            </p>

            <p className={styles.description}>
              At VD Infotech, we empower your business with cutting-edge technology solutions tailored to your unique needs. Our team of experienced professionals collaborates closely with you to develop strategies that drive growth, enhance efficiency, and future-proof your digital presence.
            </p>

            <p className={styles.description}>
              With a commitment to innovation and excellence, we provide end-to-end services—from software development and digital marketing to AI-driven solutions and virtual assistance—that align perfectly with your business goals.
            </p>

            <p className={styles.description}>
              Partner with VD Infotech and transform your vision into reality with expert guidance and reliable technology.
            </p>

            <div className={styles.statsContainer}>
              <motion.div
                className={styles.stat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4>10,000+</h4>
                <p>Businesses Empowered</p>
              </motion.div>
              <motion.div
                className={styles.stat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4>1 Lakh</h4>
                <p>Students Upskilled</p>
              </motion.div>
              <motion.div
                className={styles.stat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4>100%</h4>
                <p>Purpose-Driven</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Values */}
          <motion.div
            className={styles.valuesContainer}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.valuesGrid}>
              {valueCards.map((card) => (
                <motion.div
                  key={card.id}
                  className={styles.flipCardContainer}
                  onMouseEnter={() => setFlipped(card.id)}
                  onMouseLeave={() => setFlipped(null)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: card.id * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={styles.flipCard}
                    animate={{ rotateY: flipped === card.id ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ perspective: '1000px' }}
                  >
                    {/* Front side */}
                    <div className={styles.cardFront}>
                      <div className={styles.valueIcon}>
                        {card.icon}
                      </div>
                      <h4>{card.title}</h4>
                      <p>{card.description}</p>
                    </div>

                    {/* Back side */}
                    <div className={styles.cardBack}>
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className={styles.cardImage}
                        style={{ objectFit: 'cover' }}
                      />
                      <div className={styles.cardBackOverlay}>
                        <p>{card.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
