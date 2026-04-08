import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Proud Contracting',
  description: 'Learn about Proud Contracting — 25+ years of expert craftsmanship in electrical, plumbing, residential, commercial, and industrial contracting across BC.',
};

const team = [
  { name: 'Lead Electrician', role: 'Chief Electrical Technician', years: '15+ years' },
  { name: 'Master Plumber', role: 'Plumbing Division Lead', years: '18+ years' },
  { name: 'Site Supervisor', role: 'Residential & Commercial', years: '12+ years' },
  { name: 'Project Manager', role: 'Industrial Projects', years: '10+ years' },
];

const values = [
  { icon: '🏅', title: 'Integrity', desc: 'We do what we say, when we say it. No surprises.' },
  { icon: '🔒', title: 'Safety', desc: 'Zero compromise on safety standards — ever.' },
  { icon: '💡', title: 'Innovation', desc: 'We use the latest techniques and materials.' },
  { icon: '🤝', title: 'Partnership', desc: 'We treat every client as a long-term partner.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)', padding: '4rem 0 3.5rem' }}>
        <div className="container">
          <span className="section-label" style={{ color: '#93C5FD' }}>Our Story</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.75rem', marginBottom: '1rem' }}>About Proud Contracting</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', maxWidth: '540px', lineHeight: 1.65 }}>
            For over 25 years, we&apos;ve been building British Columbia&apos;s homes, businesses, and infrastructure with craftsmanship you can trust.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.25rem', fontSize: '0.85rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'white' }}>About</span>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">Our Mission</span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', margin: '0.75rem 0 1.25rem' }}>
                Building trust through exceptional work.
              </h2>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                Founded over two decades ago, Proud Contracting started as a small family operation with a simple belief: do quality work, treat people right, and the rest will follow.
              </p>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.75, marginBottom: '2rem' }}>
                Today, we&apos;ve grown into one of BC&apos;s most trusted contracting firms — with an experienced team spanning electrical, plumbing, residential, commercial, and industrial construction. But our core values haven&apos;t changed a bit.
              </p>
              <div style={{ display: 'flex', gap: '3rem' }}>
                {[['25+', 'Years in Business'], ['500+', 'Projects Completed'], ['100%', 'Licensed & Insured']].map(([v, l], i) => (
                  <div key={i}>
                    <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--blue)', lineHeight: 1 }}>{v}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--gray-500)', marginTop: '0.25rem' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {values.map((v, i) => (
                <div key={i} style={{
                  background: i === 0 ? 'var(--navy)' : i === 1 ? 'var(--blue)' : 'var(--gray-50)',
                  border: i >= 2 ? '1px solid var(--gray-200)' : 'none',
                  borderRadius: 0, padding: '1.75rem',
                  color: i < 2 ? 'white' : 'inherit',
                }}>
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.875rem' }}>{v.icon}</div>
                  <h4 style={{ fontWeight: 700, marginBottom: '0.4rem', color: i < 2 ? 'white' : 'var(--navy)', fontSize: '1rem' }}>{v.title}</h4>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.55, margin: 0, color: i < 2 ? 'rgba(255,255,255,0.75)' : 'var(--gray-600)' }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="section" style={{ background: 'var(--navy)', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', right: '-100px', top: '-100px', width: '400px', height: '400px', borderRadius: 0, background: 'rgba(255,255,255,0.03)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label" style={{ color: '#93C5FD' }}>Why Choose Us</span>
            <h2 style={{ color: 'white', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', marginTop: '0.75rem' }}>
              The Proud Contracting Difference
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🏆', title: 'Expert Craftsmanship', desc: 'Every task done to code and beyond.' },
              { icon: '⏱️', title: 'On-Time Delivery', desc: 'We respect your schedule.' },
              { icon: '🛡️', title: 'Fully Licensed', desc: 'BC licensed and fully insured.' },
              { icon: '💰', title: 'Fair Pricing', desc: 'Transparent quotes, zero surprises.' },
              { icon: '🔧', title: 'All Trades', desc: 'Electrical, plumbing, civil & more.' },
              { icon: '📞', title: '24/7 Support', desc: 'Emergency services always available.' },
            ].map((item, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 0, padding: '1.5rem', textAlign: 'center',
                transition: 'background 0.2s',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.875rem' }}>{item.icon}</div>
                <h4 style={{ color: 'white', fontWeight: 700, marginBottom: '0.4rem', fontSize: '0.9375rem' }}>{item.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.825rem', margin: 0, lineHeight: 1.55 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--blue-pale)', padding: '4.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '1rem' }}>
            Let&apos;s Build Something Together
          </h2>
          <p style={{ color: 'var(--gray-600)', fontSize: '1.05rem', maxWidth: '480px', margin: '0 auto 2rem', lineHeight: 1.65 }}>
            Contact Proud Contracting today for a free, detailed estimate on your project.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
            <a href="tel:7789193195" className="btn-outline">📞 778-919-3195</a>
          </div>
        </div>
      </section>
    </>
  );
}
