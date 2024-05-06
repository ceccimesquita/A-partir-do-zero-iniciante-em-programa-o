let listaValorProduto = [];
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let quantidade = document.getElementById('quantidade').value;
    let valor = pegaValor('produto') //produto.split('R$')[1];
    let carrinho = document.getElementById('lista-produtos');
    let imprimeTotal = document.querySelector('.carrinho__total');
    if(quantidade >= 1){
        listaValorProduto.push(precoProduto(valor, quantidade));

        carrinho.innerHTML = carrinho.innerHTML + ` <section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valor}</span>
        </section>`

        imprimeTotal.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${valorTotal()}</span>`
        document.getElementById('quantidade').value =  0;
    }else{
        alert('Quantidade de produto insuficiente');
    }
}

function limpar(){
    listaValorProduto = [];
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';

}


function precoProduto(valor, quantidade){
    return valor * quantidade;
}

function valorTotal(){
    let total = 0;
    for(var i = 0; i < listaValorProduto.length ; i++){
        total = total + listaValorProduto[i];
    }
    return total;
}

function pegaValor(tag){
    // Defina a entrada
    let entrada = document.getElementById(tag).value;
    // Use uma expressão regular para encontrar números na string
    let numeros = entrada.match(/\d+/);
    // Verifique se há um número e converta-o para um número inteiro
    let valor = numeros ? parseInt(numeros[0]) : null;
    return valor;
}

