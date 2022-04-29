const { Usuario } = require("../models");
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
        }
        if(!bcrypt.compareSync(senha, usuario.senha)){
            return res.status(401).json("Senha invalida!");
        }
        return res.json("Logado!");
    },
}

module.exports = AuthController;