const express = require('express');
const produtoController = require("../controllers/productController");
const routes = express.Router();

routes.get("/produto/lista", produtoController.listarProduto);
routes.post("/produto", produtoController.cadastrarProduto);

// routes.get('/', (req, res) => {
//     res.send('Olá mundo!')
// });

// routes.post("/cadastrar", (req, res) => {
//     console.log(req.body);
//     // res.send("Cadastrei produto!");
//     res.json(req.body)
// })

module.exports = routes; //Para exportar as rotas



