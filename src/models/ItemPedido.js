const db = require('../database');
const { DataTypes } = require('sequelize');
const PedidoInfo = require('./PedidoInfo');
const Produto = require('./Produto');

const ItemPedido = db.define("ItemPedido", {
    num_sequencial: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    pedidoInfo_numero: {
        type: DataTypes.INTEGER,
        references:{
            model: PedidoInfo,
            key: 'numero'
        }
    },
    produto_codigo: {
        type: DataTypes.INTEGER,
        references:{
            model: Produto,
            key: 'codigo'
        }
    },

    quantidade: {
        type: DataTypes.INTEGER,
    },
    valor: {
        type:DataTypes.DOUBLE,
    },
}, {
    //Sequelize pluraliza o nome da tabela, para isso não acontecer, usa-se o código abaixo
    freezeTableName: true,
    //Para não chamar as colunas createdAt e updatedAt
    timestamps: false,
    //Aqui é onde se insere o nome da tabela no Banco de Dados
    tablename: "item_Pedido",
});

module.exports = ItemPedido;