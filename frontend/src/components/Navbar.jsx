import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['about', 'skills', 'projects', 'contact'];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 clamp(20px, 5vw, 60px)',
      height: '64px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: scrolled ? 'rgba(8,12,16,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.3s'
    }}>
      <a href="/" style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--text)' }}>
        Luis<span style={{ color: 'var(--accent)' }}>.</span>
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '32px', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase' }}
        className="hide-mobile">
        {links.map(s => (
          <a key={s} href={`#${s}`} style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
            {s}
          </a>
        ))}
        <a href="/admin" style={{ color: 'var(--accent)', letterSpacing: '0.2em', fontSize: '11px' }}>admin</a>
      </div>

      {/* Mobile hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)}
        style={{ display: 'none', background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer', fontSize: '20px', padding: '8px' }}
        className="show-mobile-flex">
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0, bottom: 0,
          background: 'var(--bg)', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '32px', zIndex: 99
        }}>
          {[...links, 'admin'].map(s => (
            <a key={s} href={s === 'admin' ? '/admin' : `#${s}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', color: s === 'admin' ? 'var(--accent)' : 'var(--text)' }}>
              {s}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}