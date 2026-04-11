const SVG_NS = 'http://www.w3.org/2000/svg'

const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// Coordenadas de la línea ganadora en unidades de grilla (viewBox 0 0 3 3),
// con un pequeño margen para que no toque los bordes de las celdas extremas.
const WIN_LINE_COORDS = {
  '0,1,2': [0.25, 0.5, 2.75, 0.5],
  '3,4,5': [0.25, 1.5, 2.75, 1.5],
  '6,7,8': [0.25, 2.5, 2.75, 2.5],
  '0,3,6': [0.5, 0.25, 0.5, 2.75],
  '1,4,7': [1.5, 0.25, 1.5, 2.75],
  '2,5,8': [2.5, 0.25, 2.5, 2.75],
  '0,4,8': [0.35, 0.35, 2.65, 2.65],
  '2,4,6': [2.65, 0.35, 0.35, 2.65]
}

const cells = Array.from(document.querySelectorAll('.cell'))
const statusText = document.getElementById('status-text')
const turnDot = document.getElementById('turn-dot')
const resetBtn = document.getElementById('reset-btn')
const winLine = document.getElementById('win-line')
const winLinePath = document.getElementById('win-line-path')

let board = Array(9).fill(null)
let currentPlayer = 'X'
let gameOver = false

function createMark(symbol) {
  const svg = document.createElementNS(SVG_NS, 'svg')
  svg.setAttribute('viewBox', '0 0 100 100')

  if (symbol === 'X') {
    ;[
      [15, 15, 85, 85, 0],
      [85, 15, 15, 85, 90]
    ].forEach(([x1, y1, x2, y2, delay]) => {
      const path = document.createElementNS(SVG_NS, 'path')
      path.setAttribute('class', 'mark-path')
      path.setAttribute('d', `M${x1},${y1} L${x2},${y2}`)
      path.setAttribute('pathLength', '100')
      path.style.animationDelay = `${delay}ms`
      svg.appendChild(path)
    })
  } else {
    const circle = document.createElementNS(SVG_NS, 'circle')
    circle.setAttribute('class', 'mark-path')
    circle.setAttribute('cx', '50')
    circle.setAttribute('cy', '50')
    circle.setAttribute('r', '35')
    circle.setAttribute('pathLength', '100')
    svg.appendChild(circle)
  }

  return svg
}

function setStatus(text) {
  statusText.textContent = text
}

function updateTurnDot() {
  turnDot.classList.toggle('turn-dot--o', currentPlayer === 'O')
}

function checkResult() {
  for (const combo of WINNING_COMBOS) {
    const [a, b, c] = combo
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], combo }
    }
  }
  if (board.every((cell) => cell !== null)) return { winner: 'draw', combo: null }
  return null
}

function drawWinLine(combo) {
  const [x1, y1, x2, y2] = WIN_LINE_COORDS[combo.join(',')]
  winLinePath.setAttribute('x1', x1)
  winLinePath.setAttribute('y1', y1)
  winLinePath.setAttribute('x2', x2)
  winLinePath.setAttribute('y2', y2)
  // Reflow para poder re-disparar la animación de dibujado en la siguiente partida.
  winLine.classList.remove('is-drawn')
  void winLine.offsetWidth
  winLine.classList.add('is-drawn')
}

function handleCellClick(cell) {
  if (gameOver) return
  const index = Number(cell.dataset.index)
  if (board[index]) return

  board[index] = currentPlayer
  cell.appendChild(createMark(currentPlayer))
  cell.classList.add(currentPlayer === 'X' ? 'is-x' : 'is-o')
  cell.disabled = true

  const result = checkResult()

  if (result) {
    gameOver = true
    cells.forEach((c) => (c.disabled = true))

    if (result.combo) {
      result.combo.forEach((i) => cells[i].classList.add('is-win'))
      drawWinLine(result.combo)
      setStatus(`Player ${result.winner} wins! 🎉`)
    } else {
      setStatus("It's a draw.")
    }
    return
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  updateTurnDot()
  setStatus(`Player ${currentPlayer}'s turn`)
}

function resetGame() {
  board = Array(9).fill(null)
  currentPlayer = 'X'
  gameOver = false
  cells.forEach((cell) => {
    cell.innerHTML = ''
    cell.className = 'cell'
    cell.disabled = false
  })
  winLine.classList.remove('is-drawn')
  updateTurnDot()
  setStatus("Player X's turn")
}

cells.forEach((cell) => cell.addEventListener('click', () => handleCellClick(cell)))
resetBtn.addEventListener('click', resetGame)
