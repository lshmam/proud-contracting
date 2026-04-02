'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const services = [
  { name: 'Electrical Services', href: '/services/electrical', icon: '⚡' },
  { name: 'Plumbing Services', href: '/services/plumbing', icon: '🔧' },
  { name: 'Residential Contracting', href: '/services/residential', icon: '🏠' },
  { name: 'Commercial Contracting', href: '/services/commercial', icon: '🏢' },
  { name: 'Industrial Contracting', href: '/services/industrial', icon: '🏭' },
  { name: 'Design-Build', href: '/services/design-build', icon: '📐' },
  { name: 'Renovations & Upgrades', href: '/services/renovations', icon: '🔨' },
  { name: 'Project Management', href: '/services/project-management', icon: '📋' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'white',
        borderBottom: '1px solid #E5E7EB',
        boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.08)' : 'none',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transition: 'box-shadow 0.3s, background 0.3s',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', height: '72px', gap: '2rem' }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', flexShrink: 0 }}>
          <ProudLogo />
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.125rem', color: 'var(--navy)', lineHeight: 1, letterSpacing: '-0.01em' }}>PROUD</div>
            <div style={{ fontWeight: 600, fontSize: '0.7rem', color: 'var(--blue)', letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: 1 }}>CONTRACTING</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginLeft: 'auto' }} className="desktop-nav">
          <NavLink href="/">Home</NavLink>
          
          {/* Services Dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              style={{
                display: 'flex', alignItems: 'center', gap: '0.35rem',
                padding: '0.5rem 0.875rem', border: 'none', background: 'none',
                color: 'var(--gray-700)', fontWeight: 500, fontSize: '0.9375rem',
                cursor: 'pointer', borderRadius: '6px',
                transition: 'color 0.2s, background 0.2s',
                fontFamily: 'inherit',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--blue)'; (e.currentTarget as HTMLButtonElement).style.background = 'var(--blue-pale)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--gray-700)'; (e.currentTarget as HTMLButtonElement).style.background = 'none'; }}
            >
              Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.2s', transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>

            {servicesOpen && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 8px)', left: '50%',
                transform: 'translateX(-50%)',
                background: 'white', border: '1px solid var(--gray-200)',
                borderRadius: '12px', boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                padding: '0.75rem', minWidth: '280px', zIndex: 100,
                animation: 'fadeIn 0.15s ease',
              }}>
                {services.map(s => (
                  <Link key={s.href} href={s.href} style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.6rem 0.875rem', borderRadius: '8px',
                    textDecoration: 'none', color: 'var(--gray-700)',
                    fontSize: '0.9rem', fontWeight: 500,
                    transition: 'background 0.15s, color 0.15s',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--blue-pale)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--blue)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--gray-700)'; }}
                  >
                    <span style={{ fontSize: '1rem' }}>{s.icon}</span>
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink href="/about">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }} className="desktop-cta">
          <a href="tel:7789193195" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            778-919-3195
          </a>
          <Link href="/contact" className="btn-primary" style={{ padding: '0.625rem 1.25rem', fontSize: '0.875rem' }}>
            Get a Quote
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', borderRadius: '6px' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
            ) : (
              <><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          background: 'white', borderTop: '1px solid var(--gray-200)',
          padding: '1rem 1.5rem 1.5rem',
          animation: 'fadeIn 0.2s ease',
        }} className="mobile-menu">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <MobileNavLink href="/" onClick={() => setMobileOpen(false)}>Home</MobileNavLink>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '0.75rem 0.5rem', background: 'none', border: 'none',
                color: 'var(--gray-700)', fontWeight: 500, fontSize: '1rem',
                cursor: 'pointer', fontFamily: 'inherit', borderBottom: '1px solid var(--gray-100)',
              }}
            >
              Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            {mobileServicesOpen && (
              <div style={{ paddingLeft: '1rem' }}>
                {services.map(s => (
                  <MobileNavLink key={s.href} href={s.href} onClick={() => setMobileOpen(false)}>
                    {s.icon} {s.name}
                  </MobileNavLink>
                ))}
              </div>
            )}
            <MobileNavLink href="/about" onClick={() => setMobileOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="/projects" onClick={() => setMobileOpen(false)}>Projects</MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setMobileOpen(false)}>Contact</MobileNavLink>
            <div style={{ marginTop: '1rem' }}>
              <Link href="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setMobileOpen(false)}>
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) { .mobile-menu-btn { display: none !important; } .mobile-menu { display: none !important; } }
        @media (max-width: 899px) { .desktop-nav { display: none !important; } .desktop-cta { display: none !important; } }
      `}</style>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} style={{
      padding: '0.5rem 0.875rem', borderRadius: '6px',
      color: 'var(--gray-700)', fontWeight: 500, fontSize: '0.9375rem',
      textDecoration: 'none', transition: 'color 0.2s, background 0.2s',
      display: 'inline-block',
    }}
      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--blue)'; (e.currentTarget as HTMLAnchorElement).style.background = 'var(--blue-pale)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--gray-700)'; (e.currentTarget as HTMLAnchorElement).style.background = 'none'; }}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link href={href} onClick={onClick} style={{
      display: 'block', padding: '0.75rem 0.5rem', color: 'var(--gray-700)',
      fontWeight: 500, fontSize: '1rem', textDecoration: 'none',
      borderBottom: '1px solid var(--gray-100)',
    }}>
      {children}
    </Link>
  );
}

function ProudLogo() {
  return (
    <svg width="40" height="44" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="4" width="8" height="36" fill="#0D2244"/>
      <rect x="24" y="10" width="8" height="30" fill="#1A6FC4"/>
      <rect x="16" y="7" width="8" height="33" fill="#163260"/>
      <polygon points="20,0 36,10 36,12 20,4 4,12 4,10" fill="#1A6FC4"/>
      <path d="M17 20 L20 14 L23 20 L21.5 19 L21.5 22 L18.5 22 L18.5 19 Z" fill="white"/>
    </svg>
  );
}
