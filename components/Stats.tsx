'use client';
import { useState, useEffect, useRef } from 'react';

const stats = [
  { target: 25, suffix: '+', label: 'years of industry experience', dark: true },
  { target: 500, suffix: '+', label: 'successful projects completed', dark: false },
  { target: 100, suffix: '%', label: 'of our work is licensed & insured', dark: true },
];

function CountUpItem({ target, suffix, dark, label }: any) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} style={{ 
      background: dark ? '#0a1d3a' : '#EAECEB', 
      color: dark ? 'white' : '#111827',
      padding: '3rem 2.5rem',
      minHeight: '360px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <div style={{ 
        fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
        fontWeight: 400, 
        letterSpacing: '-0.04em', 
        lineHeight: 1,
        fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      }}>
        {count}{suffix}
      </div>
      <div style={{ 
        fontSize: '0.95rem', 
        fontWeight: 500, 
        letterSpacing: '-0.01em', 
      }}>{label}</div>
    </div>
  );
}

import FadeIn from './FadeIn';

export default function Stats() {
  return (
    <section style={{ background: 'white', padding: '8rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Header Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start mb-16">
          <div>
            <FadeIn delay={100}>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--blue)' }}>Impact</span>
              <h2 style={{ 
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
                fontWeight: 400, 
                lineHeight: 1.1,
                marginTop: '0.5rem',
                letterSpacing: '-0.03em',
                color: '#111827',
                fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
              }}>
                Built on trust, proven by results
              </h2>
            </FadeIn>
          </div>
          <div>
            <FadeIn delay={200}>
              <p style={{ fontSize: '1.05rem', color: '#4B5563', lineHeight: 1.6, marginTop: '1.5rem' }}>
                Proud Contracting was founded by industry veterans committed to elevating standard practices. We've collaborated with leading property developers and facility managers to create safe, efficient, and beautifully constructed spaces across British Columbia.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <FadeIn key={i} delay={150 + i * 150} fullWidth={true}>
              <CountUpItem {...s} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
