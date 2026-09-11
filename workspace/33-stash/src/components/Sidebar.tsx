import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

const ICONS = {
  overview: 'M3 11.5 12 4l9 7.5M5.5 10v9h13v-9',
  transactions: 'M4 7h13m0 0-3-3m3 3-3 3M20 17H7m0 0 3 3m-3-3 3-3',
  budgets: 'M12 3a9 9 0 1 0 9 9h-9V3Z',
  pots: 'M5 9h14l-1.2 10H6.2L5 9Zm3-2a4 4 0 0 1 8 0',
  bills: 'M6 3h12v18l-3-2-3 2-3-2-3 2V3Zm3 5h6m-6 4h6'
} as const

const NAV = [
  { to: '/', label: 'Overview', icon: ICONS.overview },
  { to: '/transactions', label: 'Transactions', icon: ICONS.transactions },
  { to: '/budgets', label: 'Budgets', icon: ICONS.budgets },
  { to: '/pots', label: 'Pots', icon: ICONS.pots },
  { to: '/bills', label: 'Recurring Bills', icon: ICONS.bills }
]

export function Sidebar() {
  return (
    <nav className="sidebar" aria-label="Main">
      <p className="brand">
        <span className="brand-mark" aria-hidden="true" />
        Stash
      </p>

      <ul className="nav-list">
        {NAV.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => clsx('nav-link', isActive && 'is-active')}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d={item.icon} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
