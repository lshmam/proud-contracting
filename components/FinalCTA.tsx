import Link from 'next/link';
import FadeIn from './FadeIn';

export default function FinalCTA() {
  return (
    <section style={{ padding: '10rem 0', textAlign: 'center', background: '#0D2244', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
        <FadeIn delay={100} direction="up">
          <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', display: 'block', marginBottom: '1.5rem' }}>Work with us</span>
          <h2 style={{ 
            fontSize: 'clamp(3rem, 5vw, 4rem)', 
            fontWeight: 400, 
            color: 'white', 
            letterSpacing: '-0.02em', 
            marginBottom: '1.5rem', 
            lineHeight: 1.1,
            fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
          }}>
            Ready to elevate<br />your project?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', maxWidth: '520px', margin: '0 auto 3.5rem', lineHeight: 1.7, fontWeight: 400 }}>
            Join hundreds of satisfied clients across British Columbia. Contact us today for a free assessment and project quote.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'white', color: 'var(--navy)', fontWeight: 600,
              fontSize: '0.975rem', padding: '1.25rem 2.5rem', textDecoration: 'none',
              letterSpacing: '-0.01em', transition: 'background 0.2s, transform 0.2s',
            }}>Start Your Project</Link>
            <a href="tel:7789193195" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontWeight: 600,
              fontSize: '0.975rem', padding: '1.25rem 2.5rem', textDecoration: 'none',
              letterSpacing: '-0.01em', transition: 'background 0.2s, border-color 0.2s',
            }}>📞 778-919-3195</a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
