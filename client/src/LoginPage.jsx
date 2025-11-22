import { useState } from 'react';
import { loginUser } from './AuthService';

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('guerrero@peru.com');
  const [password, setPassword] = useState('12345678');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      await loginUser(email, password);
      if(onLogin) onLogin();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // ESTILOS RETRO DIGIMON
  const styles = {
    container: {
      display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '20px'
    },
    loginBox: {
      backgroundColor: 'rgba(0, 20, 60, 0.9)', // Fondo oscuro transparente
      padding: '2.5rem',
      borderRadius: '0px', // Bordes cuadrados pixelados
      border: '4px solid #00ffcc', // Borde cian brillante
      boxShadow: '0 0 20px #00ffcc, inset 0 0 20px rgba(0, 255, 204, 0.2)', // Resplandor de neón
      width: '100%', maxWidth: '450px', textAlign: 'center',
      imageRendering: 'pixelated'
    },
    title: { 
      color: '#ffcc00', // Amarillo dorado retro
      marginBottom: '2rem', 
      fontSize: '2rem', 
      fontFamily: "'Press Start 2P', cursive", // Fuente de título pixelada
      textShadow: '4px 4px #ff6600' // Sombra naranja
    },
    form: { display: 'flex', flexDirection: 'column', gap: '1.5rem' },
    input: { 
      padding: '1rem', 
      backgroundColor: '#001a33', 
      border: '2px solid #005580', 
      color: '#00ffcc', 
      fontSize: '1.2rem', 
      fontFamily: "'VT323', monospace",
      outline: 'none'
    },
    button: {
      padding: '1rem', 
      backgroundColor: '#ff6600', // Naranja Digivice
      color: 'white',
      border: '4px solid #ffcc00', // Borde amarillo pixelado
      fontSize: '1.5rem', 
      fontFamily: "'VT323', monospace",
      cursor: 'pointer',
      boxShadow: '4px 4px 0px #993300', // Sombra dura pixelada
      transform: 'translate(-2px, -2px)',
      transition: 'all 0.1s'
    },
    buttonActive: { // Para simular el click
      boxShadow: '0px 0px 0px #993300',
      transform: 'translate(2px, 2px)',
    },
    error: { color: '#ff3333', marginTop: '1rem', fontSize: '1.1rem', textShadow: '0 0 5px red' }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.title}>ACCESO DIGITAL</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="INGRESE CORREO" style={styles.input} required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="INGRESE PASSWORD" style={styles.input} required />
          <button 
            type="submit" 
            style={styles.button}
            onMouseDown={(e) => { e.target.style.transform = 'translate(2px, 2px)'; e.target.style.boxShadow = '0px 0px 0px #993300'; }}
            onMouseUp={(e) => { e.target.style.transform = 'translate(-2px, -2px)'; e.target.style.boxShadow = '4px 4px 0px #993300'; }}
            disabled={isLoading}
          >
            {isLoading ? 'CONECTANDO...' : 'INGRESAR AL DIGIMUNDO'}
          </button>
        </form>
        {error && <p style={styles.error}>ERROR: {error}</p>}
      </div>
    </div>
  );
}