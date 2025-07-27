import express from 'express';
const routes = express.Router();
import {atualiza, criar, deleta, exibirTodos, exibirUnico} from '../controllers/cursos-controller.js';


// Retorna um curso
routes.get('/curso/:id', exibirUnico)

// Retorna todos os cursos
routes.get('/cursos', exibirTodos)

// Criar um novo curso
routes.post('/curso', criar)

// Atualiza um curso
routes.put('/curso/:id', atualiza)

// Deletar um curso
routes.delete('/curso/:id', deleta);


export default routes;