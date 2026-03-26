import { useState, useEffect } from 'react';
import { getProjects } from '../api/projects';

const staticProjects = [
  {
    _id: 's1', title: 'TecMiner', category: 'fullstack', featured: true,
    description: 'Plataforma integral para gestión minera. Controla zonas de extracción, equipos, producción, inventario y análisis de calidad.',
    tech: ['React', 'Django', 'Spring Boot', 'Kotlin', 'MySQL', 'AWS']
  },
  {
    _id: 's2', title: 'CandidatoInfo', category: 'mobile',
    description: 'App móvil para consultar información de candidatos a las Elecciones Generales Perú 2026. Integra frontend móvil con backend REST.',
    tech: ['Kotlin', 'Compose', 'Django', 'MySQL']
  },
  {
    _id: 's3', title: 'Zentrix', category: 'web',
    description: 'Plataforma web colaborativa de gestión académica para administrar estudiantes, cursos y actividades educativas.',
    tech: ['PHP', 'Laravel', 'MySQL']
  },
  {
    _id: 's4', title: 'LegendaryClass', category: 'web',
    description: 'Sistema gamificado de gestión educativa con misiones y personajes interactivos. Usa NoSQL para estructuras dinámicas.',
    tech: ['PHP', 'Laravel', 'MongoDB']
  },
];

const categoryColors = { web: '#38bdf8', mobile: '#4af0b0', fullstack: '#a78bfa', data: '#fb923c' };

export default function Projects() {
  const [projects, setProjects] = useState(staticProjects);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    getProjects()
      .then(res => setProjects([...staticProjects, ...res.data]))
      .catch(() => {});
  }, []);

  const categories = ['all', 'web', 'mobile', 'fullstack'];
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section">
      <p className="section-label">03 — Proyectos</p>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
        <h2 className="section-title" style={{ marginBottom: 0 }}>Trabajo académico</h2>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {categories.map(c => (
            <button key={c} onClick={() => setFilter(c)} style={{
              padding: '8px 18px', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
              background: filter === c ? 'var(--accent)' : 'var(--surface)',
              color: filter === c ? '#08110e' : 'var(--text-sub)',
              border: '1px solid', borderColor: filter === c ? 'var(--accent)' : 'var(--border)',
              borderRadius: 'var(--radius)', cursor: 'pointer', transition: 'all 0.2s',
              fontFamily: 'var(--font-mono)', fontWeight: filter === c ? 500 : 400
            }}>{c}</button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
        {filtered.map((p, i) => {
          const catColor = categoryColors[p.category] || 'var(--accent)';
          return (
            <div key={p._id} style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius)', padding: '32px 28px',
              transition: 'all 0.25s', cursor: 'default', position: 'relative', overflow: 'hidden'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = catColor + '66';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 16px 40px rgba(0,0,0,0.4)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>

              {/* Top bar color */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: catColor }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
                <span style={{ fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.2em' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  {p.featured && (
                    <span style={{ fontSize: '9px', padding: '3px 10px', background: 'var(--accent-dim)', color: 'var(--accent)', borderRadius: '100px', letterSpacing: '0.15em' }}>
                      ★ FEATURED
                    </span>
                  )}
                  <span style={{ fontSize: '9px', padding: '3px 10px', background: catColor + '18', color: catColor, borderRadius: '100px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    {p.category}
                  </span>
                </div>
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: '14px', color: 'var(--text)' }}>{p.title}</h3>
              <p style={{ fontSize: '12px', color: 'var(--text-sub)', lineHeight: '1.9', marginBottom: '24px' }}>{p.description}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: p.github ? '20px' : 0 }}>
                {p.tech.map(t => (
                  <span key={t} style={{ fontSize: '9px', padding: '4px 10px', background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--text-muted)', borderRadius: 'var(--radius)', letterSpacing: '0.1em' }}>
                    {t}
                  </span>
                ))}
              </div>

              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '10px', color: 'var(--accent)', letterSpacing: '0.15em', marginTop: '16px' }}>
                  GitHub →
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}