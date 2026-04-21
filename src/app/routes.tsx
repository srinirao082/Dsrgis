import { createBrowserRouter } from "react-router";
import { Dashboard } from "./pages/Dashboard";
import { DistrictDetail } from "./pages/DistrictDetail";
import { StockyardDetail } from "./pages/StockyardDetail";
import { GISMap } from "./pages/GISMap";
import { RootLayout } from "./components/RootLayout";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: RootLayout,
      children: [
        { index: true, Component: Dashboard },
        { path: "district/:districtId", Component: DistrictDetail },
        { path: "stockyard/:stockyardId", Component: StockyardDetail },
        { path: "map", Component: GISMap },
      ],
    },
  ],
  {
    basename: "/Dsrgis/",   // ✅ ADD THIS
  }
);
