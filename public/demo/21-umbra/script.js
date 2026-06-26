const offsetX = document.getElementById('offsetX')
const offsetY = document.getElementById('offsetY')
const blurInput = document.getElementById('blur')
const spread = document.getElementById('spread')
const opacity = document.getElementById('opacity')

const offsetXValue = document.getElementById('offsetX-value')
const offsetYValue = document.getElementById('offsetY-value')
const blurValue = document.getElementById('blur-value')
const spreadValue = document.getElementById('spread-value')
const opacityValue = document.getElementById('opacity-value')

const previewBox = document.getElementById('preview-box')
const cssCode = document.getElementById('css-code')
const copyBtn = document.getElementById('copy-btn')
const gelButtons = document.querySelectorAll('.gel')

let currentRgb = '10,10,12'

gelButtons.forEach((btn) => {
  btn.style.backgroundColor = `rgb(${btn.dataset.rgb})`
})

function updateShadow() {
  const x = offsetX.value
  const y = offsetY.value
  const b = blurInput.value
  const s = spread.value
  const o = opacity.value / 100

  const shadow = `${x}px ${y}px ${b}px ${s}px rgba(${currentRgb}, ${o})`

  previewBox.style.boxShadow = shadow
  offsetXValue.textContent = `${x}px`
  offsetYValue.textContent = `${y}px`
  blurValue.textContent = `${b}px`
  spreadValue.textContent = `${s}px`
  opacityValue.textContent = o.toFixed(2)
  cssCode.textContent = `box-shadow: ${shadow};`
}

;[offsetX, offsetY, blurInput, spread, opacity].forEach((input) => {
  input.addEventListener('input', updateShadow)
})

gelButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    gelButtons.forEach((b) => b.classList.remove('is-active'))
    btn.classList.add('is-active')
    currentRgb = btn.dataset.rgb
    updateShadow()
  })
})

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(cssCode.textContent)
  } catch {
    // Clipboard permission denied or unavailable — the code is still
    // visible on screen for a manual copy.
  }

  const original = copyBtn.textContent
  copyBtn.textContent = 'Copied!'
  copyBtn.classList.remove('is-copied')
  void copyBtn.offsetWidth
  copyBtn.classList.add('is-copied')

  window.setTimeout(() => {
    copyBtn.textContent = original
    copyBtn.classList.remove('is-copied')
  }, 1800)
})

updateShadow()
