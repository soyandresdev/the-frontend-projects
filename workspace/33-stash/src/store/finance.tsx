import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode
} from 'react'
import type { Budget, FinanceState, Pot } from '../types'
import { createSeedState } from '../data/seed'
import { uid } from '../lib/format'

const STORAGE_KEY = 'stash-finance-state'

type Action =
  | { type: 'add-budget'; budget: Omit<Budget, 'id'> }
  | { type: 'update-budget'; id: string; budget: Omit<Budget, 'id'> }
  | { type: 'delete-budget'; id: string }
  | { type: 'add-pot'; pot: Omit<Pot, 'id' | 'total'> }
  | { type: 'update-pot'; id: string; pot: Omit<Pot, 'id' | 'total'> }
  | { type: 'delete-pot'; id: string }
  | { type: 'pot-transfer'; id: string; amount: number; direction: 'in' | 'out' }
  | { type: 'reset' }

function reducer(state: FinanceState, action: Action): FinanceState {
  switch (action.type) {
    case 'add-budget':
      return { ...state, budgets: [...state.budgets, { id: uid(), ...action.budget }] }

    case 'update-budget':
      return {
        ...state,
        budgets: state.budgets.map((b) => (b.id === action.id ? { id: b.id, ...action.budget } : b))
      }

    case 'delete-budget':
      return { ...state, budgets: state.budgets.filter((b) => b.id !== action.id) }

    case 'add-pot':
      return { ...state, pots: [...state.pots, { id: uid(), total: 0, ...action.pot }] }

    case 'update-pot':
      return {
        ...state,
        pots: state.pots.map((p) => (p.id === action.id ? { ...p, ...action.pot } : p))
      }

    case 'delete-pot': {
      // Money in a deleted pot returns to the main balance rather than vanishing.
      const pot = state.pots.find((p) => p.id === action.id)
      return {
        ...state,
        balance: { current: state.balance.current + (pot?.total ?? 0) },
        pots: state.pots.filter((p) => p.id !== action.id)
      }
    }

    case 'pot-transfer': {
      const pot = state.pots.find((p) => p.id === action.id)
      if (!pot || action.amount <= 0) return state

      // Never move more than exists on either side of the transfer.
      const moved =
        action.direction === 'in'
          ? Math.min(action.amount, state.balance.current)
          : Math.min(action.amount, pot.total)

      if (moved <= 0) return state
      const delta = action.direction === 'in' ? moved : -moved

      return {
        ...state,
        balance: { current: state.balance.current - delta },
        pots: state.pots.map((p) => (p.id === pot.id ? { ...p, total: p.total + delta } : p))
      }
    }

    case 'reset':
      return createSeedState()

    default:
      return state
  }
}

function loadState(): FinanceState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return createSeedState()
    const parsed = JSON.parse(raw) as FinanceState
    // Guard against a stale or half-written payload from an older build.
    if (
      !parsed ||
      !Array.isArray(parsed.transactions) ||
      !Array.isArray(parsed.budgets) ||
      !Array.isArray(parsed.pots) ||
      typeof parsed.balance?.current !== 'number'
    ) {
      return createSeedState()
    }
    return parsed
  } catch {
    return createSeedState()
  }
}

type FinanceContextValue = {
  state: FinanceState
  dispatch: React.Dispatch<Action>
}

const FinanceContext = createContext<FinanceContextValue | null>(null)

export function FinanceProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadState)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // Storage unavailable (private mode, blocked cookies) — stay in memory.
    }
  }, [state])

  const value = useMemo(() => ({ state, dispatch }), [state])

  return <FinanceContext.Provider value={value}>{children}</FinanceContext.Provider>
}

export function useFinance(): FinanceContextValue {
  const ctx = useContext(FinanceContext)
  if (!ctx) throw new Error('useFinance must be used inside FinanceProvider')
  return ctx
}
