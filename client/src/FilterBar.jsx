export default function FilterBar({ onSearch }) {
  return (
    <div style={{ marginBottom: '40px', textAlign: 'center' }}>
      <input
        type="text"
        placeholder="BUSCAR POR NOMBRE O NIVEL..."
        onChange={(e) => onSearch(e.target.value)}
        style={{
          padding: '15px', width: '100%', maxWidth: '500px',
          backgroundColor: '#001a33', border: '3px solid #00ffcc',
          color: '#00ffcc', fontSize: '1.5rem', fontFamily: "'VT323', monospace",
          outline: 'none', boxShadow: '0 0 15px rgba(0, 255, 204, 0.3)'
        }}
      />
    </div>
  );
}