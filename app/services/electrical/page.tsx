import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electrical Services | Proud Contracting',
  description: 'Professional electrical services in BC — new installations, panel upgrades, repairs, and renovations. Licensed electricians. Call 778-919-3195.',
};

const highlights = [
  'Panel upgrades & replacements',
  'New electrical installations',
  'Wiring repairs & troubleshooting',
  'EV charger installation',
  'Commercial electrical fit-outs',
  'Industrial electrical systems',
  'Safety inspections & code compliance',
  'Outdoor & landscape lighting',
];

export default function ElectricalPage() {
  return (
    <>
      <ServiceHeader
        label="Electrical Services"
        title="Electrical Services"
        description="From new installations to panel upgrades and repairs — all done to the highest standards of safety and quality by our licensed electricians."
        breadcrumb="Electrical"
        iconBg="#FEF3C7"
        iconColor="#D97706"
        icon="⚡"
      />

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
            <div>
              <span className="section-label">What We Offer</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', margin: '0.75rem 0 1rem' }}>Comprehensive Electrical Solutions</h2>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.75, marginBottom: '2rem' }}>
                Our licensed electricians handle everything from residential panel upgrades to large-scale industrial electrical installations. Every job is completed to BC Electrical Code and safety standards.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.625rem', marginBottom: '2.5rem' }}>
                {highlights.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: 0, background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span style={{ color: 'var(--gray-700)', fontSize: '0.875rem', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary">Request Electrical Quote</Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { title: 'Residential Electrical', desc: 'Home wiring, panel upgrades, lighting, outlets, and EV charger installations.' },
                { title: 'Commercial Electrical', desc: 'Office and retail electrical fit-outs, data wiring, and power distribution.' },
                { title: 'Industrial Electrical', desc: 'Heavy-duty power systems, machine connections, and industrial compliance.' },
                { title: 'Emergency Services', desc: '24/7 emergency electrical repairs. We respond fast when you need us most.' },
              ].map((item, i) => (
                <div key={i} className="card" style={{ padding: '1.5rem' }}>
                  <h4 style={{ marginBottom: '0.4rem', color: 'var(--navy)', fontSize: '1rem' }}>{item.title}</h4>
                  <p style={{ color: 'var(--gray-600)', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA />
    </>
  );
}

// Shared components
export function ServiceHeader({ label, title, description, breadcrumb, icon, iconBg, iconColor }: {
  label: string; title: string; description: string; breadcrumb: string;
  icon: string; iconBg: string; iconColor: string;
}) {
  return (
    <section style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)', padding: '4rem 0 3.5rem' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '52px', height: '52px', borderRadius: 0, background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
            {icon}
          </div>
          <span className="section-label" style={{ color: '#93C5FD' }}>{label}</span>
        </div>
        <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>{title}</h1>
        <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem', maxWidth: '580px', lineHeight: 1.65 }}>{description}</p>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.25rem', fontSize: '0.85rem' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
          <Link href="/services/residential" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Services</Link>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
          <span style={{ color: 'white' }}>{breadcrumb}</span>
        </div>
      </div>
    </section>
  );
}

export function ServiceCTA() {
  return (
    <section style={{ background: 'var(--blue-pale)', borderTop: '1px solid var(--gray-200)', padding: '4.5rem 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '1rem' }}>Ready to Get Started?</h2>
        <p style={{ color: 'var(--gray-600)', fontSize: '1.05rem', maxWidth: '460px', margin: '0 auto 2rem', lineHeight: 1.65 }}>
          Contact Proud Contracting today for a free, no-obligation quote on your project.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
          <a href="tel:7789193195" className="btn-outline">📞 778-919-3195</a>
        </div>
      </div>
    </section>
  );
}
