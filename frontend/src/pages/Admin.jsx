import { useState, useEffect } from 'react';
import { getProjects, createProject, updateProject, deleteProject } from '../api/projects';

const emptyForm = { title: '', description: '', tech: '', github: '', demo: '', category: 'web', featured: false };

export default function Admin() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editing, setEditing] = useState(null);
  const [msg, setMsg] = useState('');

  const load = () => getProjects().then(r => setProjects(r.data)).catch(() => {});

  useEffect(() => { load(); }, []);

  const notify = (text) => { setMsg(text); setTimeout(() => setMsg(''), 3000); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...form, tech: form.tech.split(',').map(t => t.trim()).filter(Boolean) };
    try {
      if (editing) {
        await updateProject(editing, data);
        notify('✅ Proyecto actualizado');
      } else {
        await createProject(data);
        notify('✅ Proyecto creado');
      }
      setForm(emptyForm);
      setEditing(null);
      load();
    } catch { notify('❌ Error al guardar'); }
  };

  const handleEdit = (p) => {
    setForm({ ...p, tech: p.tech.join(', ') });
    setEditing(p._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (!confirm('¿Eliminar proyecto?')) return;
    await deleteProject(id);
    notify('🗑️ Eliminado');
    load();
  };

  const input = (field, placeholder, type = 'text') => (
    <input type={type} placeholder={placeholder} value={form[field]}
      onChange={e => setForm({ ...form, [field]: e.target.value })}
      style={{ width: '100%', background: '#111', border: '1px solid var(--border)', color: 'var(--text)', padding: '12px 16px', fontFamily: 'var(--font-mono)', fontSize: '13px', marginBottom: '12px', outline: 'none' }} />
  );

  const s = {
    page: { background: 'var(--bg)', minHeight: '100vh', padding: '60px 40px', fontFamily: 'var(--font-mono)' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px', borderBottom: '1px solid var(--border)', paddingBottom: '24px' },
    card: { border: '1px solid var(--border)', padding: '32px', marginBottom: '1px', background: '#0a0a0a', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '20px' },
    btnSm: (color) => ({ padding: '8px 16px', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', border: `1px solid ${color}`, background: 'transparent', color, fontFamily: 'var(--font-mono)', transition: 'all 0.2s' }),
  };

  return (
    <div style={s.page}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={s.header}>
          <div>
            <p style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: '8px' }}>PANEL DE ADMINISTRACIÓN</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem' }}>Gestión de Proyectos</h1>
          </div>
          <a href="/" style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.2em' }}>← Volver al portfolio</a>
        </div>

        {msg && <div style={{ padding: '14px 20px', border: '1px solid var(--accent)', color: 'var(--accent)', marginBottom: '32px', fontSize: '12px' }}>{msg}</div>}

        {/* Form */}
        <div style={{ border: '1px solid var(--border)', padding: '40px', marginBottom: '48px' }}>
          <p style={{ fontSize: '10px', letterSpacing: '0.25em', color: 'var(--accent)', marginBottom: '24px' }}>
            {editing ? '— EDITAR PROYECTO' : '— NUEVO PROYECTO'}
          </p>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>{input('title', 'Título del proyecto')}</div>
              <div>
                <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}
                  style={{ width: '100%', background: '#111', border: '1px solid var(--border)', color: 'var(--text)', padding: '12px 16px', fontFamily: 'var(--font-mono)', fontSize: '13px', marginBottom: '12px' }}>
                  {['web', 'mobile', 'fullstack', 'data'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <textarea placeholder="Descripción" value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })} rows={3}
              style={{ width: '100%', background: '#111', border: '1px solid var(--border)', color: 'var(--text)', padding: '12px 16px', fontFamily: 'var(--font-mono)', fontSize: '13px', marginBottom: '12px', resize: 'vertical' }} />
            {input('tech', 'Tecnologías (separadas por coma)')}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>{input('github', 'URL GitHub')}</div>
              <div>{input('demo', 'URL Demo')}</div>
            </div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '24px', cursor: 'pointer' }}>
              <input type="checkbox" checked={form.featured} onChange={e => setForm({ ...form, featured: e.target.checked })} />
              Marcar como destacado
            </label>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button type="submit" className="btn btn-primary">{editing ? 'Actualizar' : 'Crear proyecto'}</button>
              {editing && <button type="button" onClick={() => { setForm(emptyForm); setEditing(null); }} className="btn btn-outline">Cancelar</button>}
            </div>
          </form>
        </div>

        {/* List */}
        <p style={{ fontSize: '10px', letterSpacing: '0.25em', color: 'var(--accent)', marginBottom: '16px' }}>— PROYECTOS EN BD ({projects.length})</p>
        {projects.length === 0 && <p style={{ color: 'var(--text-muted)', fontSize: '12px' }}>No hay proyectos aún. Crea el primero.</p>}
        {projects.map(p => (
          <div key={p._id} style={s.card}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', marginBottom: '8px' }}>{p.title}</h3>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '8px' }}>{p.description}</p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {p.tech.map(t => <span key={t} style={{ fontSize: '9px', padding: '3px 8px', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>{t}</span>)}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
              <button onClick={() => handleEdit(p)} style={s.btnSm('var(--accent)')}>Editar</button>
              <button onClick={() => handleDelete(p._id)} style={s.btnSm('#ff4444')}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

