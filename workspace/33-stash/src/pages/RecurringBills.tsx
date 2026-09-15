import { useMemo, useState } from 'react'
import { useFinance } from '../store/finance'
import { billTotals, recurringBills } from '../lib/derive'
import { money, ordinal } from '../lib/format'
import { Avatar, Card, EmptyState, StatusPill } from '../components/ui'

const SORTS = {
  soonest: 'Due date (soonest)',
  latest: 'Due date (latest)',
  az: 'A to Z',
  za: 'Z to A',
  highest: 'Highest',
  lowest: 'Lowest'
} as const

type SortKey = keyof typeof SORTS

export function RecurringBills() {
  const { state } = useFinance()
  const bills = recurringBills(state.transactions)
  const totals = billTotals(bills)

  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<SortKey>('soonest')

  const rows = useMemo(() => {
    const term = search.trim().toLowerCase()
    const list = bills.filter((b) => !term || b.transaction.name.toLowerCase().includes(term))

    switch (sort) {
      case 'latest':
        return list.sort((a, b) => b.dayOfMonth - a.dayOfMonth)
      case 'az':
        return list.sort((a, b) => a.transaction.name.localeCompare(b.transaction.name))
      case 'za':
        return list.sort((a, b) => b.transaction.name.localeCompare(a.transaction.name))
      case 'highest':
        return list.sort((a, b) => Math.abs(b.transaction.amount) - Math.abs(a.transaction.amount))
      case 'lowest':
        return list.sort((a, b) => Math.abs(a.transaction.amount) - Math.abs(b.transaction.amount))
      default:
        return list.sort((a, b) => a.dayOfMonth - b.dayOfMonth)
    }
  }, [bills, search, sort])

  return (
    <>
      <header className="page-head">
        <div>
          <p className="page-kicker">This month</p>
          <h1 className="page-title">Recurring Bills</h1>
        </div>
      </header>

      <div className="bills-layout">
        <div className="bills-aside">
          <Card tone="dark" className="rise">
            <p className="balance-label">Total bills</p>
            <strong className="balance-value">{money(totals.all)}</strong>
          </Card>

          <Card className="rise" style={{ ['--i' as string]: 1 }}>
            <h2 className="mini-heading">Summary</h2>
            <ul className="bills-breakdown">
              <li>
                <span>Paid Bills</span>
                <strong>
                  {totals.paid.count} ({money(totals.paid.total)})
                </strong>
              </li>
              <li>
                <span>Total Upcoming</span>
                <strong>
                  {totals.upcoming.count} ({money(totals.upcoming.total)})
                </strong>
              </li>
              <li className="is-warning">
                <span>Due Soon</span>
                <strong>
                  {totals.dueSoon.count} ({money(totals.dueSoon.total)})
                </strong>
              </li>
            </ul>
          </Card>
        </div>

        <Card className="bills-main rise" style={{ ['--i' as string]: 2 }}>
          <div className="toolbar">
            <label className="search-field">
              <span className="sr-only">Search bills</span>
              <input
                type="search"
                placeholder="Search bills"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>

            <label className="inline-field">
              <span>Sort by</span>
              <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)}>
                {Object.entries(SORTS).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {rows.length === 0 ? (
            <EmptyState message="No bills match that search." />
          ) : (
            <table className="tx-table">
              <thead>
                <tr>
                  <th scope="col">Bill Title</th>
                  <th scope="col">Due Date</th>
                  <th scope="col" className="align-right">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((bill) => (
                  <tr key={bill.transaction.id}>
                    <td>
                      <span className="tx-cell">
                        <Avatar name={bill.transaction.name} />
                        <span className="tx-name">{bill.transaction.name}</span>
                      </span>
                    </td>
                    <td>
                      <span className="due-cell">
                        Monthly &mdash; {ordinal(bill.dayOfMonth)}
                        <StatusPill status={bill.status} />
                      </span>
                    </td>
                    <td className="align-right">
                      <strong className={bill.status === 'due-soon' ? 'amount-due' : undefined}>
                        {money(Math.abs(bill.transaction.amount))}
                      </strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Card>
      </div>
    </>
  )
}
