import { useParams, useNavigate, Link } from "react-router";
import { ChevronRight, Home, MapPin, Package, TrendingUp, ArrowRight, Activity, Layers } from "lucide-react";

const stockyardData: Record<string, any[]> = {
  "1": [
    { id: 1, name: "Kukatpally Stockyard", orders: 245, quantity: 24500, status: "Active" },
    { id: 2, name: "Secunderabad Depot", orders: 189, quantity: 18900, status: "Active" },
    { id: 3, name: "Miyapur Storage", orders: 312, quantity: 31200, status: "Active" },
    { id: 4, name: "LB Nagar Facility", orders: 198, quantity: 19800, status: "Active" },
  ],
};

const districtNames: Record<string, string> = {
  "1": "Hyderabad",
  "2": "Warangal",
  "3": "Khammam",
};

export function DistrictDetail() {
  const { districtId } = useParams();
  const navigate = useNavigate();
  const districtName = districtNames[districtId || "1"] || "Unknown District";
  const stockyards = stockyardData[districtId || "1"] || [];

  const totalOrders = stockyards.reduce((sum, s) => sum + s.orders, 0);
  const totalQuantity = stockyards.reduce((sum, s) => sum + s.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      <div className="max-w-[1600px] mx-auto px-8 py-8">
        <div className="flex items-center gap-2 text-[12px] text-gray-500 mb-6">
          <Link to="/" className="hover:text-indigo-600 transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            Dashboard
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900 font-medium">{districtName}</span>
        </div>

        <div className="flex gap-6">
          <div className="flex-1 space-y-6">
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                  <div>
                    <h1 className="text-[32px] font-bold text-white tracking-tight">
                      {districtName} District
                    </h1>
                    <p className="text-white/80 text-[13px]">
                      Detailed stockyard operations and analytics
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                    <p className="text-[11px] font-medium text-white/70 uppercase tracking-wide mb-1">
                      Total Orders
                    </p>
                    <p className="text-[28px] font-bold text-white mb-1">
                      {totalOrders.toLocaleString()}
                    </p>
                    <p className="text-[12px] text-emerald-300">+14.2%</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                    <p className="text-[11px] font-medium text-white/70 uppercase tracking-wide mb-1">
                      Total Quantity
                    </p>
                    <p className="text-[28px] font-bold text-white mb-1">
                      {(totalQuantity / 1000).toFixed(0)}K MT
                    </p>
                    <p className="text-[12px] text-emerald-300">+11.8%</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                    <p className="text-[11px] font-medium text-white/70 uppercase tracking-wide mb-1">
                      Active Stockyards
                    </p>
                    <p className="text-[28px] font-bold text-white mb-1">
                      {stockyards.length}
                    </p>
                    <p className="text-[12px] text-emerald-300">+2 new</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-[15px] font-semibold text-gray-900">Stockyards</h3>
              </div>

              <div className="divide-y divide-gray-100">
                {stockyards.map((stockyard) => (
                  <button
                    key={stockyard.id}
                    onClick={() => navigate(`/stockyard/${stockyard.id}`)}
                    className="w-full px-6 py-5 flex items-center justify-between hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/30 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-md">
                        <Package className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="text-[14px] font-semibold text-gray-900 mb-0.5">
                          {stockyard.name}
                        </p>
                        <p className="text-[12px] text-gray-500">
                          Active facility
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-center">
                        <p className="text-[11px] text-gray-500 uppercase tracking-wide mb-0.5">Orders</p>
                        <p className="text-[18px] font-semibold text-gray-900">
                          {stockyard.orders.toLocaleString()}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-[11px] text-gray-500 uppercase tracking-wide mb-0.5">Quantity</p>
                        <p className="text-[18px] font-semibold text-gray-900">
                          {(stockyard.quantity / 1000).toFixed(1)}K MT
                        </p>
                      </div>
                      <div className="px-3 py-1.5 bg-emerald-50 rounded-lg">
                        <p className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wide">
                          {stockyard.status}
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
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-white" />
                <h3 className="text-[14px] font-semibold">Performance</h3>
              </div>
              <p className="text-[13px] text-white/90 leading-relaxed">
                {districtName} shows strong operational performance with consistent order volumes and
                efficient stockyard utilization.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-5 h-5 text-purple-500" />
                <h3 className="text-[14px] font-semibold text-gray-900">Activity Breakdown</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-[12px] text-gray-600">Peak Hours</span>
                  <span className="text-[12px] font-semibold text-gray-900">9 AM - 5 PM</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-[12px] text-gray-600">Avg Order Size</span>
                  <span className="text-[12px] font-semibold text-gray-900">
                    {Math.round(totalQuantity / totalOrders)} MT
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-[12px] text-gray-600">Efficiency Rate</span>
                  <span className="text-[12px] font-semibold text-emerald-600">94.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-600">Compliance</span>
                  <span className="px-2 py-0.5 bg-emerald-100 rounded text-[11px] font-semibold text-emerald-700">
                    Approved
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-5 h-5 text-gray-400" />
                <h3 className="text-[14px] font-semibold text-white">Environmental Status</h3>
              </div>
              <div className="space-y-2.5">
                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-400">Forest Coverage</span>
                  <span className="text-[12px] font-medium text-white">23.4%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-400">River Length</span>
                  <span className="text-[12px] font-medium text-white">1,245 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-400">Protected Zones</span>
                  <span className="text-[12px] font-medium text-emerald-400">12 areas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
