const MARQUEE_TEXT = 'PROUD CONTRACTING   ·   DELIVERING EXCELLENCE FOR OVER 25 YEARS   ·   ';

export default function InfiniteMarquee() {
  return (
    <div style={{ background: '#FCFBF8', overflow: 'hidden', padding: '2rem 0' }}>
      <div style={{ display: 'flex', animation: 'marquee 30s linear infinite', whiteSpace: 'nowrap', width: 'fit-content' }}>
        {[...Array(4)].map((_, i) => (
          <span key={i} style={{ display: 'inline-block', paddingRight: '4rem', fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--blue)' }}>
            {MARQUEE_TEXT}
          </span>
        ))}
      </div>
    </div>
  );
}
