export default function PayrollSummary({ summary }) {
  return (
    <div style={{ margin: "16px 0" }}>
      <strong>Total Employees:</strong> {summary.count} |
      <strong> Total Payout:</strong> ₹{summary.total}
    </div>
  );
}
