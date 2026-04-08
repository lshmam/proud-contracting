import Link from 'next/link';

const portfolioItems = [
  {
    title: 'Custom Home — Surrey, BC',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=85&auto=format&fit=crop',
  },
  {
    title: 'Warehouse Build — Langley',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=900&q=85&auto=format&fit=crop',
  },
  {
    title: 'Office Renovation — Burnaby',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85&auto=format&fit=crop',
  },
];

export default function RecentWork() {
  return (
    <section style={{ background: 'white', padding: '6rem 0 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <h2 style={{
          fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 400, lineHeight: 1.05,
          letterSpacing: '-0.03em', marginBottom: '3rem',
          fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
        }}>
          Recent Work
        </h2>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #E5E7EB' }} />

        {/* Rows */}
        {portfolioItems.map((p, i) => (
          <Link key={i} href="/projects" style={{ textDecoration: 'none', display: 'block' }} className="portfolio-row">
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr auto',
              gap: '4rem', alignItems: 'center',
              padding: '3.5rem 0', borderBottom: '1px solid #E5E7EB',
            }}>
              {/* Left: tag + title */}
              <div>
                <span style={{
                  fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: '#6B7280', display: 'block', marginBottom: '1rem',
                }}>{p.category}</span>
                <h3 style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 400, color: '#111827',
                  lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0,
                  fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                  transition: 'opacity 0.2s',
                }}>{p.title}</h3>
              </div>

              {/* Right: image */}
              <div style={{ width: '360px', height: '220px', overflow: 'hidden', flexShrink: 0 }}>
                <img
                  src={p.image} alt={p.title}
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                    transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                  className="portfolio-img"
                />
              </div>
            </div>
          </Link>
        ))}

        {/* View all link */}
        <div style={{ padding: '2.5rem 0' }}>
          <Link href="/projects" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            color: '#111827', fontWeight: 600, fontSize: '0.9rem',
            textDecoration: 'none', letterSpacing: '-0.01em',
          }}>
            View All Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
