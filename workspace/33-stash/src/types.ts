export const CATEGORIES = [
  'Entertainment',
  'Bills',
  'Groceries',
  'Dining Out',
  'Transportation',
  'Personal Care',
  'Education',
  'Shopping',
  'General'
] as const

export type Category = (typeof CATEGORIES)[number]

/** Palette lifted into named tokens so budgets and pots can claim a colour. */
export const THEMES = [
  { name: 'Green', value: '#277c78' },
  { name: 'Cyan', value: '#82c9d7' },
  { name: 'Navy', value: '#626070' },
  { name: 'Yellow', value: '#f2cdac' },
  { name: 'Purple', value: '#826cb0' },
  { name: 'Turquoise', value: '#597c7c' },
  { name: 'Brown', value: '#93674f' },
  { name: 'Magenta', value: '#934f6f' },
  { name: 'Blue', value: '#3f82b2' },
  { name: 'Army', value: '#7f9161' },
  { name: 'Gold', value: '#cab361' },
  { name: 'Orange', value: '#be6c49' }
] as const

export type Transaction = {
  id: string
  name: string
  category: Category
  /** ISO date string. */
  date: string
  /** Negative for money out, positive for money in. */
  amount: number
  recurring: boolean
  /** Day of the month a recurring bill is charged on. */
  dayOfMonth?: number
}

export type Budget = {
  id: string
  category: Category
  maximum: number
  theme: string
}

export type Pot = {
  id: string
  name: string
  target: number
  total: number
  theme: string
}

export type Balance = {
  current: number
}

export type FinanceState = {
  balance: Balance
  transactions: Transaction[]
  budgets: Budget[]
  pots: Pot[]
}

export type BillStatus = 'paid' | 'due-soon' | 'upcoming'
