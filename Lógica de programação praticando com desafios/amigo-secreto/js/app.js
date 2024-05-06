let listanomes = [];
let lissorteio = document.getElementById('lista-sorteio');
function adicionar(){
    let nome = document.querySelector('.form__input').value;
    let printNomes = document.getElementById('lista-amigos');

    if(nome != '' && !listanomes.includes(nome)){
        listanomes.push(nome);
        printNomes.textContent = listanomes;
        document.querySelector('.form__input').value = '';
    }else{
        alert('Não foi possivel adicionar');
    }
    
}

function reiniciar(){
    listanomes = []
    document.getElementById('lista-amigos').textContent = '';
    document.querySelector('.form__input').value = ''
    lissorteio.innerHTML = '';
}

function sortear(){
    if(listanomes.length >= 3){
        embaralha(listanomes)
        for(let i = 0; i < listanomes.length; i++){
            if(i < listanomes.length - 1){
                lissorteio.innerHTML = lissorteio.innerHTML + listanomes[i] + ' --> ' + listanomes[i + 1] + '<br>';
            }else{
                lissorteio.innerHTML = lissorteio.innerHTML + listanomes[i] + ' --> ' + listanomes[0] + '<br>';
            }
        }
    }else{
        alert("Numero insuficiente de participantes");
        return;
    }
    
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
