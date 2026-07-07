const STORAGE_KEY = 'ledger-entries'

const balanceEl = document.getElementById('balance')
const incomeAmountEl = document.getElementById('income-amount')
const expenseAmountEl = document.getElementById('expense-amount')
const rowsEl = document.getElementById('transaction-list')
const emptyNote = document.getElementById('empty-note')

const form = document.getElementById('transaction-form')
const descriptionInput = document.getElementById('description')
const amountInput = document.getElementById('amount')
const kindButtons = document.querySelectorAll('.kind-btn')

let currentKind = 'income'
let entries = loadEntries()

function loadEntries() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveEntries() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
  } catch {
    // storage unavailable, keep working in-memory
  }
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)
}

kindButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    currentKind = btn.dataset.kind
    kindButtons.forEach((b) => {
      b.classList.toggle('is-active', b === btn)
      b.setAttribute('aria-pressed', String(b === btn))
    })
  })
})

function markInvalid(input) {
  input.classList.remove('is-invalid')
  void input.offsetWidth
  input.classList.add('is-invalid')
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const description = descriptionInput.value.trim()
  const amount = parseFloat(amountInput.value)

  if (!description) {
    markInvalid(descriptionInput)
    descriptionInput.focus()
    return
  }
  if (!amount || amount <= 0) {
    markInvalid(amountInput)
    amountInput.focus()
    return
  }

  entries.push({
    id: Date.now(),
    description,
    amount: currentKind === 'income' ? amount : -amount
  })

  saveEntries()
  render({ animateNew: true })
  form.reset()
  descriptionInput.focus()
})

function removeEntry(id) {
  const rowEl = rowsEl.querySelector(`[data-id="${id}"]`)

  const finish = () => {
    entries = entries.filter((entry) => entry.id !== id)
    saveEntries()
    render({ animateNew: false })
  }

  if (!rowEl || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    finish()
    return
  }

  rowEl
    .animate(
      [
        { opacity: 1, transform: 'translateX(0)' },
        { opacity: 0, transform: 'translateX(24px)' }
      ],
      { duration: 200, easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }
    )
    .finished.then(finish)
}

function createRow(entry) {
  const li = document.createElement('li')
  li.className = `row ${entry.amount >= 0 ? 'income' : 'expense'}`
  li.dataset.id = entry.id

  const desc = document.createElement('span')
  desc.className = 'row-desc'
  desc.textContent = entry.description

  const right = document.createElement('div')
  right.className = 'row-right'

  const amount = document.createElement('span')
  amount.className = 'row-amount'
  amount.textContent = `${entry.amount >= 0 ? '+' : ''}${formatCurrency(entry.amount)}`

  const del = document.createElement('button')
  del.type = 'button'
  del.className = 'row-delete'
  del.setAttribute('aria-label', `Delete "${entry.description}"`)
  del.textContent = '×'
  del.addEventListener('click', () => removeEntry(entry.id))

  right.append(amount, del)
  li.append(desc, right)
  return li
}

function render({ animateNew }) {
  const sorted = [...entries].reverse()
  rowsEl.innerHTML = ''

  sorted.forEach((entry, i) => {
    const row = createRow(entry)
    if (animateNew && i === 0) row.classList.add('is-entering')
    rowsEl.appendChild(row)
  })

  emptyNote.classList.toggle('is-hidden', entries.length > 0)

  const balance = entries.reduce((sum, e) => sum + e.amount, 0)
  const income = entries.filter((e) => e.amount > 0).reduce((sum, e) => sum + e.amount, 0)
  const expenses = entries.filter((e) => e.amount < 0).reduce((sum, e) => sum + e.amount, 0)

  balanceEl.textContent = formatCurrency(balance)
  incomeAmountEl.textContent = formatCurrency(income)
  expenseAmountEl.textContent = formatCurrency(expenses)

  balanceEl.classList.remove('is-pulsing')
  void balanceEl.offsetWidth
  balanceEl.classList.add('is-pulsing')
}

render({ animateNew: false })
