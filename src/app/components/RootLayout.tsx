import { Outlet } from "react-router";
import { Navigation } from "./Navigation";

export function RootLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      <Navigation />
      <Outlet />
    </div>
  );
}
