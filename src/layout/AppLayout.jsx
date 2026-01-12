import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import AppLayout from "./layout/AppLayout";

import "./AppLayout.css";

export default function AppLayout() {
  return (
     <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white">
        SIDEBAR
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
