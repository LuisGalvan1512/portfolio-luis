import { useState, useEffect } from 'react';
import { getProjects, createProject, updateProject, deleteProject } from '../api/projects';

const emptyForm = {
  title: '', description: '', tech: '',
  github: '', demo: '', category: 'web', featured: false
};

const categoryColors = { web: '#38bdf8', mobile: '#4af0b0', fullstack: '#a78bfa', data: '#fb923c' };

export default function Admin() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editing, setEditing] = useState(null);
  const [msg, setMsg] = useState(null); // { text, type }
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(null);

  const load = () => getProjects().then(r => setProjects(r.data)).catch(() => {});

  useEffect(() => { load(); }, []);

  const notify = (text, type = 'success') => {
    setMsg({ text, type });
    setTimeout(() => setMsg(null), 3500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.description) return notify('Título y descripción son requeridos', 'error');
    setLoading(true);
    const data = { ...form, tech: form.tech.split(',').map(t => t.trim()).filter(Boolean) };
    try {
      if (editing) {
        await updateProject(editing, data);
        notify('Proyecto actualizado correctamente');
      } else {
        await createProject(data);
        notify('Proyecto creado correctamente');
      }
      setForm(emptyForm);
      setEditing(null);
      load();
    } catch {
      notify('Error al guardar el proyecto', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (p) => {
    setForm({ ...p, tech: p.tech.join(', ') });
    setEditing(p._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    setDeleting(id);
    try {
      await deleteProject(id);
      notify('Proyecto eliminado');
      load();
    } catch {
      notify('Error al eliminar', 'error');
    } finally {
      setDeleting(null);
    }
  };

  const inputStyle = {
    width: '100%',
    background: 'var(--surface2)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    color: 'var(--text)',
    padding: '12px 16px',
    fontFamily: 'var(--font-mono)',
    fontSize: '13px',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const Field = ({ label, children }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
        {label}
      </label>
      {children}
    </div>
  );

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', fontFamily: 'var(--font-mono)' }}>

      {/* Header */}
      <div style={{ borderBottom: '1px solid var(--border)', background: 'var(--surface)', padding: '0 clamp(20px, 5vw, 60px)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', height: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--text)' }}>
              Luis<span style={{ color: 'var(--accent)' }}>.</span>
            </span>
            <span style={{ color: 'var(--border-light)', fontSize: '16px' }}>|</span>
            <span style={{ fontSize: '10px', letterSpacing: '0.25em', color: 'var(--accent)', textTransform: 'uppercase' }}>
              Admin Panel
            </span>
          </div>
          <a href="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.15em',
            padding: '8px 16px', border: '1px solid var(--border)', borderRadius: 'var(--radius)',
            transition: 'all 0.2s'
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}>
            ← Portfolio
          </a>
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '48px clamp(20px, 5vw, 60px)' }}>

        {/* Notification */}
        {msg && (
          <div style={{
            padding: '14px 20px', borderRadius: 'var(--radius)', marginBottom: '28px',
            fontSize: '12px', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '10px',
            background: msg.type === 'error' ? 'rgba(248,113,113,0.1)' : 'var(--accent-dim)',
            border: `1px solid ${msg.type === 'error' ? '#f87171' : 'var(--accent)'}`,
            color: msg.type === 'error' ? '#f87171' : 'var(--accent)',
          }}>
            <span>{msg.type === 'error' ? '✕' : '✓'}</span>
            {msg.text}
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'clamp(280px, 40%, 420px) 1fr', gap: '32px', alignItems: 'start' }}>

          {/* FORM */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden', position: 'sticky', top: '80px' }}>
            <div style={{ padding: '24px 28px', borderBottom: '1px solid var(--border)', background: editing ? 'rgba(167,139,250,0.06)' : 'transparent' }}>
              <p style={{ fontSize: '10px', letterSpacing: '0.25em', color: editing ? '#a78bfa' : 'var(--accent)', marginBottom: '4px' }}>
                {editing ? '— EDITANDO PROYECTO' : '— NUEVO PROYECTO'}
              </p>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                {editing ? 'Modifica los campos y guarda' : 'Completa el formulario para agregar'}
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <Field label="Título *">
                <input style={inputStyle} placeholder="Nombre del proyecto" value={form.title}
                  onChange={e => setForm({ ...form, title: e.target.value })}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'} />
              </Field>

              <Field label="Descripción *">
                <textarea style={{ ...inputStyle, resize: 'vertical', minHeight: '90px' }}
                  placeholder="Describe el proyecto..." value={form.description}
                  onChange={e => setForm({ ...form, description: e.target.value })}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'} />
              </Field>

              <Field label="Tecnologías (separadas por coma)">
                <input style={inputStyle} placeholder="React, Node.js, MongoDB" value={form.tech}
                  onChange={e => setForm({ ...form, tech: e.target.value })}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'} />
              </Field>

              <Field label="Categoría">
                <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.category}
                  onChange={e => setForm({ ...form, category: e.target.value })}>
                  {['web', 'mobile', 'fullstack', 'data'].map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </Field>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <Field label="GitHub URL">
                  <input style={inputStyle} placeholder="https://github.com/..." value={form.github}
                    onChange={e => setForm({ ...form, github: e.target.value })}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </Field>
                <Field label="Demo URL">
                  <input style={inputStyle} placeholder="https://..." value={form.demo}
                    onChange={e => setForm({ ...form, demo: e.target.value })}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </Field>
              </div>

              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', padding: '12px 16px', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
                <input type="checkbox" checked={form.featured}
                  onChange={e => setForm({ ...form, featured: e.target.checked })}
                  style={{ accentColor: 'var(--accent)', width: '16px', height: '16px' }} />
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text-sub)' }}>Marcar como destacado</div>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Aparece con badge ★ Featured</div>
                </div>
              </label>

              <div style={{ display: 'flex', gap: '10px', paddingTop: '4px' }}>
                <button type="submit" disabled={loading} className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
                  {loading ? 'Guardando...' : editing ? 'Actualizar' : 'Crear proyecto'}
                </button>
                {editing && (
                  <button type="button" onClick={() => { setForm(emptyForm); setEditing(null); }}
                    className="btn btn-outline" style={{ flexShrink: 0 }}>
                    ✕
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* PROJECT LIST */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <p style={{ fontSize: '10px', letterSpacing: '0.25em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Proyectos en BD
              </p>
              <span style={{ fontSize: '11px', padding: '4px 12px', background: 'var(--accent-dim)', color: 'var(--accent)', borderRadius: '100px' }}>
                {projects.length} total
              </span>
            </div>

            {projects.length === 0 ? (
              <div style={{ padding: '60px 32px', border: '1px dashed var(--border)', borderRadius: 'var(--radius)', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>No hay proyectos aún.</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '11px', marginTop: '8px' }}>Crea el primero con el formulario.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {projects.map(p => {
                  const catColor = categoryColors[p.category] || 'var(--accent)';
                  const isDeleting = deleting === p._id;
                  const isEditing = editing === p._id;
                  return (
                    <div key={p._id} style={{
                      background: isEditing ? 'rgba(167,139,250,0.06)' : 'var(--surface)',
                      border: `1px solid ${isEditing ? '#a78bfa55' : 'var(--border)'}`,
                      borderRadius: 'var(--radius)', padding: '20px 24px',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                      gap: '16px', transition: 'all 0.2s', position: 'relative', overflow: 'hidden'
                    }}>
                      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: catColor }} />

                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--text)' }}>{p.title}</h3>
                          <span style={{ fontSize: '9px', padding: '3px 8px', background: catColor + '18', color: catColor, borderRadius: '100px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                            {p.category}
                          </span>
                          {p.featured && (
                            <span style={{ fontSize: '9px', padding: '3px 8px', background: 'var(--accent-dim)', color: 'var(--accent)', borderRadius: '100px' }}>
                              ★ Featured
                            </span>
                          )}
                        </div>
                        <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '10px', lineHeight: '1.7', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {p.description}
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                          {p.tech.map(t => (
                            <span key={t} style={{ fontSize: '9px', padding: '3px 8px', background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--text-muted)', borderRadius: 'var(--radius)' }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexShrink: 0 }}>
                        <button onClick={() => handleEdit(p)} style={{
                          padding: '8px 14px', fontSize: '10px', letterSpacing: '0.15em',
                          textTransform: 'uppercase', cursor: 'pointer',
                          border: '1px solid var(--border-light)', background: 'transparent',
                          color: 'var(--text-sub)', borderRadius: 'var(--radius)',
                          fontFamily: 'var(--font-mono)', transition: 'all 0.2s'
                        }}
                          onMouseEnter={e => { e.currentTarget.style.borderColor = '#a78bfa'; e.currentTarget.style.color = '#a78bfa'; }}
                          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--text-sub)'; }}>
                          Editar
                        </button>
                        <button onClick={() => handleDelete(p._id)} disabled={isDeleting} style={{
                          padding: '8px 14px', fontSize: '10px', letterSpacing: '0.15em',
                          textTransform: 'uppercase', cursor: isDeleting ? 'not-allowed' : 'pointer',
                          border: '1px solid var(--border-light)', background: 'transparent',
                          color: isDeleting ? 'var(--text-muted)' : 'var(--text-sub)',
                          borderRadius: 'var(--radius)', fontFamily: 'var(--font-mono)', transition: 'all 0.2s'
                        }}
                          onMouseEnter={e => { if (!isDeleting) { e.currentTarget.style.borderColor = '#f87171'; e.currentTarget.style.color = '#f87171'; } }}
                          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--text-sub)'; }}>
                          {isDeleting ? '...' : 'Eliminar'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}