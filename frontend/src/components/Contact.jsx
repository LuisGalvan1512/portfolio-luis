export default function Contact() {
  const items = [
    ['Email', 'lusen121502@gmail.com', 'mailto:l.usen121502@gmail.com'],
    ['LinkedIn', 'galvan-morales-enrique', 'https://linkedin.com/in/galvan-morales-enrique'],
    ['Ubicación', 'Lima, Perú', null],
    ['Idioma', 'Español / English (básico-intermedio)', null],
  ];

  return (
    <section id="contact" className="section">
      <p className="section-label">04 — Contacto</p>
      <div className="grid-2" style={{ alignItems: 'center' }}>
        <div>
          <h2 className="section-title" style={{ marginBottom: '24px' }}>
            Trabajemos<br />
            <span style={{ fontStyle: 'italic', color: 'var(--text-sub)' }}>juntos</span>
          </h2>
          <p style={{ color: 'var(--text-sub)', lineHeight: '2', marginBottom: '40px', fontSize: '14px' }}>
            Estoy buscando oportunidades para aplicar mis conocimientos y seguir creciendo profesionalmente.
            ¡No dudes en escribirme!
          </p>
          <a href="mailto:l.usen121502@gmail.com" className="btn btn-primary">
            Enviar mensaje →
          </a>
        </div>

        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
          {items.map(([label, val, href]) => (
            <div key={label} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '20px 28px', borderBottom: '1px solid var(--border)',
              transition: 'background 0.2s', gap: '16px'
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--surface2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
              <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase', flexShrink: 0 }}>{label}</span>
              {href
                ? <a href={href} style={{ fontSize: '12px', color: 'var(--text-sub)', textAlign: 'right', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-sub)'}>{val}</a>
                : <span style={{ fontSize: '12px', color: 'var(--text-sub)', textAlign: 'right' }}>{val}</span>
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}