// AuthService.js
// Este archivo se encarga exclusivamente de hablar con el servidor

export const loginUser = async (email, password) => {
    const response = await fetch('https://storedb-api.onrender.com/node-api/users/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
        throw new Error('Error en la autenticación. Revisa tu correo o contraseña.');
    }

    const data = await response.json();
    
    // Guardamos el token en la memoria del navegador
    if (data.accessToken) {
        localStorage.setItem('token', data.accessToken);
    }

    return data;
};

export const logout = () => {
    localStorage.removeItem('token');
};