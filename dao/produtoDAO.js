const listaDeProdutos = [];

module.exports = {
    
    ListarTodos() {
        return listaDeProdutos;
    },

    ListarUnico(id){
        for (index in listaDeProdutos){
            if (listaDeProdutos[index].id == id){
               return listaDeProdutos[index];
            }
        }  
    },

    Adicionar(produto){
        listaDeProdutos.push(produto);
    },

    Remover(id){
        var removido = false;     

        for (index in listaDeProdutos){
            if (listaDeProdutos[index].id == id){
                listaDeProdutos.splice(id, 1);

                removido = true;
            }
        }  

        return removido;
    },

    Atualizar(produtoParaAlterar){
        var produtoAlterado = null;
        
        for (index in listaDeProdutos){
            var produto = listaDeProdutos[index];
            if (produto.id == produtoParaAlterar.id){
                produto.nome = produtoParaAlterar.nome;
                produto.preco = produtoParaAlterar.preco;
                
                produtoAlterado = produto;
            }
        }  

        return produtoAlterado;
    }
}

