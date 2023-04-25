const cadastroProdutos = require('./cadastro_produtos')

try {
    cadastroProdutos.inserir({
        nome: "arroz", 
        preco: 5
    })
    console.log("Cadastrado com Sucesso!")
} catch (err) {
    console.log("Ocorreu um erro!");
    console.log(err);
}

try {
    cadastroProdutos.inserir({
        nome: "feijao", 
        preco: 8
    })
    console.log("Cadastrado com Sucesso!")
} catch (err) {
    console.log("Ocorreu um erro!");
    console.log(err);
}

try {
    cadastroProdutos.inserir({
        nome: "sal", 
        preco: 2
    })
    console.log("Cadastrado com Sucesso!")
} catch (err) {
    console.log("Ocorreu um erro!");
    console.log(err);
}

console.log("Produtos:", cadastroProdutos.listar())


try{
    console.log("Buscar Por Id(2): ",
    cadastroProdutos.buscarPorId(2));
    console.log("Produto encontrado com Sucesso!")
} catch (err) {
    console.log("Ocorreu um erro!");
    console.log(err);
}

try {
    cadastroProdutos.atualizar(1, {nome:"arroz", preco:4.5});
    console.log("Produto Atualizado com Sucesso!")
} catch (err) {
    console.log("Ocorreu um erro!");
    console.log(err);
}

try{
    cadastroProdutos.deletar(3);
    console.log("Produto Deletado com Sucesso!")
} catch (err) {
    console.log("Ocorreu um erro!");
    console.log(err);
}



console.log("Produtos:", cadastroProdutos.listar());
