let textoPadrao = 'Insira seu peso (Kg) e sua altura (metros).'

function mostrarTexto(elemento, texto) {
    let parametro = document.querySelector(elemento);
    parametro.innerHTML = texto;
}

function calcularIMC() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    let resultado = peso / (altura * altura);
    resultado = resultado.toFixed(2);

    let classificacao;

    if (resultado < 18.5) {
        classificacao = 'abaixo do peso';
    } else if (resultado >= 18.5) {
        classificacao = 'peso normal';
    } else if (resultado >= 25) {
        classificacao = 'sobrepeso';
    } else {
        classificacao = 'obesidade';
    } 

    let textoResultado = `Seu índice é: ${resultado} e sua classificação de acordo com a tabela é: ${classificacao}.`;
    mostrarTexto('p', textoResultado);

    document.getElementById('reset').removeAttribute('disabled');
}

function limparCampo(elemento) {
    let campo = document.getElementById(elemento);
    campo.value = '';
}

function reiniciar() {
    document.getElementById('reset').setAttribute('disabled', true);
    limparCampo('peso');
    limparCampo('altura');
    mostrarTexto('p', textoPadrao);
}


