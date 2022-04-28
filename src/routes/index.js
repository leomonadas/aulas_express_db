const express = require('express');
const produtoController = require("../controllers/produtoController");
const usuariosController = require("../controllers/usuariosController");
const routes = express.Router();

routes.get("/produtos", produtoController.listarProduto);
routes.post("/produtos", produtoController.cadastrarProduto);
routes.delete("/produtos/:codigo", produtoController.deletarProduto);
routes.put("/produtos/:codigo", produtoController.atualizarProduto);

routes.post("/usuarios", usuariosController.registro);


// routes.get('/', (req, res) => {
//     res.send('Olá mundo!')
// });

// routes.post("/cadastrar", (req, res) => {
//     console.log(req.body);
//     // res.send("Cadastrei produto!");
//     res.json(req.body)
// })


//Para exportar as rotas
module.exports = routes; 



