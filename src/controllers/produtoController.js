const { Produto } = require('./models');

const produtoController = {
    listarProduto: async (req, res) => {

        const listaDeProdutos = await Produto.findAll()

        res.json(listaDeProdutos);
    },
//Cadastrar produto
    async cadastrarProduto(req, res) {
        const {
            nome,
            descricao,
            preco,
            estoque,
            link_foto,
        } = req.body;

        const novoProduto = await Produto.create({
            nome,
            descricao,
            preco,
            estoque,
            link_foto,
        });

        res.json(novoProduto);
    },

//Deletar produto
    async deletarProduto(req, res) {
        const { codigo } = req.params;

        await Produto.destroy({
            where: {
                codigo,
            }
        });
        res.json("Produto deletado!")
    },

    async atualizarProduto(req, res) {
        const { codigo } = req.params; 
        const {
            nome,
            descricao,
            preco,
            estoque,
            link_foto,
        } = req.body;

        const produtoAtualizado = await Produto.update({
            nome,
            descricao,
            preco,
            estoque,
            link_foto,
        }, {
            where: {
                codigo,
            }
        });

        res.json("Produto Atualizado")
    },
};

module.exports = produtoController;