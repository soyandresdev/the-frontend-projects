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
  { name: 'Mint', value: '#3ecf9a' },
  { name: 'Cyan', value: '#56cfe1' },
  { name: 'Indigo', value: '#7c8cff' },
  { name: 'Amber', value: '#f5c26b' },
  { name: 'Violet', value: '#b08cf0' },
  { name: 'Teal', value: '#4bb8b0' },
  { name: 'Clay', value: '#d08b6a' },
  { name: 'Magenta', value: '#f06fa0' },
  { name: 'Blue', value: '#5aa9f0' },
  { name: 'Olive', value: '#a8c06a' },
  { name: 'Gold', value: '#e6c65c' },
  { name: 'Coral', value: '#ff8a5b' }
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
