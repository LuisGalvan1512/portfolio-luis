export default function Contact() {
  return (
    <section id="contact" className="section">
      <p className="section-label">04 — Contacto</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
        <div>
          <h2 className="section-title" style={{ marginBottom: '24px' }}>
            Trabajemos<br />
            <span style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>juntos</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '2', marginBottom: '40px' }}>
            Estoy buscando oportunidades para aplicar mis conocimientos y seguir creciendo.
            No dudes en escribirme.
          </p>
          <a href="mailto:l.usen121502@gmail.com" className="btn btn-primary">
            Enviar mensaje →
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)' }}>
          {[
            ['Email', 'l.usen121502@gmail.com'],
            ['LinkedIn', 'galvan-morales-enrique'],
            ['Ubicación', 'Santa Anita, Lima, Perú'],
            ['Idioma', 'Español / English (básico-intermedio)'],
          ].map(([label, val]) => (
            <div key={label} style={{ background: 'var(--bg)', padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase' }}>{label}</span>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}