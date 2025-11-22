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

  if (loading) return <h2 style={{textAlign: 'center', marginTop: '20px'}}>Cargando Digimons...</h2>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', backgroundColor: '#f4f4f9', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#007bff' }}>Lista de Digimons</h1>
      <FilterBar onSearch={handleSearch} />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredDigimons.map((digi) => (
          <DigimonCard key={digi.name} name={digi.name} img={digi.img} level={digi.level} />
        ))}
      </div>
    </div>
  );
}