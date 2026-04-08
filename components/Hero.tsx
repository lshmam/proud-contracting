import Link from 'next/link';
import FadeIn from './FadeIn';

export default function Hero() {
  return (
    <section style={{
      marginTop: '-72px',
      paddingTop: '72px',
      backgroundImage: `linear-gradient(to bottom, rgba(10,25,54,0) 0%, rgba(10,25,54,0.95) 100%), url("https://images.unsplash.com/photo-1559511260-66a654ae982a?q=80&w=2000&auto=format&fit=crop")`,
      backgroundSize: 'cover', backgroundPosition: 'center 40%',
      backgroundAttachment: 'scroll',
      minHeight: '95vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', width: '100%', position: 'relative', zIndex: 2, paddingTop: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <FadeIn delay={100}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', padding: '0.4rem 1rem', marginBottom: '2.25rem', backdropFilter: 'blur(8px)' }}>
            <span style={{ width: '6px', height: '6px', background: '#34D399', display: 'inline-block', animation: 'heroPulse 2s infinite' }} />
            <span style={{ color: 'white', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Now Accepting New Projects in BC</span>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <h1 style={{
            color: 'white', fontSize: 'clamp(3rem, 6vw, 4.5rem)',
            fontWeight: 400, lineHeight: 1.1, marginBottom: '1.25rem',
            letterSpacing: '-0.02em', maxWidth: '900px',
            fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
          }}>
            Elevating standards. <span style={{ color: '#60A5FA' }}>Constructing the future.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={300}>
          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1.05rem', lineHeight: 1.65, maxWidth: '580px', marginBottom: '2.75rem', fontWeight: 400, letterSpacing: '-0.01em' }}>
            Vancouver's premier contracting company. High-quality electrical, plumbing, and complete construction services across BC — done right, on time.
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'center', marginBottom: '6rem' }}>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              background: 'white', color: 'var(--navy)',
              fontWeight: 700, fontSize: '0.975rem', padding: '1.1rem 2.25rem',
              textDecoration: 'none', letterSpacing: '-0.01em', transition: 'all 0.2s',
            }}>
              Request a Free Quote
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a href="tel:7789193195" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              color: 'rgba(255,255,255,0.9)', fontWeight: 600, fontSize: '1rem',
              textDecoration: 'none', letterSpacing: '-0.01em',
            }}>
              <span style={{ width: '42px', height: '42px', border: '1px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              </span>
              778-919-3195
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
