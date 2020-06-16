const express = require('express');
const rotas = express.Router();

const produtoController = require("./controllers/produtoController");

rotas.post('/cadastro', produtoController.Cadastrar);
rotas.get('/lista', produtoController.Listar);
rotas.get('/lista/unico', produtoController.ListarUnicoProduto);
rotas.put('/atualizacao', produtoController.Atualizar);
rotas.delete('/deleta', produtoController.Deletar);

module.exports = rotas;