import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '20px 40px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid #1e1e1e' : 'none',
      transition: 'all 0.3s'
    }}>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>
        Luis<span style={{ color: 'var(--accent)' }}>.</span>
      </span>
      <div style={{ display: 'flex', gap: '32px', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
        {['about', 'skills', 'projects', 'contact'].map(s => (
          <a key={s} href={`#${s}`} style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
            {s}
          </a>
        ))}
      </div>
    </nav>
  );
}