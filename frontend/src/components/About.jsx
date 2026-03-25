export default function About() {
  return (
    <section id="about" className="section">
      <p className="section-label">01 — Sobre mí</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
        <div>
          <h2 className="section-title" style={{ marginBottom: '32px' }}>
            Construyendo soluciones<br />
            <span style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>con propósito</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '2', marginBottom: '20px' }}>
            Soy estudiante de 4° ciclo en TECSUP con motivación especial en análisis y procesamiento de datos.
            Responsable, con capacidad de aprendizaje rápido y experiencia comprobada en trabajo colaborativo.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: '2' }}>
            Interesado en aplicar mis conocimientos en desarrollo móvil para seguir creciendo en la
            creación de soluciones tecnológicas innovadoras.
          </p>
        </div>
        <div>
          <div style={{ border: '1px solid var(--border)', padding: '32px' }}>
            <p style={{ fontSize: '10px', letterSpacing: '0.25em', color: 'var(--accent)', marginBottom: '24px' }}>EDUCACIÓN</p>
            <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: '24px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', marginBottom: '8px' }}>
                Instituto TECSUP
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '4px' }}>
                Diseño y Desarrollo de Software
              </div>
              <div style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'var(--accent)' }}>
                2024 — Presente
              </div>
            </div>
          </div>
          <div style={{ border: '1px solid var(--border)', borderTop: 'none', padding: '32px' }}>
            <p style={{ fontSize: '10px', letterSpacing: '0.25em', color: 'var(--accent)', marginBottom: '20px' }}>DATOS DE CONTACTO</p>
            {[
              ['📍', 'Santa Anita, Lima, Perú'],
              ['📞', '994 058 442'],
              ['✉️', 'l.usen121502@gmail.com'],
              ['🔗', 'linkedin.com/in/galvan-morales-enrique'],
            ].map(([icon, val]) => (
              <div key={val} style={{ display: 'flex', gap: '12px', marginBottom: '12px', color: 'var(--text-muted)', fontSize: '12px' }}>
                <span>{icon}</span><span>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}