import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
import type { FlowPoint } from '../lib/derive'
import { money, moneyWhole } from '../lib/format'

function FlowTooltip({
  active,
  payload,
  label
}: {
  active?: boolean
  payload?: { payload: FlowPoint }[]
  label?: string
}) {
  if (!active || !payload?.length) return null
  const point = payload[0].payload

  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip-date">{label}</p>
      <p className="chart-tooltip-row">
        <span>Balance</span>
        <strong>{money(point.balance)}</strong>
      </p>
      {point.income > 0 && (
        <p className="chart-tooltip-row">
          <span>In</span>
          <strong className="amount-in">{money(point.income)}</strong>
        </p>
      )}
      {point.expenses > 0 && (
        <p className="chart-tooltip-row">
          <span>Out</span>
          <strong>{money(point.expenses)}</strong>
        </p>
      )}
    </div>
  )
}

export function FlowChart({ data, height = 220 }: { data: FlowPoint[]; height?: number }) {
  return (
    <div className="flow-chart" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id="flowFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3ecf9a" stopOpacity={0.45} />
              <stop offset="100%" stopColor="#3ecf9a" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" />
          <XAxis
            dataKey="label"
            tickLine={false}
            axisLine={false}
            interval="preserveStartEnd"
            minTickGap={40}
            tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 11 }}
          />
          <YAxis
            width={58}
            domain={[0, (max: number) => Math.ceil((max * 1.08) / 250) * 250]}
            tickLine={false}
            axisLine={false}
            tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 11 }}
            tickFormatter={(value: number) => moneyWhole(value)}
          />
          <Tooltip content={<FlowTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.25)' }} />

          <Area
            type="monotone"
            dataKey="balance"
            stroke="#3ecf9a"
            strokeWidth={2.5}
            fill="url(#flowFill)"
            animationDuration={1100}
            animationEasing="ease-out"
            dot={false}
            activeDot={{ r: 4, strokeWidth: 0, fill: '#3ecf9a' }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
