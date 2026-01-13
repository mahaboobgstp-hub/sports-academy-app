import PaymentSummaryCards from "./components/PaymentSummaryCards";
import PaymentFilters from "./components/PaymentFilters";
import PaymentsTable from "./components/PaymentsTable";
import "./payments.css";

export default function Payments() {
  return (
   <div className="payments-page">
      <h1 className="payments-title">Payments</h1>

      <PaymentSummaryCards />

      <PaymentFilters />

      <PaymentsTable />
    </div>
  );
}
