'use client';
import Link from 'next/link';

const services = [
  { name: 'Electrical Services', href: '/services/electrical' },
  { name: 'Plumbing Services', href: '/services/plumbing' },
  { name: 'Residential Contracting', href: '/services/residential' },
  { name: 'Commercial Contracting', href: '/services/commercial' },
  { name: 'Industrial Contracting', href: '/services/industrial' },
  { name: 'Design-Build Services', href: '/services/design-build' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', color: 'white', paddingTop: '6rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '4.5rem', paddingBottom: '4.5rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem' }}>
              <img src="/logo.png" alt="Proud Contracting Logo" style={{ height: '40px', width: 'auto' }} />
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.25rem', lineHeight: 1 }}>PROUD</div>
                <div style={{ fontWeight: 500, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#93C5FD' }}>CONTRACTING</div>
              </div>
            </div>
            <p style={{ color: '#9CA3AF', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem', fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
              Building Trust, Delivering Excellence. Your trusted partner for residential, commercial, and industrial contracting in British Columbia.
            </p>
            <p style={{ color: '#6B7280', fontSize: '0.85rem' }}>
              Licensed & Insured in BC
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontWeight: 400, fontSize: '1.25rem', letterSpacing: '0.02em', color: '#93C5FD', marginBottom: '1.75rem', fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {services.map(s => (
                <li key={s.href}>
                  <Link href={s.href} style={{
                    color: '#9CA3AF', fontSize: '0.95rem', textDecoration: 'none',
                    transition: 'color 0.2s', display: 'inline-block',
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'white'}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#9CA3AF'}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontWeight: 400, fontSize: '1.25rem', letterSpacing: '0.02em', color: '#93C5FD', marginBottom: '1.75rem', fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Projects', href: '/projects' },
                { name: 'Why Choose Us', href: '/about#why-us' },
                { name: 'Contact Us', href: '/contact' },
                { name: 'Get a Quote', href: '/contact#quote' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: '#9CA3AF', fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'white'}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#9CA3AF'}
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontWeight: 400, fontSize: '1.25rem', letterSpacing: '0.02em', color: '#93C5FD', marginBottom: '1.75rem', fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <a href="tel:7789193195" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#9CA3AF', textDecoration: 'none', fontSize: '0.95rem' }}>
                <span style={{ color: 'var(--blue-light)' }}>📞</span>
                778-919-3195
              </a>
              <a href="mailto:proudcontractinginc@gmail.com" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#9CA3AF', textDecoration: 'none', fontSize: '0.95rem' }}>
                <span style={{ color: 'var(--blue-light)', flexShrink: 0 }}>✉️</span>
                proudcontractinginc@gmail.com
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#9CA3AF', fontSize: '0.95rem' }}>
                <span style={{ color: 'var(--blue-light)', flexShrink: 0 }}>📍</span>
                British Columbia, Canada
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <Link href="/contact" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '2rem', paddingBottom: '2rem',
          display: 'flex', flexWrap: 'wrap', gap: '1rem',
          justifyContent: 'space-between', alignItems: 'center',
        }}>
          <p style={{ color: '#6B7280', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} Proud Contracting. All rights reserved. | BC Licensed Contractor
          </p>
          <p style={{ color: '#6B7280', fontSize: '0.85rem', fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
            Building Trust, Delivering Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLogo() {
  return (
    <svg width="32" height="36" viewBox="0 0 40 44" fill="none">
      <rect x="8" y="4" width="8" height="36" fill="white" fillOpacity="0.9"/>
      <rect x="24" y="10" width="8" height="30" fill="#2589E0"/>
      <rect x="16" y="7" width="8" height="33" fill="white" fillOpacity="0.7"/>
      <polygon points="20,0 36,10 36,12 20,4 4,12 4,10" fill="#2589E0"/>
      <path d="M17 20 L20 14 L23 20 L21.5 19 L21.5 22 L18.5 22 L18.5 19 Z" fill="white"/>
    </svg>
  );
}
