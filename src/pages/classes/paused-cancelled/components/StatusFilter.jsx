export default function StatusFilter() {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex gap-4 flex-wrap">

      <select className="border rounded-lg px-3 py-2 text-sm">
        <option>Status</option>
        <option>Paused</option>
        <option>Cancelled</option>
      </select>

      <select className="border rounded-lg px-3 py-2 text-sm">
        <option>Program</option>
        <option>Basketball</option>
        <option>Football</option>
      </select>

      <select className="border rounded-lg px-3 py-2 text-sm">
        <option>Location</option>
        <option>Main Ground</option>
        <option>Indoor Arena</option>
      </select>

      <select className="border rounded-lg px-3 py-2 text-sm">
        <option>Refund Required</option>
        <option>Yes</option>
        <option>No</option>
      </select>

    </div>
  );
}
