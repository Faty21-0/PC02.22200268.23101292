import { useState } from 'react';
import LoginPage from './LoginPage';
import DigimonList from './DigimonList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // ESTILO GLOBAL RETRO DIGITAL
  const mainContainerStyle = {
    minHeight: '100vh',
    backgroundColor: '#0a0a2a', // Azul oscuro digital
    backgroundImage: 
      'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
    backgroundSize: '20px 20px', // Efecto de grilla digital
    fontFamily: "'VT323', monospace", // Fuente base retro
    color: '#00ffcc' // Color de texto cian brillante
  };

  return (
    <div style={mainContainerStyle}>
      {isLoggedIn ? (
        <DigimonList />
      ) : (
        <LoginPage onLogin={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;