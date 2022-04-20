const express = require('express');
const produtoController = require("../controllers/produtoController");
const routes = express.Router();

routes.get("/produto/lista", produtoController.listarProduto);
routes.post("/produto/cadastro", produtoController.cadastrarProduto);
routes.delete("/produto/:codigo/deletar", produtoController.deletarProduto);
routes.put("/produto/:codigo/atualizar", produtoController.atualizarProduto);


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



