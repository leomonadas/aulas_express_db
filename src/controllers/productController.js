const productController = {
    listarProduto: (req, res) => {
        res.json([{ nome: "Produto 1" }, { nome: "Produto 2" }]);
    },

    cadastrarProduto(req, res) {
        console.log(req.body);
        res.json("Produto Cadastrado");
    },
};

module.exports = productController;