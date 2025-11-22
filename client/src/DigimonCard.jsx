export default function DigimonCard({ name, img, level }) {
  const styles = {
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '10px',
      margin: '10px',
      width: '200px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      backgroundColor: 'white',
      transition: 'transform 0.2s'
    },
    image: { width: '100%', height: 'auto', borderRadius: '4px' },
    name: { color: '#333', fontSize: '1.2rem', margin: '10px 0 5px' },
    level: { color: '#666', fontSize: '0.9rem', fontStyle: 'italic' }
  };

  return (
    <div style={styles.card}>
      <img src={img} alt={name} style={styles.image} />
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.level}>{level}</p>
    </div>
  );
}