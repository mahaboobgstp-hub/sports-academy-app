export default function ClassStatusBadge({ status }) {
  const base = "px-3 py-1 rounded-full text-xs font-semibold";

  if (status === "Paused") {
    return <span className={`${base} bg-yellow-100 text-yellow-800`}>Paused</span>;
  }

  return <span className={`${base} bg-red-100 text-red-700`}>Cancelled</span>;
}
