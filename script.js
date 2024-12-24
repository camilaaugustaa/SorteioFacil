let listaDeNumerosSorteados = [];
let listaDeNumerosSorteadosMega = [];

function exibirTextoNaTela(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    exibirTextoNaTela('', "Bem-vindo ao sorteio!");
}
mensagemInicial()

function sortearNumero() {
    let numeroSorteado = parseInt(Math.random() * 25 + 1);
    return numeroSorteado;
}

function sortearLotofacil() {
    let listaDeNumerosSorteados = [];
    while (listaDeNumerosSorteados.length < 15) {
        numeroSorteado = sortearNumero();
        if (!listaDeNumerosSorteados.includes(numeroSorteado)) {
            listaDeNumerosSorteados.push(numeroSorteado);
        } else {
            numeroSorteado = sortearNumero();
        }
    }
    console.log(listaDeNumerosSorteados);
    exibirTextoNaTela('loto', listaDeNumerosSorteados.join(', '));

}
document.getElementById('sortearLotofacil').addEventListener('click', novoSorteio);

function novoSorteio() {
    listaDeNumerosSorteados = [];
    sortearLotofacil();
}



function sortearNumeroMega() {
    let numeroSorteadoMega = parseInt(Math.random() * 60 + 1)
    return numeroSorteadoMega;
}

function sortearMegaSena() {
     let listaDeNumerosSorteadosMega = [];
        while (listaDeNumerosSorteadosMega.length < 6) {
            numeroSorteadoMega = sortearNumeroMega();
            if (!listaDeNumerosSorteadosMega.includes(numeroSorteadoMega)) {
                listaDeNumerosSorteadosMega.push(numeroSorteadoMega);
            } else {
                numeroSorteadoMega = sortearNumeroMega();
            }
        }
        console.log(listaDeNumerosSorteadosMega);
        exibirTextoNaTela('mega', listaDeNumerosSorteadosMega.join(', '));
    }
document.getElementById('sortearMegaSena').addEventListener('click', sortearMegaSena);

function novoSorteioMega() {
    listaDeNumerosSorteadosMega = [];
    sortearMegaSena();
}