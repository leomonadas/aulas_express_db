const db = require('../database');
const { DataTypes } = require('sequelize');

const Products = db.define("Products", {
    //Cada objeto é uma coluna
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
    },
    descricao: {
        type: DataTypes.TEXT,
    },
    preco: {
        type:DataTypes.DOUBLE,
    },
    estoque: {
        type: DataTypes.INTEGER,
    },
    link_foto: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
}, {
    //Aqui é onde se insere o nome da tabela no Banco de Dados
    tablename: "productinfo",
});