const STORAGE_KEY = 'pinboard-notes'
const COLORS = ['yellow', 'pink', 'blue', 'green']
const STATUSES = ['ideas', 'building', 'shipped']

const board = document.getElementById('board')
const bodies = Object.fromEntries(
  STATUSES.map((s) => [s, document.querySelector(`[data-body="${s}"]`)])
)
const counts = Object.fromEntries(
  STATUSES.map((s) => [s, document.querySelector(`[data-count="${s}"]`)])
)

const DEFAULT_NOTES = [
  { id: 'n1', text: 'Sketch a moodboard for the next project', status: 'ideas', color: 'yellow', rotation: -2 },
  { id: 'n2', text: 'Research color palettes on Dribbble', status: 'ideas', color: 'pink', rotation: 1.5 },
  { id: 'n3', text: 'Wire up the drag-and-drop engine', status: 'building', color: 'blue', rotation: -1 },
  { id: 'n4', text: 'Write the DATA.md description', status: 'shipped', color: 'green', rotation: 2 }
]

let notes = loadNotes()

function loadNotes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : DEFAULT_NOTES.map((n) => ({ ...n }))
  } catch {
    return DEFAULT_NOTES.map((n) => ({ ...n }))
  }
}

function saveNotes() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
  } catch {
    // storage unavailable, keep working in-memory
  }
}

function createNoteEl(note) {
  const el = document.createElement('div')
  el.className = `note color-${note.color}`
  el.dataset.id = note.id
  el.style.transform = `rotate(${note.rotation}deg)`

  el.innerHTML = `
    <span class="note-pin" aria-hidden="true"></span>
    <span class="note-text"></span>
    <button type="button" class="note-delete" aria-label="Delete note">&times;</button>
  `
  el.querySelector('.note-text').textContent = note.text
  el.querySelector('.note-delete').addEventListener('click', () => {
    notes = notes.filter((n) => n.id !== note.id)
    saveNotes()
    render()
  })

  el.addEventListener('pointerdown', (e) => startDrag(e, el, note.id))

  return el
}

function render() {
  STATUSES.forEach((status) => {
    const body = bodies[status]
    body.innerHTML = ''
    const columnNotes = notes.filter((n) => n.status === status)
    columnNotes.forEach((note) => body.appendChild(createNoteEl(note)))
    counts[status].textContent = columnNotes.length
  })
}

// ---------- Add note ----------
document.querySelectorAll('[data-add]').forEach((btn) => {
  btn.addEventListener('click', () => openAddForm(btn))
})

function openAddForm(btn) {
  const status = btn.dataset.add
  btn.hidden = true

  const form = document.createElement('div')
  form.className = 'add-note-form'
  form.innerHTML = `
    <textarea placeholder="Write a note&hellip;"></textarea>
    <div class="add-note-form-actions">
      <button type="button" class="form-cancel">Cancel</button>
      <button type="button" class="form-submit">Add</button>
    </div>
  `
  btn.insertAdjacentElement('beforebegin', form)
  const textarea = form.querySelector('textarea')
  textarea.focus()

  function close() {
    form.remove()
    btn.hidden = false
  }

  function submit() {
    const text = textarea.value.trim()
    if (!text) {
      close()
      return
    }
    notes.push({
      id: `n${Date.now()}`,
      text,
      status,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: Math.random() * 5 - 2.5
    })
    saveNotes()
    render()
  }

  form.querySelector('.form-cancel').addEventListener('click', close)
  form.querySelector('.form-submit').addEventListener('click', submit)
  textarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      submit()
    } else if (e.key === 'Escape') {
      close()
    }
  })
}

// ---------- Drag engine ----------
let dragState = null

function startDrag(e, el, id) {
  if (e.button !== undefined && e.button !== 0) return
  // pointerdown on the delete button bubbles up to the note's own listener —
  // without this guard it hijacks the click as a drag and the button's
  // click handler never gets a clean target.
  if (e.target.closest('.note-delete')) return

  const rect = el.getBoundingClientRect()
  const placeholder = document.createElement('div')
  placeholder.className = 'note-placeholder'
  placeholder.style.height = `${rect.height}px`
  el.parentElement.insertBefore(placeholder, el.nextSibling)

  dragState = {
    id,
    el,
    placeholder,
    offsetX: e.clientX - rect.left,
    offsetY: e.clientY - rect.top,
    pointerId: e.pointerId
  }

  el.style.width = `${rect.width}px`
  el.style.left = `${rect.left}px`
  el.style.top = `${rect.top}px`
  el.classList.add('is-dragging')

  try {
    el.setPointerCapture(e.pointerId)
  } catch {
    // pointer capture can fail silently on some devices; drag still works via document listeners
  }

  document.addEventListener('pointermove', onDragMove)
  document.addEventListener('pointerup', endDrag)
  document.addEventListener('pointercancel', endDrag)
  el.addEventListener('lostpointercapture', endDrag)
}

function onDragMove(e) {
  if (!dragState) return
  const { el, offsetX, offsetY } = dragState

  el.style.left = `${e.clientX - offsetX}px`
  el.style.top = `${e.clientY - offsetY}px`

  const targetBody = findColumnAt(e.clientX, e.clientY)
  if (!targetBody) return

  document.querySelectorAll('.column-body').forEach((b) => b.classList.remove('is-drop-target'))
  targetBody.classList.add('is-drop-target')

  const referenceNode = findInsertionPoint(targetBody, e.clientY)
  targetBody.insertBefore(dragState.placeholder, referenceNode)
}

function findColumnAt(x, y) {
  let best = null
  let bestDist = Infinity

  STATUSES.forEach((status) => {
    if (bestDist === 0) return
    const columnEl = bodies[status].closest('.column')
    const rect = columnEl.getBoundingClientRect()
    const inside = x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom

    if (inside) {
      best = bodies[status]
      bestDist = 0
      return
    }

    const dx = Math.max(rect.left - x, 0, x - rect.right)
    const dy = Math.max(rect.top - y, 0, y - rect.bottom)
    const dist = Math.hypot(dx, dy)
    if (dist < bestDist) {
      bestDist = dist
      best = bodies[status]
    }
  })

  return best
}

function findInsertionPoint(body, y) {
  const siblings = [...body.children].filter(
    (c) => c !== dragState.placeholder && c !== dragState.el
  )
  for (const sibling of siblings) {
    const rect = sibling.getBoundingClientRect()
    if (y < rect.top + rect.height / 2) return sibling
  }
  return null
}

function endDrag() {
  if (!dragState) return

  // Snapshot everything needed and null the shared state immediately — a
  // duplicate event (pointerup + a browser-fired lostpointercapture, both
  // wired to this same handler per the pointer-robustness pattern used
  // elsewhere in this series) can call endDrag() again before the deferred
  // `finish` below runs; without this, that second call's closure would
  // read `dragState` after the first call had already nulled it.
  const { id, el, placeholder, pointerId } = dragState
  dragState = null

  document.querySelectorAll('.column-body').forEach((b) => b.classList.remove('is-drop-target'))
  document.removeEventListener('pointermove', onDragMove)
  document.removeEventListener('pointerup', endDrag)
  document.removeEventListener('pointercancel', endDrag)
  el.removeEventListener('lostpointercapture', endDrag)

  try {
    el.releasePointerCapture(pointerId)
  } catch {
    // already released or never captured — safe to ignore
  }

  const targetBody = placeholder.parentElement
  const newStatus = targetBody.dataset.body
  const finalRect = placeholder.getBoundingClientRect()

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  // Keep `is-dragging` (position: fixed) active through the settle transition —
  // removing it here would flip the element to its base `position: relative`
  // one frame before `finish()` cleans it up via a fresh render(), and the
  // inline left/top pixel values (meant as viewport coordinates) would then
  // be reinterpreted as an offset from its normal flow position, flinging it
  // off to whichever side that offset happens to point.
  if (!prefersReducedMotion) el.classList.add('is-settling')
  el.style.left = `${finalRect.left}px`
  el.style.top = `${finalRect.top}px`

  const finish = () => {
    el.removeEventListener('transitionend', finish)

    // The dragged element (position: fixed) can still be a DOM child of its
    // original column when reordering within the same column — exclude it,
    // and read the placeholder's slot as the dragged note's new position.
    const orderedIds = [...targetBody.children]
      .filter((c) => c !== el)
      .map((c) => (c === placeholder ? id : c.dataset.id))

    const note = notes.find((n) => n.id === id)
    note.status = newStatus

    const others = notes.filter((n) => n.id !== id)
    const movedIndex = orderedIds.indexOf(id)
    const nextId = orderedIds[movedIndex + 1]
    const prevId = orderedIds[movedIndex - 1]

    if (nextId) {
      others.splice(
        others.findIndex((n) => n.id === nextId),
        0,
        note
      )
    } else if (prevId) {
      others.splice(
        others.findIndex((n) => n.id === prevId) + 1,
        0,
        note
      )
    } else {
      others.push(note)
    }

    notes = others

    saveNotes()
    placeholder.remove()
    render()
  }

  if (prefersReducedMotion) {
    finish()
  } else {
    el.addEventListener('transitionend', finish)
    window.setTimeout(finish, 400)
  }
}

render()
