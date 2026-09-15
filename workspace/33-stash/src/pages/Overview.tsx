import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFinance } from '../store/finance'
import { billTotals, budgetSpend, dailyFlow, recurringBills, windowTotals } from '../lib/derive'
import { formatDate, money, signedMoney } from '../lib/format'
import { Avatar, Card, EmptyState, ProgressBar, SectionHeader } from '../components/ui'
import { BudgetDonut } from '../components/BudgetDonut'
import { FlowChart } from '../components/FlowChart'
import { AnimatedMoney } from '../components/AnimatedNumber'

const RANGES = [7, 14, 30] as const

export function Overview() {
  const { state } = useFinance()
  const [range, setRange] = useState<number>(30)
  const { income, expenses } = windowTotals(state.transactions)
  const budgets = budgetSpend(state.transactions, state.budgets)
  const bills = billTotals(recurringBills(state.transactions))
  const flow = dailyFlow(state.transactions, state.balance.current, range)

  const potsTotal = state.pots.reduce((sum, p) => sum + p.total, 0)
  const latest = [...state.transactions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6)

  return (
    <>
      <header className="page-head">
        <div>
          <p className="page-kicker">Last 30 days</p>
          <h1 className="page-title">Overview</h1>
        </div>
      </header>

      <section className="hero rise" style={{ ['--i' as string]: 0 }}>
        <div className="hero-figures">
          <p className="hero-label">Current balance</p>
          <strong className="hero-value">
            <AnimatedMoney value={state.balance.current} format={money} />
          </strong>

          <div className="hero-stats">
            <div>
              <span className="hero-stat-label">
                <i className="tick tick-in" aria-hidden="true" />
                Income
              </span>
              <strong>
                <AnimatedMoney value={income} format={money} />
              </strong>
            </div>
            <div>
              <span className="hero-stat-label">
                <i className="tick tick-out" aria-hidden="true" />
                Expenses
              </span>
              <strong>
                <AnimatedMoney value={expenses} format={money} />
              </strong>
            </div>
            <div>
              <span className="hero-stat-label">
                <i className="tick tick-pot" aria-hidden="true" />
                Saved in pots
              </span>
              <strong>
                <AnimatedMoney value={potsTotal} format={money} />
              </strong>
            </div>
          </div>
        </div>

        <div className="hero-chart">
          <div className="range-switch" role="group" aria-label="Chart range">
            {RANGES.map((days) => (
              <button
                key={days}
                type="button"
                className={days === range ? 'is-current' : undefined}
                aria-pressed={days === range}
                onClick={() => setRange(days)}
              >
                {days}d
              </button>
            ))}
          </div>
          {/* Keyed on the range so recharts replays its draw-in when the
              window changes instead of silently swapping the path. */}
          <FlowChart key={range} data={flow} height={240} />
        </div>
      </section>

      <div className="overview-grid">
        <Card className="rise span-2" style={{ ['--i' as string]: 1 }}>
          <SectionHeader
            title="Transactions"
            action={
              <Link className="link-btn" to="/transactions" viewTransition>
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

        <Card className="rise" style={{ ['--i' as string]: 2 }}>
          <SectionHeader
            title="Budgets"
            action={
              <Link className="link-btn" to="/budgets" viewTransition>
                See details
              </Link>
            }
          />
          {budgets.length === 0 ? (
            <EmptyState message="No budgets yet. Add one to track spending." />
          ) : (
            <>
              <BudgetDonut data={budgets} size={210} />
              <ul className="budget-legend">
                {budgets.map(({ budget }) => (
                  <li key={budget.id} style={{ borderLeftColor: budget.theme }}>
                    <span>{budget.category}</span>
                    <strong>{money(budget.maximum)}</strong>
                  </li>
                ))}
              </ul>
            </>
          )}
        </Card>

        <Card className="rise" style={{ ['--i' as string]: 3 }}>
          <SectionHeader
            title="Pots"
            action={
              <Link className="link-btn" to="/pots" viewTransition>
                See details
              </Link>
            }
          />
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
          {state.pots.length === 0 && (
            <EmptyState message="No pots yet. Create one to start saving." />
          )}
        </Card>

        <Card className="rise span-2-md" style={{ ['--i' as string]: 4 }}>
          <SectionHeader
            title="Recurring Bills"
            action={
              <Link className="link-btn" to="/bills" viewTransition>
                See details
              </Link>
            }
          />
          <ul className="bills-summary">
            <li style={{ borderLeftColor: '#3ecf9a' }}>
              <span>Paid Bills</span>
              <strong>{money(bills.paid.total)}</strong>
            </li>
            <li style={{ borderLeftColor: '#f2cdac' }}>
              <span>Total Upcoming</span>
              <strong>{money(bills.upcoming.total)}</strong>
            </li>
            <li style={{ borderLeftColor: '#e0685f' }}>
              <span>Due Soon</span>
              <strong>{money(bills.dueSoon.total)}</strong>
            </li>
          </ul>
        </Card>

        <Card className="rise span-2 span-3" style={{ ['--i' as string]: 5 }}>
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
      </div>
    </>
  )
}
