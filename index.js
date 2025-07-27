import express from "express";
const server = express();
const port = 3000;

import routes from "./routes/cursos-routes.js";

server.use(express.json());


server.use('/', routes)

server.listen(port, () => {
    console.log(`Servidor on-line na porta 3000`);    
})