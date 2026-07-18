const SHIPPING = 10

const ICONS = {
  headphones:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14v-2a9 9 0 0 1 18 0v2"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>',
  watch:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M12 9.5V12l1.5 1.5M9 7l-.5-3h7L15 7M9 17l-.5 3h7l-.5-3"/></svg>',
  shoe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17c0-2 1.5-3 3-4.5C7.5 11 9 9 9 6c2 1 3 3 5 4 1.5 1 3 1 5 1 1 0 2 1 2 2v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/></svg>'
}

const ICON_COLORS = {
  headphones: { bg: 'rgb(224 236 255)', fg: 'rgb(37 99 235)' },
  watch: { bg: 'rgb(255 231 214)', fg: 'rgb(194 88 22)' },
  shoe: { bg: 'rgb(223 244 227)', fg: 'rgb(29 130 74)' }
}

const SEED_PRODUCTS = [
  { id: 'p1', name: 'Wireless Headphones', price: 99.99, type: 'headphones', qty: 1 },
  { id: 'p2', name: 'Smart Watch', price: 199.99, type: 'watch', qty: 2 },
  { id: 'p3', name: 'Running Shoes', price: 19.99, type: 'shoe', qty: 1 }
]

const itemsEl = document.getElementById('items')
const emptyEl = document.getElementById('empty')
const receiptEl = document.getElementById('receipt')
const itemCountEl = document.getElementById('item-count')
const subtotalEl = document.getElementById('subtotal')
const totalEl = document.getElementById('total')
const restockBtn = document.getElementById('restock-btn')
const checkoutBtn = document.getElementById('checkout-btn')
const toastEl = document.getElementById('toast')

let cart = SEED_PRODUCTS.map((p) => ({ ...p }))
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)
}

function createItemRow(item) {
  const li = document.createElement('li')
  li.className = 'item'
  li.dataset.id = item.id

  const icon = document.createElement('div')
  icon.className = 'item-icon'
  icon.style.background = ICON_COLORS[item.type].bg
  icon.style.color = ICON_COLORS[item.type].fg
  icon.innerHTML = ICONS[item.type]

  const info = document.createElement('div')
  info.className = 'item-info'
  info.innerHTML = `<h3>${item.name}</h3><p class="item-price">${formatCurrency(item.price)}</p>`

  const qtyControls = document.createElement('div')
  qtyControls.className = 'qty-controls'
  qtyControls.innerHTML = `
    <button type="button" class="qty-btn" data-action="decrease" aria-label="Decrease quantity">&minus;</button>
    <span class="quantity">${item.qty}</span>
    <button type="button" class="qty-btn" data-action="increase" aria-label="Increase quantity">+</button>
  `

  const right = document.createElement('div')
  right.className = 'item-right'
  right.innerHTML = `
    <span class="item-total">${formatCurrency(item.price * item.qty)}</span>
    <button type="button" class="remove-btn" aria-label="Remove ${item.name}">&times;</button>
  `

  const beam = document.createElement('span')
  beam.className = 'scan-beam'

  li.append(icon, info, qtyControls, right, beam)

  qtyControls.querySelector('[data-action="decrease"]').addEventListener('click', () => {
    changeQuantity(item.id, -1)
  })
  qtyControls.querySelector('[data-action="increase"]').addEventListener('click', () => {
    changeQuantity(item.id, 1)
  })
  right.querySelector('.remove-btn').addEventListener('click', () => removeItem(item.id))

  return li
}

function render({ scannedId, entering } = {}) {
  itemsEl.innerHTML = ''

  cart.forEach((item) => {
    const row = createItemRow(item)
    if (entering) row.classList.add('is-entering')
    itemsEl.appendChild(row)

    if (scannedId === item.id && !prefersReducedMotion) {
      const beam = row.querySelector('.scan-beam')
      requestAnimationFrame(() => beam.classList.add('is-scanning'))
    }
  })

  const isEmpty = cart.length === 0
  emptyEl.classList.toggle('is-visible', isEmpty)
  receiptEl.style.display = isEmpty ? 'none' : 'block'

  const totalQty = cart.reduce((sum, i) => sum + i.qty, 0)
  itemCountEl.textContent = `${totalQty} ${totalQty === 1 ? 'item' : 'items'}`

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0)
  subtotalEl.textContent = formatCurrency(subtotal)
  totalEl.textContent = formatCurrency(subtotal + (isEmpty ? 0 : SHIPPING))
}

function changeQuantity(id, delta) {
  const item = cart.find((i) => i.id === id)
  if (!item) return

  item.qty = Math.max(1, item.qty + delta)
  render({ scannedId: id })
}

function removeItem(id) {
  const rowEl = itemsEl.querySelector(`[data-id="${id}"]`)

  const finish = () => {
    cart = cart.filter((i) => i.id !== id)
    render({})
  }

  if (!rowEl || prefersReducedMotion) {
    finish()
    return
  }

  rowEl
    .animate(
      [
        { opacity: 1, transform: 'translateX(0)' },
        { opacity: 0, transform: 'translateX(28px)' }
      ],
      { duration: 220, easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }
    )
    .finished.then(finish)
}

restockBtn.addEventListener('click', () => {
  cart = SEED_PRODUCTS.map((p) => ({ ...p }))
  render({ entering: true })
})

let toastTimer
function showToast(message) {
  window.clearTimeout(toastTimer)
  toastEl.textContent = message
  toastEl.classList.add('is-visible')
  toastTimer = window.setTimeout(() => toastEl.classList.remove('is-visible'), 2400)
}

checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) return

  checkoutBtn.disabled = true
  checkoutBtn.textContent = 'Placing order…'

  window.setTimeout(() => {
    cart = []
    render({})
    showToast('Order placed — thanks for shopping!')
    checkoutBtn.disabled = false
    checkoutBtn.textContent = 'Complete purchase'
  }, 900)
})

render({})
