function errors() {
    let { adultos, crianca, duracao } = pegaelemento();
    let { duraq, qtdAdultos, qtdCrianca } = pegavalor(adultos, crianca, duracao);

if(qtdAdultos <= 0){
    adultos.value = '';
}
if(qtdCrianca <= 0){
    crianca.value = '';
}
if(duraq <= 0){
    duracao.value = '';
}
}


function calc() {
    let { adultos, crianca, duracao, resultado } = pegaelemento();

    let { duraq, qtdAdultos, qtdCrianca } = pegavalor(adultos, crianca, duracao);
    
    let { qtdTotalCarne, qtdTotalBebidas, qtdTotalCerveja } = calculares(duraq, qtdAdultos, qtdCrianca);
    if((qtdAdultos == '')||(duraq == '')){
        alert('Não deixe campos vazios');
    } else {
        return apresenta(resultado, qtdTotalCarne, qtdTotalBebidas, qtdTotalCerveja);
 
 }
    }

function pegaelemento() {
    let adultos = document.getElementById('adultos');
    let crianca = document.getElementById('crianca');
    let duracao = document.getElementById('duracao');
    let resultado = document.getElementById('resultado');
    return { adultos, crianca, duracao, resultado };
}

function pegavalor() {
    let qtdAdultos = adultos.value;
    let qtdCrianca = crianca.value;
    let duraq = duracao.value;
    return { duraq, qtdAdultos, qtdCrianca };
}

function calculares(duraq, qtdAdultos, qtdCrianca) {
    let qtdTotalCarne = carne(duraq) * qtdAdultos + (carne(duraq) / 2 * qtdCrianca);
    let qtdTotalCerveja = cerveja(duraq) * qtdAdultos;
    let qtdTotalBebidas = bebidas(duraq) * qtdAdultos + (bebidas(duraq) / 2 * qtdCrianca);
    return { qtdTotalCarne, qtdTotalBebidas, qtdTotalCerveja };
}

function apresenta(resultado, qtdTotalCarne, qtdTotalBebidas, qtdTotalCerveja) {
    resultado.innerHTML = `<p>${qtdTotalCarne / 1000}Kg de Carnes</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 1000)}L de Bebidas</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 1000)}L de Cerveja</p>`;
}
function carne(duraq) {
     if (duraq >= 6){
         return 650;
     } else {
         return 400;
     }
}
function cerveja(duraq) {
    if (duraq >= 6){
        return 2000;
    } else {
        return 1200;
    }
}
function bebidas(duraq) {
    if (duraq >= 6){
        return 1500;
    } else {
        return 1000;
    }
}
