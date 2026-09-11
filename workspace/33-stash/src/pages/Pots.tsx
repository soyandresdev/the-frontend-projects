import { useState } from 'react'
import { useFinance } from '../store/finance'
import { money, percent } from '../lib/format'
import { Card, EmptyState, ProgressBar } from '../components/ui'
import { Modal } from '../components/Modal'
import { MoneyField, SelectField, TextField } from '../components/fields'
import { THEMES, type Pot } from '../types'

function parseAmount(raw: string): number | null {
  const value = Number(raw.replace(/,/g, '').trim())
  if (!Number.isFinite(value) || value <= 0) return null
  return value
}

type FormMode = { kind: 'add' } | { kind: 'edit'; pot: Pot }

function PotForm({ mode, onClose }: { mode: FormMode; onClose: () => void }) {
  const { state, dispatch } = useFinance()
  const editing = mode.kind === 'edit' ? mode.pot : null

  const [name, setName] = useState(editing?.name ?? '')
  const [target, setTarget] = useState(editing ? String(editing.target) : '')
  const [theme, setTheme] = useState(editing?.theme ?? THEMES[0].value)
  const [errors, setErrors] = useState<{ name?: string; target?: string }>({})

  const usedThemes = new Set(state.pots.filter((p) => p.id !== editing?.id).map((p) => p.theme))

  function submit(event: React.FormEvent) {
    event.preventDefault()
    const amount = parseAmount(target)
    const next: typeof errors = {}

    if (!name.trim()) next.name = 'Pot name is required.'
    if (!target.trim()) next.target = 'Target is required.'
    else if (amount === null) next.target = 'Enter a target greater than zero.'

    setErrors(next)
    if (Object.keys(next).length > 0 || amount === null) return

    if (editing) {
      dispatch({ type: 'update-pot', id: editing.id, pot: { name: name.trim(), target: amount, theme } })
    } else {
      dispatch({ type: 'add-pot', pot: { name: name.trim(), target: amount, theme } })
    }
    onClose()
  }

  return (
    <Modal
      title={editing ? 'Edit Pot' : 'Add New Pot'}
      description={
        editing
          ? 'Update the name, target or colour of this pot.'
          : 'Create a pot to set savings targets. These can help keep you on track as you save for special purchases.'
      }
      onClose={onClose}
    >
      <form onSubmit={submit} noValidate>
        <TextField
          id="pot-name"
          label="Pot Name"
          value={name}
          onChange={setName}
          error={errors.name}
          maxLength={30}
          placeholder="e.g. Rainy Days"
          hint={`${30 - name.length} characters left`}
        />

        <MoneyField
          id="pot-target"
          label="Target"
          value={target}
          onChange={setTarget}
          error={errors.target}
          hint="e.g. 2000"
        />

        <SelectField
          id="pot-theme"
          label="Colour Tag"
          value={theme}
          onChange={setTheme}
          swatch={theme}
          options={THEMES.map((t) => ({ value: t.value, label: t.name, disabled: usedThemes.has(t.value) }))}
        />

        <button type="submit" className="btn btn-primary btn-block">
          {editing ? 'Save Changes' : 'Add Pot'}
        </button>
      </form>
    </Modal>
  )
}

function TransferForm({
  pot,
  direction,
  onClose
}: {
  pot: Pot
  direction: 'in' | 'out'
  onClose: () => void
}) {
  const { state, dispatch } = useFinance()
  const [raw, setRaw] = useState('')
  const [error, setError] = useState<string>()

  const adding = direction === 'in'
  const ceiling = adding ? state.balance.current : pot.total
  const parsed = parseAmount(raw)
  const preview = parsed ? Math.max(0, pot.total + (adding ? parsed : -parsed)) : pot.total

  function submit(event: React.FormEvent) {
    event.preventDefault()

    if (!raw.trim()) {
      setError('Amount is required.')
      return
    }
    if (parsed === null) {
      setError('Enter an amount greater than zero.')
      return
    }
    if (parsed > ceiling) {
      setError(
        adding
          ? `You only have ${money(state.balance.current)} available to move.`
          : `This pot only holds ${money(pot.total)}.`
      )
      return
    }

    setError(undefined)
    dispatch({ type: 'pot-transfer', id: pot.id, amount: parsed, direction })
    onClose()
  }

  return (
    <Modal
      title={adding ? `Add to '${pot.name}'` : `Withdraw from '${pot.name}'`}
      description={
        adding
          ? 'Move money from your main balance into this pot.'
          : 'Move money out of this pot and back into your main balance.'
      }
      onClose={onClose}
    >
      <form onSubmit={submit} noValidate>
        <div className="transfer-preview">
          <span>New amount</span>
          <strong>{money(preview)}</strong>
        </div>
        <ProgressBar value={preview} of={pot.target} color={adding ? pot.theme : '#c94736'} height={10} />
        <p className="transfer-target">
          {percent(preview, pot.target).toFixed(2)}% of {money(pot.target)} target
        </p>

        <MoneyField
          id="transfer-amount"
          label={adding ? 'Amount to Add' : 'Amount to Withdraw'}
          value={raw}
          onChange={setRaw}
          error={error}
          hint={adding ? `${money(state.balance.current)} available` : `${money(pot.total)} in this pot`}
        />

        <button type="submit" className="btn btn-primary btn-block">
          {adding ? 'Confirm Addition' : 'Confirm Withdrawal'}
        </button>
      </form>
    </Modal>
  )
}

function DeletePot({ pot, onClose }: { pot: Pot; onClose: () => void }) {
  const { dispatch } = useFinance()
  return (
    <Modal
      title={`Delete '${pot.name}'?`}
      description={`Are you sure you want to delete this pot? The ${money(
        pot.total
      )} saved inside it returns to your main balance.`}
      onClose={onClose}
    >
      <button
        type="button"
        className="btn btn-danger btn-block"
        onClick={() => {
          dispatch({ type: 'delete-pot', id: pot.id })
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

export function Pots() {
  const { state } = useFinance()
  const [form, setForm] = useState<FormMode | null>(null)
  const [transfer, setTransfer] = useState<{ pot: Pot; direction: 'in' | 'out' } | null>(null)
  const [deleting, setDeleting] = useState<Pot | null>(null)

  return (
    <>
      <header className="page-head">
        <h1 className="page-title">Pots</h1>
        <button type="button" className="btn btn-primary" onClick={() => setForm({ kind: 'add' })}>
          + Add New Pot
        </button>
      </header>

      {state.pots.length === 0 ? (
        <Card>
          <EmptyState message="No pots yet. Create one to start saving towards something." />
        </Card>
      ) : (
        <div className="pot-cards">
          {state.pots.map((pot) => (
            <Card key={pot.id}>
              <header className="budget-card-head">
                <h2>
                  <span className="dot" style={{ backgroundColor: pot.theme }} aria-hidden="true" />
                  {pot.name}
                </h2>
                <div className="row-actions">
                  <button
                    type="button"
                    className="btn btn-ghost btn-sm"
                    onClick={() => setForm({ kind: 'edit', pot })}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-ghost btn-sm btn-danger-text"
                    onClick={() => setDeleting(pot)}
                  >
                    Delete
                  </button>
                </div>
              </header>

              <div className="pot-total-row">
                <span>Total Saved</span>
                <strong>{money(pot.total)}</strong>
              </div>

              <ProgressBar value={pot.total} of={pot.target} color={pot.theme} />
              <div className="pot-meta">
                <span>{percent(pot.total, pot.target).toFixed(2)}%</span>
                <span>Target of {money(pot.target)}</span>
              </div>

              <div className="pot-actions">
                <button
                  type="button"
                  className="btn btn-soft"
                  onClick={() => setTransfer({ pot, direction: 'in' })}
                >
                  + Add Money
                </button>
                <button
                  type="button"
                  className="btn btn-soft"
                  onClick={() => setTransfer({ pot, direction: 'out' })}
                  disabled={pot.total <= 0}
                >
                  Withdraw
                </button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {form && <PotForm mode={form} onClose={() => setForm(null)} />}
      {transfer && (
        <TransferForm pot={transfer.pot} direction={transfer.direction} onClose={() => setTransfer(null)} />
      )}
      {deleting && <DeletePot pot={deleting} onClose={() => setDeleting(null)} />}
    </>
  )
}
