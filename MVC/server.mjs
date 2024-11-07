import express from 'express';
import {
    obtenerSuperheroePorIdController, buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller
} from './controllers/superheroesController.mjs';

const app = express();
const PORT = 3005;

//rutas y pruebas comentadas
app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
 //http://localhost:3005/superheroes/id/2
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);
//http://localhost:3005/superheroes/atributo/nombreSuperheroe/Superman
app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresDe30Controller);
//http://localhost:3005/superheroes/edad/mayorA30




app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});