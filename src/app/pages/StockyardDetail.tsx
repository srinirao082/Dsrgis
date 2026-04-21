import { useState } from "react";
import { useParams, Link } from "react-router";
import { ChevronRight, Home, Package, Search, Calendar, Truck, Activity, TrendingUp, FileText } from "lucide-react";

const ordersData: Record<string, any[]> = {
  "1": [
    { id: "ORD-2024-1001", date: "2024-04-18", customer: "ABC Construction Ltd", vehicle: "TS-09-AB-1234", quantity: 150 },
    { id: "ORD-2024-1002", date: "2024-04-18", customer: "XYZ Builders", vehicle: "TS-09-CD-5678", quantity: 200 },
    { id: "ORD-2024-1003", date: "2024-04-17", customer: "Delta Infrastructure", vehicle: "TS-09-EF-9012", quantity: 175 },
    { id: "ORD-2024-1004", date: "2024-04-17", customer: "Omega Projects", vehicle: "TS-09-GH-3456", quantity: 125 },
    { id: "ORD-2024-1005", date: "2024-04-16", customer: "Prime Developers", vehicle: "TS-09-IJ-7890", quantity: 180 },
    { id: "ORD-2024-1006", date: "2024-04-16", customer: "Metro Construction", vehicle: "TS-09-KL-2345", quantity: 160 },
  ],
};

export function StockyardDetail() {
  const { stockyardId } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const orders = ordersData[stockyardId || "1"] || [];
  const stockyardName = "Kukatpally Stockyard";

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.vehicle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = !dateFilter || order.date === dateFilter;
    return matchesSearch && matchesDate;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      <div className="max-w-[1600px] mx-auto px-8 py-8">
        <div className="flex items-center gap-2 text-[12px] text-gray-500 mb-6">
          <Link to="/" className="hover:text-indigo-600 transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            Dashboard
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/district/1" className="hover:text-indigo-600 transition-colors">
            Hyderabad
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900 font-medium">{stockyardName}</span>
        </div>

        <div className="flex gap-6">
          <div className="flex-1 space-y-6">
            <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-8 shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="w-8 h-8 text-white" />
                  <div>
                    <h1 className="text-[32px] font-bold text-white tracking-tight">
                      {stockyardName}
                    </h1>
                    <p className="text-white/80 text-[13px]">
                      Order-level details and transaction history
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                    <p className="text-[11px] font-medium text-white/70 uppercase tracking-wide mb-1">
                      Total Orders
                    </p>
                    <p className="text-[28px] font-bold text-white">{orders.length}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                    <p className="text-[11px] font-medium text-white/70 uppercase tracking-wide mb-1">
                      Total Quantity
                    </p>
                    <p className="text-[28px] font-bold text-white">
                      {orders.reduce((sum, o) => sum + o.quantity, 0).toLocaleString()} MT
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                    <p className="text-[11px] font-medium text-white/70 uppercase tracking-wide mb-1">
                      Avg Order Size
                    </p>
                    <p className="text-[28px] font-bold text-white">
                      {Math.round(orders.reduce((sum, o) => sum + o.quantity, 0) / orders.length)} MT
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                    <p className="text-[11px] font-medium text-white/70 uppercase tracking-wide mb-1">
                      Status
                    </p>
                    <p className="text-[28px] font-bold text-emerald-300">Active</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-[15px] font-semibold text-gray-900">Order History</h3>
                  <div className="flex gap-3">
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                      <input
                        type="date"
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                        className="pl-9 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-[12px] focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                      />
                    </div>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search orders..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-9 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-[12px] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                      />
                    </div>
                  </div>
                </div>
              </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-[12px] font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-[12px] font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-[12px] font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-[12px] font-medium text-gray-500 uppercase tracking-wider">
                  Vehicle
                </th>
                <th className="px-6 py-3 text-left text-[12px] font-medium text-gray-500 uppercase tracking-wider">
                  Quantity (MT)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-[14px] font-medium text-blue-600">{order.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[14px] text-gray-700">
                    {new Date(order.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[14px] text-gray-900">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-gray-400" />
                      <span className="text-[14px] text-gray-700 font-mono">{order.vehicle}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[14px] text-gray-700">
                    {order.quantity.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

              <div className="px-6 py-4 border-t border-gray-100">
                <p className="text-[12px] text-gray-500">
                  Showing {filteredOrders.length} of {orders.length} orders
                </p>
              </div>
            </div>
          </div>

          <div className="w-80 space-y-6">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-5 h-5 text-white" />
                <h3 className="text-[14px] font-semibold">Recent Activity</h3>
              </div>
              <p className="text-[13px] text-white/90 leading-relaxed mb-4">
                Peak order processing during morning hours with consistent vehicle throughput.
              </p>
              <div className="pt-3 border-t border-white/20">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] text-white/70">Last Order</span>
                  <span className="text-[11px] font-semibold text-white">12 min ago</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-purple-500" />
                <h3 className="text-[14px] font-semibold text-gray-900">Performance Metrics</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-[12px] text-gray-600">Processing Time</span>
                  <span className="text-[12px] font-semibold text-gray-900">8.5 min avg</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-[12px] text-gray-600">Daily Throughput</span>
                  <span className="text-[12px] font-semibold text-gray-900">42 orders</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-[12px] text-gray-600">Efficiency</span>
                  <span className="text-[12px] font-semibold text-emerald-600">96.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-600">Quality Score</span>
                  <span className="px-2 py-0.5 bg-emerald-100 rounded text-[11px] font-semibold text-emerald-700">
                    Excellent
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-gray-400" />
                <h3 className="text-[14px] font-semibold text-white">Compliance</h3>
              </div>
              <div className="space-y-2.5">
                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-400">Permit Status</span>
                  <span className="px-2 py-0.5 bg-emerald-500/20 rounded text-[11px] font-semibold text-emerald-400">
                    Valid
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-400">Last Inspection</span>
                  <span className="text-[12px] font-medium text-white">Mar 15, 2026</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-400">Next Audit</span>
                  <span className="text-[12px] font-medium text-white">May 1, 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
