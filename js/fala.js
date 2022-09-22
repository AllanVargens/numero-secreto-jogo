const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript// "e.results[0][0].transcript" responsavel por desmembrar, dentro de 'e' na parte de resultados, pegar o item transcript que esta localizado no array posição 0, que esta contido em outro array na posição 0

    exibeChute(chute)

    verificaSeOchutePossuiUmValorValido ()
}

function exibeChute(chute) {
    elementoChute.innerHTML = //crase e nao acento 
    `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start()) // quando o chute acabar, pega o reconhecimento e recomeça