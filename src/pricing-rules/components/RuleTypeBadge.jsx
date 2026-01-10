export default function RuleTypeBadge({ type }) {
  const colorMap = {
    Discount: "bg-blue-100 text-blue-700",
    EarlyBird: "bg-green-100 text-green-700",
    Coupon: "bg-purple-100 text-purple-700",
    Dynamic: "bg-orange-100 text-orange-700"
  };

  return (
    <span
      className={`px-2 py-1 text-xs rounded-lg ${
        colorMap[type] || "bg-gray-100 text-gray-700"
      }`}
    >
      {type}
    </span>
  );
}
