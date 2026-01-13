export default function PaymentSummaryCards() {
  const stats = [
    { label: "Total Collected", value: "₹ 4,82,500" },
    { label: "Today’s Collection", value: "₹ 28,000" },
    { label: "Outstanding Dues", value: "₹ 1,12,000" },
    { label: "Refunded Amount", value: "₹ 18,500" }
  ];

  return (
    <div className="payment-summary">
      {stats.map((s, i) => (
        <div key={i} className="summary-card">
          <div className="summary-label">{s.label}</div>
          <div className="summary-value">{s.value}</div>
        </div>
      ))}
    </div>
  );
}
