const Usuario = require('./Usuario');
const PedidoInfo = require('./PedidoInfo');
const ItemPedido = require('./ItemPedido');
const Produto = require('./Produto');

Usuario.hasMany(PedidoInfo, {
    foreignKey: "userInfo_idUser",
});

PedidoInfo.belongsTo(Usuario, {
    foreignKey: "userInfo_idUser",
});

// ItemPedido.hasMany(Produto, {
//     foreignKey: "produto_codigo",
// });

// Produto.hasMany(ItemPedido, {
//     foreignKey: "produto_codigo",
// });

Produto.belongsToMany(PedidoInfo, {
    foreignKey: "produto_codigo",
    through: ItemPedido,
});

PedidoInfo.belongsToMany(Produto, {
    foreignKey: "pedidoInfo_numero",
    through: ItemPedido,
});

module.exports = {
    Usuario,
    PedidoInfo,
    ItemPedido,
    Produto,
};