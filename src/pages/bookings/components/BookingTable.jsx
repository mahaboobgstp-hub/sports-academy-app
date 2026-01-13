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
    <tr key={b.id}>
      {/* Booking ID */}
      <td>
        <span className="booking-id">{b.id}</span>
      </td>

      <td>{b.student}</td>
      <td>{b.program}</td>
      <td>{b.batch}</td>
      <td>{b.start}</td>
      <td>{b.end}</td>

      {/* Sessions Left */}
      <td className={b.sessionsLeft === 0 ? "sessions-zero" : ""}>
        {b.sessionsLeft}
      </td>

      {/* Payment Status */}
      <td className={`payment-${b.payment.toLowerCase()}`}>
        {b.payment}
      </td>

      {/* Booking Status */}
      <td>
        <span className={`status-pill status-${b.status.toLowerCase()}`}>
          {b.status}
        </span>
      </td>

      {/* Action */}
      <td>
        <button
          className="manage-btn"
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
