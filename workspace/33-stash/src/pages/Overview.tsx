import { Link } from 'react-router-dom'
import { useFinance } from '../store/finance'
import { billTotals, budgetSpend, recurringBills, windowTotals } from '../lib/derive'
import { formatDate, money, signedMoney } from '../lib/format'
import { Avatar, Card, EmptyState, ProgressBar, SectionHeader } from '../components/ui'
import { BudgetDonut } from '../components/BudgetDonut'

export function Overview() {
  const { state } = useFinance()
  const { income, expenses } = windowTotals(state.transactions)
  const budgets = budgetSpend(state.transactions, state.budgets)
  const bills = billTotals(recurringBills(state.transactions))

  const potsTotal = state.pots.reduce((sum, p) => sum + p.total, 0)
  const latest = [...state.transactions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5)

  return (
    <>
      <h1 className="page-title">Overview</h1>

      <div className="balance-row">
        <Card tone="dark">
          <p className="balance-label">Current balance</p>
          <strong className="balance-value">{money(state.balance.current)}</strong>
        </Card>
        <Card>
          <p className="balance-label">Income</p>
          <strong className="balance-value">{money(income)}</strong>
          <p className="balance-note">Last 30 days</p>
        </Card>
        <Card>
          <p className="balance-label">Expenses</p>
          <strong className="balance-value">{money(expenses)}</strong>
          <p className="balance-note">Last 30 days</p>
        </Card>
      </div>

      <div className="overview-grid">
        <div className="overview-col">
          <Card>
            <SectionHeader
              title="Pots"
              action={
                <Link className="link-btn" to="/pots">
                  See details
                </Link>
              }
            />
            <div className="pots-summary">
              <div className="pots-total">
                <span className="pots-total-icon" aria-hidden="true" />
                <div>
                  <p className="balance-label">Total saved</p>
                  <strong className="pots-total-value">{money(potsTotal)}</strong>
                </div>
              </div>
              <ul className="pots-legend">
                {state.pots.slice(0, 4).map((pot) => (
                  <li key={pot.id} style={{ borderLeftColor: pot.theme }}>
                    <span>{pot.name}</span>
                    <strong>{money(pot.total)}</strong>
                  </li>
                ))}
              </ul>
            </div>
            {state.pots.length === 0 && <EmptyState message="No pots yet. Create one to start saving." />}
          </Card>

          <Card>
            <SectionHeader
              title="Transactions"
              action={
                <Link className="link-btn" to="/transactions">
                  View all
                </Link>
              }
            />
            <ul className="tx-list">
              {latest.map((tx) => (
                <li key={tx.id}>
                  <Avatar name={tx.name} />
                  <span className="tx-name">{tx.name}</span>
                  <span className="tx-right">
                    <strong className={tx.amount >= 0 ? 'amount-in' : 'amount-out'}>
                      {signedMoney(tx.amount)}
                    </strong>
                    <span className="tx-date">{formatDate(tx.date)}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="overview-col">
          <Card>
            <SectionHeader
              title="Budgets"
              action={
                <Link className="link-btn" to="/budgets">
                  See details
                </Link>
              }
            />
            {budgets.length === 0 ? (
              <EmptyState message="No budgets yet. Add one to track spending." />
            ) : (
              <div className="budget-overview">
                <BudgetDonut data={budgets} size={220} />
                <ul className="budget-legend">
                  {budgets.map(({ budget }) => (
                    <li key={budget.id} style={{ borderLeftColor: budget.theme }}>
                      <span>{budget.category}</span>
                      <strong>{money(budget.maximum)}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Card>

          <Card>
            <SectionHeader
              title="Recurring Bills"
              action={
                <Link className="link-btn" to="/bills">
                  See details
                </Link>
              }
            />
            <ul className="bills-summary">
              <li style={{ borderLeftColor: '#277c78' }}>
                <span>Paid Bills</span>
                <strong>{money(bills.paid.total)}</strong>
              </li>
              <li style={{ borderLeftColor: '#f2cdac' }}>
                <span>Total Upcoming</span>
                <strong>{money(bills.upcoming.total)}</strong>
              </li>
              <li style={{ borderLeftColor: '#82c9d7' }}>
                <span>Due Soon</span>
                <strong>{money(bills.dueSoon.total)}</strong>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      <Card className="budget-progress-card">
        <SectionHeader title="Budget progress" />
        <ul className="budget-progress-list">
          {budgets.map(({ budget, spent }) => (
            <li key={budget.id}>
              <div className="budget-progress-head">
                <span>
                  <span className="dot" style={{ backgroundColor: budget.theme }} aria-hidden="true" />
                  {budget.category}
                </span>
                <span className="budget-progress-figures">
                  {money(spent)} <span>of {money(budget.maximum)}</span>
                </span>
              </div>
              <ProgressBar value={spent} of={budget.maximum} color={budget.theme} />
            </li>
          ))}
        </ul>
        {budgets.length === 0 && <EmptyState message="Add a budget to see progress here." />}
      </Card>
    </>
  )
}
