export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '80px clamp(20px, 5vw, 60px) 0',
      maxWidth: '1100px', margin: '0 auto', position: 'relative'
    }}>
      {/* Dot grid */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '50%', height: '100%',
        backgroundImage: 'radial-gradient(circle, var(--border-light) 1px, transparent 1px)',
        backgroundSize: '28px 28px', opacity: 0.6, pointerEvents: 'none'
      }} />
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '-100px', width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(74,240,176,0.06) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '680px', position: 'relative' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '6px 16px', border: '1px solid var(--border-light)',
          borderRadius: '100px', marginBottom: '32px',
          fontSize: '10px', letterSpacing: '0.25em', color: 'var(--accent)',
          background: 'var(--accent-dim)'
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
          DISPONIBLE PARA OPORTUNIDADES
        </div>

        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 8vw, 5.5rem)', lineHeight: '1.0', marginBottom: '28px', color: 'var(--text)' }}>
          Luis Enrique<br />
          <span style={{ fontStyle: 'italic', color: 'var(--text-sub)' }}>Galván Morales</span>
        </h1>

        <p style={{ fontSize: 'clamp(13px, 2vw, 15px)', color: 'var(--text-sub)', maxWidth: '500px', lineHeight: '1.9', marginBottom: '40px' }}>
          Estudiante de Diseño y Desarrollo de Software en{' '}
          <span style={{ color: 'var(--text)', fontWeight: 500 }}>TECSUP</span>.
          Apasionado por el{' '}
          <span style={{ color: 'var(--accent)' }}>desarrollo móvil</span> y el{' '}
          <span style={{ color: 'var(--accent)' }}>análisis de datos</span>.
        </p>

        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn btn-primary">Ver proyectos →</a>
          <a href="#contact" className="btn btn-outline">Contactar</a>
        </div>

        <div style={{ display: 'flex', gap: 'clamp(24px, 5vw, 48px)', marginTop: '64px', paddingTop: '40px', borderTop: '1px solid var(--border)', flexWrap: 'wrap' }}>
          {[['4°', 'Ciclo TECSUP'], ['4+', 'Proyectos'], ['15+', 'Tecnologías']].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', color: 'var(--accent)' }}>{n}</div>
              <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '4px' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}