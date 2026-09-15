import type { BillStatus, Budget, Category, Transaction } from '../types'

const DAY_MS = 86_400_000
/** How soon a bill counts as "due soon". */
const DUE_SOON_DAYS = 5

/**
 * Totals use a rolling 30-day window rather than the calendar month: the seed
 * spreads activity across ~26 days, so on the 2nd of a month a calendar-month
 * total would read as almost empty. The UI labels this window explicitly.
 */
export function windowTotals(transactions: Transaction[]) {
  const cutoff = Date.now() - 30 * DAY_MS
  let income = 0
  let expenses = 0

  for (const t of transactions) {
    if (new Date(t.date).getTime() < cutoff) continue
    if (t.amount >= 0) income += t.amount
    else expenses += Math.abs(t.amount)
  }

  return { income, expenses }
}

export function spentByCategory(transactions: Transaction[], category: Category): number {
  const cutoff = Date.now() - 30 * DAY_MS
  return transactions
    .filter((t) => t.category === category && t.amount < 0 && new Date(t.date).getTime() >= cutoff)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0)
}

export function latestInCategory(
  transactions: Transaction[],
  category: Category,
  count = 3
): Transaction[] {
  return transactions
    .filter((t) => t.category === category && t.amount < 0)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count)
}

export function budgetSpend(transactions: Transaction[], budgets: Budget[]) {
  return budgets.map((budget) => {
    const spent = spentByCategory(transactions, budget.category)
    return { budget, spent, remaining: Math.max(0, budget.maximum - spent) }
  })
}

export function billStatus(dayOfMonth: number, today = new Date()): BillStatus {
  const currentDay = today.getDate()
  if (dayOfMonth <= currentDay) return 'paid'
  if (dayOfMonth - currentDay <= DUE_SOON_DAYS) return 'due-soon'
  return 'upcoming'
}

export type Bill = {
  transaction: Transaction
  dayOfMonth: number
  status: BillStatus
}

export function recurringBills(transactions: Transaction[]): Bill[] {
  return transactions
    .filter((t): t is Transaction & { dayOfMonth: number } => t.recurring && t.dayOfMonth != null)
    .map((t) => ({
      transaction: t,
      dayOfMonth: t.dayOfMonth,
      status: billStatus(t.dayOfMonth)
    }))
}

export function billTotals(bills: Bill[]) {
  const sum = (status: BillStatus) =>
    bills
      .filter((b) => b.status === status)
      .reduce((total, b) => total + Math.abs(b.transaction.amount), 0)

  const count = (status: BillStatus) => bills.filter((b) => b.status === status).length

  return {
    paid: { total: sum('paid'), count: count('paid') },
    upcoming: { total: sum('upcoming') + sum('due-soon'), count: count('upcoming') + count('due-soon') },
    dueSoon: { total: sum('due-soon'), count: count('due-soon') },
    all: bills.reduce((total, b) => total + Math.abs(b.transaction.amount), 0)
  }
}

export type FlowPoint = {
  label: string
  income: number
  expenses: number
  balance: number
}

/**
 * Daily money in/out for the last `days` days, plus the running balance that
 * produced today's figure (walked backwards from the current balance so the
 * line ends exactly where the headline number sits).
 */
export function dailyFlow(
  transactions: Transaction[],
  currentBalance: number,
  days = 30
): FlowPoint[] {
  const buckets = new Map<string, { income: number; expenses: number }>()
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    buckets.set(d.toDateString(), { income: 0, expenses: 0 })
  }

  for (const t of transactions) {
    const key = new Date(t.date)
    key.setHours(0, 0, 0, 0)
    const bucket = buckets.get(key.toDateString())
    if (!bucket) continue
    if (t.amount >= 0) bucket.income += t.amount
    else bucket.expenses += Math.abs(t.amount)
  }

  const entries = [...buckets.entries()]

  // Walk backwards from today's balance to recover each day's closing figure.
  const balances: number[] = new Array(entries.length)
  let running = currentBalance
  for (let i = entries.length - 1; i >= 0; i--) {
    balances[i] = running
    const [, { income, expenses }] = entries[i]
    running = running - income + expenses
  }

  return entries.map(([key, { income, expenses }], i) => ({
    label: new Date(key).toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
    income,
    expenses,
    balance: balances[i]
  }))
}
