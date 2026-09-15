import type { CSSProperties, ReactNode } from 'react'
import clsx from 'clsx'
import { initials, money, percent } from '../lib/format'
import type { BillStatus } from '../types'

export function Avatar({ name, color }: { name: string; color?: string }) {
  return (
    <span className="avatar" style={{ backgroundColor: color ?? tintFor(name) }} aria-hidden="true">
      {initials(name)}
    </span>
  )
}

/** Deterministic tint so a given payee always looks the same. */
function tintFor(name: string): string {
  const palette = ['#3ecf9a', '#56cfe1', '#7c8cff', '#f06fa0', '#5aa9f0', '#a8c06a', '#ff8a5b', '#b08cf0']
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = (hash << 5) - hash + name.charCodeAt(i)
  return palette[Math.abs(hash) % palette.length]
}

export function ProgressBar({
  value,
  of,
  color,
  height = 8
}: {
  value: number
  of: number
  color: string
  height?: number
}) {
  const pct = percent(value, of)
  // percent() clamps, so an over-spent budget would otherwise look
  // identical to one spent exactly to the limit.
  const over = of > 0 && value > of
  return (
    <div
      className={clsx('progress', over && 'is-over')}
      style={{ height }}
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <span className="progress-fill" style={{ width: `${pct}%`, backgroundColor: color }} />
    </div>
  )
}

export function Card({
  children,
  className,
  style,
  tone = 'light'
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
  tone?: 'light' | 'dark' | 'muted'
}) {
  return (
    <section className={clsx('card', `card-${tone}`, className)} style={style}>
      {children}
    </section>
  )
}

export function SectionHeader({
  title,
  action
}: {
  title: string
  action?: ReactNode
}) {
  return (
    <header className="section-header">
      <h2>{title}</h2>
      {action}
    </header>
  )
}

const STATUS_LABEL: Record<BillStatus, string> = {
  paid: 'Paid',
  'due-soon': 'Due soon',
  upcoming: 'Upcoming'
}

export function StatusPill({ status }: { status: BillStatus }) {
  return <span className={clsx('pill', `pill-${status}`)}>{STATUS_LABEL[status]}</span>
}

export function EmptyState({ message }: { message: string }) {
  return <p className="empty-state">{message}</p>
}

export function StatTile({
  label,
  value,
  accent
}: {
  label: string
  value: number
  accent?: string
}) {
  return (
    <div className="stat-tile" style={accent ? { borderLeftColor: accent } : undefined}>
      <span className="stat-tile-label">{label}</span>
      <strong className="stat-tile-value">{money(value)}</strong>
    </div>
  )
}

export function Pagination({
  page,
  pageCount,
  onChange
}: {
  page: number
  pageCount: number
  onChange: (page: number) => void
}) {
  if (pageCount <= 1) return null

  const pages = Array.from({ length: pageCount }, (_, i) => i + 1)

  return (
    <nav className="pagination" aria-label="Transactions pages">
      <button
        type="button"
        className="page-btn"
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
      >
        Prev
      </button>
      <ul className="page-list">
        {pages.map((p) => (
          <li key={p}>
            <button
              type="button"
              className={clsx('page-btn', p === page && 'is-current')}
              aria-current={p === page ? 'page' : undefined}
              onClick={() => onChange(p)}
            >
              {p}
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="page-btn"
        onClick={() => onChange(page + 1)}
        disabled={page === pageCount}
      >
        Next
      </button>
    </nav>
  )
}
