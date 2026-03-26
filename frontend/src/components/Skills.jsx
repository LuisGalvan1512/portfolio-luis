const skillGroups = [
  { label: 'Frontend', color: '#4af0b0', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Compose'] },
  { label: 'Backend', color: '#38bdf8', items: ['Python', 'PHP', 'Java', 'Node.js', 'C++', 'Kotlin'] },
  { label: 'Databases', color: '#a78bfa', items: ['MySQL', 'MongoDB', 'Oracle', 'SQLServer', 'CassandraDB', 'H2'] },
  { label: 'Frameworks', color: '#fb923c', items: ['Laravel', 'Django', 'Spring Boot', 'Angular', 'Express.js'] },
  { label: 'Data & Tools', color: '#f472b6', items: ['Git', 'GitHub', 'Linux', 'Maven', 'AWS', 'SQL', 'Python'] },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <p className="section-label">02 — Habilidades</p>
      <h2 className="section-title">Stack técnico</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {skillGroups.map(({ label, color, items }) => (
          <div key={label} style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: 'clamp(20px, 3vw, 28px) clamp(20px, 3vw, 32px)',
            display: 'grid',
            gridTemplateColumns: 'clamp(100px, 15vw, 160px) 1fr',
            alignItems: 'center',
            gap: 'clamp(16px, 4vw, 40px)',
            transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = color + '55'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: color, flexShrink: 0 }} />
              <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--text-sub)', textTransform: 'uppercase', fontWeight: 500 }}>
                {label}
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {items.map(skill => (
                <span key={skill} style={{
                  padding: '5px 14px',
                  background: 'var(--surface2)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius)',
                  fontSize: '11px',
                  color: 'var(--text-sub)',
                  letterSpacing: '0.05em',
                  transition: 'all 0.2s',
                  cursor: 'default'
                }}
                  onMouseEnter={e => {
                    e.target.style.borderColor = color;
                    e.target.style.color = color;
                    e.target.style.background = color + '15';
                  }}
                  onMouseLeave={e => {
                    e.target.style.borderColor = 'var(--border-light)';
                    e.target.style.color = 'var(--text-sub)';
                    e.target.style.background = 'var(--surface2)';
                  }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}