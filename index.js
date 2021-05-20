let $start = document.querySelector('#start')
let $game = document.querySelector('#game')

$start.addEventListener('click', startGame)

function startGame() {
  // console.log('Start');
  $game.style.backgroundColor = '#fff'
  $start.classList.add('hide')

  renderBox()
}

function renderBox() {

}