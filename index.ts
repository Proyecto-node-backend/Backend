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

// Ruta (endpoint) devuelve data:good bye!
app.get('/datos', (req:Request, res:Response) => {
    res.status(200).json({
        "data": {
            "mensaje": "Hello world!"
        }
    });
});

// Ruta hello
app.get("/hello", (req:Request, res:Response) => {
    const name = req.query.name || "anonimo";
    res.status(200).json({
        "data": {
            "mensaje": `Buenos dias ${name}`
        }
    });
});

// Escuchando al puerto
app.listen(port, ()=>{
    console.log(`El puerto que se escucha es: http://localhost:${port}`);
});