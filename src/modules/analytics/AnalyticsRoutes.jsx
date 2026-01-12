import { Routes, Route, Navigate } from "react-router-dom";

import Overview from "./Overview";
import Utilization from "./Utilization";
import ProgramPerformance from "./ProgramPerformance";
import LocationPerformance from "./LocationPerformance";
import SalesExecutive from "./SalesExecutive";

export default function AnalyticsRoutes() {
  return (
    <Routes>
      {/* Default redirect */}
      <Route index element={<Navigate to="overview" replace />} />

      <Route path="overview" element={<Overview />} />
      <Route path="utilization" element={<Utilization />} />
      <Route path="program-performance" element={<ProgramPerformance />} />
      <Route path="location-performance" element={<LocationPerformance />} />
      <Route path="sales-executive" element={<SalesExecutive />} />
    </Routes>
  );
}
