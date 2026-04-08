import FadeIn from './FadeIn';

const featuredTestimonial = {
  name: 'Marcus T.',
  role: 'Property Manager, WestCoast Holdings',
  text: '"Commercial contracting requires absolute precision and flawless timeline execution. Proud Contracting helped us identify structural blind spots early, understand our infrastructure needs, and completely overhauled our mechanical systems. I now manage our properties more effectively knowing the electrical and plumbing foundations are solid. The investment has been well worth it — their exceptional work continues to support our daily operations and tenant satisfaction."',
  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
};

export default function Testimonials() {
  return (
    <section style={{ background: 'white', padding: '8rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <FadeIn delay={100} direction="up">
          <div className="flex flex-col md:flex-row gap-6 min-h-[500px] items-stretch">
            {/* Left: Image */}
            <div className="w-full md:w-[35%] flex-shrink-0">
              <img 
                src={featuredTestimonial.image} 
                alt={featuredTestimonial.name} 
                style={{ width: '100%', height: '100%', minHeight: '300px', objectFit: 'cover', display: 'block' }} 
              />
            </div>

            {/* Right: Quote Box */}
            <div 
              className="flex-1 bg-[#EBECEB] flex flex-col justify-center p-8 md:p-20"
            >
              <p style={{ 
                fontSize: '1.25rem', 
                lineHeight: 1.6, 
                color: '#111827', 
                fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                marginBottom: '4rem',
                fontWeight: 400
              }}>
                {featuredTestimonial.text}
              </p>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#111827', marginBottom: '0.2rem' }}>
                  {featuredTestimonial.name}
                </div>
                <div style={{ fontSize: '0.95rem', color: '#4B5563' }}>
                  {featuredTestimonial.role}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
