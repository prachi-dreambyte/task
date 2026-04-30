'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '@/styles/testimonials.module.css';

const testimonials = [
  {
    id: 1,
    initials: 'RK',
    name: 'Rajesh Kumar',
    company: 'Tech Startup Inc',
    text: 'VD Infotech delivered an exceptional website that exceeded our expectations. Their team was professional and responsive throughout the project.',
    rating: 5,
    tag: 'Web development',
    avatarClass: 'av1',
  },
  {
    id: 2,
    initials: 'PS',
    name: 'Priya Sharma',
    company: 'E-commerce Solutions',
    text: 'The SEO services have significantly improved our search rankings. We saw a 150% increase in organic traffic within just 3 months.',
    rating: 5,
    tag: 'SEO optimization',
    avatarClass: 'av2',
  },
  {
    id: 3,
    initials: 'AP',
    name: 'Amit Patel',
    company: 'Digital Marketing Agency',
    text: 'Their Google Ads management has been a game-changer for our campaigns. ROI improved dramatically with their strategic approach.',
    rating: 5,
    tag: 'Google Ads',
    avatarClass: 'av3',
  },
  {
    id: 4,
    initials: 'NG',
    name: 'Neha Gupta',
    company: 'Mobile App Startup',
    text: 'The app development team created a beautiful and functional mobile application. Highly recommended for anyone looking for quality work.',
    rating: 5,
    tag: 'App development',
    avatarClass: 'av4',
  },
];

const avatarColors: Record<string, { bg: string; color: string }> = {
  av1: { bg: '#EEEDFE', color: '#3C3489' },
  av2: { bg: '#E1F5EE', color: '#085041' },
  av3: { bg: '#E6F1FB', color: '#0C447C' },
  av4: { bg: '#FAEEDA', color: '#633806' },
};

const ORB_COLORS = ['#534AB7', '#1D9E75', '#378ADD', '#D85A30', '#BA7517', '#D4537E'];

interface Orb {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  color: string;
  alpha: number;
  phase: number;
}

function StarIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" style={{ display: 'block' }}>
      <polygon
        points="7,1 8.8,5.4 13.5,5.8 10.1,8.7 11.1,13.3 7,10.9 2.9,13.3 3.9,8.7 0.5,5.8 5.2,5.4"
        fill="#da251c"
      />
    </svg>
  );
}

function AnimatedCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const orbsRef = useRef<Orb[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const section = canvas.parentElement;
    if (!section) return;

    function initCanvas() {
      if (!canvas || !section) return;
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
      const W = canvas.width;
      const H = canvas.height;
      orbsRef.current = Array.from({ length: 20 }, (_, i) => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: 16 + Math.random() * 40,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        color: ORB_COLORS[i % ORB_COLORS.length],
        alpha: 0.15 + Math.random() * 0.2,
        phase: Math.random() * Math.PI * 2,
      }));
    }

    function draw(t: number) {
      if (!canvas || !ctx) return;
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#1a1535';
      ctx.fillRect(0, 0, W, H);
      orbsRef.current.forEach((o) => {
        o.x += o.vx;
        o.y += o.vy;
        if (o.x < -o.r) o.x = W + o.r;
        if (o.x > W + o.r) o.x = -o.r;
        if (o.y < -o.r) o.y = H + o.r;
        if (o.y > H + o.r) o.y = -o.r;
        const pulse = o.alpha + Math.sin(t / 900 + o.phase) * 0.06;
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fillStyle = o.color + Math.round(pulse * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });
      rafRef.current = requestAnimationFrame(draw);
    }

    initCanvas();
    rafRef.current = requestAnimationFrame(draw);
    window.addEventListener('resize', initCanvas);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', initCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, zIndex: 0, width: '100%', height: '100%' }}
    />
  );
}

function useCountUp(target: number, decimals: boolean, duration: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    function step(now: number) {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setValue(target * ease);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return decimals ? value.toFixed(1) : Math.round(value);
}

function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const c1 = useCountUp(500, false, 1800, visible);
  const c2 = useCountUp(5.0, true, 1600, visible);
  const c3 = useCountUp(150, false, 1800, visible);

  return (
    <div ref={sectionRef} className={styles.statsSection}>
      <AnimatedCanvas />
      <div className={styles.statsContent}>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{c1}+</div>
            <div className={styles.statLabel}>Satisfied clients</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{c2}</div>
            <div className={styles.statLabel}>Average rating</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{c3}%</div>
            <div className={styles.statLabel}>Avg. traffic increase</div>
          </div>
        </div>
        <p className={styles.statsText}>
          Join businesses that have transformed their digital presence with{' '}
          <strong>VD Infotech</strong>.
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [cur, setCur] = useState(0);
  const total = testimonials.length;
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (n: number) => setCur(((n % total) + total) % total),
    [total]
  );

  const startAuto = useCallback(() => {
    autoRef.current = setInterval(() => setCur((c) => (c + 1) % total), 3800);
  }, [total]);

  const stopAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
  }, []);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [startAuto, stopAuto]);

  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        {/* Left: heading block */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.headingBlock}
        >
          <p className={styles.label}>Social proof</p>
          <div className={styles.divider} />
          <h2 className={styles.heading}>
            What clients
            <br />
            say
          </h2>
          <p className={styles.description}>
            Real results from real businesses — hear directly from the people who have worked with us.
          </p>

          <div className={styles.ratingBlock}>
            <div>
              <div className={styles.ratingValue}>5.0</div>
            </div>
            <div>
              <div className={styles.ratingStars}>
                {[...Array(5)].map((_, i) => <StarIcon key={i} size={13} />)}
              </div>
              <div className={styles.ratingLabel}>Average rating</div>
            </div>
          </div>

          <p className={styles.trustText}>
            Trusted by <strong>500+</strong> satisfied clients worldwide
          </p>
        </motion.div>

        {/* Right: Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
          className={styles.carousel}
        >
          {/* Slides */}
          <div className={styles.slidesContainer}>
            <AnimatePresence mode="wait">
              {testimonials.map((t, idx) =>
                idx === cur ? (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    className={styles.slide}
                  >
                    {/* Avatar + name */}
                    <div className={styles.avatarSection}>
                      <div
                        className={styles.avatar}
                        style={{
                          background: avatarColors[t.avatarClass].bg,
                          color: avatarColors[t.avatarClass].color,
                        }}
                      >
                        {t.initials}
                      </div>
                      <div className={styles.avatarInfo}>
                        <div className={styles.clientName}>{t.name}</div>
                        <div className={styles.clientCompany}>{t.company}</div>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className={styles.starsContainer}>
                      {[...Array(t.rating)].map((_, i) => <StarIcon key={i} />)}
                    </div>

                    {/* Quote */}
                    <div className={styles.quoteSection}>
                      <div className={styles.quoteMark}>"</div>
                      <p className={styles.quoteText}>{t.text}</p>
                    </div>

                    {/* Tag */}
                    <span className={styles.tag}>{t.tag}</span>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className={styles.controls}>
            {/* Dots */}
            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`${styles.dot} ${i === cur ? styles.active : ''}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next */}
            <div className={styles.navButtons}>
              {(['prev', 'next'] as const).map((dir) => (
                <button
                  key={dir}
                  onClick={() => go(cur + (dir === 'next' ? 1 : -1))}
                  className={styles.navButton}
                  aria-label={dir === 'prev' ? 'Previous' : 'Next'}
                >
                  <svg
                    width={13}
                    height={13}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {dir === 'prev' ? (
                      <polyline points="15 18 9 12 15 6" />
                    ) : (
                      <polyline points="9 6 15 12 9 18" />
                    )}
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats with animated background */}
      <StatsSection />
    </section>
  );
}