import { HashRouter, Route, Routes } from 'react-router-dom'
import { FinanceProvider } from './store/finance'
import { Sidebar } from './components/Sidebar'
import { Overview } from './pages/Overview'
import { Transactions } from './pages/Transactions'
import { Budgets } from './pages/Budgets'
import { Pots } from './pages/Pots'
import { RecurringBills } from './pages/RecurringBills'

export function App() {
  return (
    <FinanceProvider>
      {/* Hash routing: the demo is published as a static build under a
          subpath, so path-based routes would 404 on refresh or deep link. */}
      <HashRouter>
        <div className="app-shell">
          <Sidebar />
          <main className="app-main">
            {/* Named for the View Transitions API: the browser snapshots this
                subtree and crossfades it when the route changes. */}
            <div className="page">
              <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/budgets" element={<Budgets />} />
                <Route path="/pots" element={<Pots />} />
                <Route path="/bills" element={<RecurringBills />} />
              </Routes>
            </div>
          </main>
        </div>
      </HashRouter>
    </FinanceProvider>
  )
}
