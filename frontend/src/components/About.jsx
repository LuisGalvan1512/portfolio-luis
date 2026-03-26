export default function About() {
  const info = [
    ['📍', 'Ubicación', 'Santa Anita, Lima, Perú'],
    ['📞', 'Teléfono', '994 058 442'],
    ['✉️', 'Email', 'l.usen121502@gmail.com'],
    ['🔗', 'LinkedIn', 'galvan-morales-enrique'],
  ];

  return (
    <section id="about" className="section">
      <p className="section-label">01 — Sobre mí</p>
      <div className="grid-2">
        <div>
          <h2 className="section-title">
            Construyendo soluciones<br />
            <span style={{ fontStyle: 'italic', color: 'var(--text-sub)' }}>con propósito</span>
          </h2>
          <p style={{ color: 'var(--text-sub)', lineHeight: '2', marginBottom: '20px', fontSize: '14px' }}>
            Soy estudiante de TECSUP con motivación especial en análisis y
            procesamiento de datos. Responsable, con capacidad de aprendizaje rápido y
            experiencia comprobada en trabajo colaborativo.
          </p>
          <p style={{ color: 'var(--text-sub)', lineHeight: '2', fontSize: '14px' }}>
            Interesado en aplicar mis conocimientos en desarrollo móvil y análisis de datos
            para seguir creciendo en la creación de soluciones tecnológicas innovadoras.
          </p>

          <div style={{ marginTop: '36px', padding: '20px 24px', background: 'var(--surface)', border: '1px solid var(--border)', borderLeft: '3px solid var(--accent)', borderRadius: 'var(--radius)' }}>
            <p style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.2em', marginBottom: '6px' }}>IDIOMA</p>
            <p style={{ color: 'var(--text-sub)', fontSize: '13px' }}>Inglés — Nivel básico-intermedio (en desarrollo continuo)</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Educación */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '28px', borderRadius: 'var(--radius)' }}>
            <p style={{ fontSize: '10px', letterSpacing: '0.25em', color: 'var(--accent)', marginBottom: '20px' }}>EDUCACIÓN</p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ width: '3px', background: 'var(--border-light)', borderRadius: '2px', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: 'var(--text)', marginBottom: '6px' }}>
                  Instituto TECSUP
                </div>
                <div style={{ color: 'var(--text-sub)', fontSize: '13px', marginBottom: '8px' }}>
                  Diseño y Desarrollo de Software
                </div>
                <span style={{ fontSize: '10px', padding: '4px 12px', background: 'var(--accent-dim)', color: 'var(--accent)', borderRadius: '100px', letterSpacing: '0.1em' }}>
                  2024 — Presente · 5° Ciclo
                </span>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
            <div style={{ padding: '16px 28px', borderBottom: '1px solid var(--border)' }}>
              <p style={{ fontSize: '10px', letterSpacing: '0.25em', color: 'var(--accent)' }}>CONTACTO</p>
            </div>
            {info.map(([icon, label, val]) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 28px', borderBottom: '1px solid var(--border)', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--surface2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <span style={{ fontSize: '15px', flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '2px' }}>{label}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-sub)' }}>{val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}