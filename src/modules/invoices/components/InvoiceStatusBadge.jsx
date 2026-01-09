export default function InvoiceStatusBadge({ status }) {
  const statusStyles = {
    DRAFT: "bg-gray-200 text-gray-700",
    ISSUED: "bg-blue-100 text-blue-700",
    PAID: "bg-green-100 text-green-700",
    OVERDUE: "bg-red-100 text-red-700",
    CANCELLED: "bg-gray-400 text-white"
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
