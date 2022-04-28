const db = require('../database');
const { DataTypes } = require('sequelize');

const Usuario = db.define("userInfo", {
    idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    phone: {
        type:DataTypes.INTEGER,
    },
    senha: {
        type:DataTypes.STRING,
    },
}, {
    //Sequelize pluraliza o nome da tabela, para isso não acontecer, usa-se o código abaixo
    freezeTableName: true,
    //Para não chamar as colunas createdAt e updatedAt
    timestamps: false,
    //Aqui é onde se insere o nome da tabela no Banco de Dados
    tablename: "userInfo",
});

module.exports = Usuario;