import { useState } from "react";
import { Link } from "react-router";
import { Home, ChevronRight, Layers, Circle, Square, MapPin, Info, Mountain, Droplet, TreePine } from "lucide-react";

export function GISMap() {
  const [activeLayer, setActiveLayer] = useState<string[]>(["sand", "mines"]);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const toggleLayer = (layer: string) => {
    setActiveLayer((prev) =>
      prev.includes(layer) ? prev.filter((l) => l !== layer) : [...prev, layer]
    );
  };

  const layers = [
    { id: "sand", name: "Sand Deposits", icon: Circle, gradient: "from-yellow-500 to-amber-500", bgActive: "bg-gradient-to-r from-yellow-500 to-amber-500" },
    { id: "mines", name: "Mines", icon: Mountain, gradient: "from-orange-500 to-red-500", bgActive: "bg-gradient-to-r from-orange-500 to-red-500" },
    { id: "eolands", name: "EO Lands", icon: Square, gradient: "from-purple-500 to-pink-500", bgActive: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { id: "reservoirs", name: "Reservoirs", icon: Droplet, gradient: "from-blue-500 to-cyan-500", bgActive: "bg-gradient-to-r from-blue-500 to-cyan-500" },
    { id: "forest", name: "Forest Cover", icon: TreePine, gradient: "from-emerald-500 to-teal-500", bgActive: "bg-gradient-to-r from-emerald-500 to-teal-500" },
  ];

  return (
    <div className="h-[calc(100vh-56px)] flex bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      <div className="w-80 bg-white/95 backdrop-blur-xl border-r border-gray-200/50 flex flex-col shadow-sm">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-2 text-[12px] text-gray-500 mb-4">
            <Link to="/" className="hover:text-indigo-600 transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              Dashboard
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">GIS Map</span>
          </div>
          <h2 className="text-[18px] font-semibold text-gray-900">Map Controls</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h3 className="text-[11px] font-medium text-gray-500 uppercase tracking-wide mb-3">
              District Filter
            </h3>
            <select className="w-full px-3 py-2.5 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl text-[13px] focus:outline-none focus:ring-2 focus:ring-indigo-500/30 font-medium">
              <option>All Districts</option>
              <option>Hyderabad</option>
              <option>Warangal</option>
              <option>Khammam</option>
            </select>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">
                Active Layers
              </h3>
              <Layers className="w-4 h-4 text-gray-400" />
            </div>
            <div className="space-y-2.5">
              {layers.map((layer) => {
                const Icon = layer.icon;
                const isActive = activeLayer.includes(layer.id);
                return (
                  <button
                    key={layer.id}
                    onClick={() => toggleLayer(layer.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      isActive
                        ? layer.bgActive + " shadow-md text-white"
                        : "bg-gray-50 border border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                    <span className={`text-[13px] font-medium flex-1 text-left ${isActive ? 'text-white' : 'text-gray-900'}`}>
                      {layer.name}
                    </span>
                    {isActive && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-[11px] font-medium text-gray-500 uppercase tracking-wide mb-3">
              Drawing Tools
            </h3>
            <div className="flex gap-2">
              <button className="flex-1 px-3 py-3 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all">
                <MapPin className="w-4 h-4 text-indigo-600 mx-auto" />
              </button>
              <button className="flex-1 px-3 py-3 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl hover:from-purple-100 hover:to-pink-100 transition-all">
                <Circle className="w-4 h-4 text-purple-600 mx-auto" />
              </button>
              <button className="flex-1 px-3 py-3 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl hover:from-emerald-100 hover:to-teal-100 transition-all">
                <Square className="w-4 h-4 text-emerald-600 mx-auto" />
              </button>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-2xl text-white shadow-lg">
            <div className="flex items-start gap-2 mb-3">
              <Info className="w-4 h-4 text-white mt-0.5" />
              <h4 className="text-[13px] font-semibold">Map Legend</h4>
            </div>
            <ul className="space-y-2 mt-3">
              {layers.map((layer) => {
                const Icon = layer.icon;
                return (
                  <li key={layer.id} className="flex items-center gap-2.5 text-[12px] text-white/90">
                    <Icon className="w-3 h-3" />
                    {layer.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex-1 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-100/50 to-purple-100/30 flex items-center justify-center">
          <div className="text-center">
            <div className="w-28 h-28 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-3xl shadow-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-14 h-14 text-white" />
            </div>
            <h3 className="text-[24px] font-bold text-gray-900 mb-3">
              Interactive GIS Map
            </h3>
            <p className="text-[14px] text-gray-600 max-w-md leading-relaxed">
              Map integration would display selected layers with interactive features.
              Click on any feature to view detailed information in the side panel.
            </p>
          </div>
        </div>

        <div className="absolute top-6 left-6 flex gap-3">
          <button className="px-5 py-2.5 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-xl shadow-lg hover:bg-white hover:shadow-xl transition-all text-[13px] font-semibold text-gray-900">
            Satellite View
          </button>
          <button className="px-5 py-2.5 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-xl shadow-lg hover:bg-white hover:shadow-xl transition-all text-[13px] font-semibold text-gray-900">
            Terrain View
          </button>
        </div>

        <div className="absolute bottom-6 left-6 px-5 py-3 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-xl shadow-lg">
          <p className="text-[11px] font-medium text-gray-600 uppercase tracking-wide">
            Scale: 1:50,000 | Projection: WGS84
          </p>
        </div>
      </div>

      <div className="w-96 bg-white/95 backdrop-blur-xl border-l border-gray-200/50 p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <Info className="w-5 h-5 text-indigo-500" />
          <h3 className="text-[16px] font-semibold text-gray-900">Feature Details</h3>
        </div>

        {selectedFeature ? (
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
              <p className="text-[11px] font-medium text-blue-700 uppercase tracking-wide mb-2">Feature Type</p>
              <p className="text-[16px] font-bold text-gray-900">Sand Deposit</p>
            </div>
            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
              <p className="text-[11px] font-medium text-purple-700 uppercase tracking-wide mb-2">Location</p>
              <p className="text-[16px] font-bold text-gray-900">
                17.3850° N, 78.4867° E
              </p>
            </div>
            <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200">
              <p className="text-[11px] font-medium text-emerald-700 uppercase tracking-wide mb-2">Classification</p>
              <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-[12px] font-bold bg-emerald-500 text-white shadow-md">
                Safe Zone
              </span>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-9 h-9 text-gray-400" />
            </div>
            <p className="text-[13px] text-gray-600 font-medium">
              Select a feature on the map
            </p>
            <p className="text-[12px] text-gray-500 mt-1">
              to view detailed information
            </p>
          </div>
        )}

        <div className="mt-6 p-5 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl text-white shadow-lg">
          <h4 className="text-[13px] font-semibold mb-4">
            Environmental Status
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[12px] text-white/90">Forest Proximity</span>
              <span className="text-[13px] font-bold text-white">2.3 km</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[12px] text-white/90">Water Distance</span>
              <span className="text-[13px] font-bold text-white">1.1 km</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[12px] text-white/90">Compliance</span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-500 text-white shadow-md">
                Approved
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
