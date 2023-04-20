import express, { Express, Response, Request } from 'express';
import dotenv from 'dotenv';

// Configurando dotenv
dotenv.config();

// Creando la APP con express
const app:Express = express();
const port:string | number = process.env.PORT || 8000;

// Primera ruta
app.get('/', (req:Request, res:Response) => {
    res.send("Hola mundo desde el backend");
});

// Escuchando al puerto
app.listen(port, ()=>{
    console.log(`El puerto que se escucha es: http://localhost:${port}`);
});