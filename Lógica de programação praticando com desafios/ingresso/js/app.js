
function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    let ingressoPista = parseInt(document.getElementById('qtd-pista').textContent);
    let ingressoSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let ingressoInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if(tipoIngresso == 'inferior' && ingressoInferior > 0){
        ingressoInferior = atualizaQuantidade(quantidade, ingressoInferior);
        atualizatexto(ingressoPista, ingressoSuperior ,ingressoInferior);
    }else if(tipoIngresso == 'pista' && ingressoPista > 0){
        ingressoPista = atualizaQuantidade(quantidade, ingressoPista);
        atualizatexto(ingressoPista, ingressoSuperior ,ingressoInferior);
    }else if(tipoIngresso == 'superior' && ingressoSuperior > 0){
        ingressoSuperior = atualizaQuantidade(quantidade, ingressoSuperior);
        atualizatexto(ingressoPista, ingressoSuperior ,ingressoInferior);
    }else{
        alert("Ingressos esgotados");
    }

}

function atualizaQuantidade(quantidade, tipoingresso){
    return tipoingresso - quantidade;
}

function atualizatexto(ingressoPista, ingressoSuperior, ingressoInferior){
    let lista = document.querySelector('.lista')
    lista.innerHTML = `<li>Pista<span id="qtd-pista">${ingressoPista}</span></li>
        <li>Cadeira superior<span id="qtd-superior">${ingressoSuperior}</span></li>     
        <li>Cadeira inferior<span id="qtd-inferior">${ingressoInferior}</span></li>`
}


