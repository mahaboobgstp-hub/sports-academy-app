export default function ClassStatusBadge({ status }) {
  const styles =
    status === "Paused"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";

  return (
    <span className={`px-2 py-1 text-xs rounded-full font-medium ${styles}`}>
      {status}
    </span>
  );
}
