import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowRight, MapPin, TrendingUp, Package, Mountain, Layers, Sparkles, Activity, Clock } from "lucide-react";

const districts = [
  { id: 1, name: "Hyderabad", stockyards: 45, orders: 1250, quantity: 125000, mines: 8, eoLands: 12, trend: "+12.5%" },
  { id: 2, name: "Warangal", stockyards: 38, orders: 980, quantity: 98000, mines: 12, eoLands: 18, trend: "+8.3%" },
  { id: 3, name: "Khammam", stockyards: 52, orders: 1450, quantity: 145000, mines: 15, eoLands: 22, trend: "+15.2%" },
  { id: 4, name: "Nalgonda", stockyards: 41, orders: 1120, quantity: 112000, mines: 10, eoLands: 15, trend: "+9.1%" },
  { id: 5, name: "Karimnagar", stockyards: 35, orders: 890, quantity: 89000, mines: 9, eoLands: 13, trend: "+6.4%" },
  { id: 6, name: "Nizamabad", stockyards: 29, orders: 720, quantity: 72000, mines: 7, eoLands: 11, trend: "+4.2%" },
  { id: 7, name: "Adilabad", stockyards: 33, orders: 850, quantity: 85000, mines: 11, eoLands: 16, trend: "+7.8%" },
  { id: 8, name: "Medak", stockyards: 27, orders: 680, quantity: 68000, mines: 6, eoLands: 9, trend: "+3.5%" },
];

export function Dashboard() {
  const [selectedDistrict, setSelectedDistrict] = useState(districts[2]);
  const navigate = useNavigate();

  const totalStockyards = districts.reduce((sum, d) => sum + d.stockyards, 0);
  const totalOrders = districts.reduce((sum, d) => sum + d.orders, 0);
  const totalQuantity = districts.reduce((sum, d) => sum + d.quantity, 0);
  const totalMines = districts.reduce((sum, d) => sum + d.mines, 0);
  const totalEOLands = districts.reduce((sum, d) => sum + d.eoLands, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      <div className="max-w-[1600px] mx-auto px-8 py-8">
        <div className="mb-8">
          <h1 className="text-[28px] font-semibold text-gray-900 tracking-tight mb-1">
            District Survey Reports
          </h1>
          <p className="text-[14px] text-gray-500">
            GIS-driven analytics for sand mining operations
          </p>
        </div>

        <div className="flex gap-6">
          <div className="flex-1 space-y-6">
            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-3xl p-8 shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl -ml-24 -mb-24" />

              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                    <p className="text-[11px] font-medium text-white/90 uppercase tracking-wide">
                      Featured District
                    </p>
                  </div>
                </div>

                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-7 h-7 text-white" />
                      <h2 className="text-[36px] font-bold text-white tracking-tight">
                        {selectedDistrict.name}
                      </h2>
                    </div>
                    <p className="text-white/80 text-[14px]">
                      Primary mining district with highest activity
                    </p>
                  </div>
                  <div className="px-3 py-1.5 bg-emerald-400/90 rounded-lg">
                    <p className="text-[13px] font-semibold text-emerald-950">
                      {selectedDistrict.trend}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <p className="text-[11px] font-medium text-white/70 uppercase tracking-wide mb-1">
                      Orders
                    </p>
                    <p className="text-[24px] font-bold text-white">
                      {selectedDistrict.orders.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <p className="text-[11px] font-medium text-white/70 uppercase tracking-wide mb-1">
                      Quantity
                    </p>
                    <p className="text-[24px] font-bold text-white">
                      {(selectedDistrict.quantity / 1000).toFixed(0)}K MT
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <p className="text-[11px] font-medium text-white/70 uppercase tracking-wide mb-1">
                      Stockyards
                    </p>
                    <p className="text-[24px] font-bold text-white">
                      {selectedDistrict.stockyards}
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <p className="text-[11px] font-medium text-white/70 uppercase tracking-wide mb-1">
                      Mines
                    </p>
                    <p className="text-[24px] font-bold text-white">
                      {selectedDistrict.mines}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/map')}
                  className="group w-full bg-white hover:bg-gray-50 text-gray-900 px-6 py-3.5 rounded-xl font-medium text-[14px] flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
                >
                  View on Map
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-[15px] font-semibold text-gray-900">All Districts</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {districts.map((district) => (
                  <button
                    key={district.id}
                    onClick={() => setSelectedDistrict(district)}
                    className={`w-full px-6 py-4 flex items-center justify-between hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/30 transition-all group ${
                      selectedDistrict.id === district.id ? 'bg-gradient-to-r from-blue-50 to-purple-50/50' : ''
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        selectedDistrict.id === district.id
                          ? 'bg-gradient-to-br from-indigo-500 to-purple-500'
                          : 'bg-gradient-to-br from-gray-100 to-gray-200'
                      }`}>
                        <span className={`text-[13px] font-bold ${
                          selectedDistrict.id === district.id ? 'text-white' : 'text-gray-600'
                        }`}>
                          {district.name.substring(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div className="text-left">
                        <p className="text-[14px] font-semibold text-gray-900">{district.name}</p>
                        <p className="text-[12px] text-gray-500">
                          {district.stockyards} stockyards · {district.mines} mines
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-[13px] text-gray-500">Orders</p>
                        <p className="text-[16px] font-semibold text-gray-900">
                          {district.orders.toLocaleString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[13px] text-gray-500">Quantity</p>
                        <p className="text-[16px] font-semibold text-gray-900">
                          {(district.quantity / 1000).toFixed(0)}K
                        </p>
                      </div>
                      <div className="px-2.5 py-1 bg-emerald-50 rounded-lg">
                        <p className="text-[12px] font-semibold text-emerald-700">
                          {district.trend}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="w-80 space-y-6">
            <div className="space-y-3">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-5 text-white shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Package className="w-4 h-4 text-white/90" />
                  <p className="text-[11px] font-medium text-white/80 uppercase tracking-wide">
                    Total Orders
                  </p>
                </div>
                <p className="text-[32px] font-bold mb-1">{totalOrders.toLocaleString()}</p>
                <p className="text-[12px] text-white/80">+12.5% vs last period</p>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-5 text-white shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Activity className="w-4 h-4 text-white/90" />
                  <p className="text-[11px] font-medium text-white/80 uppercase tracking-wide">
                    Total Quantity
                  </p>
                </div>
                <p className="text-[32px] font-bold mb-1">{(totalQuantity / 1000).toFixed(0)}K MT</p>
                <p className="text-[12px] text-white/80">+8.3% vs last period</p>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-5 text-white shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Layers className="w-4 h-4 text-white/90" />
                  <p className="text-[11px] font-medium text-white/80 uppercase tracking-wide">
                    Stockyards
                  </p>
                </div>
                <p className="text-[32px] font-bold mb-1">{totalStockyards}</p>
                <p className="text-[12px] text-white/80">+5.2% vs last period</p>
              </div>

              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-5 text-white shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Mountain className="w-4 h-4 text-white/90" />
                  <p className="text-[11px] font-medium text-white/80 uppercase tracking-wide">
                    Mines
                  </p>
                </div>
                <p className="text-[32px] font-bold mb-1">{totalMines}</p>
                <p className="text-[12px] text-white/80">-2.1% vs last period</p>
              </div>

              <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-5 text-white shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-white/90" />
                  <p className="text-[11px] font-medium text-white/80 uppercase tracking-wide">
                    EO Lands
                  </p>
                </div>
                <p className="text-[32px] font-bold mb-1">{totalEOLands}</p>
                <p className="text-[12px] text-white/80">+3.7% vs last period</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <h3 className="text-[15px] font-semibold text-gray-900">Quick Insights</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                  <p className="text-[13px] text-gray-900">
                    Orders increased by <span className="font-semibold text-blue-700">18%</span> this quarter
                  </p>
                </div>
                <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                  <p className="text-[13px] text-gray-900">
                    Highest activity: <span className="font-semibold text-purple-700">Khammam</span>
                  </p>
                </div>
                <div className="p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-100">
                  <p className="text-[13px] text-gray-900">
                    Mines decreased by <span className="font-semibold text-orange-700">2.1%</span> slightly
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-gray-400" />
                <h3 className="text-[13px] font-semibold text-white">System Status</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-400">Last Updated</span>
                  <span className="text-[12px] font-medium text-white">2 min ago</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-400">Active Districts</span>
                  <span className="text-[12px] font-medium text-white">{districts.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-400">Data Coverage</span>
                  <span className="text-[12px] font-medium text-emerald-400">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
