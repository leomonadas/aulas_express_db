const { Produto } = require('../models');

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

        res.status(201).json(novoProduto);
    },

//Deletar produto
    async deletarProduto(req, res) {
        try {
            const { codigo } = req.params;

            await Produto.destroy({
                where: {
                    codigo,
                }
            });
            res.status(204);
    } catch (error) {
        return res.status(500).json("Ocorreu algum problema.")
    }
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
//Caso o codigo não seja enviado, vai dar mensagem de erro!
        if (!codigo) res.status(400).json("Código não enviado!");

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