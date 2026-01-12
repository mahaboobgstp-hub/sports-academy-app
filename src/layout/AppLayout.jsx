import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar */}
     
 <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
      {/* MAIN CONTENT AREA */}
      <div className="flex-1 overflow-y-auto bg-gray-100 p-6">
        <Outlet />
      </div>
    </div>
  );
}
  
