const MOCK_HISTORY = [
  {
    date: "10-Jan-2026",
    action: "Batch Changed",
    oldValue: "Morning Batch",
    newValue: "Evening Batch",
    user: "Ops Admin",
  },
  {
    date: "05-Jan-2026",
    action: "Booking Created",
    oldValue: "-",
    newValue: "Active",
    user: "System",
  },
];

export default function BookingHistoryModal({ onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal max-w-3xl">
        <h3 className="modal-title">Booking History</h3>

        <table className="w-full text-sm mt-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2 text-left">Date</th>
              <th className="px-3 py-2 text-left">Action</th>
              <th className="px-3 py-2 text-left">Old</th>
              <th className="px-3 py-2 text-left">New</th>
              <th className="px-3 py-2 text-left">User</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_HISTORY.map((h, i) => (
              <tr key={i} className="border-t">
                <td className="px-3 py-2">{h.date}</td>
                <td className="px-3 py-2">{h.action}</td>
                <td className="px-3 py-2">{h.oldValue}</td>
                <td className="px-3 py-2">{h.newValue}</td>
                <td className="px-3 py-2">{h.user}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="modal-footer">
          <button className="btn-primary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
