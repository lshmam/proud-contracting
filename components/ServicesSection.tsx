import Link from 'next/link';
import FadeIn from './FadeIn';

const services = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    title: 'Electrical Services',
    description: 'Expert electrical installations, panel upgrades, and EV charger installations.',
    href: '/services/electrical',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 8v4l3 3"/></svg>,
    title: 'Plumbing Services',
    description: 'Reliable plumbing from emergency repairs to full mechanical installations.',
    href: '/services/plumbing',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 22l9-9 9 9M13.5 6.5L17 3l4 4-3.5 3.5"/><path d="M3 13l4-4 3 3"/></svg>,
    title: 'Residential Contracting',
    description: 'Custom home builds and major renovations crafted to BC standards.',
    href: '/services/residential',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
    title: 'Commercial Contracting',
    description: 'Office fit-outs and retail construction delivered on time and within budget.',
    href: '/services/commercial',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>,
    title: 'Industrial Contracting',
    description: 'Heavy-duty facility solutions for industrial and manufacturing environments.',
    href: '/services/industrial',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20M4 20V10l8-6 8 6v10"/></svg>,
    title: 'Design-Build',
    description: 'Architecture and construction unified under one roof for maximum efficiency.',
    href: '/services/design-build',
  },
];

export default function ServicesSection() {
  return (
    <section style={{ background: '#0D2244', padding: '9rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <FadeIn delay={100}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Our Capabilities</span>
            <h2 style={{ color: 'white', fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', fontWeight: 400, letterSpacing: '-0.02em', marginTop: '1.25rem', marginBottom: '1.25rem', lineHeight: 1.15, fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
              Professional class contracting tailored<br />for construction excellence
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto', fontWeight: 400 }}>
              Level up your infrastructure on every area of contracting practice — build a culture of reliability and confidence.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <FadeIn key={i} delay={150 + i * 100} fullWidth={true}>
              <Link href={s.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div style={{
                  background: 'rgba(255,255,255,0.03)', padding: '2.5rem', height: '100%', minHeight: '340px',
                  border: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.3s ease',
                  display: 'flex', flexDirection: 'column',
                }}
                  className="service-card"
                >
                  <div style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 'auto' }}>
                    {s.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.45rem', fontWeight: 400, color: 'white', marginBottom: '0.75rem', letterSpacing: '-0.01em', fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>{s.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>{s.description}</p>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
