const express = require('express');
//Importa as rotas
const routes = require("./routes"); 

const db = require("./database");

const app = express();

db.hasConection();

//É importante essa estrutura estar antes das rotas, pois é necessário ativar a estrutura de JSON 
app.use(express.json()); 

//Utiliza as rotas que foram definidas em ./routes!
app.use(routes); 

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))