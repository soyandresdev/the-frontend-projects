import { useMemo, useState } from 'react'
import { useFinance } from '../store/finance'
import { formatDate, signedMoney } from '../lib/format'
import { Avatar, Card, EmptyState, Pagination } from '../components/ui'
import { CATEGORIES, type Category } from '../types'

const PER_PAGE = 10

const SORTS = {
  latest: 'Latest',
  oldest: 'Oldest',
  az: 'A to Z',
  za: 'Z to A',
  highest: 'Highest',
  lowest: 'Lowest'
} as const

type SortKey = keyof typeof SORTS

export function Transactions() {
  const { state } = useFinance()
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<SortKey>('latest')
  const [category, setCategory] = useState<Category | 'all'>('all')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    const rows = state.transactions.filter((tx) => {
      const matchesTerm = !term || tx.name.toLowerCase().includes(term)
      const matchesCategory = category === 'all' || tx.category === category
      return matchesTerm && matchesCategory
    })

    const byDate = (a: string, b: string) => new Date(b).getTime() - new Date(a).getTime()

    switch (sort) {
      case 'oldest':
        return rows.sort((a, b) => byDate(b.date, a.date))
      case 'az':
        return rows.sort((a, b) => a.name.localeCompare(b.name))
      case 'za':
        return rows.sort((a, b) => b.name.localeCompare(a.name))
      case 'highest':
        return rows.sort((a, b) => b.amount - a.amount)
      case 'lowest':
        return rows.sort((a, b) => a.amount - b.amount)
      default:
        return rows.sort((a, b) => byDate(a.date, b.date))
    }
  }, [state.transactions, search, sort, category])

  const pageCount = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  // Clamp rather than trusting `page`: a narrowing filter can leave it past the end.
  const safePage = Math.min(page, pageCount)
  const rows = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE)

  return (
    <>
      <header className="page-head">
        <div>
          <p className="page-kicker">All activity</p>
          <h1 className="page-title">Transactions</h1>
        </div>
      </header>

      <Card className="rise">
        <div className="toolbar">
          <label className="search-field">
            <span className="sr-only">Search transactions</span>
            <input
              type="search"
              placeholder="Search transaction"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setPage(1)
              }}
            />
          </label>

          <div className="toolbar-selects">
            <label className="inline-field">
              <span>Sort by</span>
              <select
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value as SortKey)
                  setPage(1)
                }}
              >
                {Object.entries(SORTS).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>

            <label className="inline-field">
              <span>Category</span>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value as Category | 'all')
                  setPage(1)
                }}
              >
                <option value="all">All Transactions</option>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {rows.length === 0 ? (
          <EmptyState message="No transactions match those filters." />
        ) : (
          <table className="tx-table">
            <thead>
              <tr>
                <th scope="col">Recipient / Sender</th>
                <th scope="col">Category</th>
                <th scope="col">Transaction Date</th>
                <th scope="col" className="align-right">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((tx) => (
                <tr key={tx.id}>
                  <td>
                    <span className="tx-cell">
                      <Avatar name={tx.name} />
                      <span className="tx-name">{tx.name}</span>
                      {tx.recurring && <span className="recurring-tag">Recurring</span>}
                    </span>
                  </td>
                  <td className="muted-cell">{tx.category}</td>
                  <td className="muted-cell">{formatDate(tx.date)}</td>
                  <td className="align-right">
                    <strong className={tx.amount >= 0 ? 'amount-in' : 'amount-out'}>
                      {signedMoney(tx.amount)}
                    </strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="table-foot">
          <p className="result-count">
            {filtered.length} transaction{filtered.length === 1 ? '' : 's'}
          </p>
          <Pagination page={safePage} pageCount={pageCount} onChange={setPage} />
        </div>
      </Card>
    </>
  )
}
