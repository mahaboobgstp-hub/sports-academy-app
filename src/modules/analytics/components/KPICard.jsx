export default function KPICard({ title, value, trend }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
      {trend && (
        <div className="text-xs mt-1 text-green-600">
          {trend}
        </div>
      )}
    </div>
  );
}
