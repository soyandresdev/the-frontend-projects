const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

const currencyWhole = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
})

export function money(value: number): string {
  return currency.format(value)
}

export function moneyWhole(value: number): string {
  return currencyWhole.format(value)
}

/** Money out reads as -$25.00, money in as +$25.00. */
export function signedMoney(value: number): string {
  const sign = value >= 0 ? '+' : '-'
  return `${sign}${currency.format(Math.abs(value))}`
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

export function ordinal(day: number): string {
  const rem100 = day % 100
  if (rem100 >= 11 && rem100 <= 13) return `${day}th`
  switch (day % 10) {
    case 1:
      return `${day}st`
    case 2:
      return `${day}nd`
    case 3:
      return `${day}rd`
    default:
      return `${day}th`
  }
}

export function initials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function percent(value: number, of: number): number {
  if (of <= 0) return 0
  return Math.min(100, (value / of) * 100)
}

export function uid(): string {
  return Math.random().toString(36).slice(2, 10)
}
