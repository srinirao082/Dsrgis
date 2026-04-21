import { TrendingUp, TrendingDown } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
}

export function KPICard({ title, value, trend, trendUp }: KPICardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group cursor-pointer hover:-translate-y-0.5">
      <div className="flex items-start justify-between mb-3">
        <p className="text-[13px] text-gray-500 uppercase tracking-wide">{title}</p>
        {trendUp ? (
          <TrendingUp className="w-4 h-4 text-green-500" />
        ) : (
          <TrendingDown className="w-4 h-4 text-red-500" />
        )}
      </div>
      <p className="text-[32px] font-semibold text-gray-900 tracking-tight mb-1">
        {value}
      </p>
      <p className={`text-[13px] ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
        {trend} vs last period
      </p>
    </div>
  );
}
