import { useState } from 'react'
import { useFinance } from '../store/finance'
import { budgetSpend, latestInCategory } from '../lib/derive'
import { formatDate, money, signedMoney } from '../lib/format'
import { Avatar, Card, EmptyState, ProgressBar, SectionHeader } from '../components/ui'
import { BudgetDonut } from '../components/BudgetDonut'
import { Modal } from '../components/Modal'
import { MoneyField, SelectField } from '../components/fields'
import { CATEGORIES, THEMES, type Budget, type Category } from '../types'

function parseAmount(raw: string): number | null {
  const value = Number(raw.replace(/,/g, '').trim())
  if (!Number.isFinite(value) || value <= 0) return null
  return value
}

type FormMode = { kind: 'add' } | { kind: 'edit'; budget: Budget }

function BudgetForm({ mode, onClose }: { mode: FormMode; onClose: () => void }) {
  const { state, dispatch } = useFinance()
  const editing = mode.kind === 'edit' ? mode.budget : null

  // Opening the form on a category that already has a budget greeted the user
  // with an error before they typed anything, so default to a free one.
  const firstFree =
    CATEGORIES.find((c) => !state.budgets.some((b) => b.category === c)) ?? CATEGORIES[0]

  const [category, setCategory] = useState<Category>(editing?.category ?? firstFree)
  const [maximum, setMaximum] = useState(editing ? String(editing.maximum) : '')
  const [theme, setTheme] = useState(editing?.theme ?? THEMES[0].value)
  const [errors, setErrors] = useState<{ maximum?: string; category?: string }>({})

  const usedCategories = new Set(
    state.budgets.filter((b) => b.id !== editing?.id).map((b) => b.category)
  )
  const usedThemes = new Set(state.budgets.filter((b) => b.id !== editing?.id).map((b) => b.theme))

  function submit(event: React.FormEvent) {
    event.preventDefault()
    const amount = parseAmount(maximum)
    const next: typeof errors = {}

    if (!maximum.trim()) next.maximum = 'Spending limit is required.'
    else if (amount === null) next.maximum = 'Enter an amount greater than zero.'
    if (usedCategories.has(category)) next.category = 'That category already has a budget.'

    setErrors(next)
    if (Object.keys(next).length > 0 || amount === null) return

    if (editing) {
      dispatch({ type: 'update-budget', id: editing.id, budget: { category, maximum: amount, theme } })
    } else {
      dispatch({ type: 'add-budget', budget: { category, maximum: amount, theme } })
    }
    onClose()
  }

  return (
    <Modal
      title={editing ? 'Edit Budget' : 'Add New Budget'}
      description={
        editing
          ? 'Adjust the category, limit or colour for this budget.'
          : 'Choose a category to set a spending budget. These categories can help you monitor spending.'
      }
      onClose={onClose}
    >
      <form onSubmit={submit} noValidate>
        <SelectField
          id="budget-category"
          label="Budget Category"
          value={category}
          onChange={setCategory}
          error={errors.category}
          options={CATEGORIES.map((c) => ({
            value: c,
            label: c,
            disabled: usedCategories.has(c)
          }))}
        />

        <MoneyField
          id="budget-maximum"
          label="Maximum Spend"
          value={maximum}
          onChange={setMaximum}
          error={errors.maximum}
          hint="e.g. 50"
        />

        <SelectField
          id="budget-theme"
          label="Colour Tag"
          value={theme}
          onChange={setTheme}
          swatch={theme}
          options={THEMES.map((t) => ({
            value: t.value,
            label: t.name,
            disabled: usedThemes.has(t.value)
          }))}
        />

        <button type="submit" className="btn btn-primary btn-block">
          {editing ? 'Save Changes' : 'Add Budget'}
        </button>
      </form>
    </Modal>
  )
}

function DeleteBudget({ budget, onClose }: { budget: Budget; onClose: () => void }) {
  const { dispatch } = useFinance()
  return (
    <Modal
      title={`Delete '${budget.category}'?`}
      description="Are you sure you want to delete this budget? This action cannot be reversed and all the data inside it will be removed forever."
      onClose={onClose}
    >
      <button
        type="button"
        className="btn btn-danger btn-block"
        onClick={() => {
          dispatch({ type: 'delete-budget', id: budget.id })
          onClose()
        }}
      >
        Yes, Confirm Deletion
      </button>
      <button type="button" className="btn btn-ghost btn-block" onClick={onClose}>
        No, Go Back
      </button>
    </Modal>
  )
}

export function Budgets() {
  const { state } = useFinance()
  const rows = budgetSpend(state.transactions, state.budgets)
  const [form, setForm] = useState<FormMode | null>(null)
  const [deleting, setDeleting] = useState<Budget | null>(null)

  return (
    <>
      <header className="page-head">
        <h1 className="page-title">Budgets</h1>
        <button type="button" className="btn btn-primary" onClick={() => setForm({ kind: 'add' })}>
          + Add New Budget
        </button>
      </header>

      {rows.length === 0 ? (
        <Card>
          <EmptyState message="No budgets yet. Add one to start tracking a category." />
        </Card>
      ) : (
        <div className="budgets-layout">
          <Card className="budgets-chart-card">
            <BudgetDonut data={rows} size={260} />
            <SectionHeader title="Spending Summary" />
            <ul className="spending-summary">
              {rows.map(({ budget, spent }) => (
                <li key={budget.id} style={{ borderLeftColor: budget.theme }}>
                  <span>{budget.category}</span>
                  <span className="spending-figures">
                    <strong>{money(spent)}</strong> of {money(budget.maximum)}
                  </span>
                </li>
              ))}
            </ul>
          </Card>

          <div className="budget-cards">
            {rows.map(({ budget, spent, remaining }) => {
              const latest = latestInCategory(state.transactions, budget.category)
              return (
                <Card key={budget.id}>
                  <header className="budget-card-head">
                    <h2>
                      <span className="dot" style={{ backgroundColor: budget.theme }} aria-hidden="true" />
                      {budget.category}
                    </h2>
                    <div className="row-actions">
                      <button
                        type="button"
                        className="btn btn-ghost btn-sm"
                        onClick={() => setForm({ kind: 'edit', budget })}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-ghost btn-sm btn-danger-text"
                        onClick={() => setDeleting(budget)}
                      >
                        Delete
                      </button>
                    </div>
                  </header>

                  <p className="budget-maximum">Maximum of {money(budget.maximum)}</p>
                  <ProgressBar value={spent} of={budget.maximum} color={budget.theme} height={24} />

                  <div className="budget-split">
                    <div style={{ borderLeftColor: budget.theme }}>
                      <span>Spent</span>
                      <strong>{money(spent)}</strong>
                    </div>
                    <div style={{ borderLeftColor: '#f8f4f0' }}>
                      <span>Remaining</span>
                      <strong>{money(remaining)}</strong>
                    </div>
                  </div>

                  <div className="budget-latest">
                    <SectionHeader title="Latest Spending" />
                    {latest.length === 0 ? (
                      <EmptyState message="No spending in this category yet." />
                    ) : (
                      <ul className="tx-list tx-list-compact">
                        {latest.map((tx) => (
                          <li key={tx.id}>
                            <Avatar name={tx.name} />
                            <span className="tx-name">{tx.name}</span>
                            <span className="tx-right">
                              <strong className="amount-out">{signedMoney(tx.amount)}</strong>
                              <span className="tx-date">{formatDate(tx.date)}</span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      )}

      {form && <BudgetForm mode={form} onClose={() => setForm(null)} />}
      {deleting && <DeleteBudget budget={deleting} onClose={() => setDeleting(null)} />}
    </>
  )
}
