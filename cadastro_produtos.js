
let listaProdutos = [];
let idAutoIncrement = 1;

function listar() {
    return listaProdutos;
}

function inserir(produto) {
    if (produto && produto.nome && produto.preco){
        produto.id = idAutoIncrement++;
        listaProdutos.push(produto);
    } else {
        throw {
            numero: 400,
            msg: "ERRO: os parametros de produto estão invalidos."
        };
    }
    
}

function buscarPorId(id) {
    for(let produto of listaProdutos){ 
        if(produto.id === id){
            return produto;
        }
    }
    throw {
        erro: 404,
        msg: "ERRO: Produto nao encontrado"
    }
}


function atualizar(id, produtoAlterar) {
    if (produtoAlterar && produtoAlterar.nome && produtoAlterar.preco){
        for(let indice in listaProdutos){
            if(listaProdutos[indice].id === id) {
                produtoAlterar.id = id;
                listaProdutos[indice] = produtoAlterar;
            }
        }
        throw {
            erro: 404,
            msg: "ERRO: Produto não encontrado."
        } 

    } else {
        throw {
            erro: 400,
            msg: "ERRO: Os dados do produto não estão completos."
        }
    } 
}

function deletar(id) {
    for(let indice in listaProdutos){
        if(listaProdutos[indice].id === id) {
            listaProdutos.splice(indice,1);
        }
    }
    throw {
        erro: 404,
        msg: "ERRO: Produto nao encontrado"
    }
}

module.exports = { 
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
}