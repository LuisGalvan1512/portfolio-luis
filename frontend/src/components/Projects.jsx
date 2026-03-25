import { useState, useEffect } from 'react';
import { getProjects } from '../api/projects';

const staticProjects = [
  {
    _id: 's1', title: 'TecMiner', category: 'fullstack', featured: true,
    description: 'Sistema de Gestión Minera Integral. Controla zonas de extracción, equipos, producción e inventario.',
    tech: ['React', 'Django', 'Spring Boot', 'Kotlin', 'MySQL', 'AWS']
  },
  {
    _id: 's2', title: 'CandidatoInfo', category: 'mobile',
    description: 'App móvil para consultar candidatos a Elecciones Generales Perú 2026.',
    tech: ['Kotlin', 'Compose', 'Django', 'MySQL']
  },
  {
    _id: 's3', title: 'Zentrix', category: 'web',
    description: 'Plataforma de gestión académica colaborativa para administrar estudiantes y cursos.',
    tech: ['PHP', 'Laravel', 'MySQL']
  },
  {
    _id: 's4', title: 'LegendaryClass', category: 'web',
    description: 'Sistema gamificado para gestión educativa con misiones y personajes interactivos.',
    tech: ['PHP', 'Laravel', 'MongoDB']
  },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    getProjects()
      .then(res => setProjects([...staticProjects, ...res.data]))
      .catch(() => setProjects(staticProjects));
  }, []);

  const categories = ['all', 'web', 'mobile', 'fullstack'];
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section">
      <p className="section-label">03 — Proyectos</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
        <h2 className="section-title" style={{ marginBottom: 0 }}>Trabajo académico</h2>
        <div style={{ display: 'flex', gap: '4px' }}>
          {categories.map(c => (
            <button key={c} onClick={() => setFilter(c)} style={{
              padding: '8px 18px', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
              background: filter === c ? 'var(--accent)' : 'transparent',
              color: filter === c ? '#0a0a0a' : 'var(--text-muted)',
              border: '1px solid', borderColor: filter === c ? 'var(--accent)' : 'var(--border)',
              cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'var(--font-mono)'
            }}>{c}</button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1px', background: 'var(--border)' }}>
        {filtered.map((p, i) => (
          <div key={p._id} style={{
            background: 'var(--bg)', padding: '40px 32px', transition: 'background 0.2s',
            cursor: 'default'
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#0f0f0f'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--bg)'}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <span style={{ fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.2em' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              {p.featured && (
                <span style={{ fontSize: '9px', padding: '4px 10px', background: 'var(--accent-dim)', color: 'var(--accent)', letterSpacing: '0.2em' }}>
                  FEATURED
                </span>
              )}
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: '16px' }}>{p.title}</h3>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.9', marginBottom: '24px' }}>{p.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {p.tech.map(t => (
                <span key={t} style={{ fontSize: '9px', padding: '4px 10px', border: '1px solid var(--border)', color: 'var(--text-muted)', letterSpacing: '0.15em' }}>
                  {t}
                </span>
              ))}
            </div>
            {p.github && (
              <a href={p.github} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '20px', fontSize: '10px', color: 'var(--accent)', letterSpacing: '0.2em' }}>
                → GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}