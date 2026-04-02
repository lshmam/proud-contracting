'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Header */}
      <section style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)',
        padding: '4rem 0 3.5rem',
      }}>
        <div className="container">
          <span className="section-label" style={{ color: '#93C5FD' }}>Get In Touch</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.75rem', marginBottom: '1rem' }}>
            Contact Us
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', maxWidth: '500px', lineHeight: 1.65 }}>
            Ready to get started? Request a free quote or just give us a call. We respond quickly.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.25rem', fontSize: '0.85rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'white' }}>Contact</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start' }}>
            {/* Contact Info */}
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>We&apos;d love to hear from you.</h2>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.65, marginBottom: '2.25rem' }}>
                Reach out via phone, email, or fill out the form and we&apos;ll get back to you within 24 hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {[
                  {
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.17 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
                    label: 'Phone',
                    value: '778-919-3195',
                    href: 'tel:7789193195',
                  },
                  {
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                    label: 'Email',
                    value: 'proudcontractinginc@gmail.com',
                    href: 'mailto:proudcontractinginc@gmail.com',
                  },
                  {
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                    label: 'Location',
                    value: 'British Columbia, Canada',
                    href: null,
                  },
                ].map((c, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--blue-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {c.icon}
                    </div>
                    <div>
                      <p style={{ color: 'var(--gray-400)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>{c.label}</p>
                      {c.href ? (
                        <a href={c.href} style={{ color: 'var(--navy)', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>{c.value}</a>
                      ) : (
                        <p style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.95rem', margin: 0 }}>{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div style={{ background: 'var(--gray-50)', border: '1px solid var(--gray-200)', borderRadius: '12px', padding: '1.5rem' }}>
                <h4 style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--navy)' }}>Business Hours</h4>
                {[
                  ['Monday – Friday', '7:00 AM – 6:00 PM'],
                  ['Saturday', '8:00 AM – 4:00 PM'],
                  ['Sunday', 'Emergency calls only'],
                ].map(([day, hours], i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: i < 2 ? '1px solid var(--gray-200)' : 'none' }}>
                    <span style={{ color: 'var(--gray-600)', fontSize: '0.875rem' }}>{day}</span>
                    <span style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.875rem' }}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div style={{ background: 'white', border: '1px solid var(--gray-200)', borderRadius: '16px', padding: '2.5rem', boxShadow: 'var(--shadow-md)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--gray-600)', lineHeight: 1.65 }}>
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.<br />
                    For urgent matters, call <a href="tel:7789193195" style={{ color: 'var(--blue)', fontWeight: 600 }}>778-919-3195</a>.
                  </p>
                </div>
              ) : (
                <>
                  <h3 style={{ fontSize: '1.375rem', marginBottom: '0.5rem' }}>Get a Free Quote</h3>
                  <p style={{ color: 'var(--gray-600)', fontSize: '0.9rem', marginBottom: '2rem' }}>Fill out the form and we&apos;ll respond within 24 hours.</p>
                  
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <FormField label="Your Name *" id="name">
                        <input id="name" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                          placeholder="John Smith" style={inputStyle} />
                      </FormField>
                      <FormField label="Phone Number" id="phone">
                        <input id="phone" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                          placeholder="778-555-0000" style={inputStyle} />
                      </FormField>
                    </div>
                    <FormField label="Email Address *" id="email">
                      <input id="email" type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="john@example.com" style={inputStyle} />
                    </FormField>
                    <FormField label="Service Needed" id="service">
                      <select id="service" value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))} style={inputStyle}>
                        <option value="">Select a service...</option>
                        <option>Electrical Services</option>
                        <option>Plumbing Services</option>
                        <option>Residential Contracting</option>
                        <option>Commercial Contracting</option>
                        <option>Industrial Contracting</option>
                        <option>Design-Build Services</option>
                        <option>Renovations & Upgrades</option>
                        <option>Project Management</option>
                        <option>Other / Not Sure</option>
                      </select>
                    </FormField>
                    <FormField label="Project Details *" id="message">
                      <textarea id="message" required rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        placeholder="Describe your project, timeline, location, and any other details..."
                        style={{ ...inputStyle, resize: 'vertical' }} />
                    </FormField>
                    <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem', justifyContent: 'center', fontSize: '1rem', padding: '0.9rem' }}>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '0.7rem 0.875rem',
  border: '1.5px solid var(--gray-200)', borderRadius: '8px',
  fontSize: '0.9375rem', fontFamily: 'inherit', color: 'var(--gray-900)',
  outline: 'none', transition: 'border-color 0.2s', background: 'white',
};

function FormField({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} style={{ display: 'block', fontWeight: 500, fontSize: '0.875rem', color: 'var(--gray-700)', marginBottom: '0.4rem' }}>{label}</label>
      {children}
    </div>
  );
}
