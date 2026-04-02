import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Services | Proud Contracting',
  description: 'Proud Contracting offers electrical, plumbing, residential, commercial, industrial, and design-build services across BC. Get a free quote today.',
};

const allServices = [
  {
    icon: '⚡', title: 'Electrical Services', href: '/services/electrical',
    bg: '#FEF3C7', color: '#D97706',
    description: 'Licensed electricians for residential, commercial, and industrial electrical work — installations, upgrades, and repairs.',
    items: ['Panel upgrades', 'New wiring', 'EV chargers', 'Troubleshooting'],
  },
  {
    icon: '🔧', title: 'Plumbing Services', href: '/services/plumbing',
    bg: '#DBEAFE', color: '#1D4ED8',
    description: 'Fast, code-compliant plumbing for new builds, renovations, and emergency repairs across residential and commercial sites.',
    items: ['New installations', 'Drain repairs', 'Emergency service', 'Water heaters'],
  },
  {
    icon: '🏠', title: 'Residential Contracting', href: '/services/residential',
    bg: '#D1FAE5', color: '#059669',
    description: 'Custom homes, renovations, additions, and basement developments — built to the highest quality for BC homeowners.',
    items: ['Custom builds', 'Renovations', 'Additions', 'Basement development'],
  },
  {
    icon: '🏢', title: 'Commercial Contracting', href: '/services/commercial',
    bg: '#EDE9FE', color: '#7C3AED',
    description: 'Tenant improvements, retail fit-outs, office construction, and commercial renovations — on time, on budget.',
    items: ['Tenant improvements', 'Office build-outs', 'Retail spaces', 'Warehouse'],
  },
  {
    icon: '🏭', title: 'Industrial Contracting', href: '/services/industrial',
    bg: '#FFE4E6', color: '#E11D48',
    description: 'Heavy-duty construction for manufacturing, warehousing, and industrial facilities with full safety compliance.',
    items: ['Facility construction', 'Machine foundations', 'Industrial wiring', 'Safety systems'],
  },
  {
    icon: '📐', title: 'Design-Build', href: '/services/design-build',
    bg: '#E0F2FE', color: '#0284C7',
    description: 'Streamlined design and construction under one roof — saving you time, money, and coordination headaches.',
    items: ['Single-source delivery', 'Cost certainty', 'Faster timelines', 'Full coordination'],
  },
  {
    icon: '🔨', title: 'Renovations & Upgrades', href: '/services/renovations',
    bg: '#F0FDF4', color: '#16A34A',
    description: 'Kitchen, bathroom, basement, and full home renovations done with precision and minimum disruption.',
    items: ['Kitchen renos', 'Bathroom upgrades', 'Full home renos', 'Permit management'],
  },
  {
    icon: '📋', title: 'Project Management', href: '/services/project-management',
    bg: '#FFF7ED', color: '#C2410C',
    description: 'End-to-end project management to keep your construction on schedule, on budget, and stress-free.',
    items: ['Scheduling', 'Budgeting', 'Subcontractor management', 'Reporting'],
  },
];

export default function ServicesIndexPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)', padding: '4rem 0 3.5rem' }}>
        <div className="container">
          <span className="section-label" style={{ color: '#93C5FD' }}>What We Offer</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.75rem', marginBottom: '1rem' }}>Our Services</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', maxWidth: '540px', lineHeight: 1.65 }}>
            From electrical and plumbing to full construction management — every trade, under one trusted roof.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.25rem', fontSize: '0.85rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'white' }}>Services</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {allServices.map((s, i) => (
              <Link key={i} href={s.href} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ height: '100%', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                      {s.icon}
                    </div>
                    <h3 style={{ fontSize: '1.075rem', color: 'var(--navy)', margin: 0 }}>{s.title}</h3>
                  </div>
                  <p style={{ color: 'var(--gray-600)', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>{s.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1.25rem' }}>
                    {s.items.map((item, j) => (
                      <span key={j} style={{ background: s.bg, color: s.color, fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.625rem', borderRadius: '100px' }}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--blue)', fontSize: '0.875rem', fontWeight: 600 }}>
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, var(--blue) 0%, var(--navy) 100%)', padding: '4.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
            Not sure what you need?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', maxWidth: '460px', margin: '0 auto 2.25rem', lineHeight: 1.65 }}>
            Call us or send a message — we&apos;ll help you figure out the right approach for your project.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-white" style={{ fontWeight: 700 }}>Get a Free Quote</Link>
            <a href="tel:7789193195" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: 600, fontSize: '0.9375rem', padding: '0.8rem 1.75rem', borderRadius: '6px', border: '2px solid rgba(255,255,255,0.35)', textDecoration: 'none' }}>
              📞 778-919-3195
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
