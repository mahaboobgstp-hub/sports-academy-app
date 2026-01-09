export default function PaymentSummaryCards() {
  const stats = [
    { label: "Total Collected", value: "₹ 4,82,500" },
    { label: "Today’s Collection", value: "₹ 28,000" },
    { label: "Outstanding Dues", value: "₹ 1,12,000" },
    { label: "Refunded Amount", value: "₹ 18,500" }
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <div key={i} className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">{s.label}</p>
          <p className="text-xl font-semibold">{s.value}</p>
        </div>
      ))}
    </div>
  );
}
