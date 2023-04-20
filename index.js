const express = require('express');
const dotenv = require('dotenv');

// Configurando el env
dotenv.config();

// Creando APP con Express
const app = express();
const port = process.env.PORT || 8000;

// Definiendo la primera ruta
app.get('/', (_req, res) => {
    // Hola mundo
    res.send('Bienvenido al proyecto API restfull con Express, Swagger, Ts, Mongoose')
})

// Escuchando en el puerto
app.listen(port, ()=>{
    console.log(`Express escucha el puerto http://localhost:${port}`);
});