import PaymentSummaryCards from "./components/PaymentSummaryCards";
import PaymentFilters from "./components/PaymentFilters";
import PaymentsTable from "./components/PaymentsTable";


export default function Payments() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Payments</h1>

      <PaymentSummaryCards />

      <PaymentFilters />

      <PaymentsTable />
    </div>
  );
}
