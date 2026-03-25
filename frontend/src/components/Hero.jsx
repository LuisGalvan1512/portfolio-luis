export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '0 40px', maxWidth: '1100px', margin: '0 auto', position: 'relative'
    }}>
      {/* Grid decoration */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '40%', height: '100%',
        backgroundImage: 'radial-gradient(circle, #1e1e1e 1px, transparent 1px)',
        backgroundSize: '28px 28px', opacity: 0.5, pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '700px' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.35em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '24px' }}>
          ◆ Available for opportunities
        </p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: '1.0', marginBottom: '32px' }}>
          Luis<br />
          <span style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>Galván</span>
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--text-muted)', maxWidth: '480px', lineHeight: '1.9', marginBottom: '40px' }}>
          Estudiante de Diseño y Desarrollo de Software en TECSUP.
          Apasionado por el <span style={{ color: 'var(--text)' }}>desarrollo móvil</span> y el{' '}
          <span style={{ color: 'var(--text)' }}>análisis de datos</span>.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn btn-primary">Ver proyectos</a>
          <a href="#contact" className="btn btn-outline">Contactar</a>
        </div>

        <div style={{ display: 'flex', gap: '40px', marginTop: '80px' }}>
          {[['4°', 'Ciclo TECSUP'], ['4+', 'Proyectos'], ['10+', 'Tecnologías']].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--accent)' }}>{n}</div>
              <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}