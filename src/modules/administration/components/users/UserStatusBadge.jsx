export default function UserStatusBadge({ status }) {
  const styles =
    status === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-gray-200 text-gray-700";

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${styles}`}
    >
      {status}
    </span>
  );
}

