export default function DigimonCard({ name, img, level }) {
  const styles = {
    card: {
      border: '3px solid #005580', // Borde azul oscuro
      borderRadius: '0px', // Cuadrado pixelado
      padding: '15px',
      width: '220px',
      textAlign: 'center',
      backgroundColor: 'rgba(0, 20, 60, 0.8)', // Fondo oscuro semi-transparente
      boxShadow: '0 0 10px rgba(0, 85, 128, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.5)',
      transition: 'all 0.2s',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden'
    },
    imageContainer: {
      border: '2px solid #00ffcc',
      padding: '5px',
      backgroundColor: '#000',
      marginBottom: '15px',
      boxShadow: '0 0 10px rgba(0, 255, 204, 0.3)'
    },
    image: { width: '100%', height: 'auto', display: 'block' },
    name: { 
      color: '#ffcc00', fontSize: '1.4rem', margin: '10px 0 5px', 
      fontFamily: "'Press Start 2P', cursive", textShadow: '2px 2px #ff6600'
    },
    level: { 
      color: '#00ffcc', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px' 
    },
    scanline: { // Efecto de línea de escaneo decorativo
      position: 'absolute', top: 0, left: 0, width: '100%', height: '2px',
      backgroundColor: 'rgba(0, 255, 255, 0.3)', animation: 'scan 3s linear infinite',
      pointerEvents: 'none'
    }
  };

  return (
    <div 
      style={styles.card}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#00ffcc'; e.currentTarget.style.boxShadow = '0 0 20px #00ffcc'; e.currentTarget.style.transform = 'scale(1.05)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#005580'; e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 85, 128, 0.5)'; e.currentTarget.style.transform = 'scale(1)'; }}
    >
      <div style={styles.imageContainer}>
        <img src={img} alt={name} style={styles.image} />
      </div>
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.level}>Let: {level}</p>
      <div style={styles.scanline}></div>
      <style>
        {`@keyframes scan { 0% { top: -10%; } 100% { top: 110%; } }`}
      </style>
    </div>
  );
}