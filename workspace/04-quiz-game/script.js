// ---------- DOM refs ----------
const startScreen = document.getElementById('start-screen')
const quizScreen = document.getElementById('quiz-screen')
const resultScreen = document.getElementById('result-screen')
const startButton = document.getElementById('start-btn')
const restartButton = document.getElementById('restart-btn')
const questionText = document.getElementById('question-text')
const answersContainer = document.getElementById('answers-container')
const currentQuestionSpan = document.getElementById('current-question')
const totalQuestionsSpan = document.getElementById('total-questions')
const scoreSpan = document.getElementById('score')
const progressFill = document.getElementById('progress')
const finalScoreSpan = document.getElementById('final-score')
const maxScoreSpan = document.getElementById('max-score')
const resultMessage = document.getElementById('result-message')
const scoreRingFill = document.getElementById('score-ring-fill')
const confettiLayer = document.getElementById('confetti-layer')

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const ICON_CHECK =
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
const ICON_CROSS =
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'

// ---------- Quiz data ----------
const quizQuestions = [
  {
    question: 'Which CSS unit scales relative to the root font size?',
    answers: [
      { text: 'vh', correct: false },
      { text: 'em', correct: false },
      { text: 'rem', correct: true },
      { text: 'ch', correct: false }
    ]
  },
  {
    question: 'Which array method returns a new array by transforming every item?',
    answers: [
      { text: 'forEach()', correct: false },
      { text: 'map()', correct: true },
      { text: 'filter()', correct: false },
      { text: 'reduce()', correct: false }
    ]
  },
  {
    question: 'What does the acronym DOM stand for?',
    answers: [
      { text: 'Document Object Model', correct: true },
      { text: 'Data Object Mapper', correct: false },
      { text: 'Digital Output Manager', correct: false },
      { text: 'Document Oriented Markup', correct: false }
    ]
  },
  {
    question: "Which HTTP status code means 'Not Found'?",
    answers: [
      { text: '200', correct: false },
      { text: '301', correct: false },
      { text: '500', correct: false },
      { text: '404', correct: true }
    ]
  },
  {
    question: 'Which GSAP method chains multiple animations into a sequence?',
    answers: [
      { text: 'gsap.timeline()', correct: true },
      { text: 'gsap.sequence()', correct: false },
      { text: 'gsap.chain()', correct: false },
      { text: 'gsap.stagger()', correct: false }
    ]
  }
]

// ---------- State ----------
let currentQuestionIndex = 0
let score = 0
let answersDisabled = false

totalQuestionsSpan.textContent = quizQuestions.length
maxScoreSpan.textContent = quizQuestions.length

// ---------- Screen transitions ----------
function goToScreen(nextScreen) {
  const current = document.querySelector('.screen.is-active')
  if (current === nextScreen) return

  const tl = gsap.timeline()

  if (current) {
    if (prefersReducedMotion) {
      tl.to(current, { opacity: 0, duration: 0.15 })
    } else {
      tl.to(current, { opacity: 0, y: -12, duration: 0.25, ease: 'power2.inOut' })
    }
    tl.call(() => current.classList.remove('is-active'))
  }

  tl.call(() => {
    nextScreen.classList.add('is-active')
    if (prefersReducedMotion) {
      gsap.set(nextScreen, { opacity: 1, y: 0 })
    } else {
      gsap.fromTo(nextScreen, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' })
    }
  })
}

// ---------- Quiz flow ----------
startButton.addEventListener('click', startQuiz)
restartButton.addEventListener('click', restartQuiz)

function startQuiz() {
  currentQuestionIndex = 0
  score = 0
  scoreSpan.textContent = 0
  progressFill.style.width = '0%'

  goToScreen(quizScreen)
  showQuestion()
}

function showQuestion() {
  answersDisabled = false

  const question = quizQuestions[currentQuestionIndex]
  currentQuestionSpan.textContent = currentQuestionIndex + 1

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100
  gsap.to(progressFill, { width: progressPercent + '%', duration: 0.5, ease: 'power2.inOut' })

  if (prefersReducedMotion) {
    questionText.textContent = question.question
  } else {
    gsap.to(questionText, {
      opacity: 0,
      y: -6,
      duration: 0.15,
      ease: 'power2.in',
      onComplete: () => {
        questionText.textContent = question.question
        gsap.fromTo(questionText, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' })
      }
    })
  }

  answersContainer.innerHTML = ''

  question.answers.forEach((answer) => {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'answer-btn'
    button.dataset.correct = answer.correct

    const label = document.createElement('span')
    label.textContent = answer.text

    const icon = document.createElement('span')
    icon.className = 'answer-icon'

    button.append(label, icon)
    button.addEventListener('click', selectAnswer)
    answersContainer.appendChild(button)
  })

  const buttons = answersContainer.querySelectorAll('.answer-btn')
  if (prefersReducedMotion) {
    gsap.set(buttons, { opacity: 1, y: 0 })
  } else {
    gsap.fromTo(
      buttons,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out', stagger: 0.06, delay: 0.1 }
    )
  }
}

function selectAnswer(event) {
  if (answersDisabled) return
  answersDisabled = true

  const selectedButton = event.currentTarget
  const isCorrect = selectedButton.dataset.correct === 'true'
  const buttons = Array.from(answersContainer.children)

  buttons.forEach((button) => {
    button.disabled = true
    const icon = button.querySelector('.answer-icon')

    if (button.dataset.correct === 'true') {
      button.classList.add('is-correct')
      icon.innerHTML = ICON_CHECK
    } else if (button === selectedButton) {
      button.classList.add('is-incorrect')
      icon.innerHTML = ICON_CROSS
    } else {
      button.classList.add('is-muted')
    }
  })

  if (isCorrect) {
    score++
    scoreSpan.textContent = score
    if (!prefersReducedMotion) {
      gsap.fromTo(scoreSpan, { scale: 1.35 }, { scale: 1, duration: 0.35, ease: 'back.out(3)' })
    }
  } else if (!prefersReducedMotion) {
    selectedButton.classList.add('is-shaking')
  }

  window.setTimeout(
    () => {
      currentQuestionIndex++
      if (currentQuestionIndex < quizQuestions.length) {
        showQuestion()
      } else {
        showResults()
      }
    },
    prefersReducedMotion ? 550 : 950
  )
}

function showResults() {
  goToScreen(resultScreen)

  const percentage = score / quizQuestions.length
  const circumference = 2 * Math.PI * 60
  const targetOffset = circumference - circumference * percentage

  resultMessage.textContent = getResultMessage(percentage)

  if (prefersReducedMotion) {
    finalScoreSpan.textContent = score
    scoreRingFill.style.strokeDasharray = `${circumference}`
    scoreRingFill.style.strokeDashoffset = `${targetOffset}`
  } else {
    scoreRingFill.style.strokeDasharray = `${circumference}`
    gsap.fromTo(
      scoreRingFill,
      { strokeDashoffset: circumference },
      { strokeDashoffset: targetOffset, duration: 1.1, delay: 0.3, ease: 'power3.out' }
    )

    const counter = { value: 0 }
    gsap.to(counter, {
      value: score,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out',
      onUpdate: () => {
        finalScoreSpan.textContent = Math.round(counter.value)
      }
    })
  }

  if (percentage === 1 && !prefersReducedMotion) {
    window.setTimeout(launchConfetti, 500)
  }
}

function getResultMessage(percentage) {
  if (percentage === 1) return 'Flawless! Perfect score.'
  if (percentage >= 0.8) return 'Impressive — almost flawless!'
  if (percentage >= 0.6) return 'Solid! You clearly know your stuff.'
  if (percentage >= 0.4) return "Not bad — a bit more practice and you've got this."
  return 'Everyone starts somewhere. Try again!'
}

function restartQuiz() {
  gsap.set(scoreRingFill, { strokeDashoffset: 2 * Math.PI * 60 })
  startQuiz()
}

// ---------- Confetti burst (perfect score only) ----------
function launchConfetti() {
  const colors = ['0 243 255', '126 211 33', '255 90 80', '150 90 230']
  const originX = window.innerWidth / 2
  const originY = window.innerHeight / 2

  for (let i = 0; i < 28; i++) {
    const piece = document.createElement('div')
    piece.className = 'confetti-piece'
    piece.style.background = `rgb(${colors[i % colors.length]})`
    piece.style.left = `${originX}px`
    piece.style.top = `${originY}px`
    confettiLayer.appendChild(piece)

    const angle = Math.random() * Math.PI * 2
    const distance = 120 + Math.random() * 220
    const dx = Math.cos(angle) * distance
    const dy = Math.sin(angle) * distance - 60

    gsap.fromTo(
      piece,
      { x: 0, y: 0, opacity: 1, rotate: 0, scale: 0.6 + Math.random() * 0.6 },
      {
        x: dx,
        y: dy + 260,
        opacity: 0,
        rotate: (Math.random() - 0.5) * 540,
        duration: 1 + Math.random() * 0.6,
        ease: 'power2.out',
        onComplete: () => piece.remove()
      }
    )
  }
}

// ---------- Initial entrance ----------
if (!prefersReducedMotion) {
  gsap.from(['.eyebrow', '.title', '.subtitle', '.btn'], {
    opacity: 0,
    y: 14,
    duration: 0.5,
    ease: 'power3.out',
    stagger: 0.08,
    delay: 0.1
  })
}
