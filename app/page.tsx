'use client';
import Link from "next/link";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: "Electrical Services",
    description: "New installations, upgrades, repairs, and renovations — all done to the highest standards of safety and quality.",
    href: "/services/electrical",
    color: "#FEF3C7",
    iconColor: "#D97706",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: "Plumbing Services",
    description: "Fast, professional, code-compliant plumbing for homes, businesses, and industrial facilities. New builds to emergency repairs.",
    href: "/services/plumbing",
    color: "#DBEAFE",
    iconColor: "#1D4ED8",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 22l9-9 9 9M13.5 6.5L17 3l4 4-3.5 3.5"/><path d="M3 13l4-4 3 3"/>
      </svg>
    ),
    title: "Residential Contracting",
    description: "Custom home builds, renovations, and additions crafted with care and precision for homeowners across BC.",
    href: "/services/residential",
    color: "#D1FAE5",
    iconColor: "#059669",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: "Commercial Contracting",
    description: "Office fit-outs, retail spaces, and commercial builds delivered on time and within budget.",
    href: "/services/commercial",
    color: "#EDE9FE",
    iconColor: "#7C3AED",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
      </svg>
    ),
    title: "Industrial Contracting",
    description: "Heavy-duty construction and facility solutions for industrial and manufacturing environments.",
    href: "/services/industrial",
    color: "#FFE4E6",
    iconColor: "#E11D48",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20M4 20V10l8-6 8 6v10"/>
      </svg>
    ),
    title: "Design-Build",
    description: "Streamlined single-source design and construction services to save you time, money, and stress.",
    href: "/services/design-build",
    color: "#E0F2FE",
    iconColor: "#0284C7",
  },
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Licensed & Insured" },
  { value: "24/7", label: "Emergency Support" },
];

const whyUs = [
  { icon: "🏆", title: "Expert Craftsmanship", desc: "Every project is executed with meticulous attention to detail and trade expertise." },
  { icon: "⏱️", title: "On-Time Completion", desc: "We respect your schedule and deliver projects on time, every time." },
  { icon: "🛡️", title: "Safety First", desc: "Rigorous safety standards and full compliance on every single job." },
  { icon: "💰", title: "Competitive Pricing", desc: "Transparent, fair pricing with no hidden fees or surprise costs." },
  { icon: "⭐", title: "Quality Materials", desc: "We only use high-grade, code-compliant materials for lasting results." },
  { icon: "🤝", title: "Customer Satisfaction", desc: "Your satisfaction is our priority — we don't stop until you're happy." },
];

const testimonials = [
  {
    name: "James M.",
    location: "Surrey, BC",
    stars: 5,
    text: "Proud Contracting upgraded our entire electrical panel. Clean, professional, and fast. Couldn't be happier with the results.",
  },
  {
    name: "Sarah K.",
    location: "Burnaby, BC",
    stars: 5,
    text: "They renovated our kitchen and bathroom — outstanding craftsmanship. The team was courteous, tidy, and finished ahead of schedule.",
  },
  {
    name: "David L.",
    location: "Vancouver, BC",
    stars: 5,
    text: "Used Proud Contracting for emergency plumbing. They responded within hours. Real professionals who stand behind their work.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 50%, var(--blue) 100%)',
        position: 'relative', overflow: 'hidden',
        padding: '6rem 0 5rem',
        minHeight: '85vh', display: 'flex', alignItems: 'center',
      }}>
        {/* Background pattern */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-15%', left: '-8%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}>
            <div className="animate-fade-up">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '100px', padding: '0.4rem 1rem', marginBottom: '1.75rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ADE80', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.8rem', fontWeight: 500 }}>Now Accepting New Projects</span>
              </div>

              <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.25rem' }}>
                Building Trust,<br />
                <span style={{ color: '#60A5FA' }}>Delivering Excellence.</span>
              </h1>

              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '540px', marginBottom: '2.25rem' }}>
                Proud Contracting delivers professional electrical, plumbing, residential, commercial, and industrial services across British Columbia — done right, on time, every time.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <Link href="/contact" className="btn-white" style={{ fontWeight: 700, fontSize: '1rem' }}>
                  Get a Free Quote
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <a href="tel:7789193195" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  778-919-3195
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="animate-fade-up delay-200" style={{ position: 'relative', flexShrink: 0, width: '420px' }}>
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=840&q=80&auto=format&fit=crop"
                alt="Construction workers on site"
                style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: '20px', display: 'block' }}
              />
              {/* Floating stat cards */}
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '-1.5rem', background: 'white', borderRadius: '12px', padding: '1rem 1.25rem', boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}>
                <p style={{ color: 'var(--gray-400)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>Projects Done</p>
                <p style={{ color: 'var(--navy)', fontSize: '1.75rem', fontWeight: 900, lineHeight: 1 }}>500+</p>
              </div>
              <div style={{ position: 'absolute', top: '1.5rem', right: '-1.5rem', background: 'var(--blue)', borderRadius: '12px', padding: '1rem 1.25rem', boxShadow: '0 8px 32px rgba(26,111,196,0.35)' }}>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>Experience</p>
                <p style={{ color: 'white', fontSize: '1.75rem', fontWeight: 900, lineHeight: 1 }}>25+ yrs</p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
          @media(max-width:768px) { .hero-cards { display: none !important; } }
        `}</style>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: 'var(--navy-light)', padding: '2rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
            {stats.map((s, i) => (
              <div key={i}>
                <div style={{ color: 'white', fontSize: '2rem', fontWeight: 900, letterSpacing: '-0.02em' }}>{s.value}</div>
                <div style={{ color: '#93C5FD', fontSize: '0.8rem', fontWeight: 500, marginTop: '0.25rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label">What We Do</span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginTop: '0.75rem', marginBottom: '1rem' }}>
              Our Services
            </h2>
            <p style={{ color: 'var(--gray-600)', fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.65 }}>
              From electrical and plumbing to full construction — we cover every trade with the same commitment to quality.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '1.5rem' }}>
            {services.map((s, i) => (
              <Link key={i} href={s.href} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ height: '100%', cursor: 'pointer' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.iconColor, marginBottom: '1.25rem' }}>
                    {s.icon}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.625rem', color: 'var(--navy)' }}>{s.title}</h3>
                  <p style={{ color: 'var(--gray-600)', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{s.description}</p>
                  <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--blue)', fontSize: '0.875rem', fontWeight: 600 }}>
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/services/residential" className="btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">Why Proud Contracting</span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', margin: '0.75rem 0 1.25rem' }}>
                Expert craftsmanship,<br />every time.
              </h2>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: '2rem' }}>
                With 25+ years in the industry, we&apos;ve built a reputation on quality, reliability, and integrity. Every project is approached with the same level of commitment — whether it&apos;s a small repair or a full industrial build.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                {[
                  "BC Licensed & Insured Contractor",
                  "All trades under one roof",
                  "Free detailed project estimates",
                  "Emergency services available 24/7",
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--blue-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span style={{ color: 'var(--gray-700)', fontWeight: 500, fontSize: '0.95rem' }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-primary">About Our Company</Link>
            </div>

            {/* Real photo with overlaid feature grid */}
            <div style={{ position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80&auto=format&fit=crop"
                alt="Construction team reviewing blueprints"
                style={{ width: '100%', height: '460px', objectFit: 'cover', borderRadius: '20px', display: 'block' }}
              />
              {/* Feature chips over image */}
              <div style={{
                position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem',
                background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)',
                borderRadius: '14px', padding: '1.25rem',
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.625rem',
              }}>
                {whyUs.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                    <span style={{ color: 'var(--navy)', fontSize: '0.8rem', fontWeight: 600 }}>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{
        background: 'linear-gradient(135deg, var(--blue) 0%, var(--navy) 100%)',
        padding: '4.5rem 0',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
            Ready to Start Your Project?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.65 }}>
            Contact us today for a free, no-obligation quote. Our team is ready to help bring your project to life.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-white" style={{ fontWeight: 700 }}>
              Get a Free Quote
            </Link>
            <a href="tel:7789193195" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              color: 'white', fontWeight: 600, fontSize: '0.9375rem',
              padding: '0.8rem 1.75rem', borderRadius: '6px',
              border: '2px solid rgba(255,255,255,0.4)', textDecoration: 'none',
              transition: 'border-color 0.2s, background 0.2s',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              778-919-3195
            </a>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-label">Client Reviews</span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', marginTop: '0.75rem' }}>
              What Our Clients Say
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} className="card">
                <div style={{ display: 'flex', marginBottom: '1rem' }}>
                  {Array(t.stars).fill(0).map((_, j) => (
                    <span key={j} style={{ color: '#F59E0B', fontSize: '1rem' }}>★</span>
                  ))}
                </div>
                <p style={{ color: 'var(--gray-700)', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ borderTop: '1px solid var(--gray-200)', paddingTop: '1rem' }}>
                  <p style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '0.9rem' }}>{t.name}</p>
                  <p style={{ color: 'var(--gray-400)', fontSize: '0.8rem' }}>{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT STRIP ── */}
      <section style={{ background: 'white', borderTop: '1px solid var(--gray-200)', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '1.375rem', marginBottom: '0.375rem' }}>Proud Contracting Inc.</h3>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.9rem' }}>Building Trust, Delivering Excellence — British Columbia, Canada</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
              <a href="tel:7789193195" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: 'var(--navy)', fontWeight: 600, textDecoration: 'none' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                778-919-3195
              </a>
              <a href="mailto:proudcontractinginc@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: 'var(--navy)', fontWeight: 600, textDecoration: 'none' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                proudcontractinginc@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
