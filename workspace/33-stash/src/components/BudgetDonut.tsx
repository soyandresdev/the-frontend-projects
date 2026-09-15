import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { money, moneyWhole } from '../lib/format'
import type { Budget } from '../types'

type Slice = { budget: Budget; spent: number }

export function BudgetDonut({ data, size = 240 }: { data: Slice[]; size?: number }) {
  const totalSpent = data.reduce((sum, d) => sum + d.spent, 0)
  const totalLimit = data.reduce((sum, d) => sum + d.budget.maximum, 0)

  // A pie needs non-zero values to render; fall back to equal slivers so the
  // ring still reads as a chart when nothing has been spent yet.
  const chartData = data.map((d) => ({
    name: d.budget.category,
    value: d.spent > 0 ? d.spent : 0.0001,
    fill: d.budget.theme
  }))

  return (
    <div className="donut" style={{ height: size }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip
            formatter={(value: number, name: string) => [money(value), name]}
            contentStyle={{
              background: '#15161c',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 10,
              color: '#f4f4f6',
              fontSize: 12
            }}
            itemStyle={{ color: '#f4f4f6' }}
          />
          <Pie
            data={chartData}
            dataKey="value"
            innerRadius="62%"
            outerRadius="100%"
            startAngle={90}
            endAngle={-270}
            stroke="none"
            paddingAngle={1.5}
            cornerRadius={6}
            animationDuration={900}
            animationEasing="ease-out"
          >
            {chartData.map((slice) => (
              <Cell key={slice.name} fill={slice.fill} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="donut-center">
        <strong>{money(totalSpent)}</strong>
        <span>of {moneyWhole(totalLimit)} limit</span>
      </div>
    </div>
  )
}
