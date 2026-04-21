import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";
import { TrendingUp, Activity, AlertCircle } from "lucide-react";

const ordersTrendData = [
  { month: "Jan", value: 820 },
  { month: "Feb", value: 920 },
  { month: "Mar", value: 1100 },
  { month: "Apr", value: 1350 },
  { month: "May", value: 1200 },
  { month: "Jun", value: 1450 },
];

const quantityTrendData = [
  { month: "Jan", value: 82000 },
  { month: "Feb", value: 92000 },
  { month: "Mar", value: 110000 },
  { month: "Apr", value: 135000 },
  { month: "May", value: 120000 },
  { month: "Jun", value: 145000 },
];

export function InsightsPanel() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-blue-500" />
          <h3 className="text-[15px] font-semibold text-gray-900">Orders Trend</h3>
        </div>
        <ResponsiveContainer width="100%" height={120}>
          <AreaChart data={ordersTrendData}>
            <defs>
              <linearGradient id="ordersGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255,255,255,0.95)',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                fontSize: '12px',
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={2}
              fill="url(#ordersGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
        <p className="text-[13px] text-gray-500 mt-2">
          +18% increase over last 6 months
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="w-5 h-5 text-green-500" />
          <h3 className="text-[15px] font-semibold text-gray-900">Quantity Trend</h3>
        </div>
        <ResponsiveContainer width="100%" height={120}>
          <AreaChart data={quantityTrendData}>
            <defs>
              <linearGradient id="quantityGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255,255,255,0.95)',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                fontSize: '12px',
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#10b981"
              strokeWidth={2}
              fill="url(#quantityGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
        <p className="text-[13px] text-gray-500 mt-2">
          +15% increase in total quantity
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 className="text-[14px] font-semibold text-blue-900 mb-1">
              Quick Stats
            </h4>
            <div className="space-y-2 mt-3">
              <div className="flex justify-between items-center">
                <span className="text-[13px] text-blue-700">Forest Cover</span>
                <span className="text-[13px] font-semibold text-blue-900">23.4%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[13px] text-blue-700">River Length</span>
                <span className="text-[13px] font-semibold text-blue-900">1,245 km</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[13px] text-blue-700">Active Permits</span>
                <span className="text-[13px] font-semibold text-blue-900">342</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
