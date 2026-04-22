import { useState } from "react";
import { useNavigate } from "react-router";
import {
  ArrowRight,
  MapPin,
  TrendingUp,
  Package,
  Mountain,
  Layers,
  Sparkles,
  Activity,
  Clock,
} from "lucide-react";

const districts = [
  { id: 1, name: "Hyderabad", stockyards: 45, orders: 1250, quantity: 125000, mines: 8, eoLands: 12, trend: "+12.5%" },
  { id: 2, name: "Warangal", stockyards: 38, orders: 980, quantity: 98000, mines: 12, eoLands: 18, trend: "+8.3%" },
  { id: 3, name: "Khammam", stockyards: 52, orders: 1450, quantity: 145000, mines: 15, eoLands: 22, trend: "+15.2%" },
  { id: 4, name: "Nalgonda", stockyards: 41, orders: 1120, quantity: 112000, mines: 10, eoLands: 15, trend: "+9.1%" },
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
    <div className="min-h-screen bg-[#F5F5F7]">
      <div className="max-w-[1600px] mx-auto px-8 py-8">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-[28px] font-semibold text-[#1D1D1F] mb-1">
            District Survey Reports
          </h1>
          <p className="text-[14px] text-[#6E6E73]">
            GIS-driven analytics for sand mining operations
          </p>
        </div>

        <div className="flex gap-6">

          {/* LEFT SIDE */}
          <div className="flex-1 space-y-6">

            {/* HERO CARD */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#1D1D1F] via-[#2C2C2E] to-[#3A3A3C] rounded-3xl p-8 shadow-xl">

              <div className="flex items-center gap-2 mb-6">
                <div className="px-3 py-1 bg-white/10 rounded-full">
                  <p className="text-[11px] text-white/80 uppercase">
                    Featured District
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-7 h-7 text-white" />
                    <h2 className="text-[34px] font-bold text-white">
                      {selectedDistrict.name}
                    </h2>
                  </div>
                  <p className="text-white/70 text-[14px]">
                    Highest mining activity
                  </p>
                </div>
                <div className="px-3 py-1 bg-[#34C759] rounded-lg">
                  <p className="text-[12px] font-semibold text-white">
                    {selectedDistrict.trend}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-white/60 text-[11px]">Orders</p>
                  <p className="text-white text-[22px] font-bold">
                    {selectedDistrict.orders}
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-white/60 text-[11px]">Quantity</p>
                  <p className="text-white text-[22px] font-bold">
                    {(selectedDistrict.quantity / 1000).toFixed(0)}K
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-white/60 text-[11px]">Stockyards</p>
                  <p className="text-white text-[22px] font-bold">
                    {selectedDistrict.stockyards}
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-white/60 text-[11px]">Mines</p>
                  <p className="text-white text-[22px] font-bold">
                    {selectedDistrict.mines}
                  </p>
                </div>
              </div>

              <button
                onClick={() => navigate("/map")}
                className="w-full bg-white text-[#1D1D1F] py-3 rounded-xl font-medium"
              >
                View on Map →
              </button>
            </div>

            {/* DISTRICT LIST */}
            <div className="bg-white rounded-2xl border border-[#E5E5EA]">
              {districts.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDistrict(d)}
                  className={`w-full px-6 py-4 flex justify-between items-center transition ${
                    selectedDistrict.id === d.id
                      ? "bg-[#EAF3FF]"
                      : "hover:bg-[#F2F7FF]"
                  }`}
                >
                  <div>
                    <p className="text-[#1D1D1F] font-medium">{d.name}</p>
                    <p className="text-[#6E6E73] text-sm">
                      {d.stockyards} stockyards
                    </p>
                  </div>

                  <ArrowRight className="text-gray-400" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="w-80 space-y-4">

            {/* ORDERS */}
            <div className="bg-[#EAF3FF] text-[#007AFF] rounded-2xl p-5">
              <p className="text-[12px]">Orders</p>
              <p className="text-[28px] font-bold">{totalOrders}</p>
            </div>

            {/* QUANTITY (SAND) */}
            <div className="bg-[#FAF3E0] text-[#9C6B3E] rounded-2xl p-5">
              <p className="text-[12px]">Quantity</p>
              <p className="text-[28px] font-bold">
                {(totalQuantity / 1000).toFixed(0)}K
              </p>
            </div>

            {/* STOCKYARDS */}
            <div className="bg-[#FFF7ED] text-[#C2410C] rounded-2xl p-5">
              <p className="text-[12px]">Stockyards</p>
              <p className="text-[28px] font-bold">{totalStockyards}</p>
            </div>

            {/* MINES */}
            <div className="bg-[#E9F9EE] text-[#248A3D] rounded-2xl p-5">
              <p className="text-[12px]">Mines</p>
              <p className="text-[28px] font-bold">{totalMines}</p>
            </div>

            {/* EO LANDS */}
            <div className="bg-[#EAF4FF] text-[#1E6FD9] rounded-2xl p-5">
              <p className="text-[12px]">EO Lands</p>
              <p className="text-[28px] font-bold">{totalEOLands}</p>
            </div>

            {/* SYSTEM STATUS */}
            <div className="bg-[#1D1D1F] text-white rounded-2xl p-6">
              <p className="text-[13px] mb-2">System Status</p>
              <p className="text-sm text-gray-400">Updated: 2 min ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
