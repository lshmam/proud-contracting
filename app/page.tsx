import Hero from '@/components/Hero';
import InfiniteMarquee from '@/components/InfiniteMarquee';
import Stats from '@/components/Stats';
import ServicesSection from '@/components/ServicesSection';
import OurProcess from '@/components/OurProcess';
import RecentWork from '@/components/RecentWork';
import InteractivePortfolio from '@/components/InteractivePortfolio';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <InfiniteMarquee /> */}
      <Stats />
      <ServicesSection />
      <OurProcess />
      {/* <RecentWork /> */}
      <InteractivePortfolio />
      <Testimonials />
      <FinalCTA />

      {/* Global Landing Page Animations & Scoped CSS */}
      <style>{`
        @keyframes heroPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.85)} }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        
        .portfolio-item:hover .portfolio-img { transform: scale(1.06); }
        .portfolio-item:hover .portfolio-overlay { opacity: 1 !important; }
        .service-card:hover { background: rgba(255,255,255,0.06) !important; }
        .portfolio-row:hover .portfolio-img { transform: scale(1.04); }
        .portfolio-row:hover h3 { opacity: 0.6; }
      `}</style>
    </>
  );
}
