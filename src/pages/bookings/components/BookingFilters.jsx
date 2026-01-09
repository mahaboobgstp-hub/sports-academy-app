export default function BookingFilters() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-3 bg-white p-4 rounded-xl shadow">
      <input className="input" placeholder="Student Name / ID" />
      <input className="input" placeholder="Phone / Email" />
      <select className="input">
        <option>Program</option>
      </select>
      <select className="input">
        <option>Batch</option>
      </select>
      <select className="input">
        <option>Status</option>
        <option>Active</option>
        <option>Paused</option>
        <option>Cancelled</option>
      </select>
      <div className="flex gap-2">
        <button className="btn-secondary w-full">Reset</button>
        <button className="btn-primary w-full">Apply</button>
      </div>
    </div>
  );
}
