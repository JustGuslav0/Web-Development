function adicionarProduto(id, nome, valor, qtd) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    carrinho.push({id, nome, valor, qtd})

    localStorage.setItem('carrinho',JSON.stringify(carrinho));
}

function exibirCarrinho(){
    let carrinho = JSON.parse(localStorage.getItem('carrinho'))
    
    if (carrinho && carrinho.length > 0){
        const listaProdutos = document.getElementById('lista-produtos');

        listaProdutos.innerHTML = '';
        
        carrinho.forEach(produto => {
            const li = document.createElement('li');
            li.textContent = `${produto.nome} - Qtd: ${produto.qtd} - Valor: ${produto.valor.toFixed(2)}`;
            listaProdutos.appendChild(li);
        });
    }
    else{
        const listaProdutos = document.getElementById('lista-produtos');

        listaProdutos.innerHTML = "O carrinho está vazio!"
    }
}
exibirCarrinho();