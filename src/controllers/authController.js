const { Usuario } = require("../models");
const jwt = require("jsonwebtoken");
const secret = requite("../configs/secret");
const bcrypt = require("bcryptjs");

const AuthController = {
    async login(req, res){
        const { email, senha } = req.body;
        //Find recebe um objeto em que podemos colocar o Where onde podemos pesquisar o email do usuario
        const usuario = await Usuario.findOne({
            where: {
                email,
            }
        });
        if(!usuario) {
            return res.status(400).json("Email não cadastrado!");
        };
        if(!bcrypt.compareSync(senha, usuario.senha)){
            return res.status(401).json("Senha invalida!");
        };

        const token = jwt.sign({
            id: usuario.id,
            email: usuario.email,
            nome: usuario.nome,
        },
        secret.key
        );

        return res.json("Logado!");
    },
}

module.exports = AuthController;