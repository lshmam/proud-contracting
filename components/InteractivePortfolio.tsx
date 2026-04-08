'use client';

const projects = [
  {
    title: 'Elegant flooring concepts',
    subtitle: 'Wood, tile & stone',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Modern interior design',
    subtitle: 'Stylish rooms',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Custom home interiors',
    subtitle: 'Unique finishes',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1600&auto=format&fit=crop',
  },
];

import FadeIn from './FadeIn';

export default function InteractivePortfolio() {
  return (
    <section style={{ background: '#FAF9F6', padding: '6rem 0' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Header */}
        <FadeIn delay={100}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, lineHeight: 1.05,
              letterSpacing: '-0.02em', margin: 0,
              fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
            }}>
              Featured Work
            </h2>
          </div>
        </FadeIn>

        {/* Accordion Container */}
        <FadeIn delay={200}>
          <div className="flex flex-col md:flex-row gap-5" style={{ 
            height: '85vh',
            minHeight: '600px',
            maxHeight: '1100px',
          }}>
            {projects.map((p, i) => (
              <div 
                key={i}
                className="portfolio-accordion-item"
              >
                <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={p.image} 
                    alt={p.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ paddingTop: '1.25rem', paddingBottom: '0.5rem' }}>
                  <h3 style={{ 
                    fontSize: '1.4rem', 
                    fontWeight: 400, 
                    color: '#111827', 
                    margin: '0 0 0.35rem 0', 
                    letterSpacing: '-0.01em',
                    fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                  }}>{p.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#6B7280', margin: 0 }}>{p.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
      
      <style>{`
        .portfolio-accordion-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: flex 0.7s cubic-bezier(0.25, 1, 0.5, 1);
          cursor: pointer;
        }
        .portfolio-accordion-item:hover {
          flex: 2.2;
        }
        .portfolio-accordion-item img {
          transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .portfolio-accordion-item:hover img {
          transform: scale(1.04);
        }
      `}</style>
    </section>
  );
}
