let $start = document.querySelector('#start');
let $game = document.querySelector('#game');

let score = 0;

$start.addEventListener('click', startGame);
$game.addEventListener('click', handleBoxClick)

function startGame() {
  // console.log('Start');
  $game.style.backgroundColor = '#fff';
  $start.classList.add('hide');

  renderBox();
}

function handleBoxClick(event) {
  // console.log(event.target.dataset);
  if (event.target.dataset.box) {
    score++;
    renderBox();
  }
}

function renderBox() {
  $game.innerHTML = '';
  let box = document.createElement('div');
  let boxSize = getRandom(30, 100);
  let gameSize = $game.getBoundingClientRect();
  let maxTop = gameSize.height - boxSize;
  let maxLeft = gameSize.width - boxSize;
  // console.log(gameSize);


  box.style.height = box.style.width = boxSize + 'px';
  box.style.position = 'absolute';
  box.style.backgroundColor = '#000';
  box.style.top = getRandom(0, maxTop) + 'px';
  box.style.left = getRandom(0, maxLeft) + 'px';
  box.style.cursor = 'pointer';
  box.setAttribute('data-box', 'true');

  $game.insertAdjacentElement('afterbegin', box)
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}