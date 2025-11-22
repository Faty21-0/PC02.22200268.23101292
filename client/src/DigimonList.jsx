import { useEffect, useState } from 'react';
import { getDigimons } from './DigimonService';
import DigimonCard from './DigimonCard';
import FilterBar from './FilterBar';

export default function DigimonList() {
  const [digimons, setDigimons] = useState([]);
  const [filteredDigimons, setFilteredDigimons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDigimons = async () => {
      const data = await getDigimons();
      setDigimons(data);
      setFilteredDigimons(data);
      setLoading(false);
    };
    fetchDigimons();
  }, []);

  const handleSearch = (texto) => {
    const filtro = digimons.filter((d) => 
      d.name.toLowerCase().includes(texto.toLowerCase()) || 
      d.level.toLowerCase().includes(texto.toLowerCase())
    );
    setFilteredDigimons(filtro);
  };

  if (loading) return <h2 style={{textAlign: 'center', marginTop: '50px', fontSize: '2rem', color: '#00ffcc', textShadow: '0 0 10px #00ffcc'}}>CARGANDO DATOS...</h2>;

  return (
    <div style={{ padding: '30px' }}>
      <h1 style={{ 
        textAlign: 'center', color: '#ffcc00', fontSize: '3rem', 
        fontFamily: "'Press Start 2P', cursive", marginBottom: '40px',
        textShadow: '4px 4px #ff6600'
      }}>
        BASE DE DATOS DIGIMON
      </h1>
      <FilterBar onSearch={handleSearch} />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {filteredDigimons.map((digi) => (
          <DigimonCard key={digi.name} name={digi.name} img={digi.img} level={digi.level} />
        ))}
      </div>
    </div>
  );
}