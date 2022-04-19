const express = require('express');
const routes = require("./routes"); //Importa as rotas
const app = express();

app.use(express.json()); //É importante essa estrutura estar antes das rotas, pois é necessário ativar a estrutura de JSON 

app.use(routes); //Utiliza as rotas que foram definidas em ./routes!

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))