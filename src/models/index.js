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

Produto.hasMany(ItemPedido, {
    foreignKey: "produto_codigo",
});

// ItemPedido.hasMany(PedidoInfo, {
//     foreignKey: "pedidoInfo_numero",
// });

PedidoInfo.hasMany(ItemPedido, {
    foreignKey:"pedidoInfo_numero",
});

module.exports = {
    Usuario,
    PedidoInfo,
    ItemPedido,
    Produto,
};