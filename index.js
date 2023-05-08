const calc = document.getElementsByClassName('calc')
const btn = document.querySelector('#btn')
const firstComopnent = document.getElementById('primaryNumber')
const secondComponent = document.getElementById('secondaryNumber')
let answer = document.getElementById('guess')

const randomNumber = Math.floor(Math.random() * 100) ;
const randomNumber2 = Math.floor(Math.random() * 100) ;

firstComopnent.innerText = randomNumber
secondComponent.innerText = randomNumber2
let total = randomNumber + randomNumber2


function guessAnswer() {
    let userAnswer = parseInt(answer.value) /// parseInt stringi meji grvac tive number a sarqum
  if (userAnswer === total) {
    alert('you are right'), window.location.reload()
  } else {
    alert('noo'),window.location.reload()
  }
}

btn.addEventListener('click', foo)

