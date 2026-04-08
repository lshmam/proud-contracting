'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const services = [
  { name: 'Electrical Services', href: '/services/electrical' },
  { name: 'Plumbing Services', href: '/services/plumbing' },
  { name: 'Residential Contracting', href: '/services/residential' },
  { name: 'Commercial Contracting', href: '/services/commercial' },
  { name: 'Industrial Contracting', href: '/services/industrial' },
  { name: 'Design-Build', href: '/services/design-build' },
  { name: 'Renovations & Upgrades', href: '/services/renovations' },
  { name: 'Project Management', href: '/services/project-management' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999,
      background: scrolled ? 'white' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--gray-200)' : '1px solid transparent',
      boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem',
        display: 'flex', alignItems: 'center', height: '68px',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none', flexShrink: 0 }}>
          <img src="/logo.png" alt="Proud Contracting Logo" style={{ height: '40px', width: 'auto' }} />
          <div>
            <div style={{
              fontWeight: 800, fontSize: '1.25rem', lineHeight: 1, letterSpacing: '-0.02em',
              color: 'var(--navy)',
            }}>PROUD</div>
            <div style={{
              fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.12em',
              textTransform: 'uppercase', lineHeight: 1.2, marginTop: '2px',
              color: 'var(--navy)',
            }}>CONTRACTING</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.125rem', marginLeft: 'auto' }} className="nav-desktop">
          {['/', '/about', '/projects', '/contact'].map((href, i) => {
            const labels = ['Home', 'About', 'Projects', 'Contact'];
            return (
              <Link key={href} href={href} className="nav-link" style={{
                padding: '0.55rem 1rem', color: 'var(--gray-700)',
                fontWeight: 500, fontSize: '0.9375rem', textDecoration: 'none',
                letterSpacing: '-0.01em', transition: 'color 0.2s',
              }}>{labels[i]}</Link>
            );
          })}

          {/* Services Dropdown */}
          <div style={{ position: 'relative' }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}>
            <button className="nav-link" style={{
              display: 'flex', alignItems: 'center', gap: '0.35rem',
              padding: '0.55rem 1rem', border: 'none', background: 'none',
              color: 'var(--gray-700)',
              fontWeight: 500, fontSize: '0.9375rem', cursor: 'pointer',
              letterSpacing: '-0.01em', fontFamily: 'inherit', transition: 'color 0.2s',
            }}>
              Services
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transition: 'transform 0.2s', transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>

            {servicesOpen && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 12px)', left: '50%',
                transform: 'translateX(-50%)',
                background: 'white', border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                padding: '0.625rem', minWidth: '280px', zIndex: 200,
                animation: 'ddFadeIn 0.15s ease',
              }}>
                {services.map(s => (
                  <Link key={s.href} href={s.href} className="dd-item" style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.7rem 0.875rem', textDecoration: 'none',
                    color: 'var(--gray-700)', fontSize: '0.9rem', fontWeight: 500,
                    transition: 'background 0.15s, color 0.15s',
                  }}>
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginLeft: '1.25rem', flexShrink: 0 }} className="nav-desktop">
          <a href="tel:7789193195" style={{
            color: 'var(--navy)', fontWeight: 600,
            fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.35s',
          }}>778-919-3195</a>
          <Link href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            background: 'var(--blue)',
            color: 'white',
            fontWeight: 700, fontSize: '0.875rem',
            padding: '0.7rem 1.5rem', textDecoration: 'none',
            border: 'none', cursor: 'pointer', transition: 'all 0.3s',
            letterSpacing: '-0.01em',
          }}>Get a Quote</Link>
        </div>

        {/* Hamburger */}
        <button className="nav-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} style={{
          marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer',
          padding: '0.5rem', display: 'none',
        }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
            stroke={'var(--navy)'} strokeWidth="2" strokeLinecap="round">
            {mobileOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="8" x2="21" y2="8"/><line x1="3" y1="16" x2="21" y2="16"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          background: 'white', borderTop: '1px solid var(--gray-100)',
          padding: '1rem 1.5rem 2rem',
        }}>
          {[['/', 'Home'], ['/about', 'About'], ['/projects', 'Projects'], ['/contact', 'Contact']].map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setMobileOpen(false)} style={{
              display: 'block', padding: '0.875rem 0', color: 'var(--navy)',
              fontWeight: 600, fontSize: '1.05rem', textDecoration: 'none',
              borderBottom: '1px solid var(--gray-100)',
            }}>{label}</Link>
          ))}
          <div style={{ borderBottom: '1px solid var(--gray-100)', padding: '0.875rem 0', marginBottom: '0.5rem' }}>
            <p style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.75rem' }}>Services</p>
            {services.map(s => (
              <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} style={{
                display: 'flex', alignItems: 'center', gap: '0.625rem',
                padding: '0.5rem 0.75rem', color: 'var(--gray-700)',
                fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none',
              }}>
                {s.name}
              </Link>
            ))}
          </div>
          <Link href="/contact" onClick={() => setMobileOpen(false)} style={{
            display: 'block', marginTop: '1.25rem', background: 'var(--blue)',
            color: 'white', fontWeight: 700, textAlign: 'center',
            padding: '1rem', textDecoration: 'none', fontSize: '1rem',
          }}>Get a Free Quote</Link>
        </div>
      )}

      <style>{`
        .nav-link:hover { color: var(--blue) !important; }
        .dd-item:hover { background: var(--blue-pale) !important; color: var(--blue) !important; }
        @keyframes ddFadeIn { from { opacity:0; transform:translateX(-50%) translateY(6px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }
        @media (max-width: 900px) { .nav-desktop { display: none !important; } .nav-mobile-toggle { display: flex !important; } }
      `}</style>
    </header>
  );
}

function ProudLogo() {
  return (
    <svg width="36" height="40" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="4" width="8" height="36" fill={'#0D2244'}/>
      <rect x="24" y="10" width="8" height="30" fill={'#1A6FC4'}/>
      <rect x="16" y="7" width="8" height="33" fill={'#163260'}/>
      <polygon points="20,0 36,10 36,12 20,4 4,12 4,10" fill={'#1A6FC4'}/>
      <path d="M17 20 L20 14 L23 20 L21.5 19 L21.5 22 L18.5 22 L18.5 19 Z" fill={'white'}/>
    </svg>
  );
}
