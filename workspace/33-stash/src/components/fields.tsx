import clsx from 'clsx'
import type { ReactNode } from 'react'

function FieldShell({
  id,
  label,
  error,
  hint,
  children
}: {
  id: string
  label: string
  error?: string
  hint?: ReactNode
  children: ReactNode
}) {
  return (
    <div className={clsx('field', error && 'field-invalid')}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error ? (
        <p className="field-error" id={`${id}-error`} role="alert">
          {error}
        </p>
      ) : (
        hint && <p className="field-hint">{hint}</p>
      )}
    </div>
  )
}

export function TextField({
  id,
  label,
  value,
  onChange,
  error,
  hint,
  placeholder,
  maxLength
}: {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  hint?: ReactNode
  placeholder?: string
  maxLength?: number
}) {
  return (
    <FieldShell id={id} label={label} error={error} hint={hint}>
      <input
        id={id}
        type="text"
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
      />
    </FieldShell>
  )
}

export function MoneyField({
  id,
  label,
  value,
  onChange,
  error,
  hint
}: {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  hint?: ReactNode
}) {
  return (
    <FieldShell id={id} label={label} error={error} hint={hint}>
      <div className="money-input">
        <span aria-hidden="true">$</span>
        <input
          id={id}
          type="text"
          inputMode="decimal"
          value={value}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </FieldShell>
  )
}

export function SelectField<T extends string>({
  id,
  label,
  value,
  options,
  onChange,
  error,
  swatch
}: {
  id: string
  label: string
  value: T
  options: { value: T; label: string; disabled?: boolean }[]
  onChange: (value: T) => void
  error?: string
  swatch?: string
}) {
  return (
    <FieldShell id={id} label={label} error={error}>
      <div className="select-wrap">
        {swatch && <span className="select-swatch" style={{ backgroundColor: swatch }} />}
        <select
          id={id}
          value={value}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          onChange={(e) => onChange(e.target.value as T)}
          className={clsx(swatch && 'has-swatch')}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
              {opt.disabled ? ' (already used)' : ''}
            </option>
          ))}
        </select>
      </div>
    </FieldShell>
  )
}
