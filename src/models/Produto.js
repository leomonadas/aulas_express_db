const db = require('../database');
const { DataTypes } = require('sequelize');

const Produto = db.define("Produto", {
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
    }
    // },
    // createdAt: {
    //     type: DataTypes.DATE,
    // },
    // updatedAt: {
    //     type: DataTypes.DATE,
    // },
}, {
    //Sequelize pluraliza o nome da tabela, para isso não acontecer, usa-se o código abaixo
    freezeTableName: true,
    //Para não chamar as colunas createdAt e updatedAt
    timestamps: false,
    //Aqui é onde se insere o nome da tabela no Banco de Dados
    tablename: "produto",
});

module.exports = Produto;