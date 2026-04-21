import { Search, Calendar, User, Map } from "lucide-react";
import { Link } from "react-router";

export function Navigation() {
  return (
    <nav className="bg-white/90 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1600px] mx-auto px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-lg flex items-center justify-center shadow-md">
            <Map className="w-4 h-4 text-white" />
          </div>
          <Link to="/" className="text-[14px] font-semibold text-gray-900 tracking-tight">
            DSR Sand Mining Platform
          </Link>
        </div>

        <div className="flex-1 max-w-lg mx-8">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search district, stockyard, or order..."
              className="w-full pl-11 pr-4 py-2 bg-gray-100 border-0 rounded-xl text-[13px] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:bg-white transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <Calendar className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-[12px] font-medium text-gray-700">Last 30 days</span>
          </button>
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-md">
            <User className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
}
