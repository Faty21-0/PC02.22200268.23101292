import { useState } from 'react';
import { loginUser } from './AuthService'; // <--- Aquí importamos la lógica nueva

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('guerrero@peru.com');
  const [password, setPassword] = useState('12345678');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Usamos la función que creamos en el otro archivo
      await loginUser(email, password);
      
      alert('¡Login Exitoso!');
      if(onLogin) onLogin();
    } catch (err) {
      setError(err.message);
    }
  };

  // ESTILOS (Los mismos que ya te gustaron)
  const styles = {
    container: {
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      minHeight: '100vh', backgroundColor: '#f0f2f5',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    loginBox: {
      backgroundColor: 'white', padding: '2rem', borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px', textAlign: 'center',
    },
    title: { color: '#1a1a1a', marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: '600' },
    form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
    input: { padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' },
    button: {
      padding: '0.75rem', backgroundColor: '#007bff', color: 'white',
      border: 'none', borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer',
    },
    error: { color: '#dc3545', marginTop: '1rem', fontSize: '0.9rem' }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.title}>Iniciar Sesión</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" style={styles.input} required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" style={styles.input} required />
          <button type="submit" style={styles.button}>Ingresar</button>
        </form>
        {error && <p style={styles.error}>{error}</p>}
      </div>
    </div>
  );
}