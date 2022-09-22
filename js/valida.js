function verificaSeOchutePossuiUmValorValido () {
    const numero =+ chute // = numero  + chute / como numero n tem valor fica com o valor do chute, que altomaticamente é convertido pra um numero inteiro ja que é uma conta.
    if(chuteForInvalido(numero)) { // Number.isNaN checa se a variavel em questao é um numero ou nao
        elementoChute.innerHTML += '<div>Valor Invalido</div>'
        return
    }
    if(numeroForMaiorOuMenorQoValorPermitdo(numero)) {
       elementoChute.innerHTML += `
       <div>valor invalido: o numero secreto deve estar entre ${menorNumero} e ${maiorNumero}</div>
       `
       return
    }
    if(numero === numeroSecreto) { 
       /* pra redesenhar o body */
       document.body.innerHTML = ` 
        <h1> Você acertou! Parabéns! </h1>
        <h3> O numero secreto era ${numeroSecreto}! <i class="fa-sharp fa-solid fa-face-laugh-beam"></i></h3>

        <button id="botao" class="btn-jogar">Reinicar</button>
        `
    }else if(numero < numeroSecreto) {
        elementoChute.innerHTML += //crase e nao acento 
    `
        <div>o numero secreto é maior <i class="fa-solid fa-up-long"></i></div>
    `
    }else if(numero > numeroSecreto) {
        elementoChute.innerHTML += //crase e nao acento 
    `
        <div>o numero secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
    `
    }
    else{
        document.body.innerHTML = ` 
        <h2> Passou perto!</h2>
        <h3>o numero é menor que esse!</h3>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQoValorPermitdo(numero){
    return numero > maiorNumero || numero < menorNumero
}

document.body.addEventListener('click', (e) => {
    if (e.target.id == 'botao') {
        window.location.reload()
    }
})



