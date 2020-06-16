
const produtoDAO = require("../dao/produtoDAO");

var contadorId = 0;

module.exports = {
    
    ListaDeProdutos() {
        return produtoDAO.ListarTodos();
    },

    ListarUnicoProduto(id){
        return produtoDAO.ListarUnico(id)
    },

    Adicionar(produto){
        
        if(validaProduto(produto)){
            produto.id = contadorId++;
            produto.preco = Number(parseFloat(produto.preco).toFixed(2));
            produtoDAO.Adicionar(produto); 

            return produto;
        }

        else return;              
    },

    Deletar(id){
        return produtoDAO.Remover(id);
    },

    Alterar(produtoParaAlterar){
        if(validaProduto(produtoParaAlterar)){
            return produtoDAO.Atualizar(produtoParaAlterar);
        }else{
            return;
        }        
    }

    
}

function validaProduto(produto){
    status = true;

    if(!produto){
        console.log('veio nulo');
        status = false;
    }

    if(produto.nome == ""){
        console.log('veio sem nome');

        status = false;
    }

    if(produto.preco == "" || !parseFloat(produto.preco)){
        console.log('veio sem preco ou nao float');

        status = false;
    }

    return status;
}    
