import { Outlet, NavLink } from "react-router-dom";

export default function SalesLayout() {
  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded text-sm font-medium transition
     ${isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"}`;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Sales</h2>
        </div>

        <nav className="p-2 space-y-1">
          <NavLink to="/sales/payments" className={linkClass}>
            Payments
          </NavLink>

          <NavLink to="/sales/product-sales" className={linkClass}>
            Product Sales
          </NavLink>

          <NavLink to="/pages/invoiceview" className={linkClass}>
            Invoices
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
