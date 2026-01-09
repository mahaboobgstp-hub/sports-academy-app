const MOCK_BOOKINGS = [
  {
    id: "BK001",
    student: "Arjun Kumar",
    program: "Basketball Beginner",
    batch: "Morning Batch",
    start: "01-Jan-2026",
    end: "31-Mar-2026",
    sessionsLeft: 5,
    payment: "Paid",
    status: "Active",
  },
  {
    id: "BK002",
    student: "Rohan Singh",
    program: "Football Foundation",
    batch: "Evening Batch",
    start: "10-Jan-2026",
    end: "10-Apr-2026",
    sessionsLeft: 0,
    payment: "Partial",
    status: "Paused",
  },
];

export default function BookingTable({ onManage }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            {[
              "Booking ID",
              "Student",
              "Program",
              "Batch",
              "Start",
              "End",
              "Sessions Left",
              "Payment",
              "Status",
              "Action",
            ].map((h) => (
              <th key={h} className="px-4 py-2 text-left font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {MOCK_BOOKINGS.map((b) => (
            <tr key={b.id} className="border-t">
              <td className="px-4 py-2 font-mono">{b.id}</td>
              <td className="px-4 py-2">{b.student}</td>
              <td className="px-4 py-2">{b.program}</td>
              <td className="px-4 py-2">{b.batch}</td>
              <td className="px-4 py-2">{b.start}</td>
              <td className="px-4 py-2">{b.end}</td>
              <td className="px-4 py-2">
                <span className={b.sessionsLeft === 0 ? "text-red-600" : ""}>
                  {b.sessionsLeft}
                </span>
              </td>
              <td className="px-4 py-2">{b.payment}</td>
              <td className="px-4 py-2">{b.status}</td>
              <td className="px-4 py-2">
                <button
                  className="btn-link"
                  onClick={() => onManage(b)}
                >
                  Manage
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
