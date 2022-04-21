const db = require('../database');
const { DataTypes } = require('sequelize');
const Usuario = require('./Usuario');

const PedidoInfo = db.define("Pedidoinfo", {
    numero: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    data_pedido: {
        type: DataTypes.DATE,
    },
    valor: {
        type: DataTypes.DOUBLE,
    },
    userInfo_idUser: {
        type: DataTypes.INTEGER,
        references:{
            model: Usuario,
            key: 'id'
        }
    },
}, {
    //Sequelize pluraliza o nome da tabela, para isso não acontecer, usa-se o código abaixo
    freezeTableName: true,
    //Para não chamar as colunas createdAt e updatedAt
    timestamps: false,
    //Aqui é onde se insere o nome da tabela no Banco de Dados
    tablename: "pedidoInfo",
});

module.exports = PedidoInfo;