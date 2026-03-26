export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: 'clamp(24px, 4vw, 40px) clamp(20px, 5vw, 60px)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--text-sub)' }}>
          Luis<span style={{ color: 'var(--accent)' }}>.</span>
        </span>
        <span style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.15em' }}>
          © 2025 · TECSUP · Lima, Perú
        </span>
        <a href="/admin" style={{ fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.2em', transition: 'color 0.2s' }}
          onMouseEnter={e => e.target.style.color = 'var(--accent)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
          /admin
        </a>
      </div>
    </footer>
  );
}