const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function verificarAdivinhacao() {
    const palpite = parseInt(document.getElementById('tentativa').value);
    tentativas++;

    if (palpite === numeroSecreto) {
        document.getElementById('resultado').innerHTML = `Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativa(s)!`;
    } else if (palpite < numeroSecreto) {
        document.getElementById('resultado').innerHTML = "O número secreto é maior. Tente novamente!";
    } else {
        document.getElementById('resultado').innerHTML = "O número secreto é menor. Tente novamente!";
    }
}