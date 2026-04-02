import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects | Proud Contracting',
  description: 'View our portfolio of completed electrical, plumbing, residential, commercial, and industrial projects across British Columbia.',
};

const projects = [
  {
    category: 'Residential', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80&auto=format&fit=crop',
    title: 'Custom Home Build – Surrey, BC', description: 'Full custom home build from foundation to finishing. 3,200 sq ft, 4 bed, 3 bath with modern finishes.', tags: ['Residential', 'New Build', 'Full Scope'],
  },
  {
    category: 'Commercial', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop',
    title: 'Office Renovation – Burnaby', description: 'Complete office fit-out for a tech company — open floor plan, electrical, HVAC coordination, and millwork.', tags: ['Commercial', 'Renovation', 'Electrical'],
  },
  {
    category: 'Electrical', image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80&auto=format&fit=crop',
    title: 'Panel Upgrade – Vancouver', description: '200A panel replacement and full rewire for a 1960s home. EV charger and solar-ready configuration included.', tags: ['Electrical', 'Residential', 'Upgrade'],
  },
  {
    category: 'Industrial', image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80&auto=format&fit=crop',
    title: 'Warehouse Construction – Langley', description: '18,000 sq ft warehouse build with electrical service, loading docks, office section, and fire suppression.', tags: ['Industrial', 'New Build', 'Commercial'],
  },
  {
    category: 'Plumbing', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop',
    title: 'Multi-Unit Plumbing – Coquitlam', description: 'Rough-in plumbing for a 12-unit townhouse development. Full DWV, supply, and gas work.', tags: ['Plumbing', 'Multi-Unit', 'New Build'],
  },
  {
    category: 'Renovation', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80&auto=format&fit=crop',
    title: 'Full Home Renovation – Delta, BC', description: 'Complete gut renovation of a 1970s home — new kitchen, 2 baths, flooring, windows, and electrical.', tags: ['Renovation', 'Residential', 'Full Scope'],
  },
];

const categoryColors: Record<string, { bg: string; color: string }> = {
  Residential: { bg: '#D1FAE5', color: '#059669' },
  Commercial: { bg: '#EDE9FE', color: '#7C3AED' },
  Electrical: { bg: '#FEF3C7', color: '#D97706' },
  Industrial: { bg: '#FFE4E6', color: '#E11D48' },
  Plumbing: { bg: '#DBEAFE', color: '#1D4ED8' },
  Renovation: { bg: '#E0F2FE', color: '#0284C7' },
};

export default function ProjectsPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)', padding: '4rem 0 3.5rem' }}>
        <div className="container">
          <span className="section-label" style={{ color: '#93C5FD' }}>Portfolio</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.75rem', marginBottom: '1rem' }}>Our Projects</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', maxWidth: '540px', lineHeight: 1.65 }}>
            A sample of our completed work — from single-family homes to large industrial builds across British Columbia.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.25rem', fontSize: '0.85rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'white' }}>Projects</span>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            {projects.map((p, i) => {
              const colors = categoryColors[p.category] || { bg: '#F3F4F6', color: '#374151' };
              return (
                <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.25rem', display: 'block' }}
                  />
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.875rem', flexWrap: 'wrap' }}>
                    {p.tags.map((t, j) => (
                      <span key={j} style={{ background: j === 0 ? colors.bg : 'var(--gray-100)', color: j === 0 ? colors.color : 'var(--gray-600)', fontSize: '0.72rem', fontWeight: 600, padding: '0.2rem 0.6rem', borderRadius: '100px' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 style={{ fontSize: '1.025rem', color: 'var(--navy)', marginBottom: '0.625rem' }}>{p.title}</h3>
                  <p style={{ color: 'var(--gray-600)', fontSize: '0.875rem', lineHeight: 1.65, margin: 0, flex: 1 }}>{p.description}</p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', background: 'white', border: '1px solid var(--gray-200)', borderRadius: '16px', padding: '3rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Have a project in mind?</h3>
            <p style={{ color: 'var(--gray-600)', marginBottom: '1.75rem', lineHeight: 1.65 }}>
              We&apos;d love to add your project to our portfolio. Get in touch for a free quote.
            </p>
            <Link href="/contact" className="btn-primary">Start Your Project</Link>
          </div>
        </div>
      </section>
    </>
  );
}
