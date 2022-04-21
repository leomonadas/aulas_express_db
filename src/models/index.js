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


ItemPedido.hasMany(Produto, {
    foreignKey: "produto_codigo",
});

Produto.belongsTo(ItemPedido, {
    foreignKey: "produto_codigo",
});

ItemPedido.hasMany(PedidoInfo, {
    foreignKey: "",
});

PedidoInfo.belongsTo(ItemPedido, {
    foreignKey:"produto_codigo",
});

module.exports = {
    Usuario,
    PedidoInfo,
    ItemPedido,
    Produto,
};