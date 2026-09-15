import type { Category, FinanceState, Transaction } from '../types'
import { uid } from '../lib/format'

function daysAgo(days: number): string {
  const d = new Date()
  d.setDate(d.getDate() - days)
  d.setHours(12, 0, 0, 0)
  return d.toISOString()
}

/** Most recent occurrence of a monthly charge day, relative to today. */
function lastOccurrence(dayOfMonth: number): string {
  const now = new Date()
  const d = new Date(now.getFullYear(), now.getMonth(), dayOfMonth, 12, 0, 0, 0)
  if (dayOfMonth > now.getDate()) d.setMonth(d.getMonth() - 1)
  return d.toISOString()
}

type Spend = [name: string, category: Category, amount: number, days: number]

const ONE_OFFS: Spend[] = [
  ['Acme Corp Salary', 'General', 3200, 26],
  ['Harvest Market', 'Groceries', -88.4, 1],
  ['Swift Ride Share', 'Transportation', -22.4, 2],
  ['Savory Bites Bistro', 'Dining Out', -55.5, 3],
  ['Nova Cinema', 'Entertainment', -26, 4],
  ['Emma Richardson', 'General', 75.5, 5],
  ['Corner Store', 'Groceries', -21.6, 6],
  ['Bravo Zen Spa', 'Personal Care', -60, 7],
  ['Tech Supply Co', 'Shopping', -120, 8],
  ['Green Plate Eatery', 'Dining Out', -38, 9],
  ['Metro Transit', 'Transportation', -14, 10],
  ['Sun Park', 'General', 120, 11],
  ['Study Hub', 'Education', -45, 12],
  ['Flavor Fiesta', 'Dining Out', -42.75, 13],
  ['Buzz Marketing Group', 'Shopping', -18, 14],
  ['Liam Hughes', 'General', 150, 15],
  ['Rina Sato', 'Personal Care', -15, 16],
  ['Urban Services Hub', 'General', -65, 17],
  ['Lunar Video Hub', 'Entertainment', -12, 18],
  ['Daniel Carter', 'General', -42.3, 19],
  ['Sofia Peralta', 'General', 220, 20],
  ['Ethan Clarke', 'General', -32.5, 21],
  ['Yuna Kim', 'General', 48, 22],
  ['Weekend Groceries', 'Groceries', -64.25, 23]
]

type Bill = [name: string, category: Category, amount: number, day: number]

const RECURRING: Bill[] = [
  ['Spark Electric Solutions', 'Bills', -80, 2],
  ['Serenity Spa & Wellness', 'Personal Care', -30, 3],
  ['Elevate Education', 'Education', -50, 4],
  ['Nimbus Data Storage', 'Bills', -9.99, 5],
  ['Pixel Playground', 'Entertainment', -10, 11],
  ['EcoFuel Energy', 'Bills', -35, 26],
  ['Aqua Flow Utilities', 'Bills', -100, 29]
]

export function createSeedState(): FinanceState {
  const oneOffs: Transaction[] = ONE_OFFS.map(([name, category, amount, days]) => ({
    id: uid(),
    name,
    category,
    amount,
    date: daysAgo(days),
    recurring: false
  }))

  const bills: Transaction[] = RECURRING.map(([name, category, amount, day]) => ({
    id: uid(),
    name,
    category,
    amount,
    date: lastOccurrence(day),
    recurring: true,
    dayOfMonth: day
  }))

  const transactions = [...oneOffs, ...bills].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return {
    balance: { current: 4836 },
    transactions,
    budgets: [
      { id: uid(), category: 'Entertainment', maximum: 50, theme: '#3ecf9a' },
      { id: uid(), category: 'Bills', maximum: 750, theme: '#56cfe1' },
      { id: uid(), category: 'Dining Out', maximum: 75, theme: '#f5c26b' },
      { id: uid(), category: 'Personal Care', maximum: 100, theme: '#7c8cff' }
    ],
    pots: [
      { id: uid(), name: 'Savings', target: 2000, total: 159, theme: '#3ecf9a' },
      { id: uid(), name: 'Concert Ticket', target: 150, total: 110, theme: '#7c8cff' },
      { id: uid(), name: 'Gift', target: 150, total: 110, theme: '#56cfe1' },
      { id: uid(), name: 'New Laptop', target: 1000, total: 10, theme: '#f5c26b' }
    ]
  }
}
