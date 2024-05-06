alert('Bem Vindo ao jogo do numero secreto');
let numeroMax = 100;
let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
let chute;
let contador = 1;


while(numeroSecreto != chute){
    chute = prompt(`Escolha um numero entre 1 e ${numeroMax}`);
    //console.log(contador);
        // se o chute for igual ao numero secreto 
    if (numeroSecreto == chute ) {
       break;
    }else{ //senão faça isso 
        if(numeroSecreto > chute){
            alert('numero secreto é maior');
        }else{
            alert('numero secreto é menor');
        }    
        contador++;
        //console.log(contador);
    }
}

let palavraTentativa = contador > 1 ? 'tentativas' : 'tentativa';

alert(`acertou o numero secreto ${numeroSecreto} com ${contador} ${palavraTentativa}.` );  //alert('acertou o numero sereto' + numeroSecreto);

//if(contador == 1){
//    alert(`acertou o numero secreto ${numeroSecreto} com ${contador} tentativa.` );  //alert('acertou o numero sereto' + numeroSecreto);
//}else{
//    alert(`acertou o numero secreto ${numeroSecreto} com ${contador} tentativas.` );  //alert('acertou o numero sereto' + numeroSecreto);
//}

