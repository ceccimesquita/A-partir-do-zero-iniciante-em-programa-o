let jogosAlugados = 0;

function alterarStatus(id){
    console.log(id);
    let gameClicado = document.getElementById(`game-${id}`);
    let img = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if(img.classList.contains('dashboard__item__img--rented') && botao.classList.contains('dashboard__item__button--return')){
        if(confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)){
            img.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados--;
        }
    }else{
        img.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
    }

    exibirquantidadedejogosalugado(jogosAlugados);
}

function exibirquantidadedejogosalugado(quantidade){
    console.log(`Total de jogos alugados: ${quantidade}`);
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length; //pega quantidade
    exibirquantidadedejogosalugado();
});