export default function StatusFilter() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 flex flex-wrap gap-4">

      {[
        "Status",
        "Program",
        "Location",
        "Refund Required"
      ].map((label) => (
        <select
          key={label}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>{label}</option>
        </select>
      ))}

    </div>
  );
}
