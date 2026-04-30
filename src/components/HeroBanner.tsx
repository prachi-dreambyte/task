'use client';

import { useState, useEffect, useRef } from 'react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1400&q=85',
    tag: 'Welcome to IT Solutions',
    title: 'Affordable Big IT & Technology Solutions',
    sub: 'Enterprise-grade solutions at small-business-friendly prices',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=85',
    tag: 'Empowering Businesses',
    title: 'Next-Gen Digital Solutions',
    sub: 'From Strategy to Success — Complete IT, Branding & Marketing',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1400&q=85',
    tag: 'Build Future',
    title: 'Ready Websites & Applications',
    sub: 'Custom Web & App Development Tailored for Performance',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=85',
    tag: 'Digital Transformation',
    title: 'AI & Automation Solutions',
    sub: 'Streamline your operations with cutting-edge technology',
  },
];

const SLIDE_DURATION = 5000;

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [popped, setPopped] = useState(true);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    setPopped(false);
    setTimeout(() => {
      setCurrent((index + slides.length) % slides.length);
      setPopped(true);
      setProgressKey((k) => k + 1);
    }, 150);
  };

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length;
        setPopped(false);
        setTimeout(() => {
          setPopped(true);
          setProgressKey((k) => k + 1);
        }, 150);
        return next;
      });
    }, SLIDE_DURATION);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Montserrat:wght@300;400;500;600&display=swap');

        .hero-wrap {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: #000;
          font-family: 'Montserrat', sans-serif;
        }

        /* ── Slide images ── */
        .hero-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 1.2s ease;
        }
        .hero-slide.active {
          opacity: 1;
        }
        .hero-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.07);
          transition: transform 7s ease;
          display: block;
        }
        .hero-slide.active img {
          transform: scale(1);
        }

        /* ── Overlay ── */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.15) 0%,
            rgba(0,0,0,0.50) 45%,
            rgba(0,0,0,0.72) 100%
          );
        }

        /* ── Centered content ── */
        .hero-body {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
          z-index: 5;
        }

        /* ── Tag line ── */
        .hero-tag {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.82);
          margin-bottom: 16px;
          opacity: 0;
          transform: translateY(22px);
          transition:
            opacity  0.6s cubic-bezier(0.22,1,0.36,1) 0.08s,
            transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.08s;
        }
        .hero-tag.pop { opacity: 1; transform: translateY(0); }

        /* ── Main title ── */
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 6vw, 4rem);
          font-weight: 400;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 18px;
          text-shadow: 0 2px 30px rgba(0,0,0,0.3);
          opacity: 0;
          transform: translateY(34px) scale(0.96);
          transition:
            opacity  0.65s cubic-bezier(0.22,1,0.36,1) 0.22s,
            transform 0.65s cubic-bezier(0.22,1,0.36,1) 0.22s;
        }
        .hero-title.pop { opacity: 1; transform: translateY(0) scale(1); }

        /* ── Sub line ── */
        .hero-sub {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.85);
          margin-bottom: 32px;
          opacity: 0;
          transform: translateY(20px);
          transition:
            opacity  0.6s cubic-bezier(0.22,1,0.36,1) 0.38s,
            transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.38s;
        }
        .hero-sub.pop { opacity: 1; transform: translateY(0); }

        /* ── Buttons ── */
        .hero-btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
          opacity: 0;
          transform: translateY(18px);
          transition:
            opacity  0.55s ease 0.54s,
            transform 0.55s ease 0.54s;
        }
        .hero-btns.pop { opacity: 1; transform: translateY(0); }

        .btn-enquire {
          padding: 14px 32px;
          background: #fff;
          color: #111;
          border: none;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-enquire:hover { background: #f0ece6; transform: scale(1.03); }

        .btn-call {
          padding: 14px 32px;
          background: transparent;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.55);
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          cursor: pointer;
          backdrop-filter: blur(6px);
          transition: background 0.2s, transform 0.15s;
        }
        .btn-call:hover { background: rgba(255,255,255,0.18); transform: scale(1.03); }

        /* ── Dots ── */
        .hero-dots {
          position: absolute;
          bottom: 26px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 8;
        }
        .hero-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
          cursor: pointer;
          border: none;
          padding: 0;
          transition: background 0.3s, transform 0.3s;
        }
        .hero-dot.active {
          background: #fff;
          transform: scale(1.4);
        }

        /* ── Progress bar ── */
        .hero-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          background: rgba(255,255,255,0.9);
          z-index: 8;
          border-radius: 0 2px 2px 0;
          width: 0%;
          animation: progress-fill ${SLIDE_DURATION}ms linear forwards;
        }
        @keyframes progress-fill {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>

      <section className="hero-wrap">

        {/* Slide images */}
        {slides.map((slide, i) => (
          <div key={slide.id} className={`hero-slide ${i === current ? 'active' : ''}`}>
            <img src={slide.image} alt={slide.title} />
            <div className="hero-overlay" />
          </div>
        ))}

        {/* Centered text content */}
        <div className="hero-body">
          <p className={`hero-tag ${popped ? 'pop' : ''}`}>
            {slides[current].tag}
          </p>
          <h1 className={`hero-title ${popped ? 'pop' : ''}`}>
            {slides[current].title}
          </h1>
          <p className={`hero-sub ${popped ? 'pop' : ''}`}>
            {slides[current].sub}
          </p>
          <div className={`hero-btns ${popped ? 'pop' : ''}`}>
            <button
              className="btn-enquire"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Enquire Now
            </button>
            <button
              className="btn-call"
              onClick={() => { window.location.href = 'tel:+1234567890'; }}
            >
              Call Now
            </button>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="hero-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero-dot ${i === current ? 'active' : ''}`}
              onClick={() => { goTo(i); startTimer(); }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/*
          Progress bar — `key={progressKey}` forces React to unmount and remount
          the element on every slide change, which restarts the CSS animation cleanly.
        */}
        <div key={progressKey} className="hero-progress" />

      </section>
    </>
  );
}