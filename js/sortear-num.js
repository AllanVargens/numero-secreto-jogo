const maiorNumero = 100
const menorNumero = 1
const numeroSecreto = numeroAleatorio()


function numeroAleatorio(){
    return parseInt(Math.random() * maiorNumero + 1)
}

console.log(numeroSecreto)

const elementoMaior = document.getElementById('maior-valor')
elementoMaior.innerHTML = maiorNumero

const elementoMenor = document.getElementById('menor-valor')
elementoMenor.innerHTML = menorNumero