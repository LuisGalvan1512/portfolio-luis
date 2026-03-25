const skillGroups = [
  { label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Compose'] },
  { label: 'Backend', items: ['Python', 'PHP', 'Java', 'Node.js', 'C++', 'Kotlin'] },
  { label: 'Databases', items: ['MySQL', 'MongoDB', 'Oracle', 'SQLServer', 'CassandraDB', 'H2'] },
  { label: 'Frameworks', items: ['Laravel', 'Django', 'Spring Boot', 'Angular', 'Express.js'] },
  { label: 'Data & Others', items: ['Git', 'GitHub', 'Linux', 'Maven', 'AWS', 'SQL'] },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <p className="section-label">02 — Habilidades</p>
      <h2 className="section-title">Stack técnico</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)' }}>
        {skillGroups.map(({ label, items }) => (
          <div key={label} style={{
            display: 'grid', gridTemplateColumns: '180px 1fr',
            background: 'var(--bg)', padding: '28px 32px', alignItems: 'center', gap: '40px'
          }}>
            <span style={{ fontSize: '10px', letterSpacing: '0.25em', color: 'var(--accent)', textTransform: 'uppercase' }}>
              {label}
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {items.map(skill => (
                <span key={skill} style={{
                  padding: '6px 14px', border: '1px solid var(--border)', fontSize: '11px',
                  letterSpacing: '0.1em', color: 'var(--text-muted)', transition: 'all 0.2s',
                  cursor: 'default'
                }}
                  onMouseEnter={e => {
                    e.target.style.borderColor = 'var(--accent)';
                    e.target.style.color = 'var(--accent)';
                    e.target.style.background = 'var(--accent-dim)';
                  }}
                  onMouseLeave={e => {
                    e.target.style.borderColor = 'var(--border)';
                    e.target.style.color = 'var(--text-muted)';
                    e.target.style.background = 'transparent';
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