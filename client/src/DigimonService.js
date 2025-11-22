export const getDigimons = async () => {
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon');
        if (!response.ok) throw new Error('Error al traer los Digimons');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};