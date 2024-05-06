let listadeNumerosSorteados = [];
let printNumerosSorteados = document.getElementById('resultado');


function sortear(){
    let quantidadeNumeros = parseInt(document.getElementById('quantidade').value);
    let minNumero = parseInt(document.getElementById('de').value);
    let maxNumero = parseInt(document.getElementById('ate').value);

    if(listadeNumerosSorteados.length == (maxNumero - minNumero) + 1){
        alert('Todos os possiveis números já foram sorteados, por favor clicar em reiniciar');
        return 0;
    }

    if (minNumero >= maxNumero) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
      }

    let numeroSorteado

    for(var i = 0; i < quantidadeNumeros ; i++){
        numeroSorteado = obterNumeroAleatorio(minNumero, maxNumero);
        while(listadeNumerosSorteados.includes(numeroSorteado)){
            numeroSorteado = obterNumeroAleatorio(minNumero, maxNumero);
        }
        
    }
    listadeNumerosSorteados.push(numeroSorteado);
    let fraseNumeroSorteados = quantidadeNumeros > 1 ?  `<label class="texto__paragrafo">Números sorteados:  ${listadeNumerosSorteados}</label>` :  `<label class="texto__paragrafo">Número sorteado:  ${listadeNumerosSorteados}</label>`
    printNumerosSorteados.innerHTML = fraseNumeroSorteados;  
    alterarStatusBotao();

    
}

function alterarStatusBotao(){
    let bntReiniciar = document.getElementById('btn-reiniciar');
    bntReiniciar.removeAttribute('desabilitado');

    if(bntReiniciar.classList.contains('container__botao-desabilitado')){
        bntReiniciar.classList.remove('container__botao-desabilitado');
        bntReiniciar.classList.add('container__botao');
    }else{
        bntReiniciar.classList.remove('container__botao');
        bntReiniciar.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    listadeNumerosSorteados = [];
    let quantidadeNumeros =document.getElementById('quantidade');
    let minNumero = document.getElementById('de');
    let maxNumero = document.getElementById('ate');
    quantidadeNumeros.value = '';
    minNumero.value = '';
    maxNumero.value = '';
    printNumerosSorteados.innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}