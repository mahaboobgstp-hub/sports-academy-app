import { Routes, Route, Navigate } from "react-router-dom";

/* Layout */
import SalesLayout from "../layout/SalesLayout";

/* Sales Pages */
import Payments from "../pages/sales/Payments";
import ProductSales from "../pages/sales/ProductSales";
//import Invoices from "../pages/sales/Invoices";
import Invoices from "../modules/invoices/pages/CreateInvoice";

export default function SalesRoutes() {
  return (
    <Routes>
      <Route path="/sales" element={<SalesLayout />}>
        {/* Default redirect */}
        <Route index element={<Navigate to="payments" replace />} />

        {/* Sales sub-modules */}
        <Route path="payments" element={<Payments />} />
        <Route path="product-sales" element={<ProductSales />} />
        <Route path="CreateInvoice" element={<Invoices />} />
      </Route>
    </Routes>
  );
}
