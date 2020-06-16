const produtoService = require("../services/produtoService");

module.exports = {

    async Cadastrar(request, response){
        const produto = request.body;
    
        produtoCadastrado = produtoService.Adicionar(produto);
        if(produtoCadastrado){
            return response.json(produtoCadastrado);
        }else{
            return response.status(500).json({message:'nao foi possivel cadastrar'});
        }
    },
    
    async Listar(request , response){
        list = produtoService.ListaDeProdutos();
        if (list.length > 0){
            return response.json(produtoService.ListaDeProdutos());
        }else{
            return response.status(404).send();
        }
    },

    async ListarUnicoProduto(request, response){
        const produto_id = request.query.id;

        const produtoRetornado = produtoService.ListarUnicoProduto(produto_id);

        if (produtoRetornado){
            return response.json(produtoRetornado);
        }else{
            return response.status(404).send(); 
        }
    },

    async Deletar(request, response){
        const produto_id = request.query.id;  

        if (produtoService.Deletar(Number(produto_id))){
            return response.status(200).json({message:'deletado'});
        }else{
            return response.status(500).send(); 
        }
    },

    async Atualizar (request, response){
        const produtoParaAlterar = request.body;
        produtoParaAlterar.id = request.query.id;

        const produtoAlterado = produtoService.Alterar(produtoParaAlterar);

        if(produtoAlterado){
            response.json(produtoAlterado);
        }else{
            response.status(500).send();
        }
    }

}