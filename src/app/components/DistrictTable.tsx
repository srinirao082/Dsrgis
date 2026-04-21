import { useState } from "react";
import { useNavigate } from "react-router";
import { Search, ArrowUpDown, ChevronRight, Map } from "lucide-react";

interface District {
  id: number;
  name: string;
  stockyards: number;
  orders: number;
  quantity: number;
  mines: number;
  eoLands: number;
  reservoirs: number;
}

interface DistrictTableProps {
  districts: District[];
}

export function DistrictTable({ districts }: DistrictTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredDistricts = districts.filter((d) =>
    d.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <h3 className="text-[17px] font-semibold text-gray-900">District Overview</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search districts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-1.5 bg-gray-50 border-0 rounded-lg text-[13px] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="px-6 py-3 text-left text-[12px] font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1">
                  District
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-[12px] font-medium text-gray-500 uppercase tracking-wider">
                Stockyards
              </th>
              <th className="px-6 py-3 text-left text-[12px] font-medium text-gray-500 uppercase tracking-wider">
                Orders
              </th>
              <th className="px-6 py-3 text-left text-[12px] font-medium text-gray-500 uppercase tracking-wider">
                Quantity (MT)
              </th>
              <th className="px-6 py-3 text-left text-[12px] font-medium text-gray-500 uppercase tracking-wider">
                Mines
              </th>
              <th className="px-6 py-3 text-left text-[12px] font-medium text-gray-500 uppercase tracking-wider">
                EO Lands
              </th>
              <th className="px-6 py-3 text-left text-[12px] font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredDistricts.map((district) => (
              <tr
                key={district.id}
                onClick={() => navigate(`/district/${district.id}`)}
                className="hover:bg-gray-50/80 transition-colors cursor-pointer group"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                      <span className="text-[12px] font-semibold text-blue-700">
                        {district.name.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-[14px] font-medium text-gray-900">{district.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px] text-gray-700">
                  {district.stockyards}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px] text-gray-700">
                  {district.orders.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px] text-gray-700">
                  {district.quantity.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px] text-gray-700">
                  {district.mines}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px] text-gray-700">
                  {district.eoLands}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate('/map', { state: { district: district.name } });
                      }}
                      className="p-1.5 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <Map className="w-4 h-4 text-blue-600" />
                    </button>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
        <p className="text-[13px] text-gray-500">
          Showing {filteredDistricts.length} of {districts.length} districts
        </p>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 text-[13px] text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            Previous
          </button>
          <button className="px-3 py-1.5 text-[13px] text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
