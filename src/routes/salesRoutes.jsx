import { Routes, Route, Navigate } from "react-router-dom";

import SalesLayout from "../layouts/SalesLayout";
import Payments from "../pages/sales/Payments";
import ProductSales from "../pages/sales/ProductSales";
import Invoices from "../pages/sales/Invoices";

export default function SalesRoutes() {
  return (
    <Routes>
      <Route path="/sales" element={<SalesLayout />}>
        <Route index element={<Navigate to="payments" />} />

        <Route path="payments" element={<Payments />} />
        <Route path="product-sales" element={<ProductSales />} />
        <Route path="invoices" element={<Invoices />} />
      </Route>
    </Routes>
  );
}
