const express = require('express');
const produtoController = require("../controllers/produtoController");
const usuariosController = require("../controllers/usuariosController");
const usuarioCreateValidation = require("../validations/usuarios/create");
const authController = require("../controllers/authController");
const authLoginValidation = require("../validations/auth/login")
const routes = express.Router();

routes.get("/produtos", produtoController.listarProduto);
routes.post("/produtos", produtoController.cadastrarProduto);
routes.delete("/produtos/:codigo", produtoController.deletarProduto);
routes.put("/produtos/:codigo", produtoController.atualizarProduto);

routes.post("/usuarios", usuarioCreateValidation, usuariosController.registro);
routes.post("/login", authLoginValidation, authController.login);


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



