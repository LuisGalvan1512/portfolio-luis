export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1100px', margin: '0 auto', fontSize: '11px', color: 'var(--text-muted)' }}>
      <span>© 2025 Luis Enrique Galván Morales</span>
      <span style={{ letterSpacing: '0.2em' }}>TECSUP · Lima, Perú</span>
    </footer>
  );
}