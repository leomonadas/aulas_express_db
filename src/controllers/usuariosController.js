const { Usuario } = require("../models");
const bcrypt = require("bcryptjs");

const UsuariosController = {
    async registro(req, res) {
        const { name, email, phone, senha } = req.body;
        //Criptografia de senha, mais segurança para o sistema
        const newSenha = bcrypt.hashSync(senha, 10);

        const newUsuario = await Usuario.create({ name, email, phone, senha: newSenha });

        return res.status(201).json(newUsuario);
    }
};

module.exports = UsuariosController;