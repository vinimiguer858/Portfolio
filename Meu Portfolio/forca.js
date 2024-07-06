

const img = document.querySelector('.img-forca')
const teclado = document.querySelector('.teclado')
let PalavraSecreta = ''
let tentativas = 6
const letrasCorretas = []
let palavraEmFormacao = ''
teclado.addEventListener('click', (event) => {
    if (!event.target.classList.value.includes('teclado'))

        //só aqui se não tiver a classe teclado
        //}
        event.target.style.backgroundColor = 'rgb(72, 114, 72)'
    const letra = event.target.textContent
    if (PalavraSecreta.includes(letra)) {


        letrasCorretas.push(letra)
    } else {
        tentativas = tentativas - 1
    }
    if (tentativas === 6) {
        img.setAttribute('src', './img/robo_forca_0.png')
    } else if (tentativas === 5) {
        img.setAttribute('src', './img/robo_forca_1.png')
    } else if (tentativas === 4) {
        img.setAttribute('src', './img/robo_forca_2.png')
    } else if (tentativas === 3) {
        img.setAttribute('src', './img/robo_forca_3.png')
    } else if (tentativas === 2) {
        img.setAttribute('src', './img/robo_forca_4.png')
    } else if (tentativas === 1) {
        img.setAttribute('src', './img/robo_forca_5.png')
    } else if (tentativas === 0) {
        img.setAttribute('src', './img/robo_forca_6.png')
        alert('')


    }
    exibirPalavra()


})

//capturas dos valores novos
const inputPalavraSecreta = document.querySelector('.input-palavra-secreta')
const inputDica = document.querySelector('.input-dica')
const dica = document.querySelector('.dica')
const botaoIniciar = document.querySelector('.botao-iniciar')

botaoIniciar.addEventListener('click', (event) => {
    PalavraSecreta = inputPalavraSecreta.value.toUpperCase()
    dica.textContent = inputDica.value
    exibirPalavra()
    inputDica.value = ''
    inputPalavraSecreta.value = ''

})
const saidaPalavraSecreta = document.querySelector('.palavra-secreta')
function exibirPalavra() {
    
    palavraEmFormacao = ''
    for (letra in PalavraSecreta) {
        if (letrasCorretas.includes(PalavraSecreta[letra])) {
            palavraEmFormacao = palavraEmFormacao + ' ' + PalavraSecreta[letra] + ' '
        } else {
            palavraEmFormacao = palavraEmFormacao + ' _ '
        }
    }
    saidaPalavraSecreta.textContent = palavraEmFormacao
}