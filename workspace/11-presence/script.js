const MEMBERS = [
  { name: 'Sana Malik', role: 'Product design', img: 5, online: true },
  { name: 'Theo Ruiz', role: 'Engineering', img: 8, online: true },
  { name: 'Grace Kim', role: 'Engineering', img: 11, online: false },
  { name: 'Owen Ford', role: 'Product', img: 14, online: true },
  { name: 'Amara Bell', role: 'Design systems', img: 17, online: true },
  { name: 'Marco Diaz', role: 'QA', img: 20, online: false },
  { name: 'Priya Shah', role: 'Engineering', img: 23, online: true },
  { name: 'Leon Voss', role: 'Marketing', img: 26, online: false },
  { name: 'Iris Cheng', role: 'Product design', img: 29, online: true },
  { name: 'Noah Park', role: 'Engineering', img: 44, online: false },
  { name: 'Delia Ross', role: 'Support', img: 50, online: true },
  { name: 'Faye Ito', role: 'Engineering', img: 56, online: false }
]

const VISIBLE = 5

const headline = document.getElementById('headline')
const stack = document.getElementById('stack')
const rosterInner = document.getElementById('roster-inner')
const roster = document.getElementById('roster')
const seeAllBtn = document.getElementById('see-all-btn')
const seeAllLabel = document.getElementById('see-all-label')

function avatarUrl(seed) {
  return `https://i.pravatar.cc/120?img=${seed}`
}

function renderStack() {
  const visibleMembers = MEMBERS.slice(0, VISIBLE)
  const overflowCount = MEMBERS.length - visibleMembers.length

  headline.textContent = `${MEMBERS.length} people are here`

  visibleMembers.forEach((member) => {
    const el = document.createElement('div')
    el.className = 'avatar'
    el.tabIndex = 0

    const img = document.createElement('img')
    img.src = avatarUrl(member.img)
    img.alt = member.name
    img.loading = 'lazy'

    const dot = document.createElement('span')
    dot.className = `status-dot${member.online ? ' is-online' : ''}`

    const tooltip = document.createElement('span')
    tooltip.className = 'tooltip'
    tooltip.innerHTML = `<strong>${member.name}</strong><span>${member.role}${member.online ? ' · online' : ''}</span>`

    el.append(img, dot, tooltip)
    stack.appendChild(el)
  })

  if (overflowCount > 0) {
    const overflow = document.createElement('div')
    overflow.className = 'avatar avatar--overflow'
    overflow.textContent = `+${overflowCount}`
    stack.appendChild(overflow)
  }
}

function renderRoster() {
  MEMBERS.forEach((member) => {
    const row = document.createElement('div')
    row.className = 'roster-row'
    row.innerHTML = `
      <img src="${avatarUrl(member.img)}" alt="" loading="lazy" />
      <div class="name-col">
        <div class="name">${member.name}</div>
        <div class="role">${member.role}</div>
      </div>
      <span class="status-label">
        <span class="status-dot${member.online ? ' is-online' : ''}"></span>
        ${member.online ? 'Online' : 'Away'}
      </span>
    `
    rosterInner.appendChild(row)
  })
}

seeAllBtn.addEventListener('click', () => {
  const isOpen = roster.classList.toggle('is-open')
  seeAllBtn.classList.toggle('is-open', isOpen)
  seeAllLabel.textContent = isOpen ? 'Hide roster' : 'See everyone'
})

renderStack()
renderRoster()
