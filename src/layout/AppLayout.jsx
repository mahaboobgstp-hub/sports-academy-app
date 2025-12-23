import Sidebar from "./Sidebar";

export default function AppLayout({ children }) {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="content">
        {children}
      </div>
    </div>
  );
}
  
