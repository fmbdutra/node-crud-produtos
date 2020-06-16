
const express = require('express');
const rotas = require('./rotas');
const cors  = require('cors');

const app = express();
const port = 9091;

app.use(express.json());
app.use(cors());

app.use('/produtos', rotas);

// create, read, update, delete

//Inicia servidor
app.listen(port);
console.log('API Funcionando');
console.log("produtos/cadastrar - json produto e preco");
console.log("produtos/listar - retorna lista");
console.log("produtos/listar/unico - mandar query do 'id'");
console.log("produtos/atualizar - mandar json com nome e preco e query do 'id'");
console.log("produtos/deletar - mandar query do 'id'");