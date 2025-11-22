export default function FilterBar({ onSearch }) {
  return (
    <div style={{ marginBottom: '20px', textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Buscar Digimon por nombre o nivel..."
        onChange={(e) => onSearch(e.target.value)}
        style={{
          padding: '10px', width: '300px', borderRadius: '5px',
          border: '1px solid #ccc', fontSize: '1rem'
        }}
      />
    </div>
  );
}