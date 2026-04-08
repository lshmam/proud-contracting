'use client';
import { useState, useEffect } from 'react';

const processSteps = [
  {
    number: '01',
    title: 'Consultation & Assessment',
    description: 'We begin with a thorough on-site assessment and detailed consultation to understand your project scope, budget, and timeline. Our experienced estimators provide a comprehensive, no-obligation quote.',
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=900&q=85&auto=format&fit=crop',
  },
  {
    number: '02',
    title: 'Planning & Permitting',
    description: 'Our team handles all engineering drawings, permit applications, and coordination with local authorities. We manage the entire administrative process so you can focus on what matters.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85&auto=format&fit=crop',
  },
  {
    number: '03',
    title: 'Build & Handover',
    description: 'With approvals secured, our licensed trades execute the work to the highest standards. We provide regular progress updates and a final walkthrough to ensure your complete satisfaction.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=900&q=85&auto=format&fit=crop',
  },
];

import FadeIn from './FadeIn';

export default function OurProcess() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ background: 'white', padding: '10rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <FadeIn delay={100}>
          <div style={{ marginBottom: '6.5rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--blue)' }}>How It Works</span>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', 
              fontWeight: 400, 
              letterSpacing: '-0.02em', 
              marginTop: '1rem', 
              lineHeight: 1.15,
              fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
            }}>
              Our Process
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 items-start">
          {/* Steps */}
          <FadeIn delay={200} direction="right">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {processSteps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  style={{
                    display: 'block', width: '100%', textAlign: 'left',
                    background: 'none', border: 'none', cursor: 'pointer',
                    borderLeft: activeStep === i ? '3px solid var(--blue)' : '3px solid var(--gray-100)',
                    padding: '2.5rem 2.5rem',
                    transition: 'all 0.25s ease',
                    fontFamily: 'inherit',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                    <span style={{
                      fontSize: '2.5rem', fontWeight: 800,
                      color: activeStep === i ? 'var(--blue)' : 'var(--gray-200)',
                      letterSpacing: '-0.05em', lineHeight: 1,
                      transition: 'color 0.25s', flexShrink: 0,
                      fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                    }}>{step.number}</span>
                    <div>
                      <h3 style={{
                        fontSize: '1.25rem', fontWeight: 400,
                        color: activeStep === i ? 'var(--navy)' : 'var(--gray-400)',
                        marginBottom: activeStep === i ? '0.85rem' : '0',
                        letterSpacing: '-0.02em', transition: 'all 0.25s',
                        fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                      }}>{step.title}</h3>
                      {activeStep === i && (
                        <p style={{ color: 'var(--gray-500)', fontSize: '0.975rem', lineHeight: 1.8, margin: 0, fontWeight: 400 }}>
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Changing Image */}
          <FadeIn delay={400} direction="left">
            <div className="sticky top-[120px] hidden md:block">
              {processSteps.map((step, i) => (
                <div key={i} style={{
                  position: i === 0 ? 'relative' : 'absolute',
                  inset: 0, opacity: activeStep === i ? 1 : 0,
                  transition: 'opacity 0.45s ease',
                  pointerEvents: activeStep === i ? 'auto' : 'none',
                }}>
                  <img src={step.image} alt={step.title}
                    style={{ width: '100%', height: '460px', objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: 'var(--navy)', color: 'white', padding: '0.5rem 1rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Step {step.number}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
